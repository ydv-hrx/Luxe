'use client';

import React from 'react';
import Image from 'next/image';
import { MemberCardItem } from './rewardsMockData';

export interface MemberDirectorySidebarProps {
  members: MemberCardItem[];
  activeMemberId: string;
  activeTierFilter: string;
  onSelectMember: (id: string) => void;
  onSelectTierFilter: (tier: 'All' | 'Platinum' | 'Gold' | 'VIP') => void;
}

export const MemberDirectorySidebar: React.FC<MemberDirectorySidebarProps> = ({
  members,
  activeMemberId,
  activeTierFilter,
  onSelectMember,
  onSelectTierFilter,
}) => {
  const filtered = members.filter((m) => {
    if (activeTierFilter === 'Platinum') return m.tier.includes('Platinum');
    if (activeTierFilter === 'Gold') return m.tier.includes('Gold');
    if (activeTierFilter === 'VIP') return m.tier.includes('Black') || m.tier.includes('Platinum');
    return true;
  });

  return (
    <section className="w-80 shrink-0 flex flex-col gap-6 h-full font-sans select-none">
      <div className="flex justify-between items-end">
        <h2 className="font-serif text-2xl font-semibold text-black">Members</h2>
        <span className="text-xs uppercase tracking-widest text-[#444748] font-medium">
          1,248 Total
        </span>
      </div>

      {/* Tier Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {(['All', 'Platinum', 'Gold', 'VIP'] as const).map((tier) => (
          <button
            key={tier}
            type="button"
            onClick={() => onSelectTierFilter(tier)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTierFilter === tier
                ? 'bg-black text-white'
                : 'bg-[#efeded] hover:bg-[#e3e2e2] text-[#444748]'
            }`}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* Member Cards List */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {filtered.map((m) => {
          const isActive = activeMemberId === m.id;

          return (
            <div
              key={m.id}
              onClick={() => onSelectMember(m.id)}
              className={`p-4 bg-white rounded-2xl cursor-pointer transition-all ${
                isActive
                  ? 'border border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10'
                  : 'border border-transparent hover:border-[#c4c7c7]'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c4c7c7] shrink-0">
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">{m.name}</p>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold ${
                      m.tierColor === 'gold' ? 'text-[#D4AF37]' : 'text-[#444748]'
                    }`}
                  >
                    {m.tier}
                  </span>
                </div>
              </div>
              <div
                className={`grid grid-cols-2 gap-4 border-t border-[#c4c7c7]/30 pt-3 ${
                  isActive ? '' : 'opacity-60'
                }`}
              >
                <div>
                  <p className="text-[10px] text-[#444748] uppercase tracking-tighter font-bold">
                    LTV
                  </p>
                  <p className="font-bold text-black text-sm">{m.ltvText}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[#444748] uppercase tracking-tighter font-bold">
                    Points
                  </p>
                  <p className="font-bold text-black text-sm">{m.pointsText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
