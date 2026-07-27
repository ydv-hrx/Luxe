'use client';

import React, { useState, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';

export const SpotlightOffer: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAcquire = () => {
    const variant = {
      id: 'spotlight-1-v1',
      title: 'Default',
      sku: 'spotlight-1-sku',
      price: { amount: 2800, currencyCode: 'USD' },
      selectedOptions: { Style: 'Default' },
      availableForSale: true,
    };

    addItem(
      {
        id: 'spotlight-1',
        title: 'The Onyx Turntable',
        handle: 'spotlight-1',
        description:
          'Unrivaled sound quality meets iconic design. Experience vinyl in its purest form with the limited edition Onyx.',
        price: { amount: 2800, currencyCode: 'USD' },
        images: [
          {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFKhmgl2FQuZcyFdnO5GJpr-L6TnInJfra2oqRoD07tRnZxTFKcIjyM7pkkLJ3f2Ge325jhiDJs-HkomMuqIMQia1Ag3MtxfH9s5zG83A0wWydQN2UVCMbGLd14hJAIj_zEtpRx-pKSpTDf-TN6kdd97sJNR7fmi4miPG4BfTWVkXDFlFZJjCn5Jatm_OzeuUmvpqvbp5FIIox2oLMjtJfdhdh3NGEkswnILYvpdVbUcdeLw_WUPBdBTgaONAlv1bY-_mWPO9542UY',
            altText: 'The Onyx Turntable',
          },
        ],
        category: 'Audio',
        tags: ['spotlight'],
        vendor: 'Luxora',
        options: [{ name: 'Style', values: ['Default'] }],
        variants: [variant],
      },
      variant,
      1
    );
  };

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative h-[716px] w-full flex items-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-60">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFKhmgl2FQuZcyFdnO5GJpr-L6TnInJfra2oqRoD07tRnZxTFKcIjyM7pkkLJ3f2Ge325jhiDJs-HkomMuqIMQia1Ag3MtxfH9s5zG83A0wWydQN2UVCMbGLd14hJAIj_zEtpRx-pKSpTDf-TN6kdd97sJNR7fmi4miPG4BfTWVkXDFlFZJjCn5Jatm_OzeuUmvpqvbp5FIIox2oLMjtJfdhdh3NGEkswnILYvpdVbUcdeLw_WUPBdBTgaONAlv1bY-_mWPO9542UY')",
          }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-16 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <span className="bg-[#735c00] text-amber-200 px-4 py-1 font-sans text-xs font-semibold uppercase tracking-widest inline-block mb-6">
            24 HOUR SPOTLIGHT
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-[64px] font-normal mb-4 text-white">
            The Onyx Turntable
          </h2>
          <p className="font-sans text-base sm:text-lg mb-8 opacity-80 leading-relaxed max-w-lg">
            Unrivaled sound quality meets iconic design. Experience vinyl in its purest form with the limited edition Onyx. Precision-engineered for those who hear the difference.
          </p>

          <div className="flex items-center gap-12 mb-10">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">ENDS IN</p>
              <div className="flex gap-4 font-serif text-3xl sm:text-4xl tracking-widest text-white">
                <span>
                  {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
                </span>
              </div>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">OFFER</p>
              <div className="font-sans text-2xl font-semibold text-amber-300">
                $2,800 <span className="text-base text-white/50 line-through ml-2">$3,600</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAcquire}
            className="bg-white text-black px-12 py-5 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            ACQUIRE NOW
          </button>
        </div>

        <div className="hidden md:block">
          <div className="border border-white/20 p-12 inline-block bg-black/40 backdrop-blur-sm max-w-md">
            <p className="font-serif text-lg italic mb-6 leading-relaxed text-white/90">
              "A masterpiece of acoustic engineering and minimalist sculpture. It's more than a turntable; it's a centerpiece."
            </p>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-300">
              — AUDIO REVIEW ANNUAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
