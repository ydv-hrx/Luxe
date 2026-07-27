import 'server-only';
import { revalidateProducts } from '../../cache/revalidate';
import { shopifyLogger } from '../../logger';

export async function handleProductWebhook(topic: string, payload: unknown): Promise<void> {
  shopifyLogger.logRequest({
    operationName: `Webhook:${topic}`,
    durationMs: 0,
    statusCode: 200,
    retryCount: 0,
  });

  const productId = (payload as { id?: string | number })?.id ? String((payload as { id?: string | number }).id) : undefined;
  revalidateProducts(productId);
}
