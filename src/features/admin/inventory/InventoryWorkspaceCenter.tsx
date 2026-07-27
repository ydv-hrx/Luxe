'use client';

import React from 'react';
import { WarehouseStock, VariantStock } from './inventoryMockData';

export interface InventoryWorkspaceCenterProps {
  warehouses: WarehouseStock[];
  variants: VariantStock[];
}

export const InventoryWorkspaceCenter: React.FC<InventoryWorkspaceCenterProps> = ({
  warehouses,
  variants,
}) => {
  return (
    <section className="flex-1 bg-[#faf9f9] flex flex-col overflow-y-auto luxury-scrollbar p-6 sm:p-10 gap-6 font-sans select-none min-w-0 h-full">
      {/* Overview & Stock Levels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Inventory Overview */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/10 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-serif font-semibold text-black">Inventory Overview</h2>
            <span className="material-symbols-outlined text-[#c4c7c7]">info</span>
          </div>
          <div className="grid grid-cols-2 gap-y-4 font-sans">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#444748]">SKU</p>
              <p className="text-sm font-bold text-black mt-1">LUX-204-BLK</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#444748]">
                Category
              </p>
              <p className="text-sm font-bold text-black mt-1">Leather Accessories</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#444748]">
                Brand
              </p>
              <p className="text-sm font-bold text-black mt-1">Luxora Atelier</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#444748]">
                Vendor
              </p>
              <p className="text-sm font-bold text-black mt-1">Milan Leather Works</p>
            </div>
          </div>
        </div>

        {/* Card 2: Stock Levels */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/10 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-serif font-semibold text-black">Stock Levels</h2>
            <button
              type="button"
              className="text-xs font-semibold text-[#755a24] hover:underline transition-all"
            >
              Edit Targets
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-semibold text-[#444748]">Available</p>
                <p className="text-4xl font-serif font-bold text-black">24</p>
              </div>
              <div className="text-right text-xs">
                <p className="text-[#444748]">
                  Reserved: <span className="text-black font-bold">4</span>
                </p>
                <p className="text-[#444748]">
                  Incoming: <span className="text-black font-bold">12</span>
                </p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-[10px] font-bold uppercase text-[#444748]">
                <span>Stock Health</span>
                <span>Target: 50</span>
              </div>
              <div className="h-1.5 w-full bg-[#e9e8e8] rounded-full overflow-hidden">
                <div className="h-full bg-black w-[48%] rounded-full transition-all duration-1000" />
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase text-[#444748]">
                <span>Reorder Point</span>
                <span>10 Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Warehouse Distribution */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/10">
        <h2 className="text-xl font-serif font-semibold text-black mb-6">
          Warehouse Distribution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {warehouses.map((wh) => (
            <div
              key={wh.id}
              className="p-4 rounded-xl border border-[#c4c7c7]/10 hover:border-black/20 transition-all flex flex-col gap-2 bg-[#faf9f9]"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#444748]">location_on</span>
                <span className="text-xs font-bold text-black">{wh.name}</span>
              </div>
              <p className="text-2xl font-serif font-bold text-black">
                {wh.units}{' '}
                <span className="text-xs font-normal text-[#444748] font-sans">units</span>
              </p>
              <p
                className={`text-xs font-bold flex items-center gap-1 ${
                  wh.healthStatus === 'Healthy'
                    ? 'text-green-600'
                    : wh.healthStatus === 'Low'
                    ? 'text-[#795f28]'
                    : 'text-red-600'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {wh.healthStatus === 'Healthy'
                    ? 'trending_up'
                    : wh.healthStatus === 'Low'
                    ? 'warning'
                    : 'error'}
                </span>{' '}
                {wh.healthStatus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Card 4: Variants & Sizing */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/10 mb-20">
        <h2 className="text-xl font-serif font-semibold text-black mb-6">Variants &amp; Sizing</h2>
        <div className="flex flex-col gap-8">
          {variants.map((v, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: v.colorHex }}
                  className="w-10 h-10 rounded-full border-4 border-[#e9e8e8]"
                />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-black">
                  {v.color}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {v.sizes.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[#faf9f9] p-4 rounded-xl text-center border border-[#c4c7c7]/5"
                  >
                    <p className="text-xs text-[#444748] mb-1">{s.size}</p>
                    <p className="font-bold text-black text-sm">{s.count}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
