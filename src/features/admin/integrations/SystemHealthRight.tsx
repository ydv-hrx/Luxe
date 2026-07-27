'use client';

import React from 'react';

export const SystemHealthRight: React.FC = () => {
  return (
    <aside className="w-full lg:w-1/4 space-y-6 font-sans select-none shrink-0">
      {/* Health Stats */}
      <div className="bg-[#efeded] rounded-2xl p-6 border border-[#c4c7c7]">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#444748] mb-6 border-b border-[#c4c7c7] pb-2">
          System Health
        </h4>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-black">Global Uptime</span>
            <span className="text-[#755a24] font-bold text-sm">99.98%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-black">Failed Webhooks</span>
            <span className="text-red-600 font-bold text-sm">12 (24h)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-black">Rate Limits</span>
            <span className="text-[#444748] font-semibold text-sm">4.2% Load</span>
          </div>
        </div>
      </div>

      {/* ATELIER AI ASSISTANT */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-xl relative overflow-hidden group">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-[#755a24]">auto_awesome</span>
          <h4 className="font-serif text-xl font-bold text-white">Atelier AI</h4>
        </div>
        <p className="text-xs text-[#e5e2e1] mb-6 opacity-80 leading-relaxed">
          Integration anomalies detected in the AI Service cluster. I recommend the following actions to maintain ecosystem integrity:
        </p>
        <div className="space-y-3">
          <button
            type="button"
            className="w-full text-left bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-colors flex items-center justify-between group/item cursor-pointer"
          >
            <span className="text-xs font-semibold text-[#e5e2e1]">Update OpenAI Secret Key</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover/item:opacity-100 transition-opacity text-white">
              chevron_right
            </span>
          </button>
          <button
            type="button"
            className="w-full text-left bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-colors flex items-center justify-between group/item cursor-pointer"
          >
            <span className="text-xs font-semibold text-[#e5e2e1]">Review Stripe Webhook Failures</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover/item:opacity-100 transition-opacity text-white">
              chevron_right
            </span>
          </button>
          <button
            type="button"
            className="w-full text-left bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-colors flex items-center justify-between group/item cursor-pointer"
          >
            <span className="text-xs font-semibold text-[#e5e2e1]">Optimize Logistics Sync Interval</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover/item:opacity-100 transition-opacity text-white">
              chevron_right
            </span>
          </button>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10">
          <button
            type="button"
            className="w-full bg-[#755a24] text-white py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-transform cursor-pointer shadow-md"
          >
            Generate Health Report
          </button>
        </div>
      </div>
    </aside>
  );
};
