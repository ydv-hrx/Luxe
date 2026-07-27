import React from 'react';
import Image from 'next/image';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-8 max-w-[1440px] mx-auto w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Artisan Image Column */}
        <div className="md:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lumina-level1">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACxSSpCfSOeEQORhJGPAxXLo0I_akoNrWKCjQGHb0bWPmWhnowPLsBzoYXYnkySUYmVwX9K93Mtut4JkQE5OpTbIUWfjb-He57Yo_sOrr3l8lBWXxFjMzyT4HG04FMB5zdtphBA9jIM9NfADrD2uznzzpWRXc9vjgyztd7ZnfaykK2C_HWoEUf-4gdSQM0j4jGcNIVjl2zcXBEHGSPv6lx8dcamgcnk9GqEF-1A1Ptkmjyryjxq3uvVuixeNQzZFnN5essqv3VCqpa"
              alt="An artistic close-up of an artisan's hands working on a piece of light tan leather"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          {/* Decorative Offset Block */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-neutral-200/40 rounded-3xl z-[-1] hidden md:block" />
        </div>

        {/* Story Text Content Column */}
        <div className="md:col-span-6 md:pl-6 space-y-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 block">
            The Maker's Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-tight font-normal">
            The Handmade <br />
            <span className="italic font-serif font-normal text-neutral-800">Legacy</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Each piece in our collection is the result of hundreds of hours of meticulous labor. Our artisans, many of whom are third-generation masters, utilize techniques that have remained largely unchanged for centuries.
          </p>

          {/* Thin Editorial Divider Line */}
          <div className="h-[1px] bg-neutral-200 w-full" />

          {/* Guarantee Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 block">
                Ethically Sourced
              </span>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Traceable materials from sustainable partners.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 block">
                Lifetime Promise
              </span>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Complimentary repair services for all leather goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
