'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { monitoring } from '@/lib/services/monitoring';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    monitoring.captureException(error, { extra: { digest: error.digest } });
  }, [error]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-24 flex flex-col items-center justify-center text-center gap-6">
      <div className="p-4 bg-red-50 text-red-600 rounded-full border border-red-200">
        <AlertTriangle className="w-10 h-10" />
      </div>

      <h1 className="text-3xl font-semibold font-serif text-neutral-900">
        An Unexpected Error Occurred
      </h1>

      <p className="text-xs text-neutral-600 max-w-md leading-relaxed">
        Our concierge monitoring team has been notified. Please refresh the session or return to the homepage.
      </p>

      <div className="flex gap-4">
        <Button variant="primary" size="md" onClick={() => reset()} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </Button>
        <Button variant="outline" size="md" onClick={() => (window.location.href = '/')}>
          Return to Home
        </Button>
      </div>
    </div>
  );
}
