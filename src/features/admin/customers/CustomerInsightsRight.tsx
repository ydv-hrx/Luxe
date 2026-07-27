'use client';

import React from 'react';
import { InteractionEvent } from './customerMockData';

export interface CustomerInsightsRightProps {
  timeline: InteractionEvent[];
}

export const CustomerInsightsRight: React.FC<CustomerInsightsRightProps> = ({ timeline }) => {
  return (
    <section className="col-span-12 lg:col-span-3 border-l border-[#c4c7c7] p-6 overflow-y-auto max-h-[calc(100vh-80px)] hide-scrollbar font-sans select-none">
      {/* INSIGHTS */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-black border-b border-[#efeded] pb-2">
          Client Metrics
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-[#c4c7c7] rounded-2xl shadow-sm">
            <p className="text-[10px] text-[#444748] font-bold uppercase tracking-widest">LTV</p>
            <p className="font-serif text-2xl font-semibold text-black">$42.9k</p>
            <p className="text-[10px] text-green-600 mt-1 font-bold">↑ 12% YoY</p>
          </div>
          <div className="p-4 bg-white border border-[#c4c7c7] rounded-2xl shadow-sm">
            <p className="text-[10px] text-[#444748] font-bold uppercase tracking-widest">AOV</p>
            <p className="font-serif text-2xl font-semibold text-black">$7.1k</p>
            <p className="text-[10px] text-[#755a24] mt-1 font-bold">High Intent</p>
          </div>
        </div>

        <div className="p-4 bg-white border border-[#c4c7c7] rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] text-[#444748] font-bold uppercase tracking-widest">
              VIP Progress
            </p>
            <p className="text-xs font-bold text-black">85% to Diamond</p>
          </div>
          <div className="h-1.5 w-full bg-[#efeded] rounded-full overflow-hidden">
            <div className="h-full bg-black" style={{ width: '85%' }} />
          </div>
        </div>
      </div>

      {/* AI CONCIERGE INSIGHTS */}
      <div className="p-6 bg-[#1c1b1b] text-white rounded-2xl mb-8 relative overflow-hidden shadow-lg">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#ffdea4]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Atelier AI Insights
            </h3>
          </div>
          <p className="text-xs text-[#e3e2e0] leading-relaxed">
            "Elena is approaching her 3-year anniversary with the Atelier. She has viewed the 'Noir' Sculpture twice this week."
          </p>
          <div className="space-y-2 pt-2">
            <button
              type="button"
              className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs font-bold uppercase tracking-widest border border-white/10 text-white"
            >
              Summarize Profile
            </button>
            <button
              type="button"
              className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs font-bold uppercase tracking-widest border border-white/10 text-white"
            >
              Recommended Gift
            </button>
            <button
              type="button"
              className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs font-bold uppercase tracking-widest border border-white/10 text-white"
            >
              Draft Anniversary Email
            </button>
          </div>
        </div>
      </div>

      {/* INTERACTION TIMELINE */}
      <div className="mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-black border-b border-[#efeded] pb-2 mb-4">
          Interactions
        </h2>
        <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-0 before:w-px before:bg-[#c4c7c7]">
          {timeline.map((evt) => (
            <div key={evt.id} className="relative">
              <div
                className={`absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-white ${
                  evt.color === 'gold'
                    ? 'bg-[#755a24]'
                    : evt.color === 'grey'
                    ? 'bg-[#c4c7c7]'
                    : 'bg-black'
                }`}
              />
              <p className="text-[10px] text-[#444748] font-bold uppercase tracking-widest">
                {evt.timestamp}
              </p>
              <p className="text-xs font-semibold text-black mt-0.5">{evt.title}</p>
              {evt.note && <p className="text-xs text-[#444748] italic mt-1">{evt.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
