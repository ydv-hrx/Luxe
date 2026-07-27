'use client';

import React from 'react';

export const OurPrinciples: React.FC = () => {
  const principles = [
    {
      title: 'Timeless Design',
      description:
        'We select pieces that transcend the cyclical nature of trends, offering an aesthetic that remains relevant for decades.',
    },
    {
      title: 'Exceptional Quality',
      description:
        'Every item undergoes a rigorous review of materials and construction to ensure it meets our standard for excellence.',
    },
    {
      title: 'Authentic Brands',
      description:
        'We partner exclusively with original creators and authorized distributors to guarantee heritage and authenticity.',
    },
    {
      title: 'Responsible Sourcing',
      description:
        'Prioritizing brands that respect both human craftsmanship and the natural resources they utilize.',
    },
    {
      title: 'Thoughtful Innovation',
      description:
        'Advancing the shopping experience through technology that simplifies and personalizes without clutter.',
    },
    {
      title: 'Customer First',
      description:
        'Our relationship begins after the purchase, providing bespoke support for the entire lifecycle of your product.',
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#eeeeee] font-sans">
      <div className="px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-sans text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 sm:mb-3 block">
            The Luxora Ethos
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-black">Our Foundations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="p-6 sm:p-8 lg:p-10 bg-white border border-neutral-200 hover:border-black transition-colors duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-black font-normal mb-3 sm:mb-4">{p.title}</h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
