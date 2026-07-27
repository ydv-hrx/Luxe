'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { navigationService, MenuItem, FALLBACK_HEADER_MENU } from '@/lib/services/navigation';
import { SearchHub } from '@/features/search/SearchHub';
import { ShoppingBag, Search, User, Menu, X, Heart } from 'lucide-react';

export const TopNavBar: React.FC = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(FALLBACK_HEADER_MENU);

  const initCart = useCartStore((state) => state.initCart);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const initWishlist = useWishlistStore((state) => state.initWishlist);
  const totalWishlistItems = useWishlistStore((state) => state.getTotalItems());

  useEffect(() => {
    initCart();
    initWishlist();

    // Fetch dynamic Shopify Header Navigation menu
    navigationService.getHeaderMenu().then((items) => {
      if (items && items.length > 0) {
        setMenuItems(items);
      }
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initCart, initWishlist]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  if (pathname?.startsWith('/admin')) return null;

  const checkIsActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/support') {
      return pathname === '/support' || pathname === '/concierge';
    }
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all duration-300 ${
          isScrolled ? 'py-1.5 shadow-sm' : 'py-3'
        }`}
      >
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto w-full gap-2 sm:gap-4">
          {/* LEFT: Mobile Hamburger Toggle + Luxora Logo + Desktop Nav Links */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 xl:gap-10 shrink-0">
            {/* Mobile Hamburger Toggle (under lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-neutral-800 hover:text-black focus:outline-none shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            {/* Luxora Logo */}
            <Link
              href="/"
              className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black block shrink-0"
            >
              Luxora
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-neutral-600 shrink-0">
              {menuItems.map((link) => {
                const active = checkIsActive(link.url);
                return (
                  <Link
                    key={link.id || link.title}
                    href={link.url}
                    className={`whitespace-nowrap shrink-0 transition-all duration-200 ${
                      active ? 'text-black font-bold border-b-2 border-black pb-1' : 'hover:text-black'
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Search Trigger + Account + Wishlist + Cart Actions */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 shrink-0">
            {/* Trigger Search Overlay */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-100 flex items-center gap-2"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xl:inline text-xs font-semibold uppercase tracking-wider text-neutral-500">Search</span>
            </button>

            {/* Client Account Dashboard Link */}
            <Link
              href="/account"
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-100"
              aria-label="Client Account"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Saved Wishlist Link */}
            <Link
              href="/wishlist"
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-100 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Shopping Cart Link */}
            <Link
              href="/cart"
              className="p-2 text-neutral-700 hover:text-black transition-colors rounded-full hover:bg-neutral-100 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-black text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl font-bold tracking-tight text-black"
                >
                  Luxora
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-neutral-500 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Drawer Navigation Links */}
              <nav className="flex flex-col gap-4">
                {menuItems.map((link) => {
                  const active = checkIsActive(link.url);
                  return (
                    <Link
                      key={link.id || link.title}
                      href={link.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base sm:text-lg font-semibold uppercase tracking-wider transition-colors py-1 ${
                        active ? 'text-black font-bold pl-2 border-l-2 border-black' : 'text-neutral-600 hover:text-black'
                      }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
                Client Account Portal
              </Link>
              <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">
                Concierge & Assistance
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Hub Overlay */}
      <SearchHub isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
