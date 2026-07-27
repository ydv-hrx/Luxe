'use client';

import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'The curation at Luxora is simply unparalleled. Every piece feels like a deliberate choice for a refined lifestyle.',
      author: 'Eleanor V.',
      badge: 'Verified Client',
    },
    {
      quote: 'Their customer service matches the quality of the products. A truly seamless end-to-end luxury experience.',
      author: 'Julian M.',
      badge: 'Verified Client',
    },
    {
      quote: 'The packaging alone is a work of art. Opening a delivery from Luxora is an event in itself. Highly recommend.',
      author: 'Sophia R.',
      badge: 'Verified Client',
    },
  ];

  return (
    <section className="py-28 bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-black">Client Voices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-10 border border-neutral-300 bg-white flex flex-col justify-between">
              <div>
                <div className="flex mb-6 text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="font-sans text-lg mb-8 italic text-neutral-800 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-neutral-100 pt-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-black">
                  {t.author}
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                  {t.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
