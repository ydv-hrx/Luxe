export interface Money {
  amount: number;
  currencyCode: string;
}

export interface ImageAsset {
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface ProductOption {
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  sku: string;
  price: Money;
  compareAtPrice?: Money;
  selectedOptions: Record<string, string>;
  availableForSale: boolean;
  image?: ImageAsset;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle?: string;
  description: string;
  vendor: string;
  category: string;
  tags: string[];
  price: Money;
  compareAtPrice?: Money;
  images: ImageAsset[];
  options: ProductOption[];
  variants: ProductVariant[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimitedEdition?: boolean;
  rating?: number;
  reviewCount?: number;
  specifications?: Record<string, string>;
  careInstructions?: string[];
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ImageAsset;
  itemCount: number;
}

export interface CartLineItem {
  id: string;
  product: Pick<Product, 'id' | 'handle' | 'title' | 'vendor'>;
  variant: ProductVariant;
  quantity: number;
}

export interface Cart {
  id: string;
  lines: CartLineItem[];
  totalQuantity: number;
  subtotal: Money;
  tax: Money;
  total: Money;
}

export interface FilterState {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  colors: string[];
  sizes: string[];
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
  query?: string;
}

export interface CompareState {
  items: Product[];
  isOpen: boolean;
}

export interface ProductReview {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  isVerified: boolean;
  helpfulCount: number;
  images?: string[];
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}
