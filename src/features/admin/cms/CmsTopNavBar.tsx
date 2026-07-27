'use client';

import React from 'react';
import Link from 'next/link';

export const CmsTopNavBar: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full px-6 lg:px-10 h-16 bg-[#faf9f9] border-b border-[#c4c7c7]/40 sticky top-0 z-50 select-none">
      {/* LEFT: Brand & Page Context */}
      <div className="flex items-center gap-4">
        <Link href="/admin" className="font-serif text-lg font-bold text-black tracking-tight">
          Luxora Atelier
        </Link>
        <div className="h-6 w-px bg-[#c4c7c7]/40 mx-1" />
        <div className="flex flex-col">
          <span className="font-sans text-xs font-semibold text-black">Homepage Builder</span>
          <span className="text-[10px] text-[#444748] flex items-center gap-1 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#755a24]" />
            Last saved 2m ago
          </span>
        </div>
      </div>

      {/* MIDDLE: Workspace Navigation & Collaborator Avatars */}
      <nav className="hidden md:flex gap-6 items-center font-sans">
        <a href="#" className="text-[#444748]/60 text-xs font-semibold hover:text-black transition-colors">
          Workspace
        </a>
        <a href="#" className="text-[#444748]/60 text-xs font-semibold hover:text-black transition-colors">
          Library
        </a>
        <a href="#" className="text-[#444748]/60 text-xs font-semibold hover:text-black transition-colors">
          Analytics
        </a>
        <div className="h-4 w-px bg-[#c4c7c7]/40 mx-1" />
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-white bg-[#efeded] flex items-center justify-center text-[10px] font-bold text-black shadow-sm">
            JD
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white bg-[#ffdb99] flex items-center justify-center text-[10px] font-bold text-[#795f28] shadow-sm">
            AM
          </div>
        </div>
      </nav>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3 font-sans">
        <div className="flex gap-2 mr-2">
          <button
            type="button"
            className="p-2 hover:bg-[#efeded] rounded-full transition-colors flex items-center gap-1.5 text-[#444748]"
            title="Version History"
          >
            <span className="material-symbols-outlined text-[20px]">history</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">v2.4</span>
          </button>
          <button
            type="button"
            className="p-2 hover:bg-[#efeded] rounded-full transition-colors text-[#444748]"
            title="Toggle Visibility"
          >
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
        </div>

        <button
          type="button"
          className="px-5 py-2 border border-[#747878] text-xs font-semibold rounded-full hover:bg-[#efeded] transition-all text-black"
        >
          Save Draft
        </button>
        <button
          type="button"
          className="px-5 py-2 bg-black text-white text-xs font-semibold rounded-full hover:opacity-80 transition-all shadow-sm"
        >
          Publish
        </button>
      </div>
    </header>
  );
};
