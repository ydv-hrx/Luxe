'use client';

import React from 'react';
import Image from 'next/image';
import { BannerCampaignState } from './bannerMockData';

export interface BannerEditorWorkspaceProps {
  campaign: BannerCampaignState;
  onChangeTitle: (val: string) => void;
  onChangeSubtitle: (val: string) => void;
  onChangeCtaText: (val: string) => void;
  onChangeDestinationUrl: (val: string) => void;
}

export const BannerEditorWorkspace: React.FC<BannerEditorWorkspaceProps> = ({
  campaign,
  onChangeTitle,
  onChangeSubtitle,
  onChangeCtaText,
  onChangeDestinationUrl,
}) => {
  return (
    <div className="w-full lg:w-[45%] border-r border-[#c4c7c7]/10 p-6 sm:p-8 overflow-y-auto bg-white min-w-0 select-none">
      {/* Campaign Header */}
      <div className="flex items-center justify-between mb-8 font-sans">
        <div>
          <p className="text-xs font-semibold text-[#444748]/60 uppercase tracking-widest">
            Editing Campaign
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-black font-semibold mt-0.5">
            {campaign.displayTitle || 'Spring Equinox Hero'}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#755a24]" />
          <span className="text-xs font-semibold text-[#444748]">{campaign.status}</span>
        </div>
      </div>

      <div className="space-y-8 pb-20 font-sans">
        {/* 1. AI ASSISTANT CARD */}
        <div className="p-6 rounded-2xl bg-[#f4f3f3] border border-[#755a24]/20 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[#755a24] text-[20px]">
              auto_fix_high
            </span>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-black">Atelier AI Assistant</p>
            <p className="text-xs text-[#444748]/80 mt-1 leading-relaxed">
              Would you like me to optimize the headline copy for higher engagement based on your
              Spring collection metrics?
            </p>
            <div className="flex gap-4 mt-3">
              <button
                type="button"
                className="text-[#755a24] font-semibold text-xs border-b border-[#755a24]/30 hover:border-[#755a24] transition-colors"
              >
                Generate Suggestions
              </button>
              <button
                type="button"
                className="text-[#444748]/60 font-semibold text-xs hover:text-black transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>

        {/* 2. BANNER INFORMATION */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-black/40">
            Banner Information
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#444748] uppercase mb-1">
                Display Title
              </label>
              <input
                type="text"
                value={campaign.displayTitle}
                onChange={(e) => onChangeTitle(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-3 px-0 focus:ring-0 focus:border-black font-serif text-xl sm:text-2xl text-black font-semibold outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#444748] uppercase mb-1">
                Campaign Subtitle
              </label>
              <input
                type="text"
                value={campaign.campaignSubtitle}
                onChange={(e) => onChangeSubtitle(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-3 px-0 focus:ring-0 focus:border-black text-sm text-black font-sans outline-none transition-all"
              />
            </div>
          </div>
        </section>

        {/* 3. MEDIA ASSETS */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-black/40">
            Media Assets
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Desktop */}
            <div className="aspect-[4/5] bg-[#faf9f9] rounded-2xl border-2 border-dashed border-[#c4c7c7]/30 flex flex-col items-center justify-center p-4 text-center group hover:border-black transition-colors cursor-pointer relative overflow-hidden">
              <Image
                src={campaign.desktopAssetUrl}
                alt="Desktop Media Asset"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform"
              />
              <div className="z-10 text-black">
                <span className="material-symbols-outlined text-[#444748] mb-2 text-[22px]">
                  desktop_windows
                </span>
                <p className="text-[10px] font-bold uppercase tracking-wider">Desktop</p>
              </div>
            </div>

            {/* Tablet */}
            <div className="aspect-[4/5] bg-[#faf9f9] rounded-2xl border-2 border-dashed border-[#c4c7c7]/30 flex flex-col items-center justify-center p-4 text-center group hover:border-black transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[#444748] mb-2 text-[22px]">
                tablet_mac
              </span>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#444748]">Tablet</p>
            </div>

            {/* Mobile */}
            <div className="aspect-[4/5] bg-[#faf9f9] rounded-2xl border-2 border-dashed border-[#c4c7c7]/30 flex flex-col items-center justify-center p-4 text-center group hover:border-black transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[#444748] mb-2 text-[22px]">
                smartphone
              </span>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#444748]">Mobile</p>
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-black/40">
            Call to Action
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-[#444748] uppercase mb-1">
                Button Text
              </label>
              <input
                type="text"
                value={campaign.ctaText}
                onChange={(e) => onChangeCtaText(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-2 px-0 focus:ring-0 focus:border-black text-sm font-sans text-black outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-xs font-semibold text-[#444748] uppercase mb-1">
                Destination URL
              </label>
              <input
                type="text"
                value={campaign.destinationUrl}
                onChange={(e) => onChangeDestinationUrl(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-[#c4c7c7] py-2 px-0 focus:ring-0 focus:border-black text-sm font-sans text-black outline-none"
              />
            </div>
          </div>
        </section>

        {/* 5. CAMPAIGN SCHEDULING */}
        <section className="p-6 rounded-2xl border border-[#c4c7c7]/30">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
            Campaign Scheduling
          </h3>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] font-semibold text-[#444748] uppercase mb-1">Starts</p>
              <div className="flex items-center gap-2 text-black">
                <span className="material-symbols-outlined text-sm text-[#444748]">
                  calendar_today
                </span>
                <span className="text-sm font-medium">{campaign.startDate}</span>
              </div>
            </div>

            <div className="w-px h-10 bg-[#c4c7c7]/30" />

            <div className="flex-1">
              <p className="text-[10px] font-semibold text-[#444748] uppercase mb-1">Ends</p>
              <div className="flex items-center gap-2 text-black">
                <span className="material-symbols-outlined text-sm text-[#444748]">
                  calendar_today
                </span>
                <span className="text-sm font-medium">{campaign.endDate}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
