export interface ProductListItem {
  id: string;
  name: string;
  sku: string;
  status: 'Published' | 'Draft';
  price: string;
  inventoryCount: number;
  isFeatured?: boolean;
  image: string;
}

export interface ProductVariantItem {
  id: string;
  name: string;
  colorHex: string;
  units: number;
  priceDelta: string;
  isOutOfStock?: boolean;
  image: string;
}

export interface ProductWorkspaceState {
  name: string;
  sku: string;
  handle: string;
  vendor: string;
  isLive: boolean;
  price: string;
  cost: string;
  margin: string;
  inventory: number;
  description: string;
  materials: string;
  careGuide: string;
  previewDevice: 'laptop' | 'tablet' | 'mobile';
  heroImage: string;
  mediaImages: string[];
}

export const INITIAL_PRODUCTS_DIRECTORY: ProductListItem[] = [
  {
    id: 'prod-1',
    name: 'Obsidian Atelier Tote',
    sku: '#LX-0042',
    status: 'Published',
    price: '$2,450',
    inventoryCount: 12,
    isFeatured: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZuWDUnkcBz5tbhbhUI2KRjHOyk1U89OEg5nbZjGYLw3NFHALSX6336jV4uCQrgV9x4-xfHAwtCHdD5-9w_KjYInW28mfM_RJEmQvPL-jzp9uUFZdjqsolNKTJ-I7ab7fTkuEbNhfTBDn3TQ3hqINiLmPxo5A-7BHvP9dDxP03VthiAiSIZTmswVmJoW_eC0bH6l4iQTcMgH6LPNUV4SrQmWO_0drcxsVHpbtlgWbicrQXZQMHbdnf3VM1kczpky0Dvdlpjle5xqq',
  },
  {
    id: 'prod-2',
    name: 'Ethereal Silk Slip',
    sku: '#LX-0089',
    status: 'Draft',
    price: '$1,200',
    inventoryCount: 0,
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrbz59ah5SfukuHTrYxZTuwyjLEArFYU5wcW44s06XkV57jTv-UCMt31_8LVHs8JrL8HlcIebxQPI2686GpgyQZMY5ie55KxiU-28ayeP9_LsNeMFSMFbIUyhLMy9mWIleff8fx8NPk91zTzD2Mr-tXUNTCHsSz0tQrd6MtHtHuHlkiHXk76kzWoVritfZUlavdS6Ex4jXvv9BAMlJHOOA4zsvMI24sGjJWgsSsu2QMlHlgoyIzowYLk17cuOj2oOlFKcMsWhO17ff',
  },
];

export const INITIAL_PRODUCT_VARIANTS: ProductVariantItem[] = [
  {
    id: 'var-1',
    name: 'Midnight / L',
    colorHex: '#000000',
    units: 8,
    priceDelta: '+$0.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAjZa05NTUjYD_AXJ8PKC73FWQZ0L4T7voHXkcUBM6JHzPqJDdzF31Nc4GhhRkszleUg8-2XqBwo1GGG7Ao31dtWvuj7YNJhkXQW3hCrRUJRScZ4fU-Ar-dxW9pTnzCOriC0FsxakFRR6vY-5kTquym_-WzroGVaRTrqBnyfuF0S9fshsEWz8Jbzf5wyLkti6Amy3H2T6z_p_Xaw1Hx5iAoFq-aPIZYWnCKS9EaVb2KFBIQ3aVu8ZDb02LUdlBLaAeiyeXELc3DWhmr',
  },
  {
    id: 'var-2',
    name: 'Burgundy / L',
    colorHex: '#4a0e0e',
    units: 4,
    priceDelta: '+$250.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3JY0YH8PK0zpDA_dpNWF5bzW4F0ftln3EYGC1rGwRTMa4jKx-5PSdWOUfVswMzFt5lV2mhiqNuCnttIW8EKgjHAqcpVjIf8x-WLFOJP_z4LOhJy618ctGPichj4fgX5sYvpAslb96PxR8U7Jm4gvS8mKTMxW6QTWLNZl3Mvz-XGFtRDp-lGIwKZd-EMBEJ3GMofZLidWnoBxvOUs5XzAko9vlbCQdlOMkn4FxuE7iv87eKR4sfHQrXm_VTVcQULoHIPPD3jt3pNJo',
  },
  {
    id: 'var-3',
    name: 'Ivory / M',
    colorHex: '#f4f1ea',
    units: 0,
    priceDelta: '+$0.00',
    isOutOfStock: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUFgLuiHWvmoI-is6Ct_IRzA_jJ8ThNmLJltWO6bx_CYeQrD8x8usppCWFIvRsZBcr8OBcBQZd4HwGHld0c5W91Q5X2zJR398SgkhI9lBMOCBkRqnmC7vDYNfzpQN2QGU53W25_VUHRPSu55g113p8DrUOJSEqJSf69zFZCKZsp_WwVvZbZ8lwNpldfHlwewZ1NRmB1dRt9ZOsypiWpr2k50qRJ1Lp1mOYG2zc1Ib1Zrequ7-uwjv4OJDGDO5B7MhOmA7pStJghSls',
  },
];

