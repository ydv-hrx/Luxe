export interface BannerCategoryItem {
  id: string;
  title: string;
  countText: string;
  icon: string;
  statusBadge?: { label: string; variant: 'live' | 'scheduled' };
  isActive?: boolean;
}

export interface BannerCampaignState {
  displayTitle: string;
  campaignSubtitle: string;
  ctaText: string;
  destinationUrl: string;
  startDate: string;
  endDate: string;
  status: 'Draft' | 'Live' | 'Scheduled';
  desktopAssetUrl: string;
  previewAssetUrl: string;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  totalViews: string;
  avgCtr: string;
  performanceNote: string;
}

export const INITIAL_BANNER_CATEGORIES: BannerCategoryItem[] = [
  {
    id: 'cat-hero',
    title: 'Homepage Hero',
    countText: '4 Banners • Last edit 2h ago',
    icon: 'view_quilt',
    statusBadge: { label: 'Live', variant: 'live' },
    isActive: true,
  },
  {
    id: 'cat-announcement',
    title: 'Announcement Bar',
    countText: '2 Banners',
    icon: 'campaign',
    statusBadge: { label: '1 Scheduled', variant: 'scheduled' },
    isActive: false,
  },
  {
    id: 'cat-collection',
    title: 'Collection Banners',
    countText: '12 Banners',
    icon: 'auto_awesome',
    isActive: false,
  },
  {
    id: 'cat-editorial',
    title: 'Editorial Campaign',
    countText: 'Drafting 3 new',
    icon: 'auto_stories',
    isActive: false,
  },
];

export const INITIAL_CAMPAIGN_STATE: BannerCampaignState = {
  displayTitle: 'The Spring Equinox Collection',
  campaignSubtitle: 'A rebirth of artisanal luxury and timeless silhouettes.',
  ctaText: 'Discover the Collection',
  destinationUrl: '/collections/spring-24',
  startDate: 'March 20, 2024',
  endDate: 'June 21, 2024',
  status: 'Draft',
  desktopAssetUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAiGFVvlrUjk2gaX4ku7L4TVpkqf-BScrqEgCDU6RcaYmiDUtkpC5CZh3ZTVZ2sRtlRVMTvRRU0PATVUA89vL_CGYNHFdZOhL938qqyf8DeGpwIbZVzE3PcyMbnse9SDXXtDp9d2dKKCgCAS6EfTYpz-VCE0p9fMGxtVCIwfvUBPC7zqXOgDGyveyHQG4uCPqkFlZGxFVok_9t1B4RpR2UnJlw-Ej1DxPULsIkfIJdHzHRW0mK_CHrRe93ini-grWz5bWh2ao7C5jHO',
  previewAssetUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA0qor057qS8WIU5eqkOcsAFX_CoHYnMo3P8T9gjrubepALdOQieMiBcuM0ZDGVLDzGHLV0WT3jiERoPmCx5CmQh4q0Ixo2zafUSqEXJjmv7GqcR7lrJxB34HxCGU1DckIK-1QZzYPj6r5LmXlQuj1JELh3ySTpBXJhRReV5SuZMU6MUzSeql1DF5Ssi2UpycQ9UWa3eVeMDda7Xn5cb-EweTwsUVUoMCw4URZ08pF1WrI4Nu11w5xWs_xF9lwqpueTnaa3fPF8-7-4',
  previewDevice: 'desktop',
  totalViews: '42.8k',
  avgCtr: '3.2%',
  performanceNote: '"Hero 01" is currently outperforming "Hero 02" by 18%.',
};
