'use client';

import React from 'react';

import { useCartStore } from '@/store/useCartStore';

export const BestDealsBentoGrid: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  const handleReserve = (p: { id: string; title: string; price: number; image: string; category: string }) => {
    const variant = {
      id: p.id + '-v1',
      title: 'Default',
      sku: p.id + '-sku',
      price: { amount: p.price, currencyCode: 'USD' },
      selectedOptions: { Style: 'Default' },
      availableForSale: true,
    };

    addItem(
      {
        id: p.id,
        title: p.title,
        handle: p.id,
        description: '',
        price: { amount: p.price, currencyCode: 'USD' },
        images: [{ url: p.image, altText: p.title }],
        category: p.category,
        tags: ['bento-deals'],
        vendor: 'Luxora',
        options: [{ name: 'Style', values: ['Default'] }],
        variants: [variant],
      },
      variant,
      1
    );
  };

  return (
    <section className="py-28 px-6 sm:px-16 max-w-[1440px] mx-auto">
      <h2 className="font-serif text-4xl sm:text-5xl mb-16 text-center italic underline underline-offset-8 text-black font-normal">
        The Current Selection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[900px]">
        {/* Large Feature Card (2 cols, 2 rows) */}
        <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-white flex flex-col border border-neutral-200">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpcsj-fco_KKfKPOp02QcFaBbnRxiqipVMbb77vuj7p8xBQYYc5KerpEPCWVzwI75kcphREqc8OS56oqnevNnzSsPEOc7P6xk0GR2-1LgirZXZc6UnLlDMugh6NY-jaPVgFstB5rX1Wxy3rz6DFFpXtHpv9VaM1VpcCGAU2CvHF9JBUcMzd9dIYMhUu88jwc9Gvz5IdWDIz1zriTV07w71gE3k9nwIneTAe30cWKmCtWzEggRHfrN9jUrDTBAAB2xW3cgw9tmw91lX"
            alt="The Sculptor's Chair"
            className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="p-8 flex flex-col justify-between flex-grow">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">
                FURNITURE
              </span>
              <h3 className="font-serif text-3xl font-normal text-black my-2">The Sculptor's Chair</h3>
              <p className="font-sans text-base text-neutral-600 mb-4 italic">
                Artisan craftsmanship meeting modern ergonomic design.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
              <span className="font-sans text-xl font-medium text-black">
                $1,890 <span className="text-neutral-400 text-base ml-2 line-through">$2,400</span>
              </span>
              <button
                type="button"
                onClick={() =>
                  handleReserve({
                    id: 'bento-1',
                    title: "The Sculptor's Chair",
                    price: 1890,
                    image:
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpcsj-fco_KKfKPOp02QcFaBbnRxiqipVMbb77vuj7p8xBQYYc5KerpEPCWVzwI75kcphREqc8OS56oqnevNnzSsPEOc7P6xk0GR2-1LgirZXZc6UnLlDMugh6NY-jaPVgFstB5rX1Wxy3rz6DFFpXtHpv9VaM1VpcCGAU2CvHF9JBUcMzd9dIYMhUu88jwc9Gvz5IdWDIz1zriTV07w71gE3k9nwIneTAe30cWKmCtWzEggRHfrN9jUrDTBAAB2xW3cgw9tmw91lX',
                    category: 'Furniture',
                  })
                }
                className="font-sans text-xs font-semibold uppercase tracking-widest border-b border-black pb-0.5 text-black hover:opacity-70 transition-opacity"
              >
                SHOP ITEM
              </button>
            </div>
          </div>
        </div>

        {/* Wide Medium Card (2 cols, 1 row) */}
        <div className="md:col-span-2 group relative overflow-hidden bg-[#eeeeee] flex h-full border border-neutral-200">
          <div className="w-1/2 h-full overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwBeSSVyaFpav2AfKnuRp6GDTh0BuI-sSvsUn1dAm6YpgzrYPsnaXPMxPZsKcqOxyK433Wc6N-MiCP2cEu3qM1xWXHJQ71BK0DgJJYnZGYHm3A1Yxbs0HphQiGTcRmD-RmXo-OE_CWVBKUCTmipRM3RiuNMSi94mFGxm8HWNJt0nxxtJh3vVQAZzcA_c53lQa1kfH6IwlOqXmOvxXdcHagvc2Udz4kiFUhmHi2Zko_2CIAE84nn7yH10gtqnJPMCHTLPFgT3B-ZF3h"
              alt="Caffeine Professional"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">
              TECH &amp; HOME
            </span>
            <h3 className="font-sans text-lg font-bold text-black my-2">Caffeine Professional</h3>
            <div className="font-sans text-xl font-medium text-black mb-4">
              $850 <span className="text-neutral-400 text-sm ml-1 line-through">$1,100</span>
            </div>
            <button
              type="button"
              onClick={() =>
                handleReserve({
                  id: 'bento-2',
                  title: 'Caffeine Professional',
                  price: 850,
                  image:
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDwBeSSVyaFpav2AfKnuRp6GDTh0BuI-sSvsUn1dAm6YpgzrYPsnaXPMxPZsKcqOxyK433Wc6N-MiCP2cEu3qM1xWXHJQ71BK0DgJJYnZGYHm3A1Yxbs0HphQiGTcRmD-RmXo-OE_CWVBKUCTmipRM3RiuNMSi94mFGxm8HWNJt0nxxtJh3vVQAZzcA_c53lQa1kfH6IwlOqXmOvxXdcHagvc2Udz4kiFUhmHi2Zko_2CIAE84nn7yH10gtqnJPMCHTLPFgT3B-ZF3h',
                  category: 'Tech',
                })
              }
              className="w-fit bg-black text-white px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              RESERVE DEAL
            </button>
          </div>
        </div>

        {/* Small Card 1 (1 col, 1 row) */}
        <div className="group relative overflow-hidden bg-white p-6 flex flex-col items-center text-center border border-neutral-200">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwDt2OSuCLVVwYvvsk8vuwuT58iZoi0CqoqeRK0ZhAfoTHpjBOSoMhx-IYsEy_7t6YC5GvzwNxhmySP8-XhIvF361v84xU62lhzFuy5nzQ-Kl-q8aU9STfKf7etRPCKz1Ox-XV5eyNvKc4snU1V7z-FO3njIMRjbSMZGjXjBEdLbrSj1d3mTcKvgyfQlSR210Iz39S1fGUU3XZ3AZ6o6wWa71hZLGaTsOeK6dwlRGZ1yBTYkBNw345nGS2MafWjhDup7RWL0ycRaG3"
            alt="Ritual Skin Set"
            className="w-40 h-40 object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
          />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-500">BEAUTY</span>
          <h3 className="font-sans text-base font-bold text-black mt-2">Ritual Skin Set</h3>
          <div className="font-sans text-lg font-medium text-black mt-2">
            $210 <span className="text-neutral-400 text-sm line-through ml-1">$300</span>
          </div>
        </div>

        {/* Small Card 2 (1 col, 1 row) */}
        <div className="group relative overflow-hidden bg-white p-6 flex flex-col items-center text-center border border-neutral-200">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhVWRtXDeiO5Ttwfssnyzl1taEiAyNj5Q07xaAjE9iCW5YY6HDiJMgDWKSRl7xk0nPexbr3eMjgt3tYLKCKL06CGaTuW5Ab9WMyj4rXrysJe4QlNGC9UB6kSYFj9-YQ_CIrzJKhpb6MpycTqiqTxLF_MsFxL5aorSl6NleSyKc1VlcDEtwFxk5lMgBcehGZofwBBn9GuICjIVAY4TiXboLmIbgqNyAJyV2cxjsq5MOdFI8_M3YBMI-BXfYWCf9iHYYUSU2yENZY4AB"
            alt="Linear Trainer"
            className="w-40 h-40 object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
          />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-500">FASHION</span>
          <h3 className="font-sans text-base font-bold text-black mt-2">Linear Trainer</h3>
          <div className="font-sans text-lg font-medium text-black mt-2">
            $340 <span className="text-neutral-400 text-sm line-through ml-1">$450</span>
          </div>
        </div>
      </div>
    </section>
  );
};
