'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { EmailCampaignLibrarySidebar } from './EmailCampaignLibrarySidebar';
import { EditorialEmailBuilderCenter } from './EditorialEmailBuilderCenter';
import { CampaignIntelligenceRight } from './CampaignIntelligenceRight';
import { EmailActionBar } from './EmailActionBar';
import {
  INITIAL_EMAIL_CAMPAIGNS,
  INITIAL_EMAIL_STATE,
  EmailState,
} from './emailMockData';

export const EmailStudioClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [emailState, setEmailState] = useState<EmailState>(INITIAL_EMAIL_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 bg-white/80 backdrop-blur-xl border-b border-[#c4c7c7]/30 flex items-center justify-between px-6 sm:px-10 z-40 font-sans">
        <div className="flex items-center gap-8">
          <span className="font-serif text-2xl font-semibold text-black">Luxora Atelier</span>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#747878]">
              search
            </span>
            <input
              type="text"
              placeholder="Search campaigns..."
              className="bg-[#f4f3f3] border-none rounded-full pl-10 pr-4 py-2 w-64 text-xs font-sans focus:ring-1 focus:ring-black outline-none text-black"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-[#444748]">
            <button type="button" className="material-symbols-outlined hover:text-black transition-colors cursor-pointer text-xl">
              notifications
            </button>
            <button type="button" className="material-symbols-outlined hover:text-black transition-colors cursor-pointer text-xl">
              bookmark
            </button>
            <button type="button" className="material-symbols-outlined hover:text-black transition-colors cursor-pointer text-xl">
              dark_mode
            </button>
          </div>
          <div className="h-8 w-[1px] bg-[#c4c7c7]/30 mx-2" />
          <button
            type="button"
            className="bg-black text-white px-6 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-all cursor-pointer shadow-sm"
          >
            Create Entry
          </button>
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c4c7c7]/50 shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBFnn99um9Tt5ftjOvAqtZLceY3iBENO51egGrRnpGxFlckYWqWsvcAP95nBhYY2WWj_iVwa7kddpOqsSscgy3O6Y9P5XR4hrNRKSK2JGMzulc_e6AK4zn6K1PM112iWjhp9Dn1Ylv3VTtnasdqiHmzsZ9FNVGitZ5yEfNY-S5hMUn8y_kV9H6kiK7ZJAg-XfWldEgOY2pFYvdZ1B5HKe750tmtyIlMQMbhszjz15TnvMmspC0AGJ0vD6tBQdaOfRFUAh_Js3YrggO"
              alt="Creative Director Headshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main Three-Panel Studio (ml-64 mt-20) */}
        <main className="ml-64 mt-20 flex-1 flex h-[calc(100vh-5rem)] overflow-hidden min-w-0">
          {/* Left Panel: Campaign Library (320px) */}
          <EmailCampaignLibrarySidebar
            campaigns={INITIAL_EMAIL_CAMPAIGNS}
            activeCampaignId={emailState.activeCampaignId}
            onSelectCampaign={(id) =>
              setEmailState((prev) => ({ ...prev, activeCampaignId: id }))
            }
          />

          {/* Center Panel: Editorial Email Builder */}
          <EditorialEmailBuilderCenter
            previewDevice={emailState.previewDevice}
            onToggleDevice={(device) =>
              setEmailState((prev) => ({ ...prev, previewDevice: device }))
            }
          />

          {/* Right Panel: Campaign Intelligence (320px) */}
          <CampaignIntelligenceRight />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <EmailActionBar
        onPreview={() => console.log('Preview email')}
        onSendTest={() => console.log('Send test email')}
        onSchedule={() => console.log('Schedule campaign')}
        onPublishCampaign={() => console.log('Publish campaign')}
      />
    </div>
  );
};
