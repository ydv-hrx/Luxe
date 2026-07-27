'use client';

import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';

export const LuxoraAIAssistant: React.FC = () => {
  return (
    <section className="bg-black text-white py-28 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl sm:text-6xl text-white mb-6 leading-tight">
              Luxora AI Shopping Assistant
            </h2>
            <p className="font-sans text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              Experience a new era of shopping. Our intelligence engine analyzes your aesthetic preferences to curate a personalized selection from thousands of premium items.
            </p>
            <Link href="/concierge" className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <Bot className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
                Start Consultation
              </span>
            </Link>
          </div>

          <div className="lg:w-5/12 aspect-square border border-white/20 p-8 flex flex-col justify-center gap-6 w-full">
            <div className="p-4 bg-white/5 border border-white/10 text-white/80 font-sans text-base italic">
              "Find me a minimalist cashmere sweater for under $800 in charcoal grey."
            </div>
            <div className="p-4 bg-white/10 border border-white/20 self-end max-w-[80%]">
              <p className="font-sans text-base text-white">
                Analyzing the Winter collection... I've found 3 pieces that match your criteria exactly. Would you like to view the Aurum series?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
