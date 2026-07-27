import 'server-only';
import { z } from 'zod';

export const productInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Product title is required'),
  descriptionHtml: z.string().optional(),
  vendor: z.string().min(1, 'Vendor name is required'),
  productType: z.string().min(1, 'Product category/type is required'),
  status: z.enum(['ACTIVE', 'ARCHIVED', 'DRAFT']).default('ACTIVE'),
  tags: z.array(z.string()).default([]),
  variants: z
    .array(
      z.object({
        id: z.string().optional(),
        title: z.string().optional(),
        sku: z.string().optional(),
        price: z.number().min(0, 'Price must be non-negative'),
        inventoryQuantity: z.number().int().default(0),
      })
    )
    .optional(),
});

export const collectionInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Collection title is required'),
  descriptionHtml: z.string().optional(),
  handle: z.string().optional(),
});

export const orderStatusInputSchema = z.object({
  orderId: z.string().min(1, 'Order ID is required'),
  status: z.enum(['OPEN', 'CLOSED', 'CANCELLED']),
});

export const customerInputSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const inventoryAdjustSchema = z.object({
  inventoryItemId: z.string().min(1, 'Inventory Item ID is required'),
  locationId: z.string().min(1, 'Location ID is required'),
  availableDelta: z.number().int('Adjustment delta must be an integer'),
});

export const bannerInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().optional(),
  imageUrl: z.string().url('Invalid image URL'),
  ctaText: z.string().default('Shop Now'),
  ctaLink: z.string().default('/shop'),
  position: z.enum(['hero', 'middle', 'footer']).default('hero'),
  active: z.boolean().default(true),
});

export const navigationInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Menu title is required'),
  handle: z.string().min(1, 'Menu handle is required'),
  items: z.array(
    z.object({
      id: z.string().optional(),
      title: z.string().min(1, 'Item title is required'),
      url: z.string().min(1, 'Item URL is required'),
    })
  ),
});

export const mediaInputSchema = z.object({
  altText: z.string().default('Luxora Asset'),
  mediaContentType: z.enum(['IMAGE', 'VIDEO', 'EXTERNAL_VIDEO', 'MODEL_3D']).default('IMAGE'),
  originalSource: z.string().url('Invalid file source URL'),
});

export const analyticsFilterSchema = z.object({
  period: z.enum(['7d', '30d', '90d', '1y']).default('30d'),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

export type ProductInput = z.infer<typeof productInputSchema>;
export type CollectionInput = z.infer<typeof collectionInputSchema>;
export type OrderStatusInput = z.infer<typeof orderStatusInputSchema>;
export type CustomerInput = z.infer<typeof customerInputSchema>;
export type InventoryAdjustInput = z.infer<typeof inventoryAdjustSchema>;
export type BannerInput = z.infer<typeof bannerInputSchema>;
export type NavigationInput = z.infer<typeof navigationInputSchema>;
export type MediaInput = z.infer<typeof mediaInputSchema>;
export type AnalyticsFilterInput = z.infer<typeof analyticsFilterSchema>;
