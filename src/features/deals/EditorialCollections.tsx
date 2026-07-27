'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const EditorialCollections: React.FC = () => {
  return (
    <section id="collections" className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 mt-10 sm:mt-14 md:mt-16 flex flex-col md:flex-row items-stretch font-sans">
      {/* 1. Image panel first on mobile */}
      <div className="w-full md:w-1/2 h-[280px] sm:h-[380px] md:h-auto min-h-0 md:min-h-[480px] relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyAJ5CiQES7NMQdanDQtOizhJXgQ_TiVj2o2MO1LG_MwjOLSZ3yTn-nGub3tDUj8DM7wMgNcPUGT1dvmxEc2M_2iLivNeJWQMJ4YFozU7PcBbml6BD_rNiD6jWtvpEs8ucB44sSQSm0Hsmju18cItICRkt-9Qjocl96TmPmvSX7f_WNMSs6jGPPsyrCWhZoIZv98Zgim8YCNNSeGpSlF7ush6BIJBe4ydisCR0ImLqwngLrNjzzJ6i498fuOTTUiNCcd37tMTGD2aO"
          alt="Curated Editorial Collections"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Text panel below image on mobile */}
      <div className="w-full md:w-1/2 bg-[#f3f3f3] p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <span className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-500 tracking-widest uppercase block">
            Editors' Picks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
            Curated Editorial Collections
          </h2>
          <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 max-w-md leading-relaxed">
            Discover thoughtfully curated pieces from the world's most refined categories, hand-selected by our fashion and lifestyle directors.
          </p>
        </div>

        <div>
          <Link
            href="/collections"
            className="font-sans text-xs font-semibold uppercase tracking-[0.2em] border-b border-black pb-1 flex items-center gap-2 w-fit group hover:opacity-70 transition-opacity text-black"
          >
            Explore Collections{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
