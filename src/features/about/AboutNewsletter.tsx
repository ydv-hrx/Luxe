'use client';

import React, { useState } from 'react';

export const AboutNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto border-t border-neutral-200 font-sans">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl sm:text-4xl text-black font-normal mb-2 sm:mb-4">Stay Curated</h2>
          <p className="font-sans text-xs sm:text-base text-neutral-600 leading-relaxed">
            Join our private list for exclusive access to new collection launches, brand stories, and editorial features.
          </p>
        </div>

        <div>
          {submitted ? (
            <p className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-black uppercase">
              Thank you for joining the Luxora list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full sm:flex-grow bg-transparent border-t-0 border-l-0 border-r-0 border-b border-neutral-400 focus:ring-0 focus:border-black placeholder:text-neutral-400 font-sans text-xs sm:text-base text-black py-3 sm:py-4 outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-black sm:bg-transparent text-white sm:text-black py-3.5 sm:py-4 px-6 sm:px-0 font-sans text-xs font-semibold hover:opacity-70 transition-colors uppercase border-b-0 sm:border-b sm:border-black tracking-widest text-center"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
