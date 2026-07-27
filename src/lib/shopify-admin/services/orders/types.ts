import 'server-only';
import { AdminOrder } from '../../types';

export type OrderServiceResult = AdminOrder;
export type OrdersListResult = { orders: AdminOrder[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
