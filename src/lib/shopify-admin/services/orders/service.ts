import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_ORDERS_QUERY } from './queries';
import { CLOSE_ADMIN_ORDER_MUTATION } from './mutations';
import { AdminOrder } from '../../types';
import { parseConnection } from '../../pagination';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateOrders } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';

function transformShopifyAdminOrder(node: any): AdminOrder {
  return {
    id: node.id,
    name: node.name || `#LX-${node.orderNumber}`,
    orderNumber: String(node.orderNumber || '1001'),
    processedAt: node.processedAt,
    displayFulfillmentStatus: node.displayFulfillmentStatus || 'UNFULFILLED',
    displayFinancialStatus: node.displayFinancialStatus || 'PAID',
    totalPrice: {
      amount: parseFloat(node.totalPriceSet?.shopMoney?.amount || '0'),
      currencyCode: node.totalPriceSet?.shopMoney?.currencyCode || 'USD',
    },
    customer: node.customer
      ? {
          id: node.customer.id,
          firstName: node.customer.firstName || 'Anonymous',
          lastName: node.customer.lastName || 'Client',
          email: node.customer.email || '',
        }
      : undefined,
    itemCount: node.lineItems?.edges?.length || 0,
  };
}

export class OrdersAdminService {
  async getOrders(first = 25, after?: string, query?: string): Promise<{ orders: AdminOrder[]; pageInfo: any }> {
    const data = await executeGraphQL<any>({
      query: GET_ADMIN_ORDERS_QUERY,
      variables: { first, after, query },
      tags: [CACHE_TAGS.ORDERS],
      revalidate: 30,
    });

    const parsed = parseConnection(data.orders, transformShopifyAdminOrder);
    return { orders: parsed.items, pageInfo: parsed.pageInfo };
  }

  async closeOrder(orderId: string): Promise<AdminOrder> {
    const data = await executeGraphQL<any>({
      query: CLOSE_ADMIN_ORDER_MUTATION,
      variables: { input: { id: orderId } },
    });

    const userErrors = data.orderClose?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    const updated = transformShopifyAdminOrder(data.orderClose.order);
    revalidateOrders(updated.id);
    return updated;
  }
}

export const ordersAdminService = new OrdersAdminService();
