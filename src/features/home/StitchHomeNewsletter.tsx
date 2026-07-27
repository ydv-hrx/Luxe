'use client';

import React, { useState } from 'react';

export const StitchHomeNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#f3f3f3] py-12 sm:py-16 md:py-20 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-black mb-3 sm:mb-4 leading-tight">
          Stay in the Know
        </h2>
        <p className="font-sans text-xs sm:text-base text-neutral-600 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
          Be the first to discover new arrivals, exclusive offers, and curated inspirations.
        </p>

        {submitted ? (
          <div className="p-4 bg-white text-black font-sans text-sm max-w-lg mx-auto border border-neutral-200">
            Thank you for subscribing to Luxora updates.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-lg mx-auto w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-grow px-5 sm:px-6 py-3.5 sm:py-4 bg-white border border-neutral-300 focus:outline-none focus:border-black transition-colors font-sans text-xs sm:text-sm text-black placeholder:text-neutral-400 w-full"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 sm:px-12 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 shrink-0 w-full sm:w-auto"
            >
              JOIN
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
