'use client';

import React from 'react';
import { KpiMetric } from './adminMockData';

export interface KpiCardProps {
  metric: KpiMetric;
}

export const KpiCard: React.FC<KpiCardProps> = ({ metric }) => {
  const isPositive = metric.changeType === 'increase';

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-[#c4c7c7]/10 group hover:border-[#C9A86A]/30 transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        {/* Icon Badge Box */}
        <div
          className={`p-3 rounded-2xl border ${
            metric.colorScheme === 'gold'
              ? 'bg-[#C9A86A]/5 text-[#C9A86A] border-[#C9A86A]/10'
              : 'bg-black/5 text-black border-black/10'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">{metric.icon}</span>
        </div>

        {/* Change Rate Indicator */}
        <div className="flex flex-col items-end">
          <div
            className={`flex items-center px-2.5 py-1 rounded-full font-bold text-[11px] mb-1 ${
              isPositive ? 'text-green-600 bg-green-50' : 'text-[#ba1a1a] bg-[#ba1a1a]/5'
            }`}
          >
            <span className="material-symbols-outlined text-[14px] mr-1">
              {isPositive ? 'trending_up' : 'trending_down'}
            </span>
            {metric.change}
          </div>
          <span className="text-[10px] text-[#444748]/50 font-bold uppercase tracking-wider">
            {metric.comparison}
          </span>
        </div>
      </div>

      <p className="text-[#444748]/60 font-sans uppercase tracking-[0.1em] text-[11px] font-semibold">
        {metric.title}
      </p>
      <h3 className="font-serif text-3xl sm:text-4xl text-black font-semibold mt-1">
        {metric.value}
      </h3>

      {/* Dynamic Micro Bar Chart Preview */}
      <div className="mt-6 h-10 flex items-end gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
        {metric.bars.map((height, idx) => (
          <div
            key={idx}
            style={{ height: `${height}%` }}
            className={`w-full rounded-full transition-all ${
              metric.colorScheme === 'gold'
                ? 'bg-[#C9A86A]'
                : metric.colorScheme === 'error'
                ? 'bg-black/20'
                : 'bg-black/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
