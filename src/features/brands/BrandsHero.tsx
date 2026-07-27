'use client';

import React from 'react';


export const BrandsHero: React.FC = () => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-[#f3f3f3]">
      <div className="px-6 sm:px-16 max-w-[1440px] mx-auto w-full relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
              Discover Brands
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] mb-8 leading-[1.1] font-normal text-black">
              The Curator's Portfolio
            </h1>
            <p className="font-sans text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed">
              An expertly curated selection of the world's most prestigious designers across High-Fidelity Audio, Architectural Furniture, Master Tailoring, and Clean Beauty.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="#directory"
                className="bg-black text-white px-10 py-5 font-sans text-xs font-semibold uppercase tracking-widest transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 inline-block"
              >
                Explore Brands
              </a>
              <a
                href="#universe"
                className="border border-black text-black px-10 py-5 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95 inline-block"
              >
                Browse Categories
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdyAZK1lCYJuPOVyQt2eSJ26QMiR3adOrg7zedjM7-YqPDqkO0-Ewj0DDE_jMYb7WPpt8ZrIjMYGpn4LdeHvuQhW-SyyIUWGtIkHP3DPrFxhXb5RyL4Js5GVp2YjvwJKnCr7gs8yL8V66clP-xTTjvV3np0EaOTC4AAyiPctCKw7zCgmB4G-dHuJvK2kD9cx8m5J40kyoUwICYGxEECfI7v0xxXtdLi6IMLlCez8ZEeGh6b7m_5OXDum5ae9EfAaEAX5m2qQ6vb_1"
              alt="Luxury editorial showing high-end lifestyle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
