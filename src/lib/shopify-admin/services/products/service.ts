import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_PRODUCTS_QUERY, GET_ADMIN_PRODUCT_BY_ID_QUERY } from './queries';
import { CREATE_ADMIN_PRODUCT_MUTATION, UPDATE_ADMIN_PRODUCT_MUTATION, DELETE_ADMIN_PRODUCT_MUTATION } from './mutations';
import { AdminProduct } from '../../types';
import { parseConnection } from '../../pagination';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateProducts } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';
import { ProductInput } from '../../validation';

function transformShopifyAdminProduct(node: any): AdminProduct {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description || '',
    vendor: node.vendor || 'Luxora Atelier',
    productType: node.productType || 'Apparel',
    status: node.status || 'ACTIVE',
    tags: node.tags || [],
    totalInventory: node.totalInventory || 0,
    featuredImage: node.featuredImage
      ? { id: node.featuredImage.id, url: node.featuredImage.url, altText: node.featuredImage.altText || node.title }
      : undefined,
    priceRange: {
      minVariantPrice: {
        amount: parseFloat(node.priceRangeV2?.minVariantPrice?.amount || '0'),
        currencyCode: node.priceRangeV2?.minVariantPrice?.currencyCode || 'USD',
      },
      maxVariantPrice: {
        amount: parseFloat(node.priceRangeV2?.maxVariantPrice?.amount || '0'),
        currencyCode: node.priceRangeV2?.maxVariantPrice?.currencyCode || 'USD',
      },
    },
    createdAt: node.createdAt,
    updatedAt: node.updatedAt,
  };
}

export class ProductsAdminService {
  async getProducts(first = 25, after?: string, query?: string): Promise<{ products: AdminProduct[]; pageInfo: any }> {
    const data = await executeGraphQL<any>({
      query: GET_ADMIN_PRODUCTS_QUERY,
      variables: { first, after, query },
      tags: [CACHE_TAGS.PRODUCTS],
      revalidate: 60,
    });

    const parsed = parseConnection(data.products, transformShopifyAdminProduct);
    return { products: parsed.items, pageInfo: parsed.pageInfo };
  }

  async getProductById(id: string): Promise<AdminProduct | null> {
    const data = await executeGraphQL<any>({
      query: GET_ADMIN_PRODUCT_BY_ID_QUERY,
      variables: { id },
      tags: [CACHE_TAGS.PRODUCTS, `${CACHE_TAGS.PRODUCTS}-${id}`],
      revalidate: 60,
    });

    if (!data.product) return null;
    return transformShopifyAdminProduct(data.product);
  }

  async createProduct(input: ProductInput): Promise<AdminProduct> {
    const data = await executeGraphQL<any>({
      query: CREATE_ADMIN_PRODUCT_MUTATION,
      variables: { input },
    });

    const userErrors = data.productCreate?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    const created = transformShopifyAdminProduct(data.productCreate.product);
    revalidateProducts(created.id);
    return created;
  }

  async updateProduct(input: ProductInput): Promise<AdminProduct> {
    const data = await executeGraphQL<any>({
      query: UPDATE_ADMIN_PRODUCT_MUTATION,
      variables: { input },
    });

    const userErrors = data.productUpdate?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    const updated = transformShopifyAdminProduct(data.productUpdate.product);
    revalidateProducts(updated.id);
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const data = await executeGraphQL<any>({
      query: DELETE_ADMIN_PRODUCT_MUTATION,
      variables: { input: { id } },
    });

    const userErrors = data.productDelete?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    revalidateProducts(id);
    return true;
  }
}

export const productsAdminService = new ProductsAdminService();
