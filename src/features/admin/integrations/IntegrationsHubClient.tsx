'use client';

import React, { useState } from 'react';

import { AdminSidebar } from '../AdminSidebar';
import { ServiceCategoriesSidebar } from './ServiceCategoriesSidebar';
import { IntegrationWorkspaceCenter } from './IntegrationWorkspaceCenter';
import { SystemHealthRight } from './SystemHealthRight';
import { IntegrationsActionBar } from './IntegrationsActionBar';
import {
  INITIAL_SERVICE_CATEGORIES,
  INITIAL_INTEGRATIONS_STATE,
  IntegrationsState,
} from './integrationsMockData';

export const IntegrationsHubClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [integrationsState, setIntegrationsState] = useState<IntegrationsState>(
    INITIAL_INTEGRATIONS_STATE
  );

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col min-h-screen w-full select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <header className="flex justify-between items-center w-full lg:w-[calc(100%-18rem)] px-6 sm:px-10 h-20 sticky top-0 z-40 lg:ml-72 bg-white/85 backdrop-blur-xl border-b border-[#c4c7c7] font-sans shrink-0">
        <div className="flex items-center gap-8">
          <h2 className="font-serif text-2xl font-semibold text-black">Integrations Hub</h2>
          <div className="hidden md:flex items-center bg-[#efeded] rounded-full px-4 py-2 w-80">
            <span className="material-symbols-outlined text-[#444748] text-sm mr-2">search</span>
            <input
              type="text"
              placeholder="Search connected services..."
              value={integrationsState.searchQuery}
              onChange={(e) =>
                setIntegrationsState((prev) => ({ ...prev, searchQuery: e.target.value }))
              }
              className="bg-transparent border-none focus:ring-0 text-xs w-full outline-none text-black font-sans"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#ffdb99]/30 rounded-full border border-[#755a24]/20">
            <div className="w-2 h-2 rounded-full bg-[#755a24] animate-pulse" />
            <span className="text-[10px] font-bold uppercase text-[#755a24] tracking-wider">
              Production Environment
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#444748]">
            <button
              type="button"
              className="hover:text-black transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">refresh</span>
            </button>
            <button
              type="button"
              className="hover:text-black transition-colors relative cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full" />
            </button>
            <button
              type="button"
              className="bg-black text-white text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-sm"
            >
              Create Integration
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-[calc(100vh-80px)] w-full">
        {/* 2. Side Navigation Sidebar (w-72) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main Workspace Container (lg:ml-72) */}
        <main className="lg:ml-72 flex-1 p-6 sm:p-10 flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-80px)] min-w-0 pb-32">
          {/* Left Panel: Services List (w-1/4) */}
          <ServiceCategoriesSidebar
            categories={INITIAL_SERVICE_CATEGORIES}
            activeCategoryId={integrationsState.activeCategoryId}
            onSelectCategory={(id) =>
              setIntegrationsState((prev) => ({ ...prev, activeCategoryId: id }))
            }
          />

          {/* Center Panel: Commerce Stack & Bento Cards (w-1/2) */}
          <IntegrationWorkspaceCenter />

          {/* Right Panel: System Health & AI Assistant (w-1/4) */}
          <SystemHealthRight />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <IntegrationsActionBar
        onTestConnection={() => console.log('Test connection')}
        onPreviewPayload={() => console.log('Preview payload')}
        onSaveDraft={() => console.log('Save draft')}
        onPublishChanges={() => console.log('Publish changes')}
      />
    </div>
  );
};
