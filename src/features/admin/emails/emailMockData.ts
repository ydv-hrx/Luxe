export interface EmailCampaignCard {
  id: string;
  title: string;
  status: 'Active' | 'Scheduled' | 'Draft';
  statusType: 'active' | 'scheduled' | 'draft';
  audience: string;
  openRateText?: string;
  updatedText?: string;
  image: string;
  isActive?: boolean;
}

export interface PredictiveMetric {
  label: string;
  value: string;
  changeText?: string;
  icon?: string;
}

export interface EmailState {
  activeCampaignId: string;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  campaignName: string;
  subjectLine: string;
  previewText: string;
}

export const INITIAL_EMAIL_CAMPAIGNS: EmailCampaignCard[] = [
  {
    id: 'em-1',
    title: 'Winter Solstice Private Sale',
    status: 'Active',
    statusType: 'active',
    audience: 'VIP Platinum Clients',
    openRateText: '42% Open',
    updatedText: 'Updated 2h ago',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDE2zhiA3uJeeRbV3EvDPC5sm_7ZcHn3jE6PdKa1w4w6EXYHTqBgc4C1OCbjuuqMOWwmoEfm04Xbycrz9D0K7EoqRnfGeq6BxrExBOAKUY0j9F22mU2MV6xKuiLe6IvA24ZBeoQ2CRY1eLlp0KslfsJiVKu9oUbm3YYZnzDLfsf4u1OthxcjM2KNY8IZfC1inGLOXAzI0eA723D_Mo5OHdeyspbwRuvF2wuvOw021YnP-v69WK3DYgnnHKvxoYfSW-MgiG8Ds43sZYN',
    isActive: true,
  },
  {
    id: 'em-2',
    title: 'A/W 2024 Launch',
    status: 'Scheduled',
    statusType: 'scheduled',
    audience: 'Returning Customers',
    updatedText: 'Sept 12',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAwwXWZPOwS7YEuy9-rx5J_peQOqp2wiV9HYdMVFfXzoaPP7klMexP5zuc0QFc9xDmlGbGKnPTs-rYFELrmp6LE8GKt0VuoEke2R4PHVAkV_33i-7wQTkq9EnnznyJdAUSG6_CPfanU9-nsKGu2EXuhnrML318j1pWGRFcTwhnZCUNpBNFp4B4z9kN-tiWrBen5blaEz2YNkzg0mTWYr5HlrzzStpIZRLTvu4w5Z37mzxYAsHd_PhKhN-Ay5nrQR5A5gLUGfVzXbUF',
    isActive: false,
  },
  {
    id: 'em-3',
    title: 'Holiday Gift Guide',
    status: 'Draft',
    statusType: 'draft',
    audience: 'Global Newsletter',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoF_lrsRB1oFuI1RaRKkwwyERAtAM-EU53A9BytcFnajZ8tuZrbgpo4mTBVehb19yCDMjpPFHiuv90qrFh71XzCBtSYO1CSDS9wHg2STC2Way5QIVxE78I2v1dPhbNsx9305yu2abWuJVoGOukLcraJgA2McJbNLQd6gOH9gg9-i_VkUPNqhZk0wkuYSaVsKy5hNk4oTlFYObLUpMH_Gqq497HEe2iYT7rNaPmBVlSRqsZLjo6HYUe0zBlp8fAGM3XZ-PQal95TysC',
    isActive: false,
  },
];

export const INITIAL_EMAIL_STATE: EmailState = {
  activeCampaignId: 'em-1',
  previewDevice: 'desktop',
  campaignName: 'Winter Solstice Private Sale',
  subjectLine: 'Refined Elegance: The A/W 2024 Collection',
  previewText: 'An exclusive invitation for our most cherished patrons...',
};
