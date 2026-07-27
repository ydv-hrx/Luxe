'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen = false, onClose }) => {
  const pathname = usePathname();

  const isNavActive = (href: string) => {
    if (href === '/admin' || href === '/admin/dashboard') {
      return pathname === '/admin' || pathname === '/admin/dashboard';
    }
    return pathname?.startsWith(href);
  };

  const navContent = (
    <aside className="flex flex-col h-full py-12 px-2 overflow-y-auto bg-[#faf9f9] border-r border-[#e3e2e2]/40 w-72 shrink-0 select-none">
      {/* Brand Header */}
      <div className="px-4 mb-8 flex justify-between items-start">
        <div>
          <h1 className="font-serif text-2xl uppercase tracking-[0.2em] text-black font-semibold">
            Luxora Admin
          </h1>
          <p className="text-[#444748]/60 font-sans uppercase tracking-widest mt-1 text-[10px] font-medium">
            Atelier Director
          </p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1 text-neutral-500 hover:text-black rounded-full"
            aria-label="Close Mobile Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 flex flex-col gap-1 px-2" role="navigation" aria-label="Admin Sidebar Navigation">
        {/* CORE SECTION */}
        <div className="pt-2 pb-1 px-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#747878]/60 font-bold">
            Core
          </span>
        </div>

        <Link
          href="/admin"
          onClick={onClose}
          className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-black rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Dashboard</span>
        </Link>

        <Link
          href="/admin/cms"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/cms')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/cms') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-black rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Homepage CMS</span>
        </Link>

        <Link
          href="/admin/pages"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/pages')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/pages') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">auto_awesome_motion</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Landing Pages</span>
        </Link>

        <Link
          href="/admin/banners"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/banners')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/banners') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-black rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px]">ad_units</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Banner Manager</span>
        </Link>

        <Link
          href="/admin/footer"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/footer')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/footer') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#C9A86A] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#C9A86A]">view_day</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Footer Manager</span>
        </Link>

        {/* COMMERCE SECTION */}
        <div className="pt-6 pb-1 px-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#747878]/60 font-bold">
            Commerce
          </span>
        </div>

        <Link
          href="/admin/collections"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/collections')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/collections') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-black rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px]">auto_awesome_motion</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Collections</span>
        </Link>

        <Link
          href="/admin/media"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/media')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/media') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#C9A86A] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#C9A86A]">photo_library</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Media Library</span>
        </Link>

        <Link
          href="/admin/products"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/products')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/products') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-black rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px]">edit_note</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Products</span>
        </Link>

        <Link
          href="/admin/inventory"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/inventory')
              ? 'text-black font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/inventory') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">inventory_2</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Inventory</span>
        </Link>

        <Link
          href="/admin/navigation"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/navigation')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/navigation') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">account_tree</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Navigation</span>
        </Link>

        <Link
          href="/admin/orders"
          onClick={onClose}
          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/orders')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          <div className="flex items-center gap-4">
            {isNavActive('/admin/orders') && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
            )}
            <span className="material-symbols-outlined text-[20px] text-[#755a24]">shopping_bag</span>
            <span className="font-sans text-sm font-semibold tracking-wider">Orders</span>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
            12
          </span>
        </Link>

        <Link
          href="/admin/returns"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/returns')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/returns') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">assignment_return</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Returns</span>
        </Link>

        <Link
          href="/admin/shipping"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/shipping')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/shipping') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">local_shipping</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Shipping</span>
        </Link>

        <Link
          href="/admin/customers"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/customers')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/customers') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">group</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Customers</span>
        </Link>

        {/* MARKETING SECTION */}
        <div className="pt-6 pb-1 px-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#747878]/60 font-bold">
            Marketing
          </span>
        </div>

        <Link
          href="/admin/promotions"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/promotions')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/promotions') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">campaign</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Promotions</span>
        </Link>

        <Link
          href="/admin/rewards"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/rewards')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/rewards') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">auto_awesome_motion</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Rewards</span>
        </Link>

        <Link
          href="/admin/gift-cards"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/gift-cards')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/gift-cards') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">card_giftcard</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Gift Cards</span>
        </Link>

        <Link
          href="/admin/emails"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/emails')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/emails') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">mail</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Email Studio</span>
        </Link>

        <Link
          href="/admin/analytics"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/analytics')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/analytics') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">monitoring</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Analytics</span>
        </Link>

        <Link
          href="/admin/roles"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/roles')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/roles') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">admin_panel_settings</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Roles Manager</span>
        </Link>

        <Link
          href="/admin/integrations"
          onClick={onClose}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/integrations')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          {isNavActive('/admin/integrations') && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
          )}
          <span className="material-symbols-outlined text-[20px] text-[#755a24]">settings_input_component</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Integrations Hub</span>
        </Link>

        <Link
          href="/admin/lookbook"
          onClick={onClose}
          className="flex items-center gap-4 px-4 py-3 text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3] rounded-xl transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">style</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Lookbook</span>
        </Link>

        {/* SYSTEM SECTION */}
        <div className="pt-6 pb-1 px-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#747878]/60 font-bold">
            System
          </span>
        </div>

        <Link
          href="/admin/audit"
          onClick={onClose}
          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
            isNavActive('/admin/audit')
              ? 'text-[#755a24] font-bold bg-[#f4f3f3] shadow-sm'
              : 'text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3]'
          }`}
        >
          <div className="flex items-center gap-4">
            {isNavActive('/admin/audit') && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#755a24] rounded-r" />
            )}
            <span className="material-symbols-outlined text-[20px] text-[#755a24]">history_edu</span>
            <span className="font-sans text-sm font-semibold tracking-wider">Audit Center</span>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#ba1a1a]" />
        </Link>

        <Link
          href="/admin/settings"
          onClick={onClose}
          className="flex items-center gap-4 px-4 py-3 text-[#444748]/70 hover:text-black hover:bg-[#f4f3f3] rounded-xl transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
          <span className="font-sans text-sm font-semibold tracking-wider">Settings</span>
        </Link>
      </nav>

      {/* Footer CTA & Actions */}
      <div className="mt-auto px-2 space-y-2 pt-6">
        <button
          type="button"
          className="w-full bg-black text-white py-3.5 rounded-2xl font-sans text-sm font-semibold mb-6 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Collection
        </button>

        <Link
          href="/support"
          className="flex items-center gap-4 px-4 py-2.5 text-[#444748]/60 hover:text-black transition-all text-xs font-medium"
        >
          <span className="material-symbols-outlined text-[18px]">help</span>
          <span>Help Center</span>
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-4 px-4 py-2.5 text-[#444748]/60 hover:text-black transition-all text-xs font-medium"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar (lg+) */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 z-50 h-screen">
        {navContent}
      </div>

      {/* Mobile Drawer Sidebar (<lg) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="fixed inset-y-0 left-0 animate-in slide-in-from-left duration-300">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};
