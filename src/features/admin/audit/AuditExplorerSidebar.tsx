'use client';

import React from 'react';
import Image from 'next/image';
import { AuditActivityCard } from './auditMockData';

export interface AuditExplorerSidebarProps {
  activities: AuditActivityCard[];
  activeActivityId: string;
  activeCategoryFilter: string;
  onSelectActivity: (id: string) => void;
  onSelectFilter: (category: 'All' | 'CMS' | 'Security' | 'Orders') => void;
}

export const AuditExplorerSidebar: React.FC<AuditExplorerSidebarProps> = ({
  activities,
  activeActivityId,
  activeCategoryFilter,
  onSelectActivity,
  onSelectFilter,
}) => {
  const filtered = activities.filter((a) => {
    if (activeCategoryFilter === 'CMS') return a.resourceTag.includes('CMS');
    if (activeCategoryFilter === 'Security') return a.severityType === 'critical';
    if (activeCategoryFilter === 'Orders') return a.resourceTag.includes('SKU');
    return true;
  });

  return (
    <section className="w-80 shrink-0 flex flex-col border-r border-[#c4c7c7]/20 bg-[#faf9f9]/30 font-sans select-none h-full">
      <div className="p-6 pb-2">
        <h2 className="font-serif text-2xl font-semibold text-black mb-4">Audit Explorer</h2>
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 custom-scrollbar">
          {(['All', 'CMS', 'Security', 'Orders'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategoryFilter === cat
                  ? 'bg-black text-white'
                  : 'bg-[#efeded] text-[#444748] hover:bg-[#e3e2e2]'
              }`}
            >
              {cat === 'All' ? 'All Events' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-3 custom-scrollbar pb-10">
        {filtered.map((act) => {
          const isActive = activeActivityId === act.id;

          return (
            <div
              key={act.id}
              onClick={() => onSelectActivity(act.id)}
              className={`p-4 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-white border border-[#755a24] shadow-md ring-1 ring-[#755a24]/20'
                  : 'bg-white/50 border border-transparent hover:border-[#c4c7c7] hover:bg-white'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#efeded] shrink-0">
                    <Image src={act.userAvatar} alt={act.userName} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black">{act.userName}</p>
                    <p className="text-[10px] text-[#444748]/70 uppercase tracking-wider font-semibold">
                      {act.userRole}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    act.severityType === 'medium'
                      ? 'bg-[#ffdb99] text-[#795f28]'
                      : act.severityType === 'critical'
                      ? 'bg-[#ffdad6] text-[#93000a]'
                      : 'bg-[#efeded] text-[#444748]'
                  }`}
                >
                  {act.severity}
                </span>
              </div>
              <p className="text-sm font-semibold text-black mb-1">{act.actionTitle}</p>
              <p className="text-[11px] text-[#444748]">
                {act.timestampText} • {act.resourceTag}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
