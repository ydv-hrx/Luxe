'use client';

import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif italic font-normal text-xl sm:text-3xl md:text-5xl leading-relaxed text-black mb-6 sm:mb-10">
          "True luxury is not about excess; it is about the resonance of quality and the peace that comes from surrounding oneself with items of enduring value."
        </h2>
        <div className="w-12 sm:w-16 h-[1px] bg-black mx-auto mb-4 sm:mb-6" />
        <p className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-neutral-500">
          The Luxora Collective
        </p>
      </div>
    </section>
  );
};
