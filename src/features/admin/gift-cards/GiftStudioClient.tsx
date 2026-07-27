'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { GiftLibrarySidebar } from './GiftLibrarySidebar';
import { GiftStudioCenter } from './GiftStudioCenter';
import { GiftIntelligenceRight } from './GiftIntelligenceRight';
import { GiftActionBar } from './GiftActionBar';
import {
  INITIAL_GIFT_LIBRARY,
  INITIAL_GIFT_ACTIVITIES,
  INITIAL_GIFT_STATE,
  GiftStudioState,
} from './giftMockData';

export const GiftStudioClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [giftState, setGiftState] = useState<GiftStudioState>(INITIAL_GIFT_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col min-h-screen w-full select-none">
      {/* 1. Top Navigation Bar (h-20) */}
      <header className="flex justify-between items-center w-full px-6 sm:px-10 h-20 sticky top-0 bg-white/85 backdrop-blur-md z-40 border-b border-[#c4c7c7] font-sans shrink-0">
        <div className="flex items-center gap-8 flex-1">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748]">
              search
            </span>
            <input
              type="text"
              placeholder="Search gift cards, recipients, or codes..."
              className="w-full pl-10 pr-4 py-2 bg-transparent border-0 border-b border-[#c4c7c7] focus:border-[#D4AF37] text-xs font-sans text-black outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="relative p-2 text-[#444748] hover:text-black transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#D4AF37] rounded-full" />
          </button>
          <button
            type="button"
            className="p-2 text-[#444748] hover:text-black transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-[#c4c7c7]">
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-xs text-black">Julianne Vasseur</p>
              <p className="text-[10px] text-[#444748]">Atelier Director</p>
            </div>
            <div className="relative w-10 h-10 rounded-full bg-[#e9e8e8] overflow-hidden border border-[#c4c7c7] shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmm4mxK0cGmbeZNGMiTyi9WdA4mmXvcZOAmz9ElBjrdXGLJ0D4vDfigiAYkR88UfrHHKw18hf6yx0BDJaGliqIzZuqzQXsZUIo1rEn4ZgLlqHlEaFoHlo6_TRcbvhwmyDkCecc60gvebAykVgbjPN10QiflUf6Z0_P6oVDV_iI2YjuJaa5DEmll1dVnl_Y8sxH_dAEh7DikXXeANOYYHK2z_E5xy-u6Oy62II2o0E_FFx3wGTosT_gvItU6ENS9xxs_s-GXHuWiqMj"
                alt="Julianne Vasseur Headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-[calc(100vh-80px)] w-full">
        {/* 2. Side Navigation Sidebar (w-72) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 12-Column Studio Grid (lg:ml-72) */}
        <main className="lg:ml-72 flex-1 px-6 sm:px-10 py-6 grid grid-cols-12 gap-6 min-h-[calc(100vh-80px)] min-w-0 pb-32">
          {/* Left Panel: Gift Library (col-span-3) */}
          <GiftLibrarySidebar
            cards={INITIAL_GIFT_LIBRARY}
            activeGiftId={giftState.activeGiftId}
            onSelectGiftCard={(id) => setGiftState((prev) => ({ ...prev, activeGiftId: id }))}
          />

          {/* Center Panel: Gift Studio (col-span-6) */}
          <GiftStudioCenter
            previewDevice={giftState.previewDevice}
            onToggleDevice={(device) =>
              setGiftState((prev) => ({ ...prev, previewDevice: device }))
            }
          />

          {/* Right Panel: Gift Intelligence (col-span-3) */}
          <GiftIntelligenceRight activities={INITIAL_GIFT_ACTIVITIES} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <GiftActionBar
        onPreview={() => console.log('Preview gift card')}
        onSchedule={() => console.log('Schedule gift card')}
        onDuplicate={() => console.log('Duplicate gift card')}
        onPublish={() => console.log('Publish gift card')}
      />
    </div>
  );
};
