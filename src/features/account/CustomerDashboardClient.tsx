'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomerProfile, CustomerOrderSummary } from '@/lib/services/customer';
import { useCartStore } from '@/store/useCartStore';
import { useAuthStore, CustomerAddress } from '@/store/useAuthStore';
import { WishlistClient } from '@/features/wishlist/WishlistClient';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassInput } from '@/components/ui/GlassInput';
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
  Plus,
  Trash2,
  Edit2,
  Check,
} from 'lucide-react';

export interface CustomerDashboardClientProps {
  profile: CustomerProfile;
  orders: CustomerOrderSummary[];
}

export const CustomerDashboardClient: React.FC<CustomerDashboardClientProps> = ({
  profile: initialProfile,
  orders,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'wishlist' | 'address' | 'notifications' | 'security'>('orders');
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const { addresses, addAddress, updateAddress, deleteAddress, setDefaultAddress, logout } = useAuthStore();

  const [profile, setProfile] = useState<CustomerProfile>(initialProfile);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);

  // Address Modal / Form state
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  const [addrForm, setAddrForm] = useState<Omit<CustomerAddress, 'id'>>({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    zip: '',
    country: 'United States',
    isDefault: false,
  });

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
        vendor: 'LUXORA Atelier',
        category: 'Knits',
        tags: ['Cashmere'],
        price: { amount: order.total / (order.itemCount || 1), currencyCode: order.currencyCode },
        images: [{ url: order.thumbnail, altText: order.orderNumber }],
        options: [],
        variants: [
          {
            id: 'var-reorder-1-' + order.id,
            title: 'Default',
            sku: 'SKU-REORDER',
            price: { amount: order.total / (order.itemCount || 1), currencyCode: order.currencyCode },
            selectedOptions: {},
            availableForSale: true,
          },
        ],
      },
      {
        id: 'var-reorder-2-' + order.id,
        title: 'Default',
        sku: 'SKU-REORDER',
        price: { amount: order.total / (order.itemCount || 1), currencyCode: order.currencyCode },
        selectedOptions: {},
        availableForSale: true,
      }
    );

    setReorderStatus(order.id);
    openCart();
    setTimeout(() => setReorderStatus(null), 3000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingProfile(false);
    setProfileSuccess(true);
    setTimeout(() => setProfileSuccess(false), 3500);
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddressId) {
      updateAddress(editingAddressId, addrForm);
    } else {
      addAddress(addrForm);
    }
    setIsAddressModalOpen(false);
    setEditingAddressId(null);
  };

  const openAddAddressModal = () => {
    setEditingAddressId(null);
    setAddrForm({
      firstName: profile.firstName,
      lastName: profile.lastName,
      address1: '',
      address2: '',
      city: '',
      province: '',
      zip: '',
      country: 'United States',
      isDefault: addresses.length === 0,
    });
    setIsAddressModalOpen(true);
  };

  const openEditAddressModal = (addr: CustomerAddress) => {
    setEditingAddressId(addr.id || null);
    setAddrForm({
      firstName: addr.firstName,
      lastName: addr.lastName,
      address1: addr.address1,
      address2: addr.address2 || '',
      city: addr.city,
      province: addr.province || '',
      zip: addr.zip,
      country: addr.country,
      isDefault: addr.isDefault || false,
    });
    setIsAddressModalOpen(true);
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
    { id: 'address', label: 'Saved Residences', icon: MapPin, count: addresses.length },
    { id: 'notifications', label: 'Preferences', icon: Bell },
    { id: 'security', label: 'Security & Login', icon: Lock },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start font-sans">
      {/* Mobile / Tablet Client Info Card & Navigation Tabs */}
      <div className="lg:hidden w-full flex flex-col gap-4">
        {/* Client Profile Header Card (Mobile & Tablet) */}
        <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 bg-black text-white font-serif font-bold text-lg rounded-full flex items-center justify-center shadow-sm shrink-0">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-sm font-bold font-serif text-neutral-900 truncate">
                {profile.firstName} {profile.lastName}
              </h3>
              <span className="text-[11px] text-neutral-500 truncate">{profile.email}</span>
            </div>
          </div>
          <Badge variant="primary" size="sm" className="bg-black text-white border-none shrink-0 text-[10px]">
            <Gem className="w-3 h-3 mr-1 text-blue-300 fill-blue-300" />
            VIP Client
          </Badge>
        </div>

        {/* Scrollable Navigation Pill Tabs (Mobile & Tablet) */}
        <div className="w-full overflow-x-auto flex gap-2 pb-2 scrollbar-none border-b border-neutral-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isActive ? 'bg-black text-white shadow-md' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
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
      </div>

      {/* Left Column: Elevated Sticky Sidebar Card (Desktop 1024px+) */}
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
                  VIP Diamond Client
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
                  await logout();
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

      {/* Right Column: Independent Content Panel */}
      <main className="flex-1 min-w-0 w-full">
        {/* Section 1: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Purchase Order History
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                View your complete order archives, live courier tracking, and instant reordering.
              </p>
            </div>

            {orders.length === 0 ? (
              <div className="p-10 sm:p-16 text-center bg-neutral-50/50 rounded-2xl sm:rounded-3xl border border-neutral-200/60 flex flex-col items-center gap-4">
                <Package className="w-12 h-12 text-neutral-300" />
                <h4 className="text-base sm:text-lg font-bold font-serif text-neutral-900">No Past Orders Found</h4>
                <p className="text-xs text-neutral-500 max-w-sm">
                  Your completed purchases and bespoke commissions will appear here.
                </p>
                <Button variant="primary" size="md" className="mt-2">
                  <Link href="/shop">Explore Collection</Link>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:gap-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 sm:p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-lumina-level2 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                      <div className="relative w-16 h-20 sm:w-20 sm:h-24 bg-neutral-100 rounded-xl overflow-hidden shrink-0 border border-neutral-200/60">
                        <Image src={order.thumbnail} alt={order.orderNumber} fill className="object-cover" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                            Ref #{order.orderNumber}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Paid
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-neutral-900">${order.total} USD</h4>
                        <span className="text-[11px] sm:text-xs text-neutral-500 block">
                          {order.date} • {order.itemCount} {order.itemCount === 1 ? 'item' : 'items'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {order.fulfillmentStatus}
                      </span>

                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => handleReorder(order)}
                        className="gap-1.5 text-xs min-h-[44px]"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {reorderStatus === order.id ? 'Added!' : 'Reorder'}
                      </Button>

                      <Button variant="secondary" size="md" className="gap-1.5 text-xs min-h-[44px]">
                        <Link href={`/orders/${order.id}`} className="flex items-center gap-1.5">
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section 2: Profile & Edit Profile */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 animate-in fade-in duration-300">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                  Client Profile
                </h1>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Your personal membership information and bespoke atelier preferences.
                </p>
              </div>

              {!isEditingProfile && (
                <Button variant="outline" size="sm" onClick={() => setIsEditingProfile(true)} className="gap-1.5 text-xs font-bold shrink-0 min-h-[40px]">
                  <Edit2 className="w-3.5 h-3.5" /> Edit Profile
                </Button>
              )}
            </div>

            {profileSuccess && (
              <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Client profile updated successfully.</span>
              </div>
            )}

            {isEditingProfile ? (
              <form onSubmit={handleSaveProfile} className="flex flex-col gap-5 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassInput
                    label="First Name"
                    value={profile.firstName}
                    onChange={(e) => setProfile((p) => ({ ...p, firstName: e.target.value }))}
                    required
                  />
                  <GlassInput
                    label="Last Name"
                    value={profile.lastName}
                    onChange={(e) => setProfile((p) => ({ ...p, lastName: e.target.value }))}
                    required
                  />
                </div>

                <GlassInput
                  label="Email Address"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                  icon={<Mail className="w-4 h-4" />}
                  required
                />

                <GlassInput
                  label="Phone Contact"
                  value={profile.phone}
                  onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                  icon={<Smartphone className="w-4 h-4" />}
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button variant="primary" size="md" type="submit" className="gap-2 min-h-[48px]">
                    <Check className="w-4 h-4" /> Save Profile
                  </Button>
                  <Button variant="outline" size="md" type="button" onClick={() => setIsEditingProfile(false)} className="min-h-[48px]">
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                  <User className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Full Name</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5 block truncate">{profile.firstName} {profile.lastName}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Primary Email</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5 block truncate">{profile.email}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                  <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Phone Contact</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5 block truncate">{profile.phone}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex items-start gap-4">
                  <Sparkles className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Collective Member Since</span>
                    <span className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5 block truncate">{profile.memberSince}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 3: Wishlist */}
        {activeTab === 'wishlist' && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-5 sm:p-8 lg:p-10 animate-in fade-in duration-300">
            <WishlistClient />
          </div>
        )}

        {/* Section 4: Address Book CRUD */}
        {activeTab === 'address' && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                  Saved Residences
                </h1>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Manage your white-glove shipping addresses and delivery instructions.
                </p>
              </div>

              <Button variant="primary" size="md" onClick={openAddAddressModal} className="gap-2 shrink-0 w-full sm:w-auto min-h-[48px]">
                <Plus className="w-4 h-4" /> Add Residence Address
              </Button>
            </div>

            {/* Address Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between gap-4 text-xs sm:text-sm leading-relaxed transition-all duration-200 ${
                    addr.isDefault
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                      : 'bg-neutral-50/60 text-neutral-800 border-neutral-200/80 hover:border-neutral-400'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-white/20">
                      <span className="font-bold text-sm sm:text-base flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${addr.isDefault ? 'text-blue-400' : 'text-blue-600'}`} />
                        {addr.firstName} {addr.lastName}
                      </span>
                      {addr.isDefault && (
                        <Badge variant="primary" className="bg-white text-black border-none text-[10px] font-bold">
                          Default
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs leading-normal opacity-90">{addr.address1}</p>
                    {addr.address2 && <p className="text-xs opacity-90">{addr.address2}</p>}
                    <p className="text-xs opacity-90">{addr.city}, {addr.province} {addr.zip}</p>
                    <p className="text-xs font-bold opacity-100">{addr.country}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs">
                    {!addr.isDefault && (
                      <button
                        type="button"
                        onClick={() => addr.id && setDefaultAddress(addr.id)}
                        className={`font-semibold hover:underline ${addr.isDefault ? 'text-blue-300' : 'text-blue-600'}`}
                      >
                        Set as Default
                      </button>
                    )}
                    {addr.isDefault && <span />}

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openEditAddressModal(addr)}
                        className={`p-2 rounded-lg transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center ${addr.isDefault ? 'hover:bg-neutral-800 text-white' : 'hover:bg-neutral-200 text-neutral-700'}`}
                        aria-label="Edit address"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      {addresses.length > 1 && (
                        <button
                          type="button"
                          onClick={() => addr.id && deleteAddress(addr.id)}
                          className="p-2 rounded-lg hover:bg-red-100 text-red-500 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                          aria-label="Delete address"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Address CRUD Modal */}
            {isAddressModalOpen && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-neutral-200 space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-neutral-900">
                      {editingAddressId ? 'Edit Residence Address' : 'Add New Residence Address'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsAddressModalOpen(false)}
                      className="p-1 text-neutral-400 hover:text-black rounded-full text-xl leading-none"
                    >
                      &times;
                    </button>
                  </div>

                  <form onSubmit={handleSaveAddress} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <GlassInput
                        label="First Name"
                        value={addrForm.firstName}
                        onChange={(e) => setAddrForm((p) => ({ ...p, firstName: e.target.value }))}
                        required
                      />
                      <GlassInput
                        label="Last Name"
                        value={addrForm.lastName}
                        onChange={(e) => setAddrForm((p) => ({ ...p, lastName: e.target.value }))}
                        required
                      />
                    </div>

                    <GlassInput
                      label="Address Line 1"
                      value={addrForm.address1}
                      onChange={(e) => setAddrForm((p) => ({ ...p, address1: e.target.value }))}
                      placeholder="Via Montenapoleone 8"
                      required
                    />

                    <GlassInput
                      label="Address Line 2 (Optional)"
                      value={addrForm.address2}
                      onChange={(e) => setAddrForm((p) => ({ ...p, address2: e.target.value }))}
                      placeholder="Suite / Apt 4B"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <GlassInput
                        label="City"
                        value={addrForm.city}
                        onChange={(e) => setAddrForm((p) => ({ ...p, city: e.target.value }))}
                        placeholder="Milan"
                        required
                      />
                      <GlassInput
                        label="State / Province"
                        value={addrForm.province}
                        onChange={(e) => setAddrForm((p) => ({ ...p, province: e.target.value }))}
                        placeholder="MI"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <GlassInput
                        label="Postal / ZIP Code"
                        value={addrForm.zip}
                        onChange={(e) => setAddrForm((p) => ({ ...p, zip: e.target.value }))}
                        placeholder="20121"
                        required
                      />
                      <GlassInput
                        label="Country"
                        value={addrForm.country}
                        onChange={(e) => setAddrForm((p) => ({ ...p, country: e.target.value }))}
                        placeholder="Italy"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-100">
                      <Button variant="primary" size="md" type="submit" fullWidth className="min-h-[48px]">
                        Save Address
                      </Button>
                      <Button variant="outline" size="md" type="button" onClick={() => setIsAddressModalOpen(false)} className="min-h-[48px]">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Section 5: Notifications */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Client Communication Preferences
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Customize how the atelier communicates private invitations, drops, and courier updates.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div
                onClick={() => setNotifications((p) => ({ ...p, orderUpdates: !p.orderUpdates }))}
                className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:border-neutral-300 transition-all duration-200"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-neutral-200/60 text-blue-600 shrink-0">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">Order Status & Tracking Updates</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Receive real-time courier SMS updates and white-glove dispatch notifications.</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors relative shrink-0 ${notifications.orderUpdates ? 'bg-black' : 'bg-neutral-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications.orderUpdates ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>

              <div
                onClick={() => setNotifications((p) => ({ ...p, vipDrops: !p.vipDrops }))}
                className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:border-neutral-300 transition-all duration-200"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-neutral-200/60 text-blue-600 shrink-0">
                    <Gem className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">VIP Drops & Capsule Releases</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Exclusive 24-hour advance access to Grade-A Mongolian cashmere releases.</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors relative shrink-0 ${notifications.vipDrops ? 'bg-black' : 'bg-neutral-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications.vipDrops ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>

              <div
                onClick={() => setNotifications((p) => ({ ...p, stylistInvites: !p.stylistInvites }))}
                className="p-4 sm:p-6 bg-neutral-50/60 rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:border-neutral-300 transition-all duration-200"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-neutral-200/60 text-blue-600 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900">Personal Stylist Consultations</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Direct invitations for bespoke wardrobe consultations and fit advice.</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors relative shrink-0 ${notifications.stylistInvites ? 'bg-black' : 'bg-neutral-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications.stylistInvites ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 6: Security */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lumina-level1 p-5 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 animate-in fade-in duration-300">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-serif text-neutral-900 tracking-tight">
                Security & Credentials
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Manage your account credentials, passcodes, and active sessions.
              </p>
            </div>

            {securitySaved ? (
              <div className="p-5 sm:p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 flex items-center gap-3 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Security passcode and authentication credentials successfully updated.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSecuritySaved(true);
                  setTimeout(() => setSecuritySaved(false), 3000);
                }}
                className="flex flex-col gap-5 max-w-md"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Current Passcode</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="p-3.5 sm:p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">New Secure Passcode</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="p-3.5 sm:p-4 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto self-start gap-2 shadow-md min-h-[48px]">
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
