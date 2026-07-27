'use client';

import React from 'react';
import Image from 'next/image';
import { EmailCampaignCard } from './emailMockData';

export interface EmailCampaignLibrarySidebarProps {
  campaigns: EmailCampaignCard[];
  activeCampaignId: string;
  onSelectCampaign: (id: string) => void;
}

export const EmailCampaignLibrarySidebar: React.FC<EmailCampaignLibrarySidebarProps> = ({
  campaigns,
  activeCampaignId,
  onSelectCampaign,
}) => {
  return (
    <section className="w-80 shrink-0 border-r border-[#c4c7c7]/20 bg-white flex flex-col font-sans select-none h-full">
      <div className="p-6 border-b border-[#c4c7c7]/20 flex justify-between items-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-black">Campaigns</h2>
        <span className="material-symbols-outlined text-[#c4c7c7] cursor-pointer hover:text-black transition-colors">
          filter_list
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {campaigns.map((cmp) => {
          const isActive = activeCampaignId === cmp.id;

          return (
            <div
              key={cmp.id}
              onClick={() => onSelectCampaign(cmp.id)}
              className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                isActive
                  ? 'border-[#755a24] bg-[#f4f3f3]/50 shadow-sm'
                  : 'border-transparent hover:border-[#c4c7c7]/30 hover:bg-[#faf9f9]'
              }`}
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 relative">
                <Image
                  src={cmp.image}
                  alt={cmp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-serif text-base text-black font-semibold leading-tight">
                  {cmp.title}
                </h3>
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-tighter ${
                    cmp.statusType === 'active'
                      ? 'bg-[#ffdb99] text-[#795f28]'
                      : cmp.statusType === 'scheduled'
                      ? 'bg-[#e3e2e2] text-[#444748]'
                      : 'bg-[#efeded] text-[#747878]'
                  }`}
                >
                  {cmp.status}
                </span>
              </div>
              <p className="text-xs text-[#747878] mb-3">{cmp.audience}</p>
              {cmp.openRateText ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#755a24]">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    <span className="text-xs font-bold">{cmp.openRateText}</span>
                  </div>
                  <span className="text-[10px] text-[#c4c7c7]">{cmp.updatedText}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#444748]">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span className="text-xs font-semibold">{cmp.updatedText}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
