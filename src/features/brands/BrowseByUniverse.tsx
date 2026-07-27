'use client';

import React from 'react';
import Link from 'next/link';

export const BrowseByUniverse: React.FC = () => {
  const universes = [
    {
      title: 'Audio & Tech',
      count: '48 PREMIER BRANDS',
      category: 'audio',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZWNUkrgDse2cPsv37j59ba7yySB36gpSD6Q-nCZ-HHOG5oQGqi-2Z4CM3oxDe6DnGZ5UA1AWKKiXBU0MDnEEElPo-6LgraDr8fkhEQ7f6ZSFymQcYv9lgciold5OtStFa_ZmEnOvr6LMDdD8SRg99wzQKKGqZ1xuwaZ2VaZ4i722FB9EB3UWpq7J0N9lX5aWDbXaepvD2cHZRCcPg2l19tFa76W6PRTC2gyrC36AchSD92z5NjI81ziYQun0426aTNQr2tOQAzu0V',
    },
    {
      title: 'Home & Living',
      count: '32 PREMIER BRANDS',
      category: 'furniture',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCvw2buFWiy53CoUOKZCITesChOE3iK3xC3F0uIzyuFJJ_AYfttlZIq6b74IT0h4rNh2-WQqVeqfznJYN-P1pCS3GfCiw6E8C9wTDoOqncSr_TEqENfHZY7FNIPFR0xBf6HTtOX8v9FKipujUgnRw4oKegR9tjrlw0e_C3a36JnX51S4b5pb6bzYv0Ns0WgSfzQNsinryVhLZYJ0NUGHgMi5SxzEy9e89x7yzY6gi6VKv5K8ZU0RLSCHrWcyBBl3KQTudL2BIyHYtCE',
    },
    {
      title: 'Kitchen',
      count: '15 PREMIER BRANDS',
      category: 'kitchen',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuACFh_zyIPCGTuTEBw9o-nF6Op_cpJTSIFxGuK4woQPmaqcoTj0DechhF5QlftLuQ2R2a9Wgh4BIcs0ohpDJbIgef0kMM0IHloeOmIUQNiCmsLC9vtb1kdrlIWdJMIGbTS3h8U6oEJRdhR3u1KKlwKQolz9DkYdMHaYDvHInTNGDO5OKjCafbnSlNWjZN_KVqbkFC8RwL3BTFY5CnUlfYJ0cdIxRuEPP-wutnjbjYhweNgrVbI-jlR_uo4l1oubsBIZRoQTKsfPxW4X',
    },
    {
      title: 'Beauty',
      count: '24 PREMIER BRANDS',
      category: 'beauty',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVYaigVVXFOsmNGZAo0M8PgotaJX43cOxcWIXYnO7gfzwS-5J6uuUKZEpdT4cOWXL-RY_sNG_m75GaVzutyM5bE9uguEYwTHaUm3kWWge3SBeXq3KT2OQOrkZ_3eR7e4M39qkPL90OyeuuyZpO5ZUJmufYvkIYuWP-gxwJ88ae9UYxBk_4gUXHYE9ZxXRCWcL1exy0uPIfcLZN6Z6q65l9fyqzDohKfH1vB87qo1Ozhssot5HBXrP1yEq_fOKuJfgHZCLUdu1cQLG',
    },
  ];

  return (
    <section id="universe" className="py-28 px-6 sm:px-16 max-w-[1440px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-serif text-4xl sm:text-[56px] font-normal text-black mb-4">Browse by Universe</h2>
        <p className="text-neutral-500 font-sans text-lg max-w-2xl mx-auto">
          Explore curated selections across every facet of a sophisticated lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {universes.map((u) => (
          <Link
            key={u.title}
            href={`/shop?category=${u.category}`}
            className="relative h-[550px] overflow-hidden group cursor-pointer rounded-xl block"
          >
            <img
              src={u.image}
              alt={u.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h5 className="text-white font-serif text-3xl mb-2 font-normal">{u.title}</h5>
              <p className="text-white/70 font-sans text-[11px] font-semibold uppercase tracking-widest">{u.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
