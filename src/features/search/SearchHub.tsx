'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { commerceService } from '@/lib/services/commerce';
import { GlassInput } from '@/components/ui/GlassInput';
import { Search, X, AlertCircle } from 'lucide-react';

export interface SearchHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchHub: React.FC<SearchHubProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchCacheRef = useRef<Record<string, Product[]>>({});
  const abortControllerRef = useRef<AbortController | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Debounced Search Execution with AbortController & Cache
  useEffect(() => {
    const cleanQuery = query.trim();

    if (cleanQuery.length < 2) {
      const timer = setTimeout(() => {
        setResults([]);
        setIsLoading(false);
        setIsError(false);
        setSelectedIndex(-1);
      }, 0);
      return () => clearTimeout(timer);
    }

    // Check Memory Cache
    if (searchCacheRef.current[cleanQuery]) {
      setResults(searchCacheRef.current[cleanQuery]);
      setIsLoading(false);
      setIsError(false);
      setSelectedIndex(0);
      return;
    }

    // Cancel previous inflight fetch
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const timer = setTimeout(async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const res = await commerceService.searchProducts(cleanQuery);
        if (!controller.signal.aborted) {
          searchCacheRef.current[cleanQuery] = res;
          setResults(res);
          setIsLoading(false);
          setSelectedIndex(res.length > 0 ? 0 : -1);
        }
      } catch (err: unknown) {
        if ((err as { name?: string })?.name !== 'AbortError') {
          console.error('Search API Error:', err);
          setIsError(true);
          setIsLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  // Keyboard navigation & Shortcuts (ESC, ArrowUp, ArrowDown, Enter)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < results.length) {
        e.preventDefault();
        const selectedProduct = results[selectedIndex];
        onClose();
        router.push(`/products/${selectedProduct.handle}`);
      }
    },
    [results, selectedIndex, onClose, router]
  );

  // Text Highlighting Helper
  const highlightMatch = (text: string, searchQuery: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={i} className="bg-yellow-200/80 text-black font-bold px-0.5 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  if (!isOpen) return null;

  const popularSearches = ['Cashmere Hoodie', 'Virgin Wool Trench', 'Leather Tote', 'Silk Gala Dress'];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md p-4 sm:p-8 flex items-start justify-center pt-16 sm:pt-24 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Global Storefront Search"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200/80 flex flex-col gap-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar (ARIA Combobox) */}
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <div className="relative flex-1" role="combobox" aria-expanded={isOpen} aria-haspopup="listbox" aria-controls="search-results-list">
            <GlassInput
              ref={inputRef}
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search garments, cashmere, leather, outerwear..."
              icon={<Search className="w-5 h-5 text-neutral-400" />}
              className="py-4 text-base border-none shadow-none focus:ring-0 bg-transparent text-neutral-900 placeholder:text-neutral-400"
              aria-autocomplete="list"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors ml-2"
              aria-label="Close search modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Live Accessibility Status Announcement */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {isLoading
            ? 'Searching Shopify store...'
            : results.length > 0
            ? `${results.length} products found`
            : query.trim().length >= 2
            ? 'No matching products found'
            : ''}
        </div>

        {/* Popular Tags Suggestion Strip */}
        {query.trim().length < 2 && (
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Popular Atelier Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-black hover:text-white text-xs font-semibold rounded-full transition-all duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Predictive Results & States Container */}
        {query.trim().length >= 2 && (
          <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1">
            <div className="flex justify-between items-center text-xs font-semibold text-neutral-500 pb-1">
              <span>{isLoading ? 'Fetching storefront results...' : `${results.length} products found`}</span>
              <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline">Use ↑ ↓ to navigate, Enter to view</span>
            </div>

            {/* Loading Skeleton */}
            {isLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex gap-4 p-3 bg-neutral-50 rounded-2xl animate-pulse">
                    <div className="w-16 h-20 bg-neutral-200 rounded-xl shrink-0" />
                    <div className="flex-1 space-y-2 py-2">
                      <div className="h-3 bg-neutral-200 rounded w-1/3" />
                      <div className="h-4 bg-neutral-200 rounded w-3/4" />
                      <div className="h-3 bg-neutral-200 rounded w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {isError && !isLoading && (
              <div className="py-10 text-center flex flex-col items-center gap-2 text-neutral-500">
                <AlertCircle className="w-8 h-8 text-amber-500" />
                <p className="text-sm font-semibold">Unable to fetch search results at this time.</p>
                <button
                  type="button"
                  onClick={() => setQuery(query)}
                  className="text-xs font-bold text-black underline"
                >
                  Retry Search
                </button>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && !isError && results.length === 0 && (
              <div className="py-12 text-center text-neutral-500 text-sm font-light">
                No matching atelier pieces found for <span className="font-semibold text-neutral-900">"{query}"</span>. Try searching for "cashmere", "leather", or "trench".
              </div>
            )}

            {/* Instant Results List (Listbox) */}
            {!isLoading && !isError && results.length > 0 && (
              <div id="search-results-list" role="listbox" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((prod, idx) => {
                  const isSelected = idx === selectedIndex;
                  const isAvailable = prod.variants[0]?.availableForSale ?? true;

                  return (
                    <Link
                      key={prod.id}
                      id={`search-result-${idx}`}
                      role="option"
                      aria-selected={isSelected}
                      href={`/products/${prod.handle}`}
                      onClick={onClose}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex gap-4 p-3.5 rounded-2xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-lg scale-[1.02]'
                          : 'bg-neutral-50/80 text-neutral-900 border-neutral-200/80 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="relative w-16 h-20 bg-neutral-200 rounded-xl overflow-hidden shrink-0 border border-neutral-200/50">
                        <Image
                          src={prod.images[0]?.url || ''}
                          alt={prod.title}
                          fill
                          sizes="64px"
                          className="object-cover object-center"
                        />
                      </div>

                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                          {prod.vendor}
                        </span>
                        <h4 className="text-sm font-semibold leading-snug truncate">
                          {highlightMatch(prod.title, query)}
                        </h4>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                            ${prod.price.amount} {prod.price.currencyCode}
                          </span>
                          <span className={`text-[10px] font-semibold flex items-center gap-1 ${isAvailable ? 'text-emerald-500' : 'text-neutral-400'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                            {isAvailable ? 'In Stock' : 'Sold Out'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
