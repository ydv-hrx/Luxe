'use client';

import React from 'react';
import Link from 'next/link';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto min-h-0 md:min-h-[580px] lg:min-h-[640px] flex flex-col md:flex-row items-center overflow-hidden bg-[#f9f9f9] pt-0 font-sans">
      {/* Left Column: Content (First on mobile) */}
      <div className="w-full md:w-[48%] flex flex-col justify-center px-4 sm:px-10 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
        <div className="max-w-md">
          <span className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 sm:mb-4 block">
            About Us
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-[60px] text-black mb-4 sm:mb-6 leading-tight font-normal">
            About Luxora
          </h1>
          <div className="w-12 sm:w-16 h-[1px] bg-neutral-300 mb-6 sm:mb-8" />
          <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
            Curating exceptional products for modern living through thoughtful design, trusted brands, and timeless craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <Link
              href="/shop"
              className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300 w-full sm:w-auto text-center shrink-0"
            >
              Explore Collections
            </Link>
            <a
              href="#our-story"
              className="border border-black text-black px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto text-center shrink-0"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Visual (Second on mobile below CTAs) */}
      <div className="w-full md:w-[52%] h-[300px] sm:h-[400px] md:h-[580px] lg:h-[640px]">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkOSjGUIYupzcL2ikdLFAeDZUXcwEMN2709ayVY8i3a2tNH5ienve4k0vQDFK60XmL9-PcCwh_WdBj8khJ0C71aeRvuSysS65N7p5R99hHemElRtNMLV8V5Eh_PFBGfCkyVQmF7OVQEbhs4U_C6P58rorWXHBM6mhtmzaBzLy268hOVgsBECB0Ah9K1NGrjhqBjIPrpXoL_y6tr3jLLrHPv-ezt7NWHyBheFwalDHLB05N55fnKYbkT854pjcpKP83w-W4OEeG-Hcp"
          alt="Luxora Lifestyle Curation"
          className="w-full h-full object-cover object-[center_20%]"
        />
      </div>
    </section>
  );
};
