'use client';

import React, { useState } from 'react';
import { Product, ProductVariant } from '@/types';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/useCartStore';
import { useCompareStore } from '@/store/useCompareStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { cartService } from '@/lib/services/cart';
import {
  ShoppingBag,
  Heart,
  Scale,
  Check,
  ShieldCheck,
  Plus,
  Minus,
  Lock,
  Truck,
  RotateCcw,
} from 'lucide-react';

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

  const [quantity, setQuantity] = useState(1);
  const [isBuyingNow, setIsBuyingNow] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
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
    addItem(product, activeVariant, quantity);
    openCart();
  };

  const handleBuyNow = async () => {
    setIsBuyingNow(true);
    try {
      const cart = await cartService.createCart([
        { merchandiseId: activeVariant.id, quantity },
      ]);
      const result = await cartService.checkout(cart.id);
      if (result.checkoutUrl && result.checkoutUrl.startsWith('http')) {
        window.location.href = result.checkoutUrl;
      } else {
        window.location.href = result.checkoutUrl || '/checkout';
      }
    } catch (err) {
      console.error('Buy Now redirect error:', err);
      setIsBuyingNow(false);
    }
  };

  const isCurrentlyComparing = isComparing(product.id);

  return (
    <div className="flex flex-col gap-6 p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1">
      {/* Option Selectors */}
      {product.options.map((opt) => (
        <div key={opt.name} className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold uppercase tracking-wider text-neutral-900">
              {opt.name}: <span className="text-neutral-500 font-normal">{selectedOptions[opt.name]}</span>
            </span>
            {opt.name.toLowerCase() === 'size' && (
              <button type="button" className="text-blue-600 underline font-semibold hover:text-black">
                Bespoke Fit Guide
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {opt.values.map((val) => {
              const isSelected = selectedOptions[opt.name] === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleOptionChange(opt.name, val)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-2xl border transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-md scale-105'
                      : 'bg-neutral-50/80 text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100'
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

      {/* Quantity & Price Row */}
      <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">Unit Price</span>
          <div className="flex items-baseline gap-3 mt-0.5">
            <span className="text-3xl font-bold font-serif text-neutral-900">
              ${(activeVariant.price.amount * quantity).toFixed(0)} USD
            </span>
            {activeVariant.compareAtPrice && (
              <span className="text-base line-through text-neutral-400">
                ${(activeVariant.compareAtPrice.amount * quantity).toFixed(0)}
              </span>
            )}
          </div>
        </div>

        {/* Quantity Increment Counter */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Quantity</span>
          <div className="flex items-center border border-neutral-200 rounded-2xl bg-neutral-50/80 p-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-1.5 text-neutral-600 hover:text-black transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-sm font-bold text-neutral-900">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1.5 text-neutral-600 hover:text-black transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Primary & Secondary Action CTAs */}
      <div className="flex flex-col gap-3 pt-2">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleAddToCart}
          disabled={!activeVariant.availableForSale}
          className="gap-2 text-sm font-bold shadow-xl py-4"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Shopping Bag — ${(activeVariant.price.amount * quantity).toFixed(0)} USD
        </Button>

        <Button
          variant="secondary"
          size="lg"
          fullWidth
          isLoading={isBuyingNow}
          onClick={handleBuyNow}
          disabled={!activeVariant.availableForSale}
          className="gap-2 text-sm font-bold py-4"
        >
          <Lock className="w-4 h-4 text-emerald-600" />
          Buy Now with Shopify Express
        </Button>

        {/* Wishlist & Compare Buttons Row */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <Button
            variant="outline"
            size="md"
            onClick={() => toggleWishlist(product)}
            className={`gap-2 text-xs font-bold ${wishlisted ? 'border-red-600 text-red-600 bg-red-50' : ''}`}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-600 text-red-600' : ''}`} />
            {wishlisted ? 'Saved' : 'Wishlist'}
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={() => addProduct(product)}
            className={`gap-2 text-xs font-bold ${isCurrentlyComparing ? 'border-blue-600 text-blue-600' : ''}`}
          >
            <Scale className="w-4 h-4" />
            {isCurrentlyComparing ? 'In Compare' : 'Compare'}
          </Button>
        </div>
      </div>

      {/* Trust Indicators Grid */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 text-[11px] font-semibold text-neutral-700 pt-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>256-Bit Encrypted</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
          <span>30-Day Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Insured Transit</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>RFID Provenance</span>
        </div>
      </div>
    </div>
  );
};
