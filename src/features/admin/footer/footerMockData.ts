export interface FooterVariantItem {
  id: string;
  name: string;
  status: 'Live' | 'Draft' | 'Archived';
  updatedDate: string;
  isActive?: boolean;
  image?: string;
}

export interface FooterBuilderBlock {
  id: string;
  title: string;
  icon: string;
  type: 'identity' | 'navigation' | 'newsletter' | 'trust' | 'legal';
  isVisible?: boolean;
}

export interface FooterState {
  activeVariantId: string;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  previewZoom: number;
  aiPrompt: string;
  blocks: FooterBuilderBlock[];
}

export const INITIAL_FOOTER_VARIANTS: FooterVariantItem[] = [
  {
    id: 'footer-default',
    name: 'Default Footer',
    status: 'Live',
    updatedDate: 'Oct 24, 2023',
    isActive: true,
  },
  {
    id: 'footer-holiday',
    name: 'Holiday Footer',
    status: 'Draft',
    updatedDate: 'Nov 01, 2023',
    isActive: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnV4lVGlfaxBdU80R9hjbcVBJdETL1EQ8sfQLKZWBhBMEvgR8qmh2eCuqc4BQP9_6eg2KngkjQh5COryZdrjyM0edXztxKG3lBr65q8dISvv9p3eHJ4377Tu7ReJnZTYUsDq5IkQPS-DAp-7MzgMriPszA8dMAQZ_3cn05WeufWUugOZxgwgKlGu9_WFHhiAf_7rG4BKut6DhdvJwKpbM2D_twDYCAwxDnzw5ugivSfkaj60HfkzeMyJ4gesSfXi0qnsHGZReAZC5n',
  },
  {
    id: 'footer-luxury',
    name: 'Luxury Collection',
    status: 'Draft',
    updatedDate: 'Sep 12, 2023',
    isActive: false,
  },
  {
    id: 'footer-editorial',
    name: 'Editorial Footer',
    status: 'Archived',
    updatedDate: 'Aug 30, 2023',
    isActive: false,
  },
];

export const INITIAL_FOOTER_BLOCKS: FooterBuilderBlock[] = [
  { id: 'blk-identity', title: 'Brand Identity', icon: 'pentagon', type: 'identity', isVisible: true },
  { id: 'blk-nav', title: 'Navigation Links', icon: 'link', type: 'navigation', isVisible: true },
  { id: 'blk-newsletter', title: 'Newsletter Signup', icon: 'mail', type: 'newsletter', isVisible: true },
  { id: 'blk-trust', title: 'Commerce & Trust', icon: 'verified_user', type: 'trust', isVisible: true },
  { id: 'blk-legal', title: 'Legal & Utilities', icon: 'gavel', type: 'legal', isVisible: true },
];

export const INITIAL_FOOTER_STATE: FooterState = {
  activeVariantId: 'footer-default',
  previewDevice: 'desktop',
  previewZoom: 100,
  aiPrompt: '',
  blocks: INITIAL_FOOTER_BLOCKS,
};
