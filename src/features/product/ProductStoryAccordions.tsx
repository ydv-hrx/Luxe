'use client';

import React, { useState } from 'react';
import { ChevronDown, Truck, RotateCcw, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const ProductStoryAccordions: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('materials');

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: 'materials',
      title: 'Materials & Sustainable Provenance',
      icon: Sparkles,
      content:
        'Harvested exclusively during the spring combing season in Ulaanbaatar, Mongolia. Grade-A double-ply fibers measure an average length of 38mm and fineness under 15 microns. Certified by the Sustainable Fibre Alliance (SFA).',
    },
    {
      id: 'shipping',
      title: 'White-Glove Courier Logistics',
      icon: Truck,
      content:
        'Complimentary express courier shipping with signature confirmation and real-time GPS tracking. Packed in our signature magnetic presentation box with custom monogrammed tissue.',
    },
    {
      id: 'returns',
      title: '30-Day Effortless Returns & Exchange',
      icon: RotateCcw,
      content:
        'Enjoy a complimentary 30-day trial period. Returns include prepaid courier pick-up directly from your residence or hotel suite.',
    },
    {
      id: 'care',
      title: 'Atelier Care & Preservation Guide',
      icon: Heart,
      content:
        'Dry clean only or hand wash gently in lukewarm water using specialized cashmere wash. Store flat in the provided breathable cedar cloth bag.',
    },
    {
      id: 'authenticity',
      title: 'RFID Ledger Certificate of Authenticity',
      icon: ShieldCheck,
      content:
        'Every garment features an un-clonable RFID microchip sewn into the interior care tag, linking directly to its digital passport on the immutable ledger.',
    },
  ];

  return (
    <div className="flex flex-col gap-6 pt-10 border-t border-neutral-200/80">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-neutral-900 tracking-tight">
          Craftsmanship & Service Guarantees
        </h2>
        <p className="text-xs text-neutral-500 mt-1">
          Detailed specifications regarding fiber sourcing, white-glove delivery, and care instructions.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {sections.map((sec) => {
          const isOpen = openSection === sec.id;
          const Icon = sec.icon;

          return (
            <div
              key={sec.id}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggleSection(sec.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold font-serif text-neutral-900 text-base focus:outline-none"
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{sec.title}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-black' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                  <p>{sec.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
