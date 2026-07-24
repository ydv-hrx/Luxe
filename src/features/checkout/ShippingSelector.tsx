'use client';

import React from 'react';
import { Truck, Sparkles, Clock } from 'lucide-react';

export interface ShippingMethod {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  estimatedTime: string;
}

export interface ShippingSelectorProps {
  selectedId: string;
  onSelect: (method: ShippingMethod) => void;
  subtotal: number;
}

export const ShippingSelector: React.FC<ShippingSelectorProps> = ({
  selectedId,
  onSelect,
  subtotal,
}) => {
  const isFreeShippingEligible = subtotal >= 500;

  const methods: ShippingMethod[] = [
    {
      id: 'express-whiteglove',
      title: 'White-Glove Express Air',
      subtitle: 'Signature black box packaging with custom ribbon and live temperature control.',
      price: isFreeShippingEligible ? 0 : 35,
      estimatedTime: '1 - 2 Business Days',
    },
    {
      id: 'same-day-concierge',
      title: 'LUXE Same-Day Private Courier',
      subtitle: 'Dedicated courier delivery to your residence or hotel suite.',
      price: 75,
      estimatedTime: 'Today by 8:00 PM',
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {methods.map((method) => {
        const isSelected = selectedId === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method)}
            className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-4 ${
              isSelected
                ? 'bg-black text-white border-black shadow-md'
                : 'bg-white text-neutral-900 border-neutral-200/80 hover:border-neutral-400'
            }`}
            aria-pressed={isSelected}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-xl mt-0.5 ${isSelected ? 'bg-neutral-800 text-blue-400' : 'bg-neutral-100 text-neutral-700'}`}>
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-sm flex items-center gap-2">
                  {method.title}
                  {method.price === 0 && (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                      Complimentary
                    </span>
                  )}
                </span>
                <p className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {method.subtitle}
                </p>
                <span className={`text-[11px] font-medium mt-1 flex items-center gap-1 ${isSelected ? 'text-blue-300' : 'text-neutral-600'}`}>
                  <Clock className="w-3 h-3" /> {method.estimatedTime}
                </span>
              </div>
            </div>

            <span className="text-sm font-bold whitespace-nowrap">
              {method.price === 0 ? 'FREE' : `$${method.price}`}
            </span>
          </button>
        );
      })}
    </div>
  );
};
