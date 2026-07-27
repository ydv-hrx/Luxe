'use client';

import React from 'react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Premium Brands' },
    { value: '20K+', label: 'Curated Products' },
    { value: '50+', label: 'Countries Served' },
    { value: '99%', label: 'Customer Satisfaction' },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 border-t border-b border-neutral-200 bg-[#f9f9f9] font-sans">
      <div className="px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="p-2">
            <div className="font-serif text-3xl sm:text-5xl lg:text-6xl text-black font-normal mb-1 sm:mb-2">{s.value}</div>
            <div className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
