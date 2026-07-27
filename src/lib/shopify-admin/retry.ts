import 'server-only';
import { RateLimitError, NetworkError, ValidationError } from './errors';

export interface RetryOptions {
  maxRetries?: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
  backoffFactor?: number;
}

/**
 * Exponential backoff with jitter for network failures and rate limits
 */
export async function withRetry<T>(
  fn: (attempt: number) => Promise<T>,
  options: RetryOptions = {}
): Promise<{ result: T; retryCount: number }> {
  const maxRetries = options.maxRetries ?? 3;
  const initialDelay = options.initialDelayMs ?? 300;
  const maxDelay = options.maxDelayMs ?? 3000;
  const factor = options.backoffFactor ?? 2;

  let attempt = 0;

  while (attempt <= maxRetries) {
    try {
      const result = await fn(attempt);
      return { result, retryCount: attempt };
    } catch (err: unknown) {
      // Do not retry validation errors
      if (err instanceof ValidationError) {
        throw err;
      }

      const isRateLimit = err instanceof RateLimitError || (err as { statusCode?: number })?.statusCode === 429;
      const isNetwork = err instanceof NetworkError || (err as { statusCode?: number })?.statusCode === 503;
      const isServerError = (err as { statusCode?: number })?.statusCode ? ((err as { statusCode?: number }).statusCode! >= 500) : false;

      const isRetriable = isRateLimit || isNetwork || isServerError;

      if (!isRetriable || attempt >= maxRetries) {
        throw err;
      }

      attempt++;

      // Compute delay with random jitter
      const baseDelay = Math.min(maxDelay, initialDelay * Math.pow(factor, attempt - 1));
      const jitter = Math.random() * 100;
      const totalDelay = baseDelay + jitter;

      await new Promise((resolve) => setTimeout(resolve, totalDelay));
    }
  }

  throw new NetworkError('Max retry limit exceeded for Shopify Admin request');
}
