export interface GiftLibraryCard {
  id: string;
  recipientName: string;
  code: string;
  valueText: string;
  status: 'Active' | 'Scheduled' | 'Redeemed';
  statusType: 'active' | 'scheduled' | 'redeemed';
  subtext: string;
  image: string;
  isActive?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  timeAgo: string;
  icon: string;
}

export interface GiftStudioState {
  activeGiftId: string;
  giftName: string;
  giftValue: number;
  theme: string;
  recipientName: string;
  personalMessage: string;
  previewDevice: 'desktop' | 'mobile' | 'packaging';
  searchQuery: string;
}

export const INITIAL_GIFT_LIBRARY: GiftLibraryCard[] = [
  {
    id: 'gft-1',
    recipientName: 'Eleanor Vance',
    code: 'LX-9921-X',
    valueText: '$2,500',
    status: 'Active',
    statusType: 'active',
    subtext: 'Code: LX-9921-X',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCILESRzyyt3It6Us7VfuVdI_g8vLuHTC13Ut_hUal5FHk5bx1nQkWP11pj2tX8tyxc3kWu5rYdZrD7cNZ0-homdsTgTUMDUCDe_F2ndfH2Zw7BUHrv9tqpAsGcblLnszBTx4hMsGEeonIlab9VfMwt-lEukTtITHBiQAQKSk6UwudH7XZlTq-AsHt1vtH360jb-5d1l4zrJVVxZOGHcBEzIUOhAgqUcMgMQTb0LL8NTSA_Rk8qX5vBLySzr0LfSpBrMDjNHfo000mR',
    isActive: true,
  },
  {
    id: 'gft-2',
    recipientName: 'Marcus Thorne',
    code: 'LX-4412-M',
    valueText: '$1,000',
    status: 'Scheduled',
    statusType: 'scheduled',
    subtext: 'Delivery: Dec 24, 2023',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDE6qWOpXTUW6521XIJACkyrdwjp7KW2oZ48E5z5vM_6QP3Iu164ciioiqiVjQvzTWraUuDlitLLj0_c3I8aVrAvliUnDRwVMp3tfF1o1crwUyx0xlPS1CYUPG-3aL7O-5oXcN3v300BPUBDAMHiuN9OOOI0N85a_Bsj6Na22-inyyERSB-DGIppwOsdblg-QRj1aOWGyPwA4Fls0lJRAz-9DqCvuiqLyqCJ0CJQFfC_OaRxC-3XF49H8IFhBiIlwl4c9S2F_14Ms',
    isActive: false,
  },
  {
    id: 'gft-3',
    recipientName: 'Isabella Rossi',
    code: 'LX-1109-R',
    valueText: '$5,000',
    status: 'Redeemed',
    statusType: 'redeemed',
    subtext: 'Redeemed: Nov 12, 2023',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyeAl0ze0IT_WEPueSlpTPlHFI2rldiU4T-4g2qI9l43SXOVpMW051dTAPHlnF6aQxZhseBSS05wgFpoO9JmcigYIQDqaxz4G8fN97OHlbYvoHl-d_Et2IONilcgJP5Kv9OwNCnNLVjPwCDAYMngMS0HS5zl2OGaAeVviSg_eq0j69XlvVsVrVVMUi3wv5xJx-y7hXH-S_wjYix7_rm-lUQ0dTTrzftNU8mZMeBhKpGO8YPosLwmOSdSwNptWgPUj3b6KD5Gn8mjR_',
    isActive: false,
  },
];

export const INITIAL_GIFT_ACTIVITIES: ActivityItem[] = [
  { id: 'act-1', title: 'Gift LX-882 Redeemed', timeAgo: '2 minutes ago', icon: 'redeem' },
  { id: 'act-2', title: 'Christmas Delivery Set', timeAgo: '1 hour ago', icon: 'schedule' },
];

export const INITIAL_GIFT_STATE: GiftStudioState = {
  activeGiftId: 'gft-1',
  giftName: 'The Signature Collection Credit',
  giftValue: 2500,
  theme: 'Atelier Gold',
  recipientName: 'Eleanor Vance',
  personalMessage: 'A gift as timeless as your style. Welcome to the Luxora inner circle.',
  previewDevice: 'desktop',
  searchQuery: '',
};
