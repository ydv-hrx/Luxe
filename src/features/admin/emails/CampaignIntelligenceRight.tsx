'use client';

import React from 'react';

export const CampaignIntelligenceRight: React.FC = () => {
  return (
    <aside className="w-80 shrink-0 border-l border-[#c4c7c7]/20 bg-white flex flex-col font-sans select-none h-full">
      {/* Predictive Analytics */}
      <div className="p-6 border-b border-[#c4c7c7]/20">
        <h2 className="text-[11px] font-bold uppercase tracking-widest text-black mb-6">
          Predictive Analytics
        </h2>
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-bold text-[#747878] uppercase mb-1">
                Projected Open Rate
              </p>
              <p className="font-serif text-3xl font-bold text-black">48.2%</p>
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span> 6%
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-bold text-[#747878] uppercase mb-1">
                CTR Prediction
              </p>
              <p className="font-serif text-3xl font-bold text-black">12.4%</p>
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center">
              <span className="material-symbols-outlined text-sm">arrow_upward</span> 2%
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-bold text-[#747878] uppercase mb-1">
                Revenue Forecast
              </p>
              <p className="font-serif text-3xl font-bold text-black">$84.5k</p>
            </div>
            <span className="material-symbols-outlined text-[#755a24]">stars</span>
          </div>
        </div>
      </div>

      {/* AI Campaign Assistant Panel */}
      <div className="flex-1 p-6 bg-[#f4f3f3]/30 overflow-y-auto mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-[#755a24] animate-pulse">
            auto_awesome
          </span>
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-black">
            AI Campaign Assistant
          </h2>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="w-full p-4 rounded-xl border border-[#c4c7c7]/20 bg-white hover:border-[#755a24] hover:shadow-md transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Generate Subject Line</span>
            <span className="material-symbols-outlined text-[#c4c7c7] group-hover:text-[#755a24]">
              chevron_right
            </span>
          </button>

          <button
            type="button"
            className="w-full p-4 rounded-xl border border-[#c4c7c7]/20 bg-white hover:border-[#755a24] hover:shadow-md transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Improve Open Rate</span>
            <span className="material-symbols-outlined text-[#c4c7c7] group-hover:text-[#755a24]">
              trending_up
            </span>
          </button>

          <button
            type="button"
            className="w-full p-4 rounded-xl border border-[#c4c7c7]/20 bg-white hover:border-[#755a24] hover:shadow-md transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Rewrite Luxury Copy</span>
            <span className="material-symbols-outlined text-[#c4c7c7] group-hover:text-[#755a24]">
              edit_note
            </span>
          </button>

          <button
            type="button"
            className="w-full p-4 rounded-xl border border-[#c4c7c7]/20 bg-white hover:border-[#755a24] hover:shadow-md transition-all flex items-center justify-between group text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Suggest CTA</span>
            <span className="material-symbols-outlined text-[#c4c7c7] group-hover:text-[#755a24]">
              ads_click
            </span>
          </button>
        </div>

        {/* Insight Card */}
        <div className="mt-8 p-4 rounded-2xl bg-[#755a24]/5 border border-[#755a24]/10">
          <p className="text-[11px] font-bold text-[#755a24] uppercase mb-2">Insight</p>
          <p className="text-xs text-[#795f28] leading-relaxed italic">
            "Based on current VIP behavior, including the term 'Early Access' in the subject line could increase open rates by 12%."
          </p>
        </div>
      </div>
    </aside>
  );
};
