'use client';

import React from 'react';
import { ShipmentQueueItem } from './shippingMockData';

export interface ShipmentQueueSidebarProps {
  queue: ShipmentQueueItem[];
  activeShipmentId: string;
  onSelectShipment: (id: string) => void;
}

export const ShipmentQueueSidebar: React.FC<ShipmentQueueSidebarProps> = ({
  queue,
  activeShipmentId,
  onSelectShipment,
}) => {
  return (
    <aside className="w-80 shrink-0 flex flex-col border-r border-[#c4c7c7] bg-white font-sans select-none h-full">
      <div className="p-6 border-b border-[#c4c7c7]">
        <h2 className="font-serif text-2xl font-semibold text-black mb-1">Queue</h2>
        <p className="text-xs text-[#444748] font-medium">24 Shipments Pending</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {queue.map((item) => {
          const isActive = activeShipmentId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectShipment(item.id)}
              className={`p-4 rounded-2xl shadow-sm border transition-all cursor-pointer ${
                isActive
                  ? 'bg-white border-black ring-1 ring-black'
                  : 'bg-white border-[#c4c7c7] hover:bg-[#f4f3f3]'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold ${isActive ? 'text-black' : 'text-[#444748]'}`}>
                  {item.shipmentId}
                </span>
                <span
                  className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded ${
                    item.badgeType === 'express'
                      ? 'bg-red-50 text-red-600'
                      : 'bg-[#efeded] text-[#444748]'
                  }`}
                >
                  {item.badge}
                </span>
              </div>
              <h3 className="font-serif text-base text-black mb-1 font-semibold">
                {item.productName}
              </h3>
              <p className="text-xs text-[#444748]">{item.customerName}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#444748]">
                    local_shipping
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#444748]">
                    {item.carrier}
                  </span>
                </div>
                {isActive && (
                  <span className="material-symbols-outlined text-black text-lg">
                    chevron_right
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
