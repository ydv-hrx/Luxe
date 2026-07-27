'use client';

import React from 'react';
import Image from 'next/image';
import { NavigationTreeNode } from './navigationMockData';

export interface VisualNavigationBuilderProps {
  treeNodes: NavigationTreeNode[];
  columnsCount: string;
  isEditorialEnabled: boolean;
  onToggleNodeExpand: (id: string) => void;
  onRemoveSubLink: (nodeId: string, subId: string) => void;
  onToggleEditorial: () => void;
  onChangeColumnsCount: (val: string) => void;
}

export const VisualNavigationBuilder: React.FC<VisualNavigationBuilderProps> = ({
  treeNodes,
  columnsCount,
  isEditorialEnabled,
  onToggleNodeExpand,
  onRemoveSubLink,
  onToggleEditorial,
  onChangeColumnsCount,
}) => {
  return (
    <section className="col-span-12 lg:col-span-6 space-y-6 font-sans select-none">
      {/* Header & View Toggles */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-serif text-2xl font-semibold text-black">Visual Navigation Builder</h3>
        <div className="flex gap-2">
          <button
            type="button"
            className="p-2 bg-white rounded-lg border border-[#c4c7c7] hover:shadow-md transition-all text-[#444748]"
            title="Grid View"
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
          <button
            type="button"
            className="p-2 bg-white rounded-lg border border-[#c4c7c7] hover:shadow-md transition-all text-black"
            title="Reorder View"
          >
            <span className="material-symbols-outlined text-[20px]">reorder</span>
          </button>
        </div>
      </div>

      {/* Navigation Tree Cards */}
      <div className="space-y-4">
        {treeNodes.map((node) => {
          if (node.isExpanded) {
            return (
              <div
                key={node.id}
                className="bg-white rounded-2xl shadow-md border border-[#c4c7c7] overflow-hidden"
              >
                <div className="p-4 flex items-center gap-4 bg-[#f4f3f3] border-b border-[#c4c7c7] drag-handle">
                  <span className="material-symbols-outlined text-[#444748]">drag_indicator</span>
                  <span className="font-sans text-sm font-semibold text-black flex-1">
                    {node.title}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#444748] text-[18px]">
                      visibility
                    </span>
                    <span className="material-symbols-outlined text-[#444748] text-[18px]">
                      edit
                    </span>
                    <span
                      onClick={() => onToggleNodeExpand(node.id)}
                      className="material-symbols-outlined text-[#444748] text-[18px] rotate-180 cursor-pointer"
                    >
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 bg-[#faf9f9]">
                  {node.children?.map((sub) => (
                    <div
                      key={sub.id}
                      className="ml-8 p-3 bg-white border border-[#c4c7c7] rounded-xl flex justify-between items-center shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#444748] text-[16px]">
                          subdirectory_arrow_right
                        </span>
                        <span className="text-xs font-semibold text-black">{sub.title}</span>
                      </div>
                      <span
                        onClick={() => onRemoveSubLink(node.id, sub.id)}
                        className="material-symbols-outlined text-[#444748] text-[18px] hover:text-[#ba1a1a] cursor-pointer"
                      >
                        close
                      </span>
                    </div>
                  ))}

                  <div className="ml-8 py-2.5 px-3 border-2 border-dashed border-[#c4c7c7] rounded-xl flex justify-center items-center text-[#444748] font-sans text-xs font-semibold cursor-pointer hover:border-[#755a24] hover:text-[#755a24] transition-all">
                    + Add Nested Link
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={node.id}
              className="bg-white rounded-2xl shadow-sm border border-[#c4c7c7] p-4 flex items-center gap-4 drag-handle hover:shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#444748]">drag_indicator</span>
              <span className="font-sans text-sm font-semibold text-black flex-1">
                {node.title}
              </span>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#444748] text-[18px]">
                  visibility
                </span>
                <span
                  onClick={() => onToggleNodeExpand(node.id)}
                  className="material-symbols-outlined text-[#444748] text-[18px]"
                >
                  expand_more
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mega Menu Editor Section */}
      <div className="mt-8 p-6 bg-white rounded-2xl border border-[#c4c7c7] shadow-sm space-y-6">
        <div className="flex justify-between items-center border-b border-[#c4c7c7] pb-4">
          <div>
            <h4 className="font-serif text-xl font-semibold text-black">Mega Menu Editor</h4>
            <p className="text-xs text-[#444748] mt-0.5">Configuring layout for 'Collections'</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold text-[#444748]">Columns</p>
              <select
                value={columnsCount}
                onChange={(e) => onChangeColumnsCount(e.target.value)}
                className="bg-transparent font-sans text-xs font-semibold text-black border-none p-0 focus:ring-0 outline-none"
              >
                <option value="4 Columns">4 Columns</option>
                <option value="3 Columns">3 Columns</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Column 1: Featured Column */}
          <div className="bg-[#faf9f9] p-3 rounded-xl border border-[#c4c7c7] space-y-2">
            <p className="text-[10px] uppercase font-bold text-[#755a24] mb-2">Featured Column</p>
            <div className="aspect-[3/4] bg-[#e3e2e2] rounded-lg overflow-hidden relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3dnjfx3yNP3ng6m3ukx3WCqbj-Wk9UlIeagVJE6_EHmJ4X7sWgfCUoYU4YGFS2zttB6cKkDusrQTom1bTKpBgsaOfKpQ4-_tMzgyn_ub3fgN1gQE0xa4jRcIXB-8h2BCyzlLnY0GnnjoN7FE_2TY-caPrjnRG0TrS_V4X37AOADqb5rBSmdG5IQE2iUOn4MxmeZCMK9d6XOh266KxeXg2fgmUPthJt8dmmKcbOIAAKzUrXYEopqkDDNnFbiB5NxrlXRLLvMNSIWHw"
                alt="Spring Series Featured"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 bg-white text-black text-[10px] font-bold rounded shadow-lg"
                >
                  Replace
                </button>
              </div>
            </div>
            <p className="font-sans text-xs font-bold text-center mt-2 text-black">Spring Series</p>
          </div>

          {/* Column 2 & 3: Link Lists & Editorial Block */}
          <div className="sm:col-span-2 bg-[#faf9f9] p-4 rounded-xl border border-[#c4c7c7]">
            <p className="text-[10px] uppercase font-bold text-[#444748] mb-4">Editorial Block</p>
            <div className="bg-white p-4 rounded-lg border border-[#c4c7c7] flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ffdb99] rounded-lg flex items-center justify-center text-[#795f28] shrink-0">
                <span className="material-symbols-outlined text-[22px]">auto_stories</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs font-bold text-black">The Atelier Story</p>
                <p className="text-[11px] text-[#444748] mt-0.5">
                  Display full-width editorial teaser in mega menu
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={isEditorialEnabled}
                  onChange={onToggleEditorial}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#efeded] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#755a24]" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
