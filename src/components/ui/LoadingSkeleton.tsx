import React from 'react';

export interface LoadingSkeletonProps {
  type?: 'card' | 'banner' | 'grid' | 'text';
  count?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  type = 'card',
  count = 1,
  className = '',
}) => {
  if (type === 'banner') {
    return <div className={`h-64 bg-neutral-100 rounded-3xl animate-pulse w-full ${className}`} />;
  }

  if (type === 'grid') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full ${className}`}>
        {[...Array(count || 4)].map((_, i) => (
          <div key={i} className="h-96 bg-neutral-100 rounded-3xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className={`space-y-2.5 w-full ${className}`}>
        <div className="h-6 bg-neutral-100 rounded-lg animate-pulse w-3/4" />
        <div className="h-4 bg-neutral-100 rounded-lg animate-pulse w-1/2" />
      </div>
    );
  }

  return (
    <div className={`h-80 bg-neutral-100 rounded-3xl animate-pulse w-full ${className}`} />
  );
};
