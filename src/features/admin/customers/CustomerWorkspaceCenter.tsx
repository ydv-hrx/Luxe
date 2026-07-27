'use client';

import React from 'react';
import Image from 'next/image';
import { PurchaseItem, WishlistItem } from './customerMockData';

export interface CustomerWorkspaceCenterProps {
  purchases: PurchaseItem[];
  wishlist: WishlistItem[];
}

export const CustomerWorkspaceCenter: React.FC<CustomerWorkspaceCenterProps> = ({
  purchases,
  wishlist,
}) => {
  return (
    <section className="col-span-12 lg:col-span-6 p-6 sm:p-10 overflow-y-auto max-h-[calc(100vh-80px)] hide-scrollbar bg-white font-sans select-none">
      {/* IDENTITY CARD */}
      <div className="relative rounded-2xl overflow-hidden bg-[#faf9f9] mb-8 flex flex-col md:flex-row shadow-sm border border-[#c4c7c7]">
        <div className="w-full md:w-1/3 aspect-[4/5] relative bg-black">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLo99iT0Q6USt2UfHi1PhgIuCnbsYNoNzsq6xV3RqUo3CO-q20yVB2RjzvfL_LRw-C5kHYIkTyMpZM-Edbx4Ao3cduk0oizVVPy0pZ3SXvkV4jszD_X3b15dLe-Nryt8fCHkIhWvte2Y6_WefaB5Qs0_bY3v8tV02tic9tFAmn5hVsDfuLfChHFE0uipSG2Vi7pgV_XcAD_j4kHrqpvDYUVyq2sdyHfIq-OMl2RcLvZw55_g3kO2b6Ksjmq_5LqaPzKS3HQffAcuVF"
            alt="Elena von Berg Editorial Portrait"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-serif text-3xl font-semibold text-black mb-1">
                  Elena von Berg
                </h1>
                <p className="font-sans text-xs text-[#755a24] tracking-[0.2em] uppercase font-bold">
                  Platinum VIP Member
                </p>
              </div>
              <span className="material-symbols-outlined text-black cursor-pointer hover:rotate-12 transition-transform">
                edit_note
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <p className="text-[10px] uppercase text-[#444748] font-bold tracking-widest">
                  Client Since
                </p>
                <p className="font-sans text-sm font-semibold text-black mt-1">Oct 24, 2021</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#444748] font-bold tracking-widest">
                  Location
                </p>
                <p className="font-sans text-sm font-semibold text-black mt-1">Munich, Germany</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#444748] font-bold tracking-widest">
                  Contact
                </p>
                <p className="font-sans text-sm font-semibold text-black mt-1">
                  e.berg@ateliers.co
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#444748] font-bold tracking-widest">
                  Concierge
                </p>
                <p className="font-sans text-sm font-semibold text-black mt-1">Marcus Thorne</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            <span className="px-4 py-1 border border-black rounded-full font-sans text-[11px] uppercase font-bold text-black">
              Haute Couture
            </span>
            <span className="px-4 py-1 border border-black rounded-full font-sans text-[11px] uppercase font-bold text-black">
              Art Collector
            </span>
            <span className="px-4 py-1 border border-black rounded-full font-sans text-[11px] uppercase font-bold text-black">
              Sustainability Advocate
            </span>
          </div>
        </div>
      </div>

      {/* PREFERENCES & NOTES (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white border border-[#c4c7c7] rounded-2xl shadow-sm">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-black">
            Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-[#444748] font-bold uppercase mb-2">
                Favorite Categories
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                  Furniture
                </span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                  Jewelry
                </span>
                <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">
                  Sculpture
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[10px] text-[#444748] font-bold uppercase mb-1">
                  Color Palette
                </p>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#111111]" />
                  <div className="w-4 h-4 rounded-full bg-[#E5E5E5] border border-[#c4c7c7]" />
                  <div className="w-4 h-4 rounded-full bg-[#755a24]" />
                </div>
              </div>
              <div>
                <p className="text-[10px] text-[#444748] font-bold uppercase mb-1">
                  Preferred Size
                </p>
                <p className="text-xs font-bold text-black">EU 38 / Medium</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#ffdb99]/10 border border-[#ffdb99] rounded-2xl flex flex-col">
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-black">
            Concierge Private Notes
          </h3>
          <p className="text-xs italic text-[#444748] flex-1 leading-relaxed">
            "Prefers afternoon appointments between 3-5 PM. Heavily favors minimalist Italian craftsmanship. Last interaction: expressed interest in the upcoming 'Noir' collection."
          </p>
          <button
            type="button"
            className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:gap-3 transition-all"
          >
            Add Entry <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>

      {/* PURCHASE HISTORY */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-serif text-xl font-semibold text-black">Purchase History</h3>
          <a
            href="#"
            className="text-xs font-bold underline underline-offset-4 uppercase text-black"
          >
            View Full Ledger
          </a>
        </div>
        <div className="space-y-4">
          {purchases.map((ord) => (
            <div
              key={ord.id}
              className="flex items-center gap-6 p-4 border-b border-[#efeded] hover:bg-[#faf9f9] transition-colors rounded-xl"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#efeded] shrink-0">
                <Image
                  src={ord.image}
                  alt={ord.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-sans text-base font-semibold text-black truncate">
                      {ord.title}
                    </p>
                    <p className="text-xs text-[#444748] font-mono">{ord.orderNumber}</p>
                  </div>
                  <p className="font-serif text-lg font-bold text-black">{ord.priceText}</p>
                </div>
                <div className="flex gap-4 mt-2">
                  <span className="text-[10px] font-bold uppercase text-green-600">
                    {ord.status}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-[#444748]">
                    {ord.dateText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLIENT WISHLIST */}
      <div className="mb-12">
        <h3 className="font-serif text-xl font-semibold text-black mb-4">Client Wishlist</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[1/1] relative overflow-hidden rounded-2xl mb-3 bg-[#efeded]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-[10px] text-[#444748] font-bold uppercase tracking-tighter">
                {item.category}
              </p>
              <p className="font-sans text-xs font-semibold text-black truncate">{item.title}</p>
              <p className="font-sans text-xs font-bold text-[#755a24] mt-1">{item.priceText}</p>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center aspect-[1/1] bg-[#efeded] border-2 border-dashed border-[#c4c7c7] rounded-2xl text-[#444748] hover:text-black hover:border-black transition-all cursor-pointer">
            <span className="material-symbols-outlined text-4xl mb-2">add</span>
            <p className="text-xs uppercase font-bold">Add Item</p>
          </div>
        </div>
      </div>
    </section>
  );
};
