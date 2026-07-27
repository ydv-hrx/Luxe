'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Product } from '@/types';

export const FeaturedLuxuryOffers: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  const offers: (Product & { discountBadge: string })[] = [
    {
      id: 'deal-prod-1',
      handle: 'vanguarde-heritage-watch',
      title: 'Heritage Automatic Watch',
      vendor: 'Vanguarde',
      category: 'accessories',
      description: 'High-end luxury automatic watch with a deep charcoal face, sapphire crystal, and premium black leather strap.',
      tags: ['deals', 'accessories', 'watches'],
      options: [],
      variants: [],
      price: { amount: 640, currencyCode: 'USD' },
      compareAtPrice: { amount: 800, currencyCode: 'USD' },
      discountBadge: '20% OFF',
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAULj3J6OEFxC23Mk9p-BVaiYQe3LwmBQ46Poa2U-PxRTkfichxqfaf_zsxlvkzRthFWcH1SiSt2ZX2sx7mjNIb-hbxWQaNeJA-qoqhBbFpLUF66KqDoU2GR2UZYXKY4jxNHDw4G9DFnl4GLfXVkO8SlDzMz4oJmV-0v4gTA4Qi-aWuwbYEBqPLpfXCJQgedDy7vsJq6IkjUXC9uGc-_ggbWDsU3Dn8ULKN_J4TNNE0adoXwA_YU0MhwTXqEJkwzTCYWCm5Aln1tc9p',
          altText: 'Heritage Automatic Watch',
        },
      ],
    },
    {
      id: 'deal-prod-2',
      handle: 'aethel-luxe-bag',
      title: 'Luxe Top Handle Bag',
      vendor: 'Aethel',
      category: 'accessories',
      description: 'Structured designer top handle handbag in rich cognac-colored leather with polished gold hardware.',
      tags: ['deals', 'accessories', 'bags'],
      options: [],
      variants: [],
      price: { amount: 1275, currencyCode: 'USD' },
      compareAtPrice: { amount: 1500, currencyCode: 'USD' },
      discountBadge: '15% OFF',
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3iqc1z-k_xLpenNsFRdvomfDbpwhcGhvbphhJdtEuZnNEHzxsAIr1mpuTCPa7f6UV75xNWe9CmxnGt73fBZ97cFDwZHRWh7SK33mZCYxyDokhuunQKhnSS7h3KYMpEDd3ygy1N3K5zSCE17Jc2aybK7ZfnJqIvh16sczDqlSmDy_bPXmDJs1KJ_nzH2PH3ORr52SeEP4RAWSW3F6guClKVL6oZRG2UzieXyzMNCd5KzUh5d3XVi44pTsN3kQGb5rXFu8uvOnG060h',
          altText: 'Luxe Top Handle Bag',
        },
      ],
    },
    {
      id: 'deal-prod-3',
      handle: 'sonus-elite-headphones',
      title: 'Elite Wireless Headphones',
      vendor: 'Sonus',
      category: 'electronics',
      description: 'Premium wireless over-ear headphones with gold metallic accents and tan leather ear cups.',
      tags: ['deals', 'electronics', 'audio'],
      options: [],
      variants: [],
      price: { amount: 299, currencyCode: 'USD' },
      compareAtPrice: { amount: 399, currencyCode: 'USD' },
      discountBadge: '25% OFF',
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcM4K_CjafOGshcA7arWEuSLoxjxkSwfIP71ij8PrJZaRaqc4g89TCqsd-FrZJPOgt7wlGxLdNxFx9b2jiOxhEHNxqMIKrZNwYVMCQBLm-0D5rpg_CVruhl_39SUJrdY8FIr9oRvBw6zB9nNFRw0RfCCwsevrzj4lKBnibWkbeGsN5v94oBLqv_hWbd8P9eiBGrvuqQM12VgaA0Bl77bXE8xZ-GkmdoTcgmvV4x-TiJN07JpfR-s64dda6A74SrKIPN3g5o7GVEmI',
          altText: 'Elite Wireless Headphones',
        },
      ],
    },
    {
      id: 'deal-prod-4',
      handle: 'valeo-no-04-signature-scent',
      title: 'No. 04 Signature Scent',
      vendor: 'Valeo',
      category: 'beauty',
      description: 'Minimalist dark grey candle jar with a single flame lit, infused with a rich signature fragrance.',
      tags: ['deals', 'beauty', 'fragrance'],
      options: [],
      variants: [],
      price: { amount: 65, currencyCode: 'USD' },
      compareAtPrice: { amount: 95, currencyCode: 'USD' },
      discountBadge: '30% OFF',
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxTs5Ep7vn4x3r75L9SNwkIZQP1pFYYbaD2eU4u32WvherCHRbagYxVSJlWZ19V_hacU-G2kOU-a_RtW_gUjTMzeJoYfcC0_obQU_mp_UEmCbpBMMu5BV0xHMOOUcK6xrtf_xIRNE-kzjU7e9zB8G2cgctr44uc5ApN6r8rc9-Q2wBnlr4tFcxyzxZAmKpEKiXOjyTi_Q8FdpW0Nrf8rqNRd581TFk9EDbZ-CaUspqGOXPrvfijLxsqXVxOzhs0DaPHirLWkd0RAVN',
          altText: 'No. 04 Signature Scent',
        },
      ],
    },
  ];

  const handleQuickAdd = (p: Product) => {
    const variant = {
      id: p.id + '-v1',
      title: 'Default',
      sku: p.id + '-sku',
      price: p.price,
      selectedOptions: { Style: 'Default' },
      availableForSale: true,
    };
    addItem(p, variant, 1);
  };

  return (
    <section id="offers" className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 mt-10 sm:mt-14 md:mt-16 font-sans">
      <div className="flex justify-between items-end mb-6 sm:mb-10">
        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-black">Featured Luxury Offers</h2>
        <Link
          href="/shop"
          className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-black pb-0.5 sm:pb-1 flex items-center gap-1 sm:gap-2 hover:opacity-70 transition-opacity text-black shrink-0"
        >
          View All <span className="hidden sm:inline">Offers</span> <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 gap-y-8 sm:gap-y-12">
        {offers.map((p) => {
          const isWishlisted = isInWishlist(p.id);
          return (
            <div key={p.id} className="group flex flex-col justify-between h-full font-sans">
              <div>
                <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-3 sm:mb-4">
                  <Link href={`/products/${p.handle}`}>
                    <img
                      src={p.images[0].url}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>
                  <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black shadow-sm">
                    {p.discountBadge}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(p)}
                    className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-white/90 p-1.5 sm:p-2 rounded-full shadow-sm hover:bg-white transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'text-red-600 fill-red-600' : 'text-neutral-800'}`}
                    />
                  </button>
                </div>

                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <p className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">{p.vendor}</p>
                  <Link href={`/products/${p.handle}`}>
                    <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline underline-offset-4 decoration-neutral-300 line-clamp-1">
                      {p.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs sm:text-sm font-medium text-black">${p.price.amount.toLocaleString()}</span>
                    {p.compareAtPrice && (
                      <span className="text-neutral-500 line-through text-[10px] sm:text-xs">
                        ${p.compareAtPrice.amount.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleQuickAdd(p)}
                className="w-full py-2.5 sm:py-3 border border-neutral-300 text-black text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all mt-3"
              >
                Quick Add
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
