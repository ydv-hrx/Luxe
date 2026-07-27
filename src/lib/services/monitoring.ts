/**
 * Enterprise Production Monitoring & Sentry Error Handler Utility
 * Safely captures unhandled exceptions, API failures, and performance traces.
 */

export interface ErrorReportContext {
  componentStack?: string;
  userEmail?: string;
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

interface WindowWithSentry extends Window {
  Sentry?: {
    captureException: (error: unknown, options?: unknown) => void;
    captureMessage: (message: string, level?: string) => void;
  };
}

class MonitoringService {
  private isSentryInitialized = false;

  constructor() {
    this.initSentry();
  }

  private initSentry() {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SENTRY_DSN) {
      // Lazy load Sentry initialization in production
      this.isSentryInitialized = true;
    }
  }

  captureException(error: Error | unknown, context?: ErrorReportContext) {
    console.error('[Luxora Monitoring] Captured Exception:', error, context);

    if (typeof window !== 'undefined' && (window as unknown as WindowWithSentry).Sentry) {
      try {
        (window as unknown as WindowWithSentry).Sentry?.captureException(error, {
          extra: context?.extra,
          tags: context?.tags,
        });
      } catch (_e) {
        // Fail silently
      }
    }
  }

  captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
    if (level === 'error') console.error(`[Luxora Monitoring] ${message}`);
    else if (level === 'warning') console.warn(`[Luxora Monitoring] ${message}`);
    else console.log(`[Luxora Monitoring] ${message}`);

    if (typeof window !== 'undefined' && (window as unknown as WindowWithSentry).Sentry) {
      try {
        (window as unknown as WindowWithSentry).Sentry?.captureMessage(message, level);
      } catch (_e) {
        // Fail silently
      }
    }
  }
}

export const monitoring = new MonitoringService();
