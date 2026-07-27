'use client';

import React from 'react';
import Link from 'next/link';

export const EditorialStory: React.FC = () => {
  return (
    <section className="bg-[#f3f3f3] py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-7/12 aspect-[4/5] relative">
            <img
              className="w-full h-full object-cover"
              alt="Heritage Collection Craftsmanship"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWO4cf467KBg8YinBdWLeA7KtPFpZEiv73T93eEqV18P593Rc0fyuN2KfKJKw9Xi6M324SpLHH9d4sdI-wT5XeG52Q9j_EtN-Jww65_OJdDvw2JwMkqwcm-sqp2mYZT1cAzu-v94R6GszCevAXLVMg6jwvudDBA8ztujKwtIg_ZHcMEY_vVViPeV3YpKIbuYKAhinSgBRmXcZSGPqhpJ5vYmkSxHyyzPL8DaRkQmiMtQE9jS0arPem0Hqo0oQ9LmkxXmDjCkiJExIq"
            />
          </div>
          <div className="w-full lg:w-5/12">
            <span className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4 block">
              The Heritage Collection
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight text-black">
              CRAFTED FOR THE CONNOISSEUR
            </h2>
            <p className="font-sans text-lg text-neutral-700 mb-10 leading-relaxed">
              Each piece in our Heritage Collection is a testament to timeless design and unparalleled artisanal skill. We source only the finest materials from historic ateliers across Europe.
            </p>
            <Link
              href="/collections"
              className="inline-block border-b border-black pb-1 font-sans text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Discover the Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
