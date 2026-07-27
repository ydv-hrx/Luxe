'use server';

import { ActionResult, AdminBanner } from '../types';
import { bannerInputSchema, BannerInput } from '../validation';
import { cmsAdminService } from '../services/cms/service';

export async function getAdminBannersAction(): Promise<ActionResult<AdminBanner[]>> {
  try {
    const banners = await cmsAdminService.getBanners();
    return { success: true, data: banners };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch CMS banners',
      code: (err as { code?: string })?.code || 'GET_BANNERS_ERROR',
    };
  }
}

export async function saveAdminBannerAction(rawInput: BannerInput): Promise<ActionResult<AdminBanner[]>> {
  try {
    const validated = bannerInputSchema.parse(rawInput);
    const banners = await cmsAdminService.saveBanner(validated);
    return { success: true, data: banners };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to save CMS banner',
      code: (err as { code?: string })?.code || 'SAVE_BANNER_ERROR',
    };
  }
}
