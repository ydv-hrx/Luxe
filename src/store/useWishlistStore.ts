import { create } from 'zustand';
import { Product } from '@/types';

const STORAGE_KEY = 'luxe_wishlist_items';

interface WishlistState {
  items: Product[];
  toastMessage: string | null;
  initWishlist: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  getTotalItems: () => number;
  clearToast: () => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  toastMessage: null,

  initWishlist: () => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          set({ items: parsed });
        }
      }
    } catch (e) {
      console.error('Failed to parse saved wishlist:', e);
    }
  },

  toggleWishlist: (product: Product) => {
    const current = get().items;
    const exists = current.some((p) => p.id === product.id);

    let updated: Product[];
    let message: string;

    if (exists) {
      updated = current.filter((p) => p.id !== product.id);
      message = `Removed "${product.title}" from your wishlist.`;
    } else {
      updated = [...current, product];
      message = `Added "${product.title}" to your wishlist.`;
    }

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save wishlist to localStorage:', e);
      }
    }

    set({ items: updated, toastMessage: message });

    // Auto-clear toast after 3 seconds
    setTimeout(() => {
      if (get().toastMessage === message) {
        set({ toastMessage: null });
      }
    }, 3000);
  },

  isInWishlist: (productId: string) => {
    return get().items.some((p) => p.id === productId);
  },

  clearWishlist: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    set({ items: [], toastMessage: null });
  },

  getTotalItems: () => {
    return get().items.length;
  },

  clearToast: () => {
    set({ toastMessage: null });
  },
}));
