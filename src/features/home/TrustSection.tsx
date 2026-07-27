'use client';

import React from 'react';
import { ShieldCheck, Truck, Award, Headset } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f9f9f9] border-t border-neutral-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 mb-4 text-black" />
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-2 text-black">
              Secure Payments
            </h4>
            <p className="text-xs text-neutral-500 uppercase tracking-tighter">Encrypted Transactions</p>
          </div>

          <div className="flex flex-col items-center">
            <Truck className="w-8 h-8 mb-4 text-black" />
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-2 text-black">
              Express Delivery
            </h4>
            <p className="text-xs text-neutral-500 uppercase tracking-tighter">Global Priority Shipping</p>
          </div>

          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 mb-4 text-black" />
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-2 text-black">
              Authenticity
            </h4>
            <p className="text-xs text-neutral-500 uppercase tracking-tighter">100% Guaranteed Origins</p>
          </div>

          <div className="flex flex-col items-center">
            <Headset className="w-8 h-8 mb-4 text-black" />
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-2 text-black">
              Concierge Support
            </h4>
            <p className="text-xs text-neutral-500 uppercase tracking-tighter">Dedicated Private Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};
