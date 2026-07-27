'use client';

import React from 'react';

export const PerformanceIntelligenceRight: React.FC = () => {
  return (
    <aside className="w-[350px] shrink-0 border-l border-[#c4c7c7] bg-[#faf9f9] flex flex-col p-6 space-y-6 overflow-y-auto font-sans select-none h-full">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#444748] mb-6">
          Performance Intelligence
        </h3>
        <div className="space-y-6">
          {/* Projected Revenue Gauge */}
          <div className="bg-[#f4f3f3] rounded-2xl p-5 border border-[#c4c7c7]/30">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-[#444748]">Projected Revenue</p>
              <span className="text-xs font-bold text-black">+18%</span>
            </div>
            <div className="relative h-2 w-full bg-[#e3e2e2] rounded-full overflow-hidden mb-2">
              <div className="absolute left-0 top-0 h-full w-[72%] bg-black" />
            </div>
            <div className="flex justify-between items-end">
              <span className="font-serif text-2xl font-bold text-black">$1.42M</span>
              <span className="text-[10px] text-[#444748] uppercase">Target: $2M</span>
            </div>
          </div>

          {/* Conversion Gauge */}
          <div className="bg-[#f4f3f3] rounded-2xl p-5 border border-[#c4c7c7]/30">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-[#444748]">Predicted Conversion</p>
              <span className="text-xs font-bold text-[#755a24]">High</span>
            </div>
            <div className="relative h-2 w-full bg-[#e3e2e2] rounded-full overflow-hidden mb-2">
              <div className="absolute left-0 top-0 h-full w-[88%] bg-[#755a24]" />
            </div>
            <div className="flex justify-between items-end">
              <span className="font-serif text-2xl font-bold text-black">4.8%</span>
              <span className="text-[10px] text-[#444748] uppercase">
                Segment Average: 2.1%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Atelier AI Assistant */}
      <div className="pt-6 border-t border-[#c4c7c7]">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-black text-xl">auto_awesome</span>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#444748]">
            Atelier AI Assistant
          </h3>
        </div>
        <div className="space-y-3 font-sans">
          <button
            type="button"
            className="w-full text-left p-4 rounded-xl border border-[#c4c7c7]/50 hover:bg-black hover:text-white transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-tight">
                Optimize Discount Rate
              </span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">
                arrow_forward
              </span>
            </div>
            <p className="text-[11px] opacity-70">
              A 28% discount may yield 15% higher volume based on historical winter data.
            </p>
          </button>

          <button
            type="button"
            className="w-full text-left p-4 rounded-xl border border-[#c4c7c7]/50 hover:bg-black hover:text-white transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-tight">
                Predict VIP Conversion
              </span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">
                arrow_forward
              </span>
            </div>
            <p className="text-[11px] opacity-70">
              VIP Platinum response is currently peaking. Launching 2 days early is advised.
            </p>
          </button>

          <button
            type="button"
            className="w-full text-left p-4 rounded-xl border border-[#c4c7c7]/50 hover:bg-black hover:text-white transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-tight">
                Generate Campaign Copy
              </span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">
                arrow_forward
              </span>
            </div>
            <p className="text-[11px] opacity-70">
              Create three high-fashion variations for social and email channels.
            </p>
          </button>
        </div>
      </div>

      {/* AI Recommendation Card */}
      <div className="mt-auto p-4 bg-black text-white rounded-2xl relative overflow-hidden group shadow-xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 text-[#ffdea4]">
          AI Recommendation
        </p>
        <p className="text-xs leading-relaxed italic text-white/90">
          "Your current configuration aligns with the 'Exclusive Scarcity' model, which historically achieves 94% retention in the Platinum tier."
        </p>
      </div>
    </aside>
  );
};
