import { Product } from '@/types';
import { commerceService } from './commerce';

export interface StyleDNAProfile {
  primaryPalette: string[];
  preferredFit: 'Architectural Slouch' | 'Tailored Structured' | 'Fluid Bias Cut';
  favoriteCategories: string[];
  climatePreference: string;
}

export interface IRecommendationService {
  getStylistRecommendations(productId?: string): Promise<Product[]>;
  getStyleDNA(): Promise<StyleDNAProfile>;
  getCompleteTheLookBundle(productId: string): Promise<Product[]>;
}

class MockRecommendationService implements IRecommendationService {
  async getStylistRecommendations(): Promise<Product[]> {
    const products = await commerceService.getProducts();
    return Promise.resolve(products);
  }

  async getStyleDNA(): Promise<StyleDNAProfile> {
    return Promise.resolve({
      primaryPalette: ['Onyx Black', 'Oatmeal', 'Camel', 'Midnight Navy'],
      preferredFit: 'Architectural Slouch',
      favoriteCategories: ['Knits', 'Outerwear', 'Accessories'],
      climatePreference: 'Temperate / Winter Alpine',
    });
  }

  async getCompleteTheLookBundle(productId: string): Promise<Product[]> {
    const products = await commerceService.getProducts();
    return Promise.resolve(products.filter((p) => p.id !== productId));
  }
}

export const recommendationService: IRecommendationService = new MockRecommendationService();
