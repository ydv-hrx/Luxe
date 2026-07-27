'use client';

import React from 'react';
import { FooterBuilderBlock } from './footerMockData';

export interface VisualFooterBuilderProps {
  blocks?: FooterBuilderBlock[];
  activeVariantName: string;
  onToggleHideBlock?: (id: string) => void;
  onRemoveBlock?: (id: string) => void;
}

export const VisualFooterBuilder: React.FC<VisualFooterBuilderProps> = ({
  blocks: _blocks,
  activeVariantName,
  onToggleHideBlock: _onToggleHideBlock,
  onRemoveBlock: _onRemoveBlock,
}) => {
  return (
    <section className="flex-1 flex flex-col min-w-[500px] bg-white border-r border-[#c4c7c7] font-sans select-none h-full">
      {/* Header */}
      <header className="p-6 border-b border-[#c4c7c7] flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-black">Visual Footer Builder</h2>
          <p className="text-xs text-[#444748] mt-0.5">
            Editing: <span className="font-bold text-black">{activeVariantName}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-[#efeded] text-black rounded-xl font-semibold text-xs hover:bg-[#e9e8e8] transition-colors"
          >
            History
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-black text-white rounded-xl font-semibold text-xs hover:opacity-90 transition-all shadow-md"
          >
            Save Changes
          </button>
        </div>
      </header>

      {/* Builder Blocks Canvas */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#f4f3f3]">
        {/* Brand Identity Block */}
        <div className="bg-white rounded-2xl border border-[#c4c7c7] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] group relative hover:border-black/30 transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black bg-black/5 p-2 rounded-lg text-[20px]">
                pentagon
              </span>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                Brand Identity
              </h4>
            </div>
            <div className="flex gap-1 text-[#747878]">
              <button type="button" className="p-1.5 hover:text-black transition-colors" title="Duplicate">
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
              </button>
              <button type="button" className="p-1.5 hover:text-black transition-colors" title="Hide">
                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
              </button>
              <button type="button" className="p-1.5 hover:text-[#ba1a1a] transition-colors" title="Delete">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#f4f3f3] rounded-xl flex items-center justify-center border border-dashed border-[#747878] shrink-0">
                <span className="material-symbols-outlined text-[#747878]">add_photo_alternate</span>
              </div>
              <div className="flex-1">
                <label className="text-[10px] uppercase font-bold text-[#444748] block mb-1">
                  Footer Description
                </label>
                <p className="text-xs text-[#444748] leading-relaxed font-sans">
                  Crafted for the modern director. Luxora Atelier defines the new standard in luxury logistics and aesthetic management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links Block */}
        <div className="bg-white rounded-2xl border border-[#c4c7c7] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] group relative">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black bg-black/5 p-2 rounded-lg text-[20px]">
                link
              </span>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                Navigation Links
              </h4>
            </div>
            <div className="flex gap-1 text-[#747878]">
              <button type="button" className="p-1.5 hover:text-black">
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
              </button>
              <button type="button" className="p-1.5 hover:text-[#ba1a1a]">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-[#faf9f9] rounded-xl border border-[#c4c7c7]">
              <span className="text-[10px] font-bold uppercase text-[#444748]">Shop</span>
              <div className="mt-1 space-y-1">
                <div className="text-xs text-black font-medium">All Products</div>
                <div className="text-xs text-black font-medium">New Arrivals</div>
              </div>
            </div>
            <div className="p-3 bg-[#faf9f9] rounded-xl border border-[#c4c7c7]">
              <span className="text-[10px] font-bold uppercase text-[#444748]">Collections</span>
              <div className="mt-1 space-y-1">
                <div className="text-xs text-black font-medium">Winter 24</div>
                <div className="text-xs text-black font-medium">Runway</div>
              </div>
            </div>
            <button
              type="button"
              className="border border-dashed border-[#c4c7c7] rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-[#efeded] transition-colors group p-4"
            >
              <span className="material-symbols-outlined text-[#747878] group-hover:text-black">add</span>
              <span className="text-[10px] font-bold uppercase text-[#747878] group-hover:text-black">
                Add Column
              </span>
            </button>
          </div>
        </div>

        {/* Newsletter Signup Block */}
        <div className="bg-white rounded-2xl border border-[#c4c7c7] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] group relative">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black bg-black/5 p-2 rounded-lg text-[20px]">
                mail
              </span>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                Newsletter Signup
              </h4>
            </div>
            <div className="flex gap-1 text-[#747878]">
              <button type="button" className="p-1.5 hover:text-black">
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
              </button>
              <button type="button" className="p-1.5 hover:text-[#ba1a1a]">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
          <div className="border-l-2 border-[#755a24] pl-4 py-1">
            <h5 className="font-serif text-lg italic mb-2 text-black">"Join the Inner Circle"</h5>
            <div className="relative max-w-sm">
              <input
                type="text"
                placeholder="Email address"
                className="w-full border-0 border-b border-[#c4c7c7] focus:ring-0 focus:border-[#755a24] transition-all py-2 pr-20 bg-transparent text-xs outline-none text-black"
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-[#755a24] tracking-widest px-4"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Commerce & Trust Block */}
        <div className="bg-white rounded-2xl border border-[#c4c7c7] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] group relative">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black bg-black/5 p-2 rounded-lg text-[20px]">
                verified_user
              </span>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                Commerce &amp; Trust
              </h4>
            </div>
            <div className="flex gap-1 text-[#747878]">
              <button type="button" className="p-1.5 hover:text-[#ba1a1a]">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4 opacity-50 text-black">
            <span className="material-symbols-outlined text-[32px]">credit_card</span>
            <span className="material-symbols-outlined text-[32px]">account_balance_wallet</span>
            <span className="material-symbols-outlined text-[32px]">security</span>
          </div>
        </div>

        {/* Legal & Utilities Block */}
        <div className="bg-white rounded-2xl border border-[#c4c7c7] p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] group relative">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-black bg-black/5 p-2 rounded-lg text-[20px]">
                gavel
              </span>
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-black">
                Legal &amp; Utilities
              </h4>
            </div>
            <div className="flex gap-1 text-[#747878]">
              <button type="button" className="p-1.5 hover:text-[#ba1a1a]">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-[#444748] font-medium">
            <div className="flex gap-4">
              <span>© 2023 LUXORA ATELIER</span>
              <span>TERMS</span>
              <span>PRIVACY</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">language</span>
              <span>ENGLISH (US)</span>
            </div>
          </div>
        </div>

        {/* Add Block Action */}
        <div className="pt-6 pb-12 flex flex-col items-center">
          <button type="button" className="group flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white border border-[#c4c7c7] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-black transition-all duration-300">
              <span className="material-symbols-outlined text-black">add</span>
            </div>
            <span className="font-sans text-xs font-semibold text-[#444748] group-hover:text-black transition-colors">
              Add Block
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
