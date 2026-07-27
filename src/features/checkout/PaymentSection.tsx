'use client';

import React, { useState } from 'react';
import { GlassInput } from '@/components/ui/GlassInput';
import { CreditCard, ShieldCheck, Lock } from 'lucide-react';

export interface PaymentSectionProps {
  method: string;
  onMethodChange: (method: string) => void;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({ method, onMethodChange }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  const paymentOptions = [
    { id: 'credit-card', label: 'Credit / Debit Card', icon: CreditCard },
    { id: 'apple-pay', label: 'Apple Pay', icon: Lock },
    { id: 'shop-pay', label: 'Shop Pay', icon: ShieldCheck },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Payment Method Selector */}
      <div className="grid grid-cols-3 gap-3">
        {paymentOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = method === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onMethodChange(opt.id)}
              className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center justify-center gap-2 transition-all ${
                isSelected
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
              }`}
              aria-pressed={isSelected}
            >
              <Icon className="w-5 h-5" />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Credit Card Inputs */}
      {method === 'credit-card' && (
        <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4 animate-in fade-in duration-200">
          <GlassInput
            label="Name on Card"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Julian Vane"
            required
          />
          <GlassInput
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="•••• •••• •••• ••••"
            icon={<CreditCard className="w-4 h-4" />}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <GlassInput
              label="Expiration Date"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM / YY"
              required
            />
            <GlassInput
              label="Security Code (CVC)"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="123"
              type="password"
              maxLength={4}
              required
            />
          </div>
        </div>
      )}

      {method !== 'credit-card' && (
        <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 text-center flex flex-col items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
          <p className="text-xs font-semibold text-blue-900">
            You will be redirected to complete payment securely via {method === 'apple-pay' ? 'Apple Pay' : 'Shop Pay'}.
          </p>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-2">
        <Lock className="w-3.5 h-3.5 text-emerald-600" />
        <span>Encrypted with 256-Bit SSL Certificate • PCI-DSS Compliant</span>
      </div>
    </div>
  );
};
