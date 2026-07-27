'use client';

import React from 'react';

export const AboutStory: React.FC = () => {
  return (
    <section id="our-story" className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto font-sans">
      <div className="grid md:grid-cols-12 gap-6 sm:gap-8">
        <div className="md:col-span-8 md:col-start-3 text-center">
          <span className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 sm:mb-4 block">
            The Vision
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-black mb-6 sm:mb-8">
            Curation as a form of respect.
          </h2>
          <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed text-left md:text-center">
            Luxora was born from a simple observation: the world doesn't need more products, it needs better ones. We believe that every object in your home and every piece in your wardrobe should tell a story of intent. In an era of disposable convenience, we stand for the enduring power of quality. Our mission is to bridge the gap between discerning individuals and the craftsmen who refuse to compromise. We don't just sell items; we curate experiences that elevate the everyday.
          </p>
        </div>
      </div>
    </section>
  );
};
