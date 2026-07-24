'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/services/auth';
import { GlassInput } from '@/components/ui/GlassInput';
import { Button } from '@/components/ui/Button';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await authService.register(firstName, lastName, email, password);
    router.push('/verify');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md w-full mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <GlassInput
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <GlassInput
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <GlassInput
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail className="w-4 h-4" />}
        required
      />

      <GlassInput
        label="Create Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<Lock className="w-4 h-4" />}
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
