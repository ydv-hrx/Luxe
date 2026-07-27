'use client';

import React from 'react';
import Image from 'next/image';
import { ProductWorkspaceState, ProductVariantItem } from './productMockData';

export interface ProductWorkspaceCenterProps {
  state: ProductWorkspaceState;
  variants: ProductVariantItem[];
  onChangeName: (val: string) => void;
  onChangeSku: (val: string) => void;
  onChangeHandle: (val: string) => void;
  onChangeVendor: (val: string) => void;
  onToggleLiveStatus: () => void;
  onChangePrice: (val: string) => void;
  onChangeInventory: (val: number) => void;
  onChangeDescription: (val: string) => void;
}

export const ProductWorkspaceCenter: React.FC<ProductWorkspaceCenterProps> = ({
  state,
  variants,
  onChangeName,
  onChangeSku,
  onChangeHandle,
  onChangeVendor,
  onToggleLiveStatus,
  onChangePrice,
  onChangeInventory,
  onChangeDescription,
}) => {
  return (
    <section className="overflow-y-auto bg-[#faf9f9] flex-1 font-sans select-none min-w-0">
      <div className="max-w-4xl mx-auto p-6 sm:p-10 space-y-10 sm:space-y-12">
        {/* 01 PRODUCT IDENTITY */}
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] opacity-50">
              01 Identity
            </h2>
            <div className="flex items-center gap-3 bg-[#faf9f9] p-1 px-3 rounded-full border border-[#c4c7c7]/30">
              <span className="text-xs text-black">Live Status</span>
              <div
                onClick={onToggleLiveStatus}
                className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${
                  state.isLive ? 'bg-black' : 'bg-[#c4c7c7]'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                    state.isLive ? 'right-0.5' : 'left-0.5'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold uppercase text-[#747878] mb-2">
                Product Name
              </label>
              <input
                type="text"
                value={state.name}
                onChange={(e) => onChangeName(e.target.value)}
                className="w-full border-none border-b border-[#c4c7c7] p-0 pb-2 font-serif text-2xl sm:text-3xl text-black focus:ring-0 focus:border-black transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#747878] mb-2">
                SKU
              </label>
              <input
                type="text"
                value={state.sku}
                onChange={(e) => onChangeSku(e.target.value)}
                className="w-full border-none border-b border-[#c4c7c7] p-0 pb-2 text-sm text-black font-sans focus:ring-0 focus:border-black transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#747878] mb-2">
                Handle (URL)
              </label>
              <input
                type="text"
                value={state.handle}
                onChange={(e) => onChangeHandle(e.target.value)}
                className="w-full border-none border-b border-[#c4c7c7] p-0 pb-2 text-sm text-black font-sans focus:ring-0 focus:border-black transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#747878] mb-2">
                Brand / Vendor
              </label>
              <select
                value={state.vendor}
                onChange={(e) => onChangeVendor(e.target.value)}
                className="w-full border-none border-b border-[#c4c7c7] p-0 pb-2 text-sm text-black font-sans focus:ring-0 focus:border-black transition-all bg-transparent outline-none"
              >
                <option value="Luxora Signature">Luxora Signature</option>
                <option value="Atelier Private Label">Atelier Private Label</option>
              </select>
            </div>
          </div>
        </div>

        {/* 02 MEDIA STUDIO */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] opacity-50">
              02 Media Studio
            </h2>
            <button
              type="button"
              className="text-xs font-semibold text-black flex items-center gap-2 hover:underline"
            >
              <span className="material-symbols-outlined text-[18px]">upload_file</span> Add Media
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
            {/* Hero Image (col-span-2 row-span-2) */}
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group cursor-zoom-in aspect-square md:aspect-auto">
              <Image
                src={state.heroImage}
                alt="Hero Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-lg text-black">
                Hero Image
              </div>
            </div>

            {/* Media Gallery Thumbnails */}
            {state.mediaImages.map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-[#efeded] group relative aspect-square md:aspect-auto"
              >
                <Image src={img} alt={`Media ${idx}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">drag_indicator</span>
                </div>
              </div>
            ))}

            {/* 360 View Dropzone */}
            <div className="rounded-2xl bg-[#e9e8e8] flex flex-col items-center justify-center border-2 border-dashed border-[#c4c7c7] group cursor-pointer hover:bg-white transition-all p-6 text-center aspect-square md:aspect-auto">
              <span className="material-symbols-outlined text-[#747878] text-3xl mb-2">360</span>
              <span className="text-xs font-medium text-[#747878] group-hover:text-black">
                Add 360° View
              </span>
            </div>
          </div>
        </div>

        {/* 03 PRICING & INVENTORY */}
        <div className="space-y-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] opacity-50">
            03 Pricing &amp; Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pricing Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase text-[#747878]">Pricing</span>
                <span className="material-symbols-outlined text-[#755a24]">payments</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-base text-[#747878]">$</span>
                <input
                  type="text"
                  value={state.price}
                  onChange={(e) => onChangePrice(e.target.value)}
                  className="w-full border-none p-0 font-serif text-3xl font-semibold text-black focus:ring-0 outline-none"
                />
              </div>
              <div className="pt-4 border-t border-[#c4c7c7]/30 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-[#747878] block mb-1">Cost per item</span>
                  <span className="font-semibold text-black">${state.cost}</span>
                </div>
                <div>
                  <span className="text-xs text-[#747878] block mb-1">Margin</span>
                  <span className="font-semibold text-green-600">{state.margin}</span>
                </div>
              </div>
            </div>

            {/* Inventory Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase text-[#747878]">Inventory</span>
                <span className="material-symbols-outlined text-black">warehouse</span>
              </div>
              <div className="flex items-baseline gap-2">
                <input
                  type="number"
                  value={state.inventory}
                  onChange={(e) => onChangeInventory(Number(e.target.value))}
                  className="w-16 border-none p-0 font-serif text-3xl font-semibold text-black focus:ring-0 outline-none"
                />
                <span className="text-sm text-[#747878]">units available</span>
              </div>
              <div className="p-3 bg-[#ffdad6]/50 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ba1a1a] text-[20px]">
                  warning
                </span>
                <span className="text-xs text-[#93000a] font-medium">
                  Threshold Reached (Low Stock Alert)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 04 VISUAL VARIANTS */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] opacity-50">
              04 Visual Variants
            </h2>
            <button
              type="button"
              className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">add_circle</span> Add Variant
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {variants.map((v) => (
              <div
                key={v.id}
                className="bg-white p-4 rounded-3xl border border-[#c4c7c7]/30 hover:border-black transition-all group"
              >
                <div className="w-full h-32 rounded-xl bg-[#efeded] overflow-hidden mb-4 relative">
                  <Image src={v.image} alt={v.name} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-black">{v.name}</span>
                    <div
                      style={{ backgroundColor: v.colorHex }}
                      className="w-3 h-3 rounded-full ring-2 ring-[#c4c7c7]/30"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-[#747878]">
                    <span>{v.units} Units</span>
                    <span className={v.isOutOfStock ? 'text-[#ba1a1a] font-bold' : ''}>
                      {v.isOutOfStock ? 'Out of Stock' : v.priceDelta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05 PRODUCT STORY */}
        <div className="space-y-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] opacity-50">
            05 Product Story
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] space-y-8">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#747878] mb-4">
                Luxury Description
              </label>
              <div className="flex gap-4 border-b border-[#c4c7c7]/30 pb-4 mb-4 text-[#747878]">
                <button type="button" className="material-symbols-outlined hover:text-black">
                  format_bold
                </button>
                <button type="button" className="material-symbols-outlined hover:text-black">
                  format_italic
                </button>
                <button type="button" className="material-symbols-outlined hover:text-black">
                  format_list_bulleted
                </button>
                <button type="button" className="material-symbols-outlined hover:text-black">
                  link
                </button>
              </div>
              <textarea
                value={state.description}
                onChange={(e) => onChangeDescription(e.target.value)}
                rows={4}
                className="w-full border-none p-0 text-sm sm:text-base focus:ring-0 bg-transparent resize-none leading-relaxed text-black outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#747878] mb-2">
                  Materials
                </label>
                <p className="text-xs sm:text-sm text-black">{state.materials}</p>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-[#747878] mb-2">
                  Care Guides
                </label>
                <p className="text-xs sm:text-sm text-black">{state.careGuide}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 06 LUXORA INTELLIGENCE AI CARD */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffdea4]">auto_awesome</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffdea4]">
                Luxora Intelligence
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold">
              Enhance your product experience
            </h3>
            <p className="text-xs opacity-70">
              Our AI has analyzed your brand's tone of voice and market trends for this category.
            </p>
          </div>

          <div className="flex flex-col gap-2 relative z-10 w-full md:w-auto shrink-0">
            <button
              type="button"
              className="bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full text-xs font-semibold backdrop-blur transition-all border border-white/20 text-left"
            >
              Generate Luxury Description
            </button>
            <button
              type="button"
              className="bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full text-xs font-semibold backdrop-blur transition-all border border-white/20 text-left"
            >
              Suggest Cross-Sells
            </button>
            <button
              type="button"
              className="bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full text-xs font-semibold backdrop-blur transition-all border border-white/20 text-left"
            >
              Optimize SEO &amp; Tags
            </button>
          </div>
        </div>

        {/* 07 PERFORMANCE INSIGHTS */}
        <div className="space-y-3 pb-24">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] opacity-50">
            07 Performance Insights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <span className="text-xs text-[#747878] block mb-1">Total Views</span>
              <span className="font-serif text-2xl font-semibold text-black">12,402</span>
              <span className="text-[10px] text-green-600 block mt-1">+14% vs last week</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <span className="text-xs text-[#747878] block mb-1">Total Orders</span>
              <span className="font-serif text-2xl font-semibold text-black">156</span>
              <span className="text-[10px] text-green-600 block mt-1">+2% vs last week</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <span className="text-xs text-[#747878] block mb-1">Revenue</span>
              <span className="font-serif text-2xl font-semibold text-black">$382.2k</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <span className="text-xs text-[#747878] block mb-1">Conversion</span>
              <span className="font-serif text-2xl font-semibold text-black">1.25%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
