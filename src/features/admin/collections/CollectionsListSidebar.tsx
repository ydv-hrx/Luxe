'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CollectionListItem } from './collectionMockData';

export interface CollectionsListSidebarProps {
  collections: CollectionListItem[];
  activeCollectionId: string;
  onSelectCollection: (id: string) => void;
}

export const CollectionsListSidebar: React.FC<CollectionsListSidebarProps> = ({
  collections,
  activeCollectionId,
  onSelectCollection,
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filtered = collections.filter((c) =>
    c.internalTitle.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section className="w-80 shrink-0 border-r border-[#c4c7c7]/40 bg-[#faf9f9] flex flex-col font-sans select-none h-full">
      {/* Header & Filter */}
      <div className="p-6 border-b border-[#c4c7c7]/40 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-serif text-2xl font-semibold text-black">Collections</h2>
          <button
            type="button"
            className="material-symbols-outlined p-2 hover:bg-[#e9e8e8] rounded-full text-black transition-colors"
            title="Create Collection"
          >
            add
          </button>
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748] text-sm">
            filter_list
          </span>
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter collections..."
            className="w-full text-xs bg-[#f4f3f3] border-none rounded-lg pl-9 py-2 text-black outline-none"
          />
        </div>
      </div>

      {/* Scrollable Collections List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {filtered.map((item) => {
          const isActive = activeCollectionId === item.id;

          if (isActive) {
            return (
              <div
                key={item.id}
                onClick={() => onSelectCollection(item.id)}
                className="p-4 bg-black text-white rounded-2xl shadow-xl flex gap-4 cursor-pointer transition-all relative overflow-hidden group"
              >
                {item.isFeatured && (
                  <div className="absolute top-3 right-3 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-md">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-white">
                      Featured
                    </span>
                  </div>
                )}
                <div className="w-14 h-14 rounded-lg bg-[#e9e8e8] overflow-hidden shrink-0 border border-white/20 relative">
                  <Image
                    src={item.image}
                    alt={item.internalTitle}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-xs font-bold truncate text-white">
                    {item.internalTitle}
                  </p>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold text-white/70">
                        {item.productCount} Products
                      </span>
                      <span className="w-1 h-1 bg-green-400 rounded-full" />
                      <span className="text-[10px] uppercase text-green-400 font-bold">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[9px] opacity-40 uppercase">{item.updatedText}</p>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => onSelectCollection(item.id)}
              className="p-4 hover:bg-[#f4f3f3] rounded-2xl flex gap-4 cursor-pointer transition-all border border-transparent hover:border-[#c4c7c7]/30 group"
            >
              <div className="w-14 h-14 rounded-lg bg-[#e9e8e8] overflow-hidden shrink-0 relative">
                <Image
                  src={item.image}
                  alt={item.internalTitle}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs font-bold text-black truncate">
                  {item.internalTitle}
                </p>
                <div className="flex flex-col gap-0.5 mt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold text-[#444748]">
                      {item.productCount} Products
                    </span>
                    <span className="w-1 h-1 bg-[#444748]/30 rounded-full" />
                    <span className="text-[10px] uppercase text-[#444748]/50 font-bold">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[9px] opacity-40 uppercase">{item.updatedText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
