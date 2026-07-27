'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CategoryCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: 'Outwear',
      count: '42 Items',
      query: 'fashion',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaKFPnpou-kX-GdOuaduy3XwPfkWteYKg0aMw0RWWLYXoyLZ2ZRtSKvWXKh8LvvtdAQVap-WAE7adUUPfZkVB2534gyhPJ6m3a6OkAt2JfQKfJX4juCRaz8T6zY6Jzdu-BfLYskVpeKTZKrBQ5FOjHHSTHDu4IJgU2Zz0dl4s25zRvJgT6_aITJy0wUqQiWEGlebwE3hPpcAH5mQLvctNtMMENzObNiiUtA3IpBDKtCODUgVtsUEiMT2U708sPQi6pfEqn9pWZ9yX4',
    },
    {
      title: 'Knitwear',
      count: '28 Items',
      query: 'fashion',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCUrwCt-hpuECRvwJuXCW-bgwT9DoBK3Mn_eosmUTRRLCHbSvniS8EvglZ17HZjrGhmQTjEtRvNAwcoGWSj5HuEUU2k4A12x7Zfqg-YGLBAwCJ-bTyH1YgLr9TLG0W21MhcgHLR_3TskxkOy0vGGI_aFXl7odxWNyzESdGRBvmZoBv9RoW1aYRVuAt4K9-YCGAUAM6eZaSWElWJwv8jDvPMi6OcyWajil9UGIPggiJK_5wawcX88k1ixUTW1dpL9hXIhahVKi_WP7HS',
    },
    {
      title: 'Footwear',
      count: '15 Items',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAFfKyfOJUHptmpZjH8UdZxyLS5rBVPJtSg1bmnklCPhbRFzZAeuMoUgkb1kTBoJ44xC79nbAUx6hWaVz_fS9l6zKuuPGuN_12lPYvc9LfsRCFQfF3V5Ibo-iVmJVEEM2_x-F4byfBvB236W8hn7PLOj3Oo1t_MBfI0TnTXEZUEuXj6YysCslo9q29-lNRRQbzeKp4d3s3SDIEaKngGdvEIM6K3wjtqyfMhUazXxIi3Haro1jEBEFJp2qWsUFaI0TzGF1SmTEPo-YMC',
    },
    {
      title: 'Accessories',
      count: '39 Items',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAm5mlVfV-fE35UXdipHuxWz0UCVcD2pds8xCzfjzqAXdJGV4nHPiy3Wk8TEfglyZ-cDbtypLHFyz9Xj5-m-Yp2Nre6qssWeGa0aNTfF3EWeBNV4kOGP2Dd1PkmSjDsiokQw6OaoFpK35DS37aw44CxtOw2Z_DyP2vWwPvLJn2CV5V14F9Yy04_dhV3Tca10_SLEqd9MyeBzFFXpxJ23ZPVG4E0DscR28jTRyhxO7-D1EYKrgXm3y0_PQ0wznO5e9oab8RMXv2X5Ld4',
    },
    {
      title: 'Bags',
      count: '18 Items',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_44xnVVr4zM7UYa7y_je7Dh_UWGGuRIKuejpesherdgci_s_c-LalMcjqoiZps66UVwOvsO4TR5KQYQ-5Vm5EoUBd5GiapMhO-w7ffLVIRXJDWxTWnC_OXp9QSiF6q-NAQR7M58DGJNewhRACwYRLqT3LIc-RV0Nt3urapWixP3E0wMP5uN-izXRXbPY3zj61x-yqQUfyG3K0IXH98P3_4RxsX4TU01zIuA9RmjC42vF5MDCh6JptVZ1TyPB1fGG_vWpjQBACyUHw',
    },
    {
      title: 'Watches',
      count: '22 Items',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCMH_LEP0pWN8v_iE3MqHe1oo79Z1gQ78OQQfB6KWZGywWIjMYqcpaDoLjsHf08WpzHBQF6t4V0mIbpxkUx4MAztaO0igZSiTbb6GX1rvW0VCNmWRz0IYzdVo4SD85vzV8F2J_fauF78HKtMIEvSVUDoqXZfoxsPffuxNTVFKbQOUGg-vS1V1rIXngbfeWFgg_QUoQRWdVl5N0FpJ8eQf0U6Te8qg0nWK0k9QssA7EI9Rg1hrdNX1orJdc59WqCHo_jAjxqGyCqELSD',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto overflow-hidden font-sans">
      <div className="flex justify-between items-end mb-6 sm:mb-8">
        <h2 className="font-serif text-2xl sm:text-4xl text-black font-normal">Shop by Category</h2>
        <div className="flex items-center space-x-3 sm:space-x-6 shrink-0">
          <Link
            href="/collections"
            className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest flex items-center hover:text-[#735c00] transition-colors text-black"
          >
            <span className="hidden sm:inline">View All Categories</span>
            <span className="sm:hidden">View All</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1" />
          </Link>
          <div className="hidden sm:flex space-x-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-9 h-9 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors text-black"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-9 h-9 border border-neutral-300 flex items-center justify-center hover:border-black transition-colors text-black"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto scrollbar-none gap-4 sm:gap-6 pb-4 snap-x">
        {categories.map((c) => (
          <Link
            key={c.title}
            href={`/collections?category=${c.query}`}
            className="flex-none w-44 sm:w-56 md:w-64 group cursor-pointer block snap-start"
          >
            <div className="aspect-[4/5] overflow-hidden mb-3 bg-neutral-100 relative">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm sm:text-base font-semibold text-black">{c.title}</span>
              <span className="font-sans text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest">{c.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
