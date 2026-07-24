'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomerProfile, CustomerOrderSummary } from '@/lib/services/customer';
import { useCartStore } from '@/store/useCartStore';
import { WishlistClient } from '@/features/wishlist/WishlistClient';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  User,
  Package,
  MapPin,
  Heart,
  Bell,
  Lock,
  Gem,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  LogOut,
  Mail,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export interface CustomerDashboardClientProps {
  profile: CustomerProfile;
  orders: CustomerOrderSummary[];
}

export const CustomerDashboardClient: React.FC<CustomerDashboardClientProps> = ({
  profile,
  orders,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'wishlist' | 'address' | 'notifications' | 'security'>('orders');
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const [reorderStatus, setReorderStatus] = useState<string | null>(null);

  // Notification Preferences State
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    vipDrops: true,
    stylistInvites: false,
  });

  // Security Form State
  const [securitySaved, setSecuritySaved] = useState(false);

  const handleReorder = (order: CustomerOrderSummary) => {
    addItem(
      {
        id: 'prod-1',
        handle: 'essential-cashmere-hoodie',
        title: 'Essential Cashmere Hoodie',
        description: 'Reordered item from order ' + order.orderNumber,
        vendor: 'LUXE Atelier',
        category: 'Knits',
        tags: ['Cashmere'],
        price: { amount: order.total / order.itemCount, currencyCode: order.currencyCode },
        images: [{ url: order.thumbnail, altText: order.orderNumber }],
        options: [],
        variants: [
          {
            id: 'var-reorder-' + Date.now(),
            title: 'Default',
            sku: 'SKU-REORDER',
            price: { amount: order.total / order.itemCount, currencyCode: order.currencyCode },
            selectedOptions: {},
            availableForSale: true,
          },
        ],
      },
      {
        id: 'var-reorder-' + Date.now(),
        title: 'Default',
        sku: 'SKU-REORDER',
        price: { amount: order.total / order.itemCount, currencyCode: order.currencyCode },
        selectedOptions: {},
        availableForSale: true,
      }
    );

    setReorderStatus(order.id);
    openCart();
    setTimeout(() => setReorderStatus(null), 3000);
  };

  interface NavItem {
    id: 'orders' | 'profile' | 'wishlist' | 'address' | 'notifications' | 'security';
    label: string;
    icon: React.FC<{ className?: string }>;
    count?: number;
  }

  const navItems: NavItem[] = [
    { id: 'orders', label: 'Order History', icon: Package, count: orders.length },
    { id: 'profile', label: 'Client Profile', icon: User },
    { id: 'wishlist', label: 'Saved Wishlist', icon: Heart },
    { id: 'address', label: 'Saved Residences', icon: MapPin },
    { id: 'notifications', label: 'Preferences', icon: Bell },
    { id: 'security', label: 'Security & Login', icon: Lock },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      {/* Mobile Tab Selector Navigation Bar */}
      <div className="lg:hidden w-full overflow-x-auto flex gap-2 pb-2 scrollbar-none border-b border-neutral-200">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                isActive ? 'bg-black text-white shadow-md' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              {item.count !== undefined && item.count > 0 && (
                <span className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-800'}`}>
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Left Column: Elevated Sticky Sidebar Card (Desktop) */}
      <aside className="hidden lg:flex w-[300px] xl:w-[320px] shrink-0 sticky top-28 flex-col gap-6">
        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 flex flex-col gap-8">
          {/* Client Header Avatar & Monogram */}
          <div className="flex items-center gap-4 pb-6 border-b border-neutral-100">
            <div className="w-16 h-16 bg-neutral-900 text-white font-serif font-bold text-2xl rounded-full flex items-center justify-center shadow-md shrink-0">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-lg font-bold font-serif text-neutral-900 truncate">
                {profile.firstName} {profile.lastName}
              </h3>
              <span className="text-xs text-neutral-400 truncate">{profile.email}</span>
              <div className="mt-2">
                <Badge variant="primary" size="sm" className="bg-gradient-to-r from-blue-900 to-black text-white border-none shadow-sm">
                  <Gem className="w-3 h-3 mr-1 text-blue-300 fill-blue-300" />
                  Diamond Tier VIP
                </Badge>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2" role="navigation" aria-label="Account Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full p-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider text-left transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-black text-white shadow-md scale-[1.02]'
                      : 'text-neutral-600 hover:bg-neutral-100/80 hover:text-black'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                    <span>{item.label}</span>
                  </span>
                  {item.count !== undefined && (
                    <span className={`px-2 py-0.5 text-[10px] rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Pinned Logout Button */}
            <div className="pt-4 mt-2 border-t border-neutral-100">
              <button
                type="button"
                onClick={async () => {
                  const { authService } = await import('@/lib/services/auth');
                  await authService.logout();
                  window.location.href = '/login';
                }}
                className="w-full p-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-left transition-colors flex items-center gap-3 text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 text-red-500" />
                <span>Sign Out of Account</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* Right Column: Independent Spacious Content Card */}
      <main className="flex-1 min-w-0 w-full">
        {/* Section 1: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 sm:p-10 flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Purchase Order History
              </h1>
              <p className="text-sm text-neutral-500 mt-1">
                View your complete order archives, live courier tracking, and instant reordering.
              </p>
            </div>

            {orders.length === 0 ? (
              <div className="p-16 text-center bg-neutral-50/50 rounded-3xl border border-neutral-200/60 flex flex-col items-center gap-4">
                <Package className="w-12 h-12 text-neutral-300" />
                <h4 className="text-lg font-bold font-serif text-neutral-900">No Past Orders Found</h4>
                <p className="text-xs text-neutral-500 max-w-sm">
                  Your completed purchases and bespoke commissions will appear here.
                </p>
                <Button variant="primary" size="md" className="mt-2">
                  <Link href="/shop">Explore Collection</Link>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-lumina-level2 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-5">
                      <div className="relative w-20 h-24 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200/60">
                        <Image src={order.thumbnail} alt={order.orderNumber} fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                            Ref #{order.orderNumber}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Paid
                          </span>
                        </div>
                        <h4 className="text-xl font-bold font-serif text-neutral-900">${order.total} USD</h4>
                        <span className="text-xs text-neutral-500 block">
                          Purchased {order.date} • {order.itemCount} {order.itemCount === 1 ? 'item' : 'items'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-4 sm:pt-0 border-neutral-100">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {order.fulfillmentStatus}
                      </span>

                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => handleReorder(order)}
                        className="gap-2 text-xs"
                      >
                        <RotateCcw className="w-4 h-4" />
                        {reorderStatus === order.id ? 'Added!' : 'Reorder'}
                      </Button>

                      <Button variant="secondary" size="md" className="gap-2 text-xs">
                        <Link href={`/orders/${order.id}`} className="flex items-center gap-1.5">
                          View Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section 2: Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 sm:p-10 flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Client Profile
              </h1>
              <p className="text-sm text-neutral-500 mt-1">
                Your personal membership information and bespoke atelier preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                <User className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Full Name</span>
                  <span className="text-base font-bold text-neutral-900 mt-1 block">{profile.firstName} {profile.lastName}</span>
                </div>
              </div>

              <div className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Primary Email</span>
                  <span className="text-base font-bold text-neutral-900 mt-1 block">{profile.email}</span>
                </div>
              </div>

              <div className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                <Smartphone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Phone Contact</span>
                  <span className="text-base font-bold text-neutral-900 mt-1 block">{profile.phone}</span>
                </div>
              </div>

              <div className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Collective Member Since</span>
                  <span className="text-base font-bold text-neutral-900 mt-1 block">{profile.memberSince}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Wishlist */}
        {activeTab === 'wishlist' && (
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 sm:p-10 animate-in fade-in duration-300">
            <WishlistClient />
          </div>
        )}

        {/* Section 4: Address */}
        {activeTab === 'address' && (
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 sm:p-10 flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Saved Residences
              </h1>
              <p className="text-sm text-neutral-500 mt-1">
                Manage your default white-glove shipping addresses and delivery instructions.
              </p>
            </div>

            {profile.defaultAddress ? (
              <div className="p-8 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex flex-col gap-4 text-sm leading-relaxed">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2 font-bold text-base text-neutral-900">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Primary Delivery Residence</span>
                  </div>
                  <Badge variant="primary">Default</Badge>
                </div>
                <p className="font-semibold text-neutral-900 text-base">{profile.defaultAddress.firstName} {profile.defaultAddress.lastName}</p>
                <p className="text-neutral-700">{profile.defaultAddress.address1}</p>
                <p className="text-neutral-700">{profile.defaultAddress.city}, {profile.defaultAddress.province} {profile.defaultAddress.zip}</p>
                <p className="text-neutral-700 font-semibold">{profile.defaultAddress.country}</p>
              </div>
            ) : (
              <p className="text-sm text-neutral-500">No default residence address configured.</p>
            )}
          </div>
        )}

        {/* Section 5: Notifications */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 sm:p-10 flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Client Communication Preferences
              </h1>
              <p className="text-sm text-neutral-500 mt-1">
                Customize how the atelier communicates private invitations, drops, and courier updates.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div
                onClick={() => setNotifications((p) => ({ ...p, orderUpdates: !p.orderUpdates }))}
                className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-center justify-between cursor-pointer hover:border-neutral-300 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-200/60 text-blue-600">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">Order Status & Tracking Updates</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Receive real-time courier SMS updates and white-glove dispatch notifications.</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors relative ${notifications.orderUpdates ? 'bg-black' : 'bg-neutral-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications.orderUpdates ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>

              <div
                onClick={() => setNotifications((p) => ({ ...p, vipDrops: !p.vipDrops }))}
                className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-center justify-between cursor-pointer hover:border-neutral-300 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-200/60 text-blue-600">
                    <Gem className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">VIP Drops & Capsule Releases</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Exclusive 24-hour advance access to Grade-A Mongolian cashmere releases.</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors relative ${notifications.vipDrops ? 'bg-black' : 'bg-neutral-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications.vipDrops ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>

              <div
                onClick={() => setNotifications((p) => ({ ...p, stylistInvites: !p.stylistInvites }))}
                className="p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-center justify-between cursor-pointer hover:border-neutral-300 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-neutral-200/60 text-blue-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">Personal Stylist Consultations</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Direct invitations for bespoke wardrobe consultations and fit advice.</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors relative ${notifications.stylistInvites ? 'bg-black' : 'bg-neutral-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications.stylistInvites ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 6: Security */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-8 sm:p-10 flex flex-col gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Security & Credentials
              </h1>
              <p className="text-sm text-neutral-500 mt-1">
                Manage your account credentials, passcodes, and active sessions.
              </p>
            </div>

            {securitySaved ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 flex items-center gap-3 text-sm font-semibold">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span>Security passcode and authentication credentials successfully updated.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSecuritySaved(true);
                  setTimeout(() => setSecuritySaved(false), 3000);
                }}
                className="flex flex-col gap-6 max-w-md"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Current Passcode</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">New Secure Passcode</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" className="self-start gap-2 shadow-md">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> Update Passcode
                </Button>
              </form>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
