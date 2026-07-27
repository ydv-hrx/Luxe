'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { InventoryDirectoryItem } from './inventoryMockData';

export interface InventoryDirectorySidebarProps {
  items: InventoryDirectoryItem[];
  activeItemId: string;
  activeFilter: string;
  onSelectItem: (id: string) => void;
  onSelectFilter: (filter: 'All' | 'Low Stock' | 'Out of Stock' | 'Warehouse') => void;
}

export const InventoryDirectorySidebar: React.FC<InventoryDirectorySidebarProps> = ({
  items,
  activeItemId,
  activeFilter,
  onSelectItem,
  onSelectFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeFilter === 'Low Stock') return matchesSearch && item.status === 'Low Stock';
    if (activeFilter === 'Out of Stock') return matchesSearch && item.status === 'Out of Stock';
    return matchesSearch;
  });

  return (
    <section className="w-96 shrink-0 border-r border-[#c4c7c7]/20 flex flex-col bg-[#faf9f9]/50 font-sans select-none h-full">
      <div className="p-6 sm:p-10 flex flex-col gap-6">
        <h1 className="text-3xl font-serif font-semibold text-black">Inventory</h1>

        {/* Search Input */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Atelier SKU..."
            className="w-full bg-[#f4f3f3] border-none rounded-xl pl-10 pr-4 py-3 text-xs font-sans text-black focus:ring-1 focus:ring-[#755a24]/30 outline-none"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {(['All', 'Low Stock', 'Out of Stock', 'Warehouse'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onSelectFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-black text-white'
                  : 'border border-[#c4c7c7]/30 hover:bg-[#e3e2e2] text-[#444748]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Cards List */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-4">
        {filtered.map((item) => {
          const isActive = activeItemId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectItem(item.id)}
              className={`bg-white p-4 rounded-2xl border transition-all cursor-pointer group ${
                isActive
                  ? 'border-black shadow-xl'
                  : item.status === 'Low Stock'
                  ? 'border-[#c4c7c7]/20 border-l-4 border-l-[#755a24] hover:shadow-xl'
                  : 'border-[#c4c7c7]/20 hover:shadow-xl'
              }`}
            >
              <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl bg-[#efeded] overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h3 className="font-serif text-sm font-semibold text-black truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#444748] mt-0.5">SKU: {item.sku}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-bold text-black">{item.units} Units</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        item.status === 'Available'
                          ? 'bg-[#ffdb99]/30 text-[#795f28]'
                          : item.status === 'Low Stock'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-[#efeded] text-[#444748]'
                      }`}
                    >
                      {item.status}
                    </span>
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
