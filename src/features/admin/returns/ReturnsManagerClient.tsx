'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { ReturnsQueueSidebar } from './ReturnsQueueSidebar';
import { ReturnWorkspaceCenter } from './ReturnWorkspaceCenter';
import { ReturnOperationsRight } from './ReturnOperationsRight';
import { ReturnsActionBar } from './ReturnsActionBar';
import {
  INITIAL_RETURNS_QUEUE,
  INITIAL_INSPECTION_CHECKLIST,
  INITIAL_TIMELINE_STEPS,
  INITIAL_RETURNS_STATE,
  ReturnsState,
} from './returnsMockData';

export const ReturnsManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [returnsState, setReturnsState] = useState<ReturnsState>(INITIAL_RETURNS_STATE);
  const [checklist, setChecklist] = useState(INITIAL_INSPECTION_CHECKLIST);

  const handleToggleCheckItem = (id: string) => {
    setChecklist((prev) => {
      const updated = prev.map((chk) =>
        chk.id === id ? { ...chk, isChecked: !chk.isChecked } : chk
      );
      const checkedCount = updated.filter((c) => c.isChecked).length;
      const newProgress = Math.round((checkedCount / updated.length) * 100);
      setReturnsState((s) => ({ ...s, inspectionProgress: newProgress }));
      return updated;
    });
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <header className="fixed top-0 left-72 right-0 h-20 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7] flex justify-between items-center px-6 sm:px-10 z-40 font-sans">
        <div className="flex items-center gap-8">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#444748]">
              search
            </span>
            <input
              type="text"
              placeholder="Search returns, clients, or items..."
              className="pl-10 pr-4 py-2 w-80 bg-[#f4f3f3] border-none rounded-full text-xs font-sans focus:ring-1 focus:ring-black outline-none text-black"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-xs font-semibold text-[#444748] hover:text-black transition-all">
              Collections
            </a>
            <a href="#" className="text-xs font-semibold text-[#444748] hover:text-black transition-all">
              VIP Clients
            </a>
            <a href="#" className="text-xs font-semibold text-[#444748] hover:text-black transition-all">
              Logistics
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="material-symbols-outlined p-2 text-[#444748] hover:text-black transition-all"
          >
            notifications
          </button>
          <button
            type="button"
            className="material-symbols-outlined p-2 text-[#444748] hover:text-black transition-all"
          >
            settings
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-[#c4c7c7] relative shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbjERpeTJuBEl9B08SpCG-CdPvo6SZi6afp2KSjMrn3ybM11Zte1rgFp47-5W__CaDWo7AWRFtC2kdQvUO5JAASiXG-8XdjwckvXk-1IkutUToAYLUKiKOjzl7xjSnTVxFmuZTJzwrzh-teyPvWg-XYa4szl0yGEHJxrjpsfFVkEvvI9XO9hTgl0eNXFODlsJ1gkPDqe9RA3a0ho1HsyC9TL-gtICxf5ZEU9WwgdSdxvZCuRUSzjxZFsj7pUd8GPly5tFRdH21PDa7"
              alt="Manager Avatar Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-72) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main Workspace Canvas (ml-72 mt-20) */}
        <main className="ml-72 mt-20 flex-1 flex h-[calc(100vh-5rem)] overflow-hidden min-w-0">
          {/* Left Panel: Returns Queue (320px) */}
          <ReturnsQueueSidebar
            queue={INITIAL_RETURNS_QUEUE}
            activeReturnId={returnsState.activeReturnId}
            onSelectReturn={(id) =>
              setReturnsState((prev) => ({ ...prev, activeReturnId: id }))
            }
          />

          {/* Center Panel: Return Review Workspace */}
          <ReturnWorkspaceCenter
            checklist={checklist}
            progress={returnsState.inspectionProgress}
            onToggleCheckItem={handleToggleCheckItem}
          />

          {/* Right Panel: Operations Assistant & Timeline (360px) */}
          <ReturnOperationsRight steps={INITIAL_TIMELINE_STEPS} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <ReturnsActionBar
        onApprove={() => console.log('Approved return')}
        onRefund={() => console.log('Refunded return')}
        onExchange={() => console.log('Exchanged return')}
      />
    </div>
  );
};
