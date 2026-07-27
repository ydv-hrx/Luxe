'use client';

import React from 'react';

export interface ProductPublishFooterProps {
  onSaveDraft?: () => void;
  onPreview?: () => void;
  onDiscard?: () => void;
  onApprove?: () => void;
}

export const ProductPublishFooter: React.FC<ProductPublishFooterProps> = ({
  onSaveDraft,
  onPreview,
  onDiscard,
  onApprove,
}) => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 w-auto min-w-[320px] sm:min-w-[400px] bg-[#e3e2e2] flex justify-around items-center gap-4 sm:gap-6 shadow-xl border border-[#c4c7c7]/30 z-50 font-sans select-none">
      <button
        type="button"
        onClick={onSaveDraft}
        className="flex items-center gap-2 text-[#444748] px-3 sm:px-4 py-2 hover:bg-[#e9e8e8] rounded-full transition-all group"
      >
        <span className="material-symbols-outlined group-active:scale-95 duration-150 text-[20px]">
          save
        </span>
        <span className="text-xs font-semibold hidden sm:inline">Save Draft</span>
      </button>

      <button
        type="button"
        onClick={onPreview}
        className="flex items-center gap-2 text-[#444748] px-3 sm:px-4 py-2 hover:bg-[#e9e8e8] rounded-full transition-all group"
      >
        <span className="material-symbols-outlined group-active:scale-95 duration-150 text-[20px]">
          visibility
        </span>
        <span className="text-xs font-semibold hidden sm:inline">Preview</span>
      </button>

      <button
        type="button"
        onClick={onDiscard}
        className="flex items-center gap-2 text-[#444748] px-3 sm:px-4 py-2 hover:bg-[#e9e8e8] rounded-full transition-all group"
      >
        <span className="material-symbols-outlined group-active:scale-95 duration-150 text-[20px]">
          delete_outline
        </span>
        <span className="text-xs font-semibold hidden sm:inline">Discard</span>
      </button>

      <button
        type="button"
        onClick={onApprove}
        className="flex items-center gap-2 bg-black text-white rounded-full px-5 sm:px-6 py-2 transition-all active:scale-95 shadow-md"
      >
        <span className="material-symbols-outlined text-[20px]">check_circle</span>
        <span className="text-xs font-bold uppercase tracking-wider">Approve</span>
      </button>
    </nav>
  );
};
