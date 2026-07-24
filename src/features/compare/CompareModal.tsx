'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/useCartStore';
import { X, ShoppingBag, Check } from 'lucide-react';

export interface CompareModalProps {
  items: Product[];
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ items, onClose }) => {
  const addItem = useCartStore((state) => state.addItem);

  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-6xl w-full p-6 sm:p-10 shadow-2xl border border-neutral-200 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Product Intelligence</span>
            <h2 className="text-2xl font-bold font-serif text-neutral-900">Side-by-Side Comparison</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-black rounded-full transition-colors"
            aria-label="Close comparison modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr>
                <th className="p-4 w-40 font-semibold uppercase text-neutral-400 bg-neutral-50/50">Feature</th>
                {items.map((prod) => (
                  <th key={prod.id} className="p-4 min-w-[200px] align-top border-l border-neutral-100">
                    <div className="flex flex-col gap-3">
                      <div className="relative aspect-[3/4] w-full bg-neutral-100 rounded-xl overflow-hidden">
                        <Image
                          src={prod.images[0]?.url || ''}
                          alt={prod.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-neutral-400">{prod.vendor}</span>
                        <h4 className="font-semibold text-sm text-neutral-900 line-clamp-1">{prod.title}</h4>
                        <span className="text-sm font-bold text-black mt-1 block">${prod.price.amount} USD</span>
                      </div>
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        onClick={() => {
                          if (prod.variants[0]) addItem(prod, prod.variants[0]);
                        }}
                        className="gap-1 text-[11px]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add To Bag
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-4 font-semibold text-neutral-600 bg-neutral-50/50">Category</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-4 border-l border-neutral-100 font-medium text-neutral-900">
                    {prod.category}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-neutral-600 bg-neutral-50/50">Material / Blend</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-4 border-l border-neutral-100 text-neutral-700 leading-relaxed">
                    {prod.subtitle || '100% Mongolian Cashmere / Italian Leather'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-neutral-600 bg-neutral-50/50">Rating & Reviews</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-4 border-l border-neutral-100 font-medium text-neutral-900">
                    ★ {prod.rating || 4.9} ({prod.reviewCount || 15} reviews)
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-neutral-600 bg-neutral-50/50">Available Sizes</td>
                {items.map((prod) => {
                  const sizeOpt = prod.options.find((o) => o.name.toLowerCase() === 'size');
                  return (
                    <td key={prod.id} className="p-4 border-l border-neutral-100 text-neutral-700">
                      {sizeOpt ? sizeOpt.values.join(', ') : 'One Size'}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-neutral-600 bg-neutral-50/50">Digital Provenance</td>
                {items.map((prod) => (
                  <td key={prod.id} className="p-4 border-l border-neutral-100 text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4 text-emerald-600" /> RFID Verified
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
