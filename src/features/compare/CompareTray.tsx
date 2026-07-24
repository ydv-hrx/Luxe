'use client';

import React from 'react';
import Image from 'next/image';
import { useCompareStore } from '@/store/useCompareStore';
import { Button } from '@/components/ui/Button';
import { X, Scale, ArrowRight, Trash2 } from 'lucide-react';
import { CompareModal } from './CompareModal';

export const CompareTray: React.FC = () => {
  const { items, removeProduct, clearCompare, isOpen, openCompare, closeCompare } = useCompareStore();

  if (items.length === 0) return null;

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[90vw] glass-panel bg-white/90 p-4 rounded-2xl border border-neutral-300 shadow-2xl animate-in slide-in-from-bottom duration-300 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-black text-white rounded-xl flex items-center gap-2">
            <Scale className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">{items.length}/4</span>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {items.map((prod) => (
              <div key={prod.id} className="relative group w-12 h-14 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-300 flex-shrink-0">
                <Image
                  src={prod.images[0]?.url || ''}
                  alt={prod.title}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeProduct(prod.id)}
                  className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Remove ${prod.title} from compare`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={clearCompare}
            className="text-xs text-neutral-500 hover:text-red-600 font-medium px-2 py-1"
          >
            Clear
          </button>
          <Button variant="primary" size="sm" onClick={openCompare} className="gap-1.5 text-xs">
            Compare Now
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {isOpen && <CompareModal items={items} onClose={closeCompare} />}
    </>
  );
};
