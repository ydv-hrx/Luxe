'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavBar } from '../AdminTopNavBar';
import { OrderQueueSidebar } from './OrderQueueSidebar';
import { OrderWorkspaceCenter } from './OrderWorkspaceCenter';
import { OrderIntelligenceRight } from './OrderIntelligenceRight';
import { OrderExecuteActionBar } from './OrderExecuteActionBar';
import {
  INITIAL_ORDER_QUEUE,
  INITIAL_PURCHASED_ITEMS,
  INITIAL_TIMELINE_EVENTS,
  INITIAL_ORDERS_STATE,
  OrdersState,
} from './ordersMockData';

export const OrdersManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [ordersState, setOrdersState] = useState<OrdersState>(INITIAL_ORDERS_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <AdminTopNavBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 3-Column Workspace (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 flex h-full overflow-hidden min-w-0 p-6 gap-6">
          {/* Column 1: Order Queue (w-80) */}
          <OrderQueueSidebar
            orders={INITIAL_ORDER_QUEUE}
            activeOrderId={ordersState.activeOrderId}
            activeFilter={ordersState.activeFilter}
            onSelectOrder={(id) =>
              setOrdersState((prev) => ({ ...prev, activeOrderId: id }))
            }
            onSelectFilter={(filter) =>
              setOrdersState((prev) => ({ ...prev, activeFilter: filter }))
            }
          />

          {/* Column 2: Order Workspace */}
          <OrderWorkspaceCenter
            purchasedItems={INITIAL_PURCHASED_ITEMS}
            internalNote={ordersState.internalNote}
            onChangeInternalNote={(val) =>
              setOrdersState((prev) => ({ ...prev, internalNote: val }))
            }
            onSaveNote={() => {
              console.log('Saved note:', ordersState.internalNote);
            }}
          />

          {/* Column 3: Intelligence & Timeline (w-80) */}
          <OrderIntelligenceRight timelineEvents={INITIAL_TIMELINE_EVENTS} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <OrderExecuteActionBar
        onUndo={() => console.log('Undo')}
        onRedo={() => console.log('Redo')}
        onPreview={() => console.log('Preview')}
        onExecute={() => console.log('Execute order action')}
      />
    </div>
  );
};
