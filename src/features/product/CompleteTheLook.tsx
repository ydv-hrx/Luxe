'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';

export interface CompleteTheLookProps {
  relatedProducts: Product[];
}

export const CompleteTheLook: React.FC<CompleteTheLookProps> = ({ relatedProducts }) => {
  const addItem = useCartStore((state) => state.addItem);

  const fallbackItems = [
    {
      id: 'look-1',
      handle: 'heavyweight-silk-throw',
      title: 'Heavyweight Silk Throw',
      vendor: 'TEXTILES',
      price: { amount: 650, currencyCode: 'USD' },
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDOErqKPrPwWG36chYSddMxvUyGKalgGkA3_4zIkU7y8I_JxHCaV1XZoKGqIW66BewI3UWbdkul9VeFGVg-6PnGcecIzv1o1XCCxtnGs4jbLQlrYTu1ZdKuPje8d0rCR5UaOM2MyJbyioa1q24UTb4OQ7rWPy5KZ8BgfyJwJI71hXvXcR_VkFMHDhrZ-VojqjwbTW8XVtbyBTKgLmaSrbJwjK848nnp-pJP-mnWZq_nHre-zEaRXz1P-Cq2rX10-OK2CvgvZMtfx1lD',
    },
    {
      id: 'look-2',
      handle: 'ribbed-beeswax-column-set',
      title: 'Ribbed Beeswax Column Set',
      vendor: 'AMBIANCE',
      price: { amount: 180, currencyCode: 'USD' },
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAErCGB0ZZGo5oKkMXOMXhDfxbL2WzE9L8KIxa7E5mXBc5hhUHMuNSevpNJnBLFTPisRVtIg_9sG2dQP98QpuIbFktVPhMzg-22KsQDQDlgcux_QG4xt2NooT8WlpWvnrflVoZ-bVy6Xw_BpOctfWmwMPRmJ1lLSLHA1bVThiy6ZXUIjnSJ_cQ4F05hnj5IKfl0DNhFE-mRQYSpw6m527LCsUKgBxaPtIxv0eIisPZpYxzzpv-oY3ro5sHUxoOwOix6IaBUkLTfsLTJ',
    },
    {
      id: 'look-3',
      handle: 'atelier-oak-plinth',
      title: 'Atelier Oak Plinth',
      vendor: 'FURNITURE',
      price: { amount: 2800, currencyCode: 'USD' },
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDLN05K78B0j_N34BOYhxGMUQ8qmE8hJAoGjBZG_Z5wGc_YXv7qded5bQ9gwIlVJblbajb08nSrrTj8V8eJ7U7TMNOVKJrOIw1I1akBSquyPsJBWt8SgFNWZh0rSHdHg4NPdC_s971kblt6g9NOIoM_X6dlPBhz_X0c_BAvMfujDEJdM1ng4ok3wEc8ie5BkHXoErSjlWy3_YngMaA5tID_Jkp7k-Z4PQU8Qd1EjO3bzAia6p_h-hlq9AywYS9pfOTPu4cBZxtr-P1B',
    },
    {
      id: 'look-4',
      handle: 'hand-stitched-linen-cushion',
      title: 'Hand-Stitched Linen Cushion',
      vendor: 'TEXTILES',
      price: { amount: 240, currencyCode: 'USD' },
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpopef6_8b3CdeRdnoDS60KGlKvBMYu-yuX3ughc-CtskBs_fe25t5eUFPLChq92d0IkfsAxJAs0LBGaG4sC8gJ2oWz5jScIhChSF5FGkc_Sa6C9wRjXcc4PKtDv2oHXCoDa9_8JJXr-SyIbc3u3sD_CwRnfuGOwZ-K-as0wmWI8F4MJCk-qujnkXEYw3ErGxKRTCEVxmKZUCWz-e0lqwlIPy6UEZVP682QJUHGV8kFNVgy047EFL4sSLCaTr6MdM3T1jckh5c9qht',
    },
  ];

  const items = relatedProducts && relatedProducts.length > 0 ? relatedProducts.map((p) => ({
    id: p.id,
    handle: p.handle,
    title: p.title,
    vendor: p.vendor || 'LUXORA ATELIER',
    price: p.price,
    image: p.images[0]?.url || fallbackItems[0].image,
    rawProduct: p,
  })) : fallbackItems.map((f) => ({ ...f, rawProduct: null }));

  const handleQuickAdd = (item: any) => {
    if (item.rawProduct) {
      addItem(item.rawProduct, item.rawProduct.variants?.[0] || { id: item.id + '-v1', title: 'Default', sku: item.id, price: item.price, selectedOptions: {}, availableForSale: true }, 1);
    }
  };

  return (
    <section className="py-12 sm:py-16 border-t border-neutral-200 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="font-serif text-2xl sm:text-4xl text-black font-normal mb-8 sm:mb-12">
          Complete the Look
        </h2>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-6">
          {items.map((item) => (
            <div key={item.id} className="min-w-[260px] sm:min-w-[320px] max-w-[320px] group cursor-pointer shrink-0">
              <div className="aspect-[4/5] bg-[#eeeeee] mb-4 overflow-hidden relative">
                <Link href={`/products/${item.handle}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => handleQuickAdd(item)}
                  className="absolute bottom-4 left-4 right-4 py-3 bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  QUICK ADD
                </button>
              </div>
              <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest mb-1">{item.vendor}</p>
              <h4 className="font-sans text-sm font-medium text-black line-clamp-1 group-hover:underline underline-offset-4">{item.title}</h4>
              <p className="font-sans text-sm font-semibold text-black mt-1">${item.price.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
