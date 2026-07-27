'use client';

import React from 'react';
import Image from 'next/image';
import { CollectionEditorState } from './collectionMockData';

export interface CollectionStorefrontPreviewProps {
  state: CollectionEditorState;
  onChangeDeviceMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onChangeZoom: (delta: number) => void;
}

export const CollectionStorefrontPreview: React.FC<CollectionStorefrontPreviewProps> = ({
  state,
  onChangeDeviceMode,
  onChangeZoom,
}) => {
  return (
    <section className="w-[480px] shrink-0 bg-[#efeded] border-l border-[#c4c7c7] flex flex-col font-sans select-none h-full">
      {/* Header Toolbar */}
      <div className="h-16 px-6 border-b border-[#c4c7c7] flex justify-between items-center bg-white">
        {/* Device Switcher */}
        <div className="flex gap-1.5 p-1 bg-[#f4f3f3] rounded-lg">
          <button
            type="button"
            onClick={() => onChangeDeviceMode('mobile')}
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
              state.previewDevice === 'mobile' ? 'bg-white shadow-sm text-black' : 'text-[#444748] hover:bg-white'
            }`}
            title="Mobile Preview"
          >
            <span className="material-symbols-outlined text-[18px]">smartphone</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeDeviceMode('tablet')}
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
              state.previewDevice === 'tablet' ? 'bg-white shadow-sm text-black' : 'text-[#444748] hover:bg-white'
            }`}
            title="Tablet Preview"
          >
            <span className="material-symbols-outlined text-[18px]">tablet_mac</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeDeviceMode('desktop')}
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
              state.previewDevice === 'desktop' ? 'bg-white shadow-sm text-black' : 'text-[#444748] hover:bg-white'
            }`}
            title="Desktop Preview"
          >
            <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
          </button>
        </div>

        {/* Zoom & Refresh Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold opacity-40 text-black">{state.previewZoom}%</span>
            <div className="flex gap-0.5 items-center">
              <button
                type="button"
                onClick={() => onChangeZoom(-10)}
                className="w-6 h-6 hover:bg-[#f4f3f3] flex items-center justify-center rounded transition-all text-black"
                title="Zoom Out"
              >
                <span className="material-symbols-outlined text-xs">remove</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeZoom(10)}
                className="w-6 h-6 hover:bg-[#f4f3f3] flex items-center justify-center rounded transition-all text-black"
                title="Zoom In"
              >
                <span className="material-symbols-outlined text-xs">add</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            className="material-symbols-outlined text-[#444748] hover:text-black transition-colors"
            title="Refresh Frame"
          >
            refresh
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 p-6 sm:p-8 flex justify-center items-start overflow-hidden bg-[#efeded]">
        {/* Browser Mockup */}
        <div
          style={{
            width:
              state.previewDevice === 'mobile'
                ? '320px'
                : state.previewDevice === 'tablet'
                ? '400px'
                : '100%',
          }}
          className="preview-frame h-full bg-white rounded-t-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-[#c4c7c7]/30 overflow-hidden flex flex-col transition-all duration-300"
        >
          {/* Chrome Header */}
          <div className="h-12 bg-[#e9e8e8]/30 border-b border-[#c4c7c7]/20 flex items-center px-6 gap-4 shrink-0">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
            </div>
            <div className="flex-1 bg-white/60 h-7 rounded-full text-[9px] font-medium flex items-center px-4 text-[#444748]/40 tracking-wider">
              luxora.com/collections/{state.urlHandle || 'ete-noir-2024'}
            </div>
          </div>

          {/* Storefront Live Content Simulation */}
          <div className="flex-1 overflow-y-auto font-sans">
            {/* Store Header */}
            <header className="py-6 px-8 flex justify-between items-center bg-white border-b border-[#c4c7c7]/10">
              <span className="font-serif text-xl tracking-tighter text-black font-semibold">Luxora</span>
              <div className="flex gap-4 text-[#1b1c1c]">
                <span className="material-symbols-outlined text-base">search</span>
                <span className="material-symbols-outlined text-base">shopping_bag</span>
              </div>
            </header>

            {/* Store Hero Banner */}
            <div className="relative aspect-[16/8] overflow-hidden group bg-black">
              <Image
                src={state.desktopBanner}
                alt="Store Hero Banner Preview"
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 p-8 text-center">
                <h4 className="font-serif text-2xl sm:text-3xl mb-2 tracking-tight font-semibold">
                  {state.headline || 'Shadows of Elegance'}
                </h4>
                <p className="text-[9px] uppercase font-black tracking-[0.3em] opacity-80">
                  {state.subheadline || 'Summer 2024 Collection'}
                </p>
              </div>
            </div>

            {/* Store Product Grid Preview */}
            <div className="p-8 grid grid-cols-2 gap-6 bg-white">
              <div className="space-y-3">
                <div className="aspect-[3/4] bg-[#efeded] overflow-hidden rounded-sm relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TmWHzEb0iIu0o36URWvwS2ch4Ptt8Iby4YKBEcHp9-I7GNkUQxrKja-hAgQjl9fhJ33by4NDqjvROm1z6CqgnKT4j8qW7wxOgn3l4cJFJS0fPHhYTKnPaaD-Lxst3tkK0etccVWloZw0hNp5cYppYG_EbVxfumrqY0IvUUz608Ef6wS6thKwcQWkG13hA9gdPaUOdGnQ9zXLTYJFLGIEgwzlc1XTHfTmUCimJXzVlgCLCCOGfsNQzLHYXs_58656TQX3Z7Z2s6fU"
                    alt="Midnight Silk Gown"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-black">
                    Midnight Silk Gown
                  </p>
                  <p className="text-[10px] opacity-40 text-black">$2,450.00</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="aspect-[3/4] bg-[#efeded] overflow-hidden rounded-sm relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIOer8Uoir_4XoqBGc8-gmuppV0FoHb_Y3iNIw5p_Ee6JxOfWkcwoBWNLdbpLGWyRPLcIwv7I-EiyVm6Ltp4FKS8n_77oL2brjEkrxnt0QqW_JztwGURTnsa734t0v6JvBfEv8E9Uo3MygE2UtYQOKBVrZFIgARIGEvr0t2ie48q5eSr47dmmiFKU1-NduCe2vsrEbmQkK27Tip4YOC-Uwk5Fb9QhlMTxUfl9FztKU0nJQqf2PJWlp35g2-8iefkJ0GtjQaiqsKiPN"
                    alt="Atelier Chelsea Boot"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-black">
                    Atelier Chelsea Boot
                  </p>
                  <p className="text-[10px] opacity-40 text-black">$1,100.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
