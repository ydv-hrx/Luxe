'use client';

import React from 'react';

export interface AnalyticsActionBarProps {
  onExportPDF?: () => void;
  onGenerateReport?: () => void;
  onShareDashboard?: () => void;
}

export const AnalyticsActionBar: React.FC<AnalyticsActionBarProps> = ({
  onExportPDF,
  onGenerateReport,
  onShareDashboard,
}) => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1 bg-white/80 backdrop-blur-xl border border-[#c4c7c7]/30 rounded-full shadow-2xl font-sans select-none">
      <button
        type="button"
        onClick={onExportPDF}
        className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-[#f4f3f3] transition-all text-xs font-semibold text-black cursor-pointer active:scale-95"
      >
        <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
        <span>Export PDF</span>
      </button>

      <div className="w-px h-6 bg-[#c4c7c7]/30" />

      <button
        type="button"
        onClick={onGenerateReport}
        className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-[#f4f3f3] transition-all text-xs font-semibold text-black cursor-pointer active:scale-95"
      >
        <span className="material-symbols-outlined text-sm">description</span>
        <span>Generate Report</span>
      </button>

      <div className="w-px h-6 bg-[#c4c7c7]/30" />

      <button
        type="button"
        onClick={onShareDashboard}
        className="flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white hover:opacity-90 transition-all text-xs font-bold active:scale-95 cursor-pointer shadow-md"
      >
        <span className="material-symbols-outlined text-sm">share</span>
        <span>Share Dashboard</span>
      </button>
    </div>
  );
};
