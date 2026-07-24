import React from 'react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Star, Sparkles, ShieldCheck } from 'lucide-react';

export interface ProductInformationProps {
  product: Product;
}

export const ProductInformation: React.FC<ProductInformationProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Brand & Collection Badges */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
          {product.vendor} • Atelier Private Collection
        </span>
        <div className="flex items-center gap-2">
          {product.isNew && <Badge variant="primary">New Season</Badge>}
          {product.isBestSeller && <Badge variant="default">Iconic Piece</Badge>}
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-neutral-900 tracking-tight leading-tight">
          {product.title}
        </h1>
        {product.subtitle && (
          <p className="text-base font-medium text-neutral-500">
            {product.subtitle}
          </p>
        )}
      </div>

      {/* Rating & Reviews Bar */}
      {product.rating && (
        <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700">
          <div className="flex items-center text-amber-400">
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
          <span className="font-bold text-neutral-900 text-sm">{product.rating.toFixed(1)}</span>
          <span className="text-neutral-300">•</span>
          <a href="#reviews" className="text-neutral-500 hover:text-black font-medium transition-colors">
            ({product.reviewCount || 24} Verified Client Reviews)
          </a>
        </div>
      )}

      {/* Product Description */}
      <div className="text-sm text-neutral-700 leading-relaxed pt-2 border-t border-neutral-100">
        <p>{product.description}</p>
      </div>

      {/* Garment Specification Card */}
      <div className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          Material Origin & Craftsmanship
        </h4>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-neutral-400 block font-semibold uppercase text-[10px] tracking-wider">Origin</span>
            <span className="font-bold text-neutral-900 text-sm mt-0.5 block">Ulaanbaatar, Mongolia</span>
          </div>
          <div>
            <span className="text-neutral-400 block font-semibold uppercase text-[10px] tracking-wider">Weave Gauge</span>
            <span className="font-bold text-neutral-900 text-sm mt-0.5 block">12-Gauge Double Ply</span>
          </div>
          <div>
            <span className="text-neutral-400 block font-semibold uppercase text-[10px] tracking-wider">Certification</span>
            <span className="font-bold text-neutral-900 text-sm mt-0.5 block">SFA Sustainable Cashmere</span>
          </div>
          <div>
            <span className="text-neutral-400 block font-semibold uppercase text-[10px] tracking-wider">Provenance</span>
            <span className="font-bold text-neutral-900 text-sm mt-0.5 block">RFID Passport Embedded</span>
          </div>
        </div>
      </div>
    </div>
  );
};
