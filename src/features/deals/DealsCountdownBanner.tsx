'use client';

import React, { useState, useEffect } from 'react';

export const DealsCountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 37, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="bg-black text-white py-10 sm:py-14 md:py-16 mt-10 sm:mt-14 md:mt-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10">
        {/* 1. Countdown Timer (Visible on all screens, stacked on mobile) */}
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 md:border-r md:border-neutral-700 md:pr-8 lg:md:pr-12 justify-center w-full md:w-auto">
          <div className="text-center">
            <p className="font-serif text-2xl sm:text-4xl mb-1">{format(timeLeft.days)}</p>
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-60">Days</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl sm:text-4xl mb-1">{format(timeLeft.hours)}</p>
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-60">Hrs</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl sm:text-4xl mb-1">{format(timeLeft.minutes)}</p>
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-60">Mins</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl sm:text-4xl mb-1">{format(timeLeft.seconds)}</p>
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-60">Secs</p>
          </div>
        </div>

        {/* 2. Description */}
        <div className="text-center md:text-left flex-1 max-w-xl">
          <h3 className="font-serif text-xl sm:text-2xl mb-2 text-white font-normal">New deals drop every week.</h3>
          <p className="text-neutral-300 font-sans text-xs sm:text-base leading-relaxed">
            Don't miss out on exceptional savings from the world's most prestigious designers.
          </p>
        </div>

        {/* 3. CTA Button */}
        <div className="text-center w-full sm:w-auto">
          <a
            href="/register"
            className="border border-white text-white px-8 sm:px-10 py-3.5 sm:py-4 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-block w-full sm:w-auto"
          >
            Join Luxora
          </a>
          <p className="text-[10px] font-sans mt-2 opacity-50 uppercase tracking-widest">It's free to join</p>
        </div>
      </div>
    </section>
  );
};
