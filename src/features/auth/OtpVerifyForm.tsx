'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/services/auth';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const OtpVerifyForm: React.FC = () => {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await authService.verifyOtp('julian.vane@luxe.com', code);
      router.push('/account');
    } catch (_err) {
      setError('Invalid security code. Try entering 123456.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md w-full mx-auto">
      {error && (
        <div className="p-3.5 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-medium">
          {error}
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-neutral-600">
          Enter 6-Digit Verification Code
        </label>
        <input
          type="text"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="1 2 3 4 5 6"
          className="w-full text-center text-3xl font-mono tracking-widest bg-neutral-50 border-2 border-neutral-300 rounded-2xl py-3 focus:outline-none focus:border-black font-bold text-neutral-900"
          required
        />
        <span className="text-[11px] text-neutral-500">Sent via SMS to +1 (555) ***-5678</span>
      </div>

      <Button variant="primary" size="lg" type="submit" isLoading={isLoading} className="gap-2">
        Verify Identity & Enter
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};
