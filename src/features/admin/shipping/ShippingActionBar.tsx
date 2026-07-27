'use client';

import React from 'react';

export interface ShippingActionBarProps {
  onEdit?: () => void;
  onCarrier?: () => void;
  onPreview?: () => void;
  onDispatch?: () => void;
}

export const ShippingActionBar: React.FC<ShippingActionBarProps> = ({
  onEdit,
  onCarrier,
  onPreview,
  onDispatch,
}) => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 min-w-[500px] bg-black text-white rounded-full px-8 py-3 shadow-2xl border border-white/10 font-sans select-none">
      <button
        type="button"
        onClick={onEdit}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-all px-3 py-2 group cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
          edit
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">Edit</span>
      </button>

      <div className="w-[1px] h-6 bg-white/20" />

      <button
        type="button"
        onClick={onCarrier}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-all px-3 py-2 group cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
          local_shipping
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">Carrier</span>
      </button>

      <div className="w-[1px] h-6 bg-white/20" />

      <button
        type="button"
        onClick={onPreview}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-all px-3 py-2 group cursor-pointer"
      >
        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
          visibility
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">Preview</span>
      </button>

      <button
        type="button"
        onClick={onDispatch}
        className="ml-4 flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
      >
        <span>Dispatch Shipment</span>
        <span className="material-symbols-outlined text-lg">send</span>
      </button>
    </div>
  );
};
