'use client';

import React from 'react';

export const CustomerVoices: React.FC = () => {
  const testimonials = [
    {
      quote:
        '"Luxora has completely changed the way I shop for my home. I no longer spend hours filtering through endless mediocre options. I know that if it’s on Luxora, it’s already been vetted for quality and design."',
      author: 'Eleanor V.',
      location: 'London, UK',
    },
    {
      quote:
        '"The attention to detail, from the website\'s clean interface to the premium packaging and the white-glove delivery, makes every purchase feel like a curated event. A truly world-class experience."',
      author: 'Marcus K.',
      location: 'Stockholm, SE',
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#f3f3f3] font-sans">
      <div className="px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-black mb-8 sm:mb-12 text-center">
          Customer Voices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-6 sm:p-10 lg:p-12 bg-[#f9f9f9] border border-neutral-200 flex flex-col justify-between"
            >
              <p className="font-sans text-xs sm:text-base lg:text-lg italic text-neutral-800 mb-6 sm:mb-8 leading-relaxed">
                {t.quote}
              </p>
              <div>
                <span className="font-sans text-[10px] sm:text-xs font-semibold text-black uppercase tracking-widest block">
                  {t.author}
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
