export interface CustomerCardItem {
  id: string;
  name: string;
  vipTier: 'Platinum VIP' | 'Gold Tier' | 'Silver Tier';
  ltvText: string;
  status: 'ACTIVE' | 'DORMANT';
  avatar: string;
  isActive?: boolean;
}

export interface PurchaseItem {
  id: string;
  title: string;
  orderNumber: string;
  priceText: string;
  status: string;
  dateText: string;
  image: string;
}

export interface WishlistItem {
  id: string;
  category: string;
  title: string;
  priceText: string;
  image: string;
}

export interface InteractionEvent {
  id: string;
  timestamp: string;
  title: string;
  note?: string;
  color: 'black' | 'gold' | 'grey';
}

export interface CustomerState {
  activeCustomerId: string;
  searchQuery: string;
  conciergeNoteInput: string;
}

export const INITIAL_CUSTOMER_DIRECTORY: CustomerCardItem[] = [
  {
    id: 'cust-elena',
    name: 'Elena von Berg',
    vipTier: 'Platinum VIP',
    ltvText: '$42,900',
    status: 'ACTIVE',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1cz7vVpNBV_COLVNcerzKpw0-A6sUSZhRLItx6OY0mDyCKFq7mB80TKQFJ08SN6ncCu4lDuWcFKuGPU9O4tRKNP2iTZA4-nhc6nbPiKsi6U1jNAr1gNokLRUCk0nWaxNYbuAMC1jtpLBCAvreXFvkK1B6aNVXwJiUhdPQ4TP7MKUDOLxZFUw7NqI5fT2ICqZSOVz-drK2N9zLkaUFmwWNwtISeX6_ToK-KkygHHleHkFRrlB2kPjYwKHDtEzoW1RKFLy76Php2zZe',
    isActive: true,
  },
  {
    id: 'cust-julian',
    name: 'Julian Sterling',
    vipTier: 'Gold Tier',
    ltvText: '$18,450',
    status: 'DORMANT',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKnm1BYrkBg8DcJkdiaZa0AC7N9M_BX4OFC5y2iRh9A2haKSPYqML7l0JsAWW0Usl28nPcIImzab93zRUC19bx3hRpjITwooIkpVduMFzM33pBX_AvA9vAMk0UWAMiqMRwXqXTgwCiC4U69SMevHpmyj0_ufz0hmXWBnOTrv38PX3xThkQdVuP25rUXaA4BpN2W6-Qilhe6gKv3W4FtgMCO553hNTI1ff4HUpWm8M5aPBgK5RyWF29rScUx2lG5Ovirn2_6WyIE9ky',
    isActive: false,
  },
];

export const INITIAL_PURCHASE_HISTORY: PurchaseItem[] = [
  {
    id: 'ord-1',
    title: "Walnut & Brass 'Elysium' Chair",
    orderNumber: 'ORD-229401',
    priceText: '$12,400',
    status: 'Delivered',
    dateText: 'March 12, 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_bKyRcMTgsqDwpxDj0kefw6nAProrcUMaz-maP79pgWsMnPdQnVta4gXvilJ0AJjI4paktpAPYyYoHVL_CUlgMCLJrjH77IRKHjErQtvICIpfTH05WRshAzvdNKeCwXOCwLQRRKGlP3pdd5WQdbX_cKHA4JWRb-ne-IKxVh3zbyWZFrM90uK26y-qecwIs6FT6_TMgIvrfaDS-oqfq3kF56KGVuGvLwVPArVPWWT9pLuX7uoMy9jDXAy8GJsnyWPUzv0DcDTgXBCB',
  },
  {
    id: 'ord-2',
    title: "Obsidian 'Nocturne' Neckpiece",
    orderNumber: 'ORD-228512',
    priceText: '$8,900',
    status: 'Delivered',
    dateText: 'Dec 01, 2023',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDu55ZumPAQ-GKKLCPz1guEEgx2Cn4di_jn_dmL9Ry8uqs5EROMbfd1-mM8b_Kci8lrM1-tBJ6aXr-Ods3bBrJP-9sim2A4SS10KqOyrVhXJnblt1VP5Pu59_UkvK4iiwZYtQqmcSOTj5-mGivnVd7_nJM720Ax3d_Q9jUfbgtU6KFAEA1Y-WdyLvRtVVpwYr8W80emrGQRrRxNrfhTh8TJdrrupMoTxVmPuy3fYrjPvdfqABkyyYe1jMbIqYfyyaFbU6PAX-CgTU2q',
  },
];

export const INITIAL_CLIENT_WISHLIST: WishlistItem[] = [
  {
    id: 'wish-1',
    category: 'Art & Decor',
    title: 'Triptych: Silent Arches',
    priceText: '$15,000',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjUaLgC-X5Yt1rzp05eSvEn36dvCelU2l5w8KkhqhIfBDAsnVyZrhfJ4RuGmjUXoKP4WZVutbIyVP30PD6ehMJ5sguIhuhFQUWBZXjVPkKxUC_XRh_k0o0g3n-kgfawd0xRVw3d1ibm34yOXaC2Sm_tcKrVMEHVjIt58Db4-vvtgqHrOPTNW4ie41dbR3keErQaHEr7SaUg66K7aAWRgVU3xtZxD-rV20O_EmSUKJ0_KZYCn8wY-vyJlyvv0zvcImIgcNrfglKkhV4',
  },
  {
    id: 'wish-2',
    category: 'Travel',
    title: 'Atelier Weekend Holdall',
    priceText: '$4,200',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHd_snSw0Cs9h3uPFgessMhhpIUrqDdX94-anraetMrKgJJ6VRRr9c2tDqrczus2wM9OB9ZzlY1xzLTjS0_N--dTXzf40JWXmS6Be4vgt18PgLIbHx7FcacNmiMqPjlhMV74caQRglNuo4Sl12eeJeS6u7J9H2P0q3Figvqtd340S938npaF_hoy_ol0NYqUJHHwWHJj5B12Z9yYgDUvBvKOYdvN65h159bEtGaeYgwb50HqGSt6tUDUnt0KcAMiLwxoQDXj__6hnS',
  },
];

export const INITIAL_INTERACTION_TIMELINE: InteractionEvent[] = [
  { id: 'ev1', timestamp: 'Today, 10:24 AM', title: "Web: Viewed 'Noir' Collection", color: 'black' },
  { id: 'ev2', timestamp: 'March 12, 2024', title: 'Order ORD-229401 Fulfilled', color: 'gold' },
  {
    id: 'ev3',
    timestamp: 'March 08, 2024',
    title: 'Call with Concierge Marcus',
    note: 'Discussed custom upholstery options.',
    color: 'grey',
  },
];

export const INITIAL_CUSTOMER_STATE: CustomerState = {
  activeCustomerId: 'cust-elena',
  searchQuery: '',
  conciergeNoteInput: '',
};
