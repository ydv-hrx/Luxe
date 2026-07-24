'use client';

import React, { useState } from 'react';
import { FilterState } from '@/types';
import { Button } from '@/components/ui/Button';
import { SlidersHorizontal, RotateCcw, ChevronDown, Check } from 'lucide-react';

export interface FilterSidebarProps {
  onApply: (filters: Partial<FilterState>) => void;
  currentFilters?: FilterState;
  className?: string;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onApply,
  currentFilters,
  className = '',
}) => {
  const [maxPrice, setMaxPrice] = useState<number>(currentFilters?.maxPrice || 3000);
  const [selectedColors, setSelectedColors] = useState<string[]>(currentFilters?.colors || []);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(currentFilters?.sizes || []);
  const [inStockOnly, setInStockOnly] = useState<boolean>(currentFilters?.inStockOnly || false);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    color: true,
    size: true,
    availability: true,
  });

  const toggleSection = (sec: string) => {
    setOpenSections((prev) => ({ ...prev, [sec]: !prev[sec] }));
  };

  const colorOptions = ['Onyx Black', 'Oatmeal', 'Slate Gray', 'Camel', 'Midnight Navy', 'Emerald Green'];
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];

  const toggleColor = (col: string) => {
    const updated = selectedColors.includes(col)
      ? selectedColors.filter((c) => c !== col)
      : [...selectedColors, col];
    setSelectedColors(updated);
    onApply({ maxPrice, colors: updated, sizes: selectedSizes, inStockOnly });
  };

  const toggleSize = (sz: string) => {
    const updated = selectedSizes.includes(sz)
      ? selectedSizes.filter((s) => s !== sz)
      : [...selectedSizes, sz];
    setSelectedSizes(updated);
    onApply({ maxPrice, colors: selectedColors, sizes: updated, inStockOnly });
  };

  const handleReset = () => {
    setMaxPrice(3000);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
    onApply({ maxPrice: 3000, colors: [], sizes: [], inStockOnly: false });
  };

  return (
    <div className={`p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 ${className}`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-neutral-900" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            Refine Catalog
          </h3>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-xs font-semibold text-neutral-500 hover:text-black flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Price Range Accordion */}
      <div className="flex flex-col gap-3 pb-4 border-b border-neutral-100">
        <button
          type="button"
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 w-full text-left"
        >
          <span>Price Ceiling (${maxPrice} USD)</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
        </button>
        {openSections.price && (
          <div className="pt-2">
            <input
              type="range"
              min="0"
              max="3000"
              step="50"
              value={maxPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                setMaxPrice(val);
                onApply({ maxPrice: val, colors: selectedColors, sizes: selectedSizes, inStockOnly });
              }}
              className="w-full accent-black cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 font-semibold mt-1">
              <span>$0 USD</span>
              <span>$3,000 USD</span>
            </div>
          </div>
        )}
      </div>

      {/* Color Palette Accordion */}
      <div className="flex flex-col gap-3 pb-4 border-b border-neutral-100">
        <button
          type="button"
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 w-full text-left"
        >
          <span>Color Palette</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openSections.color ? 'rotate-180' : ''}`} />
        </button>
        {openSections.color && (
          <div className="flex flex-wrap gap-2 pt-1">
            {colorOptions.map((col) => {
              const isSelected = selectedColors.includes(col);
              return (
                <button
                  key={col}
                  type="button"
                  onClick={() => toggleColor(col)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-neutral-50/80 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                  {col}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Size Options Accordion */}
      <div className="flex flex-col gap-3 pb-4 border-b border-neutral-100">
        <button
          type="button"
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 w-full text-left"
        >
          <span>Garment Size</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openSections.size ? 'rotate-180' : ''}`} />
        </button>
        {openSections.size && (
          <div className="flex flex-wrap gap-2 pt-1">
            {sizeOptions.map((sz) => {
              const isSelected = selectedSizes.includes(sz);
              return (
                <button
                  key={sz}
                  type="button"
                  onClick={() => toggleSize(sz)}
                  className={`w-9 h-9 text-xs font-bold rounded-xl border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-neutral-50/80 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Stock Availability Toggle */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
          In Stock Only
        </span>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => {
            const checked = e.target.checked;
            setInStockOnly(checked);
            onApply({ maxPrice, colors: selectedColors, sizes: selectedSizes, inStockOnly: checked });
          }}
          className="w-4 h-4 accent-black rounded cursor-pointer"
        />
      </div>
    </div>
  );
};
