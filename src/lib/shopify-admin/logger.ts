import 'server-only';

export interface LogPayload {
  operationName: string;
  durationMs: number;
  statusCode: number;
  retryCount: number;
  requestId?: string;
  error?: string;
}

/**
 * Production API Logger with secret token redaction and execution telemetry
 */
class ShopifyAdminLogger {
  private redactSecrets(input: string): string {
    return input.replace(/shpat_[a-f0-9]+/gi, '[REDACTED_SHOPIFY_TOKEN]');
  }

  logRequest(payload: LogPayload): void {
    const timestamp = new Date().toISOString();
    const safeError = payload.error ? this.redactSecrets(payload.error) : undefined;

    const logMessage = `[Shopify Admin API] ${timestamp} | Op: ${payload.operationName} | Duration: ${payload.durationMs}ms | Status: ${payload.statusCode} | Retries: ${payload.retryCount}${payload.requestId ? ` | ReqId: ${payload.requestId}` : ''}${safeError ? ` | Error: ${safeError}` : ''}`;

    if (payload.statusCode >= 400 || safeError) {
      console.error(`❌ ${logMessage}`);
    } else {
      console.log(`✅ ${logMessage}`);
    }
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    console.warn(`⚠️ [Shopify Admin Warning] ${message}`, meta ? JSON.stringify(meta) : '');
  }

  error(message: string, error?: unknown): void {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error(`🔥 [Shopify Admin Exception] ${message}: ${this.redactSecrets(errMsg)}`);
  }
}

export const shopifyLogger = new ShopifyAdminLogger();
