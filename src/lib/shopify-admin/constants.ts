import 'server-only';

export const SHOPIFY_ADMIN_HEADERS = {
  CONTENT_TYPE: 'application/json',
  ACCESS_TOKEN_HEADER: 'X-Shopify-Access-Token',
  USER_AGENT: 'Luxora-Admin-Dashboard/1.0',
} as const;

export const DEFAULT_PAGE_SIZE = 25;
export const MAX_PAGE_SIZE = 250;

export const RATE_LIMIT_CONFIG = {
  MAX_RETRIES: 3,
  INITIAL_DELAY_MS: 300,
  MAX_DELAY_MS: 3000,
  BACKOFF_FACTOR: 2,
} as const;

export const CACHE_TAGS = {
  PRODUCTS: 'shopify-admin-products',
  COLLECTIONS: 'shopify-admin-collections',
  ORDERS: 'shopify-admin-orders',
  CUSTOMERS: 'shopify-admin-customers',
  INVENTORY: 'shopify-admin-inventory',
  HOMEPAGE: 'shopify-admin-homepage',
  BANNERS: 'shopify-admin-banners',
  NAVIGATION: 'shopify-admin-navigation',
  MEDIA: 'shopify-admin-media',
  ANALYTICS: 'shopify-admin-analytics',
} as const;
