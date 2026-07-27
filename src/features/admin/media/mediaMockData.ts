export interface MediaFolder {
  id: string;
  name: string;
  count: number;
  icon?: string;
  isSpecial?: boolean;
  children?: { id: string; name: string; count: number }[];
}

export interface MediaAsset {
  id: string;
  title: string;
  filename: string;
  url: string;
  type: 'image' | 'video' | 'svg';
  resolution: string;
  size: string;
  format: string;
  uploadedDate: string;
  pagesCount?: number;
  duration?: string;
  isSelected?: boolean;
  isFavorite?: boolean;
  altText: string;
  caption: string;
  seoReady: boolean;
  optimized: boolean;
  missingAltLocalesCount: number;
  usedIn: { label: string; sublabel: string; href: string }[];
}

export const MEDIA_MOCK_FOLDERS: MediaFolder[] = [
  {
    id: 'all',
    name: 'All Assets',
    count: 248,
    icon: 'folder_special',
    isSpecial: true,
  },
  {
    id: 'homepage',
    name: 'Homepage',
    count: 12,
    icon: 'folder',
    children: [
      { id: 'hero-banners', name: 'Hero Banners', count: 5 },
      { id: 'season-promos', name: 'Season Promos', count: 7 },
    ],
  },
  {
    id: 'collections',
    name: 'Collections',
    count: 84,
    icon: 'folder',
  },
  {
    id: 'campaigns',
    name: 'Campaigns',
    count: 36,
    icon: 'folder',
  },
];

export const MEDIA_MOCK_ASSETS: MediaAsset[] = [
  {
    id: 'asset-1',
    title: 'Gold Evening Gown',
    filename: 'gold_evening_gown.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBID8ulnBYDaUPZjiytIz9q7pNiPk4AveVt1ZkSR42pASXL5PC92bgEh9qNvd76-o_4UeLy_r-9MKLbUARG1xhIG1kcJn1VaUOGbz8BEGPyCSKUSUIHTVhNOvUTwohnqdbtl6DSALml3wMrN63cGUeXUvvGhfplKkzyiUXuTsK1NuAKq8cRDpFfINmkGwt2rgYpp0UmvG_Fn-YUGeHJ7SjYuSYtK1FcljmH7E860NQc0GXO14klajN3j6PyxsLwrido4ajK-0hynQeA',
    type: 'image',
    resolution: '2400 × 3200 px',
    size: '4.2 MB',
    format: 'JPEG',
    uploadedDate: 'May 18, 2024',
    pagesCount: 3,
    isSelected: true,
    isFavorite: true,
    altText:
      'Luxora Atelier Gold Evening Gown from the FW24 Collection, featuring metallic silk draping.',
    caption: 'Elegance in Gold: FW24 Collection',
    seoReady: true,
    optimized: true,
    missingAltLocalesCount: 2,
    usedIn: [
      { label: 'Homepage', sublabel: 'Hero Banner', href: '/admin/cms' },
      { label: 'FW24 Catalog', sublabel: 'Page 04', href: '/admin/collections' },
    ],
  },
  {
    id: 'asset-2',
    title: 'Luxury Accessories',
    filename: 'luxury_accessories.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB37Wn2WqyM5cE0CQ0SB93eGez3VzhPSnVGjrVqFn4Ia82GI7LxyoA31cgS2vNmlPJrTHXNekY9UA1c_nYjaVxep05V9rAYH7d3JdKEfjGT6rPyijI7J2D5oCt_hrxxXD9Y80vTzrLkXoQrN2pBrNUp4JuqrD6l8WC71L9-D49czY5iDAQAn57xHcuBHmsKVT4AbO8xnNJpRTIfuj0n-kq7s7GG106U5mfDMoWOM9gDuQbA3n4Eqkh4Ow13lafoVs2mmUNhwsdE-ruw',
    type: 'image',
    resolution: '3500 × 3500 px',
    size: '6.8 MB',
    format: 'JPEG',
    uploadedDate: 'May 16, 2024',
    isSelected: false,
    isFavorite: false,
    altText: 'Bespoke Italian leather accessories and jewelry display.',
    caption: 'Atelier Artisan Accessories',
    seoReady: true,
    optimized: true,
    missingAltLocalesCount: 0,
    usedIn: [{ label: 'Accessories', sublabel: 'Catalog Hero', href: '/admin/products' }],
  },
  {
    id: 'asset-3',
    title: 'Campaign Video Teaser',
    filename: 'campaign_teaser.mp4',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB74ArRAvjDATTKfYcEMCLQI8OHKFAaGUv8l_vw8h82EMEnN1R1wqCa8VSx2pO1FWm43dWQFaNnbz-oXRno1bRiOiiMEXCzfJMFqnvOhcP105zG0PxX6tXQ-E3gO8dTiVlpMn5bIk9o_Yvhb2TQEEHKEEvgI0Y5onMHJtTs6mk-d9Ut4Qqy45fjmeL0xxNmh1EgfDqosHew1eJA9xefvl0rbP30ICWzSCK20fPzRlQu_MiIov43U1aWsBAvPBT8YRnft4Xg7tSqzJCI',
    type: 'video',
    resolution: '1920 × 1080 px',
    size: '18.4 MB',
    format: 'MP4',
    uploadedDate: 'May 12, 2024',
    duration: '0:15',
    isSelected: false,
    isFavorite: true,
    altText: 'Spring High Jewelry Editorial Campaign Teaser Video',
    caption: 'Spring High Jewelry 2024',
    seoReady: true,
    optimized: false,
    missingAltLocalesCount: 1,
    usedIn: [{ label: 'Homepage', sublabel: 'Video Banner', href: '/admin/cms' }],
  },
  {
    id: 'asset-4',
    title: 'Luxora Crest Monogram SVG',
    filename: 'luxora_monogram.svg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8YQVUaI1qVCZM_8tWNk8st7N8F5Vhzg-btayqfmwrflJEOUeM7XGxvK_hdwl_sfgkPksAUtiGK0W3jVocHGCwFbMdJzbJnXw0MSBmCqQ5KDs0nYPudkofSf8eftASmDE_OOG0nv47t0qoJKyfBDYWSPhi2wOZ_rG25aEqNkgVhqADY6GqqUxXbs7EEm3EwVaxAWRXdnvf0qH8-j9iII1D8RePxLz6yWz5ZUFggDenO1aNUNMrWrMfmkYlzLiyI-TittS7skMRkgVm',
    type: 'svg',
    resolution: 'Vector',
    size: '42 KB',
    format: 'SVG',
    uploadedDate: 'May 02, 2024',
    isSelected: false,
    isFavorite: false,
    altText: 'Official Luxora Atelier Vector Crest Seal Monogram',
    caption: 'Luxora Crest Monogram',
    seoReady: true,
    optimized: true,
    missingAltLocalesCount: 0,
    usedIn: [{ label: 'Global', sublabel: 'Header & Footer Branding', href: '/admin' }],
  },
];
