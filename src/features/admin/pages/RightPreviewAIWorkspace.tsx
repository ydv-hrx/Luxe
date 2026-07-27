'use client';

import React from 'react';
import Image from 'next/image';
import { AISuggestionItem } from './landingPageMockData';

export interface RightPreviewAIWorkspaceProps {
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  suggestions: AISuggestionItem[];
  aiPrompt: string;
  onChangeDeviceMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onChangeAiPrompt: (val: string) => void;
  onSendPrompt: () => void;
}

export const RightPreviewAIWorkspace: React.FC<RightPreviewAIWorkspaceProps> = ({
  previewDevice,
  suggestions,
  aiPrompt,
  onChangeDeviceMode,
  onChangeAiPrompt,
  onSendPrompt,
}) => {
  return (
    <section className="w-[450px] shrink-0 bg-[#efeded] border-l border-[#c4c7c7] flex flex-col overflow-hidden font-sans select-none h-full">
      {/* TOP SECTION: Live Storefront Preview (70%) */}
      <div className="h-[70%] flex flex-col border-b border-[#c4c7c7] bg-[#f4f3f3] overflow-hidden">
        {/* Preview Toolbar */}
        <div className="h-14 px-6 flex justify-between items-center bg-white border-b border-[#c4c7c7] shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onChangeDeviceMode('desktop')}
                className={`p-1.5 rounded-lg transition-colors ${
                  previewDevice === 'desktop' ? 'bg-[#efeded] text-black font-bold' : 'text-[#444748]'
                }`}
                title="Desktop View"
              >
                <span className="material-symbols-outlined text-lg">desktop_windows</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeDeviceMode('tablet')}
                className={`p-1.5 rounded-lg transition-colors ${
                  previewDevice === 'tablet' ? 'bg-[#efeded] text-black font-bold' : 'text-[#444748]'
                }`}
                title="Tablet View"
              >
                <span className="material-symbols-outlined text-lg">tablet_mac</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeDeviceMode('mobile')}
                className={`p-1.5 rounded-lg transition-colors ${
                  previewDevice === 'mobile' ? 'bg-[#efeded] text-black font-bold' : 'text-[#444748]'
                }`}
                title="Mobile View"
              >
                <span className="material-symbols-outlined text-lg">smartphone</span>
              </button>
            </div>
            <div className="w-px h-4 bg-[#c4c7c7]/30" />
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-[#444748]">100%</span>
              <span className="material-symbols-outlined text-[#444748] text-sm">
                expand_more
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="material-symbols-outlined text-[#444748] hover:text-black text-lg transition-colors"
              title="Refresh"
            >
              refresh
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-[#755a24] hover:text-black transition-colors"
            >
              Open Preview{' '}
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </button>
          </div>
        </div>

        {/* Browser Frame Container */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#efeded]">
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
            className="bg-white shadow-xl rounded-lg min-h-[800px] flex flex-col overflow-hidden transition-all duration-300 border border-[#c4c7c7]/30"
          >
            {/* Simulated Hero Banner */}
            <div className="h-64 relative flex items-center justify-center text-center p-8 overflow-hidden bg-black">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyvYMojvnuJqRdTX90CjErG0yw7-lLTJvJ4eOUAZPkMUwLFD_KtqqWa0FltWBy9scwEykp3hmBjGLlaXfXqRClW3xZGuXtIt2WyhQ0R8D4-7RxxG5KEncmOpoEMfH3SH-uzU96T-Cr_GBXqiIjLuDUhXBOvLanOYSGWUwRfJAWjTIPZhTHoc7TEypYnFr8Yk0x5Qxn1-vOonpLyFRrZ-ilhfEYHP-bnGDBeh-QPRa5aWWEv9cqdGoVHTMovVa8ZrnRmO7ug9qCx2xI"
                alt="Autumn / Winter Hero Banner"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 text-white space-y-1">
                <h1 className="font-serif text-2xl font-bold">Autumn / Winter</h1>
                <p className="font-sans uppercase tracking-widest text-[10px] opacity-80 font-bold">
                  The 2024 Collection
                </p>
              </div>
            </div>

            {/* Simulated Product Grid */}
            <div className="p-6 bg-white">
              <div className="flex justify-between items-end mb-4">
                <h2 className="font-serif text-base font-semibold text-black">The Essentials</h2>
                <span className="text-[10px] uppercase tracking-widest border-b border-black pb-0.5 font-bold text-black">
                  Shop All
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-[#f4f3f3] rounded" />
                <div className="aspect-[3/4] bg-[#f4f3f3] rounded translate-y-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: AI Atelier Assistant Workspace (30%) */}
      <div className="h-[30%] flex flex-col bg-white p-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-3 shrink-0">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#755a24] to-black flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xs">
              temp_preferences_custom
            </span>
          </div>
          <h6 className="font-serif text-sm font-semibold text-black">AI Atelier</h6>
        </div>

        {/* Conversation & Suggestions Scroll Area */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-3 pr-1 font-sans">
          <div className="bg-[#f4f3f3] p-3 rounded-xl border border-[#c4c7c7]/20">
            <p className="text-xs text-[#444748] leading-relaxed">
              "The 'Autumn / Winter' headline is bold, but a more evocative alternative could be 'Echoes of Solitude'. Shall I rewrite the editorial copy?"
            </p>
          </div>

          {/* Suggestion Cards Grid */}
          <div className="grid grid-cols-2 gap-2">
            {suggestions.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="text-left p-2 rounded-lg bg-white border border-[#c4c7c7]/30 hover:bg-[#ffdb99]/10 transition-all font-sans"
              >
                <p className="text-[8px] uppercase tracking-widest text-[#755a24] font-bold mb-0.5">
                  {item.tag}
                </p>
                <p className="text-[10px] font-semibold text-black truncate">{item.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input Footer */}
        <div className="flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={aiPrompt}
            onChange={(e) => onChangeAiPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSendPrompt()}
            placeholder="Ask Atelier..."
            className="flex-1 bg-[#f4f3f3] border-none rounded-full px-4 py-2 text-xs font-sans text-black focus:ring-1 focus:ring-[#755a24]/50 outline-none"
          />
          <button
            type="button"
            onClick={onSendPrompt}
            className="material-symbols-outlined text-[#755a24] bg-[#f4f3f3] p-2 rounded-full hover:bg-[#ffdb99]/20 transition-colors"
          >
            send
          </button>
        </div>
      </div>
    </section>
  );
};
