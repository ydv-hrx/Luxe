import 'server-only';
import { AdminMediaAsset } from './types';

export interface IMediaProvider {
  uploadMedia(fileSource: string, altText?: string): Promise<AdminMediaAsset>;
  listMedia(first?: number): Promise<AdminMediaAsset[]>;
  deleteMedia(id: string): Promise<boolean>;
}

/**
 * Default Shopify Files API Media Provider
 */
export class ShopifyMediaProvider implements IMediaProvider {
  async uploadMedia(fileSource: string, altText = 'Luxora Asset'): Promise<AdminMediaAsset> {
    return Promise.resolve({
      id: `gid://shopify/MediaImage/${Date.now()}`,
      url: fileSource,
      altText,
      mediaContentType: 'IMAGE',
    });
  }

  async listMedia(_first = 25): Promise<AdminMediaAsset[]> {
    return Promise.resolve([
      {
        id: 'gid://shopify/MediaImage/101',
        url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
        altText: 'Luxora Outerwear Collection Hero',
        mediaContentType: 'IMAGE',
      },
    ]);
  }

  async deleteMedia(_id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const mediaProvider: IMediaProvider = new ShopifyMediaProvider();
