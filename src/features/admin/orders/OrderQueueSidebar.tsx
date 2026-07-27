'use client';

import React from 'react';
import { OrderQueueItem } from './ordersMockData';

export interface OrderQueueSidebarProps {
  orders: OrderQueueItem[];
  activeOrderId: string;
  activeFilter: string;
  onSelectOrder: (id: string) => void;
  onSelectFilter: (filter: 'All' | 'Pending' | 'Processing' | 'VIP') => void;
}

export const OrderQueueSidebar: React.FC<OrderQueueSidebarProps> = ({
  orders,
  activeOrderId,
  activeFilter,
  onSelectOrder,
  onSelectFilter,
}) => {
  const filtered = orders.filter((ord) => {
    if (activeFilter === 'Pending') return ord.status === 'Pending';
    if (activeFilter === 'Processing') return ord.status === 'Processing';
    if (activeFilter === 'VIP') return ord.isVip;
    return true;
  });

  return (
    <section className="w-80 shrink-0 flex flex-col gap-4 font-sans select-none h-full">
      {/* Header & Active Pill */}
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-black">Orders</h2>
        <span className="bg-[#e3e2e2] text-[#1b1c1c] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
          12 Active
        </span>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {(['All', 'Pending', 'Processing', 'VIP'] as const).map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onSelectFilter(filter)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === filter
                ? filter === 'VIP'
                  ? 'bg-[#ffdb99] text-[#795f28] font-bold'
                  : 'bg-black text-white'
                : 'bg-[#efeded] text-[#444748] hover:bg-[#e9e8e8]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Scrollable Order Cards List */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {filtered.map((item) => {
          const isActive = activeOrderId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectOrder(item.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                isActive
                  ? 'bg-white border-2 border-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] scale-[1.01]'
                  : 'bg-white border border-[#c4c7c7] hover:border-black/50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-sans text-xs font-semibold text-[#444748]">
                  {item.orderNumber}
                </span>
                {item.isVip && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-[#755a24] uppercase tracking-widest">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{' '}
                    VIP
                  </span>
                )}
              </div>
              <h4 className="font-serif text-lg font-semibold text-black mb-1">
                {item.customerName}
              </h4>
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-black">
                  ${item.totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
                <span
                  className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter ${
                    item.status === 'Processing'
                      ? 'bg-[#ffdb99]/30 text-[#755a24]'
                      : 'bg-[#e3e2e2] text-[#444748]'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
