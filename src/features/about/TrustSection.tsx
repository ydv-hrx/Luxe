'use client';

import React from 'react';
import { ShieldCheck, Award, Lock, Globe, Headset } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    { icon: ShieldCheck, label: 'Curated Selection' },
    { icon: Award, label: 'Verified Brands' },
    { icon: Lock, label: 'Secure Shopping' },
    { icon: Globe, label: 'Worldwide Delivery' },
    { icon: Headset, label: 'Premium Support' },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto font-sans">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={p.label} className={`flex flex-col items-center justify-center p-3 ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
              <Icon className="w-7 h-7 sm:w-9 sm:h-9 mb-2.5 sm:mb-3 text-black stroke-[1.5]" />
              <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-black">
                {p.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
