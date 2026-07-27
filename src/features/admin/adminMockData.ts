export interface KpiMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  comparison: string;
  bars: number[];
  icon: string;
  colorScheme: 'gold' | 'black' | 'error';
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  actionUrl?: string;
}

export interface TopProductItem {
  id: string;
  title: string;
  category: string;
  unitsSold: number;
  progressPercent: number;
  price: string;
  growth: string;
  image: string;
  color: 'black' | 'gold';
}

export interface TransactionItem {
  id: string;
  orderNumber: string;
  customerName: string;
  customerTier: string;
  avatarUrl?: string;
  initials?: string;
  status: 'Success' | 'Pending' | 'Failed';
  fulfillment: 'Priority' | 'Standard' | 'Express';
  amount: string;
}

export interface GlobalActivityItem {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  type: 'live' | 'standard' | 'alert';
}

export interface InventoryAlertItem {
  id: string;
  title: string;
  stockText: string;
  sku: string;
  image: string;
  ctaText: string;
  isUrgent?: boolean;
}

export const ADMIN_MOCK_DATA = {
  kpis: [
    {
      id: 'kpi-revenue',
      title: 'Total Revenue',
      value: '$2,450,000',
      change: '+12.4%',
      changeType: 'increase',
      comparison: 'vs prev month',
      bars: [35, 55, 90, 45, 70, 100],
      icon: 'payments',
      colorScheme: 'gold',
    },
    {
      id: 'kpi-orders',
      title: 'Orders',
      value: '1,240',
      change: '+8.2%',
      changeType: 'increase',
      comparison: 'vs prev month',
      bars: [50, 70, 35, 85, 60, 100],
      icon: 'shopping_cart',
      colorScheme: 'black',
    },
    {
      id: 'kpi-customers',
      title: 'Active Customers',
      value: '850',
      change: '+15.1%',
      changeType: 'increase',
      comparison: 'vs prev month',
      bars: [35, 50, 100, 70, 85, 75],
      icon: 'group',
      colorScheme: 'black',
    },
    {
      id: 'kpi-conversion',
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.4%',
      changeType: 'decrease',
      comparison: 'vs prev month',
      bars: [85, 45, 70, 100, 50, 35],
      icon: 'ads_click',
      colorScheme: 'error',
    },
  ] as KpiMetric[],

  quickActions: [
    { id: 'qa-1', label: 'New Product', icon: 'add_circle' },
    { id: 'qa-2', label: 'Upload Media', icon: 'upload_file' },
    { id: 'qa-3', label: 'Create Promo', icon: 'campaign' },
    { id: 'qa-4', label: 'Email Clients', icon: 'contact_mail' },
  ] as QuickAction[],

  topProducts: [
    {
      id: 'tp-1',
      title: "Signature Tote L'Atelier",
      category: 'Handbags',
      unitsSold: 412,
      progressPercent: 85,
      price: '$1,250',
      growth: '+18.5%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAvzPcxvbhVleq36yO_XOp0cifSkWN9ICyQLhOQFnuD0XEpIZwGfPjLVKvZdfIrve65-F3UcRAoJivxHjdvXDST9OiG0V-zllV3uA4J8lt4_4yCmE1NQZrvnqGtLTrq9E-VLTPvum37yQHKLxkFyO7Fa7Tpdb1X9_ITWU3cdN0DlN4B3lTb-YV_8-ddTGzgRyr9ou0mnoUJ1V5jlyyvevvlAQIGLGuYmNg2kKu04Q64rhM9xy8z2I_lBWm5q4GkeFyV1G9Q4Kqrp5CS',
      color: 'black',
    },
    {
      id: 'tp-2',
      title: 'Silk Drape Evening Dress',
      category: 'Apparel',
      unitsSold: 285,
      progressPercent: 62,
      price: '$2,800',
      growth: '+12.0%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAWDznvI_tjuRmTNIKXGchtUeMIfpmfQx_XLifOg2c-CfmdxlMfhpKMjyz545OAuUOIulU06sHPHsr5AFVnKW7yqnRgJVYfdfIsvy8iRsYxu6mzFKuHHC4Unvw88ls3E8GWPvOZAD2eqkRPqdUNqBNttWfagCAHkOCU4QWm4KHjPc9xyeAiG_PIloCcGUbuPL0qkutXIiKS_r522m1mPxbVa5RolARe9bSsme-0GuyB3D9syoFCBZOamT_HmFQ1n_zEmcq8k7Lbaq92',
      color: 'gold',
    },
    {
      id: 'tp-3',
      title: 'Gilded Leaf Earrings',
      category: 'Jewelry',
      unitsSold: 198,
      progressPercent: 45,
      price: '$650',
      growth: '+5.2%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBwcDhRjsar1uXxQ7edEjUNIs28J6LA5f_hzD7k6U2aydm9Lkck_0YfkuyRzWgQkKD5VxHbtlGgHrc5khR3A1eTs51qNosscj-kPziUf8ajSJoCLpn1s20ojGB6NUuJfSyYjK7CfceQuBgJtteK4ss6UaNAsVtpIhid_Np_u1IllhIIc2D-5AkDFfiQdcvgEnH_Hy-RMkh20tahL8p-WtANoA4kUSIHRl_I4IHlnCPX6ZAvJt8CGzgTk5VY4Ez0yE3z4QmUZ6RAuEQ_',
      color: 'black',
    },
  ] as TopProductItem[],

  recentTransactions: [
    {
      id: 'tx-1',
      orderNumber: '#LX-8242',
      customerName: 'Julian Vane',
      customerTier: 'VVIP Client',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBROAmOgq1xojoM92RRIBRPYtrfQqRCk51SQxY5zccjkjbFE2YDaAS5VQ8CHF496cVFmPNUd0vtr7FB94Kn1UaWVdLJP0SLEYha-5koHM0CnlIGirDUBSKifOfF7JVB1oHz8I9HGt0Nl7zxUxvP7cqOd3JyJkEJvOr2iCvleqHujK7BQMTzIzOaVLROZgm2dP7XjmMDvlOYJ6EQdMCEWvYVPoe7b6gKGKMBgcaCmG9JGjFuiulbD9KC0r9gKEcdmqh11ULlAF1XTiCJ',
      status: 'Success',
      fulfillment: 'Priority',
      amount: '$4,210.00',
    },
    {
      id: 'tx-2',
      orderNumber: '#LX-8241',
      customerName: 'Amara Sterling',
      customerTier: 'Standard',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Hrnf4F1c5TWQw4DAFHDGLafWNink9B6XcFb256JBS4shkHRtqoYDoJNe3SFMQwCKZrYupKcuhANS9QWIqar2wn5-_McvMk2hLOL_UPFfqZRb7DGhzVgOrXnq7jcpmbzPjrbXkvv_6Yp7XKVHFx74aN7qViglWbRzi7-CL410MCG2wMEWEK-ilNLo2HgEe88wbQPyuRGvpm9_m4_SrhUMtVmAn5KCoo7dkWw_bwIqtN4gCV1N5SPO1phyBkccyW4lzEGZN2gS85dg',
      status: 'Pending',
      fulfillment: 'Standard',
      amount: '$1,850.00',
    },
    {
      id: 'tx-3',
      orderNumber: '#LX-8240',
      customerName: 'Elena Kovic',
      customerTier: 'New Client',
      initials: 'EK',
      status: 'Success',
      fulfillment: 'Express',
      amount: '$920.00',
    },
  ] as TransactionItem[],

  activityTimeline: [
    {
      id: 'act-1',
      title: 'New customer signup',
      description: 'Dominic Wright just registered from London Atelier, UK.',
      timeAgo: '12 Minutes Ago',
      type: 'live',
    },
    {
      id: 'act-2',
      title: 'Order #8242 confirmed',
      description: 'Julian Vane purchased 3 items from the Spring High Jewelry Collection.',
      timeAgo: '45 Minutes Ago',
      type: 'standard',
    },
    {
      id: 'act-3',
      title: 'Inventory threshold reached',
      description: "'Organic Ceramic Vase' is below critical stock levels in Main Warehouse.",
      timeAgo: '2 Hours Ago',
      type: 'alert',
    },
  ] as GlobalActivityItem[],

  inventoryAlerts: [
    {
      id: 'inv-1',
      title: 'Organic Ceramic Vase',
      stockText: '2 Units Left',
      sku: 'SKU: OC-VA-09',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuChRCXr-KfewjUTbReeStiKhafrOIHaVvIdL0UbWQ_czX-JEh90orsUFBIPPB_s8Do7NnS03CZzu-B73rTL-eVNeYj_aLv5G8mUmiEUfBT2lA7uxE8HY9G-sv4mZ0CWL9Ku3s8EPgXu9nEZoYmL4kiWKhdsn9XNV8j_v5pv_tQU2JY0_XLc1wYiYiuQnXc7m85SkiNwaekNVBJw-PDBv8yg0zSl5CIHffs1snb9_rOcAN7KMqpGxx7xISImNAUACMhVlw6bjOMNyaaA',
      ctaText: 'Restock',
      isUrgent: true,
    },
    {
      id: 'inv-2',
      title: 'Mulberry Silk Fabric',
      stockText: '5 Meters Left',
      sku: 'SKU: TX-MS-42',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDCboTg_5YSg6-O6h8KbbRWF24aZpWr8OoDTbhvAOC7-m3GbJYbj0UQmoHvLmvTM42MNmJWV6mcNUm-bkpW8gEi69FvSIjQscSZO6jjbKgJz1JW9yPyU8or_JenFsbxzxEDGHP6uSSBk4DGCS8yiyuStrbrGEU3fCS4SgWWksvyxaoKIRDI6XaH530phiDebeqVD4RsEoPWFz7AITGwm-3cJ3OxLSHXKPJ_wVcGWnJQG2-K9Ntlj6kTUybp79zxBfkuXL4HOM_W8KNb',
      ctaText: 'Order Fabric',
      isUrgent: true,
    },
    {
      id: 'inv-3',
      title: 'Monogram Cufflinks',
      stockText: '8 Units Remaining',
      sku: 'SKU: JW-MC-01',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAEwJy5czHNj6VymL0-BtvjQJcG5ZLdc0kNLCIfx4B3G4Y4l22kVmr-wuVp_1ocVYILhLuLnnAjvIziM1vUCdrlOH65IjkAXbp6tIJNJdeQT-2dJZd3ZmVBs3PkWNTVGXTwSUh7eCgWLmuKZI23zXLBYDuToDPRDGswj6V6SpkTxvDC37IoIi6dSz_5_XBQ1inH-dF8vIg-Z-scMhqku5gC3YWshJv8oS3Ta03bONZAGBxKFPn3bdUJQzFanmLE9YrXH1j0Qwc9r075',
      ctaText: 'Full Stock View',
      isUrgent: false,
    },
  ] as InventoryAlertItem[],
};
