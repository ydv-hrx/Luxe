'use client';

import React, { useState } from 'react';
import { LoyaltyProfile, RewardPass, loyaltyService } from '@/lib/services/loyalty';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Gem, Gift, Check } from 'lucide-react';

export interface LoyaltyDashboardClientProps {
  profile: LoyaltyProfile;
  rewards: RewardPass[];
}

export const LoyaltyDashboardClient: React.FC<LoyaltyDashboardClientProps> = ({
  profile,
  rewards,
}) => {
  const [claimedCodes, setClaimedCodes] = useState<Record<string, string>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleRedeem = async (reward: RewardPass) => {
    setLoadingId(reward.id);
    const result = await loyaltyService.redeemReward(reward.id);
    setClaimedCodes((prev) => ({ ...prev, [reward.id]: result.code }));
    setLoadingId(null);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Tier Overview Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
          <Badge variant="outline" className="text-blue-400 border-blue-400/30 bg-blue-400/10 w-fit mx-auto md:mx-0">
            <Gem className="w-3.5 h-3.5 mr-1" />
            {profile.tier} Tier Status
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-semibold font-serif leading-tight">
            {profile.currentPoints.toLocaleString()} VIP Points
          </h2>
          <p className="text-xs text-neutral-300">
            Lifetime Points Accumulated: {profile.lifetimePoints.toLocaleString()}. Earn 10 points for every $1 spent.
          </p>
        </div>

        <div className="p-6 bg-neutral-800/80 rounded-2xl border border-neutral-700 max-w-xs w-full flex flex-col gap-3 text-xs">
          <span className="font-semibold uppercase tracking-wider text-neutral-400">Exclusive Tier Benefits</span>
          <ul className="flex flex-col gap-2">
            {profile.tierPerks.map((perk, i) => (
              <li key={i} className="flex items-center gap-2 text-neutral-200">
                <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold font-serif text-neutral-900">Unlock VIP Rewards & Passes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map((reward) => {
            const isClaimed = !!claimedCodes[reward.id];
            return (
              <div key={reward.id} className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {reward.pointsCost.toLocaleString()} Points
                    </span>
                    <h4 className="text-lg font-bold font-serif text-neutral-900 mt-0.5">{reward.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1">{reward.description}</p>
                  </div>
                  <Gift className="w-8 h-8 text-neutral-300 flex-shrink-0" />
                </div>

                {isClaimed ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-mono font-bold text-emerald-900 text-center">
                    Redemption Code: {claimedCodes[reward.id]}
                  </div>
                ) : (
                  <Button
                    variant="primary"
                    size="md"
                    isLoading={loadingId === reward.id}
                    onClick={() => handleRedeem(reward)}
                  >
                    Redeem Pass
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
