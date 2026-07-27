export interface AuditActivityCard {
  id: string;
  userName: string;
  userRole: string;
  userAvatar: string;
  actionTitle: string;
  timestampText: string;
  resourceTag: string;
  severity: 'MEDIUM' | 'INFO' | 'CRITICAL';
  severityType: 'medium' | 'info' | 'critical';
  isActive?: boolean;
}

export interface ResourceDiffProperty {
  key: string;
  previousValue: string;
  updatedValue: string;
  isChanged?: boolean;
}

export interface LiveAlertItem {
  id: string;
  title: string;
  description: string;
  type: 'error' | 'warning' | 'info';
  icon: string;
}

export interface AuditCenterState {
  activeActivityId: string;
  activeCategoryFilter: 'All' | 'CMS' | 'Security' | 'Orders';
  isJsonDiffView: boolean;
  dateRange: string;
}

export const INITIAL_AUDIT_ACTIVITIES: AuditActivityCard[] = [
  {
    id: 'adt-1',
    userName: 'Alessandra V.',
    userRole: 'Atelier Director',
    userAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUO72plHgpnYENLamBzO1RqcNZaKWjcMrjjvlnrSipN5RQ6Dl90v1nq5g-o_P8RZ_w21SSpgfqnmiD1Mkl_xCJsYFAiodabElYSB-R1H9xTZRcWLhLM3k30i0XCIVxq1TvQ37Up1Ne40b2DCHXPyxedL679VAe7mquCLcShS1OQ8oDlxxf4Pt5Gp0AV6pt49mpzEbVpTcxMkmTf1c5EXt383u1LORuiYc4J9pxxdpbokkE844JWdtnt8dgCT6ftPYTr4lVkF11jqRP',
    actionTitle: "Price Adjusted: Milan Fall '24",
    timestampText: '2 minutes ago',
    resourceTag: 'SKU: LX-4002',
    severity: 'MEDIUM',
    severityType: 'medium',
    isActive: true,
  },
  {
    id: 'adt-2',
    userName: 'Marcus Chen',
    userRole: 'System Admin',
    userAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4lMTny5kd-zvxNJwjHhiaqNZ5DGTT8OYUm8SCqFDxrZyqxV9eJBV8qfk5mvKZPfGEg1HiB6YhkCYTD3eBqVGZxpMmF3Ub0JWdnm9nNYAUh_AO97ZlQx3UkTCJIjXw1OK8RUAtQF9-n1USvOB8361NHD6Rps4xubFUKP-7JWk6nAZ7hixJwKwHn8PcM0QK6-ozz6Iw3kGjNY9-S8EGMf3YE-ASfsR6H9fCSOxUlpdkQ138aT4ATP6hlFZONOUauZRfeUWDMyoKOgFg',
    actionTitle: 'Collection Published',
    timestampText: '14 minutes ago',
    resourceTag: 'CMS Global',
    severity: 'INFO',
    severityType: 'info',
    isActive: false,
  },
  {
    id: 'adt-3',
    userName: 'Sofia Rossi',
    userRole: 'Content Manager',
    userAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDr25MZaierFhnsdNHzwWIJd5mF_sY-_6KtuJPMEEAgrhEenmeNOF1HP9FPJnBY-6EFFUlP8KK2j-I-VpRAnF61v0yfgVlubqjTyqFdOnWyoDLc9XoJzRZICzLgqf72pXZhJUPw1TvBB7Qqvt1X51eiLwWUHh3sAfFblRPh7dq5SVsEjER1vvi3CiZrccFFmMM8TxRlRL6t4uzo1SHC_CNgOReW0mdMmEnDk5SLcWAC6ugs6lh1bCgY_0e7KZbwkfiCZh1Gf_BOnF8',
    actionTitle: 'Unauthorized API Key Access',
    timestampText: '1 hour ago',
    resourceTag: 'Security Node 4',
    severity: 'CRITICAL',
    severityType: 'critical',
    isActive: false,
  },
];

export const RESOURCE_DIFF_PROPERTIES: ResourceDiffProperty[] = [
  { key: 'unit_price', previousValue: '€1,200.00', updatedValue: '€1,450.00', isChanged: true },
  { key: 'wholesale_cost', previousValue: '€640.00', updatedValue: '€640.00', isChanged: false },
  { key: 'margin_percent', previousValue: '46.6%', updatedValue: '55.8%', isChanged: true },
];

export const LIVE_ALERTS: LiveAlertItem[] = [
  {
    id: 'alt-1',
    title: 'Unusual Login Pattern',
    description: 'Multiple failed attempts from IP: 203.0.113.5 (Bangkok, TH)',
    type: 'error',
    icon: 'gpp_maybe',
  },
  {
    id: 'alt-2',
    title: 'Permission Escalation',
    description: "User 'John D.' elevated to Admin by System Script.",
    type: 'warning',
    icon: 'lock_open',
  },
];

export const INITIAL_AUDIT_STATE: AuditCenterState = {
  activeActivityId: 'adt-1',
  activeCategoryFilter: 'All',
  isJsonDiffView: true,
  dateRange: 'Last 7 Days',
};
