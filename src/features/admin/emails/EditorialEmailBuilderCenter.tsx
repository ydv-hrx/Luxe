'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface EditorialEmailBuilderCenterProps {
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  onToggleDevice: (device: 'desktop' | 'tablet' | 'mobile') => void;
}

export const EditorialEmailBuilderCenter: React.FC<EditorialEmailBuilderCenterProps> = ({
  previewDevice,
  onToggleDevice,
}) => {
  const [campaignName, setCampaignName] = useState('Winter Solstice Private Sale');
  const [subjectLine, setSubjectLine] = useState('Refined Elegance: The A/W 2024 Collection');
  const [previewText, setPreviewText] = useState(
    'An exclusive invitation for our most cherished patrons...'
  );

  return (
    <section className="flex-1 bg-[#efeded] overflow-y-auto relative p-6 sm:p-10 flex flex-col items-center min-w-0 font-sans select-none h-full">
      {/* Workspace Container */}
      <div className="w-full max-w-3xl space-y-6 pb-32">
        {/* Campaign Identity Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#c4c7c7]/20">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-[#755a24]">
                Campaign Name
              </label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full border-0 border-b border-[#c4c7c7] focus:border-[#755a24] focus:ring-0 font-serif text-2xl px-0 py-2 text-black font-semibold outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#444748]">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={subjectLine}
                  onChange={(e) => setSubjectLine(e.target.value)}
                  className="w-full border-0 border-b border-[#c4c7c7] focus:border-[#755a24] focus:ring-0 text-sm italic px-0 py-1 text-black outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#444748]">
                  Preview Text
                </label>
                <input
                  type="text"
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                  className="w-full border-0 border-b border-[#c4c7c7] focus:border-[#755a24] focus:ring-0 text-sm px-0 py-1 text-black outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Audience Selection */}
        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-[#c4c7c7]/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#755a24]">groups</span>
            <div>
              <p className="text-[10px] uppercase text-[#747878] font-bold">Target Audience</p>
              <p className="text-xs font-bold text-black">
                VIP Platinum Members <span className="text-[#755a24] font-semibold ml-2">(4,280 recipients)</span>
              </p>
            </div>
          </div>
          <button type="button" className="text-[#755a24] font-bold text-xs underline underline-offset-4 cursor-pointer">
            Edit Segment
          </button>
        </div>

        {/* Visual Drag-and-Drop Area (The Email Draft) */}
        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-[#c4c7c7]/10 min-h-[800px] flex flex-col mx-auto transition-all ${
            previewDevice === 'mobile'
              ? 'max-w-[375px]'
              : previewDevice === 'tablet'
              ? 'max-w-[600px]'
              : 'w-full'
          }`}
        >
          {/* Email Header */}
          <div className="py-10 flex justify-center">
            <span className="font-serif text-3xl tracking-[0.2em] uppercase font-bold text-black">
              Luxora
            </span>
          </div>

          {/* Hero Section */}
          <div className="relative h-[480px] group cursor-move">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiRxbMeYglKbwvtqZ49FVgGqZhHdDlc5D952ibq1r6iSx6Kto6sCUsYzgRwnyvlBhbHo6FZcRpJiNejpdH3HQTXGZgSVRXAM_3bpa8qNHGPkPnGN3Yv3Aux4U_4tpKZZG48OfQObhHevNEv1VvWjiQDTCfafSB8CS48nlt4ehxtmyYb6UftbMFIyeQa2RujFQRW_ReWo3vxeT6NCCM1Y51O3heTuzO9PPngJzRPBt7Vm7-DenxoYb0K5CLiF1TIM7AIWp4Ly1a-2T1"
              alt="Art of Winter Editorial Visual"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-8 sm:px-12 text-white z-10">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">The Art of Winter</h2>
              <p className="text-sm sm:text-base max-w-md leading-relaxed opacity-95">
                A curation of timeless silhouettes designed for the solstice and beyond.
              </p>
              <div className="mt-8 border border-white text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">
                Explore Collection
              </div>
            </div>
          </div>

          {/* Editorial Text Block */}
          <div className="py-16 px-8 sm:px-16 text-center space-y-6">
            <p className="text-xs font-bold text-[#755a24] uppercase tracking-[0.3em]">Curation</p>
            <p className="font-serif text-base sm:text-lg italic text-[#444748] leading-loose max-w-lg mx-auto">
              "True elegance is the absence of noise. This season, we return to the core of craft—Italian cashmere, architectural draping, and the quiet power of a singular silhouette."
            </p>
            <div className="w-12 h-[1px] bg-[#755a24] mx-auto mt-6" />
          </div>

          {/* Product Grid */}
          <div className="px-8 sm:px-12 pb-16 grid grid-cols-2 gap-8">
            <div className="space-y-4 text-center group cursor-pointer">
              <div className="relative aspect-[4/5] bg-[#efeded] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU6G_-e0v9_7kT8Rh4ZpJokCwPIhmN5vwOi_SWOtlzBsEHjGP1zXgHddzqkUkGtnfTy4HU0ZXPkBG58IrgDOzBSN_jJ1QJwqhSujWUOuIK8fIQ0bgivQl1MEj5BpXitQHrbwn_drp66dZ6YqhtUqUGccOzE82taX2NnpFrsb1Zwz-FJ0Pny-_KRCvTytBFR5CbUBfoNKNQrxXDSV17dMcUn0zTsD2UahWHahDZg5WYoMzRomOWDotdQZmzey3LWZHAwhN_r0EyfCNA"
                  alt="The Sculpted Tote"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-black">The Sculpted Tote</p>
              <p className="text-xs text-[#747878]">$2,400</p>
            </div>
            <div className="space-y-4 text-center group cursor-pointer">
              <div className="relative aspect-[4/5] bg-[#efeded] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8VrfbpRj0WoImTp0G08y3NEvg1Hqq3DHkdawghnYD27DTfDZtUeeDGgONJbxw_CCVx9dmQO2fB9aHJcONQPPpjHkJV-xND0rhx65vks5G0hNwUdH4aC6o1N44dbKI-egnpQ2is4jqyC3kPgr5af6gYHTjwaEpqFQkmtLD0BBqlQIQM7ysZe2_iekQsVcHAhS6aRVwp4NdaiGIfepkHweFmKlaLTOGfL8j7ato49we-aa7kEXDLN4WcY3YO58mEQswjP0snYJ6iixA"
                  alt="Solstice Ankle Boot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-black">Solstice Ankle Boot</p>
              <p className="text-xs text-[#747878]">$1,250</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Preview Device Switcher */}
      <div className="fixed bottom-28 left-1/2 -translate-x-1/2 bg-white/85 backdrop-blur-md px-6 py-2 rounded-full border border-[#c4c7c7]/30 shadow-lg flex items-center gap-6 z-30">
        <button
          type="button"
          onClick={() => onToggleDevice('desktop')}
          className={`flex items-center gap-2 text-xs font-bold cursor-pointer transition-colors ${
            previewDevice === 'desktop' ? 'text-black' : 'text-[#444748] hover:text-black'
          }`}
        >
          <span className="material-symbols-outlined text-sm">desktop_windows</span>
          <span>Desktop</span>
        </button>
        <div className="w-[1px] h-4 bg-[#c4c7c7]" />
        <button
          type="button"
          onClick={() => onToggleDevice('tablet')}
          className={`flex items-center gap-2 text-xs font-bold cursor-pointer transition-colors ${
            previewDevice === 'tablet' ? 'text-black' : 'text-[#444748] hover:text-black'
          }`}
        >
          <span className="material-symbols-outlined text-sm">tablet</span>
          <span>Tablet</span>
        </button>
        <div className="w-[1px] h-4 bg-[#c4c7c7]" />
        <button
          type="button"
          onClick={() => onToggleDevice('mobile')}
          className={`flex items-center gap-2 text-xs font-bold cursor-pointer transition-colors ${
            previewDevice === 'mobile' ? 'text-black' : 'text-[#444748] hover:text-black'
          }`}
        >
          <span className="material-symbols-outlined text-sm">smartphone</span>
          <span>Mobile</span>
        </button>
      </div>
    </section>
  );
};
