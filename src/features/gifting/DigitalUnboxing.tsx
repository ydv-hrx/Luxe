'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GiftCustomization } from '@/lib/services/gifting';
import { Button } from '@/components/ui/Button';
import { Gift, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

export interface DigitalUnboxingProps {
  gift: GiftCustomization;
}

export const DigitalUnboxing: React.FC<DigitalUnboxingProps> = ({ gift }) => {
  const [opened, setOpened] = useState(false);

  const product = gift.products[0] || {
    title: 'Essential Cashmere Hoodie',
    vendor: 'LUXE Atelier',
    price: { amount: 680, currencyCode: 'USD' },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
        altText: 'Cashmere Hoodie',
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto w-full p-8 sm:p-12 bg-neutral-900 text-white rounded-3xl border border-neutral-800 shadow-2xl flex flex-col items-center text-center gap-8">
      {!opened ? (
        <div className="flex flex-col items-center gap-6 animate-in fade-in duration-300">
          <div className="p-4 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30 animate-pulse">
            <Gift className="w-16 h-16" />
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            A Luxury Gift For {gift.recipientName}
          </span>

          <h1 className="text-3xl sm:text-5xl font-semibold font-serif leading-tight">
            You Have Received a LUXE Gift Box
          </h1>

          <p className="text-sm text-neutral-300 max-w-md">
            Touch to untie the silk ribbon and reveal your personalized gift presentation.
          </p>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => setOpened(true)}
            className="gap-2 text-base font-bold shadow-xl mt-4"
          >
            <Sparkles className="w-5 h-5" />
            Untie Ribbon & Reveal Gift
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 animate-in zoom-in duration-500 w-full">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold font-serif">
            {product.title}
          </h2>

          <div className="relative aspect-[3/4] max-w-sm w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <Image
              src={product.images[0]?.url || ''}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 bg-neutral-800/80 rounded-2xl border border-neutral-700 max-w-lg w-full text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
              Personalized Message Card
            </span>
            <p className="text-sm font-serif italic text-neutral-200">
              "{gift.personalMessage}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
