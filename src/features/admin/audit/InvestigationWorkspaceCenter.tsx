'use client';

import React from 'react';
import Image from 'next/image';
import { RESOURCE_DIFF_PROPERTIES, ResourceDiffProperty } from './auditMockData';

export interface InvestigationWorkspaceCenterProps {
  isJsonDiffView: boolean;
  onToggleJsonDiff: () => void;
}

export const InvestigationWorkspaceCenter: React.FC<InvestigationWorkspaceCenterProps> = ({
  isJsonDiffView,
  onToggleJsonDiff,
}) => {
  return (
    <section className="flex-1 flex flex-col p-6 sm:p-10 overflow-y-auto custom-scrollbar min-w-0 font-sans select-none h-full">
      <div className="max-w-4xl mx-auto w-full space-y-8 pb-32">
        {/* Activity Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-xs font-bold text-[#755a24] tracking-widest uppercase mb-2 block">
                Event Investigation
              </span>
              <h1 className="font-serif text-3xl font-semibold text-black">
                Inventory Value Adjustment
              </h1>
            </div>
            <div className="flex gap-4 text-right">
              <div>
                <p className="text-[11px] text-[#444748] uppercase tracking-wider mb-1 font-semibold">
                  Status
                </p>
                <div className="flex items-center gap-1.5 text-[#755a24]">
                  <span className="w-2 h-2 rounded-full bg-[#755a24]" />
                  <span className="font-semibold text-xs uppercase">Pending Review</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-6 border-y border-[#c4c7c7]/20">
            <div>
              <p className="text-[11px] text-[#444748] uppercase tracking-wider mb-1 font-semibold">
                Initiated By
              </p>
              <p className="font-semibold text-sm text-black">Alessandra Valentino</p>
              <p className="text-xs text-[#444748]">Director ID: 994021</p>
            </div>
            <div>
              <p className="text-[11px] text-[#444748] uppercase tracking-wider mb-1 font-semibold">
                Network Identity
              </p>
              <p className="font-semibold text-sm text-black">192.168.1.45</p>
              <p className="text-xs text-[#444748]">Milan, Italy (Corporate HQ)</p>
            </div>
            <div>
              <p className="text-[11px] text-[#444748] uppercase tracking-wider mb-1 font-semibold">
                Environment
              </p>
              <p className="font-semibold text-sm text-black">Production-Global</p>
              <p className="text-xs text-[#444748]">Safari 17.4 on macOS</p>
            </div>
            <div>
              <p className="text-[11px] text-[#444748] uppercase tracking-wider mb-1 font-semibold">
                Timestamp
              </p>
              <p className="font-semibold text-sm text-black">Oct 24, 2024</p>
              <p className="text-xs text-[#444748]">14:22:04 GMT +2</p>
            </div>
          </div>
        </div>

        {/* Resource Changes: Before vs After */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#c4c7c7]/10 shadow-sm">
          <div className="px-8 py-4 bg-[#f4f3f3] border-b border-[#c4c7c7]/20 flex justify-between items-center">
            <h3 className="font-semibold text-xs text-black uppercase tracking-wider">
              Resource Changes
            </h3>
            <button
              type="button"
              onClick={onToggleJsonDiff}
              className="text-[10px] font-bold text-[#444748] bg-white px-2 py-1 rounded border border-[#c4c7c7]/30 uppercase cursor-pointer hover:bg-[#faf9f9]"
            >
              {isJsonDiffView ? 'JSON DIFF VIEW' : 'TABLE VIEW'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 border-r border-[#c4c7c7]/20 bg-[#ffdad6]/10">
              <p className="text-[10px] font-bold text-red-700 mb-4 tracking-widest uppercase">
                Previous State
              </p>
              <div className="space-y-4 font-mono text-sm">
                {RESOURCE_DIFF_PROPERTIES.map((prop: ResourceDiffProperty) => (
                  <div key={prop.key} className="flex justify-between">
                    <span className="text-[#444748]/60">{prop.key}:</span>
                    <span className="text-[#444748] font-semibold">{prop.previousValue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-[#ffdb99]/10">
              <p className="text-[10px] font-bold text-[#755a24] mb-4 tracking-widest uppercase">
                Updated State
              </p>
              <div className="space-y-4 font-mono text-sm">
                {RESOURCE_DIFF_PROPERTIES.map((prop: ResourceDiffProperty) => (
                  <div key={prop.key} className="flex justify-between items-center">
                    <span className="text-[#444748]/60">{prop.key}:</span>
                    {prop.isChanged ? (
                      <span className="bg-[#ffdb99] px-2 py-0.5 rounded text-[#795f28] font-bold">
                        {prop.updatedValue}
                      </span>
                    ) : (
                      <span className="text-[#444748] font-semibold">{prop.updatedValue}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Approval Timeline */}
        <div className="bg-white rounded-2xl p-8 border border-[#c4c7c7]/10 shadow-sm">
          <h3 className="font-semibold text-xs text-black uppercase tracking-wider mb-8">
            Approval Journey
          </h3>
          <div className="relative flex justify-between items-center px-4">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#c4c7c7]/30 -translate-y-1/2 z-0" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white mb-3">
                <span className="material-symbols-outlined text-sm">done</span>
              </div>
              <p className="text-xs font-bold text-black">Requested</p>
              <p className="text-[10px] text-[#444748]">14:22 PM</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#755a24] flex items-center justify-center text-white mb-3">
                <span className="material-symbols-outlined text-sm">sync</span>
              </div>
              <p className="text-xs font-bold text-black">Reviewing</p>
              <p className="text-[10px] text-[#444748]">14:35 PM</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#efeded] border border-[#c4c7c7] flex items-center justify-center text-[#444748]/40 mb-3">
                <span className="material-symbols-outlined text-sm">hourglass_empty</span>
              </div>
              <p className="text-xs font-bold text-[#444748]/40">Authorized</p>
              <p className="text-[10px] text-transparent">—</p>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#efeded] border border-[#c4c7c7] flex items-center justify-center text-[#444748]/40 mb-3">
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
              <p className="text-xs font-bold text-[#444748]/40">Completed</p>
              <p className="text-[10px] text-transparent">—</p>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-white p-6 rounded-2xl border border-[#c4c7c7]/10 shadow-sm flex items-center gap-4 cursor-pointer hover:border-[#755a24] transition-all">
            <div className="relative w-16 h-16 rounded-xl bg-[#efeded] overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmXEAfuKhBQvHr7w-gMcxsymfCTIstjtgb0rTnO6J7WlTmwuN0O_aOePFRgLaJ5QxQEe6UOua1X1tNMT4GnxcU995S3slz6sz4st2CDa11txkstXtqHDoeO6J0UU730Uje38B3tlOL3NOI6jTzKLMKOeJRRHwqupU60wRjLIO0Zo87WlBBBEH8ePm04_KoiYN254ZjKP4pok4mAu1EUWvnnJ-KOxbzRU_tXpmhghZRVclfGdrdnR-9TO3q7fjmhAbXpBBtkA12wmLO"
                alt="Milan Fall 24 Satchel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold mb-1">
                Affected Product
              </p>
              <p className="text-sm font-bold text-black">Milan Fall &apos;24 Satchel</p>
              <p className="text-xs text-[#755a24] font-semibold underline">View Product Details</p>
            </div>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-[#c4c7c7]/10 shadow-sm flex items-center gap-4 cursor-pointer hover:border-[#755a24] transition-all">
            <div className="relative w-16 h-16 rounded-xl bg-[#efeded] overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2kYwOzCQwMbDjCRst58cU4BeY9y_EakLGD-ESEx5GY9nZAfoLEICq6RxdYa4ukSkoYPkaYHeNBZudMTaM8TBL5wANaYmhNvfd4nrxDPLxhtB0o0ea0hodyrMgJBiCKTIaQuf3aGuTmKgrqmjjyt1Xb-K0_I6S7jvhtSJHYvbn7v0gTDvG_aKRs6NMbWp_JZD3jHtVTF18BKlM5zq63A3hrl50NICkU-QQ3Pf1cunafZe4Bi-_ucKoDuTRxkm8epgqe9_KH3F0X1o"
                alt="Seasonal Pricing Reset"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold mb-1">
                Campaign Link
              </p>
              <p className="text-sm font-bold text-black">Seasonal Pricing Reset</p>
              <p className="text-xs text-[#755a24] font-semibold underline">View Campaign</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
