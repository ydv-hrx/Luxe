'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductListItem } from './productMockData';

export interface ProductsDirectorySidebarProps {
  products: ProductListItem[];
  activeProductId: string;
  onSelectProduct: (id: string) => void;
}

export const ProductsDirectorySidebar: React.FC<ProductsDirectorySidebarProps> = ({
  products,
  activeProductId,
  onSelectProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'draft'>('all');

  const filtered = products.filter((p) => {
    if (activeFilter === 'featured' && !p.isFeatured) return false;
    if (activeFilter === 'draft' && p.status !== 'Draft') return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <section className="w-[340px] shrink-0 border-r border-[#c4c7c7]/40 flex flex-col h-full bg-[#f4f3f3] font-sans select-none">
      {/* Search & Filter Chips */}
      <div className="p-6 space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#747878] text-sm">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border-none rounded-2xl text-xs font-sans text-black focus:ring-1 focus:ring-[#755a24]/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] outline-none"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'all'
                ? 'bg-black text-white'
                : 'bg-white text-[#444748] border border-[#c4c7c7]/40 hover:bg-[#faf9f9]'
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('featured')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'featured'
                ? 'bg-black text-white'
                : 'bg-white text-[#444748] border border-[#c4c7c7]/40 hover:bg-[#faf9f9]'
            }`}
          >
            Featured
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('draft')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'draft'
                ? 'bg-black text-white'
                : 'bg-white text-[#444748] border border-[#c4c7c7]/40 hover:bg-[#faf9f9]'
            }`}
          >
            Draft
          </button>
        </div>
      </div>

      {/* Product List Cards */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
        {filtered.map((prod) => {
          const isActive = activeProductId === prod.id;

          return (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod.id)}
              className={`p-4 bg-white rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'border-2 border-black shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]'
                  : 'border border-[#c4c7c7]/30 hover:border-black/30 group'
              }`}
            >
              <div className="flex gap-4">
                <div className="w-20 h-24 rounded-lg bg-[#e3e2e2] overflow-hidden shrink-0 relative">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    {prod.isFeatured ? (
                      <span className="text-[10px] text-[#755a24] font-bold uppercase tracking-widest">
                        Featured
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#747878] font-mono">{prod.sku}</span>
                    )}
                    {prod.isFeatured && (
                      <span className="text-[10px] text-[#747878] font-mono">{prod.sku}</span>
                    )}
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-semibold truncate leading-tight mb-1 text-black">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        prod.status === 'Published' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    />
                    <span className="text-xs text-[#444748]">{prod.status}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-black text-sm">{prod.price}</span>
                    <span className="text-xs text-[#747878]">{prod.inventoryCount} in stock</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
