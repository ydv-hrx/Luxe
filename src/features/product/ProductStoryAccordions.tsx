'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { Plus, Minus } from 'lucide-react';

export interface ProductStoryAccordionsProps {
  product?: Product;
}

export const ProductStoryAccordions: React.FC<ProductStoryAccordionsProps> = ({ product }) => {
  const [openSection, setOpenSection] = useState<string | null>('description');

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: 'description',
      title: 'DESCRIPTION',
      content:
        product?.description ||
        'A centerpiece that blurs the line between furniture and sculpture. The Travertine Vessel features a wide mouth and a tapered, textured body. Dimensions: 14"H x 12"W. Weight: Approximately 22 lbs.',
    },
    {
      id: 'materials',
      title: 'MATERIALS & COMPOSITION',
      content:
        product?.metafields?.materials ||
        '100% Solid Italian Travertine stone. Honed by hand. Unfilled texture to preserve natural character. Sourced from sustainable quarries in Rapolano Terme.',
    },
    {
      id: 'care',
      title: 'CARE GUIDE',
      content:
        product?.metafields?.careGuide ||
        'Wipe with a soft, damp cloth. Avoid acidic cleaners or harsh chemicals as they may etch the natural stone. For decorative use; use a glass liner if holding water for extended periods.',
    },
    {
      id: 'shipping',
      title: 'SHIPPING & RETURNS',
      content:
        product?.metafields?.shippingInfo ||
        'Complimentary white glove express shipping with insured delivery in 7-10 business days. Hassle-free 30-day return policy with prepaid courier pickup.',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto py-8 sm:py-16 px-4 sm:px-6 w-full font-sans">
      <div className="space-y-0 border-y border-neutral-200">
        {sections.map((sec) => {
          const isOpen = openSection === sec.id;
          return (
            <div
              key={sec.id}
              onClick={() => toggleSection(sec.id)}
              className="border-b border-neutral-200 py-5 sm:py-6 cursor-pointer group select-none"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest text-black group-hover:text-neutral-600 transition-colors">
                  {sec.title}
                </h3>
                {isOpen ? (
                  <Minus className="w-4 h-4 text-black shrink-0 transition-transform duration-300" />
                ) : (
                  <Plus className="w-4 h-4 text-black shrink-0 transition-transform duration-300" />
                )}
              </div>
              {isOpen && (
                <div className="pt-4 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed animate-in fade-in duration-200">
                  <p>{sec.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
