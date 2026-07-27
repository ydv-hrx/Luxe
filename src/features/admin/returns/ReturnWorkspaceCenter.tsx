'use client';

import React from 'react';
import Image from 'next/image';
import { InspectionCheckItem } from './returnsMockData';

export interface ReturnWorkspaceCenterProps {
  checklist: InspectionCheckItem[];
  progress: number;
  onToggleCheckItem: (id: string) => void;
}

export const ReturnWorkspaceCenter: React.FC<ReturnWorkspaceCenterProps> = ({
  checklist,
  progress,
  onToggleCheckItem,
}) => {
  return (
    <section className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#faf9f9] relative pb-32 min-w-0 font-sans select-none h-full">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Return Summary Header */}
        <div className="flex justify-between items-end border-b border-[#c4c7c7] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-serif text-3xl font-semibold text-black">RTN-882</h2>
              <span className="bg-[#e9e8e8] text-black px-3 py-1 rounded-full text-xs font-semibold font-sans">
                Order #LX-4892
              </span>
            </div>
            <p className="text-[#444748] font-sans text-sm italic">
              Reason for return: "Change of Mind — Aesthetic fit didn't match personal preference."
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#444748] uppercase mb-1">Estimated Refund</p>
            <p className="font-serif text-2xl font-bold text-black">$4,250.00</p>
          </div>
        </div>

        {/* Layout Grid for Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Product Visual (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-[#c4c7c7] aspect-[4/3] relative group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqu67_VKCGyQfyjx36HuRopKagizXHXyeSFY9MENaSSL9PLHVTGTQun4oL9mwm9EDvkdn7vUW6LT448m2DO7tKIZ3ItO-GqThc9zXZUVAyrKgXZvk2V1M-FCJ5mscBBUgN5djtNaF_cVn81-0JNlzgO55oJ3Duvds0e88ZYxc1X7J0SxvreGJU9ZHmcQ0l1bHPrvNX_bkxTqK2oL7xW5OruUkWNpAIjGCM6kW7mPKuBrnB3npeYhTN5eMMA6me3zh0T8GdaajvSFz3"
                alt="Onyx Grand Tote Product Visual"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-widest border border-[#c4c7c7] text-black">
                  LUX-204-BLK
                </span>
                <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-widest">
                  Mint Condition
                </span>
              </div>
            </div>
          </div>

          {/* Inspection Checklist (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-sans text-xs font-bold text-black uppercase tracking-widest mb-6">
                  Inspection Checklist
                </h3>
                <div className="flex flex-col gap-6">
                  {checklist.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onToggleCheckItem(item.id)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span
                        className={`text-sm ${
                          item.isChecked ? 'text-black font-semibold' : 'text-[#444748]'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`material-symbols-outlined text-xl ${
                          item.isChecked ? 'text-black font-bold' : 'text-[#444748]'
                        }`}
                      >
                        {item.isChecked ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-black">Progress</span>
                  <span className="text-xs font-bold text-black">{progress}%</span>
                </div>
                <div className="w-full bg-[#efeded] rounded-full h-1.5">
                  <div
                    style={{ width: `${progress}%` }}
                    className="bg-black h-1.5 rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Resolution Suggestion Card */}
        <div className="bg-[#1c1b1b] text-white p-8 rounded-2xl flex items-center gap-6 shadow-xl">
          <span className="material-symbols-outlined text-4xl text-[#ffdea4] shrink-0">
            auto_awesome
          </span>
          <div className="flex-1 font-sans">
            <h4 className="font-sans text-xs font-bold uppercase mb-1 tracking-widest text-white">
              Atelier AI Suggestion
            </h4>
            <p className="text-sm italic opacity-90 leading-relaxed text-[#e3e2e0]">
              "Based on inspection results and Elena's history, we recommend a{' '}
              <strong className="text-white">Full Refund to Store Credit</strong> with a complimentary voucher for the upcoming Winter Solstice collection."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
