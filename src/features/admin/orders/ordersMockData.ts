export interface PurchasedItem {
  id: string;
  name: string;
  variant: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderQueueItem {
  id: string;
  orderNumber: string;
  customerName: string;
  totalAmount: number;
  status: 'Processing' | 'Pending' | 'Fulfilled';
  isVip?: boolean;
  vipTier?: string;
  isActive?: boolean;
}

export interface TimelineEvent {
  id: string;
  title: string;
  timestamp: string;
  isCompleted: boolean;
  icon: string;
}

export interface OrdersState {
  activeOrderId: string;
  activeFilter: 'All' | 'Pending' | 'Processing' | 'VIP';
  searchQuery: string;
  internalNote: string;
}

export const INITIAL_ORDER_QUEUE: OrderQueueItem[] = [
  {
    id: 'ord-4892',
    orderNumber: '#LX-4892',
    customerName: 'Eleanor Vance',
    totalAmount: 4250.0,
    status: 'Processing',
    isVip: true,
    vipTier: 'Platinum VIP',
    isActive: true,
  },
  {
    id: 'ord-4891',
    orderNumber: '#LX-4891',
    customerName: 'Julian Thorne',
    totalAmount: 1120.0,
    status: 'Pending',
    isActive: false,
  },
  {
    id: 'ord-4889',
    orderNumber: '#LX-4889',
    customerName: 'Marcus Sterling',
    totalAmount: 8900.0,
    status: 'Pending',
    isActive: false,
  },
];

export const INITIAL_PURCHASED_ITEMS: PurchasedItem[] = [
  {
    id: 'item-1',
    name: 'Midnight Silk Velvet Blazer',
    variant: 'Midnight Black / Large',
    sku: 'LUX-JK-002-BL-L',
    price: 3400.0,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6odFwMLlJpwZM_R7r8TIHqplBKvPtcVRCLqFdxSrvonzSgnEFmUde_e9Xa7DYP9kIeegd0X2JrZK1xujmC0b4aP4sh1ydusxSvLdnDh9vyER11d1Oahf3UUfHnAyTUmupMNYJH5TXeWNMHy9KObnjXa9vz6z8WhNwMloDG5PepVBQ0oLfwA-2me8E-Zg3CmRYtiEtcQEiKzkedHQwBaov4sUwuWNNMApUuZV3ipbWOVJqk2Hu_dTFrzdEICx-kCxlwAYbLY3QVBVW',
  },
  {
    id: 'item-2',
    name: 'Chestnut Calfskin Chelsea Boots',
    variant: 'Chestnut / 42 EU',
    sku: 'LUX-SH-421-BR-42',
    price: 850.0,
    quantity: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0MVVN0dUMIgyKcIzvCoU7Cw2wNkk6nvYm-lsl08FTCUGTB6qJJ_PeW4SllccRp9SF3NWzbADkWLXjgAJh0zontdyeRfw_yAa-jHMduxoZp5rgbxklWz-MHyYfTBwN6RrqT77XcdYZSC4VOYGcNpPtkHA5pbTI_i6Pvah8zY3-lo7Um5Cfg58DJ3u6AMpCD--BlQI3PHRr0m53S4vnYYcBdbLYGYGiJJc0Qv6lJeluC1v118o1hhHGY32jrl4ZlBviNYgkWY1vaVgB',
  },
];

export const INITIAL_TIMELINE_EVENTS: TimelineEvent[] = [
  { id: 't1', title: 'Order Created', timestamp: 'Oct 12, 10:45 AM', isCompleted: true, icon: 'check' },
  { id: 't2', title: 'Payment Processed', timestamp: 'Oct 12, 10:48 AM', isCompleted: true, icon: 'check' },
  { id: 't3', title: 'Packing Items', timestamp: 'Oct 13, 09:12 AM', isCompleted: true, icon: 'inventory_2' },
  { id: 't4', title: 'Shipped', timestamp: 'Estimated Oct 14', isCompleted: false, icon: 'local_shipping' },
];

export const INITIAL_ORDERS_STATE: OrdersState = {
  activeOrderId: 'ord-4892',
  activeFilter: 'All',
  searchQuery: '',
  internalNote: '',
};
