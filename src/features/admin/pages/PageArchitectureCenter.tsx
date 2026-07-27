'use client';

import React from 'react';
import { PageSectionItem } from './landingPageMockData';

export interface PageArchitectureCenterProps {
  sections: PageSectionItem[];
  onToggleExpandSection: (id: string) => void;
  onToggleHideSection: (id: string) => void;
  onRemoveSection: (id: string) => void;
}

export const PageArchitectureCenter: React.FC<PageArchitectureCenterProps> = ({
  sections,
  onToggleExpandSection,
  onToggleHideSection,
  onRemoveSection,
}) => {
  return (
    <section className="flex-1 bg-[#faf9f9] overflow-y-auto px-6 sm:px-12 py-10 relative scroll-smooth font-sans select-none min-w-0">
      <div className="max-w-2xl mx-auto space-y-6 pb-32">
        {/* Layout Editor Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="font-sans text-xs font-semibold text-[#755a24] uppercase tracking-widest mb-1">
              Layout Editor
            </p>
            <h2 className="font-serif text-3xl font-semibold text-black">Page Architecture</h2>
          </div>
          <button
            type="button"
            className="material-symbols-outlined text-[#444748] hover:text-black transition-colors"
            title="Reorder Sections"
          >
            drag_indicator
          </button>
        </div>

        {/* Draggable Section Cards */}
        {sections.map((sec) => {
          if (sec.isActive) {
            return (
              <div
                key={sec.id}
                className="bg-white border-2 border-[#755a24]/20 bg-[#ffdb99]/5 rounded-2xl p-6 flex items-center justify-between shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffdb99]/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#755a24] text-[22px]">
                      {sec.icon}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-sans text-sm font-semibold text-black">{sec.title}</h5>
                    <p className="text-xs text-[#444748] mt-0.5">{sec.subtitle}</p>
                  </div>
                </div>

                <div className="flex gap-2 text-[#444748]">
                  <button
                    type="button"
                    className="p-2 hover:bg-[#efeded] rounded-lg material-symbols-outlined text-sm"
                    title="Duplicate"
                  >
                    content_copy
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleHideSection(sec.id)}
                    className="p-2 hover:bg-[#efeded] rounded-lg material-symbols-outlined text-sm"
                    title="Toggle Visibility"
                  >
                    {sec.isVisible ? 'visibility' : 'visibility_off'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveSection(sec.id)}
                    className="p-2 hover:bg-[#ffdad6] text-[#ba1a1a] rounded-lg material-symbols-outlined text-sm"
                    title="Delete"
                  >
                    delete
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleExpandSection(sec.id)}
                    className="p-2 hover:bg-[#efeded] rounded-lg material-symbols-outlined text-sm"
                    title="Collapse"
                  >
                    unfold_less
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={sec.id}
              className="bg-white border border-[#c4c7c7]/30 rounded-2xl p-6 flex items-center justify-between shadow-sm group hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f4f3f3] rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-black text-[22px]">
                    {sec.icon}
                  </span>
                </div>
                <div>
                  <h5 className="font-sans text-sm font-semibold text-black">{sec.title}</h5>
                  <p className="text-xs text-[#444748] mt-0.5">{sec.subtitle}</p>
                </div>
              </div>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#444748]">
                <button
                  type="button"
                  className="p-2 hover:bg-[#efeded] rounded-lg material-symbols-outlined text-sm"
                  title="Duplicate"
                >
                  content_copy
                </button>
                <button
                  type="button"
                  onClick={() => onToggleHideSection(sec.id)}
                  className="p-2 hover:bg-[#efeded] rounded-lg material-symbols-outlined text-sm"
                  title="Toggle Visibility"
                >
                  {sec.isVisible ? 'visibility' : 'visibility_off'}
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveSection(sec.id)}
                  className="p-2 hover:bg-[#ffdad6] text-[#ba1a1a] rounded-lg material-symbols-outlined text-sm"
                  title="Delete"
                >
                  delete
                </button>
                <button
                  type="button"
                  onClick={() => onToggleExpandSection(sec.id)}
                  className="p-2 hover:bg-[#efeded] rounded-lg material-symbols-outlined text-sm"
                  title="Expand"
                >
                  expand_more
                </button>
              </div>
            </div>
          );
        })}

        {/* Add Section Dashed Button */}
        <button
          type="button"
          className="w-full py-8 border-2 border-dashed border-[#c4c7c7] rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-[#efeded] transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[#444748] group-hover:text-black text-2xl">
            add_circle
          </span>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#444748] group-hover:text-black">
            Add Section
          </span>
        </button>
      </div>

      {/* Floating Page Insights Card */}
      <div className="hidden xl:block fixed bottom-10 left-[21rem] w-64 bg-white/85 backdrop-blur-md border border-[#c4c7c7]/30 rounded-2xl p-5 shadow-2xl z-30 font-sans">
        <h6 className="text-[10px] font-bold uppercase tracking-widest text-[#755a24] mb-4">
          Page Insights
        </h6>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-serif leading-none font-bold text-black">12.4k</p>
            <p className="text-[10px] uppercase opacity-50 text-black mt-1">Views</p>
          </div>
          <div>
            <p className="text-2xl font-serif leading-none text-green-600 font-bold">8.2%</p>
            <p className="text-[10px] uppercase opacity-50 text-black mt-1">CTR</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#c4c7c7]/20">
          <p className="text-xs italic opacity-70 text-black">
            "Conversion is up 14% this week."
          </p>
        </div>
      </div>
    </section>
  );
};
