'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CollectionHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  bgImageUrl?: string;
  heroImages?: string[];
  autoPlayInterval?: number; // default 7000ms
}

const STITCH_HERO_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Fffw6tZfV95NmBJlldND0byucGSLQ9NYfV8CQUWWtRYdJx6MOC91V0c8sd97ycYd3JtQ2-HIbDfcvNUBTZOiDJS84jYrk3y5CYDQyX_KJ2T13EWxerkbP-bNXkH_6Tn_b2vs0bzMrLNjRy4wL0wvGzl31vr2miq5zHH9mLNDS6dmGJywN1RdpB1kYXYD25OuD6NwsoxlxhHetOvztHCO14QeNzsQOR2_ju1PzSM8d9J9eV-Fe4By6iB7M9SINPoBHZhO3o-H-geN',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD1INMYS3AXqabh-W0Kj9VLPdYtEI-qvHihFteQy7nrl23RW1VR97Mo4bkB2L-8saz8sodFhZV7uRwdAlMf8jmA49haevlaJqZqNr0QDT_QT7Njxq1ZXUt1rpD6SHLbhl3212rjhSVmvKLE-N-gd_v2HPVNPU4BH-0pCcArhpv0sFYiiSYeWljXFfaOKXjQDiWzpQ6He5MHvA_UCbGdZdc_LTgZPV_1Df4QqGYYUTy7PkEMTOwq4BgF5sykQEYcRqGRVdt3d9o10iVp',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAv7Upm_69PWBF1VQLMUW0UtXIfUTqpUeoHmAn-pagrUFvXLKWaSCFnSZLbJUleWRQ8Ii8w3oRYzeMJntPNmeaEo4sX-aJ-VgPyWxiy0Bc9bArFUJiScnuixIHgsGZOQb1yptwj_GSe6aB-nps987r8yWD9Z2AjpzmdWW4vcdjq1l6T9_Hmtv_IIlWJ0lnz96dyPhgIix5F6Ua10758np5vWMYCkH4cqijmjPATyNBVgPr1UwcH6OIAcgrdFnRgxp3e0zv0PM0MniN5',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsCATyvtVGWdodMWeH-I0pMcxGxf_Y8EqaATekOGFfjzF186kGB8zExTAoBAN-VVqoQteSfGkpyhQiochzm5YZmkUW8ptUpdh6R0q9_nep-XKZTdX4B6r9WFery1zn72HZsr2bJhlONYX8BpMFtEui5KZau2lWRVgJdUQ3ch7oGy4_M2Bn14RYWryzT_BJ-Xy9Em95Vtw7g7SYWzzQLXFFJ0mStQ8H8mHBQxdDVgM4VU2qyR40ijDdqJ-k-y2wHV0ndB5u9Qf3xUyu',
];

export const CollectionHero: React.FC<CollectionHeroProps> = ({
  badge = 'Handcrafted in Italy',
  title,
  subtitle,
  bgImageUrl,
  heroImages,
  autoPlayInterval = 7000,
}) => {
  const images =
    heroImages && heroImages.length > 0
      ? heroImages
      : bgImageUrl
      ? [bgImageUrl, ...STITCH_HERO_IMAGES.slice(1)]
      : STITCH_HERO_IMAGES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, images.length, autoPlayInterval, handleNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

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
    <section
      tabIndex={0}
      aria-label="Editorial Collection Carousel"
      onKeyDown={handleKeyDown}
      className="relative min-h-[380px] sm:min-h-[480px] md:h-[540px] lg:h-[600px] w-full rounded-2xl sm:rounded-[32px] overflow-hidden flex items-center justify-start text-left px-5 sm:px-12 lg:px-20 shadow-md group animate-in fade-in duration-500 bg-neutral-900 select-none focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((imgUrl, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={imgUrl + idx}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={imgUrl}
                alt={`LUXE Editorial Campaign slide ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 1600px) 100vw, 1600px"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            </div>
          );
        })}
      </div>

      {/* Editorial Content */}
      <div className="relative z-20 max-w-2xl space-y-4 sm:space-y-6 text-white py-8 sm:py-12">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/90 block">
          {badge}
        </span>

        <h1 className="font-serif text-3xl sm:text-6xl lg:text-[72px] leading-tight tracking-tight text-white font-normal">
          {title || 'Autumn / Winter Collection'}
        </h1>

        <p className="text-white/80 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
          {subtitle || 'Discover timeless outerwear, luxurious knitwear, and contemporary essentials crafted for modern living.'}
        </p>

        <div className="flex items-center gap-6 pt-2 sm:pt-4 w-full">
          <Link
            href="#catalog"
            className="bg-white text-black hover:bg-neutral-200 transition-colors duration-300 px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.25em] shadow-md inline-block w-full sm:w-auto text-center"
          >
            Explore Collection
          </Link>
          <div className="hidden md:block w-24 h-[1px] bg-white/70" />
        </div>
      </div>

      {/* Right-Side Vertical Heritage Stamp */}
      <div className="absolute bottom-12 right-12 hidden lg:block z-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 [writing-mode:vertical-rl] rotate-180 font-mono">
          EST. 1924 — MILAN
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-12 z-20 flex items-center gap-4">
        {images.length > 1 && (
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                  idx === currentIndex ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Prev/Next Overlay Buttons */}
      {images.length > 1 && (
        <div className="absolute inset-y-0 right-6 my-auto hidden md:flex flex-col justify-center gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
