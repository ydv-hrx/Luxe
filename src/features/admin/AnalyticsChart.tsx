'use client';

import React from 'react';

export const AnalyticsChart: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-[#c4c7c7]/10">
      {/* Chart Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 gap-6">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-black font-semibold">
            Sales &amp; Traffic Performance
          </h3>
          <p className="text-[#444748]/60 text-xs sm:text-sm font-sans mt-1">
            Advanced metrics visualizing store growth and visitor engagement cycles
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-black shadow-sm" />
              <span className="text-xs font-bold text-black font-sans">Gross Sales</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#C9A86A] shadow-sm" />
              <span className="text-xs font-medium text-[#444748] font-sans">Store Visitors</span>
            </div>
          </div>

          <div className="flex items-center bg-[#f4f3f3] px-4 py-2.5 rounded-xl border border-[#c4c7c7]/10 cursor-pointer hover:bg-[#e9e8e8] transition-colors">
            <span className="text-xs font-bold text-black font-sans mr-4">Monthly View</span>
            <span className="material-symbols-outlined text-[#444748]/50 text-[18px]">
              expand_more
            </span>
          </div>
        </div>
      </div>

      {/* Elevated SVG Chart Area */}
      <div className="relative w-full h-[320px] sm:h-[450px] border-l border-b border-[#c4c7c7]/20 flex items-end px-4 overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none">
          <div className="w-full border-t border-[#c4c7c7]/10" />
          <div className="w-full border-t border-[#c4c7c7]/10" />
          <div className="w-full border-t border-[#c4c7c7]/10" />
          <div className="w-full border-t border-[#c4c7c7]/10" />
          <div className="w-full" />
        </div>

        <svg
          className="absolute inset-0 w-full h-full px-2 sm:px-6 overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 1000 450"
        >
          {/* High-Fidelity Sales Curve */}
          <path
            d="M0 430 Q 150 400, 250 340 T 500 230 T 750 170 T 1000 60"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <path
            d="M0 430 Q 150 400, 250 340 T 500 230 T 750 170 T 1000 60 L 1000 450 L 0 450 Z"
            fill="url(#luxuryGradient)"
            opacity="0.04"
          />

          {/* Traffic Curve */}
          <path
            d="M0 400 Q 150 380, 300 320 T 550 280 T 800 230 T 1000 210"
            fill="none"
            stroke="#C9A86A"
            strokeDasharray="10 6"
            strokeWidth="2.5"
          />

          {/* Hover Point Indicator */}
          <circle cx="750" cy="170" r="6" fill="black" />
          <circle cx="750" cy="170" r="12" fill="black" opacity="0.1" />

          <defs>
            <linearGradient id="luxuryGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="black" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Data Tooltip Overlay */}
        <div className="absolute top-[80px] sm:top-[130px] left-[55%] sm:left-[760px] bg-black text-white p-4 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] z-10 min-w-[140px] pointer-events-none">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2 font-sans">
            May 21, 2024
          </p>
          <div className="space-y-1 font-sans">
            <div className="flex justify-between gap-4">
              <span className="text-[11px]">Sales</span>
              <span className="text-[11px] font-bold">$14,240</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-[11px]">Visitors</span>
              <span className="text-[11px] font-bold">2.4k</span>
            </div>
          </div>
        </div>

        {/* X-Axis Labels */}
        <div className="absolute bottom-[-35px] left-0 w-full flex justify-between text-[10px] sm:text-[11px] font-sans text-[#444748]/50 px-2 sm:px-6 font-bold tracking-widest uppercase">
          <span>May 01</span>
          <span>May 07</span>
          <span>May 14</span>
          <span>May 21</span>
          <span>May 28</span>
          <span>Jun 04</span>
        </div>
      </div>
    </div>
  );
};
