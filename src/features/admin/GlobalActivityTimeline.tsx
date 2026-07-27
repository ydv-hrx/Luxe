'use client';

import React from 'react';
import { GlobalActivityItem } from './adminMockData';

export interface GlobalActivityTimelineProps {
  activities: GlobalActivityItem[];
}

export const GlobalActivityTimeline: React.FC<GlobalActivityTimelineProps> = ({ activities }) => {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-[#c4c7c7]/10">
      <div className="flex justify-between items-center mb-8 sm:mb-10 font-sans">
        <h4 className="font-serif text-2xl sm:text-3xl text-black font-semibold">
          Global Activity
        </h4>
        <span className="text-[10px] font-bold text-[#755a24] uppercase tracking-[0.2em]">
          Real-time Updates
        </span>
      </div>

      <div className="relative space-y-8 sm:space-y-10 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#c4c7c7]/30 font-sans">
        {activities.map((act) => (
          <div key={act.id} className="relative pl-12 flex items-start gap-4">
            {act.type === 'live' ? (
              <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full bg-white border-2 border-black z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
              </div>
            ) : act.type === 'alert' ? (
              <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full bg-white border-2 border-[#ba1a1a] z-10" />
            ) : (
              <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full bg-white border-2 border-[#C9A86A] z-10" />
            )}

            <div>
              <p className="text-xs sm:text-sm text-black font-bold">{act.title}</p>
              <p className="text-xs text-[#444748]/70 mt-1 leading-relaxed">{act.description}</p>
              <p className="text-[10px] text-[#747878] font-bold mt-2 uppercase tracking-widest">
                {act.timeAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
