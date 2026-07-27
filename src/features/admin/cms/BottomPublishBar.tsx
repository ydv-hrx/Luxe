'use client';

import React from 'react';

export interface BottomPublishBarProps {
  onDiscard?: () => void;
  onSaveDraft?: () => void;
  onPreview?: () => void;
  onPublishNow?: () => void;
}

export const BottomPublishBar: React.FC<BottomPublishBarProps> = ({
  onDiscard,
  onSaveDraft,
  onPreview,
  onPublishNow,
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none select-none">
      <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 bg-black/95 text-white rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/10 pointer-events-auto font-sans">
        <button
          type="button"
          onClick={onDiscard}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-semibold text-white/60 hover:text-white transition-colors"
        >
          Discard
        </button>

        <div className="w-px h-6 bg-white/10" />

        <button
          type="button"
          onClick={onSaveDraft}
          className="flex items-center gap-2 px-4 sm:px-5 py-2 text-xs font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
        >
          Save Draft
        </button>

        <button
          type="button"
          onClick={onPreview}
          className="hidden sm:flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
        >
          Preview
        </button>

        <button
          type="button"
          onClick={onPublishNow}
          className="flex items-center gap-2 px-6 sm:px-8 py-2 bg-white text-black rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
          Publish Now
        </button>
      </div>
    </div>
  );
};
