export interface InventoryDirectoryItem {
  id: string;
  name: string;
  sku: string;
  units: number;
  status: 'Available' | 'Low Stock' | 'Reserved' | 'Out of Stock';
  image: string;
  isActive?: boolean;
}

export interface WarehouseStock {
  id: string;
  name: string;
  units: number;
  healthStatus: 'Healthy' | 'Low' | 'Critical';
}

export interface VariantStock {
  color: string;
  colorHex: string;
  sizes: { size: string; count: number }[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  icon: string;
}

export interface InventoryState {
  activeItemId: string;
  activeFilter: 'All' | 'Low Stock' | 'Out of Stock' | 'Warehouse';
  searchQuery: string;
}

export const INITIAL_INVENTORY_DIRECTORY: InventoryDirectoryItem[] = [
  {
    id: 'inv-1',
    name: 'Onyx Grand Tote',
    sku: 'LUX-204-BLK',
    units: 24,
    status: 'Available',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCF2Wqa730W3LmV-T8Yeuc8ntd4Mzq5rXKDVExLRv-vHekDfMWayBoKv0omXSIoTJLDdWmu-O1nK4_kA_M-06eMzREP9LCafjFI73neugXtU3KwxYtel9QEDLzPghDnRMUVWEqa8VZpqDGn9-zvCzhnfw8eWKBMoDmIECXdPMVERgUhS3kAAoFSYubHKVZNNxZ3twBqIYpplneXJH7aOvkG_3OZrN3F-85d5b55zB1h8M5WmHjA3HeEU8UMTd-ZtfdWgajm_mH4Yd_k',
    isActive: true,
  },
  {
    id: 'inv-2',
    name: 'Chronos Gold XL',
    sku: 'LUX-882-GLD',
    units: 4,
    status: 'Low Stock',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAssGIUZtZF8_bBYhQpNpzRCPRGXgrUoz7O5ADDbRidEIUFCIBvmeKtBmbBw6lDPdMoNGU8TowLzS3n40rwYA5uIWlZGVg9-07ehsaFl0zpb5Wo4ar57nB88JvJ5kUJK6vDKIpq7oz375GmcjPqEs4_63qZjz5Np2Wt0HJtg9EdujMSdcTxpITzTcI4bCWqNpMHdi11IWZNnv174jrEuIPFhpmD82r8leU4CCHfbvAYMBpKP2cQed8kDcs_bfzu8-hX1oWOYpbWjBut',
    isActive: false,
  },
  {
    id: 'inv-3',
    name: 'Ivory Step Loafer',
    sku: 'LUX-112-IVR',
    units: 12,
    status: 'Reserved',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzYRKNBv3U5DBEz6BDOnx1s9m3xNAzrhv554XZxuCYvQurwP8-nG4DwITAHWRSnHpX5KKvstogZM2BlMCWRAAvsChOhNw1wY0MVrmoO8QrLmqXu1me1yeZ5CwskAPS1gqiLQ3XYs32xe7GJhYhakdoVRm9H3yeRH27rl7jruW73W1scIKSRqlUsjDDEqerxwv4XQ6j6OLAzGyk2k9sOt69odHBPoQOsymJXOF8jx0r9wqsarWAVV947_6KDeeKUVe5gs350PFrhEHH',
    isActive: false,
  },
];

export const INITIAL_WAREHOUSE_STOCKS: WarehouseStock[] = [
  { id: 'wh-lon', name: 'London Atelier', units: 12, healthStatus: 'Healthy' },
  { id: 'wh-par', name: 'Paris Boutique', units: 8, healthStatus: 'Low' },
  { id: 'wh-glo', name: 'Global Hub', units: 4, healthStatus: 'Critical' },
];

export const INITIAL_VARIANT_STOCKS: VariantStock[] = [
  {
    color: 'Onyx Black',
    colorHex: '#000000',
    sizes: [
      { size: 'Small', count: 6 },
      { size: 'Medium', count: 12 },
      { size: 'Large', count: 6 },
    ],
  },
  {
    color: 'Ivory Cream',
    colorHex: '#e3e2e2',
    sizes: [
      { size: 'Small', count: 4 },
      { size: 'Medium', count: 8 },
      { size: 'Large', count: 2 },
    ],
  },
];

export const INITIAL_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'tl-1',
    title: 'Stock Transfer',
    subtitle: 'London → Paris (6 units)',
    timeAgo: '2 hours ago',
    icon: 'swap_horiz',
  },
  {
    id: 'tl-2',
    title: 'Adjustment',
    subtitle: 'Damaged Goods (-2 units)',
    timeAgo: 'Yesterday',
    icon: 'inventory',
  },
];

export const INITIAL_INVENTORY_STATE: InventoryState = {
  activeItemId: 'inv-1',
  activeFilter: 'All',
  searchQuery: '',
};
