'use client';

import React from 'react';
import Image from 'next/image';
import { TimelineEvent } from './ordersMockData';

export interface OrderIntelligenceRightProps {
  timelineEvents: TimelineEvent[];
}

export const OrderIntelligenceRight: React.FC<OrderIntelligenceRightProps> = ({
  timelineEvents,
}) => {
  return (
    <section className="w-80 shrink-0 flex flex-col gap-6 font-sans select-none h-full overflow-y-auto pr-1">
      {/* Customer Summary Card */}
      <div className="p-6 bg-white rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#c4c7c7]/30 text-center">
        <div className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#ffdb99]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSLyyVis3XJ04-t3eie0l4urcyMLq-baSqO8b7ABPBJkWR3RUXXe9Oky7GraJeIGRDg3Q0eIoJZDIACKE1ziAq2FM6K4hThR9fJ6Rabsjxgazb4ZPcBHDQM9_dYWqY7rHpsnyV2W6mrTeyMZvgFRulXv8zbDg44DHSFdzVkh3INgi96558KcOWCdRfyI4WwIlwHcZdvPx3WeaGGF-yvjGSTrPjZ8vj4jT-G0vXw_c-nYJbA5_hQsHNrtvqWRN2wH377smULTBEs_oN"
            alt="Eleanor Vance VIP Customer Profile"
            fill
            className="object-cover"
          />
        </div>
        <h4 className="font-serif text-xl font-semibold text-black">Eleanor Vance</h4>
        <span className="inline-block mt-1 px-3 py-0.5 bg-[#ffdb99] text-[#795f28] text-[10px] font-bold rounded-full uppercase tracking-widest">
          Platinum VIP
        </span>
        <div className="grid grid-cols-2 gap-2 mt-6 text-left">
          <div className="bg-[#f4f3f3] p-3 rounded-xl">
            <p className="text-[10px] font-bold opacity-40 uppercase text-black">LTV</p>
            <p className="text-sm font-bold text-black">$42,900</p>
          </div>
          <div className="bg-[#f4f3f3] p-3 rounded-xl">
            <p className="text-[10px] font-bold opacity-40 uppercase text-black">Orders</p>
            <p className="text-sm font-bold text-black">14</p>
          </div>
        </div>
      </div>

      {/* Luxe Intelligence Panel */}
      <div className="p-6 bg-black text-white rounded-2xl relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <span className="material-symbols-outlined text-4xl">auto_awesome</span>
        </div>
        <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4">
          Luxe Intelligence
        </h4>
        <div className="space-y-2">
          <button
            type="button"
            className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-left font-sans"
          >
            <span className="material-symbols-outlined text-sm">summarize</span>
            <span className="text-xs font-semibold">Summarize Order</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-left font-sans"
          >
            <span className="material-symbols-outlined text-sm text-[#ba1a1a]">security</span>
            <span className="text-xs font-semibold">Detect Fraud Risk</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-left font-sans"
          >
            <span className="material-symbols-outlined text-sm">chat_bubble</span>
            <span className="text-xs font-semibold">Generate Reply</span>
          </button>
        </div>
      </div>

      {/* Order Timeline History Card */}
      <div className="p-6 bg-white rounded-2xl border border-[#c4c7c7] relative mb-12">
        <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-black">
          History
        </h4>
        <div className="space-y-6 relative z-10">
          {timelineEvents.map((evt) => (
            <div key={evt.id} className={`flex gap-4 ${!evt.isCompleted ? 'opacity-40' : ''}`}>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  evt.isCompleted
                    ? evt.icon === 'inventory_2'
                      ? 'bg-[#e5c281] text-[#261900]'
                      : 'bg-black text-white'
                    : 'bg-[#e3e2e2] text-black'
                }`}
              >
                <span className="material-symbols-outlined text-xs">{evt.icon}</span>
              </div>
              <div>
                <p className="text-xs font-bold text-black">{evt.title}</p>
                <p className="text-[10px] text-[#444748]">{evt.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
