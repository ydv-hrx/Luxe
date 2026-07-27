'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { InventoryDirectorySidebar } from './InventoryDirectorySidebar';
import { InventoryWorkspaceCenter } from './InventoryWorkspaceCenter';
import { InventoryIntelligenceRight } from './InventoryIntelligenceRight';
import { InventoryActionBar } from './InventoryActionBar';
import {
  INITIAL_INVENTORY_DIRECTORY,
  INITIAL_WAREHOUSE_STOCKS,
  INITIAL_VARIANT_STOCKS,
  INITIAL_TIMELINE_EVENTS,
  INITIAL_INVENTORY_STATE,
  InventoryState,
} from './inventoryMockData';

export const InventoryManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [invState, setInvState] = useState<InventoryState>(INITIAL_INVENTORY_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Navigation Bar (h-20) */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7]/30 h-20 shrink-0 font-sans">
        <div className="flex justify-between items-center w-full px-6 sm:px-10 h-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-serif text-xl font-bold tracking-widest text-black">
              LUXORA ATELIER
            </span>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-black font-bold text-xs font-sans">
                Inventory
              </a>
              <a href="#" className="text-[#444748] hover:text-black transition-colors text-xs font-sans">
                Warehouse
              </a>
              <a href="#" className="text-[#444748] hover:text-black transition-colors text-xs font-sans">
                Analytics
              </a>
              <a href="#" className="text-[#444748] hover:text-black transition-colors text-xs font-sans">
                Atelier AI
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-black text-white px-6 py-2 rounded-full text-xs font-semibold hover:opacity-80 transition-opacity shadow-md"
            >
              Create Transfer
            </button>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#444748] cursor-pointer hover:text-black transition-colors text-[20px]">
                notifications
              </span>
              <span className="material-symbols-outlined text-[#444748] cursor-pointer hover:text-black transition-colors text-[20px]">
                settings
              </span>
              <div className="relative w-9 h-9 rounded-full bg-[#e9e8e8] overflow-hidden ml-2 border border-[#c4c7c7]/30 shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8JChcwvyDeFQQf6sIL58ZwNXFiCRb0UaDWUr57LRVFvsJd1JpuzLEQhVqnETJVKJiqIpGVFw5R94UFCnXFp5169opr9qd2LvwPTLvOPG_cyNK_FX4j9VNcIydrHpX3ZbDuRa1E5iyEZYq0dKWbZ8u7lAzYiLvLT4AJgeXRxU_JzOEYJfLcF5G6Mh2U0Oa2jr4PFp6JtVN4eLq1hd_UcQVwhwcyBCBWBv_67JJ4hB1JODCAGSmaWW7CiEbxoAFL8ZuqQuu0r0lekE7"
                  alt="Director Headshot Profile"
                  fill
                  className="object-cover"
                />
              </div>
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

        {/* 3. Main Workspace Container (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 flex h-full overflow-hidden min-w-0">
          {/* Left Panel: Inventory Directory (384px) */}
          <InventoryDirectorySidebar
            items={INITIAL_INVENTORY_DIRECTORY}
            activeItemId={invState.activeItemId}
            activeFilter={invState.activeFilter}
            onSelectItem={(id) => setInvState((prev) => ({ ...prev, activeItemId: id }))}
            onSelectFilter={(filter) =>
              setInvState((prev) => ({ ...prev, activeFilter: filter }))
            }
          />

          {/* Center Workspace */}
          <InventoryWorkspaceCenter
            warehouses={INITIAL_WAREHOUSE_STOCKS}
            variants={INITIAL_VARIANT_STOCKS}
          />

          {/* Right Panel: Intelligence (320px) */}
          <InventoryIntelligenceRight timeline={INITIAL_TIMELINE_EVENTS} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <InventoryActionBar
        onQuickAdjust={() => console.log('Quick Adjust')}
        onTransfer={() => console.log('Transfer')}
        onStockCount={() => console.log('Stock Count')}
        onAiInsight={() => console.log('AI Insight')}
      />
    </div>
  );
};
