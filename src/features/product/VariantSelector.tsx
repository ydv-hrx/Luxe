'use client';

import React, { useState } from 'react';
import { Product, ProductVariant } from '@/types';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/useCartStore';
import { useCompareStore } from '@/store/useCompareStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { ShoppingBag, Heart, Scale, Check, ShieldCheck } from 'lucide-react';

export interface VariantSelectorProps {
  product: Product;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.options.forEach((opt) => {
      if (opt.values.length > 0) {
        initial[opt.name] = opt.values[0];
      }
    });
    return initial;
  });

  const addItem = useCartStore((state) => state.addItem);
  const { addProduct, isComparing } = useCompareStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const wishlisted = isInWishlist(product.id);

  const activeVariant: ProductVariant =
    product.variants.find((v) =>
      Object.entries(selectedOptions).every(
        ([key, val]) => v.selectedOptions[key] === val
      )
    ) || product.variants[0] || {
      id: 'default-var',
      title: 'Default',
      sku: 'SKU-DEF',
      price: product.price,
      selectedOptions: {},
      availableForSale: true,
    };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const handleAddToCart = () => {
    addItem(product, activeVariant);
  };

  const isCurrentlyComparing = isComparing(product.id);

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1">
      {/* Option Groups */}
      {product.options.map((opt) => (
        <div key={opt.name} className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold uppercase tracking-wider text-neutral-900">
              {opt.name}: <span className="text-neutral-500 font-normal">{selectedOptions[opt.name]}</span>
            </span>
            {opt.name.toLowerCase() === 'size' && (
              <button type="button" className="text-blue-600 underline font-medium hover:text-black">
                Size Guide
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {opt.values.map((val) => {
              const isSelected = selectedOptions[opt.name] === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleOptionChange(opt.name, val)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-md scale-105'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100'
                  }`}
                  aria-pressed={isSelected}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  {val}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Pricing & Availability Bar */}
      <div className="pt-4 border-t border-neutral-100 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-neutral-900">
            ${activeVariant.price.amount.toFixed(0)} USD
          </span>
          {activeVariant.compareAtPrice && (
            <span className="text-sm line-through text-neutral-400">
              ${activeVariant.compareAtPrice.amount.toFixed(0)}
            </span>
          )}
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            activeVariant.availableForSale
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {activeVariant.availableForSale ? 'In Stock • Ready to Ship' : 'Out of Stock'}
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleAddToCart}
          disabled={!activeVariant.availableForSale}
          className="gap-2 text-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          Add To Bag — ${(activeVariant.price.amount).toFixed(0)}
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => toggleWishlist(product)}
          className={`gap-2 ${wishlisted ? 'border-red-600 text-red-600 bg-red-50' : ''}`}
          aria-label={wishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-600 text-red-600' : ''}`} />
          {wishlisted ? 'Saved' : 'Wishlist'}
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => addProduct(product)}
          className={`gap-2 ${isCurrentlyComparing ? 'border-blue-600 text-blue-600' : ''}`}
          aria-label="Compare item side by side"
        >
          <Scale className="w-4 h-4" />
          {isCurrentlyComparing ? 'In Compare' : 'Compare'}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Free White-Glove Delivery & Complimentary Returns</span>
      </div>
    </div>
  );
};
