import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { customerService } from '@/lib/services/customer';
import { Badge } from '@/components/ui/Badge';

const CustomerDashboardClient = dynamic(
  () => import('@/features/account/CustomerDashboardClient').then((m) => m.CustomerDashboardClient)
);

export const metadata: Metadata = {
  title: 'Client Dashboard | LUXORA Account',
  description: 'Manage your profile, order history, and default residence shipping address.',
};

export default async function AccountPage() {
  const profile = await customerService.getProfile();
  const orders = await customerService.getOrders();

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col gap-6 sm:gap-10 font-sans">
      {/* Header Banner */}
      <div className="flex flex-col gap-2 sm:gap-3 pb-6 sm:pb-8 border-b border-neutral-200">
        <Badge variant="outline" className="w-fit text-[10px] sm:text-xs">
          Private Client Portal
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif text-neutral-900 tracking-tight">
          Client Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600">
          Welcome back, {profile.firstName}. Track live white-glove dispatches and manage your profile.
        </p>
      </div>

      {/* Lazy-Loaded Customer Dashboard Client */}
      <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />}>
        <CustomerDashboardClient profile={profile} orders={orders} />
      </Suspense>
    </div>
  );
}
