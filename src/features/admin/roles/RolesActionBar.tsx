'use client';

import React from 'react';

export interface RolesActionBarProps {
  onPreview?: () => void;
  onSaveDraft?: () => void;
  onPublishChanges?: () => void;
}

export const RolesActionBar: React.FC<RolesActionBarProps> = ({
  onPreview,
  onSaveDraft,
  onPublishChanges,
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full px-8 py-4 shadow-xl bg-black text-white font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onPreview}
        className="flex items-center gap-2 px-6 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all font-semibold text-xs group cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
          visibility
        </span>
        <span>Preview</span>
      </button>

      <div className="w-px h-6 bg-white/20" />

      <button
        type="button"
        onClick={onSaveDraft}
        className="flex items-center gap-2 px-6 py-2 rounded-full text-white hover:bg-white/10 transition-all font-semibold text-xs group cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
          save
        </span>
        <span>Save Draft</span>
      </button>

      <button
        type="button"
        onClick={onPublishChanges}
        className="flex items-center gap-2 px-8 py-2 rounded-full bg-[#D4AF37] text-black font-bold hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer shadow-lg"
      >
        <span className="material-symbols-outlined text-lg">publish</span>
        <span>Publish Changes</span>
      </button>
    </div>
  );
};
