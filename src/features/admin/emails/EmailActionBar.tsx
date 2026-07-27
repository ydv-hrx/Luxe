'use client';

import React from 'react';

export interface EmailActionBarProps {
  onPreview?: () => void;
  onSendTest?: () => void;
  onSchedule?: () => void;
  onPublishCampaign?: () => void;
}

export const EmailActionBar: React.FC<EmailActionBarProps> = ({
  onPreview,
  onSendTest,
  onSchedule,
  onPublishCampaign,
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black text-white p-2 rounded-full shadow-2xl z-50 font-sans select-none border border-white/10">
      <button
        type="button"
        onClick={onPreview}
        className="px-6 py-3 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg">visibility</span>
        <span>Preview</span>
      </button>

      <button
        type="button"
        onClick={onSendTest}
        className="px-6 py-3 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg">send</span>
        <span>Send Test</span>
      </button>

      <div className="w-[1px] h-6 bg-white/20" />

      <button
        type="button"
        onClick={onSchedule}
        className="px-6 py-3 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
      >
        Schedule
      </button>

      <button
        type="button"
        onClick={onPublishCampaign}
        className="px-8 py-3 rounded-full bg-[#ffdea4] text-[#261900] font-bold text-xs hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-md"
      >
        Publish Campaign
      </button>
    </div>
  );
};
