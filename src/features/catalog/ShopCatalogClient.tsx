'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product, FilterState } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';
import { FilterSidebar } from './FilterSidebar';
import { FilterDrawer } from './FilterDrawer';
import { EmptyState } from '@/components/ui/EmptyState';
import { CompareTray } from '@/features/compare/CompareTray';
import {
  SlidersHorizontal,
  LayoutGrid,
  Grid3X3,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

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
  const [sortBy, setSortBy] = useState<string>('featured');
  const [gridCols, setGridCols] = useState<number>(3); // 3 or 4 cols

  const categories = [
    { label: 'All Garments', value: 'all' },
    { label: 'Knits & Cashmere', value: 'knits' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Leather Accessories', value: 'accessories' },
    { label: 'Evening & Gala', value: 'dresses' },
  ];

  // Filter client-side
  let filteredProducts = [...initialProducts];
  if (activeFilters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((p) => p.price.amount <= activeFilters.maxPrice!);
  }
  if (activeFilters.inStockOnly) {
    filteredProducts = filteredProducts.filter((p) => p.variants.some((v) => v.availableForSale));
  }
  if (activeFilters.colors && activeFilters.colors.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      p.options.some(
        (o) => o.name.toLowerCase() === 'color' && o.values.some((v) => activeFilters.colors!.includes(v))
      )
    );
  }
  if (activeFilters.sizes && activeFilters.sizes.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      p.options.some(
        (o) => o.name.toLowerCase() === 'size' && o.values.some((v) => activeFilters.sizes!.includes(v))
      )
    );
  }

  // Sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price.amount - b.price.amount);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price.amount - a.price.amount);
  } else if (sortBy === 'newest') {
    filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-100">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={`/shop${cat.value === 'all' ? '' : `?category=${cat.value}`}`}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-2xl transition-all whitespace-nowrap ${
              currentCategory === cat.value || (currentCategory === 'all' && cat.value === 'all')
                ? 'bg-black text-white shadow-md scale-105'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Toolbar & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-neutral-50/80 rounded-2xl border border-neutral-200/80">
        <div className="flex items-center gap-3 text-xs font-bold text-neutral-700">
          <span>{filteredProducts.length} Curated Pieces Found</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setFilterDrawerOpen(true)}
            className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 border border-neutral-300 rounded-xl hover:border-black text-xs font-semibold text-neutral-800 bg-white shadow-sm"
            aria-label="Open filter drawer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>

          {/* Grid View Toggles (Desktop) */}
          <div className="hidden md:flex items-center gap-1 border border-neutral-200 rounded-xl bg-white p-1">
            <button
              type="button"
              onClick={() => setGridCols(3)}
              className={`p-1.5 rounded-lg transition-colors ${
                gridCols === 3 ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
              }`}
              aria-label="3 Column Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setGridCols(4)}
              className={`p-1.5 rounded-lg transition-colors ${
                gridCols === 4 ? 'bg-black text-white' : 'text-neutral-500 hover:text-black'
              }`}
              aria-label="4 Column Grid View"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 12-Column Desktop Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left (25% / 3 Columns): Sticky Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-3 sticky top-28">
          <FilterSidebar
            onApply={(filters) => setActiveFilters(filters)}
            currentFilters={activeFilters as any}
          />
        </div>

        {/* Right (75% / 9 Columns): Product Catalog Grid */}
        <div className="lg:col-span-9 flex flex-col gap-10">
          {filteredProducts.length === 0 ? (
            <EmptyState
              badge="No Matches Found"
              title="No Garments Match Your Filters"
              description="Try adjusting your price ceiling or selecting different color and size parameters."
              primaryActionText="Reset All Filters"
              onPrimaryClick={() => setActiveFilters({})}
            />
          ) : (
            <>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  gridCols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                } gap-6`}
              >
                {filteredProducts.map((product, idx) => (
                  <React.Fragment key={product.id}>
                    <ProductCard product={product} />

                    {/* Editorial Banner between product items */}
                    {idx === 5 && (
                      <div className="col-span-full p-8 sm:p-12 bg-neutral-900 text-white rounded-3xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 my-4 shadow-lumina-level2">
                        <div className="space-y-2 max-w-xl">
                          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Atelier Heritage</span>
                          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                            Grade-A Ulaanbaatar Mongolian Cashmere
                          </h3>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            Every garment is hand-combed during the spring season to ensure 12-gauge double-ply fiber perfection.
                          </p>
                        </div>
                        <Link
                          href="/concierge"
                          className="px-6 py-3 bg-white text-black font-bold text-xs rounded-2xl hover:bg-neutral-100 transition-all shrink-0 flex items-center gap-2"
                        >
                          Discover Provenance <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        onApply={(filters) => setActiveFilters(filters)}
      />

      {/* Global Compare Tray */}
      <CompareTray />
    </div>
  );
};
