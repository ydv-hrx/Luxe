export interface LandingPageItem {
  id: string;
  title: string;
  category: string;
  status: 'Live' | 'Draft';
  viewsText: string;
  updatedText: string;
  isActive?: boolean;
  image: string;
}

export interface PageSectionItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  isActive?: boolean;
  isExpanded?: boolean;
  isVisible?: boolean;
}

export interface AISuggestionItem {
  tag: string;
  title: string;
}

export interface LandingPageState {
  activePageId: string;
  activeCategory: string;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  previewZoom: number;
  sections: PageSectionItem[];
  aiPrompt: string;
}

export const INITIAL_LANDING_PAGES: LandingPageItem[] = [
  {
    id: 'page-1',
    title: 'Autumn / Winter 2024',
    category: 'Campaign Pages',
    status: 'Live',
    viewsText: '12.4k Views',
    updatedText: '2h ago',
    isActive: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCBVazO_nMTo2eH8aivnZ3iTIm0Mn7RSc4O_iXLSFpoeCt-evIMNE7xVjoM9IETxDfb0ex3mHr89g9hp3rYpR3lC8yZucXOhmuT3Sp6GtvrwKRKwGDLZN2PjCM_VgmyK5KnWihqm763OXw1mljsAraQv2ceKO2WP-1Bw1Dbty_BuqiirvW6MnMvojkWpet4WjAqJ27L4LkgdvFhymef6T9wpRQwdhlCG9ilQJpoDheTKnLyJryGQF_JC5OtsaFjSCcMIKkLs3cfEXo',
  },
  {
    id: 'page-2',
    title: "Summer Capsule '25",
    category: 'Seasonal',
    status: 'Draft',
    viewsText: '0 Views',
    updatedText: '2d ago',
    isActive: false,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUrXEQX1UvfRjUPquThnYrfJXZJlZp3E9sPgnRr7JbSqkdLX8H7X7xi-tUKb0Uj8MSaeaRMTuPUZpmRt3BE3CiBPflLCuXS5Yfj8mVqfi_SEPeSvfXzuE-Vb0TFwZwk4MWy0sHrNF0VUr9bD53oVWU-uJWtegtDmgRH3zsIuceigSqtYRV8_JhyrX3kmOzQIC59wDaZi19fJnUomXoU7--BBj6G7uo0-LZDGm3TrTl2Zy3sTee95vbsc7Z7QE-qao82LAF5qRARXwS',
  },
];

export const INITIAL_PAGE_SECTIONS: PageSectionItem[] = [
  {
    id: 'sec-hero',
    title: 'Hero Banner',
    subtitle: 'Full-width Cinematic Video',
    icon: 'auto_awesome',
    isActive: false,
    isExpanded: false,
    isVisible: true,
  },
  {
    id: 'sec-[#featured]',
    title: 'Featured Collections',
    subtitle: '3-Column Grid with Hover Effects',
    icon: 'view_carousel',
    isActive: true,
    isExpanded: true,
    isVisible: true,
  },
  {
    id: 'sec-editorial',
    title: 'Editorial Story',
    subtitle: 'Asymmetric Text & Image Layout',
    icon: 'menu_book',
    isActive: false,
    isExpanded: false,
    isVisible: true,
  },
];

export const INITIAL_AI_SUGGESTIONS: AISuggestionItem[] = [
  { tag: 'Suggestion', title: 'Generate Luxury Headline' },
  { tag: 'Refine', title: 'Rewrite Editorial Copy' },
  { tag: 'Optimize', title: 'Improve CTA' },
  { tag: 'SEO', title: 'Generate SEO' },
];

export const INITIAL_LANDING_PAGE_STATE: LandingPageState = {
  activePageId: 'page-1',
  activeCategory: 'Campaign Pages',
  previewDevice: 'desktop',
  previewZoom: 100,
  sections: INITIAL_PAGE_SECTIONS,
  aiPrompt: '',
};
