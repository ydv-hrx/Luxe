'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, RotateCcw, ChevronDown, Check } from 'lucide-react';

export interface FilterSidebarProps {
  updateQueryParams: (params: Record<string, string | string[] | null>) => void;
  className?: string;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  updateQueryParams,
  className = '',
}) => {
  const searchParams = useSearchParams();

  const maxPriceParam = searchParams.get('maxPrice');
  const inStockParam = searchParams.get('inStock') === 'true';
  const selectedColors = searchParams.getAll('color');
  const selectedSizes = searchParams.getAll('size');
  const selectedVendors = searchParams.getAll('vendor');
  const selectedMaterials = searchParams.getAll('material');

  const maxPrice = maxPriceParam ? Number(maxPriceParam) : 3000;

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    color: true,
    size: true,
    vendor: true,
    material: true,
    availability: true,
  });

  const toggleSection = (sec: string) => {
    setOpenSections((prev) => ({ ...prev, [sec]: !prev[sec] }));
  };

  const colorOptions = ['Onyx Black', 'Oatmeal', 'Slate Gray', 'Camel', 'Midnight Navy', 'Emerald Green'];
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
  const vendorOptions = ['LUXE Atelier', 'Mongolian Cashmere', 'Tuscan Leather', 'Savoie Tailoring'];
  const _materialOptions = ['Cashmere', 'Virgin Wool', 'Silk', 'Calfskin Leather', 'Linen'];

  const toggleColor = (col: string) => {
    const updated = selectedColors.includes(col)
      ? selectedColors.filter((c) => c !== col)
      : [...selectedColors, col];
    updateQueryParams({ color: updated });
  };

  const toggleSize = (sz: string) => {
    const updated = selectedSizes.includes(sz)
      ? selectedSizes.filter((s) => s !== sz)
      : [...selectedSizes, sz];
    updateQueryParams({ size: updated });
  };

  const toggleVendor = (v: string) => {
    const updated = selectedVendors.includes(v)
      ? selectedVendors.filter((item) => item !== v)
      : [...selectedVendors, v];
    updateQueryParams({ vendor: updated });
  };

  const _toggleMaterial = (m: string) => {
    const updated = selectedMaterials.includes(m)
      ? selectedMaterials.filter((item) => item !== m)
      : [...selectedMaterials, m];
    updateQueryParams({ material: updated });
  };

  const handleReset = () => {
    updateQueryParams({
      maxPrice: null,
      minPrice: null,
      color: [],
      size: [],
      vendor: [],
      material: [],
      inStock: null,
    });
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
          aria-expanded={openSections.price}
        >
          <span>Price Ceiling (${maxPrice} USD)</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
        </button>
        {openSections.price && (
          <div className="pt-2">
            <input
              type="range"
              min="100"
              max="3000"
              step="50"
              value={maxPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                updateQueryParams({ maxPrice: val === 3000 ? null : String(val) });
              }}
              className="w-full accent-black cursor-pointer"
              aria-label="Filter price ceiling"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 font-semibold mt-1">
              <span>$100 USD</span>
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
          aria-expanded={openSections.color}
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
                  aria-pressed={isSelected}
                >
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                  {col}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Garment Size Accordion */}
      <div className="flex flex-col gap-3 pb-4 border-b border-neutral-100">
        <button
          type="button"
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 w-full text-left"
          aria-expanded={openSections.size}
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
                  aria-pressed={isSelected}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Vendor Brand Accordion */}
      <div className="flex flex-col gap-3 pb-4 border-b border-neutral-100">
        <button
          type="button"
          onClick={() => toggleSection('vendor')}
          className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 w-full text-left"
          aria-expanded={openSections.vendor}
        >
          <span>Atelier Vendor</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openSections.vendor ? 'rotate-180' : ''}`} />
        </button>
        {openSections.vendor && (
          <div className="flex flex-col gap-2 pt-1">
            {vendorOptions.map((v) => {
              const isSelected = selectedVendors.includes(v);
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => toggleVendor(v)}
                  className={`text-left text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors flex items-center justify-between ${
                    isSelected ? 'bg-black text-white font-bold' : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{v}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
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
          checked={inStockParam}
          onChange={(e) => {
            updateQueryParams({ inStock: e.target.checked ? 'true' : null });
          }}
          className="w-4 h-4 accent-black rounded cursor-pointer"
          aria-label="Filter in stock products only"
        />
      </div>
    </div>
  );
};
