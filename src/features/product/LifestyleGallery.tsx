'use client';

import React from 'react';

export const LifestyleGallery: React.FC = () => {
  return (
    <>
      {/* DESKTOP LIFESTYLE GALLERY (Stitch Design 1: 12-col grid, h-[800px]) */}
      <section className="hidden md:block max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-12 gap-6 h-[600px] lg:h-[800px]">
          <div className="col-span-8 overflow-hidden h-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlMQ3dcN-CgNAP_8pYFAlt_Qu8kqugnzxi7pZDNsSHA6_NuiZqHacRcBz2H7uzjFz_uBr4pE2-onwdT4DGEB1BYI-nA9s6m961zmbDXWpzb7iiHaJex2U6tCazf3MMdqdWhjYxX1qNuCxgd6TRLGTsqlzkt3RzUDu3Tf1vOJSVCg5MmcW3YCVHhtXH39TwYfvu6lT16nsZM5S28SYlvnWacCtSNr4jpEbtYgPVQNi0vG-7BAMsHoEb-hGWtezS5t3OC61Y9PtDbr2s"
              alt="Editorial Travertine Vessel Library Display"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="col-span-4 flex flex-col gap-6 h-full">
            <div className="h-1/2 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaO_LdE9FvdGBJ1yMPb16o0T86b7Hf0RNM97HTjmGQwYL_YTfctsK2O4G6zocW2g03pUYkOVc1w5uCLNYLJgI4nGk_bp_kOHD2bJibM1mpYyzr8rgH9XUfAlYrM2FHmQ1gLhoIMoSeDmf04Zi3J85UlJ9ZfrPnayEg9b60SIP3mOuP6tPTBcJHRCAfX-eaoJWDy20gFkvz2N1qF3sKOa8Z1Yn4LiPsvC9fiZcKOZbSpyh5ODEXMWr7nR8lrp_JDU4dtm2J7vaOiEbe"
                alt="Close-up Vessel Branch"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="h-1/2 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdQRR5CUQ1tuxDZmfuojZhvUlbuyy4s62xP3QxzaomllFPAyQztV_X1eH4faZBsNQo0KzqmC2ei8oCBK_7RBMc1TW3YIhYsQqLfGYBquqiuwYAbAJn5bbv7O0qpC4F0H0SSrprwJnanlAW3aA_PHylARYKymSXKjiAaju9TyhZrZHWFlyomrpZOgRMVExauQwIAUzTciNYmhhs0x4LltRiIMoFmfpvBgdrYkrMhA6mgYLI1uO0fAmjCnOauz3Y6GsTUXEVAD6mpBJi"
                alt="Artisan Chisel Detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE LIFESTYLE GALLERY (Stitch Design 2: Stacked aspect-[4/5] images) */}
      <section className="md:hidden mt-16 px-5 space-y-5">
        <div className="aspect-[4/5] w-full bg-[#eeeeee] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDGIcLGGWwEyIm0ry-pBSuZihIp8ZG7FV8RBvstSRSWb7EjSpGJBp0z3Tg-nN0eKFa-rKPeXqSLL0BBLSt-uJKrzZ3UGXREnzB8Pl19iFBI_mwXmIzDAyeZOjDPKv_W_YiF3xI7Jkts6d10Hc4qNvycrnHs2bBUA5u8k0mdVH-dsOFYlbAoGFvRRWrifShGjD9jszxKPOnl8aj4VkKDgumx8rHkWZKYDwkuseROqcb-mDszVHXeqgNROmMyAnwXD9gD3bwUBOsOxTa"
            alt="Editorial Kitchen Display"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/5] w-full bg-[#eeeeee] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF7fMsPsbzbhVvc57ep9gW38xFtAY5JDQxqz2z7E7ofpo9WmY5YYxkJJeQGmERR2UqWQb8GJNghkG8dT_PtyiJ_iwa3GwRPetsg1aZKtfeQgxXzNBpiHewaKlRhH0atzYnkUbbBzCfUaw7-Q_HiJj-YHeX7iW6Z7ZOTyc-hOEh4byyt-3oRN58iohYfYMttUy6zlDTDkSx9G2vKB3uTKHPiKd1JJH65LUKXjSRQJeA699e3JZV7sBMJS4py4BrYVxQf1LP8VZ1nx5I"
            alt="Library Moody Setting"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};
