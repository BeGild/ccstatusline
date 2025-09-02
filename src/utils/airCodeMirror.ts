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

    async getCredits(settings: Settings): Promise<AirCodeMirrorData | null> {
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
        }

        return data;
    }

    async checkAndResetCredits(settings: Settings): Promise<boolean> {
        const config = settings.airCodeMirror;
        if (!config?.enabled || !config.autoResetEnabled || !config.cookies) {
            return false;
        }

        const credits = await this.getCredits(settings);
        if (!credits || credits.credits >= config.creditThreshold) {
            return false;
        }

        return await this.triggerCreditReset(config.cookies);
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
}

const airCodeMirrorManager = new AirCodeMirrorManager();

export async function getAirCodeMirrorData(settings: Settings): Promise<AirCodeMirrorData | null> {
    return await airCodeMirrorManager.getCredits(settings);
}

export async function checkAndResetAirCodeMirrorCredits(settings: Settings): Promise<boolean> {
    return await airCodeMirrorManager.checkAndResetCredits(settings);
}