'use server';

import { ActionResult, AdminMediaAsset } from '../types';
import { mediaInputSchema, MediaInput } from '../validation';
import { mediaAdminService } from '../services/media/service';

export async function getAdminMediaListAction(first = 25): Promise<ActionResult<AdminMediaAsset[]>> {
  try {
    const list = await mediaAdminService.listMedia(first);
    return { success: true, data: list };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to fetch media assets',
      code: (err as { code?: string })?.code || 'GET_MEDIA_ERROR',
    };
  }
}

export async function uploadAdminMediaAction(rawInput: MediaInput): Promise<ActionResult<AdminMediaAsset>> {
  try {
    const validated = mediaInputSchema.parse(rawInput);
    const asset = await mediaAdminService.uploadMedia(validated);
    return { success: true, data: asset };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to upload media asset',
      code: (err as { code?: string })?.code || 'UPLOAD_MEDIA_ERROR',
    };
  }
}
