'use client';

import React from 'react';
import { ShieldCheck, Lock, RefreshCw, Headset, Leaf } from 'lucide-react';

export const StitchHomeTrustFeatures: React.FC = () => {
  return (
    <section className="border-y border-neutral-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          <div className="space-y-2 sm:space-y-3">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-black stroke-[1.5]" />
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              AUTHENTICITY GUARANTEED
            </h4>
            <p className="text-[11px] text-neutral-500">100% authentic products</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <Lock className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-black stroke-[1.5]" />
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              SECURE PAYMENTS
            </h4>
            <p className="text-[11px] text-neutral-500">Encrypted and safe checkout</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <RefreshCw className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-black stroke-[1.5]" />
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              WHITE GLOVE DELIVERY
            </h4>
            <p className="text-[11px] text-neutral-500">Premium packaging and global shipping</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <Headset className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-black stroke-[1.5]" />
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              DEDICATED SUPPORT
            </h4>
            <p className="text-[11px] text-neutral-500">24/7 concierge assistance</p>
          </div>

          <div className="space-y-2 sm:space-y-3 col-span-2 sm:col-span-1">
            <Leaf className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-black stroke-[1.5]" />
            <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-black">
              SUSTAINABLE CHOICES
            </h4>
            <p className="text-[11px] text-neutral-500">Thoughtfully curated responsible pieces</p>
          </div>
        </div>
      </div>
    </section>
  );
};
