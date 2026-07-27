'use client';

import React from 'react';

export interface BulkSelectionBarProps {
  selectedCount: number;
  filename?: string;
  onClose?: () => void;
}

export const BulkSelectionBar: React.FC<BulkSelectionBarProps> = ({
  selectedCount,
  filename,
  onClose,
}) => {
  if (selectedCount <= 0) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl px-6 sm:px-10 py-4 sm:py-5 rounded-[2rem] flex items-center gap-6 sm:gap-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-black/10 z-50 animate-in slide-in-from-bottom-5 duration-300 font-sans select-none">
      {/* Asset Count & Filename */}
      <div className="flex items-center gap-4">
        <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-black/10 shrink-0">
          {selectedCount}
        </div>
        <div className="flex flex-col text-left hidden sm:flex">
          <span className="font-semibold text-xs text-black leading-tight">
            {selectedCount === 1 ? 'Asset Selected' : 'Assets Selected'}
          </span>
          {filename && (
            <span className="text-[10px] text-[#747878] uppercase tracking-wider font-mono truncate max-w-[160px]">
              {filename}
            </span>
          )}
        </div>
      </div>

      <div className="h-8 w-px bg-[#c4c7c7]/40 hidden sm:block" />

      {/* Action Buttons */}
      <div className="flex items-center gap-4 sm:gap-8">
        <button
          type="button"
          className="flex items-center gap-2 text-black font-semibold text-xs hover:scale-105 transition-transform group"
        >
          <span className="material-symbols-outlined text-[20px] text-[#747878] group-hover:text-black transition-colors">
            drive_file_move
          </span>
          <span className="hidden md:inline">Move</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 text-black font-semibold text-xs hover:scale-105 transition-transform group"
        >
          <span className="material-symbols-outlined text-[20px] text-[#747878] group-hover:text-black transition-colors">
            download
          </span>
          <span className="hidden md:inline">Download</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 text-black font-semibold text-xs hover:scale-105 transition-transform group"
        >
          <span className="material-symbols-outlined text-[20px] text-[#747878] group-hover:text-black transition-colors">
            label
          </span>
          <span className="hidden md:inline">Tags</span>
        </button>

        <button
          type="button"
          className="flex items-center gap-2 text-[#ba1a1a] font-semibold text-xs hover:scale-105 transition-transform group"
        >
          <span className="material-symbols-outlined text-[20px] opacity-70 group-hover:opacity-100 transition-opacity">
            delete
          </span>
          <span className="hidden md:inline">Delete</span>
        </button>
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="ml-2 sm:ml-4 p-1.5 hover:bg-[#e3e2e2] rounded-full transition-colors text-[#747878]"
        title="Deselect All"
      >
        <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
  );
};
