'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { AuditExplorerSidebar } from './AuditExplorerSidebar';
import { InvestigationWorkspaceCenter } from './InvestigationWorkspaceCenter';
import { SecurityAlertsRight } from './SecurityAlertsRight';
import { AuditActionBar } from './AuditActionBar';
import {
  INITIAL_AUDIT_ACTIVITIES,
  LIVE_ALERTS,
  INITIAL_AUDIT_STATE,
  AuditCenterState,
} from './auditMockData';

export const AuditCenterClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [auditState, setAuditState] = useState<AuditCenterState>(INITIAL_AUDIT_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <header className="fixed top-0 right-0 left-64 z-40 flex justify-between items-center px-6 sm:px-10 h-20 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7]/30 font-sans">
        <div className="flex items-center gap-6 w-1/2">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748]">
              search
            </span>
            <input
              type="text"
              placeholder="Search activities, users, or resources..."
              className="w-full bg-[#f4f3f3] border-none rounded-full pl-10 pr-4 py-2.5 text-xs font-sans text-black focus:ring-1 focus:ring-[#755a24]/30 outline-none"
            />
          </div>
          <div className="flex items-center gap-2 border-l border-[#c4c7c7]/30 pl-6">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#e9e8e8] transition-all cursor-pointer"
            >
              <span className="text-xs font-semibold text-[#444748]">
                {auditState.dateRange}
              </span>
              <span className="material-symbols-outlined text-sm text-[#444748]">
                expand_more
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-xs font-semibold hover:scale-105 transition-transform active:scale-95 cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">ios_share</span>
            <span>Export Report</span>
          </button>
          <div className="flex items-center gap-4 border-l border-[#c4c7c7]/30 pl-6">
            <button
              type="button"
              className="text-[#444748] hover:text-black transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <div className="relative h-10 w-10 rounded-full bg-[#ffdb99] flex items-center justify-center overflow-hidden border border-[#c4c7c7]/20 shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaY_tQ6cSfmngZ4l-y8x8ATLKZTDz2QPRf3moLr9viYjTG0NK-I4sX6p0qgGOTgXFimg46wRbxyCY9enSGY-ZW8JeObHHVzCKe7V14s1HCRnAqKpBN-6EA24JzfD0Akb1jBNsTY7OHZAIVL0-0jEjViFWWlkjwrxw2LewYeSbaVnhVkpLINz42EVkHEA4uqgxrFC0zRwTetweNRLlpD9JxGBdLwyUJammZbou76_qwnuPCrzJqXfe2QjFIQBpgNSehVX-Ct3KuAlBH"
                alt="Audit Admin Headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main Content Canvas (ml-64 mt-20) */}
        <main className="ml-64 mt-20 flex-1 flex h-[calc(100vh-5rem)] overflow-hidden min-w-0">
          {/* Left Panel: Audit Explorer (320px) */}
          <AuditExplorerSidebar
            activities={INITIAL_AUDIT_ACTIVITIES}
            activeActivityId={auditState.activeActivityId}
            activeCategoryFilter={auditState.activeCategoryFilter}
            onSelectActivity={(id) => setAuditState((prev) => ({ ...prev, activeActivityId: id }))}
            onSelectFilter={(cat) => setAuditState((prev) => ({ ...prev, activeCategoryFilter: cat }))}
          />

          {/* Center Panel: Audit Workspace */}
          <InvestigationWorkspaceCenter
            isJsonDiffView={auditState.isJsonDiffView}
            onToggleJsonDiff={() =>
              setAuditState((prev) => ({ ...prev, isJsonDiffView: !prev.isJsonDiffView }))
            }
          />

          {/* Right Panel: Security Alerts (320px) */}
          <SecurityAlertsRight alerts={LIVE_ALERTS} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <AuditActionBar
        onPreview={() => console.log('Preview audit')}
        onGenerateReport={() => console.log('Generate audit report')}
        onShareAudit={() => console.log('Share audit')}
      />
    </div>
  );
};
