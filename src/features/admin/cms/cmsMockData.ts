export interface SectionStructureItem {
  id: string;
  title: string;
  type: 'hero' | 'announcement' | 'featured_collections' | 'brand_story' | 'lifestyle';
  status: 'DRAFT' | 'PUBLISHED';
  updatedText: string;
  isVisible: boolean;
  icon: string;
}

export interface HomepageCmsState {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaStyle: 'SOLID' | 'OUTLINE';
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  activeSectionId: string;
  deviceMode: 'desktop' | 'tablet' | 'mobile';
  zoomLevel: string;
}

export const INITIAL_CMS_STATE: HomepageCmsState = {
  headline: 'The Spring Atelier Collection',
  subheadline: 'Discover the intersection of heritage craftsmanship and modern silhouette.',
  ctaText: 'Shop Collection',
  ctaStyle: 'SOLID',
  desktopImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBdOO-MVevGQrsD9g80wiMpeAr7Rbzt7rN1Mr1wO8FjrqPaA33gN98r4_Y6cLZdvHWDrRCN7Q5GBnOOa6NCD87vXqUYwmQNGhbRBCfSg31dZi8cK2eINzo9zGUetvOz8yCUj0dcMtSQv8Namq5VqrOFoTsrnQ4b36tDPSB33ikGTaO5x4tPVDQAxQF6nECIGPHQnGy3W7CvA7Ij6KcCavZOHYRL_uv64u88CZZ-vJwXlSWxVt9uojO6Fj4aCpNgGsmfrscxHGrNb_uZ',
  tabletImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCJHG4cLldAQR4tp-d49z08oJALKqKlVD4RpGl8nJ__55DG0OOyEPZugHAwhYp5zTr3fQ9fNocmA5i-Qtknh5Up7vsRiWBhEyhz7HCGlrqy-XSYH87A-FnBOsgF6awi-uYwNLwZSbVXgs-ZV_guCPMwiRrKXTR_viN2TSKLNeiulZP5So4zoOoVyFzU4Pwaoyh1PxMzPPD4D9jXenaTrxOvoYpYjfD0JLSLUG8ffwd6973L_KcG8sRWrPafhCk_uqurNEXN_QgAsYy2',
  mobileImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCPHeTi1HkwGFlZnOHR0FtDyX_PMs3_V4eTUav9OLuifjO1pKbgJqAzVEw1F7k5ze7iuI5FSkx385e6A4REcwfD7hBFBt3IUDY8Qvlmd7p2qYDxTOkjJ0yVH-1h-heL1Ncunb3oHEMOIHwvrQl-2AS7P7r17ql4PL3WFJSSe2NKRYBo6RIhPFx2V6kHGDCKkYg2sxXJg4W6ktMt4AvRFrSz7iHfYhXJOS1hvCJkKL72_5jVER6UZIa673qUZD_3ViVzEdVWJmARF2BF',
  activeSectionId: 'sec-hero',
  deviceMode: 'desktop',
  zoomLevel: '100%',
};

export const INITIAL_SECTIONS: SectionStructureItem[] = [
  {
    id: 'sec-hero',
    title: 'Hero Banner',
    type: 'hero',
    status: 'DRAFT',
    updatedText: 'Updated 2 min ago',
    isVisible: true,
    icon: 'view_carousel',
  },
  {
    id: 'sec-announcement',
    title: 'Announcement Bar',
    type: 'announcement',
    status: 'PUBLISHED',
    updatedText: 'Updated 1h ago',
    isVisible: true,
    icon: 'campaign',
  },
  {
    id: 'sec-[#1]',
    title: 'Featured Collections',
    type: 'featured_collections',
    status: 'PUBLISHED',
    updatedText: 'Updated 3h ago',
    isVisible: true,
    icon: 'grid_view',
  },
  {
    id: 'sec-[#2]',
    title: 'Brand Story',
    type: 'brand_story',
    status: 'PUBLISHED',
    updatedText: 'Updated 1d ago',
    isVisible: true,
    icon: 'auto_stories',
  },
];
