'use client';

import React from 'react';

export interface ReturnsActionBarProps {
  onApprove?: () => void;
  onRefund?: () => void;
  onExchange?: () => void;
}

export const ReturnsActionBar: React.FC<ReturnsActionBarProps> = ({
  onApprove,
  onRefund,
  onExchange,
}) => {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-6 min-w-[480px] bg-black rounded-full px-8 py-4 shadow-2xl font-sans select-none text-white border border-white/10">
      <button
        type="button"
        onClick={onApprove}
        className="flex items-center gap-2 text-white/70 hover:text-white px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined text-lg">check_circle</span>
        <span className="text-xs font-bold uppercase tracking-widest">Approve</span>
      </button>

      <button
        type="button"
        onClick={onRefund}
        className="flex items-center gap-2 text-white bg-white/10 rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined text-lg">payments</span>
        <span className="text-xs font-bold uppercase tracking-widest">Refund</span>
      </button>

      <button
        type="button"
        onClick={onExchange}
        className="flex items-center gap-2 text-white/70 hover:text-white px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined text-lg">swap_horiz</span>
        <span className="text-xs font-bold uppercase tracking-widest">Exchange</span>
      </button>
    </nav>
  );
};
