'use client';

import React from 'react';
import Link from 'next/link';

export const CuratedCategories: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto font-sans">
      <div className="mb-8 sm:mb-12 flex justify-between items-end">
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-black">What We Curate</h2>
        <Link
          href="/collections"
          className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-black border-b border-black pb-0.5 sm:pb-1 hover:opacity-70 transition-opacity shrink-0"
        >
          View All <span className="hidden sm:inline">Departments</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:h-[900px] lg:h-[1100px]">
        {/* Fashion (7 cols, 4 rows) */}
        <Link
          href="/shop?category=fashion"
          className="md:col-span-7 md:row-span-4 relative overflow-hidden group block min-h-[260px] sm:min-h-[320px] aspect-[4/3] md:aspect-auto"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_90MFn46sUGTIvYOFB7EWkfZZMg9Msu0a9NIs23cN-oLrAL02SyX_8_UKb5hfXnRWEscyRISJmJCgNxZ0P9fW_171RRl6or8EWB7XpgYd-q7a1gGeo6mWoLtjW5KrXZTISJre7hsG_fdaY0BjVtc1WflLEvwGX3DIZ6dRR3qfYbnsUJFsyuQf6-7xkTjvJpwotP8J8tXK_jfus4VXj6BzrFaWKI_hZMu5Qsy3BaKUw5lxy6gVjKSehbiIJQMbxRX1IBriNKV7WbXC')",
            }}
          />
          <div className="absolute inset-0 bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white border border-white px-6 sm:px-8 py-2.5 sm:py-3 bg-black/30 backdrop-blur-xs sm:bg-transparent">
              Fashion
            </span>
          </div>
        </Link>

        {/* Tech (5 cols, 3 rows) */}
        <Link
          href="/shop?category=electronics"
          className="md:col-span-5 md:row-span-3 relative overflow-hidden group block min-h-[240px] sm:min-h-[280px] aspect-[4/3] md:aspect-auto"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCB2NKauItjyEbM_nzXibsMj6GVROaWiNJUXm6ew7Pk00q7_Y2H5g1uS2t5RRSH6CNhNhflfr1Sko4l01ZZV3xs95zMVQCe1ZPwRcVQAw3KYoTIolR4ojH14V7VE4hhZuY2adXuJQCzzGei0olJ4-1D6paa9jmUOFBgQZWDy7mo2zs72nDNZ0FtIPiEWrKNnGOCuHYSPXtjD-DShlBW4dWuMwu_Tfxg_jkJ-irsBcXCynGowJ-zqJhl_m0EwVTmLciMfbufJS24vHF')",
            }}
          />
          <div className="absolute inset-0 bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white border border-white px-6 sm:px-8 py-2.5 sm:py-3 bg-black/30 backdrop-blur-xs sm:bg-transparent">
              Tech &amp; Audio
            </span>
          </div>
        </Link>

        {/* Home (5 cols, 5 rows) */}
        <Link
          href="/shop?category=furniture"
          className="md:col-span-5 md:row-span-5 relative overflow-hidden group block min-h-[280px] sm:min-h-[340px] aspect-[4/3] md:aspect-auto"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEafWit9-9-CnqsQ7MK_iYGTFqJpgew2axSBrjqxK34O7K5B5DIg9p2jXf7vopLYnsaYKhgn_ABzq0tsSSGGsC0EBQpJCT2kRpYuqmjYrYafuzQegajepahsxS_6dxlAlKyNyCFzKqZbqEH7WmjL-egYXST_lzbfaZ2tRKY0SByGY0hbCwtShn6vUxbhF8zFzOFuxPnYhxvifUd_cuRs1fiDX_8CP7Q0TwPTis4lkjqncmfPWsR7vjwzSnIEN2E2Ef2GhQk2lvKJWc')",
            }}
          />
          <div className="absolute inset-0 bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white border border-white px-6 sm:px-8 py-2.5 sm:py-3 bg-black/30 backdrop-blur-xs sm:bg-transparent">
              Home &amp; Design
            </span>
          </div>
        </Link>

        {/* Beauty (7 cols, 4 rows) */}
        <Link
          href="/shop?category=beauty"
          className="md:col-span-7 md:row-span-4 relative overflow-hidden group block min-h-[260px] sm:min-h-[320px] aspect-[4/3] md:aspect-auto"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq0TjVGoRwrcKXf2B4J8YNl8SxurPyV0yYL_Je_5a94EBpiFsEo3npTse3QiWXfW7R6AZgKtOCGJTCPdLKRctWUS6vNliiWcDsyZ1uhtS1vTI9P0-k_RR1Q1R5V4L7d5s4YsE4apXV0f_yYh_mFJ_O-YBnEnQXtcjoO7eMbEc3f2l-Pqc_qq8Jp5rc6fTHj7LICdc_HfJf73ewvpcgwMQkoGsyWePebjFGuWs8VQe9MPHK65YSzcRhNiILy3EM44ma2v2f_heIEmCL')",
            }}
          />
          <div className="absolute inset-0 bg-black/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white border border-white px-6 sm:px-8 py-2.5 sm:py-3 bg-black/30 backdrop-blur-xs sm:bg-transparent">
              Beauty &amp; Wellness
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};
