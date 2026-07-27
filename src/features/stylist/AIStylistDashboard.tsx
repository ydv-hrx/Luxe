'use client';

import React, { useState } from 'react';

import { StyleDNAProfile } from '@/lib/services/recommendation';
import { Product } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';
import { Sliders, Palette, Zap } from 'lucide-react';

export interface AIStylistDashboardProps {
  dna: StyleDNAProfile;
  recommendations: Product[];
}

export const AIStylistDashboard: React.FC<AIStylistDashboardProps> = ({
  dna,
  recommendations,
}) => {
  const [activeTab, setActiveTab] = useState<'dna' | 'recommendations' | 'outfit'>('dna');

  return (
    <div className="flex flex-col gap-10">
      {/* Tab Navigation */}
      <div className="flex items-center gap-3 border-b border-neutral-200 pb-3 text-xs font-bold uppercase tracking-wider">
        <button
          type="button"
          onClick={() => setActiveTab('dna')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'dna' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'
          }`}
        >
          Style DNA Identity
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('recommendations')}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeTab === 'recommendations' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'
          }`}
        >
          AI Wardrobe Curations ({recommendations.length})
        </button>
      </div>

      {/* Style DNA Identity Section */}
      {activeTab === 'dna' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-serif">Signature Palette</h3>
            <div className="flex flex-wrap gap-1.5">
              {dna.primaryPalette.map((col) => (
                <span key={col} className="px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-lg text-xs font-semibold">
                  {col}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-serif">Preferred Silhouette</h3>
            <span className="text-sm font-semibold text-neutral-900">{dna.preferredFit}</span>
            <p className="text-xs text-neutral-500">Optimized for uncompressed drape and structural shoulders.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-lumina-level1 flex flex-col gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-serif">AI Fit Confidence</h3>
            <span className="text-2xl font-extrabold text-emerald-700">98.4% Match</span>
            <p className="text-xs text-neutral-500">Based on 14 previous orders and scan telemetry.</p>
          </div>
        </div>
      )}

      {/* AI Recommendations Grid */}
      {activeTab === 'recommendations' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-200">
          {recommendations.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
