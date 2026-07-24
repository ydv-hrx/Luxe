'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Truck, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export interface CollectionHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  bgImageUrl?: string;
  heroImages?: string[];
  autoPlayInterval?: number; // default 7000ms
}

const DEFAULT_HERO_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCwRhiYFNZTPXII_OODpbDCk2uNIBTfhFZPlms2MbPF5Bfey96Vz3Me2ucyglXAayKEcU945IXcU_dmdKVSMW5dfVqisJSST8nR62RxD1zeXEwvdM0R79z9o5_RnCjRCs8LAparRBn6Pxr6pwaE8Sp3561pscGdpS_BXwr3WQlG89vGKQvHGn5YUcgfF_cZK6pxJnaxYWQBByf8N_3tdx4oj8t_6Ve8UCWMyJaGdyNICM8_M0UL6LznTWBVo0qEeb5wGKMMHpvvQA',
  'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=2400&q=80',
];

export const CollectionHero: React.FC<CollectionHeroProps> = ({
  badge = 'Curated Collection',
  title = 'The Signature Collection',
  subtitle = 'Discover meticulously crafted cashmere, refined outerwear, and timeless essentials designed for modern living.',
  bgImageUrl,
  heroImages,
  autoPlayInterval = 7000,
}) => {
  const images =
    heroImages && heroImages.length > 0
      ? heroImages
      : bgImageUrl
      ? [bgImageUrl, ...DEFAULT_HERO_IMAGES.slice(1)]
      : DEFAULT_HERO_IMAGES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play timer (7s)
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, images.length, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative h-[580px] w-full rounded-[32px] overflow-hidden flex flex-col items-center justify-between text-center px-6 shadow-lumina-level2 group animate-in fade-in duration-500 bg-neutral-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Editorial Background Cross-Fade Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((imgUrl, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={imgUrl + idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${title} slide ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 1600px) 100vw, 1600px"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          );
        })}
      </div>

      {/* Top Spacer for Balance */}
      <div className="relative z-20 w-full pt-8" />

      {/* Hero Central Fixed Typography Content */}
      <div className="relative z-20 space-y-6 max-w-3xl text-white px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-sans text-xs uppercase tracking-[0.3em] font-medium shadow-sm">
          {badge}
        </span>
        <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.1] text-white tracking-tight font-normal drop-shadow-sm">
          {title}
        </h1>
        <p className="text-white/90 text-base sm:text-lg max-w-[650px] mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Carousel Navigation Controls (Prev / Next & Pagination Dots) */}
      <div className="relative z-20 w-full pb-8 sm:pb-10 flex flex-col items-center gap-6">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Desktop Carousel Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 hidden lg:flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-lg pointer-events-auto hover:bg-white hover:text-black transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-lg pointer-events-auto hover:bg-white hover:text-black transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Trust Indicator Row */}
        <div className="w-full px-8 sm:px-12 hidden md:block">
          <div className="flex justify-between items-center text-white/80 text-[10px] tracking-[0.2em] uppercase font-semibold border-t border-white/15 pt-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Premium Materials</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-white" />
              <span>White-Glove Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-4 h-4 text-white" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>RFID Authenticity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
