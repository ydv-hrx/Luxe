import 'server-only';
import { shopifyAdminFetch, AdminFetchOptions } from './client';

export interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string; locations?: unknown[]; path?: string[] }[];
}

/**
 * Reusable GraphQL query execution wrapper
 */
export async function executeGraphQL<TData, TVariables = Record<string, unknown>>(
  options: AdminFetchOptions<TVariables>
): Promise<TData> {
  return shopifyAdminFetch<TData, TVariables>(options);
}
