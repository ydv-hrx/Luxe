import 'server-only';
import { executeGraphQL } from '../../graphql';
import { GET_ADMIN_BANNERS_QUERY } from './queries';
import { SAVE_ADMIN_BANNERS_MUTATION } from './mutations';
import { AdminBanner } from '../../types';
import { normalizeShopifyUserErrors, ValidationError } from '../../errors';
import { revalidateHomepage } from '../../cache/revalidate';
import { CACHE_TAGS } from '../../constants';
import { BannerInput } from '../../validation';

const DEFAULT_BANNERS: AdminBanner[] = [
  {
    id: 'ban-1',
    title: 'The Autumn Cashmere Capsule',
    subtitle: '12-Gauge Grade-A Mongolian Cashmere',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'Explore Collection',
    ctaLink: '/collections/outerwear',
    position: 'hero',
    active: true,
  },
];

export class CmsAdminService {
  async getBanners(): Promise<AdminBanner[]> {
    try {
      const data = await executeGraphQL<any>({
        query: GET_ADMIN_BANNERS_QUERY,
        tags: [CACHE_TAGS.BANNERS, CACHE_TAGS.HOMEPAGE],
        revalidate: 60,
      });

      const rawValue = data?.shop?.metafield?.value;
      if (!rawValue) return DEFAULT_BANNERS;

      const parsed = JSON.parse(rawValue);
      return Array.isArray(parsed) ? parsed : DEFAULT_BANNERS;
    } catch (_err) {
      return DEFAULT_BANNERS;
    }
  }

  async saveBanner(input: BannerInput): Promise<AdminBanner[]> {
    const existing = await this.getBanners();
    let updated: AdminBanner[];

    if (input.id) {
      updated = existing.map((b) => (b.id === input.id ? { ...b, ...input } : b));
    } else {
      const newBanner: AdminBanner = {
        id: `ban-${Date.now()}`,
        title: input.title,
        subtitle: input.subtitle || '',
        imageUrl: input.imageUrl,
        ctaText: input.ctaText,
        ctaLink: input.ctaLink,
        position: input.position,
        active: input.active,
      };
      updated = [...existing, newBanner];
    }

    const data = await executeGraphQL<any>({
      query: SAVE_ADMIN_BANNERS_MUTATION,
      variables: {
        metafields: [
          {
            namespace: 'luxora_cms',
            key: 'banners',
            type: 'json',
            value: JSON.stringify(updated),
          },
        ],
      },
    });

    const userErrors = data.metafieldsSet?.userErrors;
    const errorMsg = normalizeShopifyUserErrors(userErrors);
    if (errorMsg) {
      throw new ValidationError(errorMsg);
    }

    revalidateHomepage();
    return updated;
  }
}

export const cmsAdminService = new CmsAdminService();
