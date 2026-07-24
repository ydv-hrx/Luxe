'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { giftService, GiftPackagingOption } from '@/lib/services/gifting';
import { Button } from '@/components/ui/Button';
import { GlassInput } from '@/components/ui/GlassInput';
import { Gift, Check, ArrowRight, ArrowLeft, Sparkles, Package } from 'lucide-react';

export interface GiftBuilderClientProps {
  availableProducts: Product[];
  packagingOptions: GiftPackagingOption[];
}

export const GiftBuilderClient: React.FC<GiftBuilderClientProps> = ({
  availableProducts,
  packagingOptions,
}) => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [selectedProduct, setSelectedProduct] = useState<Product>(availableProducts[0]);
  const [selectedPackaging, setSelectedPackaging] = useState<GiftPackagingOption>(packagingOptions[0]);

  const [recipientName, setRecipientName] = useState('Elena Vance');
  const [recipientEmail, setRecipientEmail] = useState('elena@luxe.com');
  const [personalMessage, setPersonalMessage] = useState(
    'Wishing you a season of timeless elegance and quiet luxury. Happy Anniversary.'
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateGift = async () => {
    setIsLoading(true);
    const bundle = await giftService.createGiftBundle({
      packagingId: selectedPackaging.id,
      recipientName,
      recipientEmail,
      personalMessage,
      deliveryDate: 'Today',
      products: [selectedProduct],
    });
    setIsLoading(false);
    router.push(bundle.revealUrl);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Interactive Steps */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        {/* Step Tabs */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 text-xs font-semibold uppercase tracking-wider">
          <button onClick={() => setStep(1)} className={`py-1 ${step === 1 ? 'text-black font-bold border-b-2 border-black' : 'text-neutral-400'}`}>
            1. Select Piece
          </button>
          <button onClick={() => setStep(2)} className={`py-1 ${step === 2 ? 'text-black font-bold border-b-2 border-black' : 'text-neutral-400'}`}>
            2. Personal Message
          </button>
          <button onClick={() => setStep(3)} className={`py-1 ${step === 3 ? 'text-black font-bold border-b-2 border-black' : 'text-neutral-400'}`}>
            3. Packaging Studio
          </button>
          <button onClick={() => setStep(4)} className={`py-1 ${step === 4 ? 'text-black font-bold border-b-2 border-black' : 'text-neutral-400'}`}>
            4. Review & Reveal
          </button>
        </div>

        {/* Step 1: Product Selection */}
        {step === 1 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <h2 className="text-xl font-bold font-serif text-neutral-900">Choose A Luxury Piece to Gift</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableProducts.map((prod) => {
                const isSelected = selectedProduct.id === prod.id;
                return (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex gap-4 ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-lg scale-105'
                        : 'bg-white text-neutral-900 border-neutral-200/80 hover:border-neutral-400'
                    }`}
                  >
                    <div className="relative w-16 h-20 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={prod.images[0]?.url || ''} alt={prod.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] uppercase font-bold text-neutral-400">{prod.vendor}</span>
                      <h4 className="text-xs font-semibold line-clamp-1">{prod.title}</h4>
                      <span className="text-xs font-bold mt-1">${prod.price.amount} USD</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button variant="primary" size="lg" onClick={() => setStep(2)} className="mt-4 gap-2">
              Next: Personal Message <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Message */}
        {step === 2 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <h2 className="text-xl font-bold font-serif text-neutral-900">Add Monogram & Custom Greeting</h2>
            <GlassInput label="Recipient Full Name" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
            <GlassInput label="Recipient Email" type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Personalized Message Card</label>
              <textarea
                rows={4}
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded-xl p-4 text-xs font-serif text-neutral-900 focus:outline-none focus:border-black"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" onClick={() => setStep(1)}>Back</Button>
              <Button variant="primary" size="lg" fullWidth onClick={() => setStep(3)}>Next: Packaging Studio</Button>
            </div>
          </div>
        )}

        {/* Step 3: Packaging */}
        {step === 3 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <h2 className="text-xl font-bold font-serif text-neutral-900">Select Signature Presentation</h2>
            <div className="flex flex-col gap-4">
              {packagingOptions.map((pkg) => {
                const isSelected = selectedPackaging.id === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackaging(pkg)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-lg'
                        : 'bg-white text-neutral-900 border-neutral-200/80 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 flex-shrink-0">
                        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">{pkg.title}</h4>
                        <p className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>{pkg.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold">+${pkg.price}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" onClick={() => setStep(2)}>Back</Button>
              <Button variant="primary" size="lg" fullWidth onClick={() => setStep(4)}>Next: Review & Preview</Button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <h2 className="text-xl font-bold font-serif text-neutral-900">Final Review & Digital Reveal</h2>
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col gap-4 text-xs">
              <div className="flex justify-between border-b border-neutral-200 pb-3">
                <span className="font-semibold text-neutral-500">Selected Item:</span>
                <span className="font-bold text-neutral-900">{selectedProduct.title} (${selectedProduct.price.amount})</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-3">
                <span className="font-semibold text-neutral-500">Packaging:</span>
                <span className="font-bold text-neutral-900">{selectedPackaging.title} (+${selectedPackaging.price})</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-3">
                <span className="font-semibold text-neutral-500">Recipient:</span>
                <span className="font-bold text-neutral-900">{recipientName} ({recipientEmail})</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-500 block mb-1">Message Card:</span>
                <p className="italic font-serif text-neutral-800 bg-white p-3 rounded-xl border border-neutral-200">"{personalMessage}"</p>
              </div>
            </div>

            <Button
              variant="secondary"
              size="lg"
              fullWidth
              isLoading={isLoading}
              onClick={handleCreateGift}
              className="gap-2 text-base font-bold shadow-xl"
            >
              <Gift className="w-5 h-5" />
              Generate Digital Reveal Pass
            </Button>
          </div>
        )}
      </div>

      {/* Right Column: Live Gift Box Preview */}
      <div className="lg:col-span-5 sticky top-28 p-6 bg-neutral-900 text-white rounded-3xl border border-neutral-800 shadow-2xl flex flex-col gap-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
          <Sparkles className="w-4 h-4" />
          Live Presentation Preview
        </div>

        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-neutral-800 bg-black flex items-center justify-center">
          <Image
            src={selectedPackaging.image}
            alt={selectedPackaging.title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="relative z-10 text-center p-6 flex flex-col items-center gap-2">
            <Gift className="w-10 h-10 text-blue-400 mb-2 animate-bounce" />
            <span className="text-xs uppercase tracking-widest text-neutral-400">For {recipientName}</span>
            <h3 className="text-lg font-serif font-bold text-white">{selectedProduct.title}</h3>
          </div>
        </div>

        <div className="text-center text-[11px] text-neutral-400">
          Includes RFID authenticity tag & bespoke magnetic box opening.
        </div>
      </div>
    </div>
  );
};
