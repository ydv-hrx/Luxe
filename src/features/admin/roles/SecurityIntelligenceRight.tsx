'use client';

import React from 'react';
import { AuditEventItem } from './rolesMockData';

export interface SecurityIntelligenceRightProps {
  auditEvents: AuditEventItem[];
}

export const SecurityIntelligenceRight: React.FC<SecurityIntelligenceRightProps> = ({
  auditEvents,
}) => {
  return (
    <aside className="col-span-12 xl:col-span-3 space-y-6 font-sans select-none">
      {/* AI Security Assistant */}
      <div className="bg-black text-white rounded-2xl p-6 shadow-xl relative overflow-hidden group">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#D4AF37]">auto_awesome</span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Luxe AI Security
            </h3>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            System analysis indicates 2 unauthorized attempts from external IPs in the last 24h. Permission hierarchy is optimal.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              className="w-full text-left bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-xl text-xs font-medium text-white flex items-center justify-between group/btn cursor-pointer"
            >
              <span>Review Admin Access</span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover/btn:opacity-100 transition-all text-white">
                chevron_right
              </span>
            </button>
            <button
              type="button"
              className="w-full text-left bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-xl text-xs font-medium text-white flex items-center justify-between group/btn cursor-pointer"
            >
              <span>Detect Permission Risk</span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover/btn:opacity-100 transition-all text-white">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Security Logs */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c4c7c7]/20 flex-1">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#444748]/50 mb-6">
          Recent Activity
        </h3>
        <div className="space-y-6">
          {auditEvents.map((evt) => (
            <div key={evt.id} className="flex gap-4 items-start">
              <div className="mt-1 shrink-0">
                <div
                  className={`w-2 h-2 rounded-full ${
                    evt.type === 'gold'
                      ? 'bg-[#D4AF37]'
                      : evt.type === 'error'
                      ? 'bg-red-600'
                      : 'bg-black/20'
                  }`}
                />
              </div>
              <div>
                <p className="text-xs font-bold text-black">{evt.title}</p>
                <p className="text-[10px] text-[#444748] mt-0.5">{evt.description}</p>
                <p className="text-[9px] uppercase tracking-wider text-[#444748]/40 mt-1">
                  {evt.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="w-full mt-8 py-3 text-[10px] uppercase font-bold border border-[#c4c7c7]/30 text-black rounded-xl hover:bg-[#efeded] transition-colors cursor-pointer"
        >
          View Complete Audit Log
        </button>
      </div>
    </aside>
  );
};
