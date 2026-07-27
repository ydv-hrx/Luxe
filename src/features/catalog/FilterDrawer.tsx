'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { X, SlidersHorizontal, RotateCcw } from 'lucide-react';

export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  updateQueryParams: (params: Record<string, string | string[] | null>) => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  updateQueryParams,
}) => {
  const searchParams = useSearchParams();

  const maxPriceParam = searchParams.get('maxPrice');
  const inStockParam = searchParams.get('inStock') === 'true';
  const initialColors = searchParams.getAll('color');
  const initialSizes = searchParams.getAll('size');

  const [maxPrice, setMaxPrice] = useState<number>(maxPriceParam ? Number(maxPriceParam) : 3000);
  const [selectedColors, setSelectedColors] = useState<string[]>(initialColors);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(initialSizes);
  const [inStockOnly, setInStockOnly] = useState<boolean>(inStockParam);

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
    setMaxPrice(3000);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
    updateQueryParams({
      maxPrice: null,
      color: [],
      size: [],
      inStock: null,
    });
    onClose();
  };

  const handleApply = () => {
    updateQueryParams({
      maxPrice: maxPrice === 3000 ? null : String(maxPrice),
      color: selectedColors,
      size: selectedSizes,
      inStock: inStockOnly ? 'true' : null,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Mobile Catalog Filters">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

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
              aria-label="Close mobile filters drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Options Content */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            {/* Price Range Slider */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Price Ceiling (${maxPrice} USD)
              </span>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="100"
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

          {/* Sticky Footer CTAs */}
          <div className="p-6 border-t border-neutral-100 bg-neutral-50/50 flex gap-3 sticky bottom-0 z-10">
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
