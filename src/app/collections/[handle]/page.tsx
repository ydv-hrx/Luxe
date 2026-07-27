import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commerceService } from '@/lib/services/commerce';
import { ShopCatalogClient } from '@/features/catalog/ShopCatalogClient';
import { CollectionHero } from '@/features/catalog/CollectionHero';
import { LuxeAtelierClubSection } from '@/features/catalog/LuxeAtelierClubSection';

interface CollectionPageProps {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = await commerceService.getCollectionByHandle(handle);

  if (!collection) {
    return {
      title: 'Collection Not Found | Luxora',
    };
  }

  return {
    title: `${collection.title} Collection | Luxora`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params, searchParams }: CollectionPageProps) {
  const { handle } = await params;
  const sParams = await searchParams;

  const collection = await commerceService.getCollectionByHandle(handle);

  if (!collection) {
    notFound();
  }

  // Parse filters
  const categoryFilter = typeof sParams.category === 'string' ? sParams.category : undefined;
  const sortBy = typeof sParams.sort === 'string' ? sParams.sort : 'featured';
  const minPrice = typeof sParams.minPrice === 'string' ? parseFloat(sParams.minPrice) : undefined;
  const maxPrice = typeof sParams.maxPrice === 'string' ? parseFloat(sParams.maxPrice) : undefined;

  const initialProducts = await commerceService.getProducts({
    category: categoryFilter,
    sortBy: sortBy as 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'best-selling',
    minPrice,
    maxPrice,
    colors: [],
    sizes: [],
    inStockOnly: false,
  });

  return (
    <div className="flex flex-col gap-12 pt-6">
      {/* 1. Collection Hero (LOCKED - UNTOUCHED) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full">
        <CollectionHero
          badge="CURATED CAPSULE"
          title={collection.title}
          subtitle={collection.description || 'Discover meticulously crafted cashmere, refined outerwear, and timeless essentials designed for modern living.'}
          bgImageUrl={collection.image?.url}
        />
      </div>

      {/* 2. Stitch Collection Catalog (Toolbar, Sticky Filter Sidebar, 4:5 Grid, Promo Banner, Pagination, Recently Viewed) */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse max-w-[1440px] mx-auto w-full" />}>
        <ShopCatalogClient initialProducts={initialProducts} />
      </Suspense>

      {/* 3. Newsletter Section */}
      <LuxeAtelierClubSection />
    </div>
  );
}
