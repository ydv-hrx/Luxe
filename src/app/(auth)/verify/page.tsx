import React from 'react';
import { Metadata } from 'next';
import { OtpVerifyForm } from '@/features/auth/OtpVerifyForm';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Identity Verification | LUXE Security',
  description: 'Enter your 6-digit verification code to complete sign in.',
};

export default function VerifyPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-16 flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <div className="flex flex-col items-center text-center gap-3">
        <Badge variant="outline" className="text-emerald-700 border-emerald-300 bg-emerald-50">
          <ShieldCheck className="w-3.5 h-3.5 mr-1" />
          Two-Factor Authentication
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900">
          Verify Your Identity
        </h1>
        <p className="text-sm text-neutral-600 max-w-sm">
          A 6-digit security pass code has been sent to your registered mobile phone.
        </p>
      </div>

      <OtpVerifyForm />
    </div>
  );
}
