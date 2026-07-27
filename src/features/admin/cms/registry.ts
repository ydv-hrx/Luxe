import { z } from 'zod';

export interface SectionRegistryItem<TData = Record<string, unknown>> {
  type: string;
  label: string;
  icon: string;
  renderPriority: number;
  defaultData: TData;
  schema: z.ZodType<TData>;
}

/**
 * SEO & Open Graph Metadata Schema
 */
export const CmsSeoMetadataSchema = z.object({
  metaTitle: z.string().default('Luxora Atelier | Flagship Luxury Haute Couture'),
  metaDescription: z.string().default('Discover bespoke haute couture, Mongolian cashmere, and artisanal leather goods.'),
  ogImageUrl: z.string().url().default('https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80'),
  canonicalUrl: z.string().default('https://luxora.atelier'),
  jsonLdSchema: z.string().default('{"@context":"https://schema.org","@type":"Organization","name":"Luxora Atelier"}'),
});

export type CmsSeoMetadata = z.infer<typeof CmsSeoMetadataSchema>;

/**
 * Structured Publish Result payload
 */
export interface CmsPublishResult {
  success: boolean;
  publishedVersion: string;
  draftVersion: string;
  warnings?: string[];
  errors?: string[];
}

/**
 * Version History Item model for rollback & scheduling architecture
 */
export interface CmsVersionHistoryItem {
  id: string;
  versionNumber: string;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  publishedAt?: string;
  scheduledAt?: string;
  author: string;
  sectionsData: Record<string, unknown>;
}

/**
 * Undo / Redo State Manager helper class
 */
export class CmsUndoRedoManager<T> {
  private past: T[] = [];
  private future: T[] = [];

  constructor(private current: T) {}

  public push(newState: T): void {
    this.past.push(this.current);
    this.current = newState;
    this.future = [];
  }

  public undo(): T | null {
    if (this.past.length === 0) return null;
    const previous = this.past.pop()!;
    this.future.unshift(this.current);
    this.current = previous;
    return this.current;
  }

  public redo(): T | null {
    if (this.future.length === 0) return null;
    const next = this.future.shift()!;
    this.past.push(this.current);
    this.current = next;
    return this.current;
  }

  public getCurrent(): T {
    return this.current;
  }
}

export const HeroSectionSchema = z.object({
  headline: z.string().min(1, 'Headline is required'),
  subheadline: z.string().optional(),
  ctaText: z.string().default('Shop Collection'),
  ctaLink: z.string().default('/collections/all'),
  ctaStyle: z.enum(['SOLID', 'OUTLINE']).default('SOLID'),
  imageUrl: z.string().url('Invalid image URL'),
});

export const FeaturedProductsSchema = z.object({
  title: z.string().default('Curated Flagship Pieces'),
  subtitle: z.string().optional(),
  productIds: z.array(z.string()).default([]),
  displayCount: z.number().int().default(4),
});

export const FeaturedCollectionsSchema = z.object({
  title: z.string().default('Featured Ateliers'),
  collectionHandles: z.array(z.string()).default([]),
});

export const BrandStorySchema = z.object({
  title: z.string().default('Uncompromising Craftsmanship'),
  storyBody: z.string().min(10, 'Story body must be at least 10 characters'),
  artisanQuote: z.string().optional(),
  heroMediaUrl: z.string().optional(),
});

export const BenefitsSectionSchema = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});

export type HeroSectionData = z.infer<typeof HeroSectionSchema>;
export type FeaturedProductsData = z.infer<typeof FeaturedProductsSchema>;
export type FeaturedCollectionsData = z.infer<typeof FeaturedCollectionsSchema>;
export type BrandStoryData = z.infer<typeof BrandStorySchema>;

export const SECTION_REGISTRY: Record<string, SectionRegistryItem<any>> = {
  hero: {
    type: 'hero',
    label: 'Hero Banner',
    icon: 'view_carousel',
    renderPriority: 1,
    defaultData: {
      headline: 'The Spring Atelier Collection',
      subheadline: 'Discover the intersection of heritage craftsmanship and modern silhouette.',
      ctaText: 'Shop Collection',
      ctaLink: '/collections/all',
      ctaStyle: 'SOLID',
      imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
    },
    schema: HeroSectionSchema,
  },
  featured_products: {
    type: 'featured_products',
    label: 'Featured Products',
    icon: 'grid_view',
    renderPriority: 2,
    defaultData: {
      title: 'Curated Flagship Pieces',
      subtitle: 'Hand-selected items from our Master Artisans',
      productIds: ['gid://shopify/Product/1', 'gid://shopify/Product/2'],
      displayCount: 4,
    },
    schema: FeaturedProductsSchema,
  },
  featured_collections: {
    type: 'featured_collections',
    label: 'Featured Collections',
    icon: 'auto_awesome_mosaic',
    renderPriority: 3,
    defaultData: {
      title: 'Featured Ateliers',
      collectionHandles: ['outerwear', 'cashmere-capsule'],
    },
    schema: FeaturedCollectionsSchema,
  },
  brand_story: {
    type: 'brand_story',
    label: 'Brand Story',
    icon: 'auto_stories',
    renderPriority: 4,
    defaultData: {
      title: 'Uncompromising Craftsmanship',
      storyBody: 'Every Luxora piece requires up to 40 hours of meticulous hand-assembly.',
      artisanQuote: 'Luxury is not about opulence; it is about absolute perfection in every stitch.',
    },
    schema: BrandStorySchema,
  },
  benefits: {
    type: 'benefits',
    label: 'Benefits & Heritage',
    icon: 'verified',
    renderPriority: 5,
    defaultData: {
      items: [
        { title: 'Global White-Glove Delivery', description: 'Complimentary insured shipping worldwide', icon: 'local_shipping' },
        { title: 'Bespoke Atelier Fit', description: 'Personal tailoring and alteration support', icon: 'checkroom' },
      ],
    },
    schema: BenefitsSectionSchema,
  },
};
