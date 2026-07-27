import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { CategoriesHero } from '@/features/categories/CategoriesHero';
import { CategoryCarousel } from '@/features/categories/CategoryCarousel';
import { CategoriesClientContainer } from '@/features/categories/CategoriesClientContainer';
import { CategoriesFeatureBanner } from '@/features/categories/CategoriesFeatureBanner';
import { LuxeAtelierClubSection } from '@/features/catalog/LuxeAtelierClubSection';
import { FilterState } from '@/types';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Autumn / Winter 2024 Collection | Luxora Categories',
  description:
    'Discover the pinnacle of artisanal tailoring and contemporary silhouettes, where heritage meets the avant-garde.',
};

interface CollectionsPageProps {
  searchParams: Promise<{ category?: string; query?: string; sort?: string }>;
}

export default async function CollectionsIndexPage({ searchParams }: CollectionsPageProps) {
  const params = await searchParams;
  const category = params.category || 'all';

  const validSorts: FilterState['sortBy'][] = ['featured', 'price-asc', 'price-desc', 'newest'];
  const sortBy = validSorts.includes(params.sort as FilterState['sortBy'])
    ? (params.sort as FilterState['sortBy'])
    : 'featured';

  const products = await commerceService.getProducts({
    category: category === 'all' ? undefined : category,
    query: params.query,
    sortBy,
    colors: [],
    sizes: [],
    inStockOnly: false,
  });

  return (
    <div className="w-full">
      {/* 1. Editorial Hero */}
      <CategoriesHero />

      {/* 2. Shop by Category Carousel */}
      <CategoryCarousel />

      {/* 3. Sticky Discovery Toolbar, Filter Sidebar, Product Grid, & Pagination */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse max-w-[1440px] mx-auto w-full" />}>
        <CategoriesClientContainer initialProducts={products} currentCategory={category} />
      </Suspense>

      {/* 4. Editorial Feature Banner */}
      <CategoriesFeatureBanner />

      {/* 5. Newsletter Section */}
      <LuxeAtelierClubSection />
    </div>
  );
}
