'use client';

import React from 'react';

export interface MediaToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onUploadClick?: () => void;
}

export const MediaToolbar: React.FC<MediaToolbarProps> = ({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onUploadClick,
}) => {
  return (
    <header className="h-20 shrink-0 flex items-center justify-between px-6 lg:px-10 bg-white/85 backdrop-blur-md border-b border-[#e5e5e5]/50 sticky top-0 z-20 font-sans select-none">
      {/* Search Input */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#747878] text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search all media library..."
            className="w-full pl-14 pr-4 py-3 bg-[#f4f3f3] border border-[#c4c7c7]/30 rounded-full text-sm focus:ring-1 focus:ring-black/20 placeholder:text-[#c4c7c7] text-black outline-none transition-all"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Sort Dropdown */}
        <div className="hidden sm:flex items-center gap-2 border border-[#c4c7c7]/30 rounded-full px-4 py-2 bg-white cursor-pointer hover:bg-[#faf9f9] transition-colors">
          <span className="text-xs font-semibold text-black">Sort: Date Uploaded</span>
          <span className="material-symbols-outlined text-[18px] text-[#444748]">
            expand_more
          </span>
        </div>

        <div className="h-8 w-px bg-[#c4c7c7]/30 mx-1 hidden sm:block" />

        {/* View Mode Toggle */}
        <div className="flex bg-[#f4f3f3] rounded-lg p-1">
          <button
            type="button"
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-md transition-all ${
              viewMode === 'grid' ? 'bg-white shadow-sm text-black' : 'text-[#747878] hover:text-black'
            }`}
            title="Grid View"
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-md transition-all ${
              viewMode === 'list' ? 'bg-white shadow-sm text-black' : 'text-[#747878] hover:text-black'
            }`}
            title="List View"
          >
            <span className="material-symbols-outlined text-[20px]">view_list</span>
          </button>
        </div>

        {/* Primary Upload CTA Button */}
        <button
          type="button"
          onClick={onUploadClick}
          className="px-6 sm:px-8 py-3 bg-black text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-black/90 transition-all shadow-lg flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Upload
        </button>
      </div>
    </header>
  );
};
