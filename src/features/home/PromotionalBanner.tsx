'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const PromotionalBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 sm:px-16 py-28 max-w-[1440px] mx-auto overflow-hidden">
      <div className="bg-black text-white flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-12 lg:p-20">
          <span className="font-sans text-xs font-semibold text-white/60 uppercase tracking-widest mb-4 block">
            Limited Time
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
            FLASH SALE: THE WINTER ARCHIVE
          </h2>
          <p className="font-sans text-lg mb-10 text-white/70">
            Secure exceptional pricing on seasonal masterworks. Availability is strictly limited to current stock.
          </p>

          <div className="flex gap-12 mb-10">
            <div className="text-center">
              <span className="block font-serif text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">Hours</span>
            </div>
            <div className="text-center">
              <span className="block font-serif text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">Mins</span>
            </div>
            <div className="text-center">
              <span className="block font-serif text-3xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-50">Secs</span>
            </div>
          </div>

          <Link
            href="/shop?sale=true"
            className="inline-block px-12 py-4 bg-white text-black font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            Shop the Sale
          </Link>
        </div>

        <div
          className="md:w-1/2 h-full min-h-[400px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5bSbryAnl-Zi__M3x_TLHVppOvZK92SNrKSL8wgow-XbwM6VQuie24EY7teyvwm23e0hzXjSRh5LEYzoA1t5AzAf5RF4olw9JkTQw0QNVHg9nkp_McRfNcgbtW6lyIb4VM_vF4pDwLpbJeGr-iUCnzrZplwQGqnoP8RUIspD5QM2teWqm0smVU57tG9yabQ_b_C5zF1zvm3gofap36hzv28lc1vam5bExCVUTvsykinxUmVheVXcDWeDZM9OuO8gATMbvnqEhFp')",
          }}
        />
      </div>
    </section>
  );
};
