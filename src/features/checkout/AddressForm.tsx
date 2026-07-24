'use client';

import React from 'react';
import { GlassInput } from '@/components/ui/GlassInput';
import { Address } from '@/lib/services/cart';

export interface AddressFormProps {
  address: Address;
  onChange: (field: keyof Address, value: string) => void;
  errors?: Partial<Record<keyof Address, string>>;
}

export const AddressForm: React.FC<AddressFormProps> = ({ address, onChange, errors }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GlassInput
          label="First Name"
          value={address.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          error={errors?.firstName}
          required
          autoComplete="given-name"
        />
        <GlassInput
          label="Last Name"
          value={address.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          error={errors?.lastName}
          required
          autoComplete="family-name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GlassInput
          label="Email Address"
          type="email"
          value={address.email}
          onChange={(e) => onChange('email', e.target.value)}
          error={errors?.email}
          required
          autoComplete="email"
          helperText="Order confirmation & tracking will be sent here."
        />
        <GlassInput
          label="Phone Number (Optional)"
          type="tel"
          value={address.phone || ''}
          onChange={(e) => onChange('phone', e.target.value)}
          autoComplete="tel"
          helperText="For white-glove delivery notifications."
        />
      </div>

      <GlassInput
        label="Street Address"
        value={address.address1}
        onChange={(e) => onChange('address1', e.target.value)}
        error={errors?.address1}
        required
        autoComplete="address-line1"
      />

      <GlassInput
        label="Apartment, suite, unit (Optional)"
        value={address.address2 || ''}
        onChange={(e) => onChange('address2', e.target.value)}
        autoComplete="address-line2"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassInput
          label="City"
          value={address.city}
          onChange={(e) => onChange('city', e.target.value)}
          error={errors?.city}
          required
          autoComplete="address-level2"
        />
        <GlassInput
          label="State / Province"
          value={address.province}
          onChange={(e) => onChange('province', e.target.value)}
          error={errors?.province}
          required
          autoComplete="address-level1"
        />
        <GlassInput
          label="Postal / Zip Code"
          value={address.zip}
          onChange={(e) => onChange('zip', e.target.value)}
          error={errors?.zip}
          required
          autoComplete="postal-code"
        />
      </div>
    </div>
  );
};
