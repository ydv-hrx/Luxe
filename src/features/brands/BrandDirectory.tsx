'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DirectoryBrandItem {
  name: string;
  category: string;
  productCount: number;
  letter: string;
  initials: string;
}

const DIRECTORY_BRANDS: DirectoryBrandItem[] = [
  { name: 'Aesop', category: 'Beauty & Skincare', productCount: 86, letter: 'A', initials: 'AE' },
  { name: 'Audo Copenhagen', category: 'Home & Living', productCount: 42, letter: 'A', initials: 'AC' },
  { name: 'Balenciaga', category: 'High Fashion', productCount: 210, letter: 'B', initials: 'BA' },
  { name: 'Bang & Olufsen', category: 'Audio & Tech', productCount: 124, letter: 'B', initials: 'BO' },
  { name: 'Bose', category: 'Audio & Tech', productCount: 98, letter: 'B', initials: 'BS' },
  { name: 'Byredo', category: 'Fragrance & Beauty', productCount: 64, letter: 'B', initials: 'BY' },
  { name: 'CELINE', category: 'High Fashion', productCount: 175, letter: 'C', initials: 'CE' },
  { name: 'Devialet', category: 'Audio & Acoustics', productCount: 52, letter: 'D', initials: 'DV' },
  { name: 'Dyson', category: 'Tech & Beauty', productCount: 110, letter: 'D', initials: 'DY' },
  { name: 'GUBI', category: 'Architectural Furniture', productCount: 76, letter: 'G', initials: 'GU' },
  { name: 'HAY', category: 'Contemporary Home', productCount: 94, letter: 'H', initials: 'HA' },
  { name: 'Herman Miller', category: 'Furniture & Work', productCount: 150, letter: 'H', initials: 'HM' },
  { name: 'Kvadrat', category: 'Luxury Textiles', productCount: 88, letter: 'K', initials: 'KV' },
  { name: 'Le Labo', category: 'Niche Perfumery', productCount: 58, letter: 'L', initials: 'LL' },
  { name: 'LOEWE', category: 'Luxury Leather', productCount: 195, letter: 'L', initials: 'LW' },
  { name: 'Polestar', category: 'Automotive Design', productCount: 12, letter: 'P', initials: 'PS' },
  { name: 'Rimowa', category: 'Luxury Travel', productCount: 84, letter: 'R', initials: 'RM' },
  { name: 'Saint Laurent', category: 'Parisian Couture', productCount: 312, letter: 'S', initials: 'SL' },
  { name: 'SONOS', category: 'Smart Audio', productCount: 68, letter: 'S', initials: 'SN' },
  { name: 'Technics', category: 'Hi-Fi Audio', productCount: 45, letter: 'T', initials: 'TC' },
  { name: 'Vitsoe', category: 'Minimalist Systems', productCount: 36, letter: 'V', initials: 'VT' },
  { name: 'ZEISS', category: 'Precision Optics', productCount: 29, letter: 'Z', initials: 'ZS' },
];

export const BrandDirectory: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState('ALL');

  const letters = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('')];

  const filteredBrands = useMemo(() => {
    if (selectedLetter === 'ALL') return DIRECTORY_BRANDS;
    return DIRECTORY_BRANDS.filter((b) => b.letter === selectedLetter);
  }, [selectedLetter]);

  return (
    <section id="directory" className="py-20 sm:py-24 border-y border-neutral-200/80 bg-white">
      <div className="px-6 sm:px-16 max-w-[1440px] mx-auto">
        {/* 1. Minimalist Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-neutral-200/60 pb-8">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2 block">
              Curated Index
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-black tracking-tight">
              Directory A—Z
            </h2>
          </div>
          <p className="font-sans text-sm text-neutral-500 max-w-md leading-relaxed">
            Explore our index of 1,200+ global ateliers, master craftsmen, and contemporary design houses.
          </p>
        </div>

        {/* 2. Sticky Alphabet Navigation Bar */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200/70 mb-12 -mx-6 px-6 sm:-mx-16 sm:px-16 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1 sm:gap-2 min-w-max">
            {letters.map((l) => {
              const isSelected = selectedLetter === l;
              return (
                <button
                  key={l}
                  onClick={() => setSelectedLetter(l)}
                  className={`px-3.5 py-1.5 font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-full ${
                    isSelected
                      ? 'bg-black text-white shadow-sm'
                      : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Interactive Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 min-h-[280px]">
          {filteredBrands.map((b) => (
            <Link
              key={b.name}
              href={`/shop?vendor=${encodeURIComponent(b.name)}`}
              className="group border border-neutral-200/90 hover:border-black bg-white p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between h-44 cursor-pointer relative overflow-hidden"
            >
              {/* Card Header: Initials Badge & Product Count */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 group-hover:bg-black group-hover:text-white font-serif font-bold text-xs text-neutral-800 flex items-center justify-center transition-colors duration-300">
                  {b.initials}
                </div>
                <span className="font-sans text-[9px] font-semibold text-neutral-400 bg-neutral-100 group-hover:bg-neutral-200/70 group-hover:text-neutral-700 px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors">
                  {b.productCount} Items
                </span>
              </div>

              {/* Card Body: Brand Name & Category */}
              <div className="my-2">
                <h3 className="font-serif text-lg font-medium text-black group-hover:underline underline-offset-4 decoration-black/30 truncate">
                  {b.name}
                </h3>
                <p className="font-sans text-[11px] text-neutral-400 group-hover:text-neutral-600 truncate mt-0.5">
                  {b.category}
                </p>
              </div>

              {/* Card Footer: View Brand Link */}
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-black flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5">
                  View Brand <ArrowRight className="w-3 h-3" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-neutral-300 group-hover:text-black transition-colors" />
              </div>
            </Link>
          ))}

          {filteredBrands.length === 0 && (
            <div className="col-span-full py-16 text-center bg-neutral-50 rounded-2xl border border-neutral-200/80">
              <p className="font-serif text-xl text-neutral-800 mb-2">No brands registered under "{selectedLetter}"</p>
              <button
                type="button"
                onClick={() => setSelectedLetter('ALL')}
                className="mt-6 font-sans text-xs font-semibold uppercase tracking-widest text-black border border-black px-6 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                Show All Brands
              </button>
            </div>
          )}
        </div>

        {/* 4. Bottom View All CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-black border border-neutral-400 px-12 py-5 hover:border-black hover:bg-black hover:text-white transition-all duration-300 inline-block rounded-full shadow-sm hover:shadow-md"
          >
            View All 1,200+ Brands
          </Link>
        </div>
      </div>
    </section>
  );
};
