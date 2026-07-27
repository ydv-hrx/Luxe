import 'server-only';
import { verifyShopifyWebhook } from './verify';
import { WEBHOOK_REGISTRY } from './registry';
import { shopifyLogger } from '../logger';

/**
 * Route handler router processing Shopify incoming webhook HTTP requests
 */
export async function processShopifyWebhook(
  rawBody: string,
  topicHeader: string | null,
  hmacHeader: string | null
): Promise<{ success: boolean; statusCode: number; message: string }> {
  if (!verifyShopifyWebhook(rawBody, hmacHeader)) {
    shopifyLogger.warn('Unauthorized Shopify webhook payload HMAC verification failed');
    return { success: false, statusCode: 401, message: 'Invalid HMAC signature' };
  }

  if (!topicHeader) {
    return { success: false, statusCode: 400, message: 'Missing X-Shopify-Topic header' };
  }

  const handler = WEBHOOK_REGISTRY[topicHeader];

  if (!handler) {
    shopifyLogger.warn(`Unhandled Shopify webhook topic: ${topicHeader}`);
    return { success: true, statusCode: 200, message: `Topic ${topicHeader} received (no action taken)` };
  }

  try {
    const payload = JSON.parse(rawBody);
    await handler(topicHeader, payload);
    return { success: true, statusCode: 200, message: `Topic ${topicHeader} processed successfully` };
  } catch (err: unknown) {
    shopifyLogger.error(`Error executing webhook handler for ${topicHeader}`, err);
    return { success: false, statusCode: 500, message: 'Internal server error processing webhook' };
  }
}
