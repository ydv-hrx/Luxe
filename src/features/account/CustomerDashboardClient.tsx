'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomerProfile, CustomerOrderSummary } from '@/lib/services/customer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { User, Package, MapPin, ShieldCheck, Gem, ArrowRight, ExternalLink } from 'lucide-react';

export interface CustomerDashboardClientProps {
  profile: CustomerProfile;
  orders: CustomerOrderSummary[];
}

export const CustomerDashboardClient: React.FC<CustomerDashboardClientProps> = ({
  profile,
  orders,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'address'>('orders');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Sidebar Profile Header */}
      <div className="lg:col-span-4 p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 sticky top-28">
        <div className="flex items-center gap-4 border-b border-neutral-100 pb-5">
          <div className="w-14 h-14 bg-black text-white font-serif font-bold text-xl rounded-full flex items-center justify-center">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </div>
          <div>
            <h3 className="text-lg font-bold font-serif text-neutral-900">
              {profile.firstName} {profile.lastName}
            </h3>
            <span className="text-xs text-neutral-500">{profile.email}</span>
            <div className="mt-1">
              <Badge variant="primary" size="sm">
                <Gem className="w-3 h-3 mr-1 text-blue-400" />
                Diamond Tier VIP
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`p-3 rounded-xl text-left transition-colors flex items-center justify-between ${
              activeTab === 'orders' ? 'bg-black text-white' : 'hover:bg-neutral-100 text-neutral-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4" /> Order History ({orders.length})
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`p-3 rounded-xl text-left transition-colors flex items-center justify-between ${
              activeTab === 'profile' ? 'bg-black text-white' : 'hover:bg-neutral-100 text-neutral-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> Client Profile
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('address')}
            className={`p-3 rounded-xl text-left transition-colors flex items-center justify-between ${
              activeTab === 'address' ? 'bg-black text-white' : 'hover:bg-neutral-100 text-neutral-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Default Residence Address
            </span>
          </button>

          <button
            type="button"
            onClick={async () => {
              const { authService } = await import('@/lib/services/auth');
              await authService.logout();
              window.location.href = '/login';
            }}
            className="p-3 rounded-xl text-left transition-colors flex items-center justify-between hover:bg-red-50 text-red-600 mt-2 font-bold"
          >
            <span>Sign Out of Account</span>
          </button>
        </div>
      </div>

      {/* Right Column: Tab View */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* Order History */}
        {activeTab === 'orders' && (
          <div className="flex flex-col gap-4 animate-in fade-in duration-200">
            <h2 className="text-2xl font-semibold font-serif text-neutral-900">Recent Purchases</h2>
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-20 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={order.thumbnail} alt={order.orderNumber} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-neutral-400">Order Ref #{order.orderNumber}</span>
                    <h4 className="text-base font-bold font-serif text-neutral-900">${order.total} USD</h4>
                    <span className="text-xs text-neutral-500 block mt-0.5">{order.date} • {order.itemCount} items</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {order.fulfillmentStatus}
                  </span>
                  <Button variant="outline" size="sm" className="gap-1 text-xs">
                    <Link href={`/track/${order.id}`} className="flex items-center gap-1">
                      Track <ExternalLink className="w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Client Profile */}
        {activeTab === 'profile' && (
          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-6 animate-in fade-in duration-200">
            <h2 className="text-2xl font-semibold font-serif text-neutral-900">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-neutral-500 block">Full Name:</span>
                <span className="font-bold text-neutral-900 text-sm">{profile.firstName} {profile.lastName}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Email Address:</span>
                <span className="font-bold text-neutral-900 text-sm">{profile.email}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Phone Number:</span>
                <span className="font-bold text-neutral-900 text-sm">{profile.phone}</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Collective Member Since:</span>
                <span className="font-bold text-neutral-900 text-sm">{profile.memberSince}</span>
              </div>
            </div>
          </div>
        )}

        {/* Address */}
        {activeTab === 'address' && profile.defaultAddress && (
          <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-4 animate-in fade-in duration-200 text-xs">
            <h2 className="text-2xl font-semibold font-serif text-neutral-900">Default Shipping Address</h2>
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 leading-relaxed text-neutral-800">
              <span className="font-bold text-sm block mb-1">{profile.defaultAddress.firstName} {profile.defaultAddress.lastName}</span>
              <p>{profile.defaultAddress.address1}</p>
              <p>{profile.defaultAddress.city}, {profile.defaultAddress.province} {profile.defaultAddress.zip}</p>
              <p>{profile.defaultAddress.country}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
