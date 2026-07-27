import 'server-only';
import { CACHE_TAGS } from '../constants';

export const ADMIN_CACHE_TAGS = CACHE_TAGS;

export function getProductTag(id: string): string {
  return `${CACHE_TAGS.PRODUCTS}-${id}`;
}

export function getCollectionTag(id: string): string {
  return `${CACHE_TAGS.COLLECTIONS}-${id}`;
}

export function getOrderTag(id: string): string {
  return `${CACHE_TAGS.ORDERS}-${id}`;
}

export function getCustomerTag(id: string): string {
  return `${CACHE_TAGS.CUSTOMERS}-${id}`;
}
