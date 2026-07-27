'use client';

import React from 'react';


export const SupportHero: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-0 md:min-h-[540px] lg:min-h-[620px] items-center bg-[#f9f9f9] pt-0 font-sans">
      {/* 1. Hero Content (First on mobile) */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 max-w-2xl">
        <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 sm:mb-4 block">
          LUXORA CONCIERGE
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[60px] leading-tight mb-4 sm:mb-6 text-black font-normal">
          How can we assist you today?
        </h1>
        <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 max-w-md leading-relaxed">
          Welcome to the Luxora Concierge. Our specialists are here to provide a seamless, personalized experience with attention to every detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <a
            href="#contact"
            className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors text-center w-full sm:w-auto shrink-0"
          >
            CONTACT CONCIERGE
          </a>
          <a
            href="#faq"
            className="border border-black text-black px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-center w-full sm:w-auto shrink-0"
          >
            BROWSE HELP CENTER
          </a>
        </div>
      </div>

      {/* 2. Hero Image Column (Second on mobile below CTAs, Right on desktop) */}
      <div className="h-[300px] sm:h-[400px] md:h-full relative overflow-hidden w-full">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuApdAefXhIAgvZsIMxqfkKDzrIaS7D-LVCjZWCTCdQ_GAtplGvEz8TtTww-7paoFhsoiEDGHEq2BlxLG9PLVSplD3Yw7W33fG4Z0NLzuQQdD4DTopRyv2sKadu5OJj5R-9hPVVt1jJwG5oJxbMMUxm4Zplx8AoYMJpUZTK55LV2OA5G7xWdJ1uh67h1IsEXm5HppdZ0FHIktQBAApfL_WC31TVMk7rNQFLx6L7m5Zp6HVUwJXe4K6N2yMgoM3OOxamtgL3JYLuIOuhc"
          alt="Luxora Concierge Unboxing"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
