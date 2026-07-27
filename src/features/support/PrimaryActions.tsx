'use client';

import React from 'react';
import Link from 'next/link';
import { Package, RotateCcw, Headset, ArrowRight } from 'lucide-react';

export const PrimaryActions: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-10 sm:py-14 md:py-16 max-w-[1440px] mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Track Your Order */}
        <Link
          href="/track/demo-order"
          className="border border-neutral-200 p-6 sm:p-8 lg:p-10 group hover:bg-[#f3f3f3] transition-colors cursor-pointer text-center flex flex-col justify-between h-full"
        >
          <div>
            <Package className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 mx-auto text-black stroke-[1.5]" />
            <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 text-black font-normal">Track Your Order</h3>
            <p className="font-sans text-neutral-600 text-xs sm:text-base mb-6 leading-relaxed">
              Real-time updates on your shipment from our atelier to your door.
            </p>
          </div>
          <div>
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-black pb-1 inline-flex items-center gap-2 group-hover:gap-3 transition-all text-black">
              TRACK ORDER <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>

        {/* Start a Return */}
        <Link
          href="/returns"
          className="border border-neutral-200 p-6 sm:p-8 lg:p-10 group hover:bg-[#f3f3f3] transition-colors cursor-pointer text-center flex flex-col justify-between h-full"
        >
          <div>
            <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 mx-auto text-black stroke-[1.5]" />
            <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 text-black font-normal">Start a Return</h3>
            <p className="font-sans text-neutral-600 text-xs sm:text-base mb-6 leading-relaxed">
              Hassle-free returns and exchanges within 30 days of receipt.
            </p>
          </div>
          <div>
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-black pb-1 inline-flex items-center gap-2 group-hover:gap-3 transition-all text-black">
              START RETURN <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>

        {/* Contact Concierge */}
        <a
          href="#contact"
          className="border border-neutral-200 p-6 sm:p-8 lg:p-10 group hover:bg-[#f3f3f3] transition-colors cursor-pointer text-center flex flex-col justify-between h-full"
        >
          <div>
            <Headset className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 mx-auto text-black stroke-[1.5]" />
            <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3 text-black font-normal">Contact Concierge</h3>
            <p className="font-sans text-neutral-600 text-xs sm:text-base mb-6 leading-relaxed">
              Speak with a luxury specialist for personalized assistance.
            </p>
          </div>
          <div>
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-black pb-1 inline-flex items-center gap-2 group-hover:gap-3 transition-all text-black">
              CONTACT <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
