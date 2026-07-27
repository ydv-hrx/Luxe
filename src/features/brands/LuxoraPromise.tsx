'use client';

import React from 'react';
import { CheckCircle2, Award, Globe2, ShieldCheck, Truck } from 'lucide-react';

export const LuxoraPromise: React.FC = () => {
  const promises = [
    {
      title: 'Official Brand Partners',
      description: 'Direct relationships ensuring the highest standard of service.',
      Icon: CheckCircle2,
    },
    {
      title: 'Authentic Products',
      description: '100% certified original items with manufacturer warranties.',
      Icon: Award,
    },
    {
      title: 'Global Brands',
      description: 'Access to exclusive collections from around the globe.',
      Icon: Globe2,
    },
    {
      title: 'Secure Shopping',
      description: 'Advanced encryption and white-glove data privacy protocols.',
      Icon: ShieldCheck,
    },
    {
      title: 'Fast Delivery',
      description: 'Priority handling and real-time tracking for every order.',
      Icon: Truck,
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="px-6 sm:px-16 max-w-[1440px] mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl italic font-normal mb-20 text-center text-black">
          The Luxora Promise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12">
          {promises.map((p) => {
            const IconComponent = p.Icon;
            return (
              <div key={p.title} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <IconComponent className="w-9 h-9" />
                </div>
                <h4 className="font-sans text-[11px] uppercase tracking-widest mb-4 font-bold text-black">
                  {p.title}
                </h4>
                <p className="text-neutral-500 font-sans text-sm leading-relaxed max-w-[200px]">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
