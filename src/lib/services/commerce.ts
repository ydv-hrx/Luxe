import { Product, Collection, FilterState, ProductVariant } from '@/types';
import { MOCK_PRODUCTS, MOCK_COLLECTIONS } from './mockData';
import { shopifyFetch } from './graphql/client';
import {
  GET_PRODUCTS_QUERY,
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_COLLECTION_BY_HANDLE_QUERY,
  PREDICTIVE_SEARCH_QUERY,
} from './graphql/queries';

export interface ICommerceService {
  getProducts(filters?: FilterState): Promise<Product[]>;
  getProductByHandle(handle: string): Promise<Product | null>;
  getFeaturedProducts(): Promise<Product[]>;
  getCollections(): Promise<Collection[]>;
  getCollectionByHandle(handle: string): Promise<Collection | null>;
  searchProducts(query: string): Promise<Product[]>;
}

/** Helper transformer converting GraphQL node to domain Product model */
function transformShopifyProduct(node: any): Product {
  const minPrice = node.priceRange?.minVariantPrice;
  const comparePrice = node.compareAtPriceRange?.minVariantPrice;

  const images =
    node.images?.edges?.map((edge: any) => ({
      url: edge.node.url,
      altText: edge.node.altText || node.title,
    })) || [];

  const variants: ProductVariant[] =
    node.variants?.edges?.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      price: {
        amount: parseFloat(edge.node.price?.amount || '0'),
        currencyCode: edge.node.price?.currencyCode || 'USD',
      },
      compareAtPrice: edge.node.compareAtPrice
        ? {
            amount: parseFloat(edge.node.compareAtPrice.amount),
            currencyCode: edge.node.compareAtPrice.currencyCode,
          }
        : undefined,
      availableForSale: edge.node.availableForSale ?? true,
      selectedOptions: (edge.node.selectedOptions || []).reduce((acc: Record<string, string>, opt: any) => {
        acc[opt.name] = opt.value;
        return acc;
      }, {}),
      image: edge.node.image ? { url: edge.node.image.url, altText: edge.node.image.altText } : undefined,
    })) || [];

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    subtitle: node.productType || 'LUXE Atelier Collection',
    description: node.description || '',
    vendor: node.vendor || 'LUXE Atelier',
    category: node.productType || 'Apparel',
    tags: node.tags || [],
    price: {
      amount: parseFloat(minPrice?.amount || '0'),
      currencyCode: minPrice?.currencyCode || 'USD',
    },
    compareAtPrice: comparePrice
      ? {
          amount: parseFloat(comparePrice.amount),
          currencyCode: comparePrice.currencyCode,
        }
      : undefined,
    images: images.length > 0 ? images : [{ url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', altText: node.title }],
    options: node.options || [],
    variants,
    isNew: node.tags?.includes('New Arrival') || false,
    isBestSeller: node.tags?.includes('Best Seller') || false,
  };
}

class ShopifyCommerceService implements ICommerceService {
  private mockFallback = new MockCommerceService();

