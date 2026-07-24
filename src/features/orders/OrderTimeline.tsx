'use client';

import React from 'react';
import { Check, Clock, Package, Truck, Home } from 'lucide-react';

export type OrderStep = 'placed' | 'confirmed' | 'packed' | 'shipped' | 'delivered';

export interface OrderTimelineProps {
  currentStep: OrderStep;
}

const STEPS: { id: OrderStep; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'placed', label: 'Order Placed', icon: Clock },
  { id: 'confirmed', label: 'Confirmed', icon: Check },
  { id: 'packed', label: 'Packed', icon: Package },
  { id: 'shipped', label: 'Shipped', icon: Truck },
  { id: 'delivered', label: 'Delivered', icon: Home },
];

export const OrderTimeline: React.FC<OrderTimelineProps> = ({ currentStep }) => {
  const stepIndices: Record<OrderStep, number> = {
    placed: 0,
    confirmed: 1,
    packed: 2,
    shipped: 3,
    delivered: 4,
  };

  const activeIndex = stepIndices[currentStep] ?? 3;
  const progressPercent = (activeIndex / (STEPS.length - 1)) * 100;

  return (
    <div className="p-8 sm:p-10 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-4">
        <div>
          <h3 className="text-xl font-bold font-serif text-neutral-900">Order Delivery Timeline</h3>
          <p className="text-xs text-neutral-500 mt-0.5">Real-time status updates from our luxury courier partners.</p>
        </div>
        <span className="self-start sm:self-auto px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-200 uppercase tracking-wider">
          Step {activeIndex + 1} of {STEPS.length} — {STEPS[activeIndex].label}
        </span>
      </div>

      <div className="relative pt-4 pb-4 px-2">
        {/* Background Track Line */}
        <div className="absolute top-9 left-8 right-8 h-1 bg-neutral-200/80 -z-0 rounded-full" />
        {/* Active Fill Track Line */}
        <div
          className="absolute top-9 left-8 h-1 bg-black -z-0 rounded-full transition-all duration-700 ease-out"
          style={{ width: `calc(${progressPercent}% - 2rem)` }}
        />

        {/* Step Nodes */}
        <div className="flex justify-between items-center relative z-10">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < activeIndex;
            const isCurrent = idx === activeIndex;
            const Icon = step.icon;

            return (
              <div key={step.id} className="flex flex-col items-center gap-3 text-center group">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? 'bg-black text-white shadow-md'
                      : isCurrent
                      ? 'bg-black text-white ring-4 ring-neutral-200 scale-110 shadow-xl'
                      : 'bg-white text-neutral-400 border-2 border-neutral-200 shadow-sm'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <span
                  className={`text-xs font-semibold tracking-tight max-w-[80px] transition-colors ${
                    isCurrent ? 'text-black font-bold scale-105' : isCompleted ? 'text-neutral-800 font-medium' : 'text-neutral-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
