'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AdminSidebar } from '../AdminSidebar';
import { MemberDirectorySidebar } from './MemberDirectorySidebar';
import { LoyaltyWorkspaceCenter } from './LoyaltyWorkspaceCenter';
import { RetentionIntelligenceRight } from './RetentionIntelligenceRight';
import { RewardsActionBar } from './RewardsActionBar';
import {
  INITIAL_MEMBER_DIRECTORY,
  INITIAL_WALLET_REWARDS,
  INITIAL_TIER_BENEFITS,
  INITIAL_ACTIVITY_TIMELINE,
  INITIAL_LOYALTY_STATE,
  LoyaltyState,
} from './rewardsMockData';

export const LoyaltyStudioClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [loyaltyState, setLoyaltyState] = useState<LoyaltyState>(INITIAL_LOYALTY_STATE);

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Nav Bar (h-20) */}
      <header className="flex justify-between items-center w-full px-6 sm:px-10 h-20 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7] font-sans shrink-0">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748]">
              search
            </span>
            <input
              type="text"
              placeholder="Search members, orders, or collections..."
              className="w-full bg-[#f4f3f3] border-none rounded-full py-2 pl-10 pr-4 text-xs font-sans focus:ring-1 focus:ring-[#D4AF37] outline-none text-black"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="text-[#444748] hover:text-black transition-opacity relative cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#D4AF37] rounded-full" />
          </button>
          <button
            type="button"
            className="text-[#444748] hover:text-black transition-opacity cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
          </button>
          <div className="flex items-center gap-3 border-l border-[#c4c7c7] pl-6">
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-xs text-black">Studio Admin</p>
              <p className="text-[10px] text-[#444748] uppercase tracking-tighter">
                Luxury Tier Manager
              </p>
            </div>
            <div className="relative w-10 h-10 rounded-full border border-[#c4c7c7] overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0wTD7WqJrQp5XWfFUys5aW14Zup2rB23BtrmW-g0KaIa4ph9lTyWZ2JyKl7FZ6bt3WrXkUACtW9Qa8keh1GazX4EYaQbICp_rwjLE8prxei6OD3fUvA5PXy3gVP1uvnEJJL5h8lmUQHju0YIiSim682_KyjXZdLN7WbEiH6S3-kbsQiq6z4VoLzFwRAHW-b1kDIpjngrANAypFLcJT6U4vg4m5Z3Y5p8DqhGpghTgXZSreJi671mFPfiFPvUM8O-Gv41cVwNDa57"
                alt="Studio Admin Headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar (w-72) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Studio Content Grid (lg:ml-72) */}
        <main className="lg:ml-72 flex-1 flex overflow-hidden p-6 gap-6 min-w-0">
          {/* Left Panel: Member Directory (320px) */}
          <MemberDirectorySidebar
            members={INITIAL_MEMBER_DIRECTORY}
            activeMemberId={loyaltyState.activeMemberId}
            activeTierFilter={loyaltyState.activeTierFilter}
            onSelectMember={(id) =>
              setLoyaltyState((prev) => ({ ...prev, activeMemberId: id }))
            }
            onSelectTierFilter={(tier) =>
              setLoyaltyState((prev) => ({ ...prev, activeTierFilter: tier }))
            }
          />

          {/* Center Panel: Loyalty Workspace */}
          <LoyaltyWorkspaceCenter
            walletRewards={INITIAL_WALLET_REWARDS}
            benefits={INITIAL_TIER_BENEFITS}
          />

          {/* Right Panel: Retention Intelligence (320px) */}
          <RetentionIntelligenceRight activities={INITIAL_ACTIVITY_TIMELINE} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <RewardsActionBar
        onPreview={() => console.log('Preview rewards')}
        onGrantReward={() => console.log('Grant reward')}
        onUpgradeTier={() => console.log('Upgrade tier')}
        onPublish={() => console.log('Publish rewards')}
      />
    </div>
  );
};
