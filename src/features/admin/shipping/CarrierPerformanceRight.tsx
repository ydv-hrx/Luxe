'use client';

import React from 'react';
import { ActivityLogEvent } from './shippingMockData';

export interface CarrierPerformanceRightProps {
  activities: ActivityLogEvent[];
}

export const CarrierPerformanceRight: React.FC<CarrierPerformanceRightProps> = ({
  activities,
}) => {
  return (
    <aside className="w-96 shrink-0 border-l border-[#c4c7c7] bg-[#f4f3f3] flex flex-col p-6 gap-8 overflow-y-auto font-sans select-none h-full">
      {/* Carrier Performance */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#444748] mb-4">
          Carrier Performance
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-[#c4c7c7]">
            <p className="text-xs font-bold text-[#444748]">Today's Total</p>
            <p className="font-serif text-2xl font-bold text-black mt-1">142</p>
            <p className="text-[10px] text-green-600 font-bold mt-1">+12% vs yesterday</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#c4c7c7]">
            <p className="text-xs font-bold text-[#444748]">On-Time Rate</p>
            <p className="font-serif text-2xl font-bold text-black mt-1">99.2%</p>
            <div className="w-full bg-[#efeded] h-1.5 mt-2 rounded-full overflow-hidden">
              <div className="bg-black w-[99%] h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Shipping Assistant Card */}
      <div className="bg-[#1c1b1b] text-white p-6 rounded-2xl shadow-xl flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#c8c6c5] text-xl">auto_awesome</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8c6c5]">
            Atelier AI
          </span>
        </div>
        <p className="font-serif text-xl font-semibold text-white">Optimization Insights</p>
        <div className="space-y-3 font-sans">
          <button
            type="button"
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-white">Predict Delay (Berlin Route)</span>
            <span className="material-symbols-outlined text-sm">trending_up</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-white">Optimize Carrier Rate</span>
            <span className="material-symbols-outlined text-sm">savings</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left cursor-pointer"
          >
            <span className="text-xs font-bold text-white">Generate Customs Docs</span>
            <span className="material-symbols-outlined text-sm">description</span>
          </button>
        </div>
      </div>

      {/* Activity Log */}
      <div className="mb-12">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#444748] mb-6">
          Activity Log
        </h4>
        <div className="space-y-6 relative ml-4">
          <div className="absolute left-[-17px] top-2 bottom-0 w-[1px] bg-[#c4c7c7]" />
          {activities.map((act) => (
            <div key={act.id} className="relative">
              <div
                className={`absolute left-[-21px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-[#f4f3f3] ${
                  act.isCurrent ? 'bg-black' : 'bg-[#c4c7c7]'
                }`}
              />
              <p
                className={`text-xs font-bold ${
                  act.isCurrent ? 'text-black' : 'text-[#444748]'
                }`}
              >
                {act.time}
              </p>
              <p
                className={`text-xs ${
                  act.isCurrent ? 'text-black font-semibold' : 'text-[#444748]'
                }`}
              >
                {act.title}
              </p>
              <p className="text-[10px] text-[#444748] mt-0.5 uppercase tracking-wider">
                {act.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
