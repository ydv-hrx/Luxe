'use client';

import React from 'react';

export interface CustomerActionBarProps {
  onUndo?: () => void;
  onContact?: () => void;
  onExecuteAction?: () => void;
  onPreview?: () => void;
  onRedo?: () => void;
}

export const CustomerActionBar: React.FC<CustomerActionBarProps> = ({
  onUndo,
  onContact,
  onExecuteAction,
  onPreview,
  onRedo,
}) => {
  return (
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-3 sm:gap-4 bg-black text-white rounded-full px-6 py-2.5 w-fit min-w-[340px] shadow-2xl font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onUndo}
        className="flex items-center gap-2 text-white px-3 py-1.5 hover:bg-[#858383]/20 rounded-full transition-all text-xs font-semibold"
      >
        <span className="material-symbols-outlined text-lg">undo</span>
        <span>Undo</span>
      </button>

      <button
        type="button"
        onClick={onContact}
        className="flex items-center gap-2 text-white px-3 py-1.5 hover:bg-[#858383]/20 rounded-full transition-all border-l border-white/20 text-xs font-semibold"
      >
        <span className="material-symbols-outlined text-lg">mail</span>
        <span>Contact</span>
      </button>

      <button
        type="button"
        onClick={onExecuteAction}
        className="bg-[#755a24] text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all active:scale-95 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#755a24]/90"
      >
        <span className="material-symbols-outlined text-lg">bolt</span>
        <span>Execute Action</span>
      </button>

      <button
        type="button"
        onClick={onPreview}
        className="flex items-center gap-2 text-white px-3 py-1.5 hover:bg-[#858383]/20 rounded-full transition-all border-l border-white/20 text-xs font-semibold"
      >
        <span className="material-symbols-outlined text-lg">visibility</span>
        <span>Preview</span>
      </button>

      <button
        type="button"
        onClick={onRedo}
        className="flex items-center gap-2 text-white px-3 py-1.5 hover:bg-[#858383]/20 rounded-full transition-all text-xs font-semibold"
      >
        <span className="material-symbols-outlined text-lg">redo</span>
        <span>Redo</span>
      </button>
    </footer>
  );
};
