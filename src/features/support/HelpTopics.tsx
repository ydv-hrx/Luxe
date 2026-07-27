'use client';

import React from 'react';
import { Truck, RefreshCw, CreditCard, FileCheck, UserCheck, Sparkles, Gift, Globe } from 'lucide-react';

export const HelpTopics: React.FC = () => {
  const topics = [
    { title: 'Shipping Info', icon: Truck },
    { title: 'Returns', icon: RefreshCw },
    { title: 'Payments', icon: CreditCard },
    { title: 'Order Issues', icon: FileCheck },
    { title: 'Account', icon: UserCheck },
    { title: 'Product Care', icon: Sparkles },
    { title: 'Gift Services', icon: Gift },
    { title: 'International', icon: Globe },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 border-y border-neutral-200 font-sans">
      <div className="px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="font-serif text-2xl sm:text-4xl text-black font-normal mb-8 sm:mb-12 text-center">
          Popular Help Topics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex flex-col items-center justify-center p-6 sm:p-8 hover:bg-[#f9f9f9] transition-all group cursor-pointer border border-transparent hover:border-neutral-200"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-black group-hover:scale-110 transition-transform stroke-[1.5]" />
                <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-center text-black">
                  {t.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
