'use client';

import React from 'react';

export interface CollectionPublishFooterProps {
  onDiscard?: () => void;
  onSaveDraft?: () => void;
  onPreviewLive?: () => void;
  onApproveAndLaunch?: () => void;
}

export const CollectionPublishFooter: React.FC<CollectionPublishFooterProps> = ({
  onDiscard,
  onSaveDraft,
  onPreviewLive,
  onApproveAndLaunch,
}) => {
  return (
    <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full px-8 sm:px-10 py-4 sm:py-5 w-auto min-w-[320px] sm:min-w-[600px] z-[60] bg-white/85 backdrop-blur-xl shadow-2xl border border-[#c4c7c7]/30 flex justify-between items-center gap-6 sm:gap-12 font-sans select-none">
      {/* Left Actions */}
      <div className="flex gap-4 sm:gap-6 border-r border-[#c4c7c7]/20 pr-6 sm:pr-12">
        <button
          type="button"
          onClick={onDiscard}
          className="flex items-center gap-2 text-[#444748] hover:text-[#ba1a1a] transition-all group text-[11px] font-bold uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[20px]">delete_outline</span>
          <span className="hidden sm:inline">Discard</span>
        </button>

        <button
          type="button"
          onClick={onSaveDraft}
          className="flex items-center gap-2 text-[#444748] hover:text-black transition-all group text-[11px] font-bold uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[20px]">archive</span>
          <span className="hidden sm:inline">Save Draft</span>
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex gap-4 sm:gap-6 items-center">
        <button
          type="button"
          onClick={onPreviewLive}
          className="flex items-center gap-2 text-[#444748] hover:text-black transition-all group text-[11px] font-bold uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[20px]">visibility</span>
          <span className="hidden sm:inline">Preview Live</span>
        </button>

        <button
          type="button"
          onClick={onApproveAndLaunch}
          className="flex items-center gap-3 bg-black text-white rounded-full px-8 sm:px-10 py-3 sm:py-3.5 active:scale-95 transition-all hover:shadow-2xl shadow-lg"
        >
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]">
            Approve &amp; Launch
          </span>
        </button>
      </div>
    </footer>
  );
};
