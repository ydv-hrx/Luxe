'use client';

import React from 'react';
import Image from 'next/image';
import { CampaignCardItem } from './promotionMockData';

export interface CampaignLibrarySidebarProps {
  campaigns: CampaignCardItem[];
  activeCampaignId: string;
  onSelectCampaign: (id: string) => void;
}

export const CampaignLibrarySidebar: React.FC<CampaignLibrarySidebarProps> = ({
  campaigns,
  activeCampaignId,
  onSelectCampaign,
}) => {
  return (
    <section className="w-80 shrink-0 border-r border-[#c4c7c7] bg-[#faf9f9] flex flex-col font-sans select-none h-full">
      {/* Header */}
      <div className="p-6 border-b border-[#c4c7c7]">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[#444748]">
            Active Campaigns
          </h3>
          <span className="text-xs font-semibold px-2.5 py-0.5 bg-[#e9e8e8] text-black rounded-full">
            12
          </span>
        </div>
      </div>

      {/* Campaign List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {campaigns.map((cmp) => {
          const isActive = activeCampaignId === cmp.id;

          return (
            <div
              key={cmp.id}
              onClick={() => onSelectCampaign(cmp.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all ${
                isActive
                  ? 'bg-white shadow-md border border-black/10'
                  : 'hover:bg-white border border-transparent hover:border-[#c4c7c7]'
              }`}
            >
              <div className="flex gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-xl bg-[#efeded] overflow-hidden shrink-0">
                  <Image
                    src={cmp.image}
                    alt={cmp.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-black truncate">{cmp.title}</h4>
                  <p className="text-[11px] text-[#444748] mt-0.5">{cmp.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] uppercase font-bold tracking-tight px-2 py-0.5 rounded ${
                    cmp.statusType === 'scheduled'
                      ? 'bg-[#ffdb99] text-[#795f28]'
                      : cmp.statusType === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-[#e3e2e2] text-[#444748]'
                  }`}
                >
                  {cmp.status}
                </span>
                <span className="text-[10px] font-medium text-[#444748]">{cmp.audience}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
