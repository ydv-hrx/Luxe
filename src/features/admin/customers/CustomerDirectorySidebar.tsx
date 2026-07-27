'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CustomerCardItem } from './customerMockData';

export interface CustomerDirectorySidebarProps {
  customers: CustomerCardItem[];
  activeCustomerId: string;
  onSelectCustomer: (id: string) => void;
}

export const CustomerDirectorySidebar: React.FC<CustomerDirectorySidebarProps> = ({
  customers,
  activeCustomerId,
  onSelectCustomer,
}) => {
  const [searchQuery, _setSearchQuery] = useState('');

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="col-span-12 lg:col-span-3 border-r border-[#c4c7c7] p-6 overflow-y-auto max-h-[calc(100vh-80px)] hide-scrollbar font-sans select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-2xl font-semibold text-black">Directory</h2>
        <span className="text-xs font-semibold text-[#444748]">1,204 Active</span>
      </div>

      {/* Directory Cards */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const isActive = activeCustomerId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectCustomer(item.id)}
              className={`p-4 bg-white rounded-2xl shadow-sm transition-all cursor-pointer border ${
                isActive
                  ? 'border-black ring-2 ring-black/5'
                  : 'border-transparent hover:border-[#c4c7c7]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#efeded] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-semibold text-black truncate">
                    {item.name}
                  </p>
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdb99] text-[#795f28] text-[10px] font-bold uppercase tracking-wider">
                    {item.vipTier}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex justify-between items-end border-t border-[#efeded] pt-3">
                <div>
                  <p className="text-[10px] uppercase text-[#444748] font-bold tracking-widest">
                    Lifetime Value
                  </p>
                  <p className="font-serif text-lg font-semibold text-black">{item.ltvText}</p>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.status === 'ACTIVE'
                      ? 'text-green-600 bg-green-50'
                      : 'text-[#444748] bg-[#efeded]'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
