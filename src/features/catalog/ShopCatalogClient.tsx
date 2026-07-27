'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import { useWishlistStore } from '@/store/useWishlistStore';
import { Heart, Plus, ChevronLeft, ChevronRight, ChevronDown, ArrowRight, SlidersHorizontal, X } from 'lucide-react';

export interface ShopCatalogClientProps {
  initialProducts: Product[];
  currentCategory?: string;
}

const CATALOG_CATEGORIES = [
  { label: 'Outerwear', value: 'outerwear', count: 42 },
  { label: 'Knitwear', value: 'knits', count: 28 },
  { label: 'Footwear', value: 'shoes', count: 15 },
  { label: 'Accessories', value: 'accessories', count: 39 },
];

const PRICE_RANGES = [
  { label: '$0 - $500', min: 0, max: 500 },
  { label: '$500 - $1,500', min: 500, max: 1500 },
  { label: '$1,500 - $5,000', min: 1500, max: 5000 },
];

const COLOR_PALETTE = [
  { hex: '#1a1c1c', name: 'Obsidian' },
  { hex: '#f3f3f3', name: 'Ivory' },
  { hex: '#444748', name: 'Charcoal' },
  { hex: '#e5e2e1', name: 'Grey' },
  { hex: '#745c00', name: 'Espresso' },
];