  async getProducts(filters?: FilterState): Promise<Product[]> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getProducts(filters);
      }

      let queryStr = '';
      if (filters?.query) queryStr += `${filters.query} `;
      if (filters?.category && filters.category !== 'all') queryStr += `product_type:${filters.category} `;

      const data = await shopifyFetch<any>({
        query: GET_PRODUCTS_QUERY,
        variables: {
          first: 25,
          query: queryStr.trim() || undefined,
        },
      });

      const products = data.products?.edges?.map((e: any) => transformShopifyProduct(e.node)) || [];
      return products.length > 0 ? products : this.mockFallback.getProducts(filters);
    } catch (err) {
      console.warn('Shopify API query failed, falling back to mock dataset:', err);
      return this.mockFallback.getProducts(filters);
    }
  }

  async getProductByHandle(handle: string): Promise<Product | null> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getProductByHandle(handle);
      }

      const data = await shopifyFetch<any>({
        query: GET_PRODUCT_BY_HANDLE_QUERY,
        variables: { handle },
      });

      if (!data.product) return this.mockFallback.getProductByHandle(handle);
      return transformShopifyProduct(data.product);
    } catch (err) {
      return this.mockFallback.getProductByHandle(handle);
    }
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return this.getProducts();
  }

  async getCollections(): Promise<Collection[]> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getCollections();
      }

      const data = await shopifyFetch<any>({
        query: GET_COLLECTIONS_QUERY,
        variables: { first: 10 },
      });

      const collections =
        data.collections?.edges?.map((e: any) => ({
          id: e.node.id,
          handle: e.node.handle,
          title: e.node.title,
          description: e.node.description || '',
          itemCount: e.node.products?.edges?.length || 12,
          image: e.node.image
            ? { url: e.node.image.url, altText: e.node.image.altText || e.node.title }
            : { url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80', altText: e.node.title },
        })) || [];

      return collections.length > 0 ? collections : this.mockFallback.getCollections();
    } catch (err) {
      return this.mockFallback.getCollections();
    }
  }

  async getCollectionByHandle(handle: string): Promise<Collection | null> {
    try {
      if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
        return this.mockFallback.getCollectionByHandle(handle);
      }

      const data = await shopifyFetch<any>({
        query: GET_COLLECTION_BY_HANDLE_QUERY,
        variables: { handle, first: 25 },
      });

      if (!data.collection) return this.mockFallback.getCollectionByHandle(handle);

      return {
        id: data.collection.id,
        handle: data.collection.handle,
        title: data.collection.title,
        description: data.collection.description || '',
        itemCount: data.collection.products?.edges?.length || 12,
        image: data.collection.image
          ? { url: data.collection.image.url, altText: data.collection.image.altText || data.collection.title }
          : { url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80', altText: data.collection.title },
      };
    } catch (err) {
      return this.mockFallback.getCollectionByHandle(handle);
    }
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.getProducts({ query, colors: [], sizes: [], inStockOnly: false, sortBy: 'featured' });
  }
}

class MockCommerceService implements ICommerceService {
  async getProducts(filters?: FilterState): Promise<Product[]> {
    let result = [...MOCK_PRODUCTS];

    if (filters) {
      if (filters.category && filters.category !== 'all') {
        result = result.filter(
          (p) => p.category.toLowerCase() === filters.category?.toLowerCase()
        );
      }

      if (filters.query) {
        const q = filters.query.toLowerCase();
        result = result.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q))
        );
      }

      if (filters.minPrice !== undefined) {
        result = result.filter((p) => p.price.amount >= filters.minPrice!);
      }

      if (filters.maxPrice !== undefined) {
        result = result.filter((p) => p.price.amount <= filters.maxPrice!);
      }

      if (filters.sortBy) {
        if (filters.sortBy === 'price-asc') {
          result.sort((a, b) => a.price.amount - b.price.amount);
        } else if (filters.sortBy === 'price-desc') {
          result.sort((a, b) => b.price.amount - a.price.amount);
        }
      }
    }

    return Promise.resolve(result);
  }

  async getProductByHandle(handle: string): Promise<Product | null> {
    const found = MOCK_PRODUCTS.find((p) => p.handle === handle);
    return Promise.resolve(found || null);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Promise.resolve(MOCK_PRODUCTS.filter((p) => p.isBestSeller || p.isNew));
  }

  async getCollections(): Promise<Collection[]> {
    return Promise.resolve(MOCK_COLLECTIONS);
  }

  async getCollectionByHandle(handle: string): Promise<Collection | null> {
    const found = MOCK_COLLECTIONS.find((c) => c.handle === handle);
    return Promise.resolve(found || null);
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.getProducts({ query, colors: [], sizes: [], inStockOnly: false, sortBy: 'featured' });
  }
}

// Export ShopifyCommerceService as active production service
export const commerceService: ICommerceService = new ShopifyCommerceService();
