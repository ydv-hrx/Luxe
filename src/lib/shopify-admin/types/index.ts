/**
 * Standard Server Action Result format returned by all Shopify Admin actions
 */
export type ActionResult<T> = {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
};

/**
 * Generic GraphQL Page Info structure for cursor-based pagination
 */
export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

/**
 * Generic GraphQL Edge model
 */
export interface Edge<T> {
  cursor: string;
  node: T;
}

/**
 * Generic GraphQL Connection model
 */
export interface Connection<T> {
  edges: Edge<T>[];
  nodes?: T[];
  pageInfo: PageInfo;
  totalCount?: number;
}

/**
 * Shared Admin Product domain model
 */
export interface AdminProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor: string;
  productType: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'DRAFT';
  tags: string[];
  totalInventory: number;
  featuredImage?: {
    id: string;
    url: string;
    altText?: string;
  };
  priceRange: {
    minVariantPrice: { amount: number; currencyCode: string };
    maxVariantPrice: { amount: number; currencyCode: string };
  };
  createdAt: string;
  updatedAt: string;
}

/**
 * Shared Admin Collection domain model
 */
export interface AdminCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  productsCount: number;
  image?: {
    id: string;
    url: string;
    altText?: string;
  };
  updatedAt: string;
}

/**
 * Shared Admin Order domain model
 */
export interface AdminOrder {
  id: string;
  name: string;
  orderNumber: string;
  processedAt: string;
  displayFulfillmentStatus: string;
  displayFinancialStatus: string;
  totalPrice: { amount: number; currencyCode: string };
  customer?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  itemCount: number;
}

/**
 * Shared Admin Customer domain model
 */
export interface AdminCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  ordersCount: number;
  totalSpent: { amount: number; currencyCode: string };
  createdAt: string;
}

/**
 * Shared Admin Inventory Item domain model
 */
export interface AdminInventoryItem {
  id: string;
  sku: string;
  available: number;
  onHand: number;
  committed: number;
  productTitle: string;
  variantTitle: string;
  updatedAt: string;
}

/**
 * Shared Admin Banner CMS model
 */
export interface AdminBanner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  position: 'hero' | 'middle' | 'footer';
  active: boolean;
}

/**
 * Shared Admin Navigation Menu model
 */
export interface AdminNavigationMenu {
  id: string;
  title: string;
  handle: string;
  items: {
    id: string;
    title: string;
    url: string;
    items?: { id: string; title: string; url: string }[];
  }[];
}

/**
 * Shared Admin Analytics Summary model
 */
export interface AdminAnalyticsSummary {
  totalSales: { amount: number; currencyCode: string };
  totalOrders: number;
  averageOrderValue: { amount: number; currencyCode: string };
  topSellingProducts: { id: string; title: string; quantity: number; totalRevenue: number }[];
  period: string;
}

/**
 * Shared Admin Media asset model
 */
export interface AdminMediaAsset {
  id: string;
  url: string;
  altText: string;
  mediaContentType: 'IMAGE' | 'VIDEO' | 'EXTERNAL_VIDEO' | 'MODEL_3D';
  mimeType?: string;
  fileSize?: number;
}
