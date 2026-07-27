'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedPartners: React.FC = () => {
  const partners = [
    {
      name: 'Bose',
      category: 'Audio & Tech',
      count: '124 PRODUCTS',
      description: 'Masters of sound engineering, defining the future of silence and acoustic clarity.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBo_4FCGdPBgymgFJILoYR1giQ3tuNXBhfB-hRYdYnjKlBBeCssgu85Nyu0d6oCWBSAO7Z-80HTZ8PKKtAAaVz_Q9VupujeM_lmxhOPFHNwvLvRRtoAm4bJ3TDLY3NfAgy30AmO0Grn9S5dJ_AxtzqauVrUKgcTpePHpW6xPPQ6U7TxPc10sgR51B2yzAypfhXBaCISnkLlIUj7KF9MFV6ogZ7VCUEVcCXCf516f4W6Y0E29yRYfMLXIcBYbpuACQQ5n9pPxKIHyeX6',
    },
    {
      name: 'Aesop',
      category: 'Beauty',
      count: '86 PRODUCTS',
      description: 'Meticulously formulated botanical skincare and evocative fragrances for the discerning.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDuWhoQ1X9mZN0KXyQEPnj0AqePqrpW_7Gckseck6vHOHF9QY9tMzRtRCWEDiW5RY1LdnFRF2vkeLLdIuC3TeCqmWsV-eQUoo2kSgRZv8k1ST3kum1msTe7lQVbobic1mkGkWF0p64WjuZ2I_MZ3PrqYGwqlt3L10fXEsC6a5NhocyybbJrCDEtmSi-mHaPGzLDoMPxqH_TdLImRfral7Dpt3WZW9swzTQLwL-je6XTLk6eo2fYZIA6gBxAV2ByQ5WJh7LQQ2jUQM_L',
    },
    {
      name: 'Saint Laurent',
      category: 'Fashion',
      count: '312 PRODUCTS',
      description: 'Defining the modern wardrobe with a heritage of rebellion and Parisian elegance.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDdXRTXrcuNFbFxxuQiuXNzp5kcv1xTC1SYKUUObYN4ksADxJ04y09pv_FCBygGIzPtMmVlonKHfxbuBZuDTD87H2aJUUhJamCXNU077JkTLYQxhdI2XwE2LHE0pNzyJIAebcrnGta2Uuq4rFawxR3Baepbq6Zh47UJPuuZQsthchsESomKP2uZ5Qj3bzwGPIJwKNIZGSgHxsydYEC8pptMsRBjGvquu4pvXOpT99tstkgH8xdP-TixmOFV-sOV_shIC6sndesc3-Ld',
    },
  ];

  return (
    <section className="py-28 bg-[#f3f3f3]">
      <div className="px-6 sm:px-16 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black mb-2">Featured Partners</h2>
            <p className="text-neutral-500 font-sans text-base">The season's most requested designers</p>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group cursor-pointer bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-[10px] font-sans font-semibold uppercase tracking-widest text-black shadow-sm">
                  {partner.category}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              <div className="p-10 border-t border-neutral-200 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-serif text-2xl tracking-tight text-black">{partner.name}</h4>
                  <span className="font-sans text-[9px] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {partner.count}
                  </span>
                </div>
                <p className="text-neutral-600 font-sans text-sm mb-10 leading-relaxed">{partner.description}</p>
                <Link
                  href={`/shop?vendor=${encodeURIComponent(partner.name)}`}
                  className="mt-auto w-full border border-black py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:shadow-lg inline-block"
                >
                  Shop Brand
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
