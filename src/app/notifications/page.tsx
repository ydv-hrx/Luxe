import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notificationService } from '@/lib/services/notification';
import { Badge } from '@/components/ui/Badge';
import { Bell, ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';

import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Notification Center | LUXE Account',
  description: 'View order delivery tracking alerts, security notices, and Diamond points updates.',
};

export default async function NotificationsPage() {
  const notifications = await notificationService.getNotifications();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-10 sm:py-12 flex flex-col gap-10">
      <PageHeader
        badge="Client Messaging"
        title="Notification Center"
        subtitle="Stay informed with real-time dispatch tracking, security alerts, and capsule release previews."
      />

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
        {notifications.length === 0 ? (
          <div className="py-20 text-center text-neutral-500 text-xs">
            No notifications at this time.
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className={`p-6 rounded-3xl border flex items-start justify-between gap-4 transition-all ${
                n.isRead ? 'bg-white border-neutral-200/80 shadow-lumina-level1' : 'bg-blue-50/40 border-blue-200 shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 rounded-2xl text-neutral-800 flex-shrink-0">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold font-serif text-neutral-900">{n.title}</h3>
                    {!n.isRead && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
                  </div>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{n.message}</p>
                  <span className="text-[10px] text-neutral-400 mt-2 block">{n.timestamp}</span>
                </div>
              </div>

              {n.actionUrl && (
                <Link
                  href={n.actionUrl}
                  className="px-3.5 py-1.5 bg-black text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 flex items-center gap-1 whitespace-nowrap"
                >
                  View Details <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
