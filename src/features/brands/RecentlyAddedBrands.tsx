'use client';

import React from 'react';


export const RecentlyAddedBrands: React.FC = () => {
  const brands = [
    { name: 'LOEWE', category: 'Fashion' },
    { name: 'Kvadrat', category: 'Textiles' },
    { name: 'Devialet', category: 'Audio' },
    { name: 'Polestar', category: 'Automotive' },
    { name: 'Byredo', category: 'Beauty' },
    { name: 'Technics', category: 'Electronics' },
  ];

  return (
    <section className="py-24 px-6 sm:px-16 max-w-[1440px] mx-auto border-b border-neutral-200">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black mb-2">Recently Added</h2>
          <p className="text-neutral-500 font-sans text-base">New partnerships and seasonal arrivals</p>
        </div>
        <a href="#directory" className="font-sans text-xs font-semibold uppercase tracking-widest text-black border-b border-black pb-1 hover:opacity-70 transition-opacity">
          VIEW ALL NEW
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {brands.map((b) => (
          <div key={b.name} className="group cursor-pointer text-center">
            <div className="aspect-square bg-neutral-100 rounded-full mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105">
              <span className="font-serif text-2xl uppercase tracking-tighter text-black">{b.name}</span>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500">{b.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
