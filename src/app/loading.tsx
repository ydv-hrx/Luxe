import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-16 flex flex-col gap-10 animate-pulse">
      {/* Hero Skeleton */}
      <div className="w-full h-80 bg-neutral-200/70 rounded-3xl" />

      {/* Title Skeleton */}
      <div className="flex flex-col gap-2 max-w-sm">
        <div className="h-4 bg-neutral-200 w-1/3 rounded-md" />
        <div className="h-8 bg-neutral-300 w-2/3 rounded-lg" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-4 bg-white p-4 rounded-2xl border border-neutral-200/60">
            <div className="aspect-[3/4] w-full bg-neutral-200 rounded-xl" />
            <div className="h-4 bg-neutral-200 w-3/4 rounded-md" />
            <div className="h-4 bg-neutral-200 w-1/2 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
