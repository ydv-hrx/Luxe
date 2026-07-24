'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { SearchHub } from '@/features/search/SearchHub';
import { ShoppingBag, Search, User, Menu, X, Sparkles } from 'lucide-react';

export const TopNavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleCart = useCartStore((state) => state.toggleCart);
  const initCart = useCartStore((state) => state.initCart);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    initCart();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initCart]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3 shadow-lumina-level1' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-widest uppercase font-serif text-black flex items-center gap-2"
            aria-label="LUXE Home"
          >
            <Sparkles className="w-5 h-5 text-blue-600 fill-blue-600" />
            <span>LUXE</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-700">
            <Link href="/shop" className="hover:text-blue-600 transition-colors py-1">
              Shop All
            </Link>
            <Link href="/collections" className="hover:text-blue-600 transition-colors py-1">
              Collections
            </Link>
            <Link href="/gifting" className="hover:text-blue-600 transition-colors py-1 flex items-center gap-1">
              <span>Gifting Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span>
            </Link>
            <Link href="/wardrobe" className="hover:text-blue-600 transition-colors py-1">
              AI Stylist
            </Link>
            <Link href="/welcome" className="hover:text-blue-600 transition-colors py-1">
              Manifesto
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-100/60"
              aria-label="Open instant predictive search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/account"
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-100/60 hidden sm:block"
              aria-label="Customer Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart Icon & Counter */}
            <button
              type="button"
              onClick={toggleCart}
              className="p-2 text-neutral-900 hover:text-blue-600 transition-colors relative rounded-full hover:bg-neutral-100/60 focus:outline-none"
              aria-label={`Shopping bag containing ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-neutral-200 px-6 py-6 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider">
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-blue-600"
              >
                Shop All
              </Link>
              <Link
                href="/collections"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-blue-600"
              >
                Collections
              </Link>
              <Link
                href="/gifting"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-blue-600"
              >
                Gifting Studio
              </Link>
              <Link
                href="/wardrobe"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-blue-600"
              >
                AI Stylist
              </Link>
              <Link
                href="/welcome"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-blue-600"
              >
                Manifesto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Instant Search Hub Modal */}
      <SearchHub isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
