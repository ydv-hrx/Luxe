'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PromotionRuleItem, EligibilityGroupItem } from './promotionMockData';

export interface CampaignBuilderCenterProps {
  rules: PromotionRuleItem[];
  eligibility: EligibilityGroupItem[];
  previewDevice: 'desktop' | 'mobile';
  onToggleDevice: (device: 'desktop' | 'mobile') => void;
  onSelectRule: (id: string) => void;
  onToggleEligibility: (id: string) => void;
}

export const CampaignBuilderCenter: React.FC<CampaignBuilderCenterProps> = ({
  rules,
  eligibility,
  previewDevice,
  onToggleDevice,
  onSelectRule,
  onToggleEligibility,
}) => {
  const [campaignTitle, setCampaignTitle] = useState('Winter Solstice Private Sale');
  const [category, setCategory] = useState('Furniture Collection');
  const [discountPercent, setDiscountPercent] = useState('25%');

  return (
    <section className="flex-1 bg-[#f4f3f3] overflow-y-auto px-6 sm:px-10 py-8 relative pb-32 min-w-0 font-sans select-none h-full">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="font-serif text-4xl font-bold text-black">{campaignTitle}</h1>
            <p className="text-base text-[#444748] mt-1 font-sans">
              Configure the exclusive seasonal reward for top-tier clientele.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#755a24]" />
            <span className="text-xs font-bold text-[#755a24] font-sans">Scheduled for Dec 15</span>
          </div>
        </div>

        {/* Campaign Identity Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30">
          <h4 className="font-serif text-xl font-semibold text-black mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-black">info</span>
            Campaign Identity
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#444748] mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  value={campaignTitle}
                  onChange={(e) => setCampaignTitle(e.target.value)}
                  className="w-full border-0 border-b border-[#c4c7c7] focus:border-black focus:ring-0 px-0 py-2 text-base text-black font-semibold outline-none transition-all"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#444748] mb-2">
                  Promotion Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border-0 border-b border-[#c4c7c7] focus:border-black focus:ring-0 px-0 py-2 text-base text-black font-semibold bg-transparent outline-none transition-all"
                >
                  <option value="Furniture Collection">Furniture Collection</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl bg-[#f4f3f3] border-2 border-dashed border-[#c4c7c7] flex flex-col items-center justify-center group overflow-hidden cursor-pointer">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrSHi9WRWUcvGNIjCaXgnLKv1rCiNrnyEdAM3CvhtuoaD7fkEQE3fG93pP8kQYs84bkITqwL6aJ9stZTlJwoCHnhydnOduai90kkQX1UpwSKbi2dFNqZT7s9XkvZMgdCklShrkGOnKfRwrz37ma9kT8p-gQf1h1mcMdYNGMjJggKP4QoetqDWLcp2DQ7HIIKzPq-MEGzqBbNF4SZ_ruSRiOjoMm5crkbji3ZE4Hjzawary2s9btfHaFaj9G8gGWPGBCN_FCB-TFauj"
                alt="Banner Preview"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 flex flex-col items-center text-black">
                <span className="material-symbols-outlined text-3xl mb-1">upload_file</span>
                <p className="text-xs font-bold uppercase tracking-wider">Change Banner Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotion Rules Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30">
          <h4 className="font-serif text-xl font-semibold text-black mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-black">sell</span>
            Promotion Rules
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rules.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => onSelectRule(r.id)}
                className={`p-6 rounded-2xl flex flex-col items-center gap-3 transition-all ${
                  r.isSelected
                    ? 'border-2 border-black bg-black/5'
                    : 'border border-[#c4c7c7] hover:border-black'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    r.isSelected ? 'text-black' : 'text-[#444748]'
                  }`}
                >
                  {r.icon}
                </span>
                <span className={`text-xs font-bold ${r.isSelected ? 'text-black' : 'text-[#444748]'}`}>
                  {r.title}
                </span>
                {r.value && (
                  <input
                    type="text"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    className="text-center w-20 border-0 border-b border-black bg-transparent font-bold text-xl focus:ring-0 outline-none text-black"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Eligibility & Scheduling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30">
            <h4 className="font-serif text-xl font-semibold text-black mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-black">group</span>
              Eligibility
            </h4>
            <div className="space-y-4">
              {eligibility.map((grp) => (
                <div
                  key={grp.id}
                  onClick={() => onToggleEligibility(grp.id)}
                  className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${
                    grp.isSelected ? 'border-black' : 'border-[#c4c7c7] opacity-60 hover:opacity-100'
                  }`}
                >
                  <span className="text-xs font-bold text-black">{grp.label}</span>
                  <span className="material-symbols-outlined text-black text-xl">
                    {grp.isSelected ? 'check_circle' : 'circle'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30">
            <h4 className="font-serif text-xl font-semibold text-black mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-black">calendar_today</span>
              Timeline
            </h4>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-[#444748] mb-2">Starts</label>
                <input
                  type="datetime-local"
                  defaultValue="2023-12-15T00:00"
                  className="w-full border-0 border-b border-[#c4c7c7] focus:border-black focus:ring-0 px-0 pb-2 text-sm text-black font-semibold outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#444748] mb-2">Ends</label>
                <input
                  type="datetime-local"
                  defaultValue="2024-01-05T23:59"
                  className="w-full border-0 border-b border-[#c4c7c7] focus:border-black focus:ring-0 px-0 pb-2 text-sm text-black font-semibold outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/30">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-serif text-xl font-semibold text-black flex items-center gap-2">
              <span className="material-symbols-outlined text-black">visibility</span>
              Live Preview
            </h4>
            <div className="flex bg-[#efeded] p-1 rounded-lg">
              <button
                type="button"
                onClick={() => onToggleDevice('desktop')}
                className={`px-3 py-1 rounded-md text-xs font-bold flex items-center gap-2 transition-all ${
                  previewDevice === 'desktop'
                    ? 'bg-white shadow-sm text-black'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                <span className="material-symbols-outlined text-sm">desktop_windows</span>
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => onToggleDevice('mobile')}
                className={`px-3 py-1 rounded-md text-xs font-bold flex items-center gap-2 transition-all ${
                  previewDevice === 'mobile'
                    ? 'bg-white shadow-sm text-black'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                <span className="material-symbols-outlined text-sm">smartphone</span>
                <span>Mobile</span>
              </button>
            </div>
          </div>

          <div
            className={`border border-[#c4c7c7] rounded-xl overflow-hidden bg-[#faf9f9] relative mx-auto transition-all ${
              previewDevice === 'mobile' ? 'max-w-[360px]' : 'w-full'
            }`}
          >
            {/* Storefront Hero Mockup */}
            <div className="h-96 relative flex items-center px-10 sm:px-16 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8T4C8lMiU-y45tixbZX7bOsUaSZOytpUyzB25tzPiAQ5EGIXnmwrPHs72n5gN0uOfFAZHRGtrySUpENL5AAv7sgBOd5k29Wjr0kxbSyC83Y3LGfJsVt4sXvtS1PT2vcmDz9YTdqJPqeYVhd1lkl12wEX76_0OKXaWoxSwVLku2F5NTtNAvJ1pIp6j81rQDqDaPimTc_3DSNKbF6TjlKe2gAdZ5bbcy-WdnrERkwWp7rfRxtob9tdbV-vbx2v5e6ZR39Jh3RB2GlNJ"
                alt="Storefront Preview Mockup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="relative z-10 max-w-md text-white">
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#e5e2e1]">
                  Private Event
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">{campaignTitle}</h2>
                <p className="text-sm opacity-90 mb-6 italic">
                  Exclusive {discountPercent} reward on the {category} for our most loyal patrons.
                </p>
                <button
                  type="button"
                  className="px-6 py-3 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-white/90 transition-all"
                >
                  Explore the Collection
                </button>
              </div>
              <div className="absolute bottom-6 right-6 sm:right-12 bg-white/10 backdrop-blur-md p-4 border border-white/20 text-white rounded-lg">
                <p className="text-[10px] uppercase font-bold mb-1 opacity-70">Promotion applied</p>
                <p className="font-serif text-2xl font-bold">-{discountPercent} OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
