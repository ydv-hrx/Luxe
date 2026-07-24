import React from 'react';
import { Metadata } from 'next';
import { LoginForm } from '@/features/auth/LoginForm';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Sign In | LUXE Atelier',
  description: 'Sign in to access your personal digital wardrobe, order history, and VIP Diamond tier perks.',
};

export default function LoginPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-16 flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <div className="flex flex-col items-center text-center gap-3">
        <Badge variant="outline">Client Authentication</Badge>
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-neutral-900">
          Sign In to LUXE
        </h1>
        <p className="text-sm text-neutral-600">
          Enter your credentials to access your private client dashboard.
        </p>
      </div>

      <LoginForm />
    </div>
  );
}
