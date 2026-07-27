'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export const GiftConciergeSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 font-sans border-b border-neutral-200 max-w-[1440px] mx-auto">
      {/* 1. Image panel first on mobile */}
      <div className="w-full h-[280px] sm:h-[380px] md:h-auto min-h-0 md:min-h-[480px] relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbTdJpeFago-hY2bEPNMEJ0Px7KRXLFVDRCmWSLg5j2WkUIjmrcCONZ0QRw7i_q56F-5DjjMXHgDv5QAyFVbiU4L9jiNNQV2RhAnR44JWuI6xP-h55ZOy4EosW0htPmZd9LMuULo1TbySlhYLTHTyrr9xyb_uWwPRkvuX5nXI5Bn-m65XKHlBlIgBt9IsKDMWsf_aOuKMGPJsVEGyj-ZM6IXWxYVio2l0mNrQgB3nSzsvBPqzqn6PT7AcP8kspnarWHQhbggbQ5WwU"
          alt="Art of Gifting Box"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Text panel below image on mobile */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 flex flex-col justify-center">
        <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 sm:mb-4 block">
          THE ART OF GIFTING
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-4 sm:mb-6 leading-tight">
          Gift Concierge
        </h2>
        <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 max-w-md leading-relaxed">
          From curated recommendations to bespoke wrapping and personalized messages, we make every gift unforgettable.
        </p>

        <ul className="space-y-3 sm:space-y-4 mb-8 font-sans text-neutral-600 text-xs sm:text-base">
          <li className="flex items-center gap-3 text-black font-medium">
            <Check className="w-4 h-4 text-black shrink-0" /> Curated Gift Recommendations
          </li>
          <li className="flex items-center gap-3 text-black font-medium">
            <Check className="w-4 h-4 text-black shrink-0" /> Luxury Gift Wrapping
          </li>
          <li className="flex items-center gap-3 text-black font-medium">
            <Check className="w-4 h-4 text-black shrink-0" /> Personalized Messages
          </li>
          <li className="flex items-center gap-3 text-black font-medium">
            <Check className="w-4 h-4 text-black shrink-0" /> Corporate Gifting
          </li>
        </ul>

        <Link
          href="/gifting"
          className="font-sans text-xs font-semibold uppercase tracking-widest border-b border-black pb-1 inline-flex items-center gap-2 max-w-fit text-black hover:opacity-70 transition-opacity"
        >
          EXPLORE GIFT CONCIERGE <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
