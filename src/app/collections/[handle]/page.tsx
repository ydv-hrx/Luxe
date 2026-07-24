import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commerceService } from '@/lib/services/commerce';
import { ShopCatalogClient } from '@/features/catalog/ShopCatalogClient';
import { CollectionHero } from '@/features/catalog/CollectionHero';

interface CollectionPageProps {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = await commerceService.getCollectionByHandle(handle);

  if (!collection) {
    return {
      title: 'Collection Not Found | LUXE Atelier',
    };
  }

  return {
    title: `${collection.title} Collection | LUXE Atelier`,
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
    sortBy: sortBy as any,
    minPrice,
    maxPrice,
    colors: [],
    sizes: [],
    inStockOnly: false,
  });

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-12">
      {/* Luxury Editorial Collection Hero Banner */}
      <CollectionHero
        badge="CURATED CAPSULE"
        title={collection.title}
        subtitle={collection.description || 'Discover meticulously crafted cashmere, refined outerwear, and timeless essentials designed for modern living.'}
        bgImageUrl={collection.image?.url}
      />

      {/* Catalog Controller with Filter Sidebar & Product Grid */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <ShopCatalogClient initialProducts={initialProducts} />
      </Suspense>
    </div>
  );
}
