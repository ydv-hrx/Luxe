'use client';

import React from 'react';
import { TRACK_NAV_ITEMS, TrackNavItem } from './analyticsMockData';

export interface PerformanceTracksSidebarProps {
  activeTrackId: string;
  timeframeRange: string;
  onSelectTrack: (id: string) => void;
}

export const PerformanceTracksSidebar: React.FC<PerformanceTracksSidebarProps> = ({
  activeTrackId,
  timeframeRange,
  onSelectTrack,
}) => {
  return (
    <aside className="w-72 bg-[#faf9f9]/50 border-r border-[#c4c7c7]/20 p-6 overflow-y-auto hidden xl:flex flex-col shrink-0 font-sans select-none h-full">
      {/* Timeframe Card */}
      <div className="mb-6">
        <p className="text-xs font-bold text-[#755a24] uppercase tracking-widest mb-4">Timeframe</p>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#c4c7c7]/30 flex items-center justify-between cursor-pointer group hover:border-[#755a24]/50 transition-all">
          <div>
            <p className="text-xs text-[#444748]">Range</p>
            <p className="text-xs font-bold text-black">{timeframeRange}</p>
          </div>
          <span className="material-symbols-outlined text-[#755a24] group-hover:translate-x-1 transition-transform">
            calendar_today
          </span>
        </div>
      </div>

      {/* Performance Tracks List */}
      <div className="flex-1">
        <p className="text-xs font-bold text-[#755a24] uppercase tracking-widest mb-4">
          Performance Tracks
        </p>
        <ul className="space-y-1">
          {TRACK_NAV_ITEMS.map((item: TrackNavItem) => {
            const isActive = activeTrackId === item.id;

            return (
              <li
                key={item.id}
                onClick={() => onSelectTrack(item.id)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#ffdb99]/20 text-black border-l-4 border-[#755a24] font-semibold'
                    : 'text-[#444748] hover:bg-[#f4f3f3]'
                }`}
              >
                <span
                  className="material-symbols-outlined text-lg"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
