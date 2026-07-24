import React from 'react';
import Image from 'next/image';
import { wardrobeService } from '@/lib/services/wardrobe';
import { Badge } from '@/components/ui/Badge';
import { Layers, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export const WardrobeAnalytics: React.FC = async () => {
  const items = await wardrobeService.getWardrobeItems();
  const timeline = await wardrobeService.getWardrobeTimeline();

  const totalValue = items.reduce((acc, i) => acc + i.product.price.amount, 0);
  const totalWears = items.reduce((acc, i) => acc + i.wearCount, 0);
  const avgCostPerWear = totalWears > 0 ? (totalValue / totalWears).toFixed(2) : '0';

  return (
    <div className="flex flex-col gap-10">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Total Wardrobe Valuation</span>
          <span className="text-3xl font-extrabold text-neutral-900">${totalValue} USD</span>
          <span className="text-[11px] text-neutral-500">{items.length} Registered Garments</span>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Cost-Per-Wear Index</span>
          <span className="text-3xl font-extrabold text-emerald-700">${avgCostPerWear} / wear</span>
          <span className="text-[11px] text-emerald-600 font-semibold">High Sustainability Efficiency</span>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Total Wears Logged</span>
          <span className="text-3xl font-extrabold text-neutral-900">{totalWears} Wears</span>
          <span className="text-[11px] text-neutral-500">Tracked via RFID passport</span>
        </div>
      </div>

      {/* Item Gallery */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold font-serif text-neutral-900">Your Digital Closet</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex gap-4">
              <div className="relative w-20 h-24 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.images[0]?.url || ''}
                  alt={item.product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-400">{item.product.vendor}</span>
                  <h4 className="text-sm font-semibold text-neutral-900 line-clamp-1">{item.product.title}</h4>
                  <span className="text-xs font-bold text-black">${item.product.price.amount} USD</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-neutral-500 pt-2 border-t border-neutral-100">
                  <span>Worn {item.wearCount} times</span>
                  <span className="font-semibold text-emerald-700">RFID Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
