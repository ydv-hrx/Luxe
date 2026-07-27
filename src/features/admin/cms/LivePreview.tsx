'use client';

import React from 'react';
import Image from 'next/image';
import { HomepageCmsState } from './cmsMockData';

export interface LivePreviewProps {
  state: HomepageCmsState;
  onChangeDeviceMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ state, onChangeDeviceMode }) => {
  const currentAsset =
    state.deviceMode === 'tablet'
      ? state.tabletImage
      : state.deviceMode === 'mobile'
      ? state.mobileImage
      : state.desktopImage;

  return (
    <section className="w-[35%] min-w-[360px] lg:min-w-[400px] border-l border-[#c4c7c7]/40 bg-[#efeded] flex flex-col h-full select-none shrink-0">
      {/* Preview Toolbar */}
      <div className="h-14 flex items-center justify-between px-4 sm:px-6 bg-white border-b border-[#c4c7c7]/40 font-sans">
        {/* Device Switcher */}
        <div className="flex bg-[#f4f3f3] p-1 rounded-full">
          <button
            type="button"
            onClick={() => onChangeDeviceMode('desktop')}
            className={`p-1.5 px-3 rounded-full flex items-center gap-2 transition-all ${
              state.deviceMode === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
            }`}
            title="Desktop View"
          >
            <span className="material-symbols-outlined text-[18px] text-black">
              desktop_windows
            </span>
          </button>
          <button
            type="button"
            onClick={() => onChangeDeviceMode('tablet')}
            className={`p-1.5 px-3 rounded-full flex items-center gap-2 transition-all ${
              state.deviceMode === 'tablet' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
            }`}
            title="Tablet View"
          >
            <span className="material-symbols-outlined text-[18px] text-[#444748]">
              tablet_mac
            </span>
          </button>
          <button
            type="button"
            onClick={() => onChangeDeviceMode('mobile')}
            className={`p-1.5 px-3 rounded-full flex items-center gap-2 transition-all ${
              state.deviceMode === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
            }`}
            title="Mobile View"
          >
            <span className="material-symbols-outlined text-[18px] text-[#444748]">
              smartphone
            </span>
          </button>
        </div>

        {/* Zoom & Window Controls */}
        <div className="flex items-center gap-3 text-[#444748]">
          <button type="button" className="hover:text-black transition-colors" title="Refresh Preview">
            <span className="material-symbols-outlined text-[20px]">refresh</span>
          </button>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-[#f4f3f3] rounded-full cursor-pointer hover:bg-[#e9e8e8] transition-colors">
            <span className="text-xs font-semibold text-[#444748]">{state.zoomLevel}</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </div>
          <button type="button" className="hover:text-black transition-colors" title="Open in New Window">
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 p-4 sm:p-8 flex items-start justify-center overflow-auto">
        {/* Device Frame Mockup */}
        <div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c4c7c7] transition-all duration-500 ${
            state.deviceMode === 'mobile'
              ? 'w-[320px]'
              : state.deviceMode === 'tablet'
              ? 'w-[420px]'
              : 'w-full max-w-[500px]'
          }`}
        >
          {/* Browser Chrome Header */}
          <div className="h-8 bg-[#e9e8e8] border-b border-[#c4c7c7] flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a]/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffdb99]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#c4c7c7]" />
          </div>

          {/* Webpage Mockup Container */}
          <div className="relative bg-black font-sans">
            {/* Top Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-center px-6 z-20 text-white">
              <span className="font-serif text-sm tracking-widest font-bold">LUXORA</span>
              <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest">
                <span>SHOP</span>
                <span>WORLD</span>
                <span>ATELIER</span>
              </div>
            </div>

            {/* Hero Section Live Preview */}
            <div className="relative aspect-[4/5] bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <Image
                src={currentAsset}
                alt="Live Hero Preview"
                fill
                className="object-cover"
              />

              {/* Reactive Real-Time Content Overlay */}
              <div className="absolute bottom-10 left-0 w-full text-center px-6 z-20 text-white space-y-2">
                <h2 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
                  {state.headline || 'The Spring Atelier Collection'}
                </h2>
                <p className="font-sans text-xs opacity-90 leading-relaxed max-w-xs mx-auto line-clamp-2">
                  {state.subheadline ||
                    'Discover the intersection of heritage craftsmanship and modern silhouette.'}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                      state.ctaStyle === 'SOLID'
                        ? 'bg-white text-black'
                        : 'border border-white text-white hover:bg-white/10'
                    }`}
                  >
                    {state.ctaText || 'Shop Collection'}
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-sections Preview (Stubs) */}
            <div className="p-6 bg-white space-y-6">
              <div className="text-center font-sans">
                <p className="text-[10px] text-[#755a24] tracking-widest font-bold uppercase mb-1">
                  Featured Collection
                </p>
                <h3 className="font-serif text-lg font-semibold text-black">
                  The Curated Essentials
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-[#f4f3f3] rounded-lg overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrx9Mn5sWzlOde-dr03vUOJQZvKvtVMg91qpVMAT5yV0AW42IYdnYbf2PLkvUoW4S9mPJ9QUiD9w-e3CL2ZCp-mbWCraHKORLKJSNxOWTftY-IFrGD4Rvt37JnqsKze52yYRMum-QdByEj8VKP45boCwPLY_iKH9FTGHn-dfp90BgAj1sNjJbopUrw4bLB0TbQd2j7FW5eT4WmBbQwKdhSb2Ff0xwJqd5O2m5Fk0w97Lh9xatTiGYKREzd7v6MJUOT9egGqB540akw"
                    alt="Leather Handbag"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square bg-[#f4f3f3] rounded-lg overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlcwZ-pBrKDmBg5X0qsic9lw-b00zWgjXFqz51tSWz9chko81Ax3FhnhVDLKq931P820F-0jX1Y4-NvA0T47xxmIn1-xU8GPbfGe5pzbnZDF3HpbrgwO2Xv54OQY7RWS4nhr266q9aqHqyElwnmY7I8l1zUb2xudLG_KbEfGd7KR11hU2x5L2pFue6f_GJ0xLFBUYR2cQKDkXSrOAcYwcgDD_bztFdDkQVpm7zUi81JgJvrULOsqsWShRlCmiM81y7rv2BxESIpeaq"
                    alt="Silk Fabric"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
