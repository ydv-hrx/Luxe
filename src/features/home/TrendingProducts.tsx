'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';

export interface TrendingProductsProps {
  products: Product[];
}

export const TrendingProducts: React.FC<TrendingProductsProps> = ({ products }) => {
  const addItem = useCartStore((state) => state.addItem);

  const displayProducts = products.length > 0 ? products.slice(0, 4) : [
    {
      id: 'p-stitch-1',
      handle: 'architectural-shoulder-bag',
      title: 'Architectural Shoulder Bag',
      vendor: 'Luxora Atelier',
      price: { amount: 1250, currencyCode: 'USD' },
      compareAtPrice: { amount: 1400, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKkOhxzUbtL5wL0mlMU2RK7krNDYFi8A8zAkExQzFQS10h_eefEKj5iZ5uCF-Y92l5H1Lgg95mZKPkKGmnIXgJLJIy6rAzNYifM3oRCC0pouEp3A-CL3hJw9eDmCts4XieH8VHWki0La8mwq1aU9PZVdOk2p4rXGhhkX2jfVJkgvsXtbtQmt5mlj2X6DRRWnzwGNsEZuuqYmFUyeKOVh-UwAgS0PQw_wgCW0mGlPx6DfL5IyHMnC0Uldkq73OpZQuSpJVqattPGebg',
          altText: 'Architectural Shoulder Bag',
        },
      ],
      variants: [
        {
          id: 'v-stitch-1',
          title: 'Default',
          price: { amount: 1250, currencyCode: 'USD' },
          availableForSale: true,
          selectedOptions: {},
        },
      ],
    },
    {
      id: 'p-stitch-2',
      handle: 'classic-venetian-loafers',
      title: 'Classic Venetian Loafers',
      vendor: 'Aurum Heritage',
      price: { amount: 890, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-y6FFy6PexAbdlblQaEiAoDRvOsOVMtw2RUv_PMGuH0I64eh-EKSI-DC0wQzBU3EPl8iiBP-dMW1mDTHBM0jppIA3KRDFGz45K1By4NnIjDWLlItHTKJq557S99KSCj_rJhw3RwgjIU5D5ugY6gujxgozy0eiPhZY1LFlUzlglBOFxe_KGiNpJGPjSMHXaaD8Ep-p-dBnE6U_4QU7V9_qNqz25OhI-WuyyxQ3WmFgNNEHAQrOQmONiVEKXRln8LjFguIJ33gnR0Hy',
          altText: 'Classic Venetian Loafers',
        },
      ],
      variants: [
        {
          id: 'v-stitch-2',
          title: 'Default',
          price: { amount: 890, currencyCode: 'USD' },
          availableForSale: true,
          selectedOptions: {},
        },
      ],
    },
    {
      id: 'p-stitch-3',
      handle: 'linear-task-lamp',
      title: 'Linear Task Lamp',
      vendor: 'Studio Element',
      price: { amount: 450, currencyCode: 'USD' },
      compareAtPrice: { amount: 600, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8DoFhxDh_2RBeRzGMEt2fyQzp0JAyKPLm3qQ8rdMz3DhuuljQRdTJOO5M2wnug_vyKw4LjYzLOzbYlZI8TMvg6-a_TDQKyEk_ghte-zxwq69iFYJ72imQVu1jh8jYTUq7b9PH7aigCKnEelO9jOXU8R3uwxyVlakkcPd1Yz8F6RlNrS27GmagHB5TxcmW4cb4Rrw7SU5uh60v4km_jBaUnO9mgqkCsst40By6RpiyZF0iXzQY368HoLT5wfyk6V5iE0FFC3Oo20wL',
          altText: 'Linear Task Lamp',
        },
      ],
      variants: [
        {
          id: 'v-stitch-3',
          title: 'Default',
          price: { amount: 450, currencyCode: 'USD' },
          availableForSale: true,
          selectedOptions: {},
        },
      ],
    },
    {
      id: 'p-stitch-4',
      handle: 'structured-trench-coat',
      title: 'Structured Trench Coat',
      vendor: 'Nordic Cloth',
      price: { amount: 1800, currencyCode: 'USD' },
      images: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5bSbryAnl-Zi__M3x_TLHVppOvZK92SNrKSL8wgow-XbwM6VQuie24EY7teyvwm23e0hzXjSRh5LEYzoA1t5AzAf5RF4olw9JkTQw0QNVHg9nkp_McRfNcgbtW6lyIb4VM_vF4pDwLpbJeGr-iUCnzrZplwQGqnoP8RUIspD5QM2teWqm0smVU57tG9yabQ_b_C5zF1zvm3gofap36hzv28lc1vam5bExCVUTvsykinxUmVheVXcDWeDZM9OuO8gATMbvnqEhFp',
          altText: 'Structured Trench Coat',
        },
      ],
      variants: [
        {
          id: 'v-stitch-4',
          title: 'Default',
          price: { amount: 1800, currencyCode: 'USD' },
          availableForSale: true,
          selectedOptions: {},
        },
      ],
    },
  ];

  return (
    <section className="px-6 sm:px-16 py-28 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-serif text-4xl text-black">Trending Now</h2>
          <p className="text-neutral-600 mt-2 font-sans text-base">Curated selections from our latest arrivals.</p>
        </div>
        <Link href="/shop" className="font-sans text-xs font-semibold border-b border-black pb-1 uppercase tracking-widest">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {displayProducts.map((p: any) => (
          <div key={p.id} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-white mb-6">
              <Link href={`/products/${p.handle}`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={p.images?.[0]?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2'}
                  alt={p.title}
                />
              </Link>
              <button
                type="button"
                onClick={() => addItem(p, p.variants[0], 1)}
                className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute bottom-0 left-0 w-full py-4 bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                + Quick Add
              </button>
            </div>
            <p className="font-sans text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider">
              {p.vendor}
            </p>
            <h3 className="font-sans text-base text-black mb-2 font-medium">
              <Link href={`/products/${p.handle}`} className="hover:underline">
                {p.title}
              </Link>
            </h3>
            <div className="flex gap-3 items-center">
              <span className="font-sans text-lg font-medium text-black">${p.price.amount}</span>
              {p.compareAtPrice && (
                <span className="text-neutral-400 line-through text-sm">${p.compareAtPrice.amount}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
