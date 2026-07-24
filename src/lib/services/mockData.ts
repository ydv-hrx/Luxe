import { Product, Collection } from '@/types';

export const MOCK_COLLECTIONS: Collection[] = [
  {
    id: 'col-1',
    handle: 'cashmere-essentials',
    title: 'Cashmere & Knits',
    description: 'Ultra-soft Grade-A Mongolian cashmere harvested ethically.',
    itemCount: 12,
    image: {
      url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80',
      altText: 'Luxe Cashmere Collection',
    },
  },
  {
    id: 'col-2',
    handle: 'tailored-outerwear',
    title: 'Tailored Outerwear',
    description: 'Precision architectural silhouettes for transition seasons.',
    itemCount: 8,
    image: {
      url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80',
      altText: 'Tailored Outerwear',
    },
  },
  {
    id: 'col-3',
    handle: 'leather-accessories',
    title: 'Leather Goods & Accessories',
    description: 'Handcrafted Italian leather crafted by master artisans.',
    itemCount: 15,
    image: {
      url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80',
      altText: 'Leather Goods & Accessories',
    },
  },
  {
    id: 'col-4',
    handle: 'midnight-gala',
    title: 'Evening & Gala',
    description: 'Statement pieces designed for high-contrast evening elegance.',
    itemCount: 6,
    image: {
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      altText: 'Evening & Gala Capsule',
    },
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    handle: 'essential-cashmere-hoodie',
    title: 'Essential Cashmere Hoodie',
    subtitle: '100% Mongolian Grade-A Cashmere',
    description:
      'Engineered with double-ply 12-gauge Mongolian cashmere for supreme warmth and lightweight drape. Features seamless ribbed cuffs, subtle structural hood darts, and an relaxed architectural silhouette.',
    vendor: 'LUXE Atelier',
    category: 'Knits',
    tags: ['Cashmere', 'Best Seller', 'New Arrival', 'Knits'],
    price: { amount: 680, currencyCode: 'USD' },
    compareAtPrice: { amount: 750, currencyCode: 'USD' },
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 38,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80',
        altText: 'Essential Cashmere Hoodie Front',
      },
      {
        url: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80',
        altText: 'Essential Cashmere Hoodie Detail',
      },
    ],
    options: [
      { name: 'Color', values: ['Onyx Black', 'Oatmeal', 'Slate Gray'] },
      { name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
    ],
    variants: [
      {
        id: 'var-1-1',
        title: 'Onyx Black / S',
        sku: 'LX-HOOD-BLK-S',
        price: { amount: 680, currencyCode: 'USD' },
        selectedOptions: { Color: 'Onyx Black', Size: 'S' },
        availableForSale: true,
      },
      {
        id: 'var-1-2',
        title: 'Onyx Black / M',
        sku: 'LX-HOOD-BLK-M',
        price: { amount: 680, currencyCode: 'USD' },
        selectedOptions: { Color: 'Onyx Black', Size: 'M' },
        availableForSale: true,
      },
      {
        id: 'var-1-3',
        title: 'Oatmeal / M',
        sku: 'LX-HOOD-OAT-M',
        price: { amount: 680, currencyCode: 'USD' },
        selectedOptions: { Color: 'Oatmeal', Size: 'M' },
        availableForSale: true,
      },
    ],
  },
  {
    id: 'prod-2',
    handle: 'architectural-trench-coat',
    title: 'Architectural Wool Trench Coat',
    subtitle: 'Heavyweight Virgin Wool Blend',
    description:
      'Double-breasted trench crafted from water-repellent Italian virgin wool. Features storm flap, removable waist belt, horn buttons, and deep welt pockets.',
    vendor: 'LUXE Atelier',
    category: 'Outerwear',
    tags: ['Outerwear', 'Tailored', 'Winter'],
    price: { amount: 1450, currencyCode: 'USD' },
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 24,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80',
        altText: 'Architectural Trench Coat Front',
      },
      {
        url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80',
        altText: 'Architectural Trench Coat Side',
      },
    ],
    options: [
      { name: 'Color', values: ['Camel', 'Midnight Navy', 'Charcoal'] },
      { name: 'Size', values: ['S', 'M', 'L'] },
    ],
    variants: [
      {
        id: 'var-2-1',
        title: 'Camel / M',
        sku: 'LX-TRNC-CML-M',
        price: { amount: 1450, currencyCode: 'USD' },
        selectedOptions: { Color: 'Camel', Size: 'M' },
        availableForSale: true,
      },
    ],
  },
  {
    id: 'prod-3',
    handle: 'minimalist-leather-tote',
    title: 'Minimalist Calfskin Tote',
    subtitle: 'Vegetable-Tanned Italian Leather',
    description:
      'Structured tote crafted with full-grain calfskin leather and unlined raw suede interior. Features magnetic closure, internal zip pouch, and reinforced shoulder straps.',
    vendor: 'LUXE Goods',
    category: 'Accessories',
    tags: ['Accessories', 'Leather', 'Limited Edition'],
    price: { amount: 890, currencyCode: 'USD' },
    isLimitedEdition: true,
    rating: 4.8,
    reviewCount: 19,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80',
        altText: 'Minimalist Calfskin Tote',
      },
    ],
    options: [
      { name: 'Color', values: ['Black', 'Espresso', 'Tan'] },
    ],
    variants: [
      {
        id: 'var-3-1',
        title: 'Black',
        sku: 'LX-TOTE-BLK',
        price: { amount: 890, currencyCode: 'USD' },
        selectedOptions: { Color: 'Black' },
        availableForSale: true,
      },
    ],
  },
  {
    id: 'prod-4',
    handle: 'silk-gala-slip-dress',
    title: 'Midnight Silk Gala Dress',
    subtitle: '100% Mulberry Silk Crepe',
    description:
      'Fluid floor-length bias-cut silhouette crafted from 22mm Mulberry silk crepe. Features delicate adjustable spaghetti straps and open cowl back design.',
    vendor: 'LUXE Evening',
    category: 'Dresses',
    tags: ['Evening', 'Silk', 'Gala'],
    price: { amount: 1120, currencyCode: 'USD' },
    isNew: true,
    rating: 4.9,
    reviewCount: 15,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
        altText: 'Midnight Silk Gala Dress',
      },
    ],
    options: [
      { name: 'Color', values: ['Midnight Navy', 'Emerald Green', 'Deep Black'] },
      { name: 'Size', values: ['XS', 'S', 'M', 'L'] },
    ],
    variants: [
      {
        id: 'var-4-1',
        title: 'Midnight Navy / S',
        sku: 'LX-DRESS-NVY-S',
        price: { amount: 1120, currencyCode: 'USD' },
        selectedOptions: { Color: 'Midnight Navy', Size: 'S' },
        availableForSale: true,
      },
    ],
  },
];
