'use client';

import React from 'react';
import Image from 'next/image';
import { GiftLibraryCard } from './giftMockData';

export interface GiftLibrarySidebarProps {
  cards: GiftLibraryCard[];
  activeGiftId: string;
  onSelectGiftCard: (id: string) => void;
}

export const GiftLibrarySidebar: React.FC<GiftLibrarySidebarProps> = ({
  cards,
  activeGiftId,
  onSelectGiftCard,
}) => {
  return (
    <section className="col-span-12 lg:col-span-3 space-y-6 font-sans select-none">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-black">Gift Library</h2>
        <button
          type="button"
          className="text-[#D4AF37] hover:underline text-xs font-bold uppercase tracking-wider cursor-pointer"
        >
          View All
        </button>
      </div>

      <div className="space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto pr-2 custom-scrollbar">
        {cards.map((card) => {
          const isActive = activeGiftId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => onSelectGiftCard(card.id)}
              className={`bg-white p-4 rounded-2xl shadow-sm border transition-all cursor-pointer group ${
                isActive
                  ? 'border-[#D4AF37]/50 ring-1 ring-[#D4AF37]'
                  : 'border-[#c4c7c7]/30 hover:border-[#D4AF37]/50'
              } ${card.statusType === 'redeemed' ? 'opacity-70 hover:opacity-100' : ''}`}
            >
              <div
                className={`aspect-[1.58/1] rounded-lg mb-3 overflow-hidden relative ${
                  card.statusType === 'redeemed' ? 'grayscale' : ''
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.recipientName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-sm ${
                    card.statusType === 'active'
                      ? 'bg-white/90 text-black'
                      : card.statusType === 'scheduled'
                      ? 'bg-[#ffdb99] text-[#795f28]'
                      : 'bg-[#e3e2e2] text-[#444748]'
                  }`}
                >
                  {card.status}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-black text-sm">{card.recipientName}</p>
                  <p className="text-xs text-[#444748] mt-0.5">{card.subtext}</p>
                </div>
                <span className="font-serif text-xl font-bold text-black">{card.valueText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
