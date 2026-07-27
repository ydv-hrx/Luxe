'use client';

import React from 'react';

export interface InventoryActionBarProps {
  onQuickAdjust?: () => void;
  onTransfer?: () => void;
  onStockCount?: () => void;
  onAiInsight?: () => void;
}

export const InventoryActionBar: React.FC<InventoryActionBarProps> = ({
  onQuickAdjust,
  onTransfer,
  onStockCount,
  onAiInsight,
}) => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-black text-white rounded-full px-6 py-3 shadow-2xl font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onQuickAdjust}
        className="text-white/60 hover:text-white flex flex-col items-center gap-1 hover:scale-105 transition-all group"
      >
        <span className="material-symbols-outlined text-[20px]">tune</span>
        <span className="text-[10px] font-semibold">Quick Adjust</span>
      </button>

      <div className="w-px h-8 bg-white/10" />

      <button
        type="button"
        onClick={onTransfer}
        className="text-white/60 hover:text-white flex flex-col items-center gap-1 hover:scale-105 transition-all group"
      >
        <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
        <span className="text-[10px] font-semibold">Transfer</span>
      </button>

      <div className="w-px h-8 bg-white/10" />

      <button
        type="button"
        onClick={onStockCount}
        className="text-[#ffdea4] font-bold flex flex-col items-center gap-1 scale-105 transition-all"
      >
        <span className="material-symbols-outlined text-[20px]">inventory</span>
        <span className="text-[10px] font-bold">Stock Count</span>
      </button>

      <div className="w-px h-8 bg-white/10" />

      <button
        type="button"
        onClick={onAiInsight}
        className="text-white/60 hover:text-white flex flex-col items-center gap-1 hover:scale-105 transition-all group"
      >
        <span className="material-symbols-outlined text-[20px]">psychology</span>
        <span className="text-[10px] font-semibold">AI Insight</span>
      </button>
    </nav>
  );
};
