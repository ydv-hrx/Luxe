'use client';

import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';

export const FloatingAIAssistant: React.FC = () => {
  return (
    <Link
      href="/concierge"
      className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
      aria-label="Luxora AI Assistant"
    >
      <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-4 bg-black text-white px-4 py-2 text-[10px] uppercase font-sans font-semibold tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-md shadow-md">
        Luxora Assistant
      </span>
    </Link>
  );
};
