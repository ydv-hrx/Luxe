'use client';

import React, { useState } from 'react';
import { MEDIA_MOCK_FOLDERS } from './mediaMockData';

export interface FoldersPanelProps {
  activeFolderId: string;
  onSelectFolder: (id: string) => void;
  activeFilter: 'all' | 'image' | 'video' | 'favorites';
  onSelectFilter: (filter: 'all' | 'image' | 'video' | 'favorites') => void;
}

export const FoldersPanel: React.FC<FoldersPanelProps> = ({
  activeFolderId,
  onSelectFolder,
  activeFilter,
  onSelectFilter,
}) => {
  const [folderQuery, setFolderQuery] = useState('');

  return (
    <section className="w-64 shrink-0 flex flex-col bg-[#f4f3f3] border-r border-[#c4c7c7]/30 py-8 overflow-y-auto font-sans select-none">
      {/* Header */}
      <div className="px-8 mb-6">
        <h2 className="font-serif text-2xl font-semibold text-black mb-6">Media Library</h2>

        {/* Folder Search */}
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#747878] text-[18px]">
            search
          </span>
          <input
            type="text"
            value={folderQuery}
            onChange={(e) => setFolderQuery(e.target.value)}
            placeholder="Find folders..."
            className="w-full pl-9 pr-3 py-2 bg-[#e9e8e8]/50 border-none rounded-lg text-xs focus:ring-1 focus:ring-[#755a24]/30 placeholder:text-[#747878]/60 text-black outline-none"
          />
        </div>
      </div>

      {/* Folders Section */}
      <div className="px-4 space-y-1 mb-8">
        <div className="px-4 flex items-center justify-between mb-3">
          <h3 className="font-sans text-[10px] font-bold text-[#747878] uppercase tracking-[0.2em]">
            Folders
          </h3>
          <button
            type="button"
            className="text-[#747878] hover:text-black transition-colors"
            title="Create New Folder"
          >
            <span className="material-symbols-outlined text-[18px]">create_new_folder</span>
          </button>
        </div>

        <div className="space-y-0.5">
          {MEDIA_MOCK_FOLDERS.map((f) => {
            const isActive = activeFolderId === f.id;
            return (
              <div key={f.id} className="space-y-0.5">
                <button
                  type="button"
                  onClick={() => onSelectFolder(f.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-[#e3e2e2] text-black font-semibold'
                      : 'text-[#444748] hover:bg-[#e3e2e2]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-black">
                      {f.icon || 'folder'}
                    </span>
                    <span className="text-sm">{f.name}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#747878]/70">
                    ({f.count})
                  </span>
                </button>

                {/* Nested Children */}
                {f.children && (
                  <div className="ml-4 pl-4 border-l border-[#c4c7c7]/30 space-y-0.5 mt-1">
                    {f.children.map((child) => (
                      <button
                        key={child.id}
                        type="button"
                        onClick={() => onSelectFolder(child.id)}
                        className={`w-full flex items-center justify-between px-4 py-1.5 rounded-lg text-xs transition-colors ${
                          activeFolderId === child.id
                            ? 'bg-[#e3e2e2] text-black font-bold'
                            : 'text-[#444748]/70 hover:bg-[#e3e2e2]/50'
                        }`}
                      >
                        <span>{child.name}</span>
                        <span className="text-[10px] font-medium text-[#747878]/50">
                          ({child.count})
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters Section */}
      <div className="px-4 space-y-1">
        <h3 className="px-4 font-sans text-[10px] font-bold text-[#747878] uppercase tracking-[0.2em] mb-3">
          Filter by Type
        </h3>
        <div className="space-y-0.5">
          <button
            type="button"
            onClick={() => onSelectFilter('image')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === 'image'
                ? 'bg-[#e3e2e2] text-black font-bold'
                : 'text-[#444748] hover:bg-[#e3e2e2]/50'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">image</span>
            <span>Images</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectFilter('video')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === 'video'
                ? 'bg-[#e3e2e2] text-black font-bold'
                : 'text-[#444748] hover:bg-[#e3e2e2]/50'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">movie</span>
            <span>Videos</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectFilter('favorites')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
              activeFilter === 'favorites'
                ? 'bg-[#e3e2e2] text-black font-bold'
                : 'text-[#444748] hover:bg-[#e3e2e2]/50'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">star</span>
            <span>Favorites</span>
          </button>
        </div>
      </div>
    </section>
  );
};
