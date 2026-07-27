'use client';

import React from 'react';

export const IntegrationWorkspaceCenter: React.FC = () => {
  return (
    <section className="w-full lg:w-1/2 space-y-6 font-sans select-none shrink-0">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-black mb-2">Commerce Stack</h2>
          <p className="text-[#444748] text-sm max-w-md">
            Orchestrate your multi-channel sales integrations and inventory sync across global storefronts.
          </p>
        </div>
      </div>

      {/* Shopify Editorial Card */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#c4c7c7]/50">
        <div className="p-8 border-b border-[#c4c7c7] flex justify-between items-start">
          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-xl bg-[#efeded] border border-[#c4c7c7] flex items-center justify-center text-black shrink-0">
              <span className="material-symbols-outlined text-3xl">store</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-serif text-2xl font-semibold text-black">Shopify Plus</h4>
                <span className="bg-[#755a24]/10 text-[#755a24] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border border-[#755a24]/20">
                  Operational
                </span>
              </div>
              <p className="text-[#444748] text-sm font-medium">Main Atelier Storefront</p>
            </div>
          </div>
          <button type="button" className="text-black hover:text-[#755a24] transition-colors cursor-pointer">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-px bg-[#c4c7c7]">
          <div className="bg-white p-6">
            <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold mb-1">
              API Version
            </p>
            <p className="font-semibold text-xs text-black">2024-04 (LATEST)</p>
          </div>
          <div className="bg-white p-6">
            <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold mb-1">
              Last Sync
            </p>
            <p className="font-semibold text-xs text-black">2 MIN AGO</p>
          </div>
          <div className="bg-white p-6">
            <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold mb-1">
              Store URL
            </p>
            <p className="font-semibold text-xs text-black">luxora-atelier.myshopify.com</p>
          </div>
          <div className="bg-white p-6 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-[#444748] uppercase tracking-widest font-bold mb-1">
                Permissions
              </p>
              <p className="font-semibold text-xs text-black">READ/WRITE (FULL)</p>
            </div>
            <button type="button" className="text-[#755a24] font-bold uppercase text-xs hover:underline cursor-pointer">
              Reconnect
            </button>
          </div>
        </div>
      </div>

      {/* Bento Sub-Grid for other services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stripe Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#c4c7c7] shadow-sm flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm text-black">Stripe</p>
              <p className="text-[10px] text-[#755a24] uppercase font-bold">Connected</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs border-b border-[#efeded] pb-1">
              <span className="text-[#444748] uppercase font-semibold">Webhook</span>
              <span className="font-bold text-[#755a24]">Active</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#444748] uppercase font-semibold">Test Mode</span>
              <span className="font-semibold text-black">Disabled</span>
            </div>
          </div>
        </div>

        {/* OpenAI Card */}
        <div className="bg-white p-6 rounded-2xl border border-red-600/20 shadow-sm flex flex-col justify-between h-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-1 bg-red-600 text-white text-[8px] font-bold uppercase rotate-45 translate-x-3 translate-y-1 w-16 text-center shadow-sm">
            Alert
          </div>
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#e3e2e2] text-black rounded-lg">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="text-right pr-4">
              <p className="font-semibold text-sm text-black">OpenAI</p>
              <p className="text-[10px] text-red-600 uppercase font-bold">API Key Expired</p>
            </div>
          </div>
          <div className="space-y-2">
            <button
              type="button"
              className="w-full py-2 bg-red-600/10 text-red-600 rounded-lg font-bold text-[10px] uppercase tracking-wider hover:bg-red-600/20 transition-colors cursor-pointer"
            >
              Resolve Now
            </button>
          </div>
        </div>

        {/* Shiprocket Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#c4c7c7] shadow-sm flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm text-black">Shiprocket</p>
              <p className="text-[10px] text-[#755a24] uppercase font-bold">Healthy</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-[#efeded] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#755a24] h-full w-[94%]" />
            </div>
            <p className="text-[10px] text-[#444748] text-center uppercase tracking-tighter font-semibold">
              94% Fulfillment API Uptime
            </p>
          </div>
        </div>

        {/* GA4 Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#c4c7c7] shadow-sm flex flex-col justify-between h-48">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <span className="material-symbols-outlined">insights</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm text-black">GA4</p>
              <p className="text-[10px] text-[#755a24] uppercase font-bold">Tracking</p>
            </div>
          </div>
          <p className="text-xs text-[#444748] italic">
            &quot;Last purchase event tracked 14s ago from London cluster.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};
