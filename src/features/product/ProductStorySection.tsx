'use client';

import React from 'react';
import Link from 'next/link';

export const ProductStorySection: React.FC = () => {
  return (
    <>
      {/* DESKTOP STORY SECTION (Stitch Design 1) */}
      <section className="hidden md:block bg-[#f3f3f3] py-16 lg:py-24 my-12 lg:my-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center font-sans">
          <div className="aspect-square overflow-hidden bg-neutral-200">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCicOA_QbXxK7x6PiVZKjWvxc-xCnTtBPXwYvKWbN-MxmWokI8Kq6z3IWHcOuKAdMPYOSJSzrLwwjTYA45IMTAtpqPEm9J6gMS6MQFaVhAExobcImMWa5093y7hHWKbb0gCFlnlZFbtaT2Jk1d9v9eBnGzXyv0u5tbIjM5X8s1UVp8opItKUjwHXc_mshfZuybuN9GP8MgSNI9GPNYsmH7s1IkiRHusGCapRveYx6qKdwz7gC3lt9mjgQBPwU9yYs0NH4le0fdgedM9"
              alt="Art of the Form"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-6 leading-tight">
              The Art of the Form
            </h2>
            <div className="space-y-4 font-sans text-sm lg:text-base text-neutral-600 leading-relaxed">
              <p>
                Each vessel is born from a single block of Tuscan travertine, hand-selected for its unique geological history and tonal consistency.
              </p>
              <p>
                Our artisans employ traditional subtractive carving techniques, slowly unveiling the organic ripples that define the series. This process ensures that no two vessels are identical.
              </p>
              <p>
                Guided by the philosophy of 'Wabi-Sabi', we leave the natural apertures of the stone visible, celebrating the perfection found in nature's irregularities.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 font-sans text-xs font-semibold uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity inline-block text-black"
            >
              DISCOVER THE ATELIER
            </Link>
          </div>
        </div>
      </section>

      {/* MOBILE STORY SECTION (Stitch Design 2) */}
      <section className="md:hidden mt-16 font-sans">
        <div className="aspect-square w-full overflow-hidden bg-neutral-200">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa3JyTtjDhXU-dUo5FEBEeLNKh-w6g72en5p8bVDHpdl_ANpfq1GcsfRk3ZvNFXkiJG7Zm5XUJXVQIvFS-3BZjlw6HZVpLee51Oc7j-rVjHY4cSuvWDrZWXXjpxHbIWBX2_LQ5_gGvB4z_cAstkyyAdM7z3uBAMIjZLQVexEet98JcvZ1Yx6yblvKWuV_avdR-AHCSl4qsBetJ6yZPxm8A9fpl7uiajxZNRXdL0I06-LL1Wy2QLKR5CPU5sd3_LhLyP--1EyGSgvcd"
            alt="Born from the Earth, Finished by Hand."
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-5 py-12 bg-white space-y-6">
          <h2 className="font-serif text-3xl font-normal italic text-black leading-tight">
            Born from the Earth, Finished by Hand.
          </h2>
          <p className="font-sans text-sm text-neutral-600 leading-relaxed">
            The Sculptured Travertine Vessel is more than an object; it is a conversation between ancient geology and modern restraint. Sourced from the legendary quarries of Tuscany, each block is selected for its unique rhythmic patterns and structural integrity.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="px-8 py-4 border border-black font-sans text-xs font-semibold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all inline-block"
            >
              DISCOVER THE CRAFT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
