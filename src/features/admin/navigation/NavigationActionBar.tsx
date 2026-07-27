'use client';

import React from 'react';

export interface NavigationActionBarProps {
  onUndo?: () => void;
  onRedo?: () => void;
  onPreview?: () => void;
  onDeploy?: () => void;
}

export const NavigationActionBar: React.FC<NavigationActionBarProps> = ({
  onUndo,
  onRedo,
  onPreview,
  onDeploy,
}) => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 z-50 bg-[#1c1b1b] shadow-2xl flex items-center gap-4 sm:gap-6 font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onUndo}
        className="flex flex-col items-center gap-0.5 text-[#474646] hover:text-white px-3 py-1 rounded-full transition-all group"
      >
        <span className="material-symbols-outlined text-[20px]">undo</span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#474646] group-hover:text-white">
          Undo
        </span>
      </button>

      <button
        type="button"
        onClick={onRedo}
        className="flex flex-col items-center gap-0.5 text-[#474646] hover:text-white px-3 py-1 rounded-full transition-all group"
      >
        <span className="material-symbols-outlined text-[20px]">redo</span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#474646] group-hover:text-white">
          Redo
        </span>
      </button>

      <div className="w-px h-8 bg-white/20 mx-1 hidden sm:block" />

      <button
        type="button"
        onClick={onPreview}
        className="flex flex-col items-center gap-0.5 text-[#ffdea4] hover:text-white px-3 py-1 rounded-full transition-all group"
      >
        <span className="material-symbols-outlined text-[20px]">visibility</span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffdea4] group-hover:text-white">
          Preview
        </span>
      </button>

      <button
        type="button"
        onClick={onDeploy}
        className="flex flex-col items-center gap-0.5 text-white px-5 py-1.5 rounded-full bg-[#755a24]/30 border border-[#755a24]/50 hover:bg-[#755a24]/50 transition-all scale-105 shadow-md"
      >
        <span className="material-symbols-outlined text-[20px] text-[#ffdea4]">
          rocket_launch
        </span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffdea4]">
          Deploy
        </span>
      </button>
    </nav>
  );
};
