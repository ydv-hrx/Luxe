'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { useWishlistStore } from '@/store/useWishlistStore';

interface StitchHomeNewArrivalsProps {
  products: Product[];
}

export const StitchHomeNewArrivals: React.FC<StitchHomeNewArrivalsProps> = ({ products }) => {
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  const fallbackItems: Product[] = [
    {
      id: 'new-arr-1',
      handle: 'aethel-luxe-top-handle-bag',
      title: 'Luxe Top Handle Bag',
      vendor: 'AETHEL',
      category: 'accessories',
      description: 'Luxe Top Handle Bag in black leather with gold clasp detail.',
      tags: ['new-arrivals'],
      options: [],
      variants: [],
      price: { amount: 1275, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcswimkrtnXfvuRflm8OHngnVbR-IQIvTtOD8B2YqSgKRzvOG3pFKGoYyvMB105JZp4etMx5DxZP6eA3jMm-F5b8-bsR2GJFjM0N38V6US2GKo5kme2Cbu20Agq6HVgDVt3imPq-oUPrbPTrIeoLArswm1vhE9Wc3nmxDrtJufJWfD3Bq8FyWCJ49X78v7PlqadJWfsis-EYMfxhFF_Mup8Fgtk7CndXkB2Dk2SQsemWsRmz4pjAZP01jJTlC0WCWk3syrBMuRQxCQ',
          altText: 'Luxe Top Handle Bag',
        },
      ],
    },
    {
      id: 'new-arr-2',
      handle: 'vanguarde-heritage-watch',
      title: 'Heritage Automatic Watch',
      vendor: 'VANGUARDE',
      category: 'accessories',
      description: 'Heritage Automatic Watch with a black dial and silver stainless steel strap.',
      tags: ['new-arrivals'],
      options: [],
      variants: [],
      price: { amount: 640, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKq3j2mSfK-J7tW_JH1CtbVO7XE3GgnEDsfan9qevtwYqiBNYjmh-gonfCKcydKz07Cwb3ldnZlGkqdN7l19E6AZs4t-KGBvS4L3u4QZwfR9yRYS-A3kGdOmN3-tzHhNDTpLMQ4kVSxFScXY02N6obx5AvtVR8D3goKFTH73MlEgzxG8O8-p9lh8uQwh01OzKOaykETe3hZJsM-PNIYkUDEQU5ozZxgvbchWs054TFIkr2u5OY8JhKOrv39Kw4CqdTn8PiQiaBvPTu',
          altText: 'Heritage Automatic Watch',
        },
      ],
    },
    {
      id: 'new-arr-3',
      handle: 'valeo-no-12-sunglasses',
      title: 'No. 12 Signature Sunglasses',
      vendor: 'VALEO',
      category: 'accessories',
      description: 'No. 12 Signature Sunglasses with thick black frames and dark lenses.',
      tags: ['new-arrivals'],
      options: [],
      variants: [],
      price: { amount: 195, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOBPb745ki0qh9M-EHjNdlFcwWoGO9TmgWfhE6WgU6iwY6u9mtvN2dPywBe1wMhK6GkrQt1eeckstKkgHAc9Yv8GmNT3I3ZOTqhpzefHtCwTl7sldf71gKFQetHp4QmyyTvyvJx2QS713LfXh3oxLyAsZWkz1EGnxtKppJZpK9kMKNYnl8v2Str9RTckjYUXkDwG_sIaY2O6ehVS7wZEQOETDbGbvoWyc_WMz5Y9vz2cNRA2P7JlMZkUCKeptCGUv3Xx6VYmx1djSy',
          altText: 'No. 12 Signature Sunglasses',
        },
      ],
    },
    {
      id: 'new-arr-4',
      handle: 'aethel-cashmere-wrap',
      title: 'Pure Cashmere Wrap',
      vendor: 'AETHEL',
      category: 'fashion',
      description: 'Pure Cashmere Wrap in a soft beige tone with fine knit texture.',
      tags: ['new-arrivals'],
      options: [],
      variants: [],
      price: { amount: 280, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA34mioSFDIaYCAiWs4PHi4pS6zHnl0HbxYdRLkKxZluY2Nmgal1pUu__d6mOwp6Y9g03d3x5nYhbtJRbMoDXGdEHKfh-G7KsIST5Cn64YkeBtgANao8Zi7aqGe7BX1a5j1bNgOYvQzSvt1XfAuPH39rbJ6SNpbJT0FIVGvn376tKFxFNiLfSlUp3qc0U5JY6lyDy1wuvlxHvF6v43aVSWtfWOJUtZhv1pgaKfgCddqW3pjZyvMxzQV_Ahq46W1agBo-pFvQR72CW7',
          altText: 'Pure Cashmere Wrap',
        },
      ],
    },
    {
      id: 'new-arr-5',
      handle: 'valeo-no-04-candle',
      title: 'No. 04 Signature Scent',
      vendor: 'VALEO',
      category: 'beauty',
      description: 'No. 04 Signature Scent candle in a minimal dark glass vessel.',
      tags: ['new-arrivals'],
      options: [],
      variants: [],
      price: { amount: 65, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaehZbXGTW8nK_9RcUUuyAYg7D141a3uhZ0KtsujXIG_NjyEiiiT6Lok0dlxR_4YLNzOQJXTEitnPA_8_ZTMjXoslEmP_tKZa95SkTiIe5lmIlYMtV3HWNuN5at3lBXBe2w2qtKK9LINDXoW5Jsb6ybB68OfsjaBgXH6yCn9CzrBizcyaiIcuONA9_RcMePZ38f4Rxnv0NK2EZ9Hvz49SaoYeixpdAv-nUysNCWYY4vSyM_hLL2qjXzU_jp1xZw9Yzqxn44PkDjExo',
          altText: 'No. 04 Signature Scent',
        },
      ],
    },
  ];

  const items = products && products.length >= 5 ? products.slice(0, 5) : fallbackItems;

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 bg-[#f9f9f9] font-sans">
      <div className="flex flex-row justify-between items-end mb-6 sm:mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-black font-normal">Featured New Arrivals</h2>
        <Link
          href="/shop"
          className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-black pb-0.5 sm:pb-1 hover:opacity-70 transition-opacity flex items-center gap-1.5 sm:gap-2 text-black shrink-0"
        >
          VIEW ALL <span className="hidden sm:inline">NEW ARRIVALS</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {items.map((p) => {
          const isWishlisted = isInWishlist(p.id);
          return (
            <div key={p.id} className="group cursor-pointer font-sans">
              <div className="aspect-[4/5] mb-3 sm:mb-4 relative overflow-hidden bg-white">
                <Link href={`/products/${p.handle}`}>
                  <img
                    src={p.images?.[0]?.url || 'https://via.placeholder.com/600x750'}
                    alt={p.images?.[0]?.altText || p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => toggleWishlist(p)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/80 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'text-red-600 fill-red-600' : 'text-neutral-800'}`}
                  />
                </button>
              </div>

              <div className="space-y-1">
                <p className="font-sans text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                  {p.vendor || 'LUXORA'}
                </p>
                <Link href={`/products/${p.handle}`}>
                  <h3 className="font-sans text-xs sm:text-sm text-black group-hover:underline underline-offset-4 decoration-neutral-300 line-clamp-1">
                    {p.title}
                  </h3>
                </Link>
                <p className="font-sans text-xs sm:text-sm font-semibold text-black">${p.price.amount.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
