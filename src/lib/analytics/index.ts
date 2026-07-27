import { getStoredConsent, DEFAULT_CONSENT } from './providers';

export interface EventProperties {
  [key: string]: unknown;
}

class UnifiedAnalytics {
  private isEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    const consent = getStoredConsent() || DEFAULT_CONSENT;
    return consent.analytics;
  }

  page(pageName: string, properties: EventProperties = {}): void {
    if (!this.isEnabled()) return;

    const payload = { page_title: pageName, page_location: window.location.href, ...properties };

    // 1. Dispatch GA4 page_view
    if (window.gtag) {
      window.gtag('event', 'page_view', payload);
    }

    // 2. Dispatch Meta Pixel PageView
    if (window.fbq) {
      window.fbq('track', 'PageView', payload);
    }

    // 3. Dispatch GTM DataLayer
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'page_view', pageName, ...properties });
    }
  }

  track(eventName: string, properties: EventProperties = {}): void {
    if (!this.isEnabled()) return;

    // 1. Dispatch to GA4
    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }

    // 2. Dispatch to Meta Pixel
    if (window.fbq) {
      const metaEvents: Record<string, string> = {
        view_item: 'ViewContent',
        search: 'Search',
        add_to_cart: 'AddToCart',
        begin_checkout: 'InitiateCheckout',
        sign_up: 'CompleteRegistration',
      };
      if (metaEvents[eventName]) {
        window.fbq('track', metaEvents[eventName], properties);
      }
    }

    // 3. Dispatch to GTM
    if (window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...properties });
    }
  }

  identify(userId: string, _traits: EventProperties = {}): void {
    if (!this.isEnabled()) return;

    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-LUXE123456', {
        user_id: userId,
      });
    }

    if (window.clarity) {
      window.clarity('set', 'user_id', userId);
    }
  }

  error(error: Error | string, context: EventProperties = {}): void {
    const errorMsg = typeof error === 'string' ? error : error.message;
    console.error('[LUXE Observability Error]', errorMsg, context);

    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: errorMsg,
        fatal: context.fatal || false,
        ...context,
      });
    }

    if (window.Sentry) {
      (window.Sentry as any).captureException(typeof error === 'string' ? new Error(error) : error, {
        extra: context,
      });
    }
  }
}

export const analytics = new UnifiedAnalytics();
