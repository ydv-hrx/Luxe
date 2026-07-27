'use client';

import React from 'react';

export interface PromotionsActionBarProps {
  onDuplicate?: () => void;
  onPreview?: () => void;
  onSchedule?: () => void;
  onPublishNow?: () => void;
}

export const PromotionsActionBar: React.FC<PromotionsActionBarProps> = ({
  onDuplicate,
  onPreview,
  onSchedule,
  onPublishNow,
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-8 py-4 bg-white/90 backdrop-blur-xl border border-[#c4c7c7]/50 rounded-full shadow-2xl z-50 font-sans select-none text-black">
      <button
        type="button"
        onClick={onDuplicate}
        className="px-4 sm:px-6 py-2 text-xs font-semibold text-[#444748] hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">content_copy</span>
        <span>Duplicate</span>
      </button>

      <div className="h-6 w-px bg-[#c4c7c7]" />

      <button
        type="button"
        onClick={onPreview}
        className="px-4 sm:px-6 py-2 text-xs font-semibold text-[#444748] hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">visibility</span>
        <span>Preview</span>
      </button>

      <button
        type="button"
        onClick={onSchedule}
        className="px-6 sm:px-8 py-2 bg-white border border-black text-black font-bold text-xs rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-2 shadow-sm cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">schedule</span>
        <span>Schedule</span>
      </button>

      <button
        type="button"
        onClick={onPublishNow}
        className="px-8 sm:px-10 py-2 bg-black text-white font-bold text-xs rounded-full hover:bg-black/90 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">publish</span>
        <span>Publish Now</span>
      </button>
    </div>
  );
};
