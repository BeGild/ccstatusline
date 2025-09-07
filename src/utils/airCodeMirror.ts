/**
 * AirCodeMirror Integration Utilities
 *
 * API integration patterns inspired by cc-aicodemirror-statusline-plus
 * https://github.com/Bozhu12/cc-aicodemirror-statusline-plus
 */

import type { AirCodeMirrorData } from '../types/RenderContext';
import type { Settings } from '../types/Settings';

interface CreditsCache {
    data: AirCodeMirrorData;
    timestamp: number;
}

class AirCodeMirrorManager {
    private cache: CreditsCache | null = null;

    private isAirCodeMirrorEnvironment(): boolean {
        const baseUrl = process.env.ANTHROPIC_BASE_URL ?? '';
        return baseUrl.includes('aicodemirror.com');
    }

    async getCredits(settings: Settings): Promise<AirCodeMirrorData | null> {
        // Check if we're using AirCodeMirror
        if (!this.isAirCodeMirrorEnvironment()) {
            return null;
        }

        const config = settings.airCodeMirror;
        if (!config?.enabled || !config.cookies) {
            return null;
        }

        if (this.isCacheValid(config.cacheDuration)) {
            return this.cache?.data ?? null;
        }

        const data = await this.fetchCreditsFromAPI(config.cookies);
        if (data) {
            this.updateCache(data);

            // 积分刷新后自动检查是否需要重置
            await this.checkAndTriggerResetIfNeeded(data, config);
        }

        return data;
    }

    async checkAndResetCredits(settings: Settings): Promise<boolean> {
        // 这个方法现在主要用于手动触发重置
        // 日常的积分检查和重置已经集成到 getCredits 方法中

        if (!this.isAirCodeMirrorEnvironment()) {
            return true;
        }

        const config = settings.airCodeMirror;
        if (!config?.enabled || !config.cookies) {
            return false;
        }

        // 强制刷新积分数据（会自动检查并重置）
        this.clearCache();
        const credits = await this.getCredits(settings);

        return credits !== null;
    }

    clearCreditsCache(): void {
        this.clearCache();
    }

    private async fetchCreditsFromAPI(cookies: string): Promise<AirCodeMirrorData | null> {
        try {
            const response = await fetch('https://www.aicodemirror.com/api/user/credits', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Cookie': cookies,
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
                },
                signal: AbortSignal.timeout(3000)
            });

            if (response.ok) {
                const data = await response.json() as AirCodeMirrorData;
                return data;
            }
        } catch {
            // Silent error handling
        }

        return null;
    }

    private async triggerCreditReset(cookies: string): Promise<boolean> {
        try {
            const response = await fetch('https://www.aicodemirror.com/api/user/credit-reset', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Cookie': cookies,
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                    'priority': 'u=1, i'
                },
                signal: AbortSignal.timeout(5000)
            });

            return response.ok;
        } catch {
            return false;
        }
    }

    private isCacheValid(cacheDuration: number): boolean {
        if (!this.cache)
            return false;
        const currentTime = Date.now() / 1000;
        return currentTime - this.cache.timestamp < cacheDuration;
    }

    private updateCache(data: AirCodeMirrorData): void {
        this.cache = {
            data,
            timestamp: Date.now() / 1000
        };
    }

    private async checkAndTriggerResetIfNeeded(data: AirCodeMirrorData, config: NonNullable<Settings['airCodeMirror']>): Promise<void> {
        // 如果未启用自动重置，直接返回
        if (!config.autoResetEnabled) {
            return;
        }

        const currentCredits = data.credits || 0;

        // 如果积分高于阈值，不需要重置
        if (currentCredits >= config.creditThreshold) {
            return;
        }

        // 检查 cookies 是否可用
        if (!config.cookies) {
            return;
        }

        // 积分低于阈值，尝试重置
        const resetSuccess = await this.triggerCreditReset(config.cookies);

        if (resetSuccess) {
            // 重置成功后，清除缓存以确保下次获取最新数据
            this.cache = null;
        }
    }

    private clearCache(): void {
        this.cache = null;
    }
}

const airCodeMirrorManager = new AirCodeMirrorManager();

export async function getAirCodeMirrorData(settings: Settings): Promise<AirCodeMirrorData | null> {
    return await airCodeMirrorManager.getCredits(settings);
}

export async function checkAndResetAirCodeMirrorCredits(settings: Settings): Promise<boolean> {
    return await airCodeMirrorManager.checkAndResetCredits(settings);
}

export function clearAirCodeMirrorCache(): void {
    airCodeMirrorManager.clearCreditsCache();
}