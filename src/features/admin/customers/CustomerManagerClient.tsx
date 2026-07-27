'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavBar } from '../AdminTopNavBar';
import { CustomerDirectorySidebar } from './CustomerDirectorySidebar';
import { CustomerWorkspaceCenter } from './CustomerWorkspaceCenter';
import { CustomerInsightsRight } from './CustomerInsightsRight';
import { CustomerActionBar } from './CustomerActionBar';
import {
  INITIAL_CUSTOMER_DIRECTORY,
  INITIAL_PURCHASE_HISTORY,
  INITIAL_CLIENT_WISHLIST,
  INITIAL_INTERACTION_TIMELINE,
  INITIAL_CUSTOMER_STATE,
  CustomerState,
} from './customerMockData';

export const CustomerManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [customerState, setCustomerState] = useState<CustomerState>(INITIAL_CUSTOMER_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col min-h-screen w-full select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <AdminTopNavBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 min-h-[calc(100vh-80px)] w-full">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 12-Column CRM Workspace (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 grid grid-cols-12 min-h-[calc(100vh-80px)] min-w-0">
          {/* Column 1: Customer Directory (col-span-3) */}
          <CustomerDirectorySidebar
            customers={INITIAL_CUSTOMER_DIRECTORY}
            activeCustomerId={customerState.activeCustomerId}
            onSelectCustomer={(id) =>
              setCustomerState((prev) => ({ ...prev, activeCustomerId: id }))
            }
          />

          {/* Column 2: Customer Workspace (col-span-6) */}
          <CustomerWorkspaceCenter
            purchases={INITIAL_PURCHASE_HISTORY}
            wishlist={INITIAL_CLIENT_WISHLIST}
          />

          {/* Column 3: Insights & Concierge AI (col-span-3) */}
          <CustomerInsightsRight timeline={INITIAL_INTERACTION_TIMELINE} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <CustomerActionBar
        onUndo={() => console.log('Undo')}
        onContact={() => console.log('Contact customer')}
        onExecuteAction={() => console.log('Execute action')}
        onPreview={() => console.log('Preview profile')}
        onRedo={() => console.log('Redo')}
      />
    </div>
  );
};
