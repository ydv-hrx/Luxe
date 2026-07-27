'use client';

import React from 'react';

export const ArtOfCuration: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 font-sans">
      <div className="flex flex-col md:flex-row items-stretch max-w-[1440px] mx-auto">
        {/* 1. Image first on mobile */}
        <div className="w-full md:w-1/2 h-[280px] sm:h-[380px] md:h-auto min-h-0 md:min-h-[480px] overflow-hidden">
          <div
            className="w-full h-full min-h-[280px] sm:min-h-[380px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDnLCW3jkmsLLiQkjF3cCPSt1W3P-T1WD_RnhLkqJfJb9jqsukuTHKgeBG5nvOaXKDenGLVoAKXx29BzxHwoDobSSuE2uGdm0p_7vOT8AtPoN_aqNSt1Qba9VCjAzhTFlrOqdAkbS2fuxIq5jlYBSY2tXPyuP_yJMQc7YZFOxfRr65mYsnKcigNGV7CGbOCrdjPjAV0b-kvIBgPMXuxTXtcGTOMEwAVi9oX2UEKyAhlczDX7Zupw8KBtKVJGTsp9asCuWrJlreQf4u')",
            }}
          />
        </div>

        {/* 2. Text below image on mobile */}
        <div className="w-full md:w-1/2 bg-[#f3f3f3] p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <span className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 sm:mb-4 block">
            The Standards
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-6 sm:mb-10">The Art of Curation</h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h4 className="font-sans text-[11px] sm:text-xs font-semibold text-black uppercase tracking-widest mb-1.5">Design</h4>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Objects that balance aesthetic purity with functional necessity.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-[11px] sm:text-xs font-semibold text-black uppercase tracking-widest mb-1.5">
                Craftsmanship
              </h4>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Honoring techniques passed down through generations.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-[11px] sm:text-xs font-semibold text-black uppercase tracking-widest mb-1.5">Innovation</h4>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Forward-thinking solutions for a contemporary lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-[11px] sm:text-xs font-semibold text-black uppercase tracking-widest mb-1.5">Longevity</h4>
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Resisting trends in favor of items built to endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
