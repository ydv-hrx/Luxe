'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const StitchHomeHero: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-0 pb-8 sm:pb-12 md:py-12 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center min-h-0 md:min-h-[580px] lg:min-h-[640px] font-sans">
      {/* 1. Hero Image Container (First on mobile order-1, Right column on desktop md:order-2 md:col-span-7) */}
      <div className="order-1 md:order-2 md:col-span-7 h-full w-full">
        <div className="relative w-full h-[42vh] min-h-[280px] max-h-[420px] sm:h-[450px] md:h-[580px] lg:h-[640px] overflow-hidden bg-neutral-100">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5FeluLAOy-JttyJxiftl65JM_eKiZvCp7dl3D-Q1ufWd24SN5YdJ3D3JfihRO1IFW8QnX3FFvUoPccdILTh6VNXNK23lb2fGCjy5hagmVc_aMsruoJLGohPJ6vNsq9nlfYQNKSnIQRgTAwwSU1ps3qUmaOM96CHbf_5YEhPnU3-kWmT1IDnBiP4WX87JV2agNH4iCjZHkW74DpqLSfq-K0oLvjktz2C-NphrYhy0HIHs1HZZ0Fs_QvBCbOf8CJd3RdyKCQYzlTs5q"
            alt="Minimalist luxury interior editorial"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* 2. Hero Content Column (Second on mobile order-2, Left column on desktop md:order-1 md:col-span-5) */}
      <div className="order-2 md:order-1 md:col-span-5 space-y-5 sm:space-y-6 text-left w-full">
        <div>
          <p className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-500 mb-2 sm:mb-3 tracking-[0.2em] uppercase">
            TIMELESS DESIGN. MODERN LUXURY.
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] leading-[1.15] md:leading-[1.1] mb-3 sm:mb-5 text-black font-normal">
            Curated for Exceptional Living.
          </h1>
          <p className="font-sans text-xs sm:text-base lg:text-base text-neutral-600 max-w-md leading-relaxed">
            Discover a world of refined pieces, meticulously selected for those who value quality, craftsmanship, and understated elegance.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">
          <Link
            href="/shop"
            className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto text-center shrink-0"
          >
            SHOP NEW ARRIVALS
          </Link>
          <Link
            href="/collections"
            className="border border-black text-black px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto text-center shrink-0"
          >
            EXPLORE COLLECTIONS
          </Link>
        </div>

        {/* Trust Badges: Target spacing 32-48px (pt-6 md:pt-8) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 md:pt-8 border-t border-neutral-200">
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <p className="font-sans text-[9px] sm:text-[10px] font-bold uppercase text-black leading-tight">AUTHENTIC PRODUCTS</p>
            <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-tight">Sourced from trusted partners</p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <p className="font-sans text-[9px] sm:text-[10px] font-bold uppercase text-black leading-tight">COMPLIMENTARY SHIPPING</p>
            <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-tight">Orders over $500</p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
            <p className="font-sans text-[9px] sm:text-[10px] font-bold uppercase text-black leading-tight">EASY RETURNS</p>
            <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-tight">30-day window</p>
          </div>
        </div>
      </div>
    </section>
  );
};
