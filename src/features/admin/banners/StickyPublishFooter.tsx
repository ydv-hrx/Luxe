'use client';

import React from 'react';

export interface StickyPublishFooterProps {
  onDiscard?: () => void;
  onSaveDraft?: () => void;
  onPublishChanges?: () => void;
}

export const StickyPublishFooter: React.FC<StickyPublishFooterProps> = ({
  onDiscard,
  onSaveDraft,
  onPublishChanges,
}) => {
  return (
    <footer className="h-20 bg-[#faf9f9]/90 backdrop-blur-md border-t border-[#c4c7c7]/30 flex items-center justify-between px-6 sm:px-10 sticky bottom-0 z-50 font-sans select-none w-full">
      {/* Left: Discard & Auto-Saved Status */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onDiscard}
          className="text-xs font-semibold text-[#444748] hover:text-[#ba1a1a] transition-colors py-2"
        >
          Discard Changes
        </button>
        <div className="h-6 w-px bg-[#c4c7c7]/30 hidden sm:block" />
        <p className="text-xs text-[#444748]/60 italic hidden sm:block">
          Last auto-saved at 14:32
        </p>
      </div>

      {/* Right: Save & Publish Actions */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onSaveDraft}
          className="px-6 sm:px-8 py-3 rounded-full text-xs font-semibold border border-[#c4c7c7] text-[#1b1c1c] hover:bg-[#f4f3f3] transition-colors"
        >
          Save Draft
        </button>
        <button
          type="button"
          onClick={onPublishChanges}
          className="px-8 sm:px-10 py-3 rounded-full text-xs font-semibold bg-black text-white hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
        >
          <span>Publish Changes</span>
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </footer>
  );
};
