'use client';

import React from 'react';
import { SlidersHorizontal, Grid, List } from 'lucide-react';
import { FilterState } from '@/types';

interface DiscoveryToolbarProps {
  onToggleFilters: () => void;
  showFilters: boolean;
  currentTab: string;
  onTabChange: (tab: string) => void;
  sortBy: FilterState['sortBy'];
  onSortChange: (sort: FilterState['sortBy']) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalProducts?: number;
}

export const DiscoveryToolbar: React.FC<DiscoveryToolbarProps> = ({
  onToggleFilters,
  showFilters: _showFilters,
  currentTab,
  onTabChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalProducts = 0,
}) => {
  return (
    <section className="border-y border-[#E5E5E5] sticky top-16 md:top-20 bg-white/95 backdrop-blur-md z-30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4 font-sans">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 overflow-hidden">
          <button
            type="button"
            onClick={onToggleFilters}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold text-black hover:opacity-70 transition-opacity shrink-0 bg-neutral-100 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>

          {/* Tab Selection */}
          <div className="hidden sm:flex gap-4 lg:gap-8 text-[11px] font-sans uppercase tracking-widest font-medium text-[#717171] overflow-x-auto scrollbar-none whitespace-nowrap">
            <button
              type="button"
              onClick={() => onTabChange('all')}
              className={`py-4 sm:py-5 ${currentTab === 'all' ? 'text-black border-b border-black font-semibold' : 'hover:text-black transition-colors'}`}
            >
              All Items
            </button>
            <button
              type="button"
              onClick={() => onTabChange('bestsellers')}
              className={`py-4 sm:py-5 ${currentTab === 'bestsellers' ? 'text-black border-b border-black font-semibold' : 'hover:text-black transition-colors'}`}
            >
              Bestsellers
            </button>
            <button
              type="button"
              onClick={() => onTabChange('new-drops')}
              className={`py-4 sm:py-5 ${currentTab === 'new-drops' ? 'text-black border-b border-black font-semibold' : 'hover:text-black transition-colors'}`}
            >
              New Drops
            </button>
            <button
              type="button"
              onClick={() => onTabChange('limited')}
              className={`py-4 sm:py-5 ${currentTab === 'limited' ? 'text-black border-b border-black font-semibold' : 'hover:text-black transition-colors'}`}
            >
              Limited Edition
            </button>
          </div>
        </div>

        {/* Right side: Product Count, Sort & View Mode */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {totalProducts > 0 && (
            <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest font-medium shrink-0">
              {totalProducts} <span className="hidden xs:inline">Products</span>
            </span>
          )}

          <div className="flex items-center gap-1 sm:gap-4 text-xs font-sans">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as FilterState['sortBy'])}
              className="border-0 bg-transparent focus:ring-0 text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-widest p-0 pr-4 sm:pr-6 text-black cursor-pointer"
            >
              <option value="featured">Sort ▼</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          <div className="hidden sm:flex gap-1.5 border-l border-[#E5E5E5] pl-3 sm:pl-6">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              className={`p-1 ${viewMode === 'grid' ? 'text-black' : 'text-[#717171] opacity-50'}`}
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('list')}
              className={`p-1 ${viewMode === 'list' ? 'text-black' : 'text-[#717171] opacity-50'}`}
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
