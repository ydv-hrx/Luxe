'use client';

import React from 'react';
import { Product } from '@/types';
import { Star } from 'lucide-react';

export interface ProductInformationProps {
  product: Product;
}

export const ProductInformation: React.FC<ProductInformationProps> = ({ product }) => {
  const ratingValue = product.rating || 4.8;
  const reviewCount = product.reviewCount || 12;

  return (
    <div className="flex flex-col font-sans">
      {/* Vendor Badge */}
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 mb-2">
        {product.vendor || 'LUXORA ATELIER'}
      </span>

      {/* Product Title */}
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight text-black font-normal mb-3 sm:mb-4">
        {product.title}
      </h1>

      {/* Rating & Review Count */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="flex text-[#735c00]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(ratingValue)
                  ? 'fill-[#735c00] text-[#735c00]'
                  : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
        <a href="#reviews" className="font-sans text-[10px] uppercase tracking-widest text-neutral-500 hover:text-black transition-colors">
          ({reviewCount} REVIEWS)
        </a>
      </div>

      {/* Price */}
      <p className="font-sans text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-8">
        ${product.price.amount.toLocaleString()}
      </p>

      {/* Description */}
      <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 sm:mb-8">
        {product.description ||
          'A singular expression of form and materiality. Hand-carved from solid travertine, this vessel celebrates the raw beauty of natural stone through a sculptural silhouette.'}
      </p>
    </div>
  );
};
