'use client';

import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopNavBar } from './AdminTopNavBar';

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex h-screen overflow-hidden w-full">
      {/* Sidebar (Fixed Desktop + Drawer Mobile) */}
      <AdminSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Shell */}
      <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-hidden min-w-0">
        {/* Top Header */}
        <AdminTopNavBar
          onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        />

        {/* Scrollable Main Canvas */}
        <div className="flex-1 overflow-y-auto bg-[#faf9f9]">
          {children}
        </div>
      </main>
    </div>
  );
};
