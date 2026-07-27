'use client';

import React, { useState } from 'react';
import { NavigationMenuItem } from './navigationMockData';

export interface NavigationMenusSidebarProps {
  menus: NavigationMenuItem[];
  activeMenuId: string;
  onSelectMenu: (id: string) => void;
}

export const NavigationMenusSidebar: React.FC<NavigationMenusSidebarProps> = ({
  menus,
  activeMenuId,
  onSelectMenu,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = menus.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="col-span-12 lg:col-span-3 space-y-6 font-sans select-none">
      {/* Header & New Menu CTA */}
      <div className="flex justify-between items-end mb-4">
        <h3 className="font-serif text-2xl font-semibold text-black">Navigation</h3>
        <button
          type="button"
          className="text-[#755a24] font-semibold text-xs flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-[18px]">add</span> New Menu
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#444748] text-sm">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search menus..."
          className="w-full bg-white border-0 border-b border-[#c4c7c7] focus:border-[#755a24] outline-none py-2 pl-10 pr-4 text-xs font-sans text-black"
        />
      </div>

      {/* Menu Cards */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const isActive = activeMenuId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectMenu(item.id)}
              className={`p-4 transition-all cursor-pointer rounded-r-2xl border-l-4 ${
                isActive
                  ? 'bg-white border-[#755a24] shadow-sm'
                  : 'bg-[#f4f3f3] hover:bg-white border-transparent hover:shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-semibold ${isActive ? 'text-black font-bold' : 'text-[#1b1c1c]'}`}>
                  {item.name}
                </span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${
                    item.status === 'Live'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-[#e3e2e0] text-[#464746]'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-[12px] text-[#444748]">{item.linksCountText}</p>
            </div>
          );
        })}
      </div>

      {/* AI Assistant Card */}
      <div className="p-6 bg-[#1c1b1b] text-white rounded-2xl shadow-xl mt-8 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[#ffdea4]">auto_awesome</span>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
            Atelier AI Assistant
          </h4>
        </div>
        <p className="text-xs opacity-80 leading-relaxed font-sans">
          Based on user behavior, I recommend optimizing your "Editorial" section for better mobile discovery.
        </p>
        <div className="space-y-2 pt-2">
          <button
            type="button"
            className="w-full py-2.5 bg-[#858383] text-white text-xs font-bold rounded-lg hover:bg-opacity-90 transition-all"
          >
            Simplify Menu
          </button>
          <button
            type="button"
            className="w-full py-2.5 border border-[#858383] text-[#858383] hover:text-white hover:bg-[#858383] text-xs font-bold rounded-lg transition-all"
          >
            Optimize Mobile
          </button>
        </div>
      </div>
    </section>
  );
};
