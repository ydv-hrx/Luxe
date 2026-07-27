'use client';

import React from 'react';
import { ShieldCheck, Lock, Truck, RotateCcw, Headset } from 'lucide-react';

export const SupportTrustSection: React.FC = () => {
  return (
    <section className="border-y border-neutral-200 py-8 sm:py-10 px-4 sm:px-8 md:px-16 font-sans">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <ShieldCheck className="w-5 h-5 text-neutral-500 shrink-0" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              AUTHENTIC PRODUCTS
            </span>
            <span className="text-[10px] sm:text-[11px] text-neutral-500">Sourced directly</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <Lock className="w-5 h-5 text-neutral-500 shrink-0" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              SECURE PAYMENTS
            </span>
            <span className="text-[10px] sm:text-[11px] text-neutral-500">Encrypted transactions</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <Truck className="w-5 h-5 text-neutral-500 shrink-0" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              WHITE GLOVE DELIVERY
            </span>
            <span className="text-[10px] sm:text-[11px] text-neutral-500">Complimentary insurance</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <RotateCcw className="w-5 h-5 text-neutral-500 shrink-0" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              EASY RETURNS
            </span>
            <span className="text-[10px] sm:text-[11px] text-neutral-500">30-day window</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 col-span-2 sm:col-span-1">
          <Headset className="w-5 h-5 text-neutral-500 shrink-0" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              24/7 CONCIERGE
            </span>
            <span className="text-[10px] sm:text-[11px] text-neutral-500">Global support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
