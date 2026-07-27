'use client';

import React from 'react';
import Link from 'next/link';

export const BrandLogoWall: React.FC = () => {
  const brandLogos = [
    { name: 'VANGUARDE', price: 'FROM $450' },
    { name: 'AETHEL', price: 'FROM $220' },
    { name: 'SONUS', price: 'FROM $890' },
    { name: 'MODERNA', price: 'FROM $1,100' },
    { name: 'VALEO', price: 'FROM $150' },
  ];

  return (
    <section className="border-y border-neutral-200 py-16 bg-[#f9f9f9]">
      <div className="px-6 sm:px-16 max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-8 sm:gap-12 opacity-60">
        {brandLogos.map((b) => (
          <Link
            key={b.name}
            href={`/shop?vendor=${encodeURIComponent(b.name)}`}
            className="text-center group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[150px]"
          >
            <p className="font-serif text-2xl sm:text-3xl text-black mb-2 font-normal tracking-wide">{b.name}</p>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
              {b.price}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
