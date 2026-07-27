'use client';

import React from 'react';
import { ShieldCheck, Globe, Lock, Headset } from 'lucide-react';

export const ShopTrustBar: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 border-y border-neutral-200 mt-16 sm:mt-24 md:mt-28 font-sans">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12">
        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-black shrink-0" />
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black mb-1">Curated Selection</h4>
            <p className="text-[11px] sm:text-sm text-neutral-600 leading-tight sm:leading-normal">
              Handpicked by our international team.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-black shrink-0" />
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black mb-1">Worldwide Delivery</h4>
            <p className="text-[11px] sm:text-sm text-neutral-600 leading-tight sm:leading-normal">
              White-glove shipping to over 140 countries.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-black shrink-0" />
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black mb-1">Secure Checkout</h4>
            <p className="text-[11px] sm:text-sm text-neutral-600 leading-tight sm:leading-normal">
              Encrypted data and privacy protection.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4">
          <Headset className="w-6 h-6 sm:w-8 sm:h-8 text-black shrink-0" />
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-black mb-1">Premium Support</h4>
            <p className="text-[11px] sm:text-sm text-neutral-600 leading-tight sm:leading-normal">
              24/7 concierge support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
