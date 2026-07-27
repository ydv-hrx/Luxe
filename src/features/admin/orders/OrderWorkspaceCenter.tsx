'use client';

import React from 'react';
import Image from 'next/image';
import { PurchasedItem } from './ordersMockData';

export interface OrderWorkspaceCenterProps {
  purchasedItems: PurchasedItem[];
  internalNote: string;
  onChangeInternalNote: (val: string) => void;
  onSaveNote: () => void;
}

export const OrderWorkspaceCenter: React.FC<OrderWorkspaceCenterProps> = ({
  purchasedItems,
  internalNote,
  onChangeInternalNote,
  onSaveNote,
}) => {
  return (
    <section className="flex-1 overflow-y-auto flex flex-col gap-6 pr-2 font-sans select-none min-w-0 h-full">
      {/* Order Summary Record Card */}
      <div className="p-8 bg-white rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#c4c7c7]/30 relative overflow-hidden shrink-0">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#444748] mb-2">
              Order Record
            </p>
            <h3 className="font-serif text-3xl font-semibold text-black">#LX-4892</h3>
            <div className="mt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase opacity-40 text-black">
                  Status
                </span>
                <span className="text-sm font-semibold text-black">In Fulfillment</span>
              </div>
              <div className="w-px h-8 bg-[#c4c7c7]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase opacity-40 text-black">
                  Payment
                </span>
                <span className="text-sm font-semibold text-black">
                  Verified (Visa •••• 4242)
                </span>
              </div>
              <div className="w-px h-8 bg-[#c4c7c7]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase opacity-40 text-black">
                  Total
                </span>
                <span className="text-sm font-bold text-black">$4,250.00</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-[#f4f3f3] transition-colors text-[#444748]"
            >
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Purchased Items Section */}
      <div className="flex flex-col gap-4">
        <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[#444748]">
          Purchased Items ({purchasedItems.length})
        </h3>
        <div className="space-y-4">
          {purchasedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-[#c4c7c7] shadow-sm"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#efeded] shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-lg font-semibold text-black truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-[#444748] mt-1">{item.variant}</p>
                <p className="text-[11px] font-semibold text-black mt-1">SKU: {item.sku}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-bold text-black">
                  ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-[#444748]">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fulfillment & Internal Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
        {/* Fulfillment Card */}
        <div className="p-6 bg-white rounded-2xl border border-[#c4c7c7] shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-black">
              Fulfillment
            </h4>
            <span className="material-symbols-outlined text-[#444748] text-sm">
              local_shipping
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold opacity-40 uppercase text-black">Carrier</p>
              <p className="text-sm font-semibold text-black">DHL Express Worldwide</p>
            </div>
            <div>
              <p className="text-[10px] font-bold opacity-40 uppercase text-black">
                Tracking Number
              </p>
              <p className="text-sm font-bold text-[#755a24] underline">LX-772839102-DH</p>
            </div>
            <button
              type="button"
              className="w-full mt-2 py-2 border border-[#c4c7c7] rounded-lg text-xs font-bold hover:bg-[#f4f3f3] transition-colors text-black"
            >
              Generate Label
            </button>
          </div>
        </div>

        {/* Internal Notes Card */}
        <div className="p-6 bg-white rounded-2xl border border-[#c4c7c7] shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-black">
              Internal Notes
            </h4>
            <span className="material-symbols-outlined text-[#444748] text-sm">
              edit_note
            </span>
          </div>
          <textarea
            value={internalNote}
            onChange={(e) => onChangeInternalNote(e.target.value)}
            placeholder="Add a note for the atelier team..."
            className="flex-1 w-full bg-white border-none focus:ring-0 p-0 text-xs italic text-[#444748] resize-none outline-none font-sans"
            rows={3}
          />
          <button
            type="button"
            onClick={onSaveNote}
            className="self-end text-[10px] font-bold text-black uppercase mt-2 hover:underline"
          >
            Save Note
          </button>
        </div>
      </div>
    </section>
  );
};
