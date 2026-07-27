'use client';

import React, { useState } from 'react';

export const SupportNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto font-sans">
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[64px] font-normal text-black mb-4 sm:mb-8 leading-tight">
          Stay Informed
        </h2>
        <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-12 leading-relaxed">
          Join our inner circle for exclusive access to new arrivals, private events, and curated collections.
        </p>

        {submitted ? (
          <div className="p-4 bg-neutral-100 text-black font-sans text-xs sm:text-sm max-w-xl border border-neutral-200">
            Thank you for joining our inner circle.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center border-b border-black max-w-xl pb-2 w-full gap-3 sm:gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent border border-neutral-300 sm:border-none focus:outline-none w-full font-sans text-xs uppercase tracking-widest p-3 sm:py-3 text-black placeholder:text-neutral-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-black sm:bg-transparent text-white sm:text-black py-3 sm:py-0 px-6 font-sans text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity shrink-0 text-center"
            >
              JOIN
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
