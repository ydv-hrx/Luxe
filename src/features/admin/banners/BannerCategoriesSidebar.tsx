'use client';

import React from 'react';
import { BannerCategoryItem } from './bannerMockData';

export interface BannerCategoriesSidebarProps {
  categories: BannerCategoryItem[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  totalViews: string;
  avgCtr: string;
  performanceNote: string;
}

export const BannerCategoriesSidebar: React.FC<BannerCategoriesSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  totalViews,
  avgCtr,
  performanceNote,
}) => {
  return (
    <div className="w-full lg:w-1/5 border-r border-[#c4c7c7]/10 p-4 sm:p-6 overflow-y-auto font-sans select-none shrink-0 bg-[#faf9f9]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="font-serif text-xl sm:text-2xl text-black font-semibold">Categories</h2>
        <button
          type="button"
          className="p-1.5 rounded-full hover:bg-[#e9e8e8] transition-colors text-black"
          title="Add Category"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                isActive
                  ? 'bg-white border-black/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]'
                  : 'bg-[#faf9f9] hover:bg-[#f4f3f3] border-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    isActive ? 'text-black' : 'text-[#444748]'
                  }`}
                >
                  {cat.icon}
                </span>

                {cat.statusBadge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      cat.statusBadge.variant === 'live'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        : 'bg-[#ffdb99]/30 text-[#755a24] border border-[#ffdb99]/40'
                    }`}
                  >
                    {cat.statusBadge.label}
                  </span>
                )}
              </div>

              <p className={`font-sans text-xs sm:text-sm font-semibold ${isActive ? 'text-black font-bold' : 'text-[#1b1c1c]'}`}>
                {cat.title}
              </p>
              <p className="font-sans text-[11px] text-[#444748]/60 mt-0.5">
                {cat.countText}
              </p>
            </div>
          );
        })}
      </div>

      {/* Analytics Summary Card */}
      <div className="mt-8 sm:mt-12 p-5 rounded-2xl bg-black text-white shadow-xl">
        <p className="font-sans text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4">
          Performance
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-bold leading-none font-sans">{totalViews}</p>
            <p className="font-sans text-[10px] opacity-60 mt-1">Total Views</p>
          </div>
          <div>
            <p className="text-2xl font-bold leading-none font-sans">{avgCtr}</p>
            <p className="font-sans text-[10px] opacity-60 mt-1">Avg. CTR</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="font-sans text-xs italic opacity-80 leading-relaxed">
            {performanceNote}
          </p>
        </div>
      </div>
    </div>
  );
};
