'use client';

import React from 'react';
import Image from 'next/image';
import { PackageItem } from './shippingMockData';

export interface ShipmentWorkspaceCenterProps {
  packages: PackageItem[];
}

export const ShipmentWorkspaceCenter: React.FC<ShipmentWorkspaceCenterProps> = ({ packages }) => {
  return (
    <section className="flex-1 flex flex-col bg-[#faf9f9] overflow-y-auto p-6 sm:p-10 gap-8 min-w-0 font-sans select-none h-full">
      {/* Shipment Header Summary */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs font-bold text-[#444748] uppercase tracking-widest mb-2">
            Order Tracking
          </p>
          <h2 className="font-serif text-4xl font-bold text-black">Shipment #LX-9902</h2>
          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-[10px] font-bold text-[#444748] uppercase">TRACKING NUMBER</p>
              <p className="text-sm text-black font-semibold">1Z 999 AA1 01 2345 6789</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#444748] uppercase">ESTIMATED DELIVERY</p>
              <p className="text-sm text-black font-semibold">Oct 24, 2023</p>
            </div>
          </div>
        </div>
        <div>
          <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            READY TO SHIP
          </span>
        </div>
      </div>

      {/* Fulfillment Progress Timeline Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7] relative">
        <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-[#e3e2e2] -translate-y-1/2" />
        <div className="absolute top-1/2 left-8 w-1/2 h-[2px] bg-black -translate-y-1/2 transition-all duration-1000" />
        <div className="relative z-10 flex justify-between">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">inventory</span>
            </div>
            <p className="text-xs font-bold text-black">PICKING</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">package_2</span>
            </div>
            <p className="text-xs font-bold text-black">PACKING</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white outline outline-4 outline-white">
              <span className="material-symbols-outlined text-xl">label</span>
            </div>
            <p className="text-xs font-bold text-black">LABEL</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e3e2e2] flex items-center justify-center text-[#444748]">
              <span className="material-symbols-outlined text-xl">local_shipping</span>
            </div>
            <p className="text-xs text-[#444748]">TRANSIT</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e3e2e2] flex items-center justify-center text-[#444748]">
              <span className="material-symbols-outlined text-xl">check_circle</span>
            </div>
            <p className="text-xs text-[#444748]">DELIVERED</p>
          </div>
        </div>
      </div>

      {/* Package Contents */}
      <div>
        <h3 className="font-serif text-2xl font-semibold text-black mb-6">Package Contents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#c4c7c7]">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={packages[0]?.image || ''}
                alt={packages[0]?.title || ''}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 bg-white/90 backdrop-blur-md absolute bottom-0 left-0 right-0 border-t border-[#c4c7c7]/30">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-serif text-lg font-semibold text-black">{packages[0]?.title}</p>
                  <p className="text-xs text-[#444748]">SKU: {packages[0]?.sku} • {packages[0]?.weight}</p>
                </div>
                <span className="text-xs font-bold text-black">Qty: {packages[0]?.quantity}</span>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-6 border border-[#c4c7c7] flex gap-6 items-center">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
              <Image
                src={packages[1]?.image || ''}
                alt={packages[1]?.title || ''}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-serif text-lg font-semibold text-black">{packages[1]?.title}</p>
              <p className="text-xs font-bold text-[#444748] uppercase tracking-widest mt-1">
                {packages[1]?.subtitle}
              </p>
              <p className="text-xs text-[#444748] mt-2">SKU: {packages[1]?.sku} • {packages[1]?.weight}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Label Preview */}
      <div className="bg-white p-12 rounded-2xl shadow-sm border border-[#c4c7c7] flex flex-col items-center mb-24">
        <div className="w-full max-w-md border-2 border-black p-8 flex flex-col gap-6 font-mono text-sm uppercase tracking-tighter bg-white text-black">
          <div className="flex justify-between items-start border-b-2 border-black pb-4">
            <div className="flex flex-col">
              <span className="font-bold text-xl">DHL EXPRESS</span>
              <span>WorldWide Priority</span>
            </div>
            <div className="text-right">
              <span className="font-bold">#LX-9902</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold border-b border-black mb-1">From</p>
              <p>Luxora Atelier HQ<br />Paris, FR 75001</p>
            </div>
            <div>
              <p className="font-bold border-b border-black mb-1">To</p>
              <p>Elena von Berg<br />Berlin, DE 10115</p>
            </div>
          </div>
          <div className="flex flex-col items-center py-6 border-y-2 border-black">
            <div className="w-full h-24 bg-black/5 flex items-center justify-center relative">
              <div className="flex gap-[2px] h-16 items-center">
                <div className="w-1 h-full bg-black" />
                <div className="w-2 h-full bg-black" />
                <div className="w-1 h-full bg-white" />
                <div className="w-3 h-full bg-black" />
                <div className="w-1 h-full bg-white" />
                <div className="w-2 h-full bg-black" />
                <div className="w-4 h-full bg-black" />
                <div className="w-2 h-full bg-white" />
                <div className="w-1 h-full bg-black" />
                <div className="w-3 h-full bg-black" />
                <div className="w-1 h-full bg-white" />
                <div className="w-2 h-full bg-black" />
              </div>
              <p className="absolute bottom-1 text-[10px] font-bold tracking-[0.4em]">
                (01) 9876543210 (21) 123456
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex flex-col">
              <span className="text-[10px]">Reference</span>
              <span className="font-bold">ORD-2023-EVB</span>
            </div>
            <div className="w-14 h-14 border border-black grid grid-cols-4 gap-[1px] p-1">
              <div className="bg-black" /><div className="bg-white" /><div className="bg-black" /><div className="bg-black" />
              <div className="bg-black" /><div className="bg-black" /><div className="bg-white" /><div className="bg-black" />
              <div className="bg-white" /><div className="bg-black" /><div className="bg-black" /><div className="bg-white" />
              <div className="bg-black" /><div className="bg-black" /><div className="bg-white" /><div className="bg-black" />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition-transform font-sans"
        >
          <span className="material-symbols-outlined text-xl">print</span>
          <span className="text-xs font-bold uppercase tracking-widest">Print Shipping Label</span>
        </button>
      </div>
    </section>
  );
};
