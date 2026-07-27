export interface TrackNavItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

export interface FunnelStage {
  id: string;
  label: string;
  value: string;
  widthPercent: string;
  bgStyle: string;
}

export interface CampaignRow {
  id: string;
  title: string;
  subtitle: string;
  status: 'Live' | 'Scheduled' | 'Ended';
  openRate: string;
  ctr: string;
  roas: string;
  revenue: string;
  image: string;
}

export interface RealtimeInsightItem {
  id: string;
  timeAgo: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export interface AnalyticsState {
  activeTrack: string;
  timeframeRange: string;
  searchQuery: string;
}

export const TRACK_NAV_ITEMS: TrackNavItem[] = [
  { id: 'overview', label: 'Overview', icon: 'analytics', isActive: true },
  { id: 'revenue', label: 'Revenue', icon: 'payments' },
  { id: 'campaigns', label: 'Campaigns', icon: 'campaign' },
  { id: 'customers', label: 'Customers', icon: 'person' },
  { id: 'vip', label: 'VIP Members', icon: 'workspace_premium' },
  { id: 'products', label: 'Products', icon: 'styler' },
  { id: 'collections', label: 'Collections', icon: 'collections' },
  { id: 'regions', label: 'Regions', icon: 'public' },
  { id: 'funnels', label: 'Funnels', icon: 'filter_alt' },
];

export const FUNNEL_STAGES: FunnelStage[] = [
  { id: 'fn-1', label: 'Visitors', value: '480,290', widthPercent: 'w-full', bgStyle: 'bg-[#e9e8e8]' },
  { id: 'fn-2', label: 'Engagement', value: '124,115', widthPercent: 'w-[85%]', bgStyle: 'bg-[#efeded]' },
  { id: 'fn-3', label: 'Add to Cart', value: '28,402', widthPercent: 'w-[70%]', bgStyle: 'bg-[#f4f3f3]' },
  { id: 'fn-4', label: 'Purchased', value: '6,104', widthPercent: 'w-[55%]', bgStyle: 'bg-[#755a24] text-white' },
];

export const ACTIVE_CAMPAIGNS: CampaignRow[] = [
  {
    id: 'cmp-1',
    title: 'Winter Silk Heritage',
    subtitle: 'Global Reach',
    status: 'Live',
    openRate: '24.8%',
    ctr: '3.2%',
    roas: '12.4x',
    revenue: '€412,000',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBag4zAL8QxyiOQ4VSTmhMEqUS8VqtcTfhfGTNfgHNTdK9xv7BlTTzmDG6FVmHYveRuw0VXwhlxJgyWimv_GRkVlmJLjOS6-d2XLjA2JHncKuncPm_ZMslooYDgYs-U61L6WGQVqjrOLNe_l7HP9jRpe08Pq-RcQDsvSfUpF2gjtNuL25MOEMK7B0_-Do8Ha_GYfYthInpGyn-qhjO4_u57ukQEIfzZNgQ2oHZQUurtGBrQvqd0qeF2qQI1uxENrqtIw_HH7M--lzX3',
  },
  {
    id: 'cmp-2',
    title: 'Atelier Tokyo Launch',
    subtitle: 'Targeted Geo',
    status: 'Live',
    openRate: '31.2%',
    ctr: '5.1%',
    roas: '8.2x',
    revenue: '€285,400',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVHbcIft_KKDbMTqKapYfa5Mz0ltl3CW2782wYMi-hdhY2ZSjsbBaE3TnfWiSk8Jvbra4JVZr1Oep19MrA8efLeE7NKTZap7MaaT4dG7P7Z7JsyHYlU5fb9v8eKlov91TrRHPCU0Qp-RdIQmPlfChPA2GwXPrltoPyirUssID3eHQRIfEX3hlmkgCI7FKzE_8npACQAO109b0B3V4QwBZug3IUCljlCVYny0SWaqi-7YyZnl2QLeVmwOgX0kyoBhfIHnT7lhuDms3x',
  },
];

export const REALTIME_INSIGHTS: RealtimeInsightItem[] = [
  {
    id: 'ins-1',
    timeAgo: 'Now',
    title: 'Revenue Forecast',
    description: 'Projected to exceed Q4 goals by 12% based on current velocity.',
  },
  {
    id: 'ins-2',
    timeAgo: '12m',
    title: 'Inventory Risk',
    description: '"Heritage Coat" in Camel is running low in Milan hub.',
  },
  {
    id: 'ins-3',
    timeAgo: '45m',
    title: 'VIP Opportunity',
    description: 'High-value cluster detected in Dubai. Recommend private preview event.',
    isHighlighted: true,
  },
];

export const INITIAL_ANALYTICS_STATE: AnalyticsState = {
  activeTrack: 'overview',
  timeframeRange: 'Oct 01 - Oct 31, 2023',
  searchQuery: '',
};
