'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { GlassInput } from '@/components/ui/GlassInput';
import { Button } from '@/components/ui/Button';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const register = useAuthStore((state) => state.register);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await register(firstName, lastName, email, password);
      router.push('/account');
    } catch (err: unknown) {
      setError((err as Error)?.message || 'Registration failed. Please check your details.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md w-full mx-auto">
      {error && (
        <div className="p-3.5 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-medium" role="alert">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <GlassInput
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Julian"
          required
        />
        <GlassInput
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Vane"
          required
        />
      </div>

      <GlassInput
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail className="w-4 h-4" />}
        placeholder="julian.vane@luxe.com"
        required
      />

      <GlassInput
        label="Create Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Lock className="w-4 h-4" />}
        placeholder="••••••••••••"
        required
      />

      <Button variant="primary" size="lg" type="submit" isLoading={isLoading} className="gap-2 mt-2">
        Create Collective Account
        <ArrowRight className="w-4 h-4" />
      </Button>

      <div className="text-center text-xs text-neutral-500 pt-4 border-t border-neutral-100 flex justify-between items-center">
        <span>Already have an account?</span>
        <Link href="/login" className="font-bold text-black hover:text-blue-600">
          Sign In
        </Link>
      </div>
    </form>
  );
};
