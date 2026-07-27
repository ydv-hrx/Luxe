import 'server-only';
import { mediaProvider, IMediaProvider } from '../../media-provider';
import { AdminMediaAsset } from '../../types';
import { revalidateMedia } from '../../cache/revalidate';
import { MediaInput } from '../../validation';

export class MediaAdminService {
  constructor(private provider: IMediaProvider = mediaProvider) {}

  async listMedia(first = 25): Promise<AdminMediaAsset[]> {
    return this.provider.listMedia(first);
  }

  async uploadMedia(input: MediaInput): Promise<AdminMediaAsset> {
    const asset = await this.provider.uploadMedia(input.originalSource, input.altText);
    revalidateMedia();
    return asset;
  }

  async deleteMedia(id: string): Promise<boolean> {
    const success = await this.provider.deleteMedia(id);
    revalidateMedia();
    return success;
  }
}

export const mediaAdminService = new MediaAdminService();
