'use client';

import React from 'react';
import Link from 'next/link';

export const PromotionalBanner: React.FC = () => {
  return (
    <section className="mt-16 sm:mt-24 md:mt-28 px-4 sm:px-8 md:px-16 py-12 sm:py-20 md:py-28 bg-[#f3f3f3] max-w-[1440px] mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-8 font-sans">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFbMKMdSSLcShwFdKtBjIayUBqxtKZFejuIFgOPzZy4eC62WMkWJlYdQ3BM8gMtl06ajV1iJbyJ_YmpmFlSnAFZhem4--uqyRVz_rT-5bATmxLvG6jW-VwumAlcJ2F-d36hRXf8YYIx5WEO5f0S2TMss4bLIssn0z0oGEdiZ2Ey4FL9GIIPosqTGHawx9co1D7QtYIW4a4U0qddC-tA3SUMTQ6SpaMt7ip_AS3vxjdD5aue885bms8Xaed2C1_AsFKrTV4Ozx1H8vL"
          alt="Editor's Selection Ceramics & Decor"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-2 sm:px-8 md:px-16 lg:px-20 text-left">
        <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3 sm:mb-4 block">
          Editor's Selection
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-4 sm:mb-8 leading-tight">
          Timeless Pieces,
          <br className="hidden sm:inline" />
          Curated for You
        </h2>
        <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-10 leading-relaxed">
          Explore our handpicked collection of essentials that transcend seasons and define the modern luxury wardrobe. Each piece is selected for its craftsmanship, material quality, and enduring style.
        </p>
        <Link
          href="/shop?category=fashion"
          className="bg-black text-white px-8 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-[#735c00] transition-all duration-300 inline-block w-full sm:w-auto text-center"
        >
          Explore Editor's Picks
        </Link>
      </div>
    </section>
  );
};
