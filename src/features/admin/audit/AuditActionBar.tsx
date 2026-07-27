'use client';

import React from 'react';

export interface AuditActionBarProps {
  onPreview?: () => void;
  onGenerateReport?: () => void;
  onShareAudit?: () => void;
}

export const AuditActionBar: React.FC<AuditActionBarProps> = ({
  onPreview,
  onGenerateReport,
  onShareAudit,
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full bg-black px-8 py-4 shadow-2xl font-sans select-none text-white border border-white/10">
      <button
        type="button"
        onClick={onPreview}
        className="flex items-center gap-2 text-white/80 hover:text-[#ffdea4] text-xs font-semibold transition-all cursor-pointer active:scale-95 group"
      >
        <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
          visibility
        </span>
        <span>Preview</span>
      </button>

      <div className="w-px h-6 bg-white/20" />

      <button
        type="button"
        onClick={onGenerateReport}
        className="flex items-center gap-2 text-[#ffdea4] font-bold text-xs transition-all cursor-pointer active:scale-95"
      >
        <span className="material-symbols-outlined text-xl">add_circle</span>
        <span>Generate Report</span>
      </button>

      <div className="w-px h-6 bg-white/20" />

      <button
        type="button"
        onClick={onShareAudit}
        className="flex items-center gap-2 text-white/80 hover:text-[#ffdea4] text-xs font-semibold transition-all cursor-pointer active:scale-95 group"
      >
        <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
          share
        </span>
        <span>Share Audit</span>
      </button>
    </div>
  );
};
