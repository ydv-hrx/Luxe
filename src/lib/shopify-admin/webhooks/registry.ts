import 'server-only';
import { handleProductWebhook } from './handlers/products';
import { handleOrderWebhook } from './handlers/orders';
import { handleInventoryWebhook } from './handlers/inventory';

export type WebhookHandler = (topic: string, payload: unknown) => Promise<void>;

export const WEBHOOK_REGISTRY: Record<string, WebhookHandler> = {
  'products/create': handleProductWebhook,
  'products/update': handleProductWebhook,
  'products/delete': handleProductWebhook,
  'orders/create': handleOrderWebhook,
  'orders/updated': handleOrderWebhook,
  'orders/fulfilled': handleOrderWebhook,
  'orders/paid': handleOrderWebhook,
  'inventory_levels/update': handleInventoryWebhook,
};
