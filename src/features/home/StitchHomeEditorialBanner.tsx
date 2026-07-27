'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const StitchHomeEditorialBanner: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 font-sans">
      <div className="relative w-full aspect-auto md:aspect-[21/9] overflow-hidden group border border-neutral-200">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 h-full">
          {/* Left Text Panel */}
          <div className="h-full bg-[#e2e2e2] flex items-center justify-center p-6 sm:p-10 md:p-12 lg:p-20 z-10">
            <div className="max-w-md">
              <p className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-600 mb-3 sm:mb-4 tracking-[0.2em] uppercase">
                THE LUXORA EDIT
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-black mb-4 sm:mb-6 leading-tight">
                The Art of Living Beautifully
              </h2>
              <p className="font-sans text-xs sm:text-base text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
                Explore our editorial journal for stories on design, craftsmanship, and the finer things in life.
              </p>
              <Link
                href="/about"
                className="font-sans text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-black"
              >
                DISCOVER JOURNAL <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Panel */}
          <div className="relative h-[250px] sm:h-[350px] md:h-full overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA30oxuwP8-dYKzsd27rRPoQuzpiiQjjL3YFcwCA5U_TecVoCqHZx6PQz0eJKzBy0t3FkxwK-r1BO1391j4d3R1h70xo57BbP3aHYENNL8gVACSNjU-pjo_E56HeQXxdZ5hqO97ThTUR4hPlJaxB9n1tfzacKjo5Qz7HLPDorziwhQgokywxMmeaXew1YDKNErYhzVr3_ffkVwUPP7O5SnDtVfPHT4IxBSUxuHD41wLSR36KK_K9mYGSq625CvgsPLKl-zqRAylBSMk"
              alt="The Luxora Edit Journal"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
