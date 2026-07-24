'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { GlassInput } from '@/components/ui/GlassInput';
import { RefreshCw, Check, ArrowRight, Truck, Calendar } from 'lucide-react';

export const ReturnsPortalClient: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [orderRef, setOrderRef] = useState('LX-9402');
  const [reason, setReason] = useState('Size slightly large');
  const [resolution, setResolution] = useState<'exchange' | 'refund'>('exchange');
  const [pickupDate, setPickupDate] = useState('2026-07-26');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 text-center flex flex-col items-center gap-6 animate-in fade-in duration-200">
        <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold font-serif text-neutral-900">Concierge Pickup Scheduled</h2>
        <p className="text-xs text-neutral-600 leading-relaxed">
          Our private courier will collect your return item on <span className="font-bold text-neutral-900">{pickupDate}</span> between 10:00 AM – 2:00 PM. No shipping labels required.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-8">
      {/* Steps Bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4 text-xs font-semibold uppercase tracking-wider">
        <span className={step === 1 ? 'text-black font-bold border-b-2 border-black pb-1' : 'text-neutral-400'}>
          1. Select Order & Reason
        </span>
        <span className={step === 2 ? 'text-black font-bold border-b-2 border-black pb-1' : 'text-neutral-400'}>
          2. Resolution Choice
        </span>
        <span className={step === 3 ? 'text-black font-bold border-b-2 border-black pb-1' : 'text-neutral-400'}>
          3. Schedule Pickup
        </span>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-5 animate-in fade-in duration-200">
          <GlassInput label="Order Reference Number" value={orderRef} onChange={(e) => setOrderRef(e.target.value)} required />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Return Reason</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl p-3 text-xs text-neutral-900 focus:outline-none focus:border-black"
            >
              <option>Size slightly large</option>
              <option>Size slightly small</option>
              <option>Color preference changed</option>
              <option>Gift return</option>
            </select>
          </div>
          <Button variant="primary" size="lg" type="button" onClick={() => setStep(2)} className="gap-2 mt-2">
            Continue to Resolution <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <h3 className="text-lg font-bold font-serif">Select How You Would Like to Resolve</h3>
          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => setResolution('exchange')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col gap-2 ${
                resolution === 'exchange' ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-neutral-900 border-neutral-200'
              }`}
            >
              <RefreshCw className="w-6 h-6 text-blue-400" />
              <h4 className="text-sm font-bold">Exchange For Different Size</h4>
              <p className="text-xs text-neutral-400">Immediate dispatch of replacement piece.</p>
            </div>

            <div
              onClick={() => setResolution('refund')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col gap-2 ${
                resolution === 'refund' ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-neutral-900 border-neutral-200'
              }`}
            >
              <Truck className="w-6 h-6 text-blue-400" />
              <h4 className="text-sm font-bold">Full Refund to Card</h4>
              <p className="text-xs text-neutral-400">Processed upon concierge pickup.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" type="button" onClick={() => setStep(1)}>Back</Button>
            <Button variant="primary" size="lg" fullWidth type="button" onClick={() => setStep(3)}>Next: Schedule Pickup</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <h3 className="text-lg font-bold font-serif">Schedule Complimentary Concierge Home Pickup</h3>
          <GlassInput
            label="Pickup Date"
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
            Our courier will arrive with a pre-formatted LUXE return box. No printing required.
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" type="button" onClick={() => setStep(2)}>Back</Button>
            <Button variant="secondary" size="lg" fullWidth type="submit" className="gap-2 font-bold shadow-xl">
              <Calendar className="w-5 h-5" /> Confirm Return Pickup
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};
