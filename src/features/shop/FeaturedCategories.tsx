'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      title: 'Fashion',
      subtitle: 'Refined Apparel',
      query: 'fashion',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2BOAQc3udSlxnJ7IALhFDz97eNEH1F9Gqbh1QBjjFb8W009Z0ExZVsRcltevHJzyQcMytRk-KIBxH0BaxnYhip0Qw0ZOB1N-4StU8eeFxwf4X4hzVwqc4C_3_Bxxsjgaf-hHBF80FZ1Lznu1L-YFHuX_PKvA332IUq91jSeXlEzZgkunH8mnHb6aISw9149IGEhBMwNuDLCmWtE7CbU_VRtshAXqYPgH_SRaTQQbeeMKA2CZCLJtJmKhyHNlyitNf3Luthfi6kn8r',
    },
    {
      title: 'Technology',
      subtitle: 'Precision Tools',
      query: 'electronics',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAmWeih8YKgB48vdw6SgJzqZ3NKMzTaEC2tf1p-yKQzWbZW-eXPrIHSQZxDVD0RIYUrT3GD4Py1cZsUjibqI-LbCcmuUdApOOqn-tWloYHG5IguP8VcqXEYYiU7gOvG0BWKbNx6zofgnrUnetX6eL66Ucy4cYTE6oQw-gkkp8yTRaJugavjdZa4io-LliGzmvtR3-ySY5lnrrcR1Yr2HPs8Oa9KYpSOWwM5mDubfpLigi5B79yzTGqS6qbaSHhfQUXICOC1vNeRt7BB',
    },
    {
      title: 'Home',
      subtitle: 'Curated Objects',
      query: 'furniture',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCJKZm-JQ2TWke3SnvTDGhOIiQkAo0Vvu_bZKs5LNb81ZhO3Lfo87iuYnn9Mxgip4fzWlD0mwkAJ916GWJhLy4nyJl_vtirkvQXDD0xwthb_KG3vtTUN4Anjqed8edUcUKLGmuYHcH30GH1BoDSgR8QKhor716aFL6j1yUTIdw6oMxr8bR3udAbmOrWixp5rFyKRCX8a7BRNouKCc2Fv39MEdt6n2QEJhu7FjxSTLxDn2v2ALEx3LgjANF8fRgnpj7Y-nXtK2TE2tjQ',
    },
    {
      title: 'Furniture',
      subtitle: 'Timeless Designs',
      query: 'furniture',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCEc-O_A-1X4f2htmR0dyhqQywur_IY9o9Szb1UcEDuy7NGDTexXJ2qHKWRRn7NWm4ZJBDBNC5PK422VkXcwBw85tzRNssOn7l28ID5TDJkve-5TrYe1FEiM-8eO9aoiQv1Nb1VRHgR_KxaMTSpGF6x1jdLnH45RuvvEYc-vOiSyflA7YDl849ge-RXW0Ey3XytSnxlhHrsjbddKY4w2Y3NQCMV9dfVSsTPFkoBuBbccDN0ZylcEQrW5jhR42z5mhZGqYd8qyEN6Blq',
    },
    {
      title: 'Beauty',
      subtitle: 'Elevated Essentials',
      query: 'beauty',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBfLzOX6dk8t5QeALug1gZX1WH7TawzIt_GmXnwSG2QmUunWxGHzpkWQQxd7qrUvK3YjjgZUUxp5aMSILpEEnah-yr5UuCxWausT3UrakwpJC6pjEHTY4IbDc8cNf-2kpRkF_5wTyAliZqoaCE0iykeD8HzTeKtKJuDL5Zj16LIOKO-AzRyIGBMt43FQ7lbry5ui8chVG0LdTaAu-_2RVGMepT9Ux3YehZMAZlWFb-hSwR8BzF6N3DjW_WU2wxfaxULh9dbiiOCeXi-',
    },
    {
      title: 'Watches',
      subtitle: 'Iconic Timepieces',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAkcJTvMVcT7W1EjIXw0t2nzPPwbB_2p3eSo05FJ9Z1c2a907xTu1zjAjOQl-KMp0hRIe3YBfvGW00tbq4Phzy9x0i_JmNm1vINJ9ke0FgDGRNo9Xi4sCd5B5N3Zv4jDU69-bItPdPzo1L12tFlb3IkS6kOFGr9LnsZ91-sSSVVZZss3u2qOXdNHKPugiQ0pAIttJ7a7M01BGikafjRLKGurtJuZx6LqQTi1dctaoKOho1sUaEnQAa5pG8MBLlSq-9CJXLkyhOzF-vn',
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto font-sans" data-purpose="featured-categories">
      <div className="flex justify-between items-end mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif text-black font-normal">Featured Categories</h2>
        <Link
          href="/collections"
          className="text-[10px] sm:text-xs uppercase tracking-widest font-sans font-semibold border-b border-black pb-0.5 sm:pb-1 text-black hover:opacity-70 transition-opacity flex items-center gap-1 shrink-0"
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
        {categories.map((c) => (
          <Link
            key={c.title}
            href={`/shop?category=${c.query}`}
            className="aspect-[4/5] bg-neutral-100 relative group cursor-pointer overflow-hidden block"
          >
            <img
              src={c.image}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-base sm:text-lg font-serif leading-tight">{c.title}</p>
              <p className="text-[9px] sm:text-[10px] font-sans uppercase tracking-wider opacity-80 mt-0.5">{c.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
