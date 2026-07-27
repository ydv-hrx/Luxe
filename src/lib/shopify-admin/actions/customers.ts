'use server';

import { ActionResult, AdminCustomer } from '../types';
import { customerInputSchema, CustomerInput } from '../validation';
import { customersAdminService } from '../services/customers/service';

export async function getAdminCustomersAction(
  first = 25,
  after?: string,
  query?: string
): Promise<ActionResult<{ customers: AdminCustomer[]; pageInfo: unknown }>> {
  try {
    const data = await customersAdminService.getCustomers(first, after, query);
    return { success: true, data };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch customers',
      code: (err as { code?: string })?.code || 'GET_CUSTOMERS_ERROR',
    };
  }
}

export async function updateAdminCustomerAction(rawInput: CustomerInput): Promise<ActionResult<AdminCustomer>> {
  try {
    const validated = customerInputSchema.parse(rawInput);
    const customer = await customersAdminService.updateCustomer(validated);
    return { success: true, data: customer };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to update customer',
      code: (err as { code?: string })?.code || 'UPDATE_CUSTOMER_ERROR',
    };
  }
}
