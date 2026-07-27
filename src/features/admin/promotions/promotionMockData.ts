export interface CampaignCardItem {
  id: string;
  title: string;
  category: string;
  status: 'Scheduled' | 'Draft' | 'Active';
  statusType: 'scheduled' | 'draft' | 'active';
  audience: string;
  image: string;
  isActive?: boolean;
}

export interface PromotionRuleItem {
  id: string;
  title: string;
  icon: string;
  value?: string;
  isSelected?: boolean;
}

export interface EligibilityGroupItem {
  id: string;
  label: string;
  isSelected: boolean;
}

export interface PerformanceMetricItem {
  label: string;
  value: string;
  badgeText: string;
  progressPercent: number;
  subtext: string;
}

export interface PromotionState {
  activeCampaignId: string;
  selectedRuleId: string;
  previewDevice: 'desktop' | 'mobile';
  searchQuery: string;
}

export const INITIAL_CAMPAIGN_LIBRARY: CampaignCardItem[] = [
  {
    id: 'cmp-1',
    title: 'Winter Solstice Private Sale',
    category: 'Furniture Collection',
    status: 'Scheduled',
    statusType: 'scheduled',
    audience: 'VIP Platinum',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbU_aseU_ii41-NabuPVga3FwJa9aJzqWCQJv7Yn-HbI--L1XJf6dM0knqWE27ZM8c7i6-hjrZadeWKNDvSkwvbdD866jOzAo5L0F78Fw62Zqm26P_LQ4N8C7eXLo7n8WbQbsjuQ18-IGvcvCD8ithyhMbhUU2QUeAjjAoMvxh_18Fakdg_-X3vCKV9_YN04p8MFE8B_lZ3_LQM53-kX_E4W0JEYh3-Y47zDyhbKY2mrcPR1qIhiPprlqZSUIdW15pYVbpf9WbexGA',
    isActive: true,
  },
  {
    id: 'cmp-2',
    title: 'Accessory Gala',
    category: 'Handbags & Scarves',
    status: 'Draft',
    statusType: 'draft',
    audience: 'Global Access',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1JOtor19FeYsy9tIzIYKTeutxSGRbE6bxofyPPFAudD7czPd5Lh7WcMsYDA9NRhqFaRCCRxqzHM0QAS7_CPUQuvzdKQrr5mQA8xHOG1z-wY_TNgd0W9x2lGa_EwUT7t4kGfIkRg6AOPvJamKliKQAm7KY6LT8UCrwUbt0NhnDsxK4kTvMvNvIiIrvzZtL4uoK5IxAB05ix-JmO3Xj7C8mAuBkg3GRqvb56k6bA5MgKiiJFY6PgVd5uAsXGZzMYhPwT85nqloexlLj',
    isActive: false,
  },
  {
    id: 'cmp-3',
    title: 'Midnight Noir Event',
    category: 'Apparel',
    status: 'Active',
    statusType: 'active',
    audience: 'VIP Gold',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnBPvkaDo16ZALI2o_WhZHEtsodrNMmB4YYxLO5sCCVkc-9AypMasAEehXTkQoXisDoJo_sIdRF11NbnNJbYCe34V7XB1aVEtpg3RJ6jY9ToI_R2tVxuzsCtsxHmtMmfwcEoT7SLXXpPQqAfuz5-R5DHVXgfOHfglrJhXqM0e_Lec_0aczzeNNDqfYT1P-6cKAirZ-hemuLbzdOGDjYBAKotDt7a1HM_wK979vhiMkD_2WntlmJvoeOUxyPSN6u1hAEXg-Q7VC_4QQ',
    isActive: false,
  },
];

export const INITIAL_PROMOTION_RULES: PromotionRuleItem[] = [
  { id: 'rule-percent', title: 'Percentage Off', icon: 'percent', value: '25%', isSelected: true },
  { id: 'rule-gift', title: 'Gift With Purchase', icon: 'featured_seasonal_and_gifts', isSelected: false },
  { id: 'rule-bundle', title: 'Product Bundle', icon: 'package_2', isSelected: false },
];

export const INITIAL_ELIGIBILITY_GROUPS: EligibilityGroupItem[] = [
  { id: 'grp-1', label: 'VIP Platinum', isSelected: true },
  { id: 'grp-2', label: 'VIP Gold', isSelected: false },
  { id: 'grp-3', label: 'New Registered', isSelected: false },
];

export const INITIAL_PROMOTION_STATE: PromotionState = {
  activeCampaignId: 'cmp-1',
  selectedRuleId: 'rule-percent',
  previewDevice: 'desktop',
  searchQuery: '',
};
