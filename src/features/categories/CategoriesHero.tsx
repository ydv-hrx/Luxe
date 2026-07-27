'use client';

import React from 'react';
import Link from 'next/link';

export const CategoriesHero: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col md:grid md:grid-cols-2 bg-[#f9f9f9] pt-0 font-sans items-center overflow-hidden">
      {/* Content Column (50% desktop width, First on mobile) */}
      <div className="w-full flex flex-col justify-center px-4 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-10 md:py-12">
        {/* Desktop Breadcrumb Navigation (Hidden on mobile <md) */}
        <nav className="hidden md:flex mb-4 sm:mb-6 items-center space-x-2 text-neutral-500 font-sans text-xs uppercase tracking-widest overflow-x-auto scrollbar-none whitespace-nowrap">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-black transition-colors">
            Collections
          </Link>
          <span>/</span>
          <span className="text-black font-semibold">A/W 2024</span>
        </nav>

        {/* Collection Label (First visible element on mobile) */}
        <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2 sm:mb-3 block">
          Autumn / Winter 2024
        </span>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] leading-[1.1] mb-6 text-black font-normal">
          Autumn / Winter
          <br className="hidden sm:inline" />
          {' '}2024 Collection
        </h1>

        {/* Short Description (Target spacing: Heading -> Description = 24px) */}
        <p className="font-sans text-xs sm:text-base text-neutral-600 max-w-md mb-8 leading-relaxed">
          Discover the pinnacle of artisanal tailoring and contemporary silhouettes, where heritage meets the avant-garde.
        </p>

        {/* CTA Buttons (Target spacing: Description -> Buttons = 32px) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-9 w-full">
          <a
            href="#catalog"
            className="bg-black text-white px-8 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-[#735c00] transition-all duration-300 w-full sm:w-auto text-center shrink-0"
          >
            Explore Collection
          </a>
          <Link
            href="/shop"
            className="border border-black text-black px-8 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto text-center shrink-0"
          >
            View Lookbook
          </Link>
        </div>

        {/* Curated Pieces Badge (Target spacing: Buttons -> Divider = 36px, Divider -> Text = 24px) */}
        <div className="text-neutral-500 font-sans text-xs sm:text-sm border-t border-neutral-200 pt-6 inline-flex items-center space-x-2">
          <span className="font-semibold text-black">124</span>
          <span>Curated Pieces</span>
        </div>
      </div>

      {/* Hero Image Column (50% desktop width, reduced height by 25-35%, model head centered) */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[540px] lg:h-[620px] max-h-[640px] lg:max-h-[720px] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrllkiX7OfJZ4pmNnKhJ3yPeYJJnegJQRbpGM28VlTZ3s0gBur3CXFiRD8iBxjUKxx6iRVDgPgoW6MFNB5I8km44Pr987ddyGD479RRzmxS_-tGRbiD8DsGmHQUhbwtpRLQFLGra1M-Y_xWFnL6Vhthcw8hQqF99JtUHWNAS0jcr650yLimxwYPs9xMHWzAv1Qlf6j6eGQdL7l5Z_t31sENUYsFJrOAMJoiG9Ug-caw9wP3h1X3e0pXRBu_UBKaPw2K-MIMlYJ8uWk"
          alt="Autumn / Winter 2024 Fashion Editorial"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_12%] transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  );
};
