export interface CollectionListItem {
  id: string;
  internalTitle: string;
  handle: string;
  productCount: number;
  status: 'Live' | 'Draft';
  updatedText: string;
  isFeatured?: boolean;
  image: string;
}

export interface EditorialMoodboardProduct {
  id: string;
  title: string;
  price: string;
  stockStatus: string;
  stockBadge: string;
  image: string;
  availabilityColor: string;
}

export interface CollectionEditorState {
  internalTitle: string;
  urlHandle: string;
  headline: string;
  subheadline: string;
  description: string;
  isPublicVisible: boolean;
  desktopBanner: string;
  mobileBanner: string;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  previewZoom: number;
}

export const INITIAL_COLLECTIONS_LIST: CollectionListItem[] = [
  {
    id: 'col-1',
    internalTitle: "L'Été Noir 2024",
    handle: 'lete-noir-2024',
    productCount: 24,
    status: 'Live',
    updatedText: 'Updated 2h ago',
    isFeatured: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvk8Lw-XSWUJCowHf5DbuoVHCKrRQt98ZjkCk-u3t1We8nPXf4fmXCpksD0Qh77oG-P4G3XIzL-S3luQJ2AU8KS9szjKAKXk3sveIybSsO3jjTECSJ7NxyoMb_fcYGxdoDTG6l9TolaOgVojVp8bMU8xk5ZMht_j6SjJbMWBE13hEy2biIgwqxatx3F62dnbd1BCk1qtQSF4IolkswWAZYISndB29-U_wTUfHuYtIuSB4i5lLR4WzbtKtjnwjWTt8Sxi1CS9dKPwfS',
  },
  {
    id: 'col-2',
    internalTitle: 'Signature Essentials',
    handle: 'signature-essentials',
    productCount: 12,
    status: 'Draft',
    updatedText: 'Updated Oct 12',
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXg-icbqqYM8LDD3nfeq1J6dwKX-M84LSzDurhObK4E9iLP_blvA9mdbCJj-ijR6EGCiJslLVYfZg-55SLb4YkrISY-QGRDPtFEwULda8qLhsTAb4aj7BH0n6jqL2BgWSZVtvzPqJ4mSOylWaehyob5nBHCxMGT1pXmZCDncfioJK10KGHsDoX_v0NNH7Q87iM-qbDUKLb1Qc3M6fefngB2ovCoHLIgXvIiAfo6ZU2gs36VEhhP1Ebr4vKgMXh_qrR7E9e42KzaClF',
  },
  {
    id: 'col-3',
    internalTitle: 'Atelier Archives',
    handle: 'atelier-archives',
    productCount: 8,
    status: 'Live',
    updatedText: 'Updated Sep 28',
    isFeatured: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnVFk0I4-CG8U2BFEV0mGK-aZwv1VeoVXu_mtZf-6y6qdcYpULy7cO4tEI24RQBxS2MdT0ixfZoNY-iHwBVCZYUsiPXzWeBzVvJQ_W1yKnd5x9MSYUNvoWQK9QzWBckHDQWBLWNUQmVX_w3DqgC8SEA6YhIFlkYGgszxQSkvdYZ-4KrRiUJHLPT-1pLFD7h4UZIRDYfuMhiLt33SYC4g6BxrI5ThA2K_sRtpPUiu3d8umjEuyORmrIk2r_mR9c6UMQnSiUmQ8r96jF',
  },
];

