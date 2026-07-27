'use client';

import React from 'react';
import { ShieldCheck, Award, Truck, Leaf } from 'lucide-react';

export const ProductTrustBar: React.FC = () => {
  return (
    <>
      {/* DESKTOP TRUST BAR (Stitch Design 1: 4 columns) */}
      <section className="hidden md:block border-y border-neutral-200 py-16 bg-[#f9f9f9] font-sans my-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 mb-4 text-neutral-600 stroke-[1.5]" />
            <h6 className="font-sans text-xs font-semibold uppercase tracking-widest text-black mb-1">
              CERTIFIED AUTHENTIC
            </h6>
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider">ORIGINAL ATELIER PIECE</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 mb-4 text-neutral-600 stroke-[1.5]" />
            <h6 className="font-sans text-xs font-semibold uppercase tracking-widest text-black mb-1">
              BESPOKE QUALITY
            </h6>
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider">HAND-CARVED ARTISANSHIP</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="w-8 h-8 mb-4 text-neutral-600 stroke-[1.5]" />
            <h6 className="font-sans text-xs font-semibold uppercase tracking-widest text-black mb-1">
              WHITE GLOVE CARE
            </h6>
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider">INSURED GLOBAL DELIVERY</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="w-8 h-8 mb-4 text-neutral-600 stroke-[1.5]" />
            <h6 className="font-sans text-xs font-semibold uppercase tracking-widest text-black mb-1">
              SUSTAINABLY SOURCED
            </h6>
            <p className="text-[11px] text-neutral-500 uppercase tracking-wider">ETHEREAL FOOTPRINT</p>
          </div>
        </div>
      </section>

      {/* MOBILE TRUST BAR (Stitch Design 2: 3 horizontal icons) */}
      <section className="md:hidden px-5 mt-10 py-6 border-y border-neutral-200 font-sans">
        <div className="flex justify-around items-center text-center">
          <div className="flex flex-col items-center gap-1">
            <Truck className="w-5 h-5 text-neutral-600" />
            <span className="font-sans text-[9px] font-semibold uppercase tracking-widest text-black">COMPLIMENTARY SHIPPING</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="w-5 h-5 text-neutral-600" />
            <span className="font-sans text-[9px] font-semibold uppercase tracking-widest text-black">AUTHENTICITY GUARANTEED</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Leaf className="w-5 h-5 text-neutral-600" />
            <span className="font-sans text-[9px] font-semibold uppercase tracking-widest text-black">ETHICALLY SOURCED</span>
          </div>
        </div>
      </section>
    </>
  );
};
