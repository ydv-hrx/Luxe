'use client';

import React from 'react';
import { SectionStructureItem } from './cmsMockData';

export interface StructureSidebarProps {
  sections: SectionStructureItem[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  onToggleSection?: (id: string) => void;
}

export const StructureSidebar: React.FC<StructureSidebarProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
  onToggleSection: _onToggleSection,
}) => {
  return (
    <aside className="w-[20%] min-w-[280px] border-r border-[#c4c7c7]/40 bg-[#f4f3f3] flex flex-col h-full select-none shrink-0">
      {/* Sidebar Header */}
      <div className="p-4 sm:p-6 border-b border-[#c4c7c7]/40 flex justify-between items-center bg-[#faf9f9]">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#444748]">
          Structure
        </h3>
        <button
          type="button"
          className="p-1 hover:bg-[#efeded] rounded transition-colors text-black"
          title="Add Section"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>
      </div>

      {/* Scrollable Section List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans">
        {sections.map((sec) => {
          const isActive = sec.id === activeSectionId;
          return (
            <div
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`group p-4 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-black ring-1 ring-black'
                  : 'bg-[#faf9f9] hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-transparent'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      isActive ? 'text-black' : 'text-[#444748]'
                    }`}
                  >
                    {sec.icon}
                  </span>
                  <div className="flex flex-col">
                    <span
                      className={`text-xs font-semibold ${
                        isActive ? 'text-black font-bold' : 'text-[#444748]'
                      }`}
                    >
                      {sec.title}
                    </span>
                    <span className="text-[9px] text-[#444748]/60 uppercase tracking-tighter">
                      {sec.updatedText}
                    </span>
                  </div>
                </div>

                <span
                  className={`material-symbols-outlined text-[18px] ${
                    isActive ? 'text-black' : 'text-[#444748]'
                  }`}
                >
                  visibility
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`material-symbols-outlined text-[18px] cursor-grab ${
                    isActive ? 'text-[#444748]' : 'text-[#444748]/40 group-hover:opacity-100 opacity-0 transition-opacity'
                  }`}
                >
                  drag_indicator
                </span>

                {sec.status === 'DRAFT' ? (
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdb99] text-[#795f28] text-[10px] font-bold">
                    DRAFT
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-[#e9e8e8] text-[#444748] text-[10px] font-bold">
                    PUBLISHED
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
