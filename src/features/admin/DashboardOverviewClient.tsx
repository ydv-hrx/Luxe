'use client';

import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { KpiCard } from './KpiCard';
import { QuickActionsRow } from './QuickActionCard';
import { AnalyticsChart } from './AnalyticsChart';
import { TopProductsCard } from './TopProductsCard';
import { RecentTransactionsTable } from './RecentTransactionsTable';
import { GlobalActivityTimeline } from './GlobalActivityTimeline';
import { InventoryAlertsCard } from './InventoryAlertsCard';
import { ADMIN_MOCK_DATA } from './adminMockData';

export const DashboardOverviewClient: React.FC = () => {
  return (
    <DashboardLayout>
      <section className="p-4 sm:p-6 lg:p-10 space-y-8 sm:space-y-10 pb-16 max-w-[1920px] mx-auto select-none">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight font-bold">
              Dashboard Overview
            </h2>
            <p className="text-[#444748]/60 mt-1.5 font-sans text-sm sm:text-base">
              Welcome back, Director. Here is your atelier&apos;s performance summary.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Date Range Picker */}
            <div className="flex items-center bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] px-4 py-3 rounded-2xl border border-[#c4c7c7]/10 cursor-pointer hover:bg-[#f4f3f3] transition-colors group font-sans">
              <span className="material-symbols-outlined text-[#755a24] mr-3 text-[20px]">
                calendar_today
              </span>
              <span className="text-xs sm:text-sm text-black font-bold mr-6">May 01 - May 30</span>
              <span className="material-symbols-outlined text-[#444748]/40 group-hover:text-black transition-colors text-[20px]">
                expand_more
              </span>
            </div>

            {/* Export Reports Button */}
            <button
              type="button"
              className="bg-black text-white px-5 sm:px-6 py-3 rounded-2xl font-sans text-xs sm:text-sm font-semibold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:opacity-90 transition-all flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              Export Reports
            </button>
          </div>
        </div>

        {/* 1. KPI Cards Grid (1 col mobile, 2 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMIN_MOCK_DATA.kpis.map((metric) => (
            <KpiCard key={metric.id} metric={metric} />
          ))}
        </div>

        {/* 2. Quick Actions Row */}
        <QuickActionsRow actions={ADMIN_MOCK_DATA.quickActions} />

        {/* 3. Main Analytics Chart Area */}
        <AnalyticsChart />

        {/* 4. Data Row (Top Products 1 col, Recent Transactions 2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <TopProductsCard products={ADMIN_MOCK_DATA.topProducts} />
          </div>
          <div className="lg:col-span-2">
            <RecentTransactionsTable transactions={ADMIN_MOCK_DATA.recentTransactions} />
          </div>
        </div>

        {/* 5. Timeline & Alerts Grid (Global Activity 1 col, Inventory Alerts 1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <GlobalActivityTimeline activities={ADMIN_MOCK_DATA.activityTimeline} />
          <InventoryAlertsCard alerts={ADMIN_MOCK_DATA.inventoryAlerts} />
        </div>
      </section>
    </DashboardLayout>
  );
};
