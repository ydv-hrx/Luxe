'use client';

import React from 'react';
import { Product } from '@/types';
import { ShopCatalogClient } from '@/features/catalog/ShopCatalogClient';

interface CategoriesClientContainerProps {
  initialProducts: Product[];
  currentCategory: string;
}

export const CategoriesClientContainer: React.FC<CategoriesClientContainerProps> = ({
  initialProducts,
  currentCategory,
}) => {
  return (
    <div className="w-full">
      <ShopCatalogClient initialProducts={initialProducts} currentCategory={currentCategory} />
    </div>
  );
};
