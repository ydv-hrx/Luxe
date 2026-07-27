'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus, X } from 'lucide-react';

interface SidebarFiltersProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedPriceRange: string;
  onSelectPriceRange: (range: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedPriceRange,
  onSelectPriceRange,
  isOpenMobile = false,
  onCloseMobile,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    brand: false,
    price: true,
    color: false,
    material: false,
    availability: false,
    rating: false,
  });

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpenMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenMobile]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Fashion & Outerwear', value: 'fashion' },
    { label: 'Audio & Tech', value: 'electronics' },
    { label: 'Furniture & Living', value: 'furniture' },
    { label: 'Beauty & Wellness', value: 'beauty' },
    { label: 'Accessories & Watches', value: 'accessories' },
  ];

  const priceRanges = [
    { label: 'Under $500', value: 'under-500' },
    { label: '$500 - $1,500', value: '500-1500' },
    { label: '$1,500 - $5,000', value: '1500-5000' },
    { label: '$5,000+', value: 'above-5000' },
  ];

  const filterContent = (
    <div className="space-y-6 font-sans">
      {/* Category Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('category')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Category
          {openSections.category ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
        {openSections.category && (
          <div className="space-y-3 pt-1">
            {categories.map((c) => (
              <label
                key={c.value}
                onClick={() => onSelectCategory(c.value)}
                className="flex items-center gap-3 text-xs text-[#717171] hover:text-black cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === c.value}
                  onChange={() => onSelectCategory(c.value)}
                  className="rounded-sm border-gray-300 text-black focus:ring-black"
                />
                {c.label}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('brand')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Brand
          {openSections.brand ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
        {openSections.brand && (
          <div className="space-y-2 text-xs text-[#717171] pt-1">
            <p className="hover:text-black cursor-pointer">Aurelia Paris</p>
            <p className="hover:text-black cursor-pointer">Sonic Labs</p>
            <p className="hover:text-black cursor-pointer">NORR11</p>
            <p className="hover:text-black cursor-pointer">Byredo</p>
            <p className="hover:text-black cursor-pointer">Leica</p>
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Price Range
          {openSections.price ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
        {openSections.price && (
          <div className="space-y-3 pt-1">
            {priceRanges.map((r) => (
              <label key={r.value} className="flex items-center gap-3 text-xs text-[#717171] hover:text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedPriceRange === r.value}
                  onChange={() => onSelectPriceRange(selectedPriceRange === r.value ? '' : r.value)}
                  className="rounded-sm border-gray-300 text-black focus:ring-black"
                />
                {r.label}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('color')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Color
          {openSections.color ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
        {openSections.color && (
          <div className="flex gap-2 pt-1 flex-wrap">
            <span className="w-5 h-5 rounded-full bg-black border border-neutral-300 cursor-pointer" />
            <span className="w-5 h-5 rounded-full bg-neutral-200 border border-neutral-300 cursor-pointer" />
            <span className="w-5 h-5 rounded-full bg-amber-800 border border-neutral-300 cursor-pointer" />
            <span className="w-5 h-5 rounded-full bg-stone-400 border border-neutral-300 cursor-pointer" />
          </div>
        )}
      </div>

      {/* Material Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('material')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Material
          {openSections.material ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
      </div>

      {/* Availability Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('availability')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Availability
          {openSections.availability ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
      </div>

      {/* Rating Filter */}
      <div className="border-b border-[#E5E5E5] pb-4">
        <button
          type="button"
          onClick={() => toggleSection('rating')}
          className="flex justify-between items-center w-full text-[11px] uppercase tracking-widest font-semibold mb-4 text-black"
        >
          Rating
          {openSections.rating ? <Minus className="w-3 h-3 text-black" /> : <Plus className="w-3 h-3 text-black" />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (lg and above) */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-[#E5E5E5] p-6 space-y-8 font-sans">
        {filterContent}
      </aside>

      {/* Mobile / Tablet Off-Canvas Drawer (<lg) */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Off-Canvas Panel */}
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center pb-6 border-b border-neutral-200 mb-6">
              <h3 className="font-serif text-xl text-black">Filter Products</h3>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-2 text-neutral-500 hover:text-black"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {filterContent}

            <button
              type="button"
              onClick={onCloseMobile}
              className="w-full mt-8 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};
