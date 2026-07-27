'use server';

import { ActionResult, AdminProduct } from '../types';
import { productInputSchema, ProductInput } from '../validation';
import { productsAdminService } from '../services/products/service';

export async function getAdminProductsAction(
  first = 25,
  after?: string,
  query?: string
): Promise<ActionResult<{ products: AdminProduct[]; pageInfo: unknown }>> {
  try {
    const data = await productsAdminService.getProducts(first, after, query);
    return { success: true, data };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch products',
      code: (err as { code?: string })?.code || 'GET_PRODUCTS_ERROR',
    };
  }
}

export async function createAdminProductAction(rawInput: ProductInput): Promise<ActionResult<AdminProduct>> {
  try {
    const validated = productInputSchema.parse(rawInput);
    const product = await productsAdminService.createProduct(validated);
    return { success: true, data: product };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to create product',
      code: (err as { code?: string })?.code || 'CREATE_PRODUCT_ERROR',
    };
  }
}

export async function updateAdminProductAction(rawInput: ProductInput): Promise<ActionResult<AdminProduct>> {
  try {
    const validated = productInputSchema.parse(rawInput);
    const product = await productsAdminService.updateProduct(validated);
    return { success: true, data: product };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to update product',
      code: (err as { code?: string })?.code || 'UPDATE_PRODUCT_ERROR',
    };
  }
}

export async function deleteAdminProductAction(id: string): Promise<ActionResult<boolean>> {
  try {
    const deleted = await productsAdminService.deleteProduct(id);
    return { success: true, data: deleted };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to delete product',
      code: (err as { code?: string })?.code || 'DELETE_PRODUCT_ERROR',
    };
  }
}
