export interface NavigationMenuItem {
  id: string;
  name: string;
  status: 'Live' | 'Draft';
  linksCountText: string;
  isActive?: boolean;
}

export interface NavigationTreeNode {
  id: string;
  title: string;
  isExpanded?: boolean;
  isVisible?: boolean;
  children?: { id: string; title: string }[];
}

export interface NavigationState {
  activeMenuId: string;
  activeView: 'desktop' | 'mobile' | 'preview';
  columnsCount: string;
  isEditorialEnabled: boolean;
  treeNodes: NavigationTreeNode[];
}

export const INITIAL_NAVIGATION_MENUS: NavigationMenuItem[] = [
  {
    id: 'menu-header',
    name: 'Main Header',
    status: 'Live',
    linksCountText: '8 Links • Last edited 2h ago',
    isActive: true,
  },
  {
    id: 'menu-mega',
    name: 'Mega Menu',
    status: 'Draft',
    linksCountText: '12 Links • Nested Columns',
    isActive: false,
  },
  {
    id: 'menu-mobile',
    name: 'Mobile Menu',
    status: 'Live',
    linksCountText: '6 Primary Links',
    isActive: false,
  },
  {
    id: 'menu-footer',
    name: 'Footer Menu',
    status: 'Live',
    linksCountText: '15 Links • 4 Columns',
    isActive: false,
  },
];

export const INITIAL_TREE_NODES: NavigationTreeNode[] = [
  {
    id: 'node-collections',
    title: 'Collections',
    isExpanded: true,
    isVisible: true,
    children: [
      { id: 'sub-1', title: 'Bags & Leather' },
      { id: 'sub-2', title: 'Watches' },
      { id: 'sub-3', title: 'Home & Living' },
    ],
  },
  {
    id: 'node-new-arrivals',
    title: 'New Arrivals',
    isExpanded: false,
    isVisible: true,
  },
  {
    id: 'node-designers',
    title: 'Designers',
    isExpanded: false,
    isVisible: true,
  },
];

export const INITIAL_NAVIGATION_STATE: NavigationState = {
  activeMenuId: 'menu-header',
  activeView: 'desktop',
  columnsCount: '4 Columns',
  isEditorialEnabled: true,
  treeNodes: INITIAL_TREE_NODES,
};
