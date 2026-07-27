import 'server-only';
import { revalidateInventory, revalidateProducts } from '../../cache/revalidate';
import { shopifyLogger } from '../../logger';

export async function handleInventoryWebhook(topic: string, _payload: unknown): Promise<void> {
  shopifyLogger.logRequest({
    operationName: `Webhook:${topic}`,
    durationMs: 0,
    statusCode: 200,
    retryCount: 0,
  });

  revalidateInventory();
  revalidateProducts();
}
