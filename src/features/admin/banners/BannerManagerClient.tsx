'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavBar } from '../AdminTopNavBar';
import { BannerCategoriesSidebar } from './BannerCategoriesSidebar';
import { BannerEditorWorkspace } from './BannerEditorWorkspace';
import { BannerLivePreview } from './BannerLivePreview';
import { StickyPublishFooter } from './StickyPublishFooter';
import {
  INITIAL_BANNER_CATEGORIES,
  INITIAL_CAMPAIGN_STATE,
  BannerCampaignState,
} from './bannerMockData';

export const BannerManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('cat-hero');
  const [campaign, setCampaign] = useState<BannerCampaignState>(INITIAL_CAMPAIGN_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col min-h-screen w-full select-none">
      {/* 1. Top Header */}
      <AdminTopNavBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 min-h-[calc(100vh-80px)] w-full">
        {/* 2. Navigation Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main Workspace Container (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 flex flex-col min-h-full min-w-0">
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            {/* Left Panel: Categories (20%) */}
            <BannerCategoriesSidebar
              categories={INITIAL_BANNER_CATEGORIES}
              activeCategoryId={activeCategoryId}
              onSelectCategory={(id) => setActiveCategoryId(id)}
              totalViews={campaign.totalViews}
              avgCtr={campaign.avgCtr}
              performanceNote={campaign.performanceNote}
            />

            {/* Center Panel: Editor Workspace (45%) */}
            <BannerEditorWorkspace
              campaign={campaign}
              onChangeTitle={(val) => setCampaign((prev) => ({ ...prev, displayTitle: val }))}
              onChangeSubtitle={(val) => setCampaign((prev) => ({ ...prev, campaignSubtitle: val }))}
              onChangeCtaText={(val) => setCampaign((prev) => ({ ...prev, ctaText: val }))}
              onChangeDestinationUrl={(val) => setCampaign((prev) => ({ ...prev, destinationUrl: val }))}
            />

            {/* Right Panel: Live Preview (35%) */}
            <BannerLivePreview
              campaign={campaign}
              onChangeDeviceMode={(mode) => setCampaign((prev) => ({ ...prev, previewDevice: mode }))}
            />
          </div>

          {/* 4. Sticky Bottom Action Bar */}
          <StickyPublishFooter
            onDiscard={() => setCampaign(INITIAL_CAMPAIGN_STATE)}
            onSaveDraft={() => console.log('Draft saved')}
            onPublishChanges={() => console.log('Changes published')}
          />
        </main>
      </div>
    </div>
  );
};
