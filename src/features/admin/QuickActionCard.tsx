'use client';

import React from 'react';
import { QuickAction } from './adminMockData';

export interface QuickActionCardProps {
  action: QuickAction;
  onClick?: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({ action, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 px-6 py-3.5 bg-white border border-[#c4c7c7]/10 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:bg-[#f4f3f3] transition-all duration-300 group"
    >
      <span className="material-symbols-outlined text-[#C9A86A] text-[20px] group-hover:scale-110 transition-transform">
        {action.icon}
      </span>
      <span className="font-sans text-xs font-semibold text-black tracking-wide">
        {action.label}
      </span>
    </button>
  );
};

export interface QuickActionsRowProps {
  actions: QuickAction[];
}

export const QuickActionsRow: React.FC<QuickActionsRowProps> = ({ actions }) => {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {actions.map((act) => (
        <QuickActionCard key={act.id} action={act} />
      ))}
    </div>
  );
};
