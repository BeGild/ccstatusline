import type { RenderContext } from '../types/RenderContext';
import type { Settings } from '../types/Settings';
import type {
    Widget,
    WidgetEditorDisplay,
    WidgetItem
} from '../types/Widget';

export class AirCodeMirrorCreditsWidget implements Widget {
    getDefaultColor(): string { return 'blue'; }
    getDescription(): string { return 'Displays AirCode Mirror credits and plan type'; }
    getDisplayName(): string { return 'AirCode Mirror Credits'; }
    getEditorDisplay(item: WidgetItem): WidgetEditorDisplay {
        return { displayText: this.getDisplayName() };
    }

        render(item: WidgetItem, context: RenderContext, settings: Settings): string | null {
        if (context.isPreview) {
            return item.rawValue ? '💎 12345' : 'Credits: 💎 12345';
        }

        if (!this.isUsingAirCodeMirror()) {
            return null;
        }

        if (!settings.airCodeMirror?.enabled) {
            return null;
        }

        if (!settings.airCodeMirror.cookies) {
            return item.rawValue ? '🍪 需要Cookie' : 'Credits: 🍪 需要Cookie';
        }

        if (!context.airCodeMirrorData) {
            return item.rawValue ? '🔴 数据解析失败' : 'Credits: 🔴 数据解析失败';
        }

        const planIcon = this.getPlanIcon(context.airCodeMirrorData.plan);
        const creditsText = context.airCodeMirrorData.credits.toString();

        return item.rawValue 
            ? `${planIcon} ${creditsText}` 
            : `Credits: ${planIcon} ${creditsText}`;
    }

    private isUsingAirCodeMirror(): boolean {
        const baseUrl = process.env.ANTHROPIC_BASE_URL ?? '';
        return baseUrl.includes('aicodemirror.com');
    }

    private getPlanIcon(plan: string): string {
        const planIcons: Record<string, string> = {
            ULTRA: '👑',
            MAX: '💎',
            PRO: '⭐',
            FREE: '🆓'
        };
        return planIcons[plan] ?? '❓';
    }

    supportsRawValue(): boolean { return true; }
    supportsColors(item: WidgetItem): boolean { return true; }
}