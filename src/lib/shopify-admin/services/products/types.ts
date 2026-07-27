import 'server-only';
import { AdminProduct } from '../../types';

export type ProductServiceResult = AdminProduct;
export type ProductsListResult = { products: AdminProduct[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
