'use client';

import React from 'react';

export interface LandingPageActionBarProps {
  onUndo?: () => void;
  onRedo?: () => void;
  onPreview?: () => void;
  onDeploy?: () => void;
}

export const LandingPageActionBar: React.FC<LandingPageActionBarProps> = ({
  onUndo,
  onRedo,
  onPreview,
  onDeploy,
}) => {
  return (
    <nav className="fixed bottom-8 left-1/2 lg:left-[calc(32rem+160px)] -translate-x-1/2 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 z-50 bg-[#1c1b1b] flex items-center gap-4 sm:gap-6 shadow-2xl font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onUndo}
        className="flex flex-col items-center gap-0.5 group text-[#474646] hover:text-[#ffdea4] transition-all"
      >
        <span className="material-symbols-outlined text-[20px]">undo</span>
        <span className="font-sans text-[9px] uppercase tracking-widest text-[#474646] group-hover:text-[#ffdea4]">
          Undo
        </span>
      </button>

      <button
        type="button"
        onClick={onRedo}
        className="flex flex-col items-center gap-0.5 group text-[#474646] hover:text-[#ffdea4] transition-all"
      >
        <span className="material-symbols-outlined text-[20px]">redo</span>
        <span className="font-sans text-[9px] uppercase tracking-widest text-[#474646] group-hover:text-[#ffdea4]">
          Redo
        </span>
      </button>

      <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />

      <button
        type="button"
        onClick={onPreview}
        className="flex flex-col items-center gap-0.5 group text-[#474646] hover:text-[#ffdea4] transition-all"
      >
        <span className="material-symbols-outlined text-[20px]">visibility</span>
        <span className="font-sans text-[9px] uppercase tracking-widest text-[#474646] group-hover:text-[#ffdea4]">
          Preview
        </span>
      </button>

      <button
        type="button"
        onClick={onDeploy}
        className="flex flex-col items-center gap-0.5 group text-[#ffdea4] hover:text-white transition-all bg-[#755a24]/30 px-4 py-1 rounded-full border border-[#755a24]/50"
      >
        <span className="material-symbols-outlined text-[20px] text-[#ffdea4]">
          rocket_launch
        </span>
        <span className="font-sans text-[9px] uppercase tracking-widest font-bold text-[#ffdea4]">
          Deploy
        </span>
      </button>
    </nav>
  );
};
