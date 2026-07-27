'use client';

import React from 'react';
import Image from 'next/image';
import { InventoryAlertItem } from './adminMockData';

export interface InventoryAlertsCardProps {
  alerts: InventoryAlertItem[];
}

export const InventoryAlertsCard: React.FC<InventoryAlertsCardProps> = ({ alerts }) => {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-[#c4c7c7]/10 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 sm:mb-10">
        <h4 className="font-serif text-2xl sm:text-3xl text-black font-semibold">
          Inventory Alerts
        </h4>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
          <span className="text-[#ba1a1a] font-bold text-[11px] uppercase tracking-widest">
            3 Priority Needed
          </span>
        </div>
      </div>

      {/* Alert Items List */}
      <div className="space-y-4 sm:space-y-6">
        {alerts.map((item) => (
          <div
            key={item.id}
            className={`p-4 sm:p-6 rounded-2xl border border-[#c4c7c7]/10 transition-all bg-[#f4f3f3]/20 group ${
              item.isUrgent ? 'hover:border-[#ba1a1a]/20' : 'hover:border-[#C9A86A]/30'
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Product Thumbnail */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#f4f3f3] overflow-hidden border border-[#c4c7c7]/20 shadow-sm shrink-0 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Metadata */}
                <div>
                  <h5
                    className={`text-xs sm:text-sm font-bold text-black transition-colors ${
                      item.isUrgent ? 'group-hover:text-[#ba1a1a]' : 'group-hover:text-[#C9A86A]'
                    }`}
                  >
                    {item.title}
                  </h5>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        item.isUrgent
                          ? 'text-[#ba1a1a] bg-[#ba1a1a]/5'
                          : 'text-[#755a24] bg-[#755a24]/5'
                      }`}
                    >
                      {item.stockText}
                    </span>
                    <span className="text-[11px] text-[#444748]/40 font-medium">{item.sku}</span>
                  </div>
                </div>
              </div>

              {/* Action CTA Button */}
              {item.isUrgent ? (
                <button
                  type="button"
                  className="w-full sm:w-auto px-5 py-2.5 bg-black text-white rounded-xl font-sans text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                >
                  {item.ctaText}
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full sm:w-auto px-5 py-2.5 border border-black text-black rounded-xl font-sans text-xs font-semibold hover:bg-black/5 transition-all"
                >
                  {item.ctaText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
