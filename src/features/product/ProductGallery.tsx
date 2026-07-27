'use client';

import React, { useState, useRef } from 'react';
import { ImageAsset } from '@/types';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProductGalleryProps {
  images: ImageAsset[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const displayImages = images.length > 0 ? images : [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6AsbxVFi4XFiWa2RA6w-Jz6dAwHdFNHPHhBcvhuCIpN9R2IIczOghjskHAYA2agULLwDdzzG25xc35_l1d2KsfhA2B4fujiCo88bthGjCaTTR9j8ipHopOkJ8NV1ah42HtElhXm3zU5zl3tAPMxbFJmR3KEoM0DYadaSqRB3fkf6bGC31aL47FRb6X7rdf2P1BU-unBg3NPB0Ir38cyrYz1ndRqIQLFpfIjaMO8O4Q6Z-HwU1T1AKNYwoYnisQhXzFi-cC0Wx0v7k',
      altText: title,
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASNlc8kSAtUuy_Y6Eo6R4Prx0tyAxQJVY2peR7ELsaW7ffMgBWXb8fUrHalJTNG8-69I8fSc3cvao2mrOtwbYl1dOG10zmQh6NPi3aW-AxMPoXvRxTiAGx7ywgoibX_aJmsiaE3wV0-4Bjckkyz9Zba5nILU5atyE8A-cSKmYM5on1UkFBCEM8r72ThMJvnEkZBR7vQHVpasL8GwXWFjUFQdRC5Yzcnj17plKqmyu6F7jzomiERi1xQmweWWJG72aSmSAyYbBZl0rG',
      altText: `${title} detail`,
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYVlUDqTxlC6RcPbZKuXKpP0DMR6-CFEkyWYoYyv8-Ylcrv1w88VCA9BYe-n8de6VjsroiVNPhVyPOhjCry8APTNoHSP07IlZr7ilSBNlqT5_ZP6RUVltVUdIYbjOhAnDmsR49n-AsNTkXIG_kL9mJeeoJRl2hlDBwDYv0-PEZ3dxNazaK3LrDYRyl1-HUVYA0ODAqoOgNIRXXh7WmFp0bZNZrIrw4_d5mwRZNxwodhQF6NnAo_DLl7S6i2uWiMXE29-_iv5e7jUiz',
      altText: `${title} angle`,
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8rsn2e5tjJG0IrmKOZHK09ChL8jv1CJv9NQucy_3vgFja57UbYUYK1JKOmvWm300F6e-4YQrjuDjuK9ub0pWeerp4Et9Q1DzGlJI8fBPrdl8zUjRrpeiXr1qNY7V6IIsK-g4Q9YHUtd95mDMS6pi5-LN0TcrIBrwCfoB393BS8Z8lOFOzp7mwZPvsrSkELQ-Co6vCpux8G7Dfj2FUsVx3D5x_mv8Z0PbwO_FZpX3RQ0Ki0_tHxKHC1xrkstgIfI-ECFJyJK57CNy',
      altText: `${title} close up`,
    },
  ];

  const activeImage = displayImages[selectedIndex] || displayImages[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* DESKTOP GALLERY (Stitch Design 1: object-contain with ~15% reduced height for 100% full visibility) */}
      <div className="hidden md:flex flex-col-reverse md:flex-row-reverse gap-4 w-full items-start">
        {/* Main Image Showcase Container */}
        <div
          className="flex-grow aspect-[4/5] max-h-[500px] lg:max-h-[560px] bg-[#f3f3f3] overflow-hidden relative cursor-zoom-in group flex items-center justify-center p-3 lg:p-4"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={activeImage.url}
            alt={activeImage.altText || title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />

          {displayImages.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="p-3 rounded-full bg-white/90 text-black backdrop-blur-md shadow-md pointer-events-auto hover:bg-black hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="p-3 rounded-full bg-white/90 text-black backdrop-blur-md shadow-md pointer-events-auto hover:bg-black hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex md:flex-col gap-4 overflow-x-auto scrollbar-none shrink-0 max-h-[500px] lg:max-h-[560px]">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`w-20 lg:w-24 aspect-[4/5] shrink-0 overflow-hidden transition-all duration-200 ${
                selectedIndex === idx
                  ? 'border border-black opacity-100'
                  : 'border border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.altText || `${title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE GALLERY (Stitch Design 2: full width aspect-[4/5] + horizontal thumbnails) */}
      <div className="md:hidden w-full">
        <div
          className="aspect-[4/5] w-full overflow-hidden relative bg-[#f3f3f3] select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={activeImage.url}
            alt={activeImage.altText || title}
            className="w-full h-full object-cover object-center"
          />

          {displayImages.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
              {selectedIndex + 1} / {displayImages.length}
            </div>
          )}
        </div>

        {/* Horizontal Thumbnails */}
        <div className="flex gap-2 overflow-x-auto px-5 py-4 scrollbar-none">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`w-20 h-24 flex-shrink-0 overflow-hidden bg-[#eeeeee] transition-all duration-200 ${
                selectedIndex === idx ? 'border-b-2 border-black opacity-100' : 'opacity-60'
              }`}
            >
              <img
                src={img.url}
                alt={img.altText || `${title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative w-full max-w-4xl h-[85vh] flex items-center justify-center">
            <img
              src={activeImage.url}
              alt={activeImage.altText || title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
