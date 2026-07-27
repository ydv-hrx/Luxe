'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FooterVariantItem } from './footerMockData';

export interface FooterVariantsSidebarProps {
  variants: FooterVariantItem[];
  activeVariantId: string;
  onSelectVariant: (id: string) => void;
}

export const FooterVariantsSidebar: React.FC<FooterVariantsSidebarProps> = ({
  variants,
  activeVariantId,
  onSelectVariant,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = variants.filter((v) =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-80 shrink-0 border-r border-[#c4c7c7] flex flex-col bg-[#f4f3f3] font-sans select-none h-full">
      {/* Header */}
      <header className="p-6 pb-4">
        <h2 className="font-serif text-2xl font-semibold text-black mb-4">Footer Manager</h2>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#747878] group-focus-within:text-black transition-colors text-sm">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search variants..."
            className="w-full pl-10 pr-4 py-2 bg-white border-none rounded-xl text-xs font-sans text-black focus:ring-1 focus:ring-black outline-none"
          />
        </div>
      </header>

      {/* Variant Cards Directory */}
      <div className="flex-1 overflow-y-auto px-4 space-y-3 pb-6">
        {filtered.map((item) => {
          const isActive = activeVariantId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectVariant(item.id)}
              className={`p-3 bg-white rounded-2xl cursor-pointer group transition-all duration-300 ${
                isActive
                  ? 'border border-black shadow-md ring-2 ring-black/5'
                  : 'border border-[#c4c7c7]/40 hover:border-black'
              }`}
            >
              <div className="aspect-video w-full rounded-lg mb-3 overflow-hidden bg-[#e9e8e8] border border-[#c4c7c7]/30 relative flex items-center justify-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1b1c1c] flex items-center justify-center">
                    <span className="text-white font-serif text-xs opacity-30 tracking-widest font-bold">
                      LUXORA
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className={`text-xs font-semibold ${isActive ? 'text-black font-bold' : 'text-[#1b1c1c]'}`}>
                  {item.name}
                </h3>
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                    item.status === 'Live'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-[#e3e2e2] text-[#444748]'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-[11px] text-[#444748]">Updated: {item.updatedDate}</p>
            </div>
          );
        })}
      </div>

      {/* New Variant CTA */}
      <div className="p-4 bg-[#f4f3f3] border-t border-[#c4c7c7]/30">
        <button
          type="button"
          className="w-full py-3 bg-white border border-[#c4c7c7] text-black rounded-xl font-semibold text-xs hover:bg-[#efeded] transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>New Footer Variant</span>
        </button>
      </div>
    </section>
  );
};
