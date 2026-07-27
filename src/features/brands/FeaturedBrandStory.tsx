'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FeaturedBrandStory: React.FC = () => {
  return (
    <section className="py-28 px-6 sm:px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 relative overflow-hidden group rounded-lg">
          <img
            className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="A sophisticated editorial photograph of a Herman Miller Eames Lounge Chair"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7iK2eyANUB5VjaKCxty3QCbEc0Ajxryfhtpz3FopZPOtYOZShvUstDCoUhxxTjfLJZlGOx3lWDVLmDYQjiRo8xTnUkGZPQnAwA8G_xwTLLJsdrXJ048dMyetheJxyuXeLjPQpgzf9dL1-DiAK0Lg49hAFnSgg4TUBMhah1vYFFnWEW2vyhdrzmDYWOStvvPcptAnwfFD6zvVofuPdlhkuKk7E5zi-YjkQ2FXght6Lna7xsN9aH4HhShGzxOJ6tnk6S9-McHNFnQv5"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700" />
        </div>

        <div className="md:col-span-5 md:pl-12">
          <h2 className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em] mb-4">
            Featured Brand
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-normal text-black mb-2">Herman Miller</h3>
          <p className="font-sans text-xs uppercase tracking-widest text-black/60 mb-8">Category: Home & Living</p>
          <p className="font-sans text-base text-neutral-600 mb-10 leading-relaxed">
            Founded in 1905, Herman Miller has become synonymous with modern furniture. Their commitment to ergonomic innovation and architectural integrity has defined the 20th and 21st-century workspace and home. Every piece is a testament to the philosophy that design should solve human problems.
          </p>
          <Link
            href="/shop?vendor=Herman+Miller"
            className="group flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest text-black border-b border-black w-fit pb-2 transition-all hover:gap-6"
          >
            Explore Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
