'use client';

import React from 'react';

import { useCartStore } from '@/store/useCartStore';

export const TrendingDeals: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  const items = [
    {
      id: 'trending-deal-1',
      brand: 'VALEO',
      title: 'No. 04 Signature Scent',
      price: '$65',
      compareAtPrice: '$85',
      numericPrice: 65,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCFBywnA8GJ_JI5UvWttUM5s7QemIWPAxxIpyxo5IjoAXORM7H7h89_zwxqUWDNv31iFnrVJgmio7q-kR6yVWZV2qUu3wwE7MxlezSVP5v1B9ewv2IJRRb3EkY99gQliyS7-9GflY0JbinJIU_E07am4nblBxe0UZsbw1QIAfXQ4ruJAD92r2lfG3lDkV53cQkEsju0uZ6Tv9bU5Bydnwjir-hB9VaubHUvFUbGu-OHkYahjJgr5QL43xTFMcSGHbV1LBLJW3pA2Sl9',
    },
    {
      id: 'trending-deal-2',
      brand: 'AETHEL',
      title: 'Pure Cashmere Wrap',
      price: '$280',
      compareAtPrice: '$420',
      numericPrice: 280,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCupqhZhrUvCFn3bEeenNhGK5Qh0R3DGOBac3suXCZvjpC_eVz5WU4wRph1twsqjii67KhWLMN1TIVSIw7CMg6LeR9iCdFSMQjLE74XdMs8VY6XaEMT4MMBNuTtSbERrTLxHirBmLkSkXqZMMR2OM5B83i23yz3i40SCLoxjGZOmaMMpBwzFTrTM5VTxFdYdaou36PSU69uRcbq8nq0IhpJsd7bNU4bXHrZILv5-ZIHiPsuFztCw2t4NNBVdAaekbWkRBGbNs43b1QT',
    },
    {
      id: 'trending-deal-3',
      brand: 'CRYSTALLO',
      title: 'Modernist Wine Set (4)',
      price: '$140',
      compareAtPrice: '$200',
      numericPrice: 140,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5pcNVpOJNC4WVJTcEATIw3c2HTc767jvDbikY4dZ7DvGHfcZR4xG2D-gnOIzYHfVJy4Y8q8yzsaSZPJ_SzANpKYwRWJ3FeCME8dizBeeoJmBZdre_5Vh_JDC2Fw-2t_YhYs6DNd46Z5vJhq9gfjzSGsyEpAeuSKKrv-mYnyH3PbOq13_5uz7Px-i_V36FR8FwWFsJaFnRNdwcxSdyg6P7BRe4uqxkAqTGhKzYlgXMsZvLJGDFJFbWH9PK9_DKWcDLgLOn2pYRR_KO',
    },
    {
      id: 'trending-deal-4',
      brand: 'TECHNE',
      title: 'The Alchemist Kettle',
      price: '$195',
      compareAtPrice: '$260',
      numericPrice: 195,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDmZ8U1tE4Tt39PwpMVt9QAQX9-rByvpXJcj_WtvntUwYzgEbtRxe7E1F5wVxCK0X3_KEQlYl4zGwjJVQnZwmQonEE9yF9bAoSPfdHBQ5zLSOQvPgbr9S6LbQtRtyTWfTEmTS4nVAN_iK2Z4JqkIMvgiiUBEeygqM1e0iy8POEpiPu5aq7UrPlLco19wUgerKy9edID1mStaG8jIuNH_jai_AemeCI5pHgnI-TTxW8Kyr1bphDYwYaiMSXZ4MP6wOxpNB4lZsV2gUe-',
    },
  ];

  const handleAddToCart = (p: (typeof items)[0]) => {
    const variant = {
      id: p.id + '-v1',
      title: 'Default',
      sku: p.id + '-sku',
      price: { amount: p.numericPrice, currencyCode: 'USD' },
      selectedOptions: { Style: 'Default' },
      availableForSale: true,
    };

    addItem(
      {
        id: p.id,
        title: p.title,
        handle: p.id,
        description: '',
        price: { amount: p.numericPrice, currencyCode: 'USD' },
        images: [{ url: p.image, altText: p.title }],
        category: 'Trending Deals',
        tags: ['trending-deals'],
        vendor: p.brand,
        options: [{ name: 'Style', values: ['Default'] }],
        variants: [variant],
      },
      variant,
      1
    );
  };

  return (
    <section className="py-28 px-6 sm:px-16 max-w-[1440px] mx-auto">
      <div className="text-center mb-16">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          MEMBER FAVORITES
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-black mt-4">Trending Now</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-square mb-4 overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button
                type="button"
                onClick={() => handleAddToCart(item)}
                className="absolute bottom-4 left-4 right-4 bg-black text-white py-3 opacity-0 group-hover:opacity-100 transition-opacity font-sans text-xs font-semibold uppercase tracking-widest"
              >
                ADD TO CART
              </button>
            </div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-1">
              {item.brand}
            </p>
            <h3 className="font-sans text-base text-black mb-2">{item.title}</h3>
            <p className="font-sans text-lg font-medium text-black">
              {item.price} <span className="text-sm text-neutral-400 line-through ml-2">{item.compareAtPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
