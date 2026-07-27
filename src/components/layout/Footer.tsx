'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationService, MenuItem, FALLBACK_FOOTER_MENUS } from '@/lib/services/navigation';
import { Plus, Minus } from 'lucide-react';

export const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [footerMenus, setFooterMenus] = useState<{ title: string; items: MenuItem[] }[]>(FALLBACK_FOOTER_MENUS);

  useEffect(() => {
    navigationService.getFooterMenus().then((menus) => {
      if (menus && menus.length > 0) {
        setFooterMenus(menus);
      }
    });
  }, []);

  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  const toggleSection = (name: string) => {
    setOpenSection(openSection === name ? null : name);
  };

  return (
    <footer className="w-full pt-12 sm:pt-16 md:pt-20 pb-8 bg-white border-t border-neutral-200 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto mb-10 sm:mb-16">
        {/* Brand Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 mb-4 sm:mb-0">
          <Link href="/" className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-black mb-3 sm:mb-6 block">
            Luxora
          </Link>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
            Defining the boundaries of modern aesthetics and quiet luxury since 2024.
          </p>
        </div>

        {/* Dynamic Shopify Navigation Footer Menu Columns */}
        {footerMenus.map((group, idx) => {
          const sectionId = `footer-col-${idx}`;
          return (
            <div key={group.title || idx} className="border-b sm:border-b-0 border-neutral-200 pb-4 sm:pb-0">
              <div
                onClick={() => toggleSection(sectionId)}
                className="flex justify-between items-center sm:block cursor-pointer sm:cursor-default"
              >
                <h4 className="font-sans text-xs font-semibold text-black uppercase tracking-widest sm:mb-4">
                  {group.title}
                </h4>
                <span className="sm:hidden text-neutral-500">
                  {openSection === sectionId ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </div>
              <div className={`flex flex-col gap-3 mt-3 sm:mt-0 ${openSection === sectionId ? 'block' : 'hidden sm:flex'}`}>
                {group.items.map((item) => {
                  const isExternal = item.url.startsWith('http://') || item.url.startsWith('https://');
                  return isExternal ? (
                    <a
                      key={item.id || item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs sm:text-sm text-neutral-600 hover:text-black transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={item.id || item.title}
                      href={item.url}
                      className="font-sans text-xs sm:text-sm text-neutral-600 hover:text-black transition-colors"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-8 text-[10px] sm:text-xs text-neutral-500 gap-4">
        <p>© 2026 LUXORA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 sm:gap-8 uppercase tracking-widest">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
          <button type="button" className="hover:text-black transition-colors">
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
};
