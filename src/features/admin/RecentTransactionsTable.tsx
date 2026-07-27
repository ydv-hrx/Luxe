'use client';

import React from 'react';
import Image from 'next/image';
import { TransactionItem } from './adminMockData';

export interface RecentTransactionsTableProps {
  transactions: TransactionItem[];
}

export const RecentTransactionsTable: React.FC<RecentTransactionsTableProps> = ({ transactions }) => {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-[#c4c7c7]/10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
        <h4 className="font-serif text-2xl sm:text-3xl text-black font-semibold">
          Recent Transactions
        </h4>
        <div className="flex gap-3">
          <button
            type="button"
            className="bg-[#f4f3f3] text-black px-4 sm:px-5 py-2.5 rounded-xl font-sans text-xs font-semibold hover:bg-[#e3e2e2] transition-colors border border-[#c4c7c7]/10"
          >
            Filter
          </button>
          <button
            type="button"
            className="bg-black text-white px-4 sm:px-5 py-2.5 rounded-xl font-sans text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
          >
            All Orders
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans min-w-[600px]">
          <thead>
            <tr className="border-b border-[#c4c7c7]/20">
              <th className="pb-6 font-bold text-[#755a24] uppercase tracking-[0.2em] text-[10px]">
                Order ID
              </th>
              <th className="pb-6 font-bold text-[#755a24] uppercase tracking-[0.2em] text-[10px]">
                Customer
              </th>
              <th className="pb-6 font-bold text-[#755a24] uppercase tracking-[0.2em] text-[10px]">
                Status
              </th>
              <th className="pb-6 font-bold text-[#755a24] uppercase tracking-[0.2em] text-[10px]">
                Fulfillment
              </th>
              <th className="pb-6 font-bold text-[#755a24] uppercase tracking-[0.2em] text-[10px] text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c4c7c7]/10">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-[#f4f3f3] transition-colors cursor-pointer group"
              >
                {/* Order Number */}
                <td className="py-5 sm:py-6 text-xs sm:text-sm font-bold text-black">
                  {tx.orderNumber}
                </td>

                {/* Customer Meta */}
                <td className="py-5 sm:py-6">
                  <div className="flex items-center gap-3.5">
                    {tx.avatarUrl ? (
                      <div className="w-9 h-9 rounded-full bg-[#f4f3f3] overflow-hidden shadow-sm border border-[#c4c7c7]/20 relative shrink-0">
                        <Image
                          src={tx.avatarUrl}
                          alt={tx.customerName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center shadow-sm border border-[#c4c7c7]/20 shrink-0">
                        <span className="text-[11px] font-bold text-black">{tx.initials}</span>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-neutral-900">
                        {tx.customerName}
                      </span>
                      <span className="text-[10px] text-[#444748]/50 font-medium">
                        {tx.customerTier}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Payment Status Badge */}
                <td className="py-5 sm:py-6">
                  {tx.status === 'Success' ? (
                    <span className="px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-100">
                      Success
                    </span>
                  ) : (
                    <span className="px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-700 text-[10px] font-bold uppercase tracking-widest border border-orange-100">
                      Pending
                    </span>
                  )}
                </td>

                {/* Fulfillment Badge */}
                <td className="py-5 sm:py-6">
                  {tx.fulfillment === 'Priority' ? (
                    <span className="px-3.5 py-1.5 rounded-full bg-black/5 text-black text-[10px] font-bold uppercase tracking-widest border border-black/10">
                      Priority
                    </span>
                  ) : (
                    <span className="px-3.5 py-1.5 rounded-full bg-[#f4f3f3] text-[#444748]/60 text-[10px] font-bold uppercase tracking-widest border border-[#c4c7c7]/10">
                      {tx.fulfillment}
                    </span>
                  )}
                </td>

                {/* Order Amount */}
                <td className="py-5 sm:py-6 text-right font-bold text-xs sm:text-sm text-black">
                  {tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
