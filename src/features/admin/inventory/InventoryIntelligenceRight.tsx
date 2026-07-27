'use client';

import React from 'react';
import { TimelineEvent } from './inventoryMockData';

export interface InventoryIntelligenceRightProps {
  timeline: TimelineEvent[];
}

export const InventoryIntelligenceRight: React.FC<InventoryIntelligenceRightProps> = ({
  timeline,
}) => {
  return (
    <section className="w-80 shrink-0 border-l border-[#c4c7c7]/10 flex flex-col bg-[#faf9f9]/50 overflow-y-auto luxury-scrollbar p-6 gap-8 font-sans select-none h-full">
      {/* Demand Trend */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-black">Intelligence</h3>
        <div className="bg-white p-5 rounded-2xl border border-[#c4c7c7]/10 shadow-sm">
          <p className="text-xs text-[#444748] mb-4">Demand Trend (30d)</p>
          <div className="h-24 flex items-end gap-1.5">
            <div className="w-full bg-black/10 h-[40%] rounded-t-sm transition-all hover:bg-black/30" />
            <div className="w-full bg-black/10 h-[60%] rounded-t-sm transition-all hover:bg-black/30" />
            <div className="w-full bg-black/10 h-[55%] rounded-t-sm transition-all hover:bg-black/30" />
            <div className="w-full bg-black/10 h-[75%] rounded-t-sm transition-all hover:bg-black/30" />
            <div className="w-full bg-black h-[90%] rounded-t-sm transition-all" />
            <div className="w-full bg-black/10 h-[65%] rounded-t-sm transition-all hover:bg-black/30" />
            <div className="w-full bg-black/10 h-[45%] rounded-t-sm transition-all hover:bg-black/30" />
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold text-[#444748] uppercase">
            <span>Mar 01</span>
            <span>Today</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-black">Timeline</h3>
        <div className="flex flex-col gap-6 relative">
          <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#c4c7c7]/30" />
          {timeline.map((evt) => (
            <div key={evt.id} className="flex gap-4 relative">
              <div className="w-5 h-5 rounded-full bg-black text-white ring-4 ring-white z-10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[10px]">{evt.icon}</span>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold text-black">{evt.title}</p>
                <p className="text-xs text-[#444748]">{evt.subtitle}</p>
                <p className="text-[10px] text-[#747878] mt-1 uppercase">{evt.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Atelier AI */}
      <div className="bg-black text-white p-6 rounded-2xl shadow-xl flex flex-col gap-4 mt-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ffdea4]">psychology</span>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">Atelier AI</h3>
        </div>
        <p className="text-xs text-white/70 leading-relaxed italic">
          "Optimal restocking window for London Atelier closes in 48 hours. Suggesting 15 units of Onyx Black."
        </p>
        <div className="flex flex-col gap-2 mt-2 font-sans">
          <button
            type="button"
            className="w-full py-2 bg-white text-black px-3 rounded-lg text-xs font-bold hover:bg-opacity-90 transition-colors flex justify-between items-center"
          >
            Suggest Restock <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button
            type="button"
            className="w-full py-2 border border-white/30 text-white px-3 rounded-lg text-xs font-bold hover:bg-white/10 transition-colors flex justify-between items-center"
          >
            Predict Stockout <span className="material-symbols-outlined text-sm">visibility</span>
          </button>
        </div>
      </div>
    </section>
  );
};
