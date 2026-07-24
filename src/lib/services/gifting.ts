import { Product } from '@/types';
import { commerceService } from './commerce';

export interface GiftCardOption {
  id: string;
  amount: number;
  currencyCode: string;
  title: string;
}

export interface GiftPackagingOption {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export interface GiftCustomization {
  cardId?: string;
  packagingId: string;
  recipientName: string;
  recipientEmail: string;
  personalMessage: string;
  deliveryDate: string;
  products: Product[];
}

export interface IGiftService {
  getGiftCards(): Promise<GiftCardOption[]>;
  getPackagingOptions(): Promise<GiftPackagingOption[]>;
  createGiftBundle(customization: GiftCustomization): Promise<{ giftId: string; revealUrl: string }>;
  getGiftReveal(giftId: string): Promise<GiftCustomization | null>;
}

class MockGiftService implements IGiftService {
  private giftCards: GiftCardOption[] = [
    { id: 'gc-250', amount: 250, currencyCode: 'USD', title: 'LUXE Executive Gift Pass $250' },
    { id: 'gc-500', amount: 500, currencyCode: 'USD', title: 'LUXE VIP Bespoke Pass $500' },
    { id: 'gc-1000', amount: 1000, currencyCode: 'USD', title: 'LUXE Atelier Diamond Pass $1,000' },
  ];

  private packagingOptions: GiftPackagingOption[] = [
    {
      id: 'pkg-black-box',
      title: 'Signature Black Magnet Box',
      subtitle: 'Hand-bound ribbon, silk tissue, and foil-stamped greeting card.',
      price: 25,
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'pkg-velvet-pouch',
      title: 'Monogrammed Leather Pouch',
      subtitle: 'Embossed calfskin pouch with custom gold-foil initials.',
      price: 65,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
    },
  ];

  private giftBundles: Map<string, GiftCustomization> = new Map();

  async getGiftCards(): Promise<GiftCardOption[]> {
    return Promise.resolve([...this.giftCards]);
  }

  async getPackagingOptions(): Promise<GiftPackagingOption[]> {
    return Promise.resolve([...this.packagingOptions]);
  }

  async createGiftBundle(customization: GiftCustomization): Promise<{ giftId: string; revealUrl: string }> {
    const giftId = `GFT-${Math.floor(100000 + Math.random() * 900000)}`;
    this.giftBundles.set(giftId, customization);
    return Promise.resolve({
      giftId,
      revealUrl: `/gifting/reveal/${giftId}`,
    });
  }

  async getGiftReveal(giftId: string): Promise<GiftCustomization | null> {
    const found = this.giftBundles.get(giftId);
    if (found) return Promise.resolve(found);

    const products = await commerceService.getProducts();

    // Fallback bundle
    return Promise.resolve({
      packagingId: 'pkg-black-box',
      recipientName: 'Elena Rostova',
      recipientEmail: 'elena@luxe.com',
      personalMessage: 'Happy Anniversary. To many more years of quiet luxury and shared moments.',
      deliveryDate: 'Today',
      products: [products[0] || ({} as Product)],
    });
  }
}

export const giftService: IGiftService = new MockGiftService();
