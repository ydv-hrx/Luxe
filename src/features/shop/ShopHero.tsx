'use client';

import React from 'react';
import Link from 'next/link';

export const ShopHero: React.FC = () => {
  return (
    <section className="bg-[#F9F8F6] border-b border-[#E5E5E5] pt-0" data-purpose="hero-section">
      <div className="flex flex-col md:flex-row min-h-0 md:min-h-[480px] lg:min-h-[520px] max-w-[1440px] mx-auto">
        {/* Text Column (First on mobile, Left on desktop) */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-center font-sans">
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium mb-3 sm:mb-4 text-black">
            The Curated Marketplace
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-4 sm:mb-6 text-black font-normal leading-tight">Shop</h1>
          <p className="text-[#717171] text-xs sm:text-base lg:text-lg font-sans max-w-md leading-relaxed mb-6 sm:mb-8">
            Discover thoughtfully curated products across every category, where craftsmanship meets contemporary design.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <a
              href="#catalog"
              className="bg-black text-white text-[11px] font-sans font-semibold uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-zinc-800 transition-colors w-full sm:w-auto text-center shrink-0"
            >
              Explore All
            </a>
            <Link
              href="/about"
              className="border border-black text-black text-[11px] font-sans font-semibold uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-black hover:text-white transition-all w-full sm:w-auto text-center shrink-0"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Hero Image Column (Second on mobile, Right on desktop) */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[380px] md:h-[480px] lg:h-[520px] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrD9RB2C1cB-mi-cNK5N0DnDFy-iLdIFsbjGusE3x8BItmDbIBECOnoq154x9pi6NR0d0HeDIM8YLON7b5BeXak5xm6qM7dJmVukgGyHFcRR2Al1dT5e2v3xpcrbhzPbjWl8OQ0EUmWxjZeN8nPLqwD9RN6ujvafRm_Q7xB5oLDZOwCPe128aIy7sADcaTkfXm3xpnMEF8Z6yJczy8vqEePnkxLx1DDL7EXaRcgUQkSvYn567bNRPbqwJm14qVIIR_g5SDnbZZo6bf"
            alt="Curated interior"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};
