'use client';

import React from 'react';

export const BrandMarquee: React.FC = () => {
  const brands = ['VALENTINE', 'ARIS', 'MODERNE', 'LUMIÈRE', 'ETHEREAL', 'OAK & IRON'];

  return (
    <section className="py-20 border-y border-neutral-300 overflow-hidden">
      <div className="flex overflow-hidden select-none gap-16">
        <div className="shrink-0 flex justify-around min-w-full gap-16 animate-marquee">
          {brands.map((brand, idx) => (
            <span
              key={idx}
              className={`font-serif text-[32px] text-black opacity-30 ${idx % 2 === 0 ? 'italic' : ''}`}
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="shrink-0 flex justify-around min-w-full gap-16 animate-marquee" aria-hidden="true">
          {brands.map((brand, idx) => (
            <span
              key={idx}
              className={`font-serif text-[32px] text-black opacity-30 ${idx % 2 === 0 ? 'italic' : ''}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
