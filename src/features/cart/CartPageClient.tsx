'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { commerceService } from '@/lib/services/commerce';
import { cartService } from '@/lib/services/cart';
import { Product } from '@/types';
import {
  ShoppingBag,
  Plus,
  Minus,
  Truck,
  RotateCcw,
  Lock,
  Gift,
  ShieldCheck,
  Tag,
} from 'lucide-react';

export const CartPageClient: React.FC = () => {
  const { items, updateQuantity, removeItem, getSubtotal, clearCart } = useCartStore();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = getSubtotal();
  const totalItemCount = items.reduce((acc, i) => acc + i.quantity, 0);
  const estimatedTax = subtotal * 0.08;
  const estimatedTotal = subtotal + (subtotal > 0 ? estimatedTax : 0);

  useEffect(() => {
    commerceService.getProducts().then((all) => {
      setRecommendations(all.slice(0, 4));
    });
  }, []);

  const handleCheckout = async () => {
    setIsRedirecting(true);
    try {
      const cart = await cartService.createCart(
        items.map((i) => ({ merchandiseId: i.variant.id, quantity: i.quantity }))
      );
      const result = await cartService.checkout(cart.id);
      clearCart();

      if (result.checkoutUrl && result.checkoutUrl.startsWith('http')) {
        window.location.href = result.checkoutUrl;
      } else {
        window.location.href = result.checkoutUrl || '/checkout';
      }
    } catch (err) {
      console.error('Cart checkout redirect error:', err);
      setIsRedirecting(false);
    }
  };

  const handleMoveToWishlist = (item: typeof items[0]) => {
    const fullProduct: Product = {
      id: item.product.id,
      handle: item.product.handle,
      title: item.product.title,
      vendor: item.product.vendor,
      description: item.product.title,
      category: 'Apparel',
      tags: [],
      price: item.variant.price,
      images: item.variant.image ? [item.variant.image] : [],
      options: [],
      variants: [item.variant],
    };
    toggleWishlist(fullProduct);
    removeItem(item.id);
  };

  // EMPTY CART STATE (Stitch Editorial Empty Bag)
  if (items.length === 0) {
    return (
      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20 sm:py-28 min-h-[70vh] flex flex-col items-center justify-center text-center font-sans">
        <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-neutral-500">
          <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
        </div>
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-2">
          LUXORA ATELIER
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-black mb-4">
          Your Shopping Bag is Empty
        </h1>
        <p className="font-sans text-sm sm:text-base text-neutral-500 max-w-md mx-auto mb-8 leading-relaxed">
          Curate your wardrobe with Grade-A cashmere knits, architectural stone vessels, and bespoke accessories.
        </p>
        <Link
          href="/shop"
          className="bg-black text-white px-10 py-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors inline-block"
        >
          CONTINUE SHOPPING
        </Link>

        {/* Recommendations Grid when empty */}
        {recommendations.length > 0 && (
          <div className="w-full mt-20 pt-16 border-t border-neutral-200 text-left">
            <div className="flex justify-between items-end mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-black font-normal">
                Recommended Curations
              </h2>
              <Link
                href="/shop"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-black border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                DISCOVER ALL
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {recommendations.map((prod) => (
                <div key={prod.id} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-3 relative">
                    <Link href={`/products/${prod.handle}`}>
                      <img
                        src={prod.images[0]?.url || ''}
                        alt={prod.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                    {prod.vendor || 'LUXORA'}
                  </p>
                  <h4 className="font-sans text-xs font-medium text-black line-clamp-1 group-hover:underline">
                    {prod.title}
                  </h4>
                  <p className="font-sans text-xs font-semibold text-black mt-1">
                    ${prod.price.amount.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-8 sm:pb-12 text-center">
        <h1 className="font-serif text-4xl sm:text-6xl font-normal text-black tracking-tight">
          Shopping Bag
        </h1>
        <p className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em] mt-3">
          Curated Selection ({totalItemCount} {totalItemCount === 1 ? 'Item' : 'Items'})
        </p>
      </section>

      {/* Two Column Layout (Left: Items 65%, Right: Order Summary 35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-24">
        {/* LEFT COLUMN: Cart Line Items & Shipping Benefits */}
        <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-12">
          {/* Cart Line Items */}
          <div className="flex flex-col gap-8 sm:gap-12">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-neutral-200 group"
              >
                {/* Product Image */}
                <div className="w-full sm:w-1/3 aspect-[3/4] overflow-hidden bg-neutral-100 shrink-0">
                  <Link href={`/products/${item.product.handle}`}>
                    <img
                      src={
                        item.variant.image?.url ||
                        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80'
                      }
                      alt={item.product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Product Details & Actions */}
                <div className="w-full sm:w-2/3 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <p className="font-sans text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
                          {item.product.vendor || 'LUXORA ATELIER'}
                        </p>
                        <Link href={`/products/${item.product.handle}`}>
                          <h2 className="font-serif text-xl sm:text-2xl font-normal text-black hover:underline underline-offset-4">
                            {item.product.title}
                          </h2>
                        </Link>
                        <p className="font-sans text-xs text-neutral-500">
                          Variant: {item.variant.title}
                        </p>
                      </div>
                      <p className="font-sans text-base sm:text-lg font-semibold text-black shrink-0">
                        ${(item.variant.price.amount * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity & Actions Row */}
                    <div className="mt-6 flex flex-wrap items-center gap-6 sm:gap-8">
                      {/* Quantity Counter */}
                      <div className="flex items-center border border-neutral-300 px-3 py-1.5 bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-neutral-600 hover:text-black transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-sans text-xs font-semibold px-5 text-black">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-neutral-600 hover:text-black transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Save for later & Remove */}
                      <div className="flex items-center gap-5 text-xs">
                        <button
                          type="button"
                          onClick={() => handleMoveToWishlist(item)}
                          className="font-sans font-semibold text-neutral-500 hover:text-black border-b border-transparent hover:border-black pb-0.5 transition-all uppercase tracking-wider"
                        >
                          Save for later
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-sans font-semibold text-red-600 hover:opacity-70 border-b border-transparent hover:border-red-600 pb-0.5 transition-opacity uppercase tracking-wider"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Stock Indicator */}
                  <div className="flex items-center gap-2 text-neutral-500 pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                      In Stock & Ready to Ship
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Benefits Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-neutral-200">
            <div className="flex flex-col items-center text-center space-y-2">
              <Truck className="w-6 h-6 text-black stroke-[1.5]" />
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest leading-relaxed text-black">
                Complimentary<br />Shipping
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <RotateCcw className="w-6 h-6 text-black stroke-[1.5]" />
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest leading-relaxed text-black">
                30-Day Easy<br />Returns
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Lock className="w-6 h-6 text-black stroke-[1.5]" />
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest leading-relaxed text-black">
                Secure<br />Checkout
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Gift className="w-6 h-6 text-black stroke-[1.5]" />
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest leading-relaxed text-black">
                Luxury<br />Packaging
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary (35%) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#f3f3f3] p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-2xl font-normal text-black">Summary</h3>

            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-semibold text-black">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-semibold text-emerald-700">Complimentary</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Estimated Tax</span>
                <span className="font-semibold text-black">${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-neutral-300 flex justify-between items-center">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-black">
                  Estimated Total
                </span>
                <span className="font-sans text-xl font-bold text-black">
                  ${estimatedTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isRedirecting}
                className="w-full bg-black text-white py-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-50"
              >
                {isRedirecting ? 'REDIRECTING TO CHECKOUT...' : 'PROCEED TO CHECKOUT'}
              </button>

              <Link
                href="/shop"
                className="w-full border border-black text-black py-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 block text-center"
              >
                CONTINUE SHOPPING
              </Link>
            </div>

            {/* Promo Code Entry */}
            <div className="pt-4 border-t border-neutral-300">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-neutral-500" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-black">
                  Promo Code
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="w-full bg-transparent border-b border-neutral-400 py-2 text-xs font-sans focus:outline-none focus:border-black placeholder:text-neutral-400 uppercase"
                />
                <button
                  type="button"
                  onClick={() => setPromoApplied(true)}
                  className="font-sans text-xs font-semibold uppercase tracking-wider text-black border-b border-black pb-1 shrink-0 hover:opacity-60"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <p className="text-[11px] text-emerald-700 font-semibold mt-2">
                  Promo code applied successfully.
                </p>
              )}
            </div>

            {/* Payment & Security Assurance Box */}
            <div className="bg-[#eeeeee] p-5 border border-neutral-200 text-xs text-neutral-600 leading-relaxed font-sans">
              <p>
                We accept Visa, Mastercard, American Express, and Apple Pay. Payments are processed securely via 256-bit SSL encryption.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE / RECOMMENDATIONS SECTION */}
      {recommendations.length > 0 && (
        <section className="py-16 sm:py-24 border-t border-neutral-200 overflow-hidden font-sans">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal">
              You May Also Like
            </h2>
            <Link
              href="/shop"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              Discover All
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto scrollbar-none pb-6">
            {recommendations.map((prod) => (
              <div key={prod.id} className="min-w-[280px] sm:min-w-[320px] max-w-[320px] group cursor-pointer shrink-0">
                <div className="aspect-[4/5] bg-[#eeeeee] mb-4 overflow-hidden relative">
                  <Link href={`/products/${prod.handle}`}>
                    <img
                      src={prod.images[0]?.url || ''}
                      alt={prod.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <p className="font-sans text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                  {prod.vendor || 'LUXORA ATELIER'}
                </p>
                <h3 className="font-sans text-sm font-medium text-black line-clamp-1 group-hover:underline underline-offset-4">
                  {prod.title}
                </h3>
                <p className="font-sans text-sm font-semibold text-black mt-1">
                  ${prod.price.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
