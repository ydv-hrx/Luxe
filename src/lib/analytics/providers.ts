/**
 * Analytics Providers Implementation for GA4, GTM, Meta Pixel, Clarity, and Sentry
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    Sentry?: unknown;
  }
}

export interface ConsentSettings {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const DEFAULT_CONSENT: ConsentSettings = {
  analytics: true,
  marketing: true,
  functional: true,
};

const CONSENT_STORAGE_KEY = 'luxe_cookie_consent_v1';

export function getStoredConsent(): ConsentSettings | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_err) {
    return null;
  }
}

export function setStoredConsent(consent: ConsentSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch (_err) {}
}

/** Initialize GA4, Meta Pixel, and Clarity dynamically after consent */
export function initAnalyticsProviders(consent: ConsentSettings): void {
  if (typeof window === 'undefined') return;

  if (consent.analytics) {
    // 1. Initialize GA4 DataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-LUXE123456', {
      send_page_view: false,
    });

    // 2. Initialize Microsoft Clarity
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function (...args: any[]) {
          (c[a].q = c[a].q || []).push(args);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + (process.env.NEXT_PUBLIC_CLARITY_ID || 'luxe_clarity_id');
      y = l.getElementsByTagName(r)[0];
      if (y && y.parentNode) y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', 'luxe');
  }

  if (consent.marketing) {
    // 3. Initialize Meta Pixel
    (function (f: any, b: any, e: any, v: any) {
      if (f.fbq) return;
      const n: any = (f.fbq = function (...args: any[]) {
        if (n.callMethod) {
          n.callMethod(...args);
        } else {
          n.queue.push(args);
        }
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      const t = b.createElement(e);
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    if (window.fbq) {
      window.fbq('init', process.env.NEXT_PUBLIC_META_PIXEL_ID || '1234567890');
    }
  }
}
