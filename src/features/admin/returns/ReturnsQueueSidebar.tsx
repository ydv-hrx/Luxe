'use client';

import React from 'react';
import { ReturnQueueItem } from './returnsMockData';

export interface ReturnsQueueSidebarProps {
  queue: ReturnQueueItem[];
  activeReturnId: string;
  onSelectReturn: (id: string) => void;
}

export const ReturnsQueueSidebar: React.FC<ReturnsQueueSidebarProps> = ({
  queue,
  activeReturnId,
  onSelectReturn,
}) => {
  return (
    <aside className="w-80 shrink-0 border-r border-[#c4c7c7] flex flex-col p-6 bg-[#faf9f9] overflow-y-auto font-sans select-none h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-semibold text-black">Returns Queue</h2>
        <span className="text-xs font-semibold bg-[#e3e2e2] text-black px-2 py-1 rounded">
          12 Pending
        </span>
      </div>

      {/* Return Cards List */}
      <div className="flex flex-col gap-4">
        {queue.map((item) => {
          const isActive = activeReturnId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectReturn(item.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                isActive
                  ? 'bg-white border border-black shadow-sm'
                  : 'bg-[#faf9f9] border border-transparent hover:border-[#c4c7c7]'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`text-xs font-bold ${
                    isActive ? 'text-black' : 'text-[#444748]'
                  }`}
                >
                  {item.returnId}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-tighter px-2 py-0.5 rounded font-bold ${
                    item.badgeType === 'vip'
                      ? 'bg-[#ffdb99] text-[#795f28]'
                      : item.badgeType === 'error'
                      ? 'bg-[#ffdad6] text-[#93000a]'
                      : 'bg-[#e3e2e2] text-[#444748]'
                  }`}
                >
                  {item.badge}
                </span>
              </div>
              <h3 className="font-sans text-sm font-semibold text-black">{item.productName}</h3>
              <p className="text-xs text-[#444748] mb-3">{item.variant}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] text-[#444748] uppercase font-semibold">
                  <span
                    style={{ backgroundColor: item.statusColor }}
                    className="w-2 h-2 rounded-full inline-block"
                  />{' '}
                  {item.status}
                </span>
                <span className="material-symbols-outlined text-[#444748] text-lg">
                  chevron_right
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
