'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavBar } from '../AdminTopNavBar';
import { ProductsDirectorySidebar } from './ProductsDirectorySidebar';
import { ProductWorkspaceCenter } from './ProductWorkspaceCenter';
import { ProductLivePreview } from './ProductLivePreview';
import { ProductPublishFooter } from './ProductPublishFooter';
import {
  INITIAL_PRODUCTS_DIRECTORY,
  INITIAL_PRODUCT_VARIANTS,
  INITIAL_PRODUCT_WORKSPACE,
  ProductWorkspaceState,
  ProductListItem,
} from './productMockData';
import {
  getAdminProductsAction,
  createAdminProductAction,
  updateAdminProductAction,
  deleteAdminProductAction,
} from '@/lib/shopify-admin/actions/products';
import { AdminProduct } from '@/lib/shopify-admin/types';

export const ProductManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeProductId, setActiveProductId] = useState('prod-1');
  const [workspace, setWorkspace] = useState<ProductWorkspaceState>(INITIAL_PRODUCT_WORKSPACE);
  const [productsList, setProductsList] = useState<ProductListItem[]>(INITIAL_PRODUCTS_DIRECTORY);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const mapAdminProductToListItem = (p: AdminProduct): ProductListItem => ({
    id: p.id,
    name: p.title,
    sku: `#SKU-${p.id.slice(-4).toUpperCase()}`,
    status: p.status === 'ACTIVE' ? 'Published' : 'Draft',
    price: `$${p.priceRange?.minVariantPrice?.amount || '0'}`,
    inventoryCount: p.totalInventory || 12,
    isFeatured: p.tags?.includes('featured') || false,
    image: p.featuredImage?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80',
  });

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAdminProductsAction(25);
      if (res.success && res.data?.products && res.data.products.length > 0) {
        const mapped = res.data.products.map(mapAdminProductToListItem);
        setProductsList(mapped);
      }
    } catch (_err) {
      // Keep existing product list on fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadProducts]);

  const handleSelectProduct = (id: string) => {
    setActiveProductId(id);
    const selected = productsList.find((p) => p.id === id);
    if (selected) {
      setWorkspace((prev) => ({
        ...prev,
        name: selected.name,
        sku: selected.sku.replace('#', ''),
        price: selected.price.replace('$', ''),
        isLive: selected.status === 'Published',
        inventory: selected.inventoryCount,
      }));
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const isNew = activeProductId.startsWith('new-') || !activeProductId.startsWith('gid://');
      const payload = {
        id: isNew ? undefined : activeProductId,
        title: workspace.name,
        vendor: workspace.vendor,
        productType: 'Apparel',
        status: 'DRAFT' as const,
        tags: workspace.isLive ? ['featured'] : [],
        variants: [
          {
            price: parseFloat(workspace.price) || 0,
            inventoryQuantity: workspace.inventory,
          },
        ],
      };

      const res = isNew ? await createAdminProductAction(payload) : await updateAdminProductAction(payload);
      if (res.success) {
        showToast('Product draft saved successfully to Shopify Admin!', 'success');
        await loadProducts();
      } else {
        showToast(res.error || 'Failed to save draft', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error saving draft', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleApprove = async () => {
    setIsSaving(true);
    try {
      const isNew = activeProductId.startsWith('new-') || !activeProductId.startsWith('gid://');
      const payload = {
        id: isNew ? undefined : activeProductId,
        title: workspace.name,
        vendor: workspace.vendor,
        productType: 'Apparel',
        status: 'ACTIVE' as const,
        tags: ['featured', 'approved'],
        variants: [
          {
            price: parseFloat(workspace.price) || 0,
            inventoryQuantity: workspace.inventory,
          },
        ],
      };

      const res = isNew ? await createAdminProductAction(payload) : await updateAdminProductAction(payload);
      if (res.success) {
        showToast('Product published & approved in Shopify Admin catalog!', 'success');
        setWorkspace((prev) => ({ ...prev, isLive: true }));
        await loadProducts();
      } else {
        showToast(res.error || 'Failed to approve product', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error approving product', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDiscard = async () => {
    if (activeProductId && activeProductId.startsWith('gid://')) {
      setIsSaving(true);
      try {
        const res = await deleteAdminProductAction(activeProductId);
        if (res.success) {
          showToast('Product archived / deleted from Shopify Admin', 'success');
          await loadProducts();
        } else {
          showToast(res.error || 'Failed to delete product', 'error');
        }
      } catch (err: unknown) {
        showToast(err instanceof Error ? err.message : 'Error deleting product', 'error');
      } finally {
        setIsSaving(false);
      }
    } else {
      setWorkspace(INITIAL_PRODUCT_WORKSPACE);
      showToast('Form changes discarded', 'success');
    }
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none relative">
      {/* Loading / Saving Bar Indicator */}
      {(isLoading || isSaving) && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-[60] overflow-hidden">
          <div className="h-full bg-black animate-pulse w-full" />
        </div>
      )}

      {/* Toast Notification Notification */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-2xl shadow-2xl border text-xs font-semibold flex items-center gap-3 transition-all animate-bounce ${
            toast.type === 'success'
              ? 'bg-black text-white border-gold-500/30'
              : 'bg-red-900 text-white border-red-500/30'
          }`}
        >
          <span className="material-symbols-outlined text-sm">
            {toast.type === 'success' ? 'check_circle' : 'error'}
          </span>
          <span>{toast.message}</span>
        </div>
      )}

      {/* 1. Top Navigation Bar (h-16) */}
      <AdminTopNavBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 h-[calc(100vh-64px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 3-Column Dashboard Grid (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 flex h-full overflow-hidden min-w-0">
          {/* Column 1: Products Directory Sidebar (340px) */}
          <ProductsDirectorySidebar
            products={productsList}
            activeProductId={activeProductId}
            onSelectProduct={handleSelectProduct}
          />

          {/* Column 2: Product Workspace Center */}
          <ProductWorkspaceCenter
            state={workspace}
            variants={INITIAL_PRODUCT_VARIANTS}
            onChangeName={(val) => setWorkspace((prev) => ({ ...prev, name: val }))}
            onChangeSku={(val) => setWorkspace((prev) => ({ ...prev, sku: val }))}
            onChangeHandle={(val) => setWorkspace((prev) => ({ ...prev, handle: val }))}
            onChangeVendor={(val) => setWorkspace((prev) => ({ ...prev, vendor: val }))}
            onToggleLiveStatus={() =>
              setWorkspace((prev) => ({ ...prev, isLive: !prev.isLive }))
            }
            onChangePrice={(val) => setWorkspace((prev) => ({ ...prev, price: val }))}
            onChangeInventory={(val) => setWorkspace((prev) => ({ ...prev, inventory: val }))}
            onChangeDescription={(val) =>
              setWorkspace((prev) => ({ ...prev, description: val }))
            }
          />

          {/* Column 3: Live Product Preview (400px) */}
          <ProductLivePreview
            state={workspace}
            onChangeDeviceMode={(mode) =>
              setWorkspace((prev) => ({ ...prev, previewDevice: mode }))
            }
          />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <ProductPublishFooter
        onSaveDraft={handleSaveDraft}
        onPreview={() => showToast('Live preview active in right column')}
        onDiscard={handleDiscard}
        onApprove={handleApprove}
      />
    </div>
  );
};
