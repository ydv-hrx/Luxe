'use client';

import React from 'react';
import Image from 'next/image';
import { CollectionEditorState, EditorialMoodboardProduct } from './collectionMockData';

export interface CollectionEditorCenterProps {
  state: CollectionEditorState;
  moodboardProducts: EditorialMoodboardProduct[];
  onChangeInternalTitle: (val: string) => void;
  onChangeUrlHandle: (val: string) => void;
  onChangeHeadline: (val: string) => void;
  onChangeSubheadline: (val: string) => void;
  onChangeDescription: (val: string) => void;
  onToggleVisibility: () => void;
}

export const CollectionEditorCenter: React.FC<CollectionEditorCenterProps> = ({
  state,
  moodboardProducts,
  onChangeInternalTitle,
  onChangeUrlHandle,
  onChangeHeadline,
  onChangeSubheadline,
  onChangeDescription,
  onToggleVisibility,
}) => {
  return (
    <section className="flex-1 overflow-y-auto bg-white font-sans select-none min-w-0">
      <div className="max-w-4xl mx-auto py-12 sm:py-16 px-6 sm:px-12 space-y-12 sm:space-y-16">
        {/* 01. IDENTITY */}
        <div className="space-y-8">
          <div className="flex justify-between items-end border-b border-[#c4c7c7]/30 pb-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              01. Identity
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-black">
                Public Visibility
              </span>
              <div
                onClick={onToggleVisibility}
                className={`w-10 h-5 rounded-full relative cursor-pointer shadow-inner transition-colors ${
                  state.isPublicVisible ? 'bg-black' : 'bg-[#c4c7c7]'
                }`}
              >
                <div
                  className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                    state.isPublicVisible ? 'right-1' : 'left-1'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase opacity-40 tracking-wider text-black">
                Internal Title
              </label>
              <input
                type="text"
                value={state.internalTitle}
                onChange={(e) => onChangeInternalTitle(e.target.value)}
                className="w-full border-none focus:ring-0 bg-transparent p-0 font-serif text-2xl sm:text-3xl text-black border-b border-[#c4c7c7]/30 focus:border-black transition-all pb-2 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase opacity-40 tracking-wider text-black">
                URL Handle
              </label>
              <div className="flex items-center border-b border-[#c4c7c7]/30 focus-within:border-black transition-all pb-2">
                <span className="text-[#444748]/40 text-sm font-medium">/collections/</span>
                <input
                  type="text"
                  value={state.urlHandle}
                  onChange={(e) => onChangeUrlHandle(e.target.value)}
                  className="flex-1 border-none focus:ring-0 bg-transparent p-0 text-sm font-sans text-[#444748] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 02. EDITORIAL CONTENT */}
        <div className="space-y-8">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
            02. Editorial Content
          </h3>
          <div className="space-y-8 p-8 sm:p-12 bg-white border border-[#c4c7c7]/50 rounded-[2rem] shadow-sm relative overflow-hidden group">
            {/* Rich Text Toolbar */}
            <div className="absolute top-6 right-8 flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
              <button type="button" className="material-symbols-outlined text-sm hover:text-black">
                format_bold
              </button>
              <button type="button" className="material-symbols-outlined text-sm hover:text-black">
                format_italic
              </button>
              <button type="button" className="material-symbols-outlined text-sm hover:text-black">
                link
              </button>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-black -ml-6">
              <textarea
                value={state.headline}
                onChange={(e) => onChangeHeadline(e.target.value)}
                placeholder="Headline"
                rows={2}
                className="w-full border-none focus:ring-0 p-0 text-3xl sm:text-5xl font-serif leading-[1.1] resize-none text-black outline-none bg-transparent"
              />
              <textarea
                value={state.subheadline}
                onChange={(e) => onChangeSubheadline(e.target.value)}
                placeholder="Subheadline"
                rows={1}
                className="w-full border-none focus:ring-0 p-0 text-base sm:text-lg text-[#444748] italic font-light resize-none outline-none bg-transparent"
              />
            </div>

            <div className="h-px bg-[#c4c7c7]/20 w-full" />

            <textarea
              value={state.description}
              onChange={(e) => onChangeDescription(e.target.value)}
              placeholder="Describe the soul of this collection..."
              rows={4}
              className="w-full border-none focus:ring-0 p-0 text-sm sm:text-base leading-relaxed bg-transparent text-black/80 outline-none resize-none"
            />
          </div>
        </div>

        {/* LUXORA INTELLIGENCE AI CARD */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg shrink-0">
              <span className="material-symbols-outlined scale-110">auto_awesome</span>
            </div>
            <div>
              <p className="font-serif text-lg font-semibold mb-0.5">Luxora Intelligence</p>
              <p className="text-[11px] opacity-60 uppercase tracking-[0.15em] font-medium font-sans">
                Ready to optimize editorial flow
              </p>
            </div>
          </div>
          <div className="flex gap-3 relative z-10 shrink-0">
            <button
              type="button"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
            >
              Generate Story
            </button>
            <button
              type="button"
              className="px-5 py-2.5 bg-white text-black hover:bg-[#faf9f9] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl transition-all"
            >
              Optimize SEO
            </button>
          </div>
        </div>

        {/* 03. VISUAL NARRATIVE */}
        <div className="space-y-8">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
            03. Visual Narrative
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Desktop Banner (col-span-8) */}
            <div className="md:col-span-8 aspect-[16/8] bg-[#efeded] rounded-3xl relative overflow-hidden border border-[#c4c7c7]/30 shadow-sm group">
              <Image
                src={state.desktopBanner}
                alt="Desktop Master Banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 backdrop-blur-[2px]">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl"
                >
                  <span className="material-symbols-outlined text-sm">upload_file</span> Change
                </button>
                <button
                  type="button"
                  className="w-10 h-10 border border-white/50 text-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="bg-black/60 backdrop-blur px-3 py-1 rounded-md">
                  <p className="text-[9px] text-white uppercase font-bold tracking-[0.2em]">
                    Desktop Master (2560px)
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Vertical Banner (col-span-4) */}
            <div className="md:col-span-4 aspect-[4/5] bg-[#efeded] rounded-3xl relative overflow-hidden border border-[#c4c7c7]/30 shadow-sm group">
              <Image
                src={state.mobileBanner}
                alt="Mobile Vertical Banner"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="bg-black/60 backdrop-blur px-3 py-1 rounded-md">
                  <p className="text-[9px] text-white uppercase font-bold tracking-[0.2em]">
                    Mobile (Vertical)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04. EDITORIAL MOODBOARD */}
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-[#c4c7c7]/30 pb-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              04. Editorial Moodboard
            </h3>
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black hover:opacity-70 transition-all"
            >
              <span className="material-symbols-outlined text-sm">add_circle</span> Add Assets
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {moodboardProducts.map((prod) => (
              <div key={prod.id} className="group space-y-4">
                <div className="aspect-[3/4.5] bg-[#faf9f9] rounded-3xl overflow-hidden border border-[#c4c7c7]/30 relative shadow-sm hover:shadow-xl transition-all duration-500">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 flex flex-col gap-2">
                    <button
                      type="button"
                      className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">drag_indicator</span>
                    </button>
                    <button
                      type="button"
                      className="w-9 h-9 bg-white text-[#ba1a1a] rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-[8px] font-black uppercase tracking-widest rounded-sm text-black">
                      {prod.stockBadge}
                    </span>
                  </div>
                </div>
                <div className="px-2 font-sans">
                  <p className="font-serif text-base text-black font-semibold">{prod.title}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[11px] font-bold tracking-wider opacity-40 text-black">
                      {prod.price}
                    </p>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${prod.availabilityColor}`}>
                      {prod.stockStatus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLLECTION INSIGHTS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-[#c4c7c7]/30 font-sans">
          <div className="space-y-1">
            <p className="text-[9px] uppercase font-black tracking-[0.25em] text-[#444748]/40">
              Performance
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-serif leading-none text-black font-semibold">12.4K</h4>
              <span className="text-[10px] text-green-600 font-bold">+14%</span>
            </div>
            <p className="text-[10px] text-[#444748]/60 font-medium italic">Unique views this month</p>
          </div>

          <div className="space-y-1">
            <p className="text-[9px] uppercase font-black tracking-[0.25em] text-[#444748]/40">
              Engagement
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-serif leading-none text-black font-semibold">3.1K</h4>
              <span className="text-[10px] text-green-600 font-bold">+8%</span>
            </div>
            <p className="text-[10px] text-[#444748]/60 font-medium italic">CTA click-through</p>
          </div>

          <div className="space-y-1">
            <p className="text-[9px] uppercase font-black tracking-[0.25em] text-[#444748]/40">
              Revenue
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-serif leading-none text-black font-semibold">$42.5K</h4>
              <span className="text-[10px] text-[#444748]/40 font-bold">STBL</span>
            </div>
            <p className="text-[10px] text-[#444748]/60 font-medium italic">Attributed sales</p>
          </div>

          <div className="space-y-1">
            <p className="text-[9px] uppercase font-black tracking-[0.25em] text-[#444748]/40">
              Conversion
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-3xl font-serif leading-none text-black font-semibold">2.4%</h4>
              <span className="text-[10px] text-[#ba1a1a] font-bold">-0.2%</span>
            </div>
            <p className="text-[10px] text-[#444748]/60 font-medium italic">View to purchase</p>
          </div>
        </div>
      </div>
    </section>
  );
};
