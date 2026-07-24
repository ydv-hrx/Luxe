import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { ShopCatalogClient } from '@/features/catalog/ShopCatalogClient';
import { CollectionHero } from '@/features/catalog/CollectionHero';
import { FilterState } from '@/types';

export const metadata: Metadata = {
  title: 'The Signature Collection | LUXE Catalog',
  description: 'Discover meticulously crafted cashmere, refined outerwear, and timeless essentials designed for modern living.',
};

interface ShopPageProps {
  searchParams: Promise<{ category?: string; query?: string; sort?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
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
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-12">
      {/* Luxury Editorial Collection Hero */}
      <CollectionHero
        badge="CURATED COLLECTION"
        title="The Signature Collection"
        subtitle="Discover meticulously crafted cashmere, refined outerwear, and timeless essentials designed for modern living."
      />

      {/* Interactive Catalog Client */}
      <ShopCatalogClient initialProducts={products} currentCategory={category} />
    </div>
  );
}
