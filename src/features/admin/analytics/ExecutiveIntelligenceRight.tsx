'use client';

import React from 'react';
import { REALTIME_INSIGHTS, RealtimeInsightItem } from './analyticsMockData';

export const ExecutiveIntelligenceRight: React.FC = () => {
  return (
    <aside className="w-80 shrink-0 bg-[#faf9f9]/80 border-l border-[#c4c7c7]/20 p-6 overflow-y-auto shrink-0 flex flex-col font-sans select-none h-full">
      {/* Real-time Intelligence Feed */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#755a24] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#755a24]" />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black">
            Real-time Insights
          </h3>
        </div>

        <div className="space-y-6">
          {REALTIME_INSIGHTS.map((item: RealtimeInsightItem) => (
            <div
              key={item.id}
              className={`group cursor-pointer ${
                item.isHighlighted ? 'border-l-2 border-[#755a24] pl-4 py-1' : ''
              }`}
            >
              <p className="text-xs text-[#444748] mb-1 italic">
                {item.timeAgo} • {item.title}
              </p>
              <p className="text-xs font-semibold text-black group-hover:text-[#755a24] transition-colors leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI BUSINESS ASSISTANT */}
      <div className="mt-auto bg-black rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#e5c281] flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-black text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </div>
          <h4 className="font-serif text-lg font-bold text-white">Luxora Intelligence</h4>
        </div>
        <p className="text-xs opacity-70 mb-4 font-sans">Executive Assistant</p>
        <div className="space-y-2">
          <button
            type="button"
            className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs flex items-center justify-between group cursor-pointer"
          >
            <span>Summarize Performance</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              arrow_forward
            </span>
          </button>
          <button
            type="button"
            className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs flex items-center justify-between group cursor-pointer"
          >
            <span>Generate Weekly Report</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              arrow_forward
            </span>
          </button>
          <button
            type="button"
            className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs flex items-center justify-between group text-[#ffdea4] cursor-pointer"
          >
            <span>Explain Revenue Drop</span>
            <span className="material-symbols-outlined text-sm opacity-100">help_outline</span>
          </button>
          <button
            type="button"
            className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs flex items-center justify-between group cursor-pointer"
          >
            <span>Optimize Budget</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              trending_up
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};
