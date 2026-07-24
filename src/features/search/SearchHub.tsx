'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { commerceService } from '@/lib/services/commerce';
import { GlassInput } from '@/components/ui/GlassInput';
import { Search, X, Sparkles, ArrowRight, Camera, Mic } from 'lucide-react';

export interface SearchHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchHub: React.FC<SearchHubProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      const res = await commerceService.searchProducts(query);
      setResults(res);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const popularSearches = ['Cashmere Hoodie', 'Virgin Wool Trench', 'Leather Tote', 'Silk Gala Dress'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md p-4 sm:p-8 flex items-start justify-center pt-20 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 flex flex-col gap-6">
        {/* Search Input Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <div className="relative flex-1">
            <GlassInput
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by garment, cashmere, leather, color..."
              icon={<Search className="w-5 h-5" />}
              className="py-4 text-base border-none shadow-none focus:ring-0 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
              title="Visual Search"
              aria-label="Upload photo for visual search"
            >
              <Camera className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
              title="Voice Search"
              aria-label="Activate voice search"
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-black rounded-full transition-colors ml-2"
              aria-label="Close search overlay"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Popular Tags */}
        {!query && (
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="px-3.5 py-1.5 bg-neutral-100 hover:bg-black hover:text-white text-xs font-semibold rounded-xl transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Predictive Results */}
        {query && (
          <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
            <div className="flex justify-between items-center text-xs text-neutral-500">
              <span>{isLoading ? 'Searching...' : `${results.length} results found`}</span>
            </div>

            {results.length === 0 && !isLoading ? (
              <div className="py-12 text-center text-neutral-500 text-xs">
                No matching pieces found for "{query}". Try searching for "cashmere" or "trench".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/products/${prod.handle}`}
                    onClick={onClose}
                    className="flex gap-4 p-3 bg-neutral-50 hover:bg-neutral-100 rounded-2xl border border-neutral-200/60 transition-colors"
                  >
                    <div className="relative w-16 h-20 bg-neutral-200 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={prod.images[0]?.url || ''}
                        alt={prod.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase text-neutral-400">{prod.vendor}</span>
                      <h4 className="text-sm font-semibold text-neutral-900 line-clamp-1">{prod.title}</h4>
                      <span className="text-xs font-bold text-black mt-1">${prod.price.amount} USD</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
