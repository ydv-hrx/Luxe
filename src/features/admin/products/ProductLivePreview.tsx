'use client';

import React from 'react';
import Image from 'next/image';
import { ProductWorkspaceState } from './productMockData';

export interface ProductLivePreviewProps {
  state: ProductWorkspaceState;
  onChangeDeviceMode: (mode: 'laptop' | 'tablet' | 'mobile') => void;
}

export const ProductLivePreview: React.FC<ProductLivePreviewProps> = ({
  state,
  onChangeDeviceMode,
}) => {
  return (
    <section className="w-[400px] shrink-0 border-l border-[#c4c7c7]/40 bg-[#faf9f9] flex flex-col h-full overflow-hidden font-sans select-none">
      {/* Top Controls Toolbar */}
      <div className="p-4 border-b border-[#c4c7c7]/40 flex justify-between items-center bg-white/50">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onChangeDeviceMode('laptop')}
            className={`p-1.5 rounded transition-colors ${
              state.previewDevice === 'laptop'
                ? 'text-black font-bold bg-[#f4f3f3]'
                : 'text-[#747878] hover:text-black'
            }`}
            title="Laptop View"
          >
            <span className="material-symbols-outlined text-[20px]">laptop</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeDeviceMode('tablet')}
            className={`p-1.5 rounded transition-colors ${
              state.previewDevice === 'tablet'
                ? 'text-black font-bold bg-[#f4f3f3]'
                : 'text-[#747878] hover:text-black'
            }`}
            title="Tablet View"
          >
            <span className="material-symbols-outlined text-[20px]">tablet_mac</span>
          </button>
          <button
            type="button"
            onClick={() => onChangeDeviceMode('mobile')}
            className={`p-1.5 rounded transition-colors ${
              state.previewDevice === 'mobile'
                ? 'text-black font-bold bg-[#f4f3f3]'
                : 'text-[#747878] hover:text-black'
            }`}
            title="Mobile View"
          >
            <span className="material-symbols-outlined text-[20px]">smartphone</span>
          </button>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="p-1 text-[#747878] hover:text-black transition-colors"
            title="Zoom In"
          >
            <span className="material-symbols-outlined text-[20px]">zoom_in</span>
          </button>
          <button
            type="button"
            className="p-1 text-[#747878] hover:text-black transition-colors"
            title="Refresh Preview"
          >
            <span className="material-symbols-outlined text-[20px]">refresh</span>
          </button>
        </div>
      </div>

      {/* Live Canvas Mockup Container */}
      <div className="flex-1 overflow-y-auto bg-[#dbdad9]/30 p-6 flex justify-center items-start">
        <div
          style={{
            width:
              state.previewDevice === 'mobile'
                ? '320px'
                : state.previewDevice === 'tablet'
                ? '360px'
                : '100%',
          }}
          className="bg-white shadow-2xl rounded-sm min-h-[110%] pb-20 origin-top scale-[0.85] transition-all duration-300 border border-[#c4c7c7]/20 overflow-hidden"
        >
          {/* PDP Header Simulation */}
          <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6">
            <span className="font-serif text-lg italic text-black font-semibold">Luxora</span>
            <div className="flex gap-4 text-black">
              <span className="material-symbols-outlined text-[18px]">search</span>
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            </div>
          </div>

          {/* PDP Content Simulation */}
          <div className="p-0">
            <div className="w-full aspect-[4/5] bg-[#efeded] relative overflow-hidden">
              <Image
                src={state.heroImage}
                alt="Product Preview Hero"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-5 text-black">
              <div className="space-y-1">
                <p className="text-[10px] text-[#747878] uppercase tracking-widest font-bold">
                  Handbags / New Arrival
                </p>
                <h1 className="font-serif text-2xl font-bold">{state.name}</h1>
                <p className="text-xl font-light text-black">${state.price}</p>
              </div>

              {/* Color Swatch Simulation */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-black">Color: Midnight Black</p>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-black ring-1 ring-offset-2 ring-black cursor-pointer" />
                  <div className="w-6 h-6 rounded-full bg-[#4a0e0e] cursor-pointer" />
                  <div className="w-6 h-6 rounded-full bg-[#f4f1ea] border border-black/20 cursor-pointer" />
                </div>
              </div>

              {/* Add to Bag CTA */}
              <button
                type="button"
                className="w-full bg-black text-white py-4 rounded-sm text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Add to Bag
              </button>

              {/* Accordions */}
              <div className="space-y-3 pt-4 border-t border-gray-100 font-sans">
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="text-xs font-semibold uppercase">Details</span>
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="text-xs font-semibold uppercase">Material &amp; Care</span>
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="text-xs font-semibold uppercase">Shipping</span>
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
