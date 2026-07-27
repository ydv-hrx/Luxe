'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export interface AdminTopNavBarProps {
  onToggleMobileSidebar?: () => void;
}

export const AdminTopNavBar: React.FC<AdminTopNavBarProps> = ({ onToggleMobileSidebar }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-10 py-2 h-20 backdrop-blur-md sticky top-0 z-40 bg-[#faf9f9]/90 border-b border-[#e3e2e2]/40 select-none">
      {/* LEFT: Mobile Menu Toggle + Search Input + Add Button */}
      <div className="flex items-center gap-3 sm:gap-6 flex-1 max-w-xl">
        {/* Mobile Hamburger Toggle (<lg) */}
        {onToggleMobileSidebar && (
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 text-neutral-800 hover:text-black rounded-lg hover:bg-[#f4f3f3]"
            aria-label="Toggle Mobile Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        {/* Search Bar with ⌘ K Shortcut */}
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#444748]/50 group-focus-within:text-black transition-colors text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search orders, clients..."
            className="pl-12 pr-16 py-2.5 bg-[#f4f3f3]/50 border border-transparent focus:border-[#c4c7c7]/50 focus:bg-[#f4f3f3] rounded-full w-full text-xs font-semibold tracking-wide transition-all outline-none text-neutral-900"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none hidden sm:flex">
            <span className="px-1.5 py-0.5 rounded border border-[#c4c7c7]/30 text-[10px] text-[#444748]/40 font-bold bg-[#f4f3f3]">
              ⌘
            </span>
            <span className="px-1.5 py-0.5 rounded border border-[#c4c7c7]/30 text-[10px] text-[#444748]/40 font-bold bg-[#f4f3f3]">
              K
            </span>
          </div>
        </div>

        {/* Quick Add Button */}
        <button
          type="button"
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform shrink-0"
          title="Quick Action"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>
      </div>

      {/* RIGHT: Location Selector + Notifications + Theme Toggle + User Profile */}
      <div className="flex items-center gap-2 sm:gap-6 ml-4">
        {/* Location Dropdown */}
        <button
          type="button"
          className="hidden md:flex items-center gap-2.5 px-4 py-2 text-black font-sans text-xs font-semibold hover:bg-[#f4f3f3] rounded-xl transition-all border border-transparent hover:border-[#c4c7c7]/20"
        >
          <span className="text-[#444748] font-medium">Paris Atelier</span>
          <span className="material-symbols-outlined text-[18px]">unfold_more</span>
        </button>

        {/* Notifications & Contrast Toggles */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            type="button"
            className="p-2.5 hover:bg-[#f4f3f3] rounded-full transition-all relative"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-[22px] text-black">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-[#faf9f9]" />
          </button>
          <button
            type="button"
            className="p-2.5 hover:bg-[#f4f3f3] rounded-full transition-all"
            aria-label="Theme Contrast"
          >
            <span className="material-symbols-outlined text-[22px] text-black">contrast</span>
          </button>
        </div>

        {/* User Profile Avatar Pill */}
        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-[#c4c7c7]/30 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-black leading-tight">Elena Valerious</p>
            <p className="text-[10px] text-[#444748]/60 font-bold uppercase tracking-wider">Director</p>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-[#c4c7c7]/30 shadow-sm shrink-0 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCac5JUfSKUctlGrOUwcZMHlILFWuHcGtFMBa1G-27WzHUvpuB60--x-peyM_O-7pytiUjgNWG2-VuNPTScVqHYfQDojYibYbTPXptliAXN1z8o4J6Zg9Vuuw7Zu7CEAKn0KLf18XpFLP4urCV7FT-UFYExSL2SvLuEyvt_Y1ejKqUmZlHog2yZxHaGiMIK0z7m6ehHRvzZiUaPwKyw_ie2rb5GWLrixrQJFGmNXzBj1g82fv9ayoO7StIqT_2y1zoujF5YLetyMqkO"
              alt="Elena Valerious Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
