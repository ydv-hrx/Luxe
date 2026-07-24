'use client';

import React, { useState } from 'react';
import { FilterState } from '@/types';
import { Button } from '@/components/ui/Button';
import { X, SlidersHorizontal, RotateCcw } from 'lucide-react';

export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Partial<FilterState>) => void;
  currentFilters?: FilterState;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  onApply,
  currentFilters,
}) => {
  const [minPrice, setMinPrice] = useState<number>(currentFilters?.minPrice || 0);
  const [maxPrice, setMaxPrice] = useState<number>(currentFilters?.maxPrice || 2000);
  const [selectedColors, setSelectedColors] = useState<string[]>(currentFilters?.colors || []);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(currentFilters?.sizes || []);
  const [inStockOnly, setInStockOnly] = useState<boolean>(currentFilters?.inStockOnly || false);

  if (!isOpen) return null;

  const colorOptions = ['Onyx Black', 'Oatmeal', 'Slate Gray', 'Camel', 'Midnight Navy', 'Emerald Green'];
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];

  const toggleColor = (col: string) => {
    setSelectedColors((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  const toggleSize = (sz: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  const handleReset = () => {
    setMinPrice(0);
    setMaxPrice(2000);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
  };

  const handleApply = () => {
    onApply({
      minPrice,
      maxPrice,
      colors: selectedColors,
      sizes: selectedSizes,
      inStockOnly,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Catalog Filters">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-neutral-900" />
              <h2 className="text-base font-semibold uppercase tracking-wider text-neutral-900">
                Filter & Sort
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-black rounded-full transition-colors"
              aria-label="Close filters drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Options Content */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            {/* Price Range Slider */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Price Range (${minPrice} - ${maxPrice} USD)
              </span>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
              </div>
            </div>

            {/* Colors */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Color Palette
              </span>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((col) => {
                  const isSelected = selectedColors.includes(col);
                  return (
                    <button
                      key={col}
                      type="button"
                      onClick={() => toggleColor(col)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {col}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Size
              </span>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((sz) => {
                  const isSelected = selectedSizes.includes(sz);
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => toggleSize(sz)}
                      className={`w-10 h-10 text-xs font-bold rounded-xl border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                In Stock Items Only
              </span>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-5 h-5 accent-black rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-neutral-100 bg-neutral-50/50 flex gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={handleReset}
              className="gap-1 text-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </Button>
            <Button variant="primary" size="md" fullWidth onClick={handleApply}>
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
