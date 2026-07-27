'use client';

import React, { useState } from 'react';

export const DealsNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-14 md:py-16 text-center font-sans">
      <h2 className="font-serif text-2xl sm:text-4xl font-normal text-black mb-3 sm:mb-4">Stay Informed</h2>
      <p className="font-sans text-xs sm:text-base text-neutral-600 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed">
        Be the first to receive updates on new arrivals, private events, and exclusive member deals.
      </p>

      {submitted ? (
        <div className="p-4 bg-neutral-100 text-black font-sans text-xs sm:text-sm max-w-md mx-auto border border-neutral-200">
          Thank you for joining our private circle.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 border-b border-black pb-2 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="YOUR EMAIL ADDRESS"
            className="w-full sm:flex-grow bg-transparent border border-neutral-300 sm:border-none focus:outline-none font-sans text-xs font-semibold p-3 sm:p-0 tracking-widest uppercase text-black placeholder:text-neutral-400"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-black sm:bg-transparent text-white sm:text-black py-3 sm:py-0 px-6 sm:px-0 font-sans text-xs font-bold tracking-widest hover:opacity-80 transition-opacity uppercase shrink-0 text-center"
          >
            JOIN
          </button>
        </form>
      )}
    </section>
  );
};
