'use client';

import React from 'react';
import Image from 'next/image';
import { TopProductItem } from './adminMockData';

export interface TopProductsCardProps {
  products: TopProductItem[];
}

export const TopProductsCard: React.FC<TopProductsCardProps> = ({ products }) => {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-[#c4c7c7]/10 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-8 sm:mb-10">
          <h4 className="font-serif text-2xl sm:text-3xl text-black font-semibold">
            Top Products
          </h4>
          <button
            type="button"
            className="text-[#755a24] font-sans text-xs font-bold hover:underline underline-offset-4 transition-all"
          >
            Performance Report
          </button>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {products.map((item) => (
            <div key={item.id} className="flex items-center gap-4 sm:gap-5 group cursor-pointer">
              {/* Product Thumbnail */}
              <div className="w-14 h-18 sm:w-16 sm:h-20 rounded-2xl overflow-hidden bg-[#f4f3f3] shrink-0 border border-[#c4c7c7]/20 shadow-sm relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Product Meta & Progress */}
              <div className="flex-1 min-w-0">
                <h5 className="text-black font-bold text-xs sm:text-sm leading-tight truncate group-hover:text-[#C9A86A] transition-colors font-sans">
                  {item.title}
                </h5>
                <div className="flex items-center gap-2 mt-1 font-sans">
                  <span className="text-[#444748]/60 text-[11px] font-medium">{item.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#c4c7c7]/50" />
                  <span className="text-[#444748]/60 text-[11px] font-medium">
                    {item.unitsSold} Sold
                  </span>
                </div>
                <div className="mt-2 w-full h-1 bg-[#f4f3f3] rounded-full overflow-hidden">
                  <div
                    style={{ width: `${item.progressPercent}%` }}
                    className={`h-full rounded-full transition-all ${
                      item.color === 'gold' ? 'bg-[#C9A86A]' : 'bg-black'
                    }`}
                  />
                </div>
              </div>

              {/* Price & Growth */}
              <div className="text-right shrink-0 font-sans">
                <p className="text-black font-bold text-xs sm:text-sm">{item.price}</p>
                <p className="text-green-600 text-[11px] font-bold mt-0.5">{item.growth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w-full mt-8 sm:mt-10 py-3.5 sm:py-4 border border-[#c4c7c7]/30 rounded-2xl font-sans text-xs font-semibold text-black hover:bg-[#f4f3f3] transition-all"
      >
        View All Products
      </button>
    </div>
  );
};
