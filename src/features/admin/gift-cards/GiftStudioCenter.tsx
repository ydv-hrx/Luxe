'use client';

import React, { useState } from 'react';

export interface GiftStudioCenterProps {
  previewDevice: 'desktop' | 'mobile' | 'packaging';
  onToggleDevice: (device: 'desktop' | 'mobile' | 'packaging') => void;
}

export const GiftStudioCenter: React.FC<GiftStudioCenterProps> = ({
  previewDevice,
  onToggleDevice,
}) => {
  const [giftName, setGiftName] = useState('The Signature Collection Credit');
  const [giftValue, setGiftValue] = useState(2500);
  const [theme, setTheme] = useState('Atelier Gold');
  const [recipientName, setRecipientName] = useState('Eleanor Vance');
  const [personalMessage, setPersonalMessage] = useState(
    'A gift as timeless as your style. Welcome to the Luxora inner circle.'
  );

  return (
    <section className="col-span-12 lg:col-span-6 space-y-6 font-sans select-none">
      <div className="bg-white rounded-2xl shadow-sm border border-[#c4c7c7]/20 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl font-semibold text-black">Gift Studio</h1>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-4 py-1.5 rounded-full border border-[#c4c7c7] text-xs font-semibold text-[#444748] hover:bg-[#f4f3f3] transition-colors cursor-pointer"
            >
              Draft
            </button>
            <button
              type="button"
              className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Live Preview
            </button>
          </div>
        </div>

        {/* Studio Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gift Identity */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b border-[#c4c7c7] pb-2">
              Gift Identity
            </h3>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-[#444748] uppercase mb-1">
                  Gift Name
                </label>
                <input
                  type="text"
                  value={giftName}
                  onChange={(e) => setGiftName(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#c4c7c7] focus:border-[#D4AF37] py-2 text-sm font-semibold text-black outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-[10px] font-bold text-[#444748] uppercase mb-1">
                    Value (USD)
                  </label>
                  <input
                    type="number"
                    value={giftValue}
                    onChange={(e) => setGiftValue(Number(e.target.value))}
                    className="w-full bg-transparent border-0 border-b border-[#c4c7c7] focus:border-[#D4AF37] py-2 text-sm font-semibold text-black outline-none transition-all"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold text-[#444748] uppercase mb-1">
                    Theme
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-[#c4c7c7] focus:border-[#D4AF37] py-2 text-sm font-semibold text-black outline-none transition-all"
                  >
                    <option value="Atelier Gold">Atelier Gold</option>
                    <option value="Midnight Silk">Midnight Silk</option>
                    <option value="Minimal Ivory">Minimal Ivory</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Recipient Details */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b border-[#c4c7c7] pb-2">
              Recipient Details
            </h3>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-[#444748] uppercase mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#c4c7c7] focus:border-[#D4AF37] py-2 text-sm font-semibold text-black outline-none transition-all"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-[#444748] uppercase mb-1">
                  Personal Message
                </label>
                <textarea
                  rows={2}
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#c4c7c7] focus:border-[#D4AF37] py-2 text-xs text-black resize-none outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Preview Area */}
        <div className="mt-12 bg-[#f4f3f3] rounded-xl p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => onToggleDevice('desktop')}
                className={`flex items-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                  previewDevice === 'desktop' ? 'text-black' : 'text-[#444748]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">desktop_windows</span> Desktop
              </button>
              <button
                type="button"
                onClick={() => onToggleDevice('mobile')}
                className={`flex items-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                  previewDevice === 'mobile' ? 'text-black' : 'text-[#444748]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">smartphone</span> Mobile
              </button>
              <button
                type="button"
                onClick={() => onToggleDevice('packaging')}
                className={`flex items-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                  previewDevice === 'packaging' ? 'text-black' : 'text-[#444748]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">inventory</span> Physical Packaging
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center py-8">
            {/* Digital Card Mockup */}
            <div className="relative w-full max-w-[500px] aspect-[1.58/1] bg-black rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-12 flex flex-col justify-between text-white border border-white/10">
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-serif text-2xl font-bold tracking-widest uppercase text-white">
                  Luxora
                </span>
                <span className="material-symbols-outlined text-[#D4AF37]">star</span>
              </div>
              <div className="relative z-10 space-y-1">
                <p className="text-[#e3e2e0] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Gift Card Value
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                  ${giftValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </h2>
              </div>
              <div className="relative z-10 flex justify-between items-end border-t border-white/20 pt-4">
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">
                    Card Holder
                  </p>
                  <p className="font-sans text-xs font-bold uppercase text-white">{recipientName}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">
                    Verification Code
                  </p>
                  <p className="font-sans text-xs font-bold tracking-widest text-white">LX-9921-X</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
