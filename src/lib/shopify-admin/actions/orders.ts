'use server';

import { ActionResult, AdminOrder } from '../types';
import { ordersAdminService } from '../services/orders/service';

export async function getAdminOrdersAction(
  first = 25,
  after?: string,
  query?: string
): Promise<ActionResult<{ orders: AdminOrder[]; pageInfo: unknown }>> {
  try {
    const data = await ordersAdminService.getOrders(first, after, query);
    return { success: true, data };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch orders',
      code: (err as { code?: string })?.code || 'GET_ORDERS_ERROR',
    };
  }
}

export async function closeAdminOrderAction(orderId: string): Promise<ActionResult<AdminOrder>> {
  try {
    const order = await ordersAdminService.closeOrder(orderId);
    return { success: true, data: order };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to close order',
      code: (err as { code?: string })?.code || 'CLOSE_ORDER_ERROR',
    };
  }
}
