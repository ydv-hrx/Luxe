'use client';

import React from 'react';
import { ActivityItem } from './giftMockData';

export interface GiftIntelligenceRightProps {
  activities: ActivityItem[];
}

export const GiftIntelligenceRight: React.FC<GiftIntelligenceRightProps> = ({ activities }) => {
  return (
    <aside className="col-span-12 lg:col-span-3 space-y-6 font-sans select-none">
      {/* Total Gift Revenue Metrics */}
      <div className="bg-black text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-white/60 font-bold uppercase">Total Gift Revenue</p>
              <h3 className="font-serif text-3xl font-bold mt-1 text-white">$428,500</h3>
            </div>
            <span className="material-symbols-outlined text-[#D4AF37]">trending_up</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                Redemption Rate
              </p>
              <p className="text-xs font-bold text-white mt-0.5">68.2%</p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                Active Balance
              </p>
              <p className="text-xs font-bold text-white mt-0.5">$134k</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Gift Concierge */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#c4c7c7]/20 p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
          </div>
          <h3 className="text-xs font-bold text-black uppercase tracking-widest">
            AI Gift Concierge
          </h3>
        </div>
        <div className="p-4 bg-[#f4f3f3] rounded-xl text-xs italic text-[#444748] border-l-2 border-[#D4AF37] leading-relaxed">
          "Eleanor Vance has shopped the 'Velvet Noir' collection 3 times. I suggest a $2,500 value to cover a full ensemble piece."
        </div>
        <div className="space-y-2">
          <button
            type="button"
            className="w-full text-left p-3 rounded-lg hover:bg-[#f4f3f3] transition-colors flex items-center justify-between group cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Recommend Gift Value</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              chevron_right
            </span>
          </button>
          <button
            type="button"
            className="w-full text-left p-3 rounded-lg hover:bg-[#f4f3f3] transition-colors flex items-center justify-between group cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Generate Gift Message</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              chevron_right
            </span>
          </button>
          <button
            type="button"
            className="w-full text-left p-3 rounded-lg hover:bg-[#f4f3f3] transition-colors flex items-center justify-between group cursor-pointer"
          >
            <span className="text-xs font-bold text-black">Analyze Recipient Style</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              chevron_right
            </span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4 mb-12">
        <h4 className="text-xs font-bold text-[#444748] uppercase tracking-widest px-1">
          Recent Activity
        </h4>
        <div className="space-y-3">
          {activities.map((act) => (
            <div key={act.id} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e9e8e8] flex items-center justify-center text-[#444748] shrink-0">
                <span className="material-symbols-outlined text-xs">{act.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-black">{act.title}</p>
                <p className="text-[10px] text-[#444748]">{act.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
