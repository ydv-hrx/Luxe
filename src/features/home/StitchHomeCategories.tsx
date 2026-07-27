'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const StitchHomeCategories: React.FC = () => {
  const categories = [
    {
      title: 'BAGS',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDnJMcFPl_uppNoq4Cr4Ln4j-r80V9D5XxGiKYXhSeVxe9EB8Egtr-ExctEDo3l2XHkqBjs6GfZaZnLpzx6WbzkVvrc4QWV6q6mqRVftvgid7XLDmwR48EsuwXaSeGCQy1K2vwRKnYDJ2nUphJ9HXIvBXKqC6kos-5G9AjLY6efGFQ0i1_nKlYh775dR_HDHf1ipBlNCRfAGTiyoX5ODjcA-IBsouecN2dI2A7ZJspOdnfhXXM5NDm-L-B8L4VtO3w2dw92zJLpR3Gu',
    },
    {
      title: 'WATCHES',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA6wD3a1b2fJrAJvguHNnTyiWozg8L-VGoT26UqbwCY1A74ZsMrII4ZzbCsYqgdbSOk_PQtwFiJt6fN3ER99zrzctvnNzHhZhhq7rrkFRXBrhmefFQ67PuFVSABDMzSo-qKRl8SKdYlcKwtcYmWTUiuNgfB0wg59RG9-SIto6YHO0MIDTFi_XjHYvxOVHHdNqRYW7KI5io7ODLealJUPdg49oIN19Z2DJnWePM-uU63B2-HRyDdIrMl9PFi66gIuYQiHueMfqHzEIzB',
    },
    {
      title: 'HOME & LIVING',
      query: 'furniture',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuATczroKcJ-Nsq5JP0sVgSgRykSxOQgGdFp0rWaP-9a-DN-zxlFSOvEoUHFW8cBGuia2FUwlLzbncG9aKyoJkzfqGot2omSYKKElnp6QvPBx1HbhkJ-CwBqDxtMJeiWdpfIwI-Jjm2amrFLI6Pvep2t0FXDBmAhbwfdg2SVGPqPccZyuC7dfaJntk6SEkkKKR-lJ3nwk85CyXcqkbhiboNN12D5kxDCVXXPuBOl2KFpSM6ERCUzkqOcgnmhuqe8XXS-2RkUrArxKsvT',
    },
    {
      title: 'SHOES',
      query: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDaCCMvBA9PWLoLQJCWJj6eKa0HAQEr607qoKXRuRK_dDLPBIpTQUBuVX4LXv05GPYjQwXpL47Y1dRefs6yqqMRMODrgdGb5K55WFx-9PFLP16ej3lDtE9VW55MIpPkJ9FAG0HQpZxwjHoSLi7G8UBTP-HDB5Mec2i8n5q6kkSJZZyoytOgv4WiqacW8xS_EO8KvEacIPkhK7xaINFUKDoADa66Vb8MVVG44qWXg4hvRpxnW1v1A_oqeroavZeCRw2diO8_IH89Kqhs',
    },
    {
      title: 'BEAUTY',
      query: 'beauty',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBBRMk8orfLmZdYhLQP1Lqc4BL0_NTYToosQYgsZnrz83eYBmU1FCnlPuI8tggfJRnfWA0J5Qtq7YpGiJu6BzfiXkEAWIf4a0UYVyqirJzTwYfbYLmwhHqCMxOkrONCJRQbLqRixiSYnmYkhDBXUTe7APeCQIVzOpqOlntUvSpFlXP8pBylbAz0GunC9Sm368qmK0Hg3ciCDbZxDj5hXwoutDBwYPaoBmRStdDv95m8BGYfNV51E-ZG7bl06ngNRSmbbDftydBoJyR5',
    },
    {
      title: 'TECH',
      query: 'electronics',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5LV_qhWVls3lctrZgKMgTQ_BxJXsgTHAFzyIR0KuDq_Y71CC6Kfi76dMn-wJQTqGu471Qcx6mVA1z-Ro4Lo01bmlIa_La7yl87bg-WCsObGlbiHrlwh22QTuMLLrLzz6UioeKLYpRtBxUxijZ6kUmTE5lL0tppJGyCsl8uyAKmP74MaiVtzeFDp0h8qKPPbNK7BUJitU4vProhqKieIuviePQMlhfRFSnOQEp_gJOVcyd5--2xNaVZ5nyUpOh092eH7EKu0wS55pa',
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 font-sans">
      <div className="flex flex-row justify-between items-end mb-6 sm:mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-black font-normal">Shop by Category</h2>
        <Link
          href="/collections"
          className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest border-b border-black pb-0.5 sm:pb-1 hover:opacity-70 transition-opacity flex items-center gap-1.5 sm:gap-2 text-black shrink-0"
        >
          VIEW ALL <span className="hidden sm:inline">CATEGORIES</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((c) => (
          <Link key={c.title} href={`/shop?category=${c.query}`} className="group block">
            <div className="aspect-[4/5] bg-neutral-100 mb-3 sm:mb-4 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-black group-hover:text-neutral-600 transition-colors">
              {c.title}
            </p>
            <span className="text-[9px] sm:text-[10px] font-sans font-semibold text-neutral-500 uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all mt-1">
              SHOP NOW <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
