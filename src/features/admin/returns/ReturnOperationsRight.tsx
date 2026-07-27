'use client';

import React from 'react';
import Image from 'next/image';
import { TimelineStep } from './returnsMockData';

export interface ReturnOperationsRightProps {
  steps: TimelineStep[];
}

export const ReturnOperationsRight: React.FC<ReturnOperationsRightProps> = ({ steps }) => {
  return (
    <aside className="w-[360px] shrink-0 border-l border-[#c4c7c7] bg-[#f4f3f3] flex flex-col overflow-y-auto p-6 gap-6 font-sans select-none h-full">
      {/* Customer Snapshot Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#c4c7c7]">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-[#efeded] shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj4Z3l59tj4CiepQKtvPyvQJHJBs31J2en_hhw3mhHwuRP6WdM9QvsVmHPzfrtNxxieOot1RjL3KXVBXoRy8Zra4GhnEzm5TlfS1OfCEMeQ-_0bN0VIBdYhg5JMdxPyKG-zH7duBkdUo-jZeLepfq9k_OuYI-DiTlKnH5ir2MRGJiJaHO4b3YtNtLDbCWouDYo5SHhZahNlUZpT7no1Zhcn4WSdt6ruYKILY1JW75RNQlKi_oqmlJW87G-YaftkcSc6nW_K22h-hl1"
              alt="Elena von Berg Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-black">Elena von Berg</h4>
            <p className="text-xs font-bold text-[#755a24] uppercase">Platinum VIP</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-[#e9e8e8] pt-4">
          <div>
            <p className="text-[10px] uppercase font-bold text-[#444748]">Lifetime Value</p>
            <p className="text-sm font-bold text-black">$42.9k</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-[#444748]">Risk Score</p>
            <p className="text-sm font-bold text-[#755a24]">5/100</p>
          </div>
        </div>
      </div>

      {/* Operations Assistant */}
      <div className="flex flex-col gap-3">
        <h4 className="text-xs font-bold uppercase tracking-widest px-1 text-black">
          Operations Assistant
        </h4>
        <button
          type="button"
          className="flex items-center justify-between p-4 bg-white border border-[#c4c7c7] rounded-xl hover:border-black transition-all group cursor-pointer"
        >
          <span className="text-xs font-bold text-black">Summarize Return</span>
          <span className="material-symbols-outlined text-[#444748] group-hover:text-black">
            description
          </span>
        </button>
        <button
          type="button"
          className="flex items-center justify-between p-4 bg-white border border-[#c4c7c7] rounded-xl hover:border-black transition-all group cursor-pointer"
        >
          <span className="text-xs font-bold text-black">Detect Fraud Risk</span>
          <span className="material-symbols-outlined text-[#444748] group-hover:text-black">
            security
          </span>
        </button>
        <button
          type="button"
          className="flex items-center justify-between p-4 bg-white border border-[#c4c7c7] rounded-xl hover:border-black transition-all group cursor-pointer"
        >
          <span className="text-xs font-bold text-black">Generate Response</span>
          <span className="material-symbols-outlined text-[#444748] group-hover:text-black">
            chat_bubble
          </span>
        </button>
      </div>

      {/* Channel Insights */}
      <div className="bg-[#e9e8e8]/50 p-6 rounded-2xl border border-[#c4c7c7]/50">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-black">
          Channel Insights
        </h4>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-black">Exchange Rate</span>
              <span className="font-bold text-black">24%</span>
            </div>
            <div className="w-full bg-[#e3e2e2] rounded-full h-1.5">
              <div className="bg-black h-1.5 rounded-full w-[24%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-black">Quality Score</span>
              <span className="font-bold text-black">98%</span>
            </div>
            <div className="w-full bg-[#e3e2e2] rounded-full h-1.5">
              <div className="bg-[#755a24] h-1.5 rounded-full w-[98%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-4 border-l-2 border-[#c4c7c7] ml-3 flex flex-col gap-8 mb-12">
        {steps.map((st) => (
          <div key={st.id} className="relative">
            <div
              className={`absolute -left-[23px] top-0 h-4 w-4 rounded-full ring-4 ring-[#faf9f9] ${
                st.isCurrent ? 'bg-[#755a24] animate-pulse' : 'bg-black'
              }`}
            />
            <p
              className={`text-xs font-bold uppercase ${
                st.isCurrent ? 'text-[#755a24]' : 'text-black'
              }`}
            >
              {st.title}
            </p>
            <p className="text-[11px] text-[#444748]">{st.timestamp}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};
