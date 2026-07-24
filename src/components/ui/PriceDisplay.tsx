import React from 'react';
import { Money } from '@/types';

export interface PriceDisplayProps {
  price: Money;
  compareAtPrice?: Money;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  compareAtPrice,
  size = 'md',
  className = '',
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currencyCode || 'USD',
    minimumFractionDigits: 0,
  });

  const sizeClasses = {
    sm: 'text-sm font-medium',
    md: 'text-base font-semibold',
    lg: 'text-2xl font-bold tracking-tight',
  };

  const hasDiscount = compareAtPrice && compareAtPrice.amount > price.amount;

  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`${sizeClasses[size]} text-black`}>
        {formatter.format(price.amount)}
      </span>
      {hasDiscount && (
        <span className="text-sm line-through text-neutral-400">
          {formatter.format(compareAtPrice.amount)}
        </span>
      )}
    </div>
  );
};
