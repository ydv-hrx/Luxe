'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { CampaignLibrarySidebar } from './CampaignLibrarySidebar';
import { CampaignBuilderCenter } from './CampaignBuilderCenter';
import { PerformanceIntelligenceRight } from './PerformanceIntelligenceRight';
import { PromotionsActionBar } from './PromotionsActionBar';
import {
  INITIAL_CAMPAIGN_LIBRARY,
  INITIAL_PROMOTION_RULES,
  INITIAL_ELIGIBILITY_GROUPS,
  INITIAL_PROMOTION_STATE,
  PromotionState,
} from './promotionMockData';

export const PromotionStudioClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [promoState, setPromoState] = useState<PromotionState>(INITIAL_PROMOTION_STATE);
  const [rules, setRules] = useState(INITIAL_PROMOTION_RULES);
  const [eligibility, setEligibility] = useState(INITIAL_ELIGIBILITY_GROUPS);

  const handleSelectRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => ({ ...r, isSelected: r.id === id }))
    );
    setPromoState((prev) => ({ ...prev, selectedRuleId: id }));
  };

  const handleToggleEligibility = (id: string) => {
    setEligibility((prev) =>
      prev.map((grp) => (grp.id === id ? { ...grp, isSelected: !grp.isSelected } : grp))
    );
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Header Navbar (h-16) */}
      <header className="h-16 flex items-center justify-between px-6 sm:px-10 border-b border-[#c4c7c7] sticky top-0 bg-white/80 backdrop-blur-md z-40 font-sans shrink-0">
        <div className="flex items-center gap-6">
          <h2 className="font-serif text-xl font-semibold text-black">Promotion Studio</h2>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#444748] text-sm">
              search
            </span>
            <input
              type="text"
              placeholder="Search promotions..."
              className="pl-10 pr-4 py-1.5 bg-[#f4f3f3] border-none rounded-full w-64 text-xs font-sans focus:ring-1 focus:ring-black outline-none text-black"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-[#444748] hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-[#444748] hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
          </button>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-[#444748] hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-64px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Three-Panel Studio Layout (lg:ml-64) */}
        <main className="lg:ml-64 flex-1 flex h-full overflow-hidden min-w-0">
          {/* Left Panel: Campaign Library (320px) */}
          <CampaignLibrarySidebar
            campaigns={INITIAL_CAMPAIGN_LIBRARY}
            activeCampaignId={promoState.activeCampaignId}
            onSelectCampaign={(id) =>
              setPromoState((prev) => ({ ...prev, activeCampaignId: id }))
            }
          />

          {/* Center Panel: Campaign Builder */}
          <CampaignBuilderCenter
            rules={rules}
            eligibility={eligibility}
            previewDevice={promoState.previewDevice}
            onToggleDevice={(device) =>
              setPromoState((prev) => ({ ...prev, previewDevice: device }))
            }
            onSelectRule={handleSelectRule}
            onToggleEligibility={handleToggleEligibility}
          />

          {/* Right Panel: Performance Intelligence (350px) */}
          <PerformanceIntelligenceRight />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <PromotionsActionBar
        onDuplicate={() => console.log('Duplicate campaign')}
        onPreview={() => console.log('Preview campaign')}
        onSchedule={() => console.log('Schedule campaign')}
        onPublishNow={() => console.log('Publish campaign now')}
      />
    </div>
  );
};
