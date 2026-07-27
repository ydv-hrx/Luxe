'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MediaAsset } from './mediaMockData';

export interface AssetInspectorProps {
  asset: MediaAsset;
  onUpdateAltText: (id: string, text: string) => void;
  onUpdateCaption: (id: string, text: string) => void;
  onCopyUrl?: () => void;
  onDelete?: () => void;
  onClose?: () => void;
  onToggleFavorite?: () => void;
}

export const AssetInspector: React.FC<AssetInspectorProps> = ({
  asset,
  onUpdateAltText,
  onUpdateCaption,
  onCopyUrl: _onCopyUrl,
  onDelete,
  onClose: _onClose,
  onToggleFavorite: _onToggleFavorite,
}) => {
  return (
    <section className="w-80 shrink-0 bg-white border-l border-[#c4c7c7]/30 flex flex-col overflow-y-auto font-sans select-none">
      {/* Section 1: Asset Preview Header */}
      <div className="p-6 border-b border-[#c4c7c7]/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-sans text-[10px] font-bold text-[#747878] uppercase tracking-[0.2em]">
            Asset Preview
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              className="p-1.5 hover:bg-[#faf9f9] rounded-lg text-[#747878] transition-colors"
              title="Open Full"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </button>
            <button
              type="button"
              className="p-1.5 hover:bg-[#faf9f9] rounded-lg text-[#747878] transition-colors"
              title="Download File"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
            </button>
          </div>
        </div>

        {/* Thumbnail Box */}
        <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] mb-6 aspect-square bg-[#dbdad9] relative border border-[#c4c7c7]/20">
          <Image
            src={asset.url}
            alt={asset.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Section 2: Asset Health & AI */}
      <div className="p-6 space-y-6">
        {/* Health Status */}
        <div className="bg-[#f4f3f3]/50 rounded-2xl p-4 border border-[#c4c7c7]/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#755a24] text-[18px]">security</span>
            <h4 className="text-xs font-semibold text-black">Asset Health</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-green-600">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> SEO
              Ready
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-green-600">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Optimized
            </div>
            {asset.missingAltLocalesCount > 0 && (
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#ba1a1a] col-span-2">
                <span className="material-symbols-outlined text-[14px]">warning</span> Missing Alt
                Text in {asset.missingAltLocalesCount} Locales
              </div>
            )}
          </div>
        </div>

        {/* AI Assistant */}
        <div className="bg-black text-white rounded-2xl p-5 shadow-xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-125 transition-transform duration-700 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">auto_awesome</span>
          </div>
          <div className="relative z-10">
            <h4 className="font-serif text-sm mb-4 flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              AI Asset Assistant
            </h4>
            <div className="space-y-2">
              <button
                type="button"
                className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-left px-3 text-[11px] font-medium transition-colors flex items-center justify-between"
              >
                <span>Generate Luxury Tags</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
              <button
                type="button"
                className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-left px-3 text-[11px] font-medium transition-colors flex items-center justify-between"
              >
                <span>Remove Background</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
              <button
                type="button"
                className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-left px-3 text-[11px] font-medium transition-colors flex items-center justify-between"
              >
                <span>Smart Crop (4:5)</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Meta Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block font-sans text-[10px] font-bold text-[#747878] uppercase tracking-wider mb-2">
              Alt Text
            </label>
            <textarea
              value={asset.altText}
              onChange={(e) => onUpdateAltText(asset.id, e.target.value)}
              rows={3}
              className="w-full bg-[#faf9f9] border border-[#c4c7c7]/30 rounded-xl p-3 text-xs font-sans focus:ring-1 focus:ring-black/20 text-black outline-none resize-none transition-all"
            />
          </div>

          <div>
            <label className="block font-sans text-[10px] font-bold text-[#747878] uppercase tracking-wider mb-2">
              Caption
            </label>
            <input
              type="text"
              value={asset.caption}
              onChange={(e) => onUpdateCaption(asset.id, e.target.value)}
              className="w-full bg-[#faf9f9] border border-[#c4c7c7]/30 rounded-xl p-3 text-xs font-sans focus:ring-1 focus:ring-black/20 text-black outline-none transition-all"
            />
          </div>
        </div>

        {/* Technical Specs */}
        <div>
          <h4 className="font-sans text-[10px] font-bold text-[#747878] uppercase tracking-widest mb-4">
            Technical Specs
          </h4>
          <div className="space-y-3 bg-[#faf9f9] p-4 rounded-xl border border-[#c4c7c7]/10">
            <div className="flex justify-between text-xs">
              <span className="text-[#747878]">Dimensions</span>
              <span className="font-semibold text-black">{asset.resolution}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#747878]">File Size</span>
              <span className="font-semibold text-black">{asset.size}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#747878]">Format</span>
              <span className="font-semibold text-black uppercase">{asset.format}</span>
            </div>
          </div>
        </div>

        {/* Used In Section */}
        <div>
          <h4 className="font-sans text-[10px] font-bold text-[#747878] uppercase tracking-widest mb-4">
            Used In
          </h4>
          <div className="space-y-2">
            {asset.usedIn.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-[11px] p-2 hover:bg-[#faf9f9] rounded-lg group transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#747878]">link</span>
                <span className="text-[#444748] font-medium">
                  {item.label} <span className="text-[#747878] font-normal">→</span> {item.sublabel}
                </span>
                <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-black">
                  north_east
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* History / Actions Footer */}
      <div className="mt-auto p-6 bg-[#f4f3f3] border-t border-[#c4c7c7]/30">
        <button
          type="button"
          onClick={onDelete}
          className="w-full py-3.5 px-4 text-[#ba1a1a] font-sans text-xs font-semibold rounded-xl hover:bg-[#ba1a1a]/5 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">delete</span>
          Move to Trash
        </button>
      </div>
    </section>
  );
};
