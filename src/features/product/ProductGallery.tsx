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
    <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
      {/* Thumbnail Bar */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto max-h-[550px] pb-2 lg:pb-0 scrollbar-none">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
              selectedIndex === idx
                ? 'border-black ring-2 ring-black/10 shadow-md scale-105'
                : 'border-neutral-200 opacity-70 hover:opacity-100 hover:border-neutral-400'
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

      {/* Main Image Showcase */}
      <div className="relative flex-1 aspect-[3/4] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lumina-level1 group">
        <Image
          src={activeImage.url}
          alt={activeImage.altText || title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Carousel Prev/Next Overlay Buttons */}
        {displayImages.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/80 text-black backdrop-blur-md shadow-lg pointer-events-auto hover:bg-black hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-white/80 text-black backdrop-blur-md shadow-lg pointer-events-auto hover:bg-black hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Zoom Lightbox Indicator */}
        <div className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
