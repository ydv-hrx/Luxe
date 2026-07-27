export interface ReturnQueueItem {
  id: string;
  returnId: string;
  productName: string;
  variant: string;
  priceText: string;
  badge: 'VIP Platinum' | 'High Value' | 'Standard';
  badgeType: 'vip' | 'error' | 'neutral';
  status: 'Pending Review' | 'Inspection' | 'Approved' | 'Refunded';
  statusColor: string;
  isActive?: boolean;
}

export interface InspectionCheckItem {
  id: string;
  label: string;
  isChecked: boolean;
}

export interface TimelineStep {
  id: string;
  title: string;
  timestamp: string;
  isCurrent?: boolean;
}

export interface ReturnsState {
  activeReturnId: string;
  inspectionProgress: number;
}

export const INITIAL_RETURNS_QUEUE: ReturnQueueItem[] = [
  {
    id: 'rtn-1',
    returnId: 'RTN-882',
    productName: 'Onyx Grand Tote',
    variant: 'Midnight Black · $4,250',
    priceText: '$4,250.00',
    badge: 'VIP Platinum',
    badgeType: 'vip',
    status: 'Pending Review',
    statusColor: '#755a24',
    isActive: true,
  },
  {
    id: 'rtn-2',
    returnId: 'RTN-421',
    productName: 'Chronos Gold XL',
    variant: 'Brushed Gold · $12,800',
    priceText: '$12,800.00',
    badge: 'High Value',
    badgeType: 'error',
    status: 'Inspection',
    statusColor: '#747878',
    isActive: false,
  },
];

export const INITIAL_INSPECTION_CHECKLIST: InspectionCheckItem[] = [
  { id: 'chk-1', label: 'Packaging Condition', isChecked: true },
  { id: 'chk-2', label: 'Product Condition', isChecked: true },
  { id: 'chk-3', label: 'Accessories Included', isChecked: true },
  { id: 'chk-4', label: 'Authenticity Verified', isChecked: false },
];

export const INITIAL_TIMELINE_STEPS: TimelineStep[] = [
  { id: 'st-1', title: 'Order Delivered', timestamp: 'Oct 12, 2023 · 10:45 AM' },
  { id: 'st-2', title: 'Return Requested', timestamp: 'Oct 14, 2023 · 02:12 PM' },
  { id: 'st-3', title: 'Package Received', timestamp: 'Oct 18, 2023 · 09:30 AM' },
  { id: 'st-4', title: 'Inspection Started', timestamp: 'Oct 18, 2023 · 02:00 PM', isCurrent: true },
];

export const INITIAL_RETURNS_STATE: ReturnsState = {
  activeReturnId: 'rtn-1',
  inspectionProgress: 75,
};
