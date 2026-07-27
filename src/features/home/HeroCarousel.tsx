'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const HeroCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      eyebrow: 'Autumn / Winter 2024',
      title: 'FASHION REDEFINED',
      subtitle: 'Discover the pinnacle of artisanal tailoring and contemporary silhouettes.',
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDVaU1eyr2gZGazlstx8MMMBko4vWv9kI38VRCxMICOQ4te8YelZQzCGHYxRXhHLVFvf1wC6lZZ8ETx4ZYTVOaJxIk-5zv5hbd094hZxYrdVtLP_2XXp-1t2Adc0QacXDcX-7JHmydEtwJRmFnofZaruZq5Gd400lSPKBhDWduuZ5BG9PMm_-kVBW4cL4bwPRKFTItNnEgrMoNmehOEyEF6wI_fJO8R1KqHaiRtXBMehjdc7wIr3aORFMEof9BJMUi2Ale05s-gWc3n',
      overlay: 'bg-black/20',
    },
    {
      eyebrow: 'Cutting-Edge Tech',
      title: 'MASTERFUL ENGINEERING',
      subtitle: 'High-performance technology wrapped in minimalist aesthetic excellence.',
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDDdrW5e4fK0iVrHvMESpPSWsxkQLFxHzGe7aoRXoIwIoZ6YbjdnVIP_fPooJQWbCLM27YgpS4u4Wjpzxmv1N2IgqVs6Nqo3RyaiAOqKUhDQ8sLQ039PZOyLiL-fDC7SAZkuHQahVv6T5zMwkvErp9eUkBgNyKMdk8nbRkP0XTX4_VWnQbjQcCci6cP724sgo4vSjTRCei4QRhdAU8VNzC07HcwhjXTC85lTytamWzQFzQcD8moDwYBSAX0JzrBCkYuFRtHpTGuTQun',
      overlay: 'bg-black/30',
    },
    {
      eyebrow: 'Limited Engagement',
      title: 'SEASONAL CURATION',
      subtitle: 'Enjoy exclusive access to our end-of-season archive with private pricing.',
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBSriuSp0oJ8apCcHfmbB4BJ5UF3djpqNQFXvBNwklDNg3sDd77HAfpQiCBRbK1fW1-7tiqAH5ZRGInEzHG38P_FHOgw0BinyVJ5Tl4WT0ax5ptfMq_HjHvla3OZDyrv9UTQY-cLug79PUuGdgHoA5H9rVnVeRvs5RSSfkoaJLlbHQ6nNpTEa-dr4diRGYb2WxGTHSu2jGsDYYsSUCgZtt9mve4tXx4lw1gI4gFIaFE_NSl9WC1OKjqdewtLoEVc2L88hVVNeqTdipo',
      overlay: 'bg-primary/20 backdrop-grayscale-[0.5]',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden h-[750px] lg:h-[921px] bg-neutral-200">
      <div
        className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="min-w-full h-full relative shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />
            <div className={`absolute inset-0 ${slide.overlay}`} />

            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
              <span className="font-sans text-xs font-semibold text-white uppercase tracking-[0.4em] mb-6">
                {slide.eyebrow}
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-[64px] text-white max-w-4xl mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-white/80 font-sans text-base sm:text-lg max-w-2xl mb-10">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="px-10 py-4 bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 hover:text-black transition-all duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  href="/collections"
                  className="px-10 py-4 border border-white text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Nav Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`w-12 h-1 transition-colors ${
              activeSlide === idx ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
