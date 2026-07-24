import { create } from 'zustand';
import { Product } from '@/types';

interface CompareStoreState {
  items: Product[];
  isOpen: boolean;
  toggleOpen: () => void;
  openCompare: () => void;
  closeCompare: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clearCompare: () => void;
  isComparing: (productId: string) => boolean;
}

export const useCompareStore = create<CompareStoreState>((set, get) => ({
  items: [],
  isOpen: false,

  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  openCompare: () => set({ isOpen: true }),
  closeCompare: () => set({ isOpen: false }),

  addProduct: (product) => {
    set((state) => {
      const exists = state.items.some((p) => p.id === product.id);
      if (exists) return state;
      if (state.items.length >= 4) {
        // Keep max 4 items for comparison
        return { items: [...state.items.slice(1), product], isOpen: true };
      }
      return { items: [...state.items, product], isOpen: true };
    });
  },

  removeProduct: (productId) => {
    set((state) => ({
      items: state.items.filter((p) => p.id !== productId),
    }));
  },

  clearCompare: () => set({ items: [], isOpen: false }),

  isComparing: (productId) => {
    return get().items.some((p) => p.id === productId);
  },
}));
