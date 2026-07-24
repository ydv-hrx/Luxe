import React from 'react';
import { Metadata } from 'next';
import { commerceService } from '@/lib/services/commerce';
import { ShopCatalogClient } from '@/features/catalog/ShopCatalogClient';
import { Badge } from '@/components/ui/Badge';
import { FilterState } from '@/types';

export const metadata: Metadata = {
  title: 'Shop All Garments & Accessories | LUXE Catalog',
  description: 'Browse the complete LUXE collection of architectural outerwear, Grade-A cashmere knits, and silk gala dresses.',
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
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 flex flex-col gap-10">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit">
          Collection Catalog
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Shop All Pieces
        </h1>
        <p className="text-sm text-neutral-600 max-w-xl">
          Discover architectural outerwear, Grade-A Mongolian cashmere knits, and hand-finished leather goods.
        </p>
      </div>

      {/* Interactive Catalog Client */}
      <ShopCatalogClient initialProducts={products} currentCategory={category} />
    </div>
  );
}
