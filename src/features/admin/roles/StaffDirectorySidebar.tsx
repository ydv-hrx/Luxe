'use client';

import React from 'react';
import Image from 'next/image';
import { StaffMember } from './rolesMockData';

export interface StaffDirectorySidebarProps {
  staffMembers: StaffMember[];
  activeStaffId: string;
  activeDeptFilter: string;
  onSelectStaff: (id: string) => void;
  onSelectFilter: (dept: 'All' | 'Marketing' | 'Atelier' | 'Security') => void;
}

export const StaffDirectorySidebar: React.FC<StaffDirectorySidebarProps> = ({
  staffMembers,
  activeStaffId,
  activeDeptFilter,
  onSelectStaff,
  onSelectFilter,
}) => {
  const filtered = staffMembers.filter((s) => {
    if (activeDeptFilter === 'Marketing') return s.department === 'Marketing';
    if (activeDeptFilter === 'Atelier') return s.department === 'Couture' || s.department === 'Inventory';
    if (activeDeptFilter === 'Security') return s.department === 'Security';
    return true;
  });

  return (
    <section className="col-span-12 xl:col-span-3 space-y-6 font-sans select-none">
      <div className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl font-semibold text-black">Atelier Staff</h2>
        <div className="flex flex-wrap gap-2">
          {(['All', 'Marketing', 'Atelier', 'Security'] as const).map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => onSelectFilter(dept)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                activeDeptFilter === dept
                  ? 'bg-black text-white'
                  : 'bg-[#efeded] text-[#444748] hover:bg-[#c4c7c7]/30'
              }`}
            >
              {dept === 'All' ? 'All Staff' : dept}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 max-h-[calc(100vh-320px)] overflow-y-auto custom-scrollbar pr-2">
        {filtered.map((m) => {
          const isActive = activeStaffId === m.id;

          return (
            <div
              key={m.id}
              onClick={() => onSelectStaff(m.id)}
              className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all border ${
                isActive
                  ? 'bg-white border-l-4 border-l-[#D4AF37] border-[#c4c7c7]/20 shadow-sm'
                  : 'bg-white/40 border-[#c4c7c7]/20 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden grayscale shrink-0 border border-[#c4c7c7]/30">
                <Image src={m.avatar} alt={m.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-black truncate">{m.name}</h3>
                <p
                  className={`text-xs truncate ${
                    isActive ? 'text-[#D4AF37] font-medium' : 'text-[#444748]'
                  }`}
                >
                  {m.role}
                </p>
              </div>
              <div className="text-right shrink-0">
                {m.isOnline ? (
                  <>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mb-1" />
                    <p className="text-[9px] uppercase tracking-wider text-[#444748]/50">
                      Active Now
                    </p>
                  </>
                ) : (
                  <p className="text-[9px] uppercase tracking-wider text-[#444748]/50">
                    {m.statusText}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
