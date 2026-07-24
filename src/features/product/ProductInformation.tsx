import React from 'react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Star, ShieldCheck, Award, Sparkles } from 'lucide-react';

export interface ProductInformationProps {
  product: Product;
}

export const ProductInformation: React.FC<ProductInformationProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Brand & Badges Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          {product.vendor}
        </span>
        <div className="flex items-center gap-2">
          {product.isNew && <Badge variant="primary">New Season</Badge>}
          {product.isBestSeller && <Badge variant="default">Iconic Piece</Badge>}
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 leading-tight">
          {product.title}
        </h1>
        {product.subtitle && (
          <p className="text-sm font-medium text-neutral-500 mt-1">
            {product.subtitle}
          </p>
        )}
      </div>

      {/* Rating & Reviews */}
      {product.rating && (
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 5)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-neutral-300'
                }`}
              />
            ))}
          </div>
          <span>{product.rating} / 5.0</span>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500 font-normal">({product.reviewCount || 12} Verified Client Reviews)</span>
        </div>
      )}

      {/* Product Description */}
      <div className="text-sm text-neutral-700 leading-relaxed space-y-3 pt-2 border-t border-neutral-100">
        <p>{product.description}</p>
      </div>

      {/* Garment Specifications Grid */}
      <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/60 flex flex-col gap-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-blue-600" />
          Garment Provenance & Craft
        </h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-neutral-500 block">Origin:</span>
            <span className="font-semibold text-neutral-900">Ulaanbaatar, Mongolia</span>
          </div>
          <div>
            <span className="text-neutral-500 block">Weave Gauge:</span>
            <span className="font-semibold text-neutral-900">12-Gauge Double Ply</span>
          </div>
          <div>
            <span className="text-neutral-500 block">Certification:</span>
            <span className="font-semibold text-neutral-900">SFA Sustainable Cashmere</span>
          </div>
          <div>
            <span className="text-neutral-500 block">Digital Passport:</span>
            <span className="font-semibold text-neutral-900">RFID Tag Embedded</span>
          </div>
        </div>
      </div>
    </div>
  );
};
