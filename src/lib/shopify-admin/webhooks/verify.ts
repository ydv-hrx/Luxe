import 'server-only';
import crypto from 'crypto';

/**
 * Verifies incoming Shopify webhook HMAC-SHA256 signature
 */
export function verifyShopifyWebhook(
  rawBody: string,
  hmacHeader: string | null,
  secret = process.env.SHOPIFY_WEBHOOK_SECRET || ''
): boolean {
  if (!hmacHeader || !secret) {
    return false;
  }

  try {
    const hash = crypto.createHmac('sha256', secret).update(rawBody, 'utf8').digest('base64');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmacHeader));
  } catch (_err) {
    return false;
  }
}
