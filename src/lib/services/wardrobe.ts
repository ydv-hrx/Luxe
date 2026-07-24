import { Product } from '@/types';
import { commerceService } from './commerce';

export interface WardrobeItem {
  id: string;
  product: Product;
  acquiredDate: string;
  wearCount: number;
  lastWorn: string;
  notes?: string;
}

export interface WardrobeTimelineEvent {
  year: string;
  season: string;
  title: string;
  itemCount: number;
  highlightImage: string;
}

export interface IWardrobeService {
  getWardrobeItems(): Promise<WardrobeItem[]>;
  getWardrobeTimeline(): Promise<WardrobeTimelineEvent[]>;
  addToWardrobe(productId: string): Promise<WardrobeItem>;
}

class MockWardrobeService implements IWardrobeService {
  async getWardrobeItems(): Promise<WardrobeItem[]> {
    const products = await commerceService.getProducts();
    const item1 = products[0] || {
      id: 'prod-1',
      handle: 'essential-cashmere-hoodie',
      title: 'Essential Cashmere Hoodie',
      subtitle: '100% Mongolian Grade-A Cashmere',
      description: 'Cashmere hoodie',
      vendor: 'LUXE Atelier',
      category: 'Knits',
      tags: ['Cashmere'],
      price: { amount: 680, currencyCode: 'USD' },
      images: [{ url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80', altText: 'Cashmere' }],
      options: [],
      variants: [],
    };
    const item2 = products[1] || item1;

    return Promise.resolve([
      {
        id: 'w-1',
        product: item1,
        acquiredDate: '2025-11-14',
        wearCount: 28,
        lastWorn: '2026-07-20',
        notes: 'Favorite Grade-A cashmere for travel and flights.',
      },
      {
        id: 'w-2',
        product: item2,
        acquiredDate: '2026-01-08',
        wearCount: 14,
        lastWorn: '2026-07-15',
        notes: 'Virgin wool trench coat for evening events.',
      },
    ]);
  }

  async getWardrobeTimeline(): Promise<WardrobeTimelineEvent[]> {
    return Promise.resolve([
      {
        year: '2026',
        season: 'Autumn / Winter',
        title: 'Atmospheric Knits & Virgin Wool',
        itemCount: 4,
        highlightImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
      },
      {
        year: '2025',
        season: 'Capsule Launch',
        title: 'Minimalist Foundations',
        itemCount: 6,
        highlightImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      },
    ]);
  }

  async addToWardrobe(productId: string): Promise<WardrobeItem> {
    const products = await commerceService.getProducts();
    const product = products.find((p) => p.id === productId) || products[0];
    const newItem: WardrobeItem = {
      id: `w-${Date.now()}`,
      product,
      acquiredDate: new Date().toISOString().split('T')[0],
      wearCount: 1,
      lastWorn: 'Today',
    };
    return Promise.resolve(newItem);
  }
}

export const wardrobeService: IWardrobeService = new MockWardrobeService();
