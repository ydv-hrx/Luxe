import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { commerceService } from '@/lib/services/commerce';
import { ShopCatalogClient } from '@/features/catalog/ShopCatalogClient';
import { Badge } from '@/components/ui/Badge';

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
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Collection Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-lumina-level2 p-8 sm:p-12 flex flex-col justify-end min-h-[320px]">
        {collection.image && (
          <Image
            src={collection.image.url}
            alt={collection.image.altText || collection.title}
            fill
            priority
            className="object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col gap-3 max-w-2xl text-white">
          <Badge variant="outline" className="w-fit text-blue-300 border-blue-400/30 bg-blue-500/10">
            Capsule Edit
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-white tracking-tight">
            {collection.title}
          </h1>

          <p className="text-sm text-neutral-300 leading-relaxed font-serif italic">
            "{collection.description}"
          </p>

          <div className="text-xs text-neutral-400 font-semibold pt-1">
            {initialProducts.length} Pieces Available
          </div>
        </div>
      </div>

      {/* Catalog Controller with Filter Drawer & Product Grid */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <ShopCatalogClient initialProducts={initialProducts} />
      </Suspense>
    </div>
  );
}
