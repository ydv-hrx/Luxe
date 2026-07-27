'use client';

import React from 'react';

export interface FooterDeployActionBarProps {
  onUndo?: () => void;
  onRedo?: () => void;
  onPreview?: () => void;
  onDeploy?: () => void;
}

export const FooterDeployActionBar: React.FC<FooterDeployActionBarProps> = ({
  onUndo,
  onRedo,
  onPreview,
  onDeploy,
}) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-full mb-2 mx-auto w-fit bg-black shadow-xl shadow-black/20 font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onUndo}
        className="text-white/70 px-6 py-2 hover:text-white hover:scale-105 transition-all duration-300"
      >
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[20px]">undo</span>
          <span className="font-sans text-[9px] uppercase tracking-wider mt-0.5 font-semibold">
            Undo
          </span>
        </div>
      </button>

      <button
        type="button"
        onClick={onRedo}
        className="text-white/70 px-6 py-2 hover:text-white hover:scale-105 transition-all duration-300"
      >
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[20px]">redo</span>
          <span className="font-sans text-[9px] uppercase tracking-wider mt-0.5 font-semibold">
            Redo
          </span>
        </div>
      </button>

      <button
        type="button"
        onClick={onPreview}
        className="text-white/70 px-6 py-2 hover:text-white hover:scale-105 transition-all duration-300"
      >
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[20px]">visibility</span>
          <span className="font-sans text-[9px] uppercase tracking-wider mt-0.5 font-semibold">
            Preview
          </span>
        </div>
      </button>

      <button
        type="button"
        onClick={onDeploy}
        className="bg-white text-black rounded-full px-8 py-2.5 flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md"
      >
        <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
        <span className="font-sans text-xs font-bold uppercase tracking-wider">Deploy</span>
      </button>
    </nav>
  );
};
