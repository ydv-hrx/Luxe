import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { authService, UserSession } from '@/lib/services/auth';
import { Address } from '@/lib/services/cart';

export type CustomerAddress = Address;

export interface AuthState {
  user: UserSession | null;
  addresses: CustomerAddress[];
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  initAuth: () => Promise<void>;
  login: (email: string, password?: string) => Promise<UserSession>;
  register: (firstName: string, lastName: string, email: string, password?: string) => Promise<UserSession>;
  logout: () => Promise<void>;
  fetchAddresses: () => Promise<void>;
  addAddress: (address: Omit<CustomerAddress, 'id'>) => Promise<void>;
  updateAddress: (id: string, address: Partial<CustomerAddress>) => Promise<void>;
  deleteAddress: (id: string) => Promise<void>;
  setDefaultAddress: (id: string) => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _get) => ({
      user: null,
      addresses: [],
      isAuthenticated: false,
      isLoading: false,
      error: null,

      initAuth: async () => {
        set({ isLoading: true });
        try {
          const session = await authService.getCurrentSession();
          if (session) {
            const addrs = await authService.getAddresses();
            set({ user: session, addresses: addrs, isAuthenticated: true, isLoading: false });
          } else {
            set({ user: null, addresses: [], isAuthenticated: false, isLoading: false });
          }
        } catch (_err) {
          set({ user: null, addresses: [], isAuthenticated: false, isLoading: false });
        }
      },

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const session = await authService.login(email, password);
          const addrs = await authService.getAddresses();
          set({ user: session, addresses: addrs, isAuthenticated: true, isLoading: false });
          return session;
        } catch (err: any) {
          const msg = err?.message || 'Authentication failed. Please verify your credentials.';
          set({ error: msg, isLoading: false });
          throw new Error(msg);
        }
      },

      register: async (firstName, lastName, email, password) => {
        set({ isLoading: true, error: null });
        try {
          const session = await authService.register(firstName, lastName, email, password);
          const addrs = await authService.getAddresses();
          set({ user: session, addresses: addrs, isAuthenticated: true, isLoading: false });
          return session;
        } catch (err: any) {
          const msg = err?.message || 'Registration failed. Please check your information.';
          set({ error: msg, isLoading: false });
          throw new Error(msg);
        }
      },

      logout: async () => {
        set({ isLoading: true });
        await authService.logout();
        set({ user: null, addresses: [], isAuthenticated: false, isLoading: false, error: null });
      },

      fetchAddresses: async () => {
        try {
          const addrs = await authService.getAddresses();
          set({ addresses: addrs });
        } catch (_err) {
          // Keep existing address state on failure
        }
      },

      addAddress: async (newAddr) => {
        try {
          const addrs = await authService.saveAddress(newAddr);
          set({ addresses: addrs });
        } catch (_err) {
          const fallbackId = `addr-${Date.now()}`;
          set((state) => ({ addresses: [...state.addresses, { ...newAddr, id: fallbackId }] }));
        }
      },

      updateAddress: async (id, updatedFields) => {
        try {
          const fullAddr = { ...updatedFields } as Omit<CustomerAddress, 'id'>;
          const addrs = await authService.saveAddress(fullAddr, id);
          set({ addresses: addrs });
        } catch (_err) {
          set((state) => ({
            addresses: state.addresses.map((addr) => (addr.id === id ? { ...addr, ...updatedFields } : addr)),
          }));
        }
      },

      deleteAddress: async (id) => {
        try {
          const addrs = await authService.deleteAddress(id);
          set({ addresses: addrs });
        } catch (_err) {
          set((state) => ({ addresses: state.addresses.filter((addr) => addr.id !== id) }));
        }
      },

      setDefaultAddress: async (id) => {
        try {
          const addrs = await authService.setDefaultAddress(id);
          set({ addresses: addrs });
        } catch (_err) {
          set((state) => ({
            addresses: state.addresses.map((addr) => ({ ...addr, isDefault: addr.id === id })),
          }));
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'luxe_customer_auth_storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
