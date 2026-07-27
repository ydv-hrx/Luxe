'use client';

import React from 'react';
import Link from 'next/link';

export const CuratedCategories: React.FC = () => {
  const categories = [
    {
      title: 'Fashion',
      handle: 'apparel',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBSriuSp0oJ8apCcHfmbB4BJ5UF3djpqNQFXvBNwklDNg3sDd77HAfpQiCBRbK1fW1-7tiqAH5ZRGInEzHG38P_FHOgw0BinyVJ5Tl4WT0ax5ptfMq_HjHvla3OZDyrv9UTQY-cLug79PUuGdgHoA5H9rVnVeRvs5RSSfkoaJLlbHQ6nNpTEa-dr4diRGYb2WxGTHSu2jGsDYYsSUCgZtt9mve4tXx4lw1gI4gFIaFE_NSl9WC1OKjqdewtLoEVc2L88hVVNeqTdipo',
    },
    {
      title: 'Electronics',
      handle: 'electronics',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDDdrW5e4fK0iVrHvMESpPSWsxkQLFxHzGe7aoRXoIwIoZ6YbjdnVIP_fPooJQWbCLM27YgpS4u4Wjpzxmv1N2IgqVs6Nqo3RyaiAOqKUhDQ8sLQ039PZOyLiL-fDC7SAZkuHQahVv6T5zMwkvErp9eUkBgNyKMdk8nbRkP0XTX4_VWnQbjQcCci6cP724sgo4vSjTRCei4QRhdAU8VNzC07HcwhjXTC85lTytamWzQFzQcD8moDwYBSAX0JzrBCkYuFRtHpTGuTQun',
    },
    {
      title: 'Home & Living',
      handle: 'home-living',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCM6M6vchMz1mYz75h5S_IuXQ4oAUllfwAjGjXPRlWSrdkuoFIr51OkOF3EhTS_8zt1THp_iFQbQh3z_FcM8TYlQsUIfIT8zuJiWWUBnkEefiEApVe73uW2hQa53w043S2Ve3F9MVHCTAKCDTsQZOgXk2onfYcvGVJWoXDOBK5D8DEyQiUMwxyZiEfFjyZY0WPF6J3nTrUPLeF8tcCNyC4DBRf7dHuAQp9_I8Ks6TqzYB3l8afoAaiM67NhEiUu8GL8T5gl0HnC-SpG',
    },
    {
      title: 'Furniture',
      handle: 'furniture',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-y6FFy6PexAbdlblQaEiAoDRvOsOVMtw2RUv_PMGuH0I64eh-EKSI-DC0wQzBU3EPl8iiBP-dMW1mDTHBM0jppIA3KRDFGz45K1By4NnIjDWLlItHTKJq557S99KSCj_rJhw3RwgjIU5D5ugY6gujxgozy0eiPhZY1LFlUzlglBOFxe_KGiNpJGPjSMHXaaD8Ep-p-dBnE6U_4QU7V9_qNqz25OhI-WuyyxQ3WmFgNNEHAQrOQmONiVEKXRln8LjFguIJ33gnR0Hy',
    },
    {
      title: 'Beauty',
      handle: 'beauty',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBiaYvw93bQSRduABpHRFNTqkMZrkSBF5H0f6XGu4DBE8iwpAsAAEc6H2i-Mf_ZoPEzCB_tf4mxXtc40sCljLW6tl53DV0Gs7ALq-APmEsXVuvavqZbiPccXCbQlMHolWIT9xx8Sbs8USxNng7So80XfKONP_Cth4Bk_oFIVSidryt_HSkvwLqbEFNyBniNnQZ1GtYta2NxVrqpWy4E0D8D9ojidz02HmZzKn3j3iCghDPg9RKFrPGGdFRSdFILmDkU5GnIknZCqg2B',
    },
    {
      title: 'Accessories',
      handle: 'accessories',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKkOhxzUbtL5wL0mlMU2RK7krNDYFi8A8zAkExQzFQS10h_eefEKj5iZ5uCF-Y92l5H1Lgg95mZKPkKGmnIXgJLJIy6rAzNYifM3oRCC0pouEp3A-CL3hJw9eDmCts4XieH8VHWki0La8mwq1aU9PZVdOk2p4rXGhhkX2jfVJkgvsXtbtQmt5mlj2X6DRRWnzwGNsEZuuqYmFUyeKOVh-UwAgS0PQw_wgCW0mGlPx6DfL5IyHMnC0Uldkq73OpZQuSpJVqattPGebg',
    },
    {
      title: 'Sports',
      handle: 'sports',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV5bSbryAnl-Zi__M3x_TLHVppOvZK92SNrKSL8wgow-XbwM6VQuie24EY7teyvwm23e0hzXjSRh5LEYzoA1t5AzAf5RF4olw9JkTQw0QNVHg9nkp_McRfNcgbtW6lyIb4VM_vF4pDwLpbJeGr-iUCnzrZplwQGqnoP8RUIspD5QM2teWqm0smVU57tG9yabQ_b_C5zF1zvm3gofap36hzv28lc1vam5bExCVUTvsykinxUmVheVXcDWeDZM9OuO8gATMbvnqEhFp',
    },
    {
      title: 'Kitchen',
      handle: 'kitchen',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC8DoFhxDh_2RBeRzGMEt2fyQzp0JAyKPLm3qQ8rdMz3DhuuljQRdTJOO5M2wnug_vyKw4LjYzLOzbYlZI8TMvg6-a_TDQKyEk_ghte-zxwq69iFYJ72imQVu1jh8jYTUq7b9PH7aigCKnEelO9jOXU8R3uwxyVlakkcPd1Yz8F6RlNrS27GmagHB5TxcmW4cb4Rrw7SU5uh60v4km_jBaUnO9mgqkCsst40By6RpiyZF0iXzQY368HoLT5wfyk6V5iE0FFC3Oo20wL',
    },
  ];

  return (
    <section className="px-6 sm:px-16 py-20 sm:py-28 max-w-[1440px] mx-auto w-full">
      <div className="mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal">Curated Categories</h2>
        <p className="text-neutral-600 mt-2 font-sans text-base">Explore our universe of refined essentials.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={`/shop?category=${cat.handle}`}
            className="group relative overflow-hidden aspect-[3/4] block w-full bg-neutral-100"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">{cat.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
