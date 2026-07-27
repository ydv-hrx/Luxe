'use client';

import React from 'react';
import Image from 'next/image';
import { FUNNEL_STAGES, ACTIVE_CAMPAIGNS } from './analyticsMockData';

export const ExecutiveWorkspaceCenter: React.FC = () => {
  return (
    <section className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-8 pb-32 min-w-0 font-sans select-none h-full">
      {/* Top Row: Revenue Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gross Revenue Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#ffdb99]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs font-bold text-[#444748] uppercase tracking-[0.2em]">
                Gross Revenue
              </h3>
              <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-sm">trending_up</span> 14.2%
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black">€2,842,900</h2>
              <span className="text-xs text-[#444748]">YoY Growth</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12 border-t border-[#c4c7c7]/20 pt-6">
            <div>
              <p className="text-xs text-[#444748] mb-1">Today</p>
              <p className="font-serif text-xl font-bold text-black">€42.4k</p>
            </div>
            <div>
              <p className="text-xs text-[#444748] mb-1">Weekly</p>
              <p className="font-serif text-xl font-bold text-black">€612.8k</p>
            </div>
            <div>
              <p className="text-xs text-[#444748] mb-1">Monthly</p>
              <p className="font-serif text-xl font-bold text-black">€2.84M</p>
            </div>
          </div>
        </div>

        {/* VIP Growth Card */}
        <div className="bg-black text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs font-bold text-[#e3e2e2] uppercase tracking-[0.2em]">
                VIP Growth
              </h3>
              <span
                className="material-symbols-outlined text-[#755a24]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
            </div>
            <p className="font-serif text-2xl font-bold leading-tight">
              +124 New High-Net-Worth Individuals
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <p className="text-xs text-white/70">Average Order Value</p>
              <p className="text-xs font-bold text-[#755a24]">€12,400</p>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#755a24] h-full" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Global Map & Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Global Sales Map */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-black">Global Distribution</h3>
            <button type="button" className="text-xs text-[#755a24] hover:underline font-bold">
              View Regional Details
            </button>
          </div>
          <div className="flex-1 relative min-h-[300px] bg-[#f4f3f3] rounded-xl overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIIiwTj4kIl-nEGdbVXO92zBgRdRYjpHUiyVStJ3yvx102N3vMkdZZ5i1wwwFsJnacYD7wLJiDrpBX3ygZwOtndnUVVY1zVu9hom0tmtPY5-HOWxqezsypxbUddr7Gq9pxvj5SotMxIMq_nAkjZjLltaQ4SNCgOTvJ5RgprmBliRjaGAzXKX7MPGNOYlu6lI6GI1zECBWTAGJfwmUdnDGceA9r8BFW8x90lAUP_9xN4TCuuaTvcljIC5AFsIG9huDjwopSsGGGra1h"
              alt="Global Distribution Map Visual"
              fill
              className="object-cover opacity-60 mix-blend-multiply"
            />
            {/* Interactive Overlay */}
            <div className="absolute top-4 left-4 p-4 bg-white/90 backdrop-blur shadow-sm rounded-xl border border-[#c4c7c7]/20">
              <p className="text-[10px] uppercase tracking-tighter text-[#444748] font-bold mb-1">
                Top Performer
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#755a24]" />
                <p className="font-bold text-xs text-black">France (Paris)</p>
              </div>
              <p className="text-lg font-serif font-bold text-black mt-1">€1.2M</p>
            </div>
          </div>
        </div>

        {/* Funnel Visual */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30 flex flex-col">
          <h3 className="font-serif text-2xl font-bold text-black mb-8">Acquisition Funnel</h3>
          <div className="flex-1 flex flex-col items-center justify-center space-y-1">
            {FUNNEL_STAGES.map((stg) => (
              <div
                key={stg.id}
                className={`${stg.widthPercent} ${stg.bgStyle} h-16 flex items-center justify-between px-8 rounded-lg transition-colors cursor-default`}
              >
                <span className="text-xs font-bold">{stg.label}</span>
                <span className="font-serif text-lg font-bold">{stg.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-around text-center border-t border-[#c4c7c7]/20 pt-6">
            <div>
              <p className="text-xs text-[#444748] mb-1">Conversion</p>
              <p className="font-bold text-[#755a24] text-sm">4.92%</p>
            </div>
            <div>
              <p className="text-xs text-[#444748] mb-1">Drop-off</p>
              <p className="font-bold text-red-600 text-sm">12.1%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Active Campaign Studio */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-serif text-2xl font-bold text-black">Active Campaign Studio</h3>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-4 py-2 text-xs font-semibold bg-[#efeded] rounded-full hover:bg-[#e3e2e2] transition-colors"
            >
              By Performance
            </button>
            <button
              type="button"
              className="px-4 py-2 text-xs font-semibold text-[#444748] hover:text-black transition-colors"
            >
              By Date
            </button>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left font-sans">
            <thead className="border-b border-[#c4c7c7]/20">
              <tr>
                <th className="py-4 text-[10px] font-bold text-[#755a24] uppercase tracking-widest">
                  Campaign
                </th>
                <th className="py-4 text-[10px] font-bold text-[#755a24] uppercase tracking-widest">
                  Status
                </th>
                <th className="py-4 text-[10px] font-bold text-[#755a24] uppercase tracking-widest">
                  Open Rate
                </th>
                <th className="py-4 text-[10px] font-bold text-[#755a24] uppercase tracking-widest">
                  CTR
                </th>
                <th className="py-4 text-[10px] font-bold text-[#755a24] uppercase tracking-widest">
                  ROAS
                </th>
                <th className="py-4 text-[10px] font-bold text-[#755a24] uppercase tracking-widest text-right">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c4c7c7]/10">
              {ACTIVE_CAMPAIGNS.map((cmp) => (
                <tr key={cmp.id} className="group hover:bg-[#faf9f9] transition-colors cursor-pointer">
                  <td className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-16 rounded-lg bg-[#efeded] overflow-hidden shrink-0">
                        <Image
                          src={cmp.image}
                          alt={cmp.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm">{cmp.title}</p>
                        <p className="text-xs text-[#444748]">{cmp.subtitle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {cmp.status}
                    </span>
                  </td>
                  <td className="py-6 text-xs font-semibold text-black">{cmp.openRate}</td>
                  <td className="py-6 text-xs font-semibold text-black">{cmp.ctr}</td>
                  <td className="py-6 text-xs font-bold text-[#755a24]">{cmp.roas}</td>
                  <td className="py-6 text-right font-serif text-lg font-bold text-black">
                    {cmp.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
