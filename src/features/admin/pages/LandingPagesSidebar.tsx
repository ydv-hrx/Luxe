'use client';

import React from 'react';
import Image from 'next/image';
import { LandingPageItem } from './landingPageMockData';

export interface LandingPagesSidebarProps {
  pages: LandingPageItem[];
  activePageId: string;
  activeCategory: string;
  onSelectPage: (id: string) => void;
  onSelectCategory: (category: string) => void;
}

export const LandingPagesSidebar: React.FC<LandingPagesSidebarProps> = ({
  pages,
  activePageId,
  activeCategory,
  onSelectPage,
  onSelectCategory,
}) => {
  const categories = ['Campaign Pages', 'Seasonal', 'Lookbooks', 'Editorial', 'Brand Stories'];

  return (
    <section className="w-80 shrink-0 border-r border-[#c4c7c7]/40 bg-[#faf9f9] flex flex-col font-sans select-none h-full">
      {/* Header */}
      <div className="p-6 pb-4 flex justify-between items-center">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#444748] opacity-70">
          Landing Pages
        </h3>
        <button
          type="button"
          className="material-symbols-outlined text-black p-1 hover:bg-[#efeded] rounded-full transition-all"
          title="Add Landing Page"
        >
          add
        </button>
      </div>

      {/* Category Pills List */}
      <div className="px-6 py-2 space-y-1">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold font-sans transition-colors ${
              activeCategory === cat
                ? 'text-[#755a24] bg-[#ffdb99]/20 font-bold'
                : 'text-[#444748] hover:bg-[#efeded]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scrollable Page Cards Directory */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {pages.map((p) => {
          const isActive = activePageId === p.id;

          return (
            <div
              key={p.id}
              onClick={() => onSelectPage(p.id)}
              className={`p-3 rounded-2xl cursor-pointer group transition-all duration-300 ${
                isActive
                  ? 'bg-white border border-[#c4c7c7]/30 shadow-xl'
                  : 'bg-white border border-dashed border-[#c4c7c7]/30 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-[#efeded]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    !isActive ? 'grayscale' : ''
                  }`}
                />
                <div
                  className={`absolute top-2 right-2 text-[8px] text-white px-2 py-0.5 rounded-full uppercase tracking-widest font-bold ${
                    p.status === 'Live' ? 'bg-black' : 'bg-[#444748]'
                  }`}
                >
                  {p.status}
                </div>
              </div>
              <h4 className="font-serif text-sm font-semibold truncate mb-1 text-black">
                {p.title}
              </h4>
              <div className="flex justify-between items-center text-[10px] text-[#444748] uppercase tracking-tighter">
                <span>{p.viewsText}</span>
                <span>{p.updatedText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
