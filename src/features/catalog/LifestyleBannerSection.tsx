import React from 'react';
import Image from 'next/image';

export interface LifestyleBannerSectionProps {
  title?: string;
  bgImageUrl?: string;
}

export const LifestyleBannerSection: React.FC<LifestyleBannerSectionProps> = ({
  title = 'Modernity Meets Heritage',
  bgImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Fffw6tZfV95NmBJlldND0byucGSLQ9NYfV8CQUWWtRYdJx6MOC91V0c8sd97ycYd3JtQ2-HIbDfcvNUBTZOiDJS84jYrk3y5CYDQyX_KJ2T13EWxerkbP-bNXkH_6Tn_b2vs0bzMrLNjRy4wL0wvGzl31vr2miq5zHH9mLNDS6dmGJywN1RdpB1kYXYD25OuD6NwsoxlxhHetOvztHCO14QeNzsQOR2_ju1PzSM8d9J9eV-Fe4By6iB7M9SINPoBHZhO3o-H-geN',
}) => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden my-4">
      {/* Immersive Campaign Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt={title}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Centered Editorial Typography Overlay */}
      <div className="relative z-10 text-center text-white space-y-5 px-6 max-w-3xl">
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-tight text-white drop-shadow-sm">
          {title}
        </h2>
        <div className="w-16 h-[2px] bg-white mx-auto opacity-90" />
      </div>
    </section>
  );
};
