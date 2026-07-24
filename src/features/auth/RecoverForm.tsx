'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { authService } from '@/lib/services/auth';
import { GlassInput } from '@/components/ui/GlassInput';
import { Button } from '@/components/ui/Button';
import { Mail, Check, ArrowLeft } from 'lucide-react';

export const RecoverForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await authService.requestPasswordReset(email);
    setIsLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl max-w-md w-full mx-auto text-center flex flex-col items-center gap-4">
        <div className="p-3 bg-emerald-600 text-white rounded-full">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold font-serif text-neutral-900">Reset Instructions Dispatched</h3>
        <p className="text-xs text-neutral-600">
          We have sent a secure password reset link to <span className="font-bold text-neutral-900">{email}</span>.
        </p>
        <Link href="/login" className="text-xs font-bold text-blue-600 hover:underline">
          Return to Sign In
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md w-full mx-auto">
      <GlassInput
        label="Account Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail className="w-4 h-4" />}
        required
      />

      <Button variant="primary" size="lg" type="submit" isLoading={isLoading}>
        Send Reset Link
      </Button>

      <div className="text-center text-xs pt-4 border-t border-neutral-100">
        <Link href="/login" className="text-neutral-600 hover:text-black font-medium inline-flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
        </Link>
      </div>
    </form>
  );
};
