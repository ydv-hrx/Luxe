'use client';

import React from 'react';
import Link from 'next/link';
import { Volume2, Armchair, Shirt, Globe, Laptop, Sparkles } from 'lucide-react';

export const DealsByCategory: React.FC = () => {
  const disciplines = [
    {
      title: 'Audio',
      subtitle: 'Premium sound',
      icon: Volume2,
      query: 'electronics',
    },
    {
      title: 'Living',
      subtitle: 'Timeless living',
      icon: Armchair,
      query: 'furniture',
    },
    {
      title: 'Fashion',
      subtitle: 'Refined style',
      icon: Shirt,
      query: 'fashion',
    },
    {
      title: 'Travel',
      subtitle: 'Journey in style',
      icon: Globe,
      query: 'accessories',
    },
    {
      title: 'Workspace',
      subtitle: 'Elevated productivity',
      icon: Laptop,
      query: 'electronics',
    },
    {
      title: 'Wellness',
      subtitle: 'Mind & body',
      icon: Sparkles,
      query: 'beauty',
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 mt-10 sm:mt-14 md:mt-16 font-sans">
      <h2 className="font-serif text-2xl sm:text-4xl font-normal text-black mb-6 sm:mb-10">Browse by Discipline</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
        {disciplines.map((d) => {
          const Icon = d.icon;
          return (
            <Link
              key={d.title}
              href={`/shop?category=${d.query}`}
              className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 border border-transparent hover:border-neutral-300 transition-all bg-[#f3f3f3] font-sans"
            >
              <Icon className="w-7 h-7 sm:w-9 sm:h-9 mb-3 sm:mb-4 text-black group-hover:scale-110 transition-transform stroke-[1.5]" />
              <h4 className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-black mb-1">
                {d.title}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-neutral-500">{d.subtitle}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
