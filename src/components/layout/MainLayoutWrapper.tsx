'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export interface MainLayoutWrapperProps {
  children: React.ReactNode;
}

export const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return (
      <main id="main-content" tabIndex={-1} className="w-full h-screen overflow-hidden focus:outline-none">
        {children}
      </main>
    );
  }

  return (
    <>
      {/* Announcement Bar for Storefront */}
      <div className="w-full bg-black py-2.5 px-6 text-center z-50 relative">
        <p className="font-sans text-xs font-semibold text-white tracking-widest uppercase">
          Complimentary Express Shipping on Orders Over $500
        </p>
      </div>

      <main id="main-content" tabIndex={-1} className="flex-grow pt-16 lg:pt-20 focus:outline-none">
        {children}
      </main>
    </>
  );
};
