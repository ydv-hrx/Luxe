'use client';

import React from 'react';

export interface OrderExecuteActionBarProps {
  onUndo?: () => void;
  onRedo?: () => void;
  onPreview?: () => void;
  onExecute?: () => void;
}

export const OrderExecuteActionBar: React.FC<OrderExecuteActionBarProps> = ({
  onUndo,
  onRedo,
  onPreview,
  onExecute,
}) => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-2 sm:gap-4 bg-black text-white rounded-full px-6 py-2.5 w-fit min-w-[320px] shadow-2xl font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onUndo}
        className="text-white px-4 py-2 hover:bg-[#858383]/20 rounded-full transition-all flex items-center gap-2 group active:scale-95"
      >
        <span className="material-symbols-outlined text-lg">undo</span>
        <span className="font-sans text-xs font-semibold">Undo</span>
      </button>

      <button
        type="button"
        onClick={onRedo}
        className="text-white px-4 py-2 hover:bg-[#858383]/20 rounded-full transition-all flex items-center gap-2 group active:scale-95"
      >
        <span className="material-symbols-outlined text-lg">redo</span>
        <span className="font-sans text-xs font-semibold">Redo</span>
      </button>

      <button
        type="button"
        onClick={onPreview}
        className="text-white px-4 py-2 hover:bg-[#858383]/20 rounded-full transition-all flex items-center gap-2 group active:scale-95"
      >
        <span className="material-symbols-outlined text-lg">visibility</span>
        <span className="font-sans text-xs font-semibold">Preview</span>
      </button>

      <button
        type="button"
        onClick={onExecute}
        className="bg-[#755a24] text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all active:scale-95 font-bold shadow-md hover:bg-[#755a24]/90"
      >
        <span className="material-symbols-outlined text-lg">bolt</span>
        <span className="font-sans text-xs font-bold uppercase tracking-wider">Execute</span>
      </button>
    </nav>
  );
};
