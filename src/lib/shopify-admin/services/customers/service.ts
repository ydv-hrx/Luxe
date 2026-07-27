import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_CUSTOMERS_QUERY } from './queries';
import { UPDATE_ADMIN_CUSTOMER_MUTATION } from './mutations';
import { AdminCustomer } from '../../types';
import { parseConnection } from '../../pagination';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateCustomers } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';
import { CustomerInput } from '../../validation';

function transformShopifyAdminCustomer(node: any): AdminCustomer {
  return {
    id: node.id,
    firstName: node.firstName || 'Client',
    lastName: node.lastName || 'Vane',
    email: node.email || '',
    phone: node.phone || undefined,
    ordersCount: node.ordersCount || 0,
    totalSpent: {
      amount: parseFloat(node.totalSpentV2?.amount || '0'),
      currencyCode: node.totalSpentV2?.currencyCode || 'USD',
    },
    createdAt: node.createdAt,
  };
}

export class CustomersAdminService {
  async getCustomers(first = 25, after?: string, query?: string): Promise<{ customers: AdminCustomer[]; pageInfo: any }> {
    const data = await executeGraphQL<any>({
      query: GET_ADMIN_CUSTOMERS_QUERY,
      variables: { first, after, query },
      tags: [CACHE_TAGS.CUSTOMERS],
      revalidate: 60,
    });

    const parsed = parseConnection(data.customers, transformShopifyAdminCustomer);
    return { customers: parsed.items, pageInfo: parsed.pageInfo };
  }

  async updateCustomer(input: CustomerInput): Promise<AdminCustomer> {
    const data = await executeGraphQL<any>({
      query: UPDATE_ADMIN_CUSTOMER_MUTATION,
      variables: { input },
    });

    const userErrors = data.customerUpdate?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    const updated = transformShopifyAdminCustomer(data.customerUpdate.customer);
    revalidateCustomers(updated.id);
    return updated;
  }
}

export const customersAdminService = new CustomersAdminService();
