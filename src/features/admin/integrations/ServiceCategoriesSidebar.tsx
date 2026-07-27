'use client';

import React from 'react';
import { ServiceCategory } from './integrationsMockData';

export interface ServiceCategoriesSidebarProps {
  categories: ServiceCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const ServiceCategoriesSidebar: React.FC<ServiceCategoriesSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
}) => {
  return (
    <section className="w-full lg:w-1/4 space-y-4 font-sans select-none shrink-0">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#444748] mb-4 px-2">
        Services
      </h3>
      <div className="space-y-2">
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group text-left cursor-pointer ${
                isActive
                  ? 'bg-white border border-[#755a24]/30 shadow-sm'
                  : 'hover:bg-[#e9e8e8]/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-black text-white'
                      : 'bg-[#e3e2e2] text-[#444748] group-hover:bg-black group-hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-black">{cat.name}</p>
                  <p className="text-[10px] text-[#444748] uppercase tracking-wider">
                    {cat.countText}
                  </p>
                </div>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${
                  cat.statusType === 'alert' ? 'bg-red-600 animate-pulse' : 'bg-[#755a24]'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
