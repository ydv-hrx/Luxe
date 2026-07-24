export interface RewardPass {
  id: string;
  title: string;
  pointsCost: number;
  description: string;
  code: string;
  isUnlocked: boolean;
}

export interface LoyaltyProfile {
  tier: 'Member' | 'VIP' | 'Diamond';
  currentPoints: number;
  lifetimePoints: number;
  nextTierThreshold: number;
  tierPerks: string[];
}

export interface ILoyaltyService {
  getLoyaltyProfile(): Promise<LoyaltyProfile>;
  getAvailableRewards(): Promise<RewardPass[]>;
  redeemReward(rewardId: string): Promise<{ success: boolean; code: string }>;
}

class MockLoyaltyService implements ILoyaltyService {
  private profile: LoyaltyProfile = {
    tier: 'Diamond',
    currentPoints: 14800,
    lifetimePoints: 32500,
    nextTierThreshold: 50000,
    tierPerks: [
      'Complimentary White-Glove Courier Delivery',
      'Private Master Tailor Home Visits',
      'Early Access to 48h Capsule Launches',
      'Dedicated Senior Stylist Elena',
    ],
  };

  private rewards: RewardPass[] = [
    {
      id: 'rw-1',
      title: '$250 Bespoke Apparel Credit',
      pointsCost: 5000,
      description: 'Applicable to any cashmere or silk garment purchase.',
      code: 'DIAMOND250',
      isUnlocked: true,
    },
    {
      id: 'rw-2',
      title: 'Monogramming & Embossing Voucher',
      pointsCost: 2000,
      description: 'Custom gold-foil initials on any leather tote or wallet.',
      code: 'MONOGRAM-FREE',
      isUnlocked: true,
    },
  ];

  async getLoyaltyProfile(): Promise<LoyaltyProfile> {
    return Promise.resolve(this.profile);
  }

  async getAvailableRewards(): Promise<RewardPass[]> {
    return Promise.resolve([...this.rewards]);
  }

  async redeemReward(rewardId: string): Promise<{ success: boolean; code: string }> {
    const reward = this.rewards.find((r) => r.id === rewardId);
    if (!reward) throw new Error('Reward not found');
    return Promise.resolve({ success: true, code: reward.code });
  }
}

export const loyaltyService: ILoyaltyService = new MockLoyaltyService();