export const INITIAL_MOODBOARD_PRODUCTS: EditorialMoodboardProduct[] = [
  {
    id: 'mb-1',
    title: 'Midnight Silk Gown',
    price: '$2,450.00',
    stockStatus: 'Available',
    stockBadge: 'Instock: 04',
    availabilityColor: 'text-green-600',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvuG2oK5YzfFh0iYsFee8iLPqvzYB7tvQIaAqGRyFkpXyhj4mh49XO0ZIGGAyc_z_USzuIE_M662AHzNXfbfUQtUh19ersupXAfCX5HhOBb6mKfBg7Mr70mIJyef-8qdBTdM41uWDan9mCBtjq8WGjQBoPgiaYMhU6aniHozi22tVpLYPTCDKzlSYiLM2xQ0bLIvqzSX9hYxdQ1Vfvlu7EimdTwutKwox6YJsTDoIpMqo23TJMvobQ4IJsmMX1OtVZleirUZ0eMeyo',
  },
  {
    id: 'mb-2',
    title: 'Atelier Chelsea Boot',
    price: '$1,100.00',
    stockStatus: 'Limit 2',
    stockBadge: 'Low Stock',
    availabilityColor: 'text-amber-600',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAP0CdqdQVzb9gepi8SrQ7EMZXOED5N_UPVWvuZQ47XerJCxxQBxIjcZQLipeq0MUiqqOzHPz_Q_sloZ5euO2zm4ZEfWvbO9-sjdZmB6S--6suAtLvC-YH1KNsIUTS_VtYBJGAkUUojAicIZizliHmg6BOfegFh16zvMD8vKpgmFIWTpyQpuJ8MY-Mh-CRp7e0RvzoVPZL2rLOKT_myQg2eqbu6Ws3y8_f15nPkIjXuNAmacrn-4SdGfs1HYggEoC2CrZP0Ytq9RCSC',
  },
  {
    id: 'mb-3',
    title: 'Sculptural Gold Cuff',
    price: '$3,800.00',
    stockStatus: 'Available',
    stockBadge: 'Featured',
    availabilityColor: 'text-green-600',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRbBfmETeTyEiVmrS1JBatF4YtVMo4ag1n2PiNDzlVPJpXHbk45yLmuc9YyAmJDZ60b8kWSizgy3F1hfzKFFT8mFsENqWNYNeECfhPkqfNjXKIjqmqT6H-1oBdlBM0YYqV5UnWzgMZeXEtj2NIdVrOXw2XO06dxCiSl4fvEfk0fj_11O0ienEfl-8CVPuGlf1KtgrqKUZScNNrEy-2LkoA-ntr-iHTYSeGWeSNceUmLjt-cTOGa0T_WCygZ4FEVryeqMuv83ks8kLi',
  },
];

export const INITIAL_EDITOR_STATE: CollectionEditorState = {
  internalTitle: "L'Été Noir 2024",
  urlHandle: 'lete-noir-2024',
  headline: 'Shadows of Elegance',
  subheadline: 'A curated sequence for the discerning minimalist.',
  description:
    "The L'Été Noir collection explores the intersection of structured silhouettes and fluid movement. Crafted in our Paris atelier, each piece serves as a testament to the power of monochromatic restraint. Designed for those who find brilliance in the shadows.",
  isPublicVisible: true,
  desktopBanner:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDi3hif2SPnKdXAqf8pcE7KWyF2DFQcJgmCkVvUJoMOU3BgumtWvLDsGEaDvPpj2Cv8HS2iZ3XTNMim8adv--ogG15lyU7WFDHOS4QgKsPzF-XDSSXTrNM9gKrIHbk7_fxt-lpVJEbiDkRlVMFNi0dCMV-9EefQ9JsKwzC-XQPQUr9viOF3a2wYFmPHFptSHDHjaiF1jYsovu0LVXZfSJiS8FD4oKtj8O_PRVVpVoJMbeP_wNWGYJQAc3vdajFOLrrmdJ1eKzAjpX5P',
  mobileBanner:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7W6moEq5HpcRatJAUMl7_CBsYhAFPuJ-HqxMd_XBSuU8vfLr4dRnwg71BYzt4E_p6s5xh-ipSSGHS998MXEWmAnaH5h6dal0ZrjpVObYQveMYatrUzmPqdSLHURf0aHGVNnfHUs3uTLQ8uRtUSdxx-y5gPPjdWZlVUbMji8cXfaTb2-Kqg3uxiMSiOEykWl0qzaiDCT7O3VrG3teW1tKa8Wx0VV8pa5oUT24LKkm_JwPl17fT0iZ7aBUI7l0oPotJ94ygtLwqke6G',
  previewDevice: 'desktop',
  previewZoom: 100,
};
