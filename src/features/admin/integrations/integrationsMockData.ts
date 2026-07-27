export interface ServiceCategory {
  id: string;
  name: string;
  countText: string;
  icon: string;
  statusType: 'normal' | 'alert';
  isActive?: boolean;
}

export interface ConnectedService {
  id: string;
  name: string;
  category: string;
  icon: string;
  iconBgStyle: string;
  iconTextStyle: string;
  statusText: string;
  statusType: 'connected' | 'healthy' | 'alert' | 'tracking';
  detailsLine1Label: string;
  detailsLine1Value: string;
  detailsLine2Label?: string;
  detailsLine2Value?: string;
  note?: string;
  progressPercent?: number;
}

export interface IntegrationsState {
  activeCategoryId: string;
  searchQuery: string;
}

export const INITIAL_SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'cat-commerce', name: 'Commerce', countText: '3 Connected', icon: 'shopping_bag', statusType: 'normal', isActive: true },
  { id: 'cat-payments', name: 'Payments', countText: '2 Connected', icon: 'payments', statusType: 'normal', isActive: false },
  { id: 'cat-shipping', name: 'Shipping', countText: '4 Connected', icon: 'local_shipping', statusType: 'normal', isActive: false },
  { id: 'cat-analytics', name: 'Analytics', countText: '5 Connected', icon: 'analytics', statusType: 'normal', isActive: false },
  { id: 'cat-ai', name: 'AI Services', countText: '2 Connected', icon: 'psychology', statusType: 'alert', isActive: false },
  { id: 'cat-storage', name: 'Storage', countText: '1 Connected', icon: 'cloud_done', statusType: 'normal', isActive: false },
];

export const CONNECTED_SERVICES_BENTO: ConnectedService[] = [
  {
    id: 'srv-stripe',
    name: 'Stripe',
    category: 'Payments',
    icon: 'payments',
    iconBgStyle: 'bg-indigo-50',
    iconTextStyle: 'text-indigo-600',
    statusText: 'Connected',
    statusType: 'connected',
    detailsLine1Label: 'Webhook',
    detailsLine1Value: 'Active',
    detailsLine2Label: 'Test Mode',
    detailsLine2Value: 'Disabled',
  },
  {
    id: 'srv-openai',
    name: 'OpenAI',
    category: 'AI Services',
    icon: 'psychology',
    iconBgStyle: 'bg-[#e3e2e2]',
    iconTextStyle: 'text-black',
    statusText: 'API Key Expired',
    statusType: 'alert',
    detailsLine1Label: '',
    detailsLine1Value: '',
  },
  {
    id: 'srv-shiprocket',
    name: 'Shiprocket',
    category: 'Logistics',
    icon: 'local_shipping',
    iconBgStyle: 'bg-orange-50',
    iconTextStyle: 'text-orange-600',
    statusText: 'Healthy',
    statusType: 'healthy',
    detailsLine1Label: 'Uptime',
    detailsLine1Value: '94% Fulfillment API Uptime',
    progressPercent: 94,
  },
  {
    id: 'srv-ga4',
    name: 'GA4',
    category: 'Analytics',
    icon: 'insights',
    iconBgStyle: 'bg-blue-50',
    iconTextStyle: 'text-blue-600',
    statusText: 'Tracking',
    statusType: 'tracking',
    detailsLine1Label: '',
    detailsLine1Value: '',
    note: '"Last purchase event tracked 14s ago from London cluster."',
  },
];

export const INITIAL_INTEGRATIONS_STATE: IntegrationsState = {
  activeCategoryId: 'cat-commerce',
  searchQuery: '',
};
