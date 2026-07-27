'use client';

import React from 'react';
import Image from 'next/image';
import { BannerCampaignState } from './bannerMockData';

export interface BannerLivePreviewProps {
  campaign: BannerCampaignState;
  onChangeDeviceMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
}

export const BannerLivePreview: React.FC<BannerLivePreviewProps> = ({
  campaign,
  onChangeDeviceMode,
}) => {
  return (
    <div className="w-full lg:w-[35%] bg-[#f4f3f3] p-6 sm:p-8 flex flex-col justify-between shrink-0 font-sans select-none border-l border-[#c4c7c7]/10">
      {/* Preview Header & Device Switcher */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-black/40">
          Live Preview
        </h3>
        <div className="flex bg-white rounded-full p-1 shadow-sm">
          <button
            type="button"
            onClick={() => onChangeDeviceMode('desktop')}
            className={`p-2 rounded-full transition-all ${
              campaign.previewDevice === 'desktop'
                ? 'bg-black text-white'
                : 'text-[#444748] hover:bg-[#e9e8e8]'
            }`}
            title="Desktop Mode"
          >
            <span className="material-symbols-outlined text-sm">desktop_windows</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeDeviceMode('tablet')}
            className={`p-2 rounded-full transition-all ${
              campaign.previewDevice === 'tablet'
                ? 'bg-black text-white'
                : 'text-[#444748] hover:bg-[#e9e8e8]'
            }`}
            title="Tablet Mode"
          >
            <span className="material-symbols-outlined text-sm">tablet_mac</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeDeviceMode('mobile')}
            className={`p-2 rounded-full transition-all ${
              campaign.previewDevice === 'mobile'
                ? 'bg-black text-white'
                : 'text-[#444748] hover:bg-[#e9e8e8]'
            }`}
            title="Mobile Mode"
          >
            <span className="material-symbols-outlined text-sm">smartphone</span>
          </button>
        </div>
      </div>

      {/* Realistic Device Frame */}
      <div className="flex-1 flex items-center justify-center py-4">
        <div className="w-full max-w-sm aspect-[9/16] bg-white overflow-hidden relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[12px] border-[#1b1c1c] rounded-[2rem]">
          {/* Storefront Navigation Simulation */}
          <div className="absolute inset-0 flex flex-col">
            <nav className="h-12 border-b border-white/10 flex items-center justify-between px-4 z-20 text-white">
              <span className="text-[10px] font-bold tracking-widest font-serif">LUXORA</span>
              <span className="material-symbols-outlined text-sm">menu</span>
            </nav>

            {/* Banner Media Background & Reactive Text Content */}
            <div className="flex-1 relative overflow-hidden bg-black">
              <Image
                src={campaign.previewAssetUrl}
                alt="Banner Live Preview"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-0 w-full p-6 text-white text-center z-20 space-y-3">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-80 font-bold">
                  {campaign.displayTitle || 'The Spring Equinox Collection'}
                </p>
                <h4 className="font-serif text-2xl sm:text-3xl leading-snug font-bold">
                  {campaign.campaignSubtitle || 'A Rebirth of Elegance'}
                </h4>
                <div className="pt-2">
                  <button
                    type="button"
                    className="border border-white/50 bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    {campaign.ctaText || 'Discover More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* External Action Links */}
      <div className="mt-6 flex justify-center gap-6">
        <button
          type="button"
          className="flex items-center gap-2 text-xs font-semibold text-[#444748] hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-sm">open_in_new</span>
          View on Site
        </button>
        <button
          type="button"
          className="flex items-center gap-2 text-xs font-semibold text-[#444748] hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-sm">share</span>
          Share Preview
        </button>
      </div>
    </div>
  );
};
