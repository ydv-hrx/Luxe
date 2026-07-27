'use client';

import React, { useState, useMemo } from 'react';
import { Product, FilterState } from '@/types';
import { DiscoveryToolbar } from '@/features/shop/DiscoveryToolbar';
import { SidebarFilters } from '@/features/shop/SidebarFilters';
import { ShopProductGrid } from '@/features/shop/ShopProductGrid';

interface ShopClientContainerProps {
  initialProducts: Product[];
  currentCategory: string;
}

export const ShopClientContainer: React.FC<ShopClientContainerProps> = ({
  initialProducts,
  currentCategory,
}) => {
  const [showDesktopFilters, setShowDesktopFilters] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(currentCategory || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [sortBy, setSortBy] = useState<FilterState['sortBy']>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by selected category
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(
        (p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          p.tags?.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
    }

    // Filter by Tab
    if (currentTab === 'bestsellers') {
      result = result.filter((p) => p.isBestSeller || (p.rating && p.rating >= 4.7));
    } else if (currentTab === 'new-drops') {
      result = result.filter((p) => p.isNew || p.tags?.includes('new-arrivals'));
    } else if (currentTab === 'limited') {
      result = result.filter((p) => p.isLimitedEdition || p.price.amount > 1000);
    }

    // Filter by price range
    if (selectedPriceRange === 'under-500') {
      result = result.filter((p) => p.price.amount < 500);
    } else if (selectedPriceRange === '500-1500') {
      result = result.filter((p) => p.price.amount >= 500 && p.price.amount <= 1500);
    } else if (selectedPriceRange === '1500-5000') {
      result = result.filter((p) => p.price.amount >= 1500 && p.price.amount <= 5000);
    } else if (selectedPriceRange === 'above-5000') {
      result = result.filter((p) => p.price.amount > 5000);
    }

    // Sort products
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price.amount - b.price.amount);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price.amount - a.price.amount);
    }

    return result;
  }, [initialProducts, selectedCategory, currentTab, selectedPriceRange, sortBy]);

  const handleToggleFilters = () => {
    // On screen sizes < 1024px, toggle mobile drawer. On lg+, toggle desktop sidebar.
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsMobileFilterOpen(!isMobileFilterOpen);
    } else {
      setShowDesktopFilters(!showDesktopFilters);
    }
  };

  return (
    <div className="w-full">
      {/* Discovery Toolbar */}
      <DiscoveryToolbar
        onToggleFilters={handleToggleFilters}
        showFilters={showDesktopFilters}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalProducts={filteredProducts.length}
      />

      {/* Main Catalog Layout */}
      <div className="max-w-[1440px] mx-auto flex">
        {/* Desktop Sidebar & Mobile Off-Canvas Drawer */}
        <SidebarFilters
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setIsMobileFilterOpen(false);
          }}
          selectedPriceRange={selectedPriceRange}
          onSelectPriceRange={(range) => {
            setSelectedPriceRange(range);
            setIsMobileFilterOpen(false);
          }}
          isOpenMobile={isMobileFilterOpen}
          onCloseMobile={() => setIsMobileFilterOpen(false)}
        />

        {/* Product Grid */}
        <ShopProductGrid products={filteredProducts} viewMode={viewMode} />
      </div>
    </div>
  );
};
