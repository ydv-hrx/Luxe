'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { cartService, Address } from '@/lib/services/cart';
import { AddressForm } from './AddressForm';
import { ShippingSelector, ShippingMethod } from './ShippingSelector';
import { OrderSummary } from './OrderSummary';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, ArrowRight, ArrowLeft, Lock, MapPin, Truck } from 'lucide-react';

export const CheckoutClient: React.FC = () => {
  const router = useRouter();
  const { items, getSubtotal, clearCart } = useCartStore();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState(false);

  const [address, setAddress] = useState<Address>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    country: 'United States',
    province: '',
    zip: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Address, string>>>({});

  const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>({
    id: 'express-whiteglove',
    title: 'White-Glove Express Air',
    subtitle: 'Signature black box packaging',
    price: getSubtotal() >= 500 ? 0 : 35,
    estimatedTime: '1 - 2 Business Days',
  });

  const handleAddressChange = (field: keyof Address, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateAddress = (): boolean => {
    const newErrors: Partial<Record<keyof Address, string>> = {};
    if (!address.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!address.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!address.email.trim()) newErrors.email = 'Email address is required';
    if (!address.address1.trim()) newErrors.address1 = 'Street address is required';
    if (!address.city.trim()) newErrors.city = 'City is required';
    if (!address.province.trim()) newErrors.province = 'State is required';
    if (!address.zip.trim()) newErrors.zip = 'Zip code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateAddress()) setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleCompleteOrder = async () => {
    setIsLoading(true);
    try {
      const cart = await cartService.createCart(
        items.map((i) => ({ merchandiseId: i.variant.id, quantity: i.quantity }))
      );

      const result = await cartService.checkout(cart.id, address);
      clearCart();

      if (result.checkoutUrl.startsWith('http')) {
        window.location.href = result.checkoutUrl;
      } else {
        router.push(result.checkoutUrl);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <Lock className="w-10 h-10 text-neutral-300" />
        <h2 className="text-2xl font-bold font-serif text-neutral-900">Your Checkout Bag is Empty</h2>
        <p className="text-xs text-neutral-500 max-w-sm">
          Please add items to your shopping bag before proceeding to checkout.
        </p>
        <Button variant="primary" size="md" onClick={() => router.push('/shop')}>
          Return to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Multi-Step Flow */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        {/* Step Indicator Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200 text-xs font-semibold uppercase tracking-wider">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-black font-bold' : 'text-neutral-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-black text-white' : 'bg-neutral-200'}`}>
              1
            </span>
            <span>Shipping Address</span>
          </div>

          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-black font-bold' : 'text-neutral-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-black text-white' : 'bg-neutral-200'}`}>
              2
            </span>
            <span>Delivery Method</span>
          </div>

          <div className={`flex items-center gap-2 ${step >= 3 ? 'text-black font-bold' : 'text-neutral-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-black text-white' : 'bg-neutral-200'}`}>
              3
            </span>
            <span>Review & Continue</span>
          </div>
        </div>

        {/* Step 1: Address */}
        {step === 1 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <h2 className="text-xl font-bold font-serif text-neutral-900">1. Shipping & Contact Information</h2>
            <AddressForm address={address} onChange={handleAddressChange} errors={errors} />
            <Button variant="primary" size="lg" onClick={handleNextStep} className="mt-4 gap-2">
              Continue to Delivery Method
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Delivery */}
        {step === 2 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold font-serif text-neutral-900">2. Select White-Glove Shipping</h2>
              <button type="button" onClick={() => setStep(1)} className="text-xs text-blue-600 underline font-medium">
                Edit Address
              </button>
            </div>
            <ShippingSelector
              selectedId={selectedShipping.id}
              onSelect={(m) => setSelectedShipping(m)}
              subtotal={getSubtotal()}
            />
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="lg" onClick={() => setStep(1)} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button variant="primary" size="lg" fullWidth onClick={handleNextStep} className="gap-2">
                Continue to Review
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Continue */}
        {step === 3 && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold font-serif text-neutral-900">3. Review Order & Continue to Checkout</h2>
            </div>

            {/* Address & Delivery Summary Card */}
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200/80 flex flex-col gap-4 text-xs">
              <div className="flex justify-between items-start border-b border-neutral-200 pb-3">
                <div className="flex gap-2 items-center text-neutral-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Shipping Address</span>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-xs text-blue-600 underline font-medium">
                  Edit
                </button>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-900">{address.firstName} {address.lastName}</span><br />
                {address.address1} {address.address2 ? `, ${address.address2}` : ''}<br />
                {address.city}, {address.province} {address.zip}<br />
                {address.country} — {address.email}
              </p>

              <div className="flex justify-between items-start border-t border-b border-neutral-200 py-3 mt-2">
                <div className="flex gap-2 items-center text-neutral-900 font-bold text-sm">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Delivery Method</span>
                </div>
                <button type="button" onClick={() => setStep(2)} className="text-xs text-blue-600 underline font-medium">
                  Edit
                </button>
              </div>
              <p className="text-neutral-700 font-medium">
                {selectedShipping.title} ({selectedShipping.estimatedTime}) — {selectedShipping.price === 0 ? 'Complimentary' : `$${selectedShipping.price}`}
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="lg" onClick={() => setStep(2)} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                isLoading={isLoading}
                onClick={handleCompleteOrder}
                className="gap-2 text-base font-bold shadow-xl"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Continue to Secure Shopify Checkout
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Order Summary Sidebar */}
      <div className="lg:col-span-5">
        <OrderSummary items={items} shippingCost={selectedShipping.price} />
      </div>
    </div>
  );
};
