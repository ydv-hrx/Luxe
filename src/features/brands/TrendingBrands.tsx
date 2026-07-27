'use client';

import React from 'react';
import Link from 'next/link';

export const TrendingBrands: React.FC = () => {
  const trending = [
    {
      name: 'Rimowa',
      tagline: 'The Art of Travel',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBCbCkqpbpUvrq5e1xkYjth1mShXApWYvVbC_8e-I3sVdE7E4CxsJMXCx6koSDtVG1VKp1t73h79Rp3qzdXY9cwFEGVM5r0R6xeONpowxNxxsSrIXrk8IcQnZ8K-3KqEDbeo4FqA89DwiNymuJfdtEeK82yzMcrZE43kjX1QRZ7HsFRHZXtYBtXXaZd92hwaYKJcuQRMFuAsGMX0TlSgXjH5sJUQR6zBkadgZgK8v9qC8bEWLoqsLFrf70xsKoVlfopwlXHMOLflZtW',
    },
    {
      name: 'Le Labo',
      tagline: 'Olfactory Excellence',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC7pu0QRJPlC6agH0FYJeAc4qOHtf6dmjr_akVjdC9SViARvNqBpxfjaAtQF5j_r2IVidK7Fd3n6hXeKqQw9dt1d8vN_foXgeSzP4O3Rc2kaVWsnsNct_IRt_JlOOImL9VvS-EBYHXfOiTVeHAqm7m_BO5wUnifVHj7zg_A-cIL6cTy5Xi8sf65CC2-qEb77JBC7XjwNzTCFxyavc6Acu-7Qx3y1wzR3hKlt4e2kX6GeZewuXC_5tp_tdjrCF0AQPw_CQsstPJPRE19',
    },
    {
      name: 'Bang & Olufsen',
      tagline: 'Sonic Architecture',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCuoMxt6gSUFfkimrvUEprKIAK68KUmWC0JbvzgmOVNpFvomZsC4902I2mtxjSNneV1Bt0cmk6nWEIlJDoN7IPf8pYrRdf05r5tPl5UXgCMqOSHfVv9F3lB_XcsBPav1LwaXyiSJx1mPPUo0UlVhNT2yU52-Cmg9vYcx5Ar6OZ3okcBcnB1ZFMydjqKAlPDUEvmuSrwvLqqRH3OBloy7GQDRxLO5geRpinl0XJiMkHusUIQSPT_V0WW0dEJZoG2Q8oJnkLOBQphxyhe',
    },
    {
      name: 'Dyson',
      tagline: 'Future Engineering',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZo59QxCmwJaSNnL404PbqRrSLGXLTaxdiQBQJvHmrHezgb-Fv6IgAK2ylVECBr5tzDXCvVXZaIccUQ9aTixnFw8xAXCTPVTPdjoj6XhrfZTe0bfiphpPXEblagNX3U3i6_Ttz3yHFOHRwN8APP-EKH7ktRXY-aOYcZ9Qdu6hAgzvO0dEwJ6htP1CBC6cxhIIszJtke_ftdorZ_7Eeb2EycV4fakC3Inv1VYuj7y-80PSHSz74sdsflGgsM7pxHFUqcRK5sJMxYIJI',
    },
  ];

  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="px-6 sm:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black">Trending Brands</h2>
          <p className="text-neutral-500 font-sans text-base">What's capturing global attention right now.</p>
        </div>

        <div className="flex overflow-x-auto gap-8 scrollbar-none pb-8">
          {trending.map((t) => (
            <Link
              key={t.name}
              href={`/shop?vendor=${encodeURIComponent(t.name)}`}
              className="flex-none w-80 group cursor-pointer block"
            >
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="font-serif text-xl font-normal text-black mb-1">{t.name}</h4>
              <p className="text-neutral-500 font-sans text-[10px] font-semibold tracking-widest uppercase">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
