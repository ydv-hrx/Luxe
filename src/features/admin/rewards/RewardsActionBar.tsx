'use client';

import React from 'react';

export interface RewardsActionBarProps {
  onPreview?: () => void;
  onGrantReward?: () => void;
  onUpgradeTier?: () => void;
  onPublish?: () => void;
}

export const RewardsActionBar: React.FC<RewardsActionBarProps> = ({
  onPreview,
  onGrantReward,
  onUpgradeTier,
  onPublish,
}) => {
  return (
    <div className="fixed bottom-0 left-72 right-0 flex justify-center pb-8 z-50 pointer-events-none font-sans select-none">
      <nav className="bg-black rounded-full shadow-2xl flex items-center p-2 gap-2 pointer-events-auto border border-white/10 text-white">
        <button
          type="button"
          onClick={onPreview}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:bg-[#755a24] hover:text-white transition-all rounded-full group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
            visibility
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider">Preview</span>
        </button>

        <button
          type="button"
          onClick={onGrantReward}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:bg-[#755a24] hover:text-white transition-all rounded-full group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
            card_giftcard
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider">Grant Reward</span>
        </button>

        <button
          type="button"
          onClick={onUpgradeTier}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:bg-[#755a24] hover:text-white transition-all rounded-full group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
            keyboard_double_arrow_up
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider">Upgrade Tier</span>
        </button>

        <div className="w-[1px] h-8 bg-white/20 mx-2" />

        <button
          type="button"
          onClick={onPublish}
          className="flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform">
            unfold_more
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">Publish</span>
        </button>
      </nav>
    </div>
  );
};
