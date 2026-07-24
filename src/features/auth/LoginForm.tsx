'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/services/auth';
import { GlassInput } from '@/components/ui/GlassInput';
import { Button } from '@/components/ui/Button';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await authService.login(email, password);
      router.push('/account');
    } catch (err) {
      setError('Invalid credentials. Please verify your email and password.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md w-full mx-auto">
      {error && (
        <div className="p-3.5 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-medium">
          {error}
        </div>
      )}

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
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Lock className="w-4 h-4" />}
        placeholder="••••••••••••"
        required
      />

      <div className="flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 cursor-pointer text-neutral-600">
          <input type="checkbox" className="w-4 h-4 accent-black rounded" />
          <span>Remember Device</span>
        </label>
        <Link href="/recover" className="text-blue-600 font-semibold hover:underline">
          Forgot Password?
        </Link>
      </div>

      <Button variant="primary" size="lg" type="submit" isLoading={isLoading} className="gap-2 mt-2">
        Sign In to Account
        <ArrowRight className="w-4 h-4" />
      </Button>

      <div className="text-center text-xs text-neutral-500 pt-4 border-t border-neutral-100 flex justify-between items-center">
        <span>Don't have a collective account?</span>
        <Link href="/register" className="font-bold text-black hover:text-blue-600">
          Create Account
        </Link>
      </div>
    </form>
  );
};
