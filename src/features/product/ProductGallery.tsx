'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageAsset } from '@/types';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProductGalleryProps {
  images: ImageAsset[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const displayImages = images.length > 0 ? images : [
    {
      url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80',
      altText: title,
    },
  ];

  const activeImage = displayImages[selectedIndex] || displayImages[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-5 w-full">
        {/* Vertical Thumbnail Strip */}
        <div className="flex lg:flex-col gap-3.5 overflow-x-auto lg:overflow-y-auto max-h-[640px] pb-2 lg:pb-0 scrollbar-none shrink-0">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-26 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                selectedIndex === idx
                  ? 'border-black ring-4 ring-neutral-200 shadow-md scale-105'
                  : 'border-neutral-200/80 opacity-60 hover:opacity-100 hover:border-neutral-400'
              }`}
              aria-label={`View image ${idx + 1} of ${displayImages.length} for ${title}`}
            >
              <Image
                src={img.url}
                alt={img.altText || `${title} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>

        {/* Main Image Showcase Container */}
        <div
          className="relative flex-1 aspect-[3/4] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lumina-level1 group cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={activeImage.url}
            alt={activeImage.altText || title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Carousel Prev/Next Buttons */}
          {displayImages.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="p-3 rounded-full bg-white/90 text-black backdrop-blur-md shadow-lg pointer-events-auto hover:bg-black hover:text-white transition-colors"
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
                className="p-3 rounded-full bg-white/90 text-black backdrop-blur-md shadow-lg pointer-events-auto hover:bg-black hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Lightbox Expand Indicator */}
          <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative w-full max-w-4xl h-[85vh]">
            <Image
              src={activeImage.url}
              alt={activeImage.altText || title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
