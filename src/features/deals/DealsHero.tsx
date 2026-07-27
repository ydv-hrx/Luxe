'use client';

import React from 'react';

import { Tag, Clock, ShieldCheck } from 'lucide-react';

export const DealsHero: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-0 pb-8 sm:py-12 md:py-16 flex flex-col md:flex-row gap-8 lg:gap-16 items-center font-sans">
      {/* 1. Hero Content Column (First on mobile) */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 uppercase block">
            Curated for Members
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[64px] leading-[1.1] text-black font-normal">
            Exclusive Deals
          </h1>
          <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 max-w-lg leading-relaxed">
            Exceptional pieces. Limited time offers. Curated exclusively for Luxora members. Experience the pinnacle of luxury with our season's selected discounts.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">
          <a
            href="#offers"
            className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all w-full sm:w-auto text-center shrink-0"
          >
            Explore Deals
          </a>
          <a
            href="#collections"
            className="border border-black text-black px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all w-full sm:w-auto text-center shrink-0"
          >
            View Collections
          </a>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 md:pt-8 border-t border-neutral-200">
          <div className="flex flex-col gap-1 sm:gap-2">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <div>
              <p className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-black leading-tight">Member Pricing</p>
              <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-tight">Exclusive savings</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <div>
              <p className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-black leading-tight">Limited Time</p>
              <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-tight">Offers end soon</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <div>
              <p className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-black leading-tight">Authentic Guarantee</p>
              <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-tight">100% authentic</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Image Column (Second on mobile below Feature Icons, Right on desktop) */}
      <div className="w-full md:w-1/2 aspect-[4/3] bg-neutral-100 relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW6Z9wjsvlvPPkGBdwICgcnsrIXAbecnB4iYxPv-_69RBuUQjCL_taaD0Ev_TA52UeS6j1oPTJwv_K9s6WJE7RWgeBJfm2Ze_aUcEN8_f0o0QbYgiyGy4qLnD0HU5TJXfKCf2aNtDiNV5uBZvirm_Jupsba6e1NdhgxOoFL4PB1I7iMs7GxqFbto5wVoqJO3HwRfDvhzuWDAWAYdgHPcZDV-KdAAbfIdOgSULe583gGodXS_Jmllfj1gIKFdIZl7k8VP1Lb-5bGpEe"
          alt="Luxury living room editorial"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
