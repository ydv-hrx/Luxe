export interface MemberCardItem {
  id: string;
  name: string;
  tier: string;
  tierColor: 'gold' | 'neutral';
  ltvText: string;
  pointsText: string;
  avatar: string;
  isActive?: boolean;
}

export interface WalletRewardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface TierBenefitItem {
  id: string;
  title: string;
  icon: string;
}

export interface ActivityEvent {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconBg: string;
}

export interface LoyaltyState {
  activeMemberId: string;
  activeTierFilter: 'All' | 'Platinum' | 'Gold' | 'VIP';
}

export const INITIAL_MEMBER_DIRECTORY: MemberCardItem[] = [
  {
    id: 'mbr-1',
    name: 'Elena von Berg',
    tier: 'Platinum Member',
    tierColor: 'gold',
    ltvText: '$42,900',
    pointsText: '12,450',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvmcyYYG_lqPJvw5ek4MEBEFSMQUNN3C4Db6CqdrTc8JQyM_viUK00NHMzlzoUFKJVJSeUVYyjae74YB0cJShivqSJDxW-ZEckztVYFYIk4NRY8eOuGVPCG0L96SZynpMOQe6nm7QVrai3fqMVWO3zbNLkEODSJSP50lJVRBVRAaPkAdVi3pDvAbZgqtCf4_DcL3xi1R7ELNu3EoDxrhvb92zb8nTuiic5oGZ_9cOkNpXoQbHeFA_1eUUypH8GO4Xdy7wsWAUIK0t1',
    isActive: true,
  },
  {
    id: 'mbr-2',
    name: 'Julian Saint-Clair',
    tier: 'Gold Tier',
    tierColor: 'neutral',
    ltvText: '$28,150',
    pointsText: '8,200',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFUXPN61OQJknuKstKDPF5e6kfdXBwm0K53hrqG-SaGwq1sjHoveKL0Sq4mR7Zzy2rLamsWGtkJ_WQfCqnOAUEkLgb0fvFni24PlTmV-ssmf0a6xGsXTXN34SNDV-DyqOUlW2Ow2aIStXQeRQsClSmJhafo3e7Ym1FroRmvsEQnfZd3B0WeD3EVxp2jrIju3zCVmBimtbkJrON1k3x2xsMSbL6pyST5kPG9XutJV6C_5u-VDjELiFuRYVanCck5rmOA7DyqMeMpmYD',
    isActive: false,
  },
  {
    id: 'mbr-3',
    name: 'Sofia Moretti',
    tier: 'Black Tier',
    tierColor: 'neutral',
    ltvText: '$12,400',
    pointsText: '3,500',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGYS_tRkqoLRqCKatIz9X4zo8PUjTMoSdfr9q0fiy9jemDy9HQ6HVbUZHABxoyl-Be4KXx2PEwzlfSankeJnrh_KkIWKRyPKHZocq2fiJ4iapoIinSjITrqea3dlXPlHDDWjoRVIRVGpM6gnoAydk46_42ZlmDfgmSxF3lHcKs8Mmbt5m8LVikOO00Tmz0uJ6f7TonIaKu5xPPAqgbHuOfeD4B-GbPXfFbpy6887uJGlSmkFBFT4Y2VMFs9oLQWpAMJkYS-ZbXhgIL',
    isActive: false,
  },
];

export const INITIAL_WALLET_REWARDS: WalletRewardItem[] = [
  {
    id: 'wlt-1',
    title: 'Private Collection Access',
    subtitle: 'Available until Dec 31',
    icon: 'star',
  },
  {
    id: 'wlt-2',
    title: 'Birthday Gift: Silk Scarf',
    subtitle: 'Redeemable in October',
    icon: 'redeem',
  },
];

export const INITIAL_TIER_BENEFITS: TierBenefitItem[] = [
  { id: 'bnf-1', title: 'Complimentary Worldwide Shipping', icon: 'local_shipping' },
  { id: 'bnf-2', title: '24/7 Priority VIP Support', icon: 'support_agent' },
  { id: 'bnf-3', title: 'Virtual Styling Consultation', icon: 'hangout_video' },
];

export const INITIAL_ACTIVITY_TIMELINE: ActivityEvent[] = [
  {
    id: 'act-1',
    title: 'Tier Upgraded',
    subtitle: 'To Platinum • Mar 12, 2024',
    icon: 'upgrade',
    iconBg: 'bg-black text-white',
  },
  {
    id: 'act-2',
    title: 'Reward Redeemed',
    subtitle: 'Silk Scarf • Feb 15, 2024',
    icon: 'redeem',
    iconBg: 'bg-[#D4AF37] text-white',
  },
  {
    id: 'act-3',
    title: 'Member Joined',
    subtitle: 'Loyalty Program • Oct 21, 2021',
    icon: 'person_add',
    iconBg: 'bg-[#efeded] text-black',
  },
];

export const INITIAL_LOYALTY_STATE: LoyaltyState = {
  activeMemberId: 'mbr-1',
  activeTierFilter: 'All',
};
