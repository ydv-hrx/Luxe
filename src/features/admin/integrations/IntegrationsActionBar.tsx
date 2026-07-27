'use client';

import React from 'react';

export interface IntegrationsActionBarProps {
  onTestConnection?: () => void;
  onPreviewPayload?: () => void;
  onSaveDraft?: () => void;
  onPublishChanges?: () => void;
}

export const IntegrationsActionBar: React.FC<IntegrationsActionBarProps> = ({
  onTestConnection,
  onPreviewPayload,
  onSaveDraft,
  onPublishChanges,
}) => {
  return (
    <div className="fixed bottom-0 left-72 right-0 z-50 flex justify-center pb-8 pointer-events-none font-sans select-none">
      <div className="bg-black text-white rounded-full px-8 py-4 max-w-2xl mx-auto flex items-center gap-8 shadow-2xl pointer-events-auto border border-white/10">
        <button
          type="button"
          onClick={onTestConnection}
          className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">
            bolt
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Test Connection</span>
        </button>

        <div className="w-px h-8 bg-white/20" />

        <button
          type="button"
          onClick={onPreviewPayload}
          className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">
            visibility
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Preview Payload</span>
        </button>

        <button
          type="button"
          onClick={onSaveDraft}
          className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">
            history_edu
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Save Draft</span>
        </button>

        <button
          type="button"
          onClick={onPublishChanges}
          className="bg-[#755a24] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all ml-4 cursor-pointer shadow-md"
        >
          Publish Changes
        </button>
      </div>
    </div>
  );
};
