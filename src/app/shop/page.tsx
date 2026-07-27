import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { ShopHero } from '@/features/shop/ShopHero';
import { FeaturedCategories } from '@/features/shop/FeaturedCategories';
import { ShopClientContainer } from '@/features/shop/ShopClientContainer';
import { PromotionalBanner } from '@/features/shop/PromotionalBanner';
import { ShopTrustBar } from '@/features/shop/ShopTrustBar';

export const metadata: Metadata = {
  title: 'Shop | Luxora - The Curated Marketplace',
  description:
    'Discover thoughtfully curated products across fashion, audio, furniture, beauty, and watches where craftsmanship meets contemporary design.',
};

interface ShopPageProps {
  searchParams: Promise<{ category?: string; query?: string; sort?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const category = params.category || 'all';

  const products = await commerceService.getProducts({
    category: category === 'all' ? undefined : category,
    query: params.query,
    sortBy: 'featured',
    colors: [],
    sizes: [],
    inStockOnly: false,
  });

  return (
    <div className="w-full">
      {/* 1. Editorial Hero */}
      <ShopHero />

      {/* 2. Featured Categories */}
      <FeaturedCategories />

      {/* 3. Discovery Toolbar, Sidebar Filters, & Product Grid */}
      <ShopClientContainer initialProducts={products} currentCategory={category} />

      {/* 4. Promotional Banner */}
      <PromotionalBanner />

      {/* 5. Trust Bar */}
      <ShopTrustBar />
    </div>
  );
}
