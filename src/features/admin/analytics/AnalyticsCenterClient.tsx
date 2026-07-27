'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { PerformanceTracksSidebar } from './PerformanceTracksSidebar';
import { ExecutiveWorkspaceCenter } from './ExecutiveWorkspaceCenter';
import { ExecutiveIntelligenceRight } from './ExecutiveIntelligenceRight';
import { AnalyticsActionBar } from './AnalyticsActionBar';
import { INITIAL_ANALYTICS_STATE, AnalyticsState } from './analyticsMockData';

export const AnalyticsCenterClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [analyticsState, setAnalyticsState] = useState<AnalyticsState>(INITIAL_ANALYTICS_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Navigation Bar (h-20) */}
      <header className="flex items-center justify-between px-6 sm:px-10 h-20 bg-white/80 backdrop-blur-xl border-b border-[#c4c7c7]/30 z-30 font-sans shrink-0">
        <div className="flex items-center gap-6">
          <h2 className="font-serif text-2xl font-semibold text-black">Marketing Analytics</h2>
          <div className="relative flex items-center bg-[#f4f3f3] px-4 py-2 rounded-full border border-[#c4c7c7]/50 focus-within:border-[#755a24] transition-all w-80">
            <span className="material-symbols-outlined text-[#444748] mr-2 text-sm">search</span>
            <input
              type="text"
              placeholder="Search campaign data..."
              value={analyticsState.searchQuery}
              onChange={(e) =>
                setAnalyticsState((prev) => ({ ...prev, searchQuery: e.target.value }))
              }
              className="bg-transparent border-none text-xs w-full outline-none text-black font-sans"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-1 bg-[#efeded] rounded-full">
            <button
              type="button"
              className="p-2 hover:bg-[#e3e2e2] rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#444748] text-sm">
                notifications
              </span>
            </button>
            <button
              type="button"
              className="p-2 hover:bg-[#e3e2e2] rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#444748] text-sm">bookmark</span>
            </button>
            <button
              type="button"
              className="p-2 hover:bg-[#e3e2e2] rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#444748] text-sm">dark_mode</span>
            </button>
          </div>
          <button
            type="button"
            className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
          >
            Create Entry
          </button>
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c4c7c7] shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvn6JvNUbN-8rCuuM-1FMuMsxOG23BH7_yTqIhyrnfkHG9_6LTXUNwWhVR-bS482g7myIGBV0-wPK7Exi6efq2ZRwiumwAgyMU17uPwNOgZGjKvS6FahBBrKx3dxUwvJT3XX927Yjqhhco_QEEaN4BpcLqXz3BR5WeZmxib8LOJA_DAPJNRYHTvHD62m9bymCm9IW1E0r1wGIPPjw6NGR_nv_IQE2HdFEnDwFa_WIE_2BjuUdCWOwYVMBxqYDZbHGYHnpov1HGtJvU"
              alt="Analytics Director Headshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main Workspace Container (lg:ml-64) */}
        <main className="lg:ml-64 flex-1 flex h-[calc(100vh-80px)] overflow-hidden min-w-0">
          {/* Left Panel: Performance Tracks (288px) */}
          <PerformanceTracksSidebar
            activeTrackId={analyticsState.activeTrack}
            timeframeRange={analyticsState.timeframeRange}
            onSelectTrack={(id) =>
              setAnalyticsState((prev) => ({ ...prev, activeTrack: id }))
            }
          />

          {/* Center Panel: Executive Analytics Workspace */}
          <ExecutiveWorkspaceCenter />

          {/* Right Panel: Executive Intelligence (320px) */}
          <ExecutiveIntelligenceRight />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <AnalyticsActionBar
        onExportPDF={() => console.log('Export PDF')}
        onGenerateReport={() => console.log('Generate report')}
        onShareDashboard={() => console.log('Share dashboard')}
      />
    </div>
  );
};
