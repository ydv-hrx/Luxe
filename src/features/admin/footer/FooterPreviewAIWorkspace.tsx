'use client';

import React from 'react';

export interface FooterPreviewAIWorkspaceProps {
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  aiPrompt: string;
  onChangeDeviceMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onChangeAiPrompt: (val: string) => void;
  onSendPrompt: () => void;
}

export const FooterPreviewAIWorkspace: React.FC<FooterPreviewAIWorkspaceProps> = ({
  previewDevice,
  aiPrompt,
  onChangeDeviceMode,
  onChangeAiPrompt,
  onSendPrompt,
}) => {
  return (
    <section className="w-[480px] shrink-0 flex flex-col bg-[#efeded] font-sans select-none h-full overflow-hidden">
      {/* TOP: Live Footer Preview (70%) */}
      <div className="h-[70%] border-b border-[#c4c7c7] flex flex-col relative overflow-hidden">
        {/* Preview Toolbar */}
        <header className="p-4 flex justify-between items-center bg-white border-b border-[#c4c7c7] shrink-0">
          <div className="flex bg-[#faf9f9] rounded-lg p-1 gap-1">
            <button
              type="button"
              onClick={() => onChangeDeviceMode('desktop')}
              className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
                previewDevice === 'desktop' ? 'bg-white shadow-sm text-black' : 'text-[#747878] hover:bg-white'
              }`}
              title="Desktop Preview"
            >
              <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeDeviceMode('tablet')}
              className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
                previewDevice === 'tablet' ? 'bg-white shadow-sm text-black' : 'text-[#747878] hover:bg-white'
              }`}
              title="Tablet Preview"
            >
              <span className="material-symbols-outlined text-[18px]">tablet_android</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeDeviceMode('mobile')}
              className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
                previewDevice === 'mobile' ? 'bg-white shadow-sm text-black' : 'text-[#747878] hover:bg-white'
              }`}
              title="Mobile Preview"
            >
              <span className="material-symbols-outlined text-[18px]">smartphone</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-black">100%</span>
            <button
              type="button"
              className="p-1 hover:bg-[#faf9f9] rounded-md text-[#747878] transition-colors"
              title="Refresh"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
            </button>
          </div>
        </header>

        {/* Browser Frame Simulation Container */}
        <div className="flex-1 bg-[#e5e5e5] overflow-hidden flex items-end p-6">
          <div
            style={{
              width:
                previewDevice === 'mobile'
                  ? '320px'
                  : previewDevice === 'tablet'
                  ? '360px'
                  : '100%',
              margin: previewDevice !== 'desktop' ? '0 auto' : '0',
            }}
            className="w-full bg-white rounded-t-xl shadow-2xl h-full flex flex-col overflow-hidden border border-[#c4c7c7] transition-all duration-300"
          >
            {/* Chrome Header */}
            <div className="h-10 bg-neutral-100 border-b border-[#c4c7c7] flex items-center px-4 gap-2 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-neutral-300" />
                <div className="w-2 h-2 rounded-full bg-neutral-300" />
                <div className="w-2 h-2 rounded-full bg-neutral-300" />
              </div>
              <div className="mx-auto w-1/2 h-5 bg-white border border-[#c4c7c7] rounded-md text-[9px] flex items-center px-2 text-[#747878] font-mono">
                luxora.com
              </div>
            </div>

            {/* Realistic Footer Preview Content */}
            <div className="flex-1 bg-white overflow-y-auto p-8 flex flex-col justify-end">
              <div className="w-full border-t border-neutral-100 pt-10 space-y-8">
                <div className="grid grid-cols-12 gap-6 pb-8">
                  <div className="col-span-5 space-y-3">
                    <h2 className="font-serif text-2xl font-bold tracking-tighter text-black">
                      LUXORA
                    </h2>
                    <p className="text-neutral-500 text-xs leading-relaxed max-w-xs font-sans">
                      A digital destination for uncompromising taste and architectural fashion. Defining luxury for the 21st century atelier.
                    </p>
                  </div>

                  <div className="col-span-2 space-y-2 font-sans">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black">
                      COLLECTIONS
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-400">
                      <li>Winter 24</li>
                      <li>The Runway</li>
                      <li>Archives</li>
                    </ul>
                  </div>

                  <div className="col-span-2 space-y-2 font-sans">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black">
                      ASSISTANCE
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-400">
                      <li>Bespoke Service</li>
                      <li>Tracking</li>
                      <li>Returns</li>
                    </ul>
                  </div>

                  <div className="col-span-3 space-y-2 font-sans">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black">
                      THE INNER CIRCLE
                    </h4>
                    <div className="border-b border-neutral-300 pb-2 flex justify-between items-center text-xs">
                      <span className="text-neutral-300 italic">Enter email</span>
                      <span className="material-symbols-outlined text-neutral-300 text-xs">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-neutral-100 font-sans">
                  <span className="text-[10px] text-neutral-400 tracking-widest">
                    © 2023 LUXORA ATELIER
                  </span>
                  <div className="flex gap-4 text-neutral-400">
                    <span className="material-symbols-outlined text-sm">share</span>
                    <span className="material-symbols-outlined text-sm">public</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: AI Atelier Assistant (30%) */}
      <div className="h-[30%] flex flex-col bg-white overflow-hidden p-6 gap-3 shrink-0">
        <div className="flex items-center gap-2 mb-1 shrink-0">
          <div className="w-6 h-6 rounded-full bg-[#755a24] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[14px]">
              auto_awesome
            </span>
          </div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-black">
            AI Atelier
          </h3>
        </div>

        {/* Conversation Area */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 font-sans text-xs">
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-neutral-100 shrink-0 flex items-center justify-center text-[#747878]">
              <span className="material-symbols-outlined text-[16px]">person</span>
            </div>
            <div className="bg-[#faf9f9] p-3 rounded-2xl rounded-tl-none border border-[#c4c7c7]/30 text-black">
              Can you help me rewrite the newsletter copy to sound more exclusive?
            </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
            <div className="w-7 h-7 rounded-full bg-[#755a24] shrink-0 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            </div>
            <div className="bg-[#ffdb99]/10 p-3 rounded-2xl rounded-tr-none border border-[#755a24]/20 text-black">
              Certainly. Here is a more refined version: "An invitation to the exceptional. Join our private ledger for early access to curated collections and atelier insights."
            </div>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 shrink-0">
          <button
            type="button"
            className="whitespace-nowrap px-3 py-1.5 bg-[#f4f3f3] border border-[#c4c7c7]/40 rounded-full text-[10px] font-semibold hover:border-[#755a24] hover:text-[#755a24] transition-colors text-black"
          >
            Rewrite Brand Description
          </button>
          <button
            type="button"
            className="whitespace-nowrap px-3 py-1.5 bg-[#f4f3f3] border border-[#c4c7c7]/40 rounded-full text-[10px] font-semibold hover:border-[#755a24] hover:text-[#755a24] transition-colors text-black"
          >
            Optimize Hierarchy
          </button>
          <button
            type="button"
            className="whitespace-nowrap px-3 py-1.5 bg-[#f4f3f3] border border-[#c4c7c7]/40 rounded-full text-[10px] font-semibold hover:border-[#755a24] hover:text-[#755a24] transition-colors text-black"
          >
            Translate Content
          </button>
        </div>

        {/* Prompt Input */}
        <div className="relative shrink-0">
          <input
            type="text"
            value={aiPrompt}
            onChange={(e) => onChangeAiPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSendPrompt()}
            placeholder="Ask AI Atelier..."
            className="w-full bg-[#f4f3f3] border-none rounded-xl py-2.5 pl-4 pr-12 text-xs font-sans text-black focus:ring-1 focus:ring-[#755a24] outline-none"
          />
          <button
            type="button"
            onClick={onSendPrompt}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black text-white rounded-lg flex items-center justify-center hover:scale-[0.98] transition-transform"
          >
            <span className="material-symbols-outlined text-[16px]">send</span>
          </button>
        </div>
      </div>
    </section>
  );
};
