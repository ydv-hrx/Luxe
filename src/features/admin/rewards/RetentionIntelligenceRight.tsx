'use client';

import React from 'react';
import { ActivityEvent } from './rewardsMockData';

export interface RetentionIntelligenceRightProps {
  activities: ActivityEvent[];
}

export const RetentionIntelligenceRight: React.FC<RetentionIntelligenceRightProps> = ({
  activities,
}) => {
  return (
    <aside className="w-80 shrink-0 flex flex-col gap-6 font-sans select-none h-full">
      {/* Metrics Grid */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c4c7c7]/30 space-y-6">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#444748]">
          Retention Intelligence
        </h4>
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-[#444748] uppercase font-bold">Retention Score</p>
              <p className="text-2xl font-serif font-bold text-black">94.2%</p>
            </div>
            <span className="text-green-600 text-[10px] font-bold flex items-center">
              <span className="material-symbols-outlined text-sm">trending_up</span> +2.1%
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-[#444748] uppercase font-bold">VIP Growth</p>
              <p className="text-2xl font-serif font-bold text-black">+12.4%</p>
            </div>
            <span className="text-green-600 text-[10px] font-bold">Target Hit</span>
          </div>
        </div>
      </div>

      {/* Atelier AI */}
      <div className="bg-black text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D4AF37]">auto_awesome</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Atelier AI Insights
            </h4>
          </div>
          <div className="space-y-3 font-sans">
            <button
              type="button"
              className="w-full bg-white/10 hover:bg-white/20 transition-colors text-left px-4 py-3 rounded-xl flex items-center justify-between group cursor-pointer"
            >
              <span className="text-xs font-bold text-white">Recommend VIP Upgrade</span>
              <span className="material-symbols-outlined text-xs text-white">arrow_forward</span>
            </button>
            <button
              type="button"
              className="w-full bg-white/10 hover:bg-white/20 transition-colors text-left px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer"
            >
              <span className="text-xs font-bold text-white">Generate Anniversary Gift</span>
              <span className="material-symbols-outlined text-xs text-white">arrow_forward</span>
            </button>
            <button
              type="button"
              className="w-full bg-white/10 hover:bg-white/20 transition-colors text-left px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer"
            >
              <span className="text-xs font-bold text-white">Predict Churn Risk</span>
              <span className="material-symbols-outlined text-xs text-white">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-[#c4c7c7]/30 flex flex-col mb-12">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#444748] mb-6">
          Activity History
        </h4>
        <div className="relative flex-1">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#efeded]" />
          <div className="space-y-8 relative">
            {activities.map((act) => (
              <div key={act.id} className="flex gap-4 items-start">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${act.iconBg}`}
                >
                  <span className="material-symbols-outlined text-[12px]">{act.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-black">{act.title}</p>
                  <p className="text-[10px] text-[#444748] mt-0.5">{act.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
