'use client';

import React from 'react';
import Image from 'next/image';
import { WalletRewardItem, TierBenefitItem } from './rewardsMockData';

export interface LoyaltyWorkspaceCenterProps {
  walletRewards: WalletRewardItem[];
  benefits: TierBenefitItem[];
}

export const LoyaltyWorkspaceCenter: React.FC<LoyaltyWorkspaceCenterProps> = ({
  walletRewards,
  benefits,
}) => {
  return (
    <section className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-8 pb-32 min-w-0 font-sans select-none h-full">
      {/* Member Profile Hero Card */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[320px] shadow-sm border border-[#c4c7c7]/30">
        <div className="w-full md:w-1/3 relative min-h-[280px] md:min-h-full">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk_WMMZzX91kjZdhfrepKgOMXd0drFMfZp3BYRluEES9sJ6sgW24tanJZF0opbQ34YcRKaA4CcQGhP_lhU6RkHUy5YAjtZPld04nXd0x08-K4g6U2pxa7xsMz5WX8pfP2J5IABILH-4abq50EGU8fRezsL1n1J4EnB1vJRCyfS2OPwPCEmGj8AplSJUtMDw0m6B4TtfY1g3WoHD6KL19b6UcagjduL-3AN0-OPYQnQH9z0XRSkz1WbnPfsRxUOBWq-GOd7Nj-hle19"
            alt="Elena von Berg Lifestyle Editorial Visual"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-3xl font-semibold text-black">Elena von Berg</h3>
              <div className="px-4 py-1 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold rounded-full">
                Platinum Elite
              </div>
            </div>
            <p className="text-[#444748] text-xs font-bold uppercase tracking-wider mb-6">
              Member Since Oct 2021
            </p>
            <div className="grid grid-cols-2 gap-12 mb-8">
              <div>
                <p className="text-xs uppercase font-bold text-[#444748] mb-1">Lifetime Value</p>
                <p className="text-3xl font-serif font-bold text-black">$42,900</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-[#444748] mb-1">Current Points</p>
                <p className="text-3xl font-serif font-bold text-black">12,450</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="uppercase tracking-widest font-bold text-black">
                Progress to Diamond Tier
              </span>
              <span className="text-[#444748]">2,550 pts remaining</span>
            </div>
            <div className="w-full h-1.5 bg-[#efeded] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: '82%',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F1D592 50%, #B8860B 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rewards Wallet & Benefits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rewards Wallet */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/30">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-serif text-xl font-semibold text-black">Rewards Wallet</h4>
            <button
              type="button"
              className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest hover:underline"
            >
              View History
            </button>
          </div>
          <div className="space-y-4">
            {walletRewards.map((w) => (
              <div
                key={w.id}
                className="flex items-center gap-4 p-4 border border-[#c4c7c7]/20 rounded-xl hover:bg-[#f4f3f3] transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-[#e3e2e2] flex items-center justify-center rounded-lg group-hover:bg-white transition-colors text-[#D4AF37]">
                  <span className="material-symbols-outlined">{w.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-black text-sm">{w.title}</p>
                  <p className="text-xs text-[#444748]">{w.subtitle}</p>
                </div>
                <span className="material-symbols-outlined text-[#444748]">chevron_right</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier Benefits */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/30 flex flex-col justify-between">
          <div>
            <h4 className="font-serif text-xl font-semibold text-black mb-6">Active Benefits</h4>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((b) => (
                <div key={b.id} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37]">
                    {b.icon}
                  </span>
                  <span className="text-sm text-black font-medium">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="w-full mt-8 py-3 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all rounded-lg"
          >
            Manage Perks
          </button>
        </div>
      </div>

      {/* Live Experience Toggle Area */}
      <div className="bg-[#efeded] rounded-2xl p-10 flex flex-col items-center">
        <div className="w-full max-w-sm bg-white rounded-[40px] shadow-2xl border-8 border-black overflow-hidden aspect-[9/18] relative">
          {/* Simulated Mobile UI */}
          <div className="absolute inset-0 flex flex-col font-sans">
            <div className="h-8 w-full flex items-center justify-between px-6 pt-2 text-[#444748]">
              <span className="text-[10px] font-bold">9:41</span>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-xs">signal_cellular_4_bar</span>
                <span className="material-symbols-outlined text-xs">wifi</span>
                <span className="material-symbols-outlined text-xs">battery_full</span>
              </div>
            </div>

            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <div className="flex justify-between items-center text-black">
                <h5 className="font-serif text-lg font-bold">Hello, Elena</h5>
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>

              <div className="aspect-square w-full rounded-2xl p-6 flex flex-col justify-between text-white shadow-lg"
                   style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F1D592 50%, #B8860B 100%)' }}>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-90 font-bold">
                    Platinum Elite Status
                  </p>
                  <p className="text-3xl font-serif font-bold mt-1">12,450</p>
                  <p className="text-[10px] uppercase tracking-wider">Loyalty Points</p>
                </div>
                <div className="w-full h-1 bg-white/40 rounded-full">
                  <div className="h-full bg-white rounded-full w-[80%]" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-black">Your Rewards</p>
                <div className="flex gap-4 overflow-hidden">
                  <div className="w-20 h-20 shrink-0 bg-[#faf9f9] rounded-xl flex items-center justify-center text-[#D4AF37]">
                    <span className="material-symbols-outlined">confirmation_number</span>
                  </div>
                  <div className="w-20 h-20 shrink-0 bg-[#faf9f9] rounded-xl flex items-center justify-center text-[#D4AF37]">
                    <span className="material-symbols-outlined">redeem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-[#444748] text-xs font-bold uppercase tracking-widest">
          Customer Storefront Preview (Mobile)
        </p>
      </div>
    </section>
  );
};
