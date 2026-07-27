import 'server-only';
import { AdminCustomer } from '../../types';

export type CustomerServiceResult = AdminCustomer;
export type CustomersListResult = { customers: AdminCustomer[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
