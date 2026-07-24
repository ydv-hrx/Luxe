'use client';

import React from 'react';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Heart, X } from 'lucide-react';

export const WishlistToast: React.FC = () => {
  const toastMessage = useWishlistStore((state) => state.toastMessage);
  const clearToast = useWishlistStore((state) => state.clearToast);

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-neutral-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-neutral-800 flex items-center gap-3 text-xs font-medium">
        <Heart className="w-4 h-4 text-red-500 fill-red-500 flex-shrink-0" />
        <span>{toastMessage}</span>
        <button
          type="button"
          onClick={clearToast}
          className="p-1 text-neutral-400 hover:text-white rounded-full transition-colors ml-2"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
