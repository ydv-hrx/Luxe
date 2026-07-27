'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { ShipmentQueueSidebar } from './ShipmentQueueSidebar';
import { ShipmentWorkspaceCenter } from './ShipmentWorkspaceCenter';
import { CarrierPerformanceRight } from './CarrierPerformanceRight';
import { ShippingActionBar } from './ShippingActionBar';
import {
  INITIAL_SHIPMENT_QUEUE,
  INITIAL_PACKAGE_CONTENTS,
  INITIAL_ACTIVITY_EVENTS,
  INITIAL_SHIPPING_STATE,
  ShippingState,
} from './shippingMockData';

export const ShippingManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [shippingState, setShippingState] = useState<ShippingState>(INITIAL_SHIPPING_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top ToolBar (Sticky Header) */}
      <header className="flex justify-between items-center w-full px-6 sm:px-10 py-3 sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7] font-sans shrink-0">
        <div className="flex items-center gap-8 flex-1">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748]">
              search
            </span>
            <input
              type="text"
              placeholder="Search orders, clients, tracking..."
              className="w-full bg-[#f4f3f3] border-none rounded-full py-2 pl-10 pr-4 text-xs font-sans text-black focus:ring-1 focus:ring-black outline-none"
            />
          </div>
          <div className="hidden md:flex gap-6">
            {(['All Shipments', 'Warehouse A', 'Priority Only'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setShippingState((prev) => ({ ...prev, activeFilter: filter }))}
                className={`text-xs font-semibold transition-all ${
                  shippingState.activeFilter === filter
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-[#444748] cursor-pointer hover:text-black transition-all text-xl">
            notifications
          </span>
          <span className="material-symbols-outlined text-[#444748] cursor-pointer hover:text-black transition-all text-xl">
            settings
          </span>
          <div className="relative w-10 h-10 rounded-full bg-[#e9e8e8] overflow-hidden border border-[#c4c7c7] shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvPqT4zgWbCBDzij6qkj5WvYVjtsFPcKXXe6hNBCLrRlOO3JdqXu5MzTDMAYG0wRh-4HZpna10kl3LpSeW6ATvaaREnkCRcZzU_T1BPe81YOE117QdWXFPWOT4q4QWE--gppzS-o_n1G4NC-Oi5om3tn_bUIqSVj4JminbhZ7aUykHVCw8KlEYwv8kRO0XOgxC_vE_gQ3rZOc9PHFeOPx3l1QLZncvAIUNEiElUEv0B52h-1k2bWLSTZiQyxOeU7wBy6ANzTfSnWUf"
              alt="Brand Manager Headshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-65px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-72) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Three Panel Layout (lg:ml-72) */}
        <main className="lg:ml-72 flex-1 flex h-full overflow-hidden min-w-0">
          {/* Left Panel: Fulfillment Queue (320px) */}
          <ShipmentQueueSidebar
            queue={INITIAL_SHIPMENT_QUEUE}
            activeShipmentId={shippingState.activeShipmentId}
            onSelectShipment={(id) =>
              setShippingState((prev) => ({ ...prev, activeShipmentId: id }))
            }
          />

          {/* Center Panel: Shipment Workspace */}
          <ShipmentWorkspaceCenter packages={INITIAL_PACKAGE_CONTENTS} />

          {/* Right Panel: Delivery Intelligence (384px) */}
          <CarrierPerformanceRight activities={INITIAL_ACTIVITY_EVENTS} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <ShippingActionBar
        onEdit={() => console.log('Edit shipment')}
        onCarrier={() => console.log('Change carrier')}
        onPreview={() => console.log('Preview label')}
        onDispatch={() => console.log('Dispatch shipment')}
      />
    </div>
  );
};