export const INITIAL_PRODUCT_WORKSPACE: ProductWorkspaceState = {
  name: 'Obsidian Atelier Tote',
  sku: 'LX-OB-0042',
  handle: 'obsidian-atelier-tote-2024',
  vendor: 'Luxora Signature',
  isLive: true,
  price: '2,450.00',
  cost: '820.00',
  margin: '66.5%',
  inventory: 12,
  description:
    'The Obsidian Atelier Tote represents the pinnacle of craftsmanship. Each piece is hand-sculpted from full-grain Italian leather, featuring our signature architectural silhouette that balances rigid structure with a sensual, organic feel. Designed for the modern professional who values timelessness over trends.',
  materials: '100% Calfskin Leather, 24k Gold-plated hardware, Silk-blend lining.',
  careGuide: 'Store in provided dust bag. Professional leather cleaning only.',
  previewDevice: 'laptop',
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCDISqJuSV12iyhuqSjfiY0xM9HyBIDjL6l8Mlt0DCW06wjhMd9gMv0Z4WlmTQwQC5lAaAVMNLCa-pUuh1BV4fcxRk9OxoefS1KICpPDcE3TUm2-sS-ZAKkNaA47F-7YRuN3TY1lNkmQb5C0YT9UbacHp8fFyDoHvvNlgaJRAA9Qg8THVD5HSKeS23jO35apbWE231TXJg5cFVtWlATkmU4cEbBRmfCWtxyV_rvk5CCL5Pqfg6FBUzntSQ197ZkyLi_5450xZu3l7_z',
  mediaImages: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD4sj49Xa-7qGljOEbdAPHtqBsMTGAAhopMHRnlonnf8UogyIUdW0nja1do16Sodditov0xygJympUMzHlAYj42YFEmwQBl0X0CMAstPvzTjY3aoI8sDU9VYBf6-2MZ9YOKysP3tBfJuYui5zHxs-yybPBhKbjlIh6fY8360a7vmBB_HNYvM74TNlI4W_hWGQ8i3ekx6oxcyuyY_k6darODpCS6xB1ZEU6rj-NYeUI89ZvOngjnHUUFvX9c74xFWrFZFe0GSBetFXeA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC79cv9KmVWx7wp2wuPxgaIiVGfKq0HbASE-aiS0J06OQ4p-EYr_zoGN_n5E9F3EO6uWqwGc0D-IMKI7dbLF4zOhvgeSe1hQcMUgjXSgvQ8CB8Ye_qDBqF-rukSgpGIPrDw2S-sSBJm_RPecdEQl55UPisKTtOfydes7eg3Qwskamf4d_cEue8je542Gy8CnXVk1PH0Fn3sWV1cki7233gyXWXlqz6EMDTsF73BlC9URoCpAyILJMsKS34vDmpomxhUiOPLrlesXqmw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Lc_yP0oW7Ch-YKAfU1kwHJNVw7xWMy1EtpA2fplrn165ByPAxDTU9r6bPC-a98mata0bi641bhj8CNIqa6h_hHpamNzniFJY0ZgsayyzTtpDjgNyvRRsh3u2uvbF4GP-r08lEyoj5eq2VcA_kqm2u_tndYFwZFox3YjcAvciyfi7pA9G9cI32LyHxGnjn3-VPfWINtT16oAUKiGCdxWeSd4Ql5gkBtMxq77K2MhICS3Vn54171g9P2SqN8FscEghuy7DfAC2KOZy',
  ],
};
