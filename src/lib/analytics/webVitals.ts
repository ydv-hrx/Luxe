import { analytics } from './index';

export function reportWebVitals(metric: any): void {
  const { id, name, label, value } = metric;

  // Track Core Web Vitals in GA4 & Observability
  analytics.track('web_vitals', {
    event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    event_action: name,
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
  });

  // Log slow API requests or LCP degradation
  if (name === 'LCP' && value > 2500) {
    analytics.error(`Slow LCP detected: ${value}ms`, { metricId: id, metricValue: value });
  }

  if (name === 'TTFB' && value > 800) {
    analytics.error(`Slow TTFB detected: ${value}ms`, { metricId: id, metricValue: value });
  }
}
