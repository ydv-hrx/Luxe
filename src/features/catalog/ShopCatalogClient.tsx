'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product, FilterState } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';
import { FilterDrawer } from './FilterDrawer';
import { CompareTray } from '@/features/compare/CompareTray';
import { SlidersHorizontal, Filter } from 'lucide-react';

export interface ShopCatalogClientProps {
  initialProducts: Product[];
  currentCategory?: string;
}

export const ShopCatalogClient: React.FC<ShopCatalogClientProps> = ({
  initialProducts,
  currentCategory = 'all',
}) => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Partial<FilterState>>({});

  const categories = [
    { label: 'All Garments', value: 'all' },
    { label: 'Knits & Cashmere', value: 'knits' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Leather Accessories', value: 'accessories' },
    { label: 'Evening & Gala', value: 'dresses' },
  ];

  // Filter client-side if additional drawer filters are applied
  let filteredProducts = [...initialProducts];
  if (activeFilters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((p) => p.price.amount <= activeFilters.maxPrice!);
  }
  if (activeFilters.inStockOnly) {
    filteredProducts = filteredProducts.filter((p) => p.variants.some((v) => v.availableForSale));
  }

  return (
    <>
      {/* Filter Tabs Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-2 border-b border-neutral-100">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={`/shop${cat.value === 'all' ? '' : `?category=${cat.value}`}`}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                currentCategory === cat.value || (currentCategory === 'all' && cat.value === 'all')
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Status Count & Controls */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs font-medium text-neutral-500">
          <span>Showing {filteredProducts.length} products</span>
          <button
            type="button"
            onClick={() => setFilterDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 border border-neutral-300 rounded-xl hover:border-black text-neutral-800 transition-colors shadow-sm bg-white"
            aria-label="Open filter and sort drawer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter & Sort
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center gap-3">
          <Filter className="w-8 h-8 text-neutral-300" />
          <h3 className="text-lg font-semibold text-neutral-800">No products match your criteria</h3>
          <p className="text-xs text-neutral-500">Try adjusting your price range or filter selections.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        onApply={(filters) => setActiveFilters(filters)}
      />

      {/* Compare Tray */}
      <CompareTray />
    </>
  );
};
