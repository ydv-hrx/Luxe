import React from 'react';
import { Metadata } from 'next';
import { RegisterForm } from '@/features/auth/RegisterForm';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Create Account | LUXE Collective',
  description: 'Join the LUXE Collective for exclusive private sales and custom tailoring benefits.',
};

export default function RegisterPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-16 flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <div className="flex flex-col items-center text-center gap-3">
        <Badge variant="outline">Collective Membership</Badge>
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Create Your Account
        </h1>
        <p className="text-sm text-neutral-600 max-w-sm">
          Enjoy white-glove logistics, private stylist advisory, and digital RFID passports.
        </p>
      </div>

      <RegisterForm />
    </div>
  );
}
