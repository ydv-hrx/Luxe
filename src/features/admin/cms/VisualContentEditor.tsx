'use client';

import React from 'react';
import Image from 'next/image';
import { HomepageCmsState } from './cmsMockData';

export interface VisualContentEditorProps {
  state: HomepageCmsState;
  onChangeHeadline: (val: string) => void;
  onChangeSubheadline: (val: string) => void;
  onChangeCtaText: (val: string) => void;
  onChangeCtaStyle: (style: 'SOLID' | 'OUTLINE') => void;
}

export const VisualContentEditor: React.FC<VisualContentEditorProps> = ({
  state,
  onChangeHeadline,
  onChangeSubheadline,
  onChangeCtaText,
  onChangeCtaStyle,
}) => {
  return (
    <section className="w-[45%] flex-1 bg-white flex flex-col overflow-y-auto min-w-0 select-none">
      <div className="p-6 sm:p-10 space-y-8 sm:space-y-10 max-w-4xl mx-auto w-full font-sans">
        {/* Header Section */}
        <div className="border-b border-[#c4c7c7]/40 pb-6">
          <h1 className="font-serif text-3xl sm:text-4xl text-black font-semibold mb-2">
            Hero Banner
          </h1>
          <p className="text-sm text-[#444748]">
            The primary entry point of your digital atelier. High-impact visuals required.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. ASSETS CARD */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#c4c7c7]/40 space-y-6 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#444748]">
              Assets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Desktop (21:9) */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-[#444748] uppercase tracking-tighter">
                  Desktop (21:9)
                </p>
                <div className="aspect-[21/9] bg-[#f4f3f3] rounded-xl border-2 border-dashed border-[#c4c7c7] flex flex-col items-center justify-center group cursor-pointer hover:bg-[#efeded] transition-all relative overflow-hidden">
                  <Image
                    src={state.desktopImage}
                    alt="Desktop Preview Asset"
                    fill
                    className="object-cover opacity-40 group-hover:scale-105 transition-transform"
                  />
                  <div className="z-10 flex flex-col items-center text-black">
                    <span className="material-symbols-outlined text-black mb-1 text-[20px]">
                      upload
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Replace</span>
                  </div>
                </div>
              </div>

              {/* Tablet (4:3) */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-[#444748] uppercase tracking-tighter">
                  Tablet (4:3)
                </p>
                <div className="aspect-[4/3] bg-[#f4f3f3] rounded-xl border-2 border-dashed border-[#c4c7c7] flex flex-col items-center justify-center group cursor-pointer hover:bg-[#efeded] transition-all relative overflow-hidden">
                  <Image
                    src={state.tabletImage}
                    alt="Tablet Preview Asset"
                    fill
                    className="object-cover opacity-40 group-hover:scale-105 transition-transform"
                  />
                  <div className="z-10 flex flex-col items-center text-black">
                    <span className="material-symbols-outlined text-black mb-1 text-[20px]">
                      upload
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Replace</span>
                  </div>
                </div>
              </div>

              {/* Mobile (9:16) */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-[#444748] uppercase tracking-tighter">
                  Mobile (9:16)
                </p>
                <div className="aspect-[9/16] bg-[#f4f3f3] rounded-xl border-2 border-dashed border-[#c4c7c7] flex flex-col items-center justify-center group cursor-pointer hover:bg-[#efeded] transition-all relative overflow-hidden">
                  <Image
                    src={state.mobileImage}
                    alt="Mobile Preview Asset"
                    fill
                    className="object-cover opacity-40 group-hover:scale-105 transition-transform"
                  />
                  <div className="z-10 flex flex-col items-center text-black">
                    <span className="material-symbols-outlined text-black mb-1 text-[20px]">
                      upload
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Replace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. TYPOGRAPHY CARD */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#c4c7c7]/40 space-y-6 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#444748]">
              Typography
            </h3>
            <div className="space-y-6">
              {/* Headline */}
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] font-bold text-[#444748] tracking-widest uppercase">
                    Headline
                  </label>
                  <span className="text-[10px] text-[#444748]/60 font-semibold">
                    {state.headline.length}/60
                  </span>
                </div>
                <input
                  type="text"
                  value={state.headline}
                  onChange={(e) => onChangeHeadline(e.target.value)}
                  maxLength={60}
                  className="w-full py-3 px-4 bg-[#f4f3f3] rounded-lg border-0 focus:ring-1 focus:ring-black font-serif text-xl sm:text-2xl font-semibold text-black outline-none transition-all"
                />
              </div>

              {/* Subheadline */}
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] font-bold text-[#444748] tracking-widest uppercase">
                    Subheadline
                  </label>
                  <span className="text-[10px] text-[#444748]/60 font-semibold">
                    {state.subheadline.length}/150
                  </span>
                </div>
                <textarea
                  value={state.subheadline}
                  onChange={(e) => onChangeSubheadline(e.target.value)}
                  maxLength={150}
                  rows={2}
                  className="w-full py-3 px-4 bg-[#f4f3f3] rounded-lg border-0 focus:ring-1 focus:ring-black text-sm text-black font-sans resize-none outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* 3. CTA CONFIGURATION CARD */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#c4c7c7]/40 space-y-6 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#444748]">
              CTA Configuration
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#444748] uppercase">
                  Button Text
                </label>
                <input
                  type="text"
                  value={state.ctaText}
                  onChange={(e) => onChangeCtaText(e.target.value)}
                  className="w-full py-2.5 px-3 bg-[#f4f3f3] rounded-lg border-0 text-xs font-semibold text-black outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#444748] uppercase">
                  Button Style
                </label>
                <div className="flex bg-[#f4f3f3] p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => onChangeCtaStyle('SOLID')}
                    className={`flex-1 py-1.5 text-[10px] font-bold rounded transition-all ${
                      state.ctaStyle === 'SOLID'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-[#444748]'
                    }`}
                  >
                    SOLID
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeCtaStyle('OUTLINE')}
                    className={`flex-1 py-1.5 text-[10px] font-bold rounded transition-all ${
                      state.ctaStyle === 'OUTLINE'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-[#444748]'
                    }`}
                  >
                    OUTLINE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4. AI ASSISTANT CARD */}
          <div className="p-6 bg-black/5 rounded-2xl border border-black/10 flex items-center justify-between group cursor-pointer hover:bg-black/10 transition-all">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-black text-[22px]">
                auto_awesome
              </span>
              <div>
                <p className="text-xs font-bold text-black">AI Assistant</p>
                <p className="text-xs text-[#444748]">Optimize copy for luxury tone</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-black text-[20px]">
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
