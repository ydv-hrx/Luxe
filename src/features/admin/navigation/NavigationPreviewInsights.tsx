'use client';

import React from 'react';

export interface NavigationPreviewInsightsProps {
  activeView: 'desktop' | 'mobile' | 'preview';
}

export const NavigationPreviewInsights: React.FC<NavigationPreviewInsightsProps> = ({
  activeView,
}) => {
  return (
    <section className="col-span-12 lg:col-span-3 space-y-6 font-sans select-none">
      {/* Storefront Preview Card */}
      <div className="bg-white rounded-2xl border border-[#c4c7c7] shadow-md overflow-hidden">
        <div className="p-4 bg-[#f4f3f3] border-b border-[#c4c7c7] flex justify-between items-center">
          <span className="font-sans text-xs font-semibold text-black">Storefront Preview</span>
          <div className="flex gap-2">
            <span
              className={`material-symbols-outlined text-[18px] ${
                activeView === 'desktop' ? 'text-black font-bold' : 'text-[#444748]'
              }`}
            >
              laptop
            </span>
            <span
              className={`material-symbols-outlined text-[18px] ${
                activeView === 'mobile' ? 'text-black font-bold' : 'text-[#444748]'
              }`}
            >
              smartphone
            </span>
          </div>
        </div>

        <div className="p-6 bg-[#F5F5F5] flex flex-col items-center">
          {/* Mock Header Simulation */}
          <div className="w-full bg-white shadow-lg p-4 rounded flex justify-between items-center">
            <span className="font-serif text-sm font-bold uppercase tracking-widest text-black">
              LUXORA
            </span>
            <div className="flex gap-3 text-[9px] font-semibold uppercase tracking-wider">
              <span className="text-[#755a24] border-b border-[#755a24]">Collections</span>
              <span className="text-[#444748]">New</span>
              <span className="text-[#444748]">Designers</span>
            </div>
            <div className="flex gap-2 text-black">
              <span className="material-symbols-outlined text-[14px]">search</span>
              <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-[#444748] italic">Live header sync enabled</p>
        </div>
      </div>

      {/* Navigation Insights */}
      <div className="bg-white p-6 rounded-2xl border border-[#c4c7c7] shadow-sm">
        <h4 className="font-sans text-xs font-bold text-black mb-4 uppercase tracking-wider">
          Navigation Insights
        </h4>
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-[#444748] uppercase font-bold">Total Clicks</p>
              <p className="font-serif text-2xl font-semibold text-black">12.4k</p>
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 8%
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-[#444748] uppercase font-bold">Avg. CTR</p>
              <p className="font-serif text-2xl font-semibold text-black">4.2%</p>
            </div>
            <span className="text-[#ba1a1a] text-xs font-bold flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2%
            </span>
          </div>

          <div className="pt-4 border-t border-[#c4c7c7]">
            <p className="text-[10px] text-[#444748] uppercase font-bold mb-2">Top Link</p>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-black">New Arrivals</span>
              <span className="text-[10px] bg-[#ffdb99] text-[#795f28] px-2 py-0.5 rounded font-bold">
                Hot
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
