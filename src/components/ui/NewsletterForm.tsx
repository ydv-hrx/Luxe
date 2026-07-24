'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, Check } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  if (submitted) {
    return (
      <div className="p-3 bg-blue-900/40 border border-blue-500/40 rounded-xl flex items-center gap-2 text-xs text-blue-200">
        <Check className="w-4 h-4 text-blue-400" />
        <span>Thank you for joining The Collective.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
        aria-label="Email address for private newsletter subscription"
      />
      <Button variant="secondary" size="sm" type="submit" aria-label="Subscribe to newsletter">
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
};
