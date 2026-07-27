'use client';

import React from 'react';
import { LiveAlertItem } from './auditMockData';

export interface SecurityAlertsRightProps {
  alerts: LiveAlertItem[];
}

export const SecurityAlertsRight: React.FC<SecurityAlertsRightProps> = ({ alerts }) => {
  return (
    <aside className="w-80 shrink-0 border-l border-[#c4c7c7]/20 flex flex-col bg-[#faf9f9]/30 font-sans select-none h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xs font-bold text-black uppercase tracking-wider">Live Alerts</h3>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>
        </div>

        <div className="space-y-4 mb-8">
          {alerts.map((alt) => (
            <div
              key={alt.id}
              className={`p-4 rounded-xl border ${
                alt.type === 'error'
                  ? 'bg-[#ffdad6]/20 border-red-200'
                  : 'bg-white border-[#c4c7c7]/20'
              }`}
            >
              <div className="flex gap-3">
                <span
                  className={`material-symbols-outlined text-xl ${
                    alt.type === 'error' ? 'text-red-600' : 'text-[#755a24]'
                  }`}
                >
                  {alt.icon}
                </span>
                <div>
                  <p
                    className={`text-xs font-bold ${
                      alt.type === 'error' ? 'text-red-700' : 'text-black'
                    }`}
                  >
                    {alt.title}
                  </p>
                  <p className="text-[11px] text-[#444748] mt-1 leading-relaxed">
                    {alt.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Atelier AI Security Assistant */}
        <div className="mt-auto relative">
          <div className="p-6 rounded-2xl bg-black text-white shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#ffdea4]">auto_awesome</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffdea4]">
                Atelier AI
              </span>
            </div>
            <p className="text-xs font-light mb-6 opacity-90 leading-relaxed">
              Analysis complete. I&apos;ve detected a 12% increase in cross-border price adjustments this morning.
            </p>
            <div className="space-y-2">
              <button
                type="button"
                className="w-full text-left px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-xs font-medium text-white flex justify-between items-center group cursor-pointer"
              >
                <span>Summarize Activity</span>
                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                className="w-full text-left px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-xs font-medium text-white flex justify-between items-center group cursor-pointer"
              >
                <span>Detect Patterns</span>
                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                className="w-full text-left px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-xs font-medium text-white flex justify-between items-center group cursor-pointer"
              >
                <span>Predict Risk Scores</span>
                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
