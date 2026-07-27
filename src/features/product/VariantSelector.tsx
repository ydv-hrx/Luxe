'use client';

import React, { useState } from 'react';
import { Product, ProductVariant } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { cartService } from '@/lib/services/cart';
import { Plus, Minus, Truck, ShieldCheck, Heart } from 'lucide-react';

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

  return (
    <div className="flex flex-col font-sans">
      {/* Option Selectors */}
      <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
        {product.options.map((opt) => (
          <div key={opt.name}>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-black">
                {opt.name}: {selectedOptions[opt.name]}
              </span>
              {opt.name.toLowerCase() === 'size' && (
                <button type="button" className="font-sans text-[10px] sm:text-xs text-neutral-500 underline uppercase tracking-wider hover:text-black">
                  Size Guide
                </button>
              )}
            </div>

            {opt.name.toLowerCase() === 'color' || opt.name.toLowerCase() === 'finish' ? (
              <div className="flex gap-3">
                {opt.values.map((val, idx) => {
                  const isSelected = selectedOptions[opt.name] === val;
                  const bgColors = ['#E5E4E2', '#C5B49D', '#7A7570', '#1a1c1c'];
                  const colorHex = bgColors[idx % bgColors.length];
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleOptionChange(opt.name, val)}
                      style={{ backgroundColor: colorHex }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all ${
                        isSelected
                          ? 'border-black ring-2 ring-black ring-offset-2 scale-105'
                          : 'border-neutral-300 hover:scale-105'
                      }`}
                      aria-label={`Select ${val}`}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3">
                {opt.values.map((val) => {
                  const isSelected = selectedOptions[opt.name] === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleOptionChange(opt.name, val)}
                      className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-colors ${
                        isSelected
                          ? 'border-black text-black bg-black/5 font-bold'
                          : 'border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {/* Quantity Selector */}
        <div>
          <span className="font-sans text-xs font-semibold block mb-3 sm:mb-4 uppercase tracking-widest text-black">
            Quantity
          </span>
          <div className="inline-flex items-center border border-neutral-300">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-3 text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-6 font-sans text-sm font-semibold text-black">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-3 text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop / Inline Action Buttons */}
      <div className="space-y-4 mb-8">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!activeVariant.availableForSale}
          className="w-full bg-black text-white py-4 sm:py-5 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300"
        >
          ADD TO CART
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={!activeVariant.availableForSale}
          className="w-full border border-black text-black py-4 sm:py-5 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isBuyingNow ? 'PROCESSING...' : 'BUY IT NOW'}
        </button>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="w-full py-3 text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-black flex items-center justify-center gap-2 border border-neutral-200 hover:border-black transition-colors"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-600 text-red-600' : ''}`} />
          {wishlisted ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}
        </button>
      </div>

      {/* Trust Items (Desktop) */}
      <div className="hidden md:flex flex-col gap-4 border-t border-neutral-200 pt-6">
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-neutral-500 shrink-0" />
          <span className="font-sans text-xs text-neutral-600">
            Complementary White Glove Delivery within 7-10 business days.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-neutral-500 shrink-0" />
          <span className="font-sans text-xs text-neutral-600">
            Secure checkout with encrypted luxury processing.
          </span>
        </div>
      </div>

      {/* Fixed Mobile Purchase Bar (Stitch Mobile Spec: fixed bottom-0) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 p-4 flex gap-3 shadow-lg">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 py-4 border border-black font-sans text-xs font-semibold uppercase tracking-widest text-black active:bg-neutral-100"
        >
          ADD TO CART
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 py-4 bg-black font-sans text-xs font-semibold uppercase tracking-widest text-white active:opacity-90"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};