export const ShopCatalogClient: React.FC<ShopCatalogClientProps> = ({
  initialProducts,
  currentCategory = 'all',
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  const [activeSort, setActiveSort] = useState<string>(searchParams.get('sort') || 'FEATURED');
  const [activeCategory, setActiveCategory] = useState<string>(searchParams.get('category') || currentCategory);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Lock body scroll when mobile filter drawer is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileFilterOpen]);

  const handleSortChange = (sortVal: string) => {
    setActiveSort(sortVal);
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sortVal);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleCategorySelect = (catVal: string) => {
    const newCat = activeCategory === catVal ? 'all' : catVal;
    setActiveCategory(newCat);
    const params = new URLSearchParams(searchParams.toString());
    if (newCat === 'all') params.delete('category');
    else params.set('category', newCat);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setIsMobileFilterOpen(false);
  };

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(
        (p) =>
          p.category.toLowerCase() === activeCategory.toLowerCase() ||
          p.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
      );
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) => {
        return selectedPriceRanges.some((rangeLabel) => {
          const range = PRICE_RANGES.find((r) => r.label === rangeLabel);
          if (!range) return true;
          return p.price.amount >= range.min && p.price.amount <= range.max;
        });
      });
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price.amount - b.price.amount);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price.amount - a.price.amount);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'best-selling':
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [initialProducts, activeCategory, selectedPriceRanges, activeSort]);

  const recentlyViewedItems = [
    {
      title: 'Merino Wool Polo',
      category: 'Knitwear',
      price: '$650',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCH3PTolf94hdndiPHaV3uz0qOD97XOiydmVNyip4BMUvQtWVeijrelW_Zvpbri_soRiR17BtSLXkztXWI8FDbYCiRNsEBax3xvzkGFqxdjVVdBcs0HgDT-O0Stsmr1rfuS7FHMxZspHIqFoOojpF4AA7iFrXVhoM45S1Kqtb_LrPDkzioHpWvf7Je8yQu5y1N_j5hlrKiVfEVqpPLc7XJLG--tGA83d8MQWp7GDrGdsvx7-FBqjpFbRJNlFMrBEl0HaHvCml-8TRfL',
    },
    {
      title: 'Hand-Crafted Optics',
      category: 'Accessories',
      price: '$420',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDio1ch7EOVX-edxLlH1QzHqa92wgqiKyCtI3MywICPSesOv8cv11bNgnrRgsK5ulWs4BB62yqF6S_TdvTSP0Fuq-XADc-NMeN5taCSivk5VBsWKKbP9x0YUV8k7qiTWhQkiyLOA31fMxURnQi_T-gUw8gg_M5iDkvSuhnDQFQF-sXTVN338nQfphWA2DM3A-f2M3kOfani8O_gzDcry7ie8r41BmVmNkCB_VAZL2qwc6dej88gNmNhaSvc6jbd12k4N3Af6U6SM_gR',
    },
    {
      title: 'Silver Pendant Chain',
      category: 'Jewelry',
      price: '$350',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-vEtbpArUZEZAUPXj7duuo3aytgpE9XfaY5xMWT7DIHk1FxTjprRWJ-KZiBn42lxfHMGe0hUlvxS6mqA4WB-dCXK6peU4rNNnq4LvkY-bi7Cf43TZ1Dn7s48uZ3dnLWFby-iOUt70LnANtabOlNsfXyb9ns26hiL-HWmX_RSxIX-WOp47oSLdmQ_zBQJUUFDYCt7XcowM009sFfIEvucqV8_s1FZRm9eqvV0WxyYm-DEhXDZ6mn6_OlFjq0HZBRNfFSesrb_pQ9n4',
    },
    {
      title: 'Oversized Cashmere Scarf',
      category: 'Accessories',
      price: '$580',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZGslo2a8WoZVgzlFaf_xcys0ke8SFJfXxugeUyx2CqdUDqtmMbz29KHnaJOVAhcvD9JegXent9gTFWueIqgNq_tdjtLx5Yn_4VlUI4587-MzvS3J33qsu8KdZ_NNUgelMcrkupxf32Y0-PvDNX3XVUoTPcLtl9NplgkR0sLSubZ0fTDBuwkDPawBoHtPtOFFFyRrbucoWl5B-Fl61aaxUbLyGMgDSRxo9zcNpwXamCSb7Z4Q2nFzXnCkgrEetM2s7NG8uIrEwyZH',
    },
  ];

  const filterSidebarContent = (
    <div className="space-y-8 font-sans">
      {/* CATEGORIES */}
      <div>
        <h3 className="font-sans text-xs font-semibold mb-4 tracking-widest text-black uppercase">
          CATEGORIES
        </h3>
        <ul className="space-y-3">
          {CATALOG_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.value;
            return (
              <li
                key={cat.value}
                onClick={() => handleCategorySelect(cat.value)}
                className={`flex justify-between items-center cursor-pointer text-xs sm:text-sm hover:translate-x-1 transition-transform ${
                  isSelected ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-normal ${isSelected ? 'text-black' : 'text-neutral-400'}`}>
                  {cat.count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* PRICE RANGE */}
      <div>
        <h3 className="font-sans text-xs font-semibold mb-4 tracking-widest text-black uppercase">
          PRICE RANGE
        </h3>
        <div className="space-y-3">
          {PRICE_RANGES.map((range) => {
            const isChecked = selectedPriceRanges.includes(range.label);
            return (
              <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    setSelectedPriceRanges((prev) =>
                      isChecked ? prev.filter((r) => r !== range.label) : [...prev, range.label]
                    );
                  }}
                  className="w-4 h-4 rounded-none border-neutral-300 text-black focus:ring-0"
                />
                <span
                  className={`text-xs sm:text-sm transition-colors ${
                    isChecked ? 'text-black font-medium' : 'text-neutral-500 group-hover:text-black'
                  }`}
                >
                  {range.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* COLOR PALETTE */}
      <div>
        <h3 className="font-sans text-xs font-semibold mb-4 tracking-widest text-black uppercase">
          COLOR PALETTE
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {COLOR_PALETTE.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
              style={{ backgroundColor: color.hex }}
              className={`w-7 h-7 rounded-full border border-neutral-300 transition-all ${
                selectedColor === color.name ? 'ring-2 ring-black ring-offset-2 scale-105' : 'hover:scale-105'
              }`}
              aria-label={`Filter by color ${color.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full font-sans">
      {/* 1. Tool Bar & Filter Header */}
      <section id="catalog" className="px-4 sm:px-8 lg:px-16 w-full max-w-[1440px] mx-auto py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200/60 pb-6 mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl text-black font-normal">Curated Selection</h2>
            <p className="text-neutral-500 font-sans text-xs sm:text-base mt-1">Refined essentials for the modern wardrobe.</p>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            {/* Mobile Filter Button (<lg) */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs font-semibold uppercase tracking-widest bg-neutral-100 px-3.5 py-2 rounded-full text-black hover:bg-neutral-200 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium lg:hidden">
              {filteredProducts.length} Items
            </span>

            {/* Sort Selector */}
            <div className="relative group shrink-0">
              <button className="flex items-center gap-2 font-sans text-xs font-semibold tracking-widest text-black uppercase hover:opacity-70 transition-opacity">
                SORT BY: {activeSort.toUpperCase().replace('-', ' ')}
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-neutral-200 hidden group-hover:block z-30 shadow-lg">
                <ul className="font-sans text-[10px] font-semibold tracking-widest p-2 uppercase">
                  <li
                    onClick={() => handleSortChange('FEATURED')}
                    className="p-3 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    FEATURED
                  </li>
                  <li
                    onClick={() => handleSortChange('NEWEST')}
                    className="p-3 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    NEWEST
                  </li>
                  <li
                    onClick={() => handleSortChange('BEST SELLING')}
                    className="p-3 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    BEST SELLING
                  </li>
                  <li
                    onClick={() => handleSortChange('PRICE: LOW-HIGH')}
                    className="p-3 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    PRICE: LOW-HIGH
                  </li>
                  <li
                    onClick={() => handleSortChange('PRICE: HIGH-LOW')}
                    className="p-3 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    PRICE: HIGH-LOW
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer (<lg) */}
        {isMobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            />
            <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 animate-in slide-in-from-left duration-300">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200 mb-6">
                <h3 className="font-serif text-xl text-black">Filter Collection</h3>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 text-neutral-500 hover:text-black"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {filterSidebarContent}

              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full mt-8 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* 2 & 3. SideNavBar Filters & Product Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sticky Filters (lg+) */}
          <aside className="hidden lg:flex flex-col py-0 sticky top-36 h-full w-64 pr-6 border-r border-neutral-200/80 font-sans shrink-0">
            {filterSidebarContent}
          </aside>

          {/* 3. Product Grid (2 columns on mobile, 2-3 on tablet, 3 on xl) */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 gap-y-8 sm:gap-y-12">
              {filteredProducts.map((product, idx) => {
                const isFavorite = isInWishlist(product.id);
                return (
                  <React.Fragment key={product.id}>
                    {/* Product Card */}
                    <div className="luxury-card group flex flex-col justify-between h-full cursor-pointer">
                      <div>
                        <div className="relative aspect-[4/5] overflow-hidden mb-3 sm:mb-4 bg-neutral-100">
                          <Link href={`/products/${product.handle}`}>
                            <img
                              src={product.images?.[0]?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2'}
                              alt={product.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </Link>

                          {/* Badges */}
                          {product.isNew && (
                            <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-black text-white font-sans text-[9px] sm:text-[10px] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 tracking-widest uppercase">
                              New
                            </span>
                          )}
                          {!product.isNew && product.compareAtPrice && (
                            <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-[#fed65b] text-[#745c00] font-sans text-[9px] sm:text-[10px] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 tracking-widest uppercase">
                              Archive
                            </span>
                          )}

                          {/* Wishlist Icon */}
                          <button
                            type="button"
                            onClick={() => toggleWishlist(product)}
                            className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 text-black p-1.5 sm:p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                            aria-label="Wishlist"
                          >
                            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFavorite ? 'text-red-600 fill-red-600' : ''}`} />
                          </button>

                          {/* Quick Add Slide-Up Bar */}
                          <div
                            onClick={() => addItem(product, product.variants?.[0] || { id: product.id + '-v1', title: 'Default', sku: product.id, price: product.price, selectedOptions: {}, availableForSale: true }, 1)}
                            className="quick-add absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 flex items-center justify-between bg-black text-white p-2.5 sm:p-3 font-sans text-[9px] sm:text-[10px] font-semibold tracking-widest cursor-pointer hover:bg-neutral-800"
                          >
                            <span>QUICK ADD</span>
                            <Plus className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <p className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-widest text-neutral-500 uppercase">
                            {product.vendor || 'Luxora Atelier'}
                          </p>
                          <h3 className="font-sans text-xs sm:text-base font-normal text-black group-hover:underline underline-offset-4 decoration-black/30 line-clamp-1">
                            <Link href={`/products/${product.handle}`}>{product.title}</Link>
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 pt-2">
                        <p className="font-sans text-xs sm:text-lg font-medium text-black">${product.price.amount}</p>
                        {product.compareAtPrice && (
                          <p className="text-neutral-400 line-through text-[10px] sm:text-sm">${product.compareAtPrice.amount}</p>
                        )}
                      </div>
                    </div>

                    {/* 4. Promotional Section Banner (Injected in grid) */}
                    {idx === 2 && (
                      <div className="col-span-full my-6 sm:my-10 py-8 sm:py-12 bg-white border-y border-neutral-300/80 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 relative overflow-hidden font-sans">
                        <div className="relative z-10 max-w-lg mb-6 md:mb-0 text-left">
                          <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#735c00] mb-2 sm:mb-4 block uppercase">
                            PRIVATE ACCESS
                          </span>
                          <h2 className="font-serif text-2xl sm:text-4xl text-black mb-3 font-normal">Limited Time: Flash Sale</h2>
                          <p className="font-sans text-xs sm:text-base text-neutral-600 mb-6">
                            Enjoy an exclusive 20% privilege on selected archival pieces from our signature collections.
                          </p>
                          <Link
                            href="/shop?sale=true"
                            className="border border-black px-8 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 group flex items-center justify-center gap-3 w-full sm:w-fit"
                          >
                            REDEEM OFFER <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        <div className="relative z-10 text-center md:text-right">
                          <p className="font-sans text-[10px] font-semibold tracking-widest text-neutral-500 uppercase mb-2">
                            ENDS IN
                          </p>
                          <div className="flex gap-4 font-serif text-2xl sm:text-3xl text-black justify-center md:justify-end">
                            <span>
                              12<small className="text-[10px] font-sans align-top tracking-normal ml-1">h</small>
                            </span>
                            <span>
                              45<small className="text-[10px] font-sans align-top tracking-normal ml-1">m</small>
                            </span>
                            <span>
                              08<small className="text-[10px] font-sans align-top tracking-normal ml-1">s</small>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* 5. Pagination */}
            <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              <button className="flex items-center gap-1.5 hover:text-black transition-colors cursor-not-allowed opacity-30">
                <ChevronLeft className="w-4 h-4" /> PREVIOUS
              </button>
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-black font-bold border-b border-black pb-0.5">01</span>
                <span className="hover:text-black transition-colors cursor-pointer">02</span>
                <span className="hover:text-black transition-colors cursor-pointer">03</span>
                <span className="hover:text-black transition-colors cursor-pointer">...</span>
                <span className="hover:text-black transition-colors cursor-pointer">12</span>
              </div>
              <button className="flex items-center gap-1.5 hover:text-black transition-colors group">
                NEXT <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recently Viewed Carousel */}
      <section className="bg-[#f3f3f3] py-10 sm:py-14 md:py-16 overflow-hidden font-sans">
        <div className="px-4 sm:px-8 lg:px-16 w-full max-w-[1440px] mx-auto mb-6 sm:mb-8">
          <h2 className="font-serif text-2xl sm:text-4xl text-black font-normal">Recently Viewed</h2>
        </div>
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-8 lg:px-16 w-full max-w-[1440px] mx-auto overflow-x-auto scrollbar-none pb-4 snap-x">
          {recentlyViewedItems.map((item, idx) => (
            <div key={idx} className="flex-none w-44 sm:w-56 md:w-64 group cursor-pointer snap-start">
              <div className="aspect-square bg-white overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-widest text-neutral-500 uppercase mb-0.5">
                {item.category}
              </p>
              <h4 className="text-black text-xs sm:text-sm truncate font-medium">{item.title}</h4>
              <p className="text-black font-medium mt-0.5 text-xs sm:text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
