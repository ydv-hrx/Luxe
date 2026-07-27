'use client';

import React from 'react';

export interface GiftActionBarProps {
  onPreview?: () => void;
  onSchedule?: () => void;
  onDuplicate?: () => void;
  onPublish?: () => void;
}

export const GiftActionBar: React.FC<GiftActionBarProps> = ({
  onPreview,
  onSchedule,
  onDuplicate,
  onPublish,
}) => {
  return (
    <div className="fixed bottom-0 left-72 right-0 flex justify-center pb-8 z-50 pointer-events-none font-sans select-none">
      <div className="bg-black rounded-full shadow-2xl flex items-center gap-2 p-2 px-4 pointer-events-auto border border-white/10 text-white">
        <button
          type="button"
          onClick={onPreview}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:bg-[#755a24] hover:text-white rounded-full transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">visibility</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Preview</span>
        </button>

        <div className="w-px h-6 bg-white/20" />

        <button
          type="button"
          onClick={onSchedule}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:bg-[#755a24] hover:text-white rounded-full transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Schedule</span>
        </button>

        <button
          type="button"
          onClick={onDuplicate}
          className="flex items-center gap-2 px-6 py-3 text-white/70 hover:bg-[#755a24] hover:text-white rounded-full transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">content_copy</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Duplicate</span>
        </button>

        <button
          type="button"
          onClick={onPublish}
          className="flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white rounded-full hover:brightness-110 transition-all shadow-lg cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">publish</span>
          <span className="text-xs font-bold uppercase tracking-widest">Publish</span>
        </button>
      </div>
    </div>
  );
};
