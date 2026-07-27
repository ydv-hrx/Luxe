'use client';

import React from 'react';
import Image from 'next/image';
import { MediaAsset } from './mediaMockData';

export interface MediaGridProps {
  assets: MediaAsset[];
  selectedAssetId: string | null;
  onSelectAsset: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export const MediaGrid: React.FC<MediaGridProps> = ({
  assets,
  selectedAssetId,
  onSelectAsset,
  onToggleFavorite,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-sans select-none">
      {assets.map((asset) => {
        const isSelected = selectedAssetId === asset.id || asset.isSelected;

        return (
          <div
            key={asset.id}
            onClick={() => onSelectAsset(asset.id)}
            className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer aspect-[3/4] ${
              isSelected
                ? 'shadow-[0_0_0_3px_#faf9f9,0_0_0_5px_#000000]'
                : 'border border-[#c4c7c7]/20 hover:shadow-2xl'
            }`}
          >
            {/* SVG vs Image vs Video Rendering */}
            {asset.type === 'svg' ? (
              <div className="w-full h-full bg-[#F8F8F8] flex items-center justify-center p-8 relative">
                <Image
                  src={asset.url}
                  alt={asset.title}
                  width={160}
                  height={160}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ) : (
              <Image
                src={asset.url}
                alt={asset.title}
                fill
                className="object-cover"
              />
            )}

            {/* Video Play Icon Overlay */}
            {asset.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-14 w-14 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white text-32 fill-icon">
                    play_arrow
                  </span>
                </div>
              </div>
            )}

            {/* Video Duration Badge */}
            {asset.duration && (
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white z-10">
                {asset.duration}
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white z-10">
              <div className="flex justify-between items-start">
                {asset.pagesCount ? (
                  <span className="bg-black/80 backdrop-blur px-2.5 py-1 rounded-md text-[10px] font-bold">
                    {asset.pagesCount} Pages
                  </span>
                ) : (
                  <span />
                )}

                <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(asset.id)}
                    className="p-1.5 bg-white/20 hover:bg-white/40 rounded-lg backdrop-blur transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {asset.isFavorite ? 'star' : 'favorite'}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-1.5 bg-white/20 hover:bg-white/40 rounded-lg backdrop-blur transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">more_vert</span>
                  </button>
                </div>
              </div>

              <div className="text-[10px] font-medium opacity-90">
                {asset.resolution} • {asset.size}
              </div>
            </div>

            {/* Selected Checkmark Badge */}
            {isSelected && (
              <div className="absolute top-4 right-4 h-6 w-6 bg-black text-white rounded-full flex items-center justify-center shadow-lg z-20">
                <span className="material-symbols-outlined text-[16px]">check</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
