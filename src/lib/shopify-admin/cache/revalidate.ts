import 'server-only';
import { revalidateTag, revalidatePath } from 'next/cache';
import { CACHE_TAGS } from '../constants';

export function revalidateProducts(productId?: string): void {
  revalidateTag(CACHE_TAGS.PRODUCTS, { expire: 0 });
  if (productId) revalidateTag(`${CACHE_TAGS.PRODUCTS}-${productId}`, { expire: 0 });
  revalidatePath('/admin/products');
}

export function revalidateCollections(collectionId?: string): void {
  revalidateTag(CACHE_TAGS.COLLECTIONS, { expire: 0 });
  if (collectionId) revalidateTag(`${CACHE_TAGS.COLLECTIONS}-${collectionId}`, { expire: 0 });
  revalidatePath('/admin/collections');
}

export function revalidateOrders(orderId?: string): void {
  revalidateTag(CACHE_TAGS.ORDERS, { expire: 0 });
  if (orderId) revalidateTag(`${CACHE_TAGS.ORDERS}-${orderId}`, { expire: 0 });
  revalidatePath('/admin/orders');
}

export function revalidateCustomers(customerId?: string): void {
  revalidateTag(CACHE_TAGS.CUSTOMERS, { expire: 0 });
  if (customerId) revalidateTag(`${CACHE_TAGS.CUSTOMERS}-${customerId}`, { expire: 0 });
  revalidatePath('/admin/customers');
}

export function revalidateInventory(): void {
  revalidateTag(CACHE_TAGS.INVENTORY, { expire: 0 });
  revalidatePath('/admin/inventory');
}

export function revalidateHomepage(): void {
  revalidateTag(CACHE_TAGS.HOMEPAGE, { expire: 0 });
  revalidateTag(CACHE_TAGS.BANNERS, { expire: 0 });
  revalidatePath('/admin/banners');
  revalidatePath('/admin/cms');
}

export function revalidateNavigation(): void {
  revalidateTag(CACHE_TAGS.NAVIGATION, { expire: 0 });
  revalidatePath('/admin/navigation');
}

export function revalidateMedia(): void {
  revalidateTag(CACHE_TAGS.MEDIA, { expire: 0 });
  revalidatePath('/admin/media');
}
