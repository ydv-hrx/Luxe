'use client';

import React from 'react';
import Link from 'next/link';

export const PersonalShoppingSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-200 font-sans max-w-[1440px] mx-auto">
      {/* 1. Image panel first on mobile */}
      <div className="w-full h-[280px] sm:h-[380px] md:h-auto min-h-0 md:min-h-[480px] relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWIbEyikkflzglp51xRONQxepD8SP4rmUpcYJcATF2yayMvFnh3CzLXQp3JlqEQjmdT-ymJgDO2hgKTITE6uEvM11jy1ojc__FdOQD6N8cNb_Zn5OdsxCYRzT1-O2BUTtdy-aRJ31kSusgUa-AQKdrIqe3UG_c3TiWMhGiXo8bmITWqdyYs-jIAHMnhGpOu6fQjA-8joMxTRhLM-h6aGE-JJAOMoxsula_Vjm0Rp3BHhKQSoDOIHNIwoLjtb6is-cEq6hDe-SfuMo4"
          alt="Personal Shopping Concierge Atelier"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Text panel below image on mobile */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 flex flex-col justify-center">
        <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 sm:mb-4 block">
          PERSONAL SHOPPING
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-4 sm:mb-6 leading-tight">
          Personal Shopping Concierge
        </h2>
        <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 max-w-md leading-relaxed">
          Book a one-on-one styling session with our luxury advisors and discover pieces curated just for you. Available virtually or in-person at our global flagships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a
            href="#contact"
            className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors w-full sm:w-auto text-center shrink-0"
          >
            BOOK APPOINTMENT
          </a>
          <Link
            href="/about"
            className="font-sans text-xs font-semibold uppercase tracking-widest sm:pt-0 border-b border-black text-black hover:opacity-70 transition-opacity inline-block"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
};
