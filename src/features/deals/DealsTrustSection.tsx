'use client';

import React from 'react';
import { ShieldCheck, Lock, Truck, RotateCcw, Headset } from 'lucide-react';

export const DealsTrustSection: React.FC = () => {
  return (
    <section className="border-t border-b border-neutral-200 mt-10 sm:mt-14 md:mt-16 py-8 sm:py-12 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <ShieldCheck className="w-5 h-5 text-neutral-500 shrink-0" />
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-black mb-0.5">Authentic Products</h5>
            <p className="text-[10px] text-neutral-500 leading-tight">Sourced directly from trusted partners</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <Lock className="w-5 h-5 text-neutral-500 shrink-0" />
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-black mb-0.5">Secure Payments</h5>
            <p className="text-[10px] text-neutral-500 leading-tight">Encrypted and safe checkout</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <Truck className="w-5 h-5 text-neutral-500 shrink-0" />
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-black mb-0.5">White Glove Delivery</h5>
            <p className="text-[10px] text-neutral-500 leading-tight">Complimentary insured shipping</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <RotateCcw className="w-5 h-5 text-neutral-500 shrink-0" />
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-black mb-0.5">Easy Returns</h5>
            <p className="text-[10px] text-neutral-500 leading-tight">Hassle-free within 30 days</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 col-span-2 sm:col-span-1">
          <Headset className="w-5 h-5 text-neutral-500 shrink-0" />
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-black mb-0.5">Dedicated Support</h5>
            <p className="text-[10px] text-neutral-500 leading-tight">Concierge care 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};
