import { create } from 'zustand';
import { Product, ProductVariant, CartLineItem } from '@/types';
import { cartService } from '@/lib/services/cart';
import { analytics } from '@/lib/services/analytics';

const STORAGE_KEY = 'luxe_shopify_cart_id';

interface CartState {
  isOpen: boolean;
  cartId: string | null;
  items: CartLineItem[];
  isLoading: boolean;
  error: string | null;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  initCart: () => Promise<void>;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => Promise<void>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  isOpen: false,
  cartId: null,
  items: [],
  isLoading: false,
  error: null,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  initCart: async () => {
    if (typeof window === 'undefined') return;

    try {
      set({ isLoading: true, error: null });
      const savedCartId = localStorage.getItem(STORAGE_KEY);

      if (savedCartId) {
        const existingCart = await cartService.getCart(savedCartId);
        if (existingCart && existingCart.id) {
          set({
            cartId: existingCart.id,
            items: existingCart.lines || [],
            isLoading: false,
          });
          return;
        }
      }

      // If no valid saved cart, create a new Shopify cart
      const newCart = await cartService.createCart([]);
      if (newCart && newCart.id) {
        localStorage.setItem(STORAGE_KEY, newCart.id);
        set({
          cartId: newCart.id,
          items: newCart.lines || [],
          isLoading: false,
        });
      }
    } catch (err) {
      console.error('Failed to initialize cart:', err);
      set({ isLoading: false, error: 'Could not restore shopping bag.' });
    }
  },

  addItem: async (product, variant, quantity = 1) => {
    const state = get();
    const lineItemId = `${product.id}-${variant.id}`;
    const existingIndex = state.items.findIndex((item) => item.id === lineItemId);

    // Track analytics event
    analytics.addToCart(product, quantity, variant.title);

    // 1. Optimistic local state update
    const updatedItems = [...state.items];
    if (existingIndex > -1) {
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: updatedItems[existingIndex].quantity + quantity,
      };
    } else {
      const newItem: CartLineItem = {
        id: lineItemId,
        product: {
          id: product.id,
          handle: product.handle,
          title: product.title,
          vendor: product.vendor,
        },
        variant,
        quantity,
      };
      updatedItems.push(newItem);
    }

    set({ items: updatedItems, isOpen: true, error: null });

    // 2. Async sync with Shopify Cart API
    try {
      let currentCartId = state.cartId;
      if (!currentCartId) {
        const newCart = await cartService.createCart([]);
        currentCartId = newCart.id;
        if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, currentCartId);
        set({ cartId: currentCartId });
      }

      const syncedCart = await cartService.addLines(currentCartId, [
        { merchandiseId: variant.id, quantity },
      ]);

      if (syncedCart && syncedCart.lines) {
        set({ items: syncedCart.lines.length > 0 ? syncedCart.lines : updatedItems });
      }
    } catch (err) {
      console.error('Shopify addLines error:', err);
    }
  },

  removeItem: async (lineItemId) => {
    const state = get();
    const targetItem = state.items.find((item) => item.id === lineItemId);
    if (targetItem) {
      analytics.removeFromCart(targetItem);
    }

    // 1. Optimistic UI update
    const filteredItems = state.items.filter((item) => item.id !== lineItemId);
    set({ items: filteredItems, error: null });

    // 2. Async sync with Shopify Cart API
    if (state.cartId) {
      try {
        const syncedCart = await cartService.removeLines(state.cartId, [lineItemId]);
        if (syncedCart && syncedCart.lines) {
          set({ items: syncedCart.lines });
        }
      } catch (err) {
        console.error('Shopify removeLines error:', err);
      }
    }
  },

  updateQuantity: async (lineItemId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(lineItemId);
      return;
    }

    const state = get();
    // 1. Optimistic UI update
    const updatedItems = state.items.map((item) =>
      item.id === lineItemId ? { ...item, quantity } : item
    );
    set({ items: updatedItems, error: null });

    // 2. Async sync with Shopify Cart API
    if (state.cartId) {
      try {
        const syncedCart = await cartService.updateLines(state.cartId, [
          { id: lineItemId, quantity },
        ]);
        if (syncedCart && syncedCart.lines) {
          set({ items: syncedCart.lines });
        }
      } catch (err) {
        console.error('Shopify updateLines error:', err);
      }
    }
  },

  clearCart: async () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    set({ items: [], cartId: null, error: null });
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getSubtotal: () => {
    return get().items.reduce(
      (total, item) => total + item.variant.price.amount * item.quantity,
      0
    );
  },
}));
