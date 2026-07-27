'use client';

import React from 'react';

export const FeaturedBrands: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 text-center">
        <div className="mb-12">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Featured Brands
          </h2>
        </div>
        <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition-all">
          <img
            alt="Partner Brands"
            className="max-w-4xl w-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-XTz0p4j_fpcKv-M7BRU76pZKVS9b2uUy880EqkHOf0aEKTb64kh6VFIyqWYGsglWGrAxc7Zl466AY2_GdZfDXtc5VuEo9QrIsNnUy8tFOACiuY8W2GNP4wkFlrHohVRLMGY1L4zF_10TBGBzemlwb2oASp9QmVEUxiImtDXaXz10FIXxoHc-gsLrSBbpm7ukK-hIUYfwhZB5NN2VEU-DTsr1drpWMPjv8t1GE0yA9svQjvDxZYblndT1kRRLlOOIIjjP-82oEV8T"
          />
        </div>
      </div>
    </section>
  );
};
