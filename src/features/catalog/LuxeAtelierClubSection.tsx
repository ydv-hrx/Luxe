'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const LuxeAtelierClubSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#f3f3f3] border-t border-neutral-300 font-sans">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black mb-3 sm:mb-4 font-normal leading-tight">
          Luxora PRIVILEGE
        </h2>
        <p className="font-sans text-xs sm:text-base text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
          Subscribe to receive early access to limited collections and private invitations.
        </p>

        {submitted ? (
          <div className="p-4 bg-black text-white rounded-md flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Welcome to Luxora Privilege</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 border-b border-black pb-2 max-w-md mx-auto w-full">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className="w-full sm:flex-grow bg-transparent border border-neutral-300 sm:border-none focus:outline-none font-sans text-xs font-semibold placeholder:text-neutral-400 px-4 sm:px-0 py-3 sm:py-0 uppercase tracking-widest text-black"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-black sm:bg-transparent text-white sm:text-black py-3 sm:py-0 px-6 sm:px-0 font-sans text-xs font-semibold uppercase tracking-widest hover:opacity-80 transition-opacity shrink-0 text-center"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
