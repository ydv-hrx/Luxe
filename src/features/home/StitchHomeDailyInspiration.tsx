'use client';

import React from 'react';

export const StitchHomeDailyInspiration: React.FC = () => {
  const images = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg3msXDWmTFW-h-S3n_Gfx7mtagAh9r9RmEdBCgmeAWWVAkVGgYzZiWuwIRQeutHew30E6E8GiX5TFZyCGLgpONU37pUC_SAWTvpy5bkbEZdBR894QFJMlGeKMeWpUoLg1LknBQlRrJ2y4WMPtaMElQPE_hb2oBlYm9PprcEeX9boQSLBTGc9dqf7OVp6PaIr3cMratW8cI9OlwkHznZbEuFPceh8YdXwX5OrOFkF4EmCFPMq4hPHxtJOmSHW3mE9_XlIEB8vtQsRa',
      alt: 'Minimalist home interior',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcr1usMzf83SJPYtPskF7SKAJlUqErfRVlE_1xoOjo-KmiGXax79vjZ3pcJMo6YUYpejN5Je8XbAHLn1-w9OJiE3paOuCj-_geO8bTjCe71RavhxmtoxG8uu14bOrjja3ShApziHEr3vvRMQuIT4C_Zgo-FugOUkyvr3rHSWRD1_Jgw4GZ86E7SfNDH6J1FyRp8b7nRjXZ-gSziqhn9dm6FsUarCiPqLT9-Ei4vMKLVy57s2HRMA4V9z7upgDID6WdTlKG53JmchQY',
      alt: 'Luxury leather handbag and coat',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDot8OYf8HJTAUngxhSFqgJIrZBXFSzWbLHAbG4zW-vpH7uwMegz5rPoP2m2cY_siJCDZcNaL26IIyKAPI_DvbPvMdadHDsUiufiuuxjcbvtfRH9175LczH9j9jUEuZesqiK4vosh2X_Hv022OrgkIgTW1YPrIvOhXyX7r9flzzOKfcLaiBfJ_j6Z8tm0NyxuJXvsbhO3wPZPq5O9uYaD1UIos18ycLHqGBD9wVLwHX0qeiqtk_LrffdThq7APimrbowe3l7-uI7P9y',
      alt: 'Modern living room with marble coffee table',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZeWLetKkUowITUsMnoGGqMDh66iTtg426xRohrPfZwgIADfWTj9N6KOcOau4KwM8xN8Ykw384L1NRdHy_UxMlsZ1Q5D7zVtzSxlwHKgprRGZ5DH7Trj-GaWno7YNU1oXIJ-_SNrATr-z0UyxfHEyWFChHYZVLSxsF5Ak_OGilO-oiDFNP9nOAHJe4yPsac50rX7b-2qEfmfKWuWfP4Dd3F7xVMuHe2Z63byOTZmNqcv165axPihYsR3r23lL4mUUCrWuTwSA-3Vhm',
      alt: 'LUXORA luxury packaging flat-lay',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGudzdFc_eVyQ5EkAcqy4wjbwTdRJFa6zsIf1P7KkyLLLYZaYEEs_eorFVHnINO1qaQUFUIiF20TRK25wMuErpy7F04czjo5pbra5XcGToQBnhaB8qXV0fOGe0GtGIJuO9eo7MRG8nq5mdOSCGPQKKqv6V4BMzlkGqwHQWcmcQUnKCEkEyRJuuyVWi2t5GjfuYMkMDpKkrr0R92z3ptIHOsVN9IswvBrqYOCZoCBhdWuuumUDtZzDg1rn6PmVJ043biKgGkJDiiu_I',
      alt: 'Premium black suitcase travel editorial',
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 font-sans">
      <div className="flex flex-row justify-between items-end mb-6 sm:mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-black font-normal">Daily Inspiration</h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors shrink-0"
        >
          @LUXORA.LIFE
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`aspect-square overflow-hidden bg-neutral-100 relative group cursor-pointer ${
              i === 4 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
