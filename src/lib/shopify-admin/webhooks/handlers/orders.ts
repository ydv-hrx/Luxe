import 'server-only';
import { revalidateOrders } from '../../cache/revalidate';
import { shopifyLogger } from '../../logger';

export async function handleOrderWebhook(topic: string, payload: unknown): Promise<void> {
  shopifyLogger.logRequest({
    operationName: `Webhook:${topic}`,
    durationMs: 0,
    statusCode: 200,
    retryCount: 0,
  });

  const orderId = (payload as { id?: string | number })?.id ? String((payload as { id?: string | number }).id) : undefined;
  revalidateOrders(orderId);
}
