'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavBar } from '../AdminTopNavBar';
import { CollectionsListSidebar } from './CollectionsListSidebar';
import { CollectionEditorCenter } from './CollectionEditorCenter';
import { CollectionStorefrontPreview } from './CollectionStorefrontPreview';
import { CollectionPublishFooter } from './CollectionPublishFooter';
import {
  INITIAL_COLLECTIONS_LIST,
  INITIAL_MOODBOARD_PRODUCTS,
  INITIAL_EDITOR_STATE,
  CollectionEditorState,
  CollectionListItem,
} from './collectionMockData';
import {
  getAdminCollectionsAction,
  createAdminCollectionAction,
  deleteAdminCollectionAction,
} from '@/lib/shopify-admin/actions/collections';
import { AdminCollection } from '@/lib/shopify-admin/types';

export const CollectionManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeCollectionId, setActiveCollectionId] = useState('col-1');
  const [editorState, setEditorState] = useState<CollectionEditorState>(INITIAL_EDITOR_STATE);
  const [collectionsList, setCollectionsList] = useState<CollectionListItem[]>(INITIAL_COLLECTIONS_LIST);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const mapAdminCollectionToListItem = (c: AdminCollection): CollectionListItem => ({
    id: c.id,
    internalTitle: c.title,
    handle: c.handle,
    status: 'Live',
    productCount: c.productsCount || 8,
    updatedText: 'Just now',
    isFeatured: true,
    image: c.image?.url || 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80',
  });

  const loadCollections = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAdminCollectionsAction(25);
      if (res.success && res.data?.collections && res.data.collections.length > 0) {
        const mapped = res.data.collections.map(mapAdminCollectionToListItem);
        setCollectionsList(mapped);
      }
    } catch (_err) {
      // Keep existing collection list on fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadCollections();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadCollections]);

  const handleSelectCollection = (id: string) => {
    setActiveCollectionId(id);
    const selected = collectionsList.find((c) => c.id === id);
    if (selected) {
      setEditorState((prev) => ({
        ...prev,
        internalTitle: selected.internalTitle,
        urlHandle: selected.handle,
        headline: selected.internalTitle,
      }));
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const payload = {
        title: editorState.internalTitle,
        handle: editorState.urlHandle,
        descriptionHtml: `<p>${editorState.description}</p>`,
      };

      const res = await createAdminCollectionAction(payload);
      if (res.success) {
        showToast('Collection draft saved successfully to Shopify Admin!', 'success');
        await loadCollections();
      } else {
        showToast(res.error || 'Failed to save collection draft', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error saving collection draft', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleApproveAndLaunch = async () => {
    setIsSaving(true);
    try {
      const payload = {
        title: editorState.internalTitle,
        handle: editorState.urlHandle,
        descriptionHtml: `<p>${editorState.headline}</p>`,
      };

      const res = await createAdminCollectionAction(payload);
      if (res.success) {
        showToast('Collection approved & published to Shopify storefront!', 'success');
        setEditorState((prev) => ({ ...prev, isPublicVisible: true }));
        await loadCollections();
      } else {
        showToast(res.error || 'Failed to publish collection', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error publishing collection', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDiscard = async () => {
    if (activeCollectionId && activeCollectionId.startsWith('gid://')) {
      setIsSaving(true);
      try {
        const res = await deleteAdminCollectionAction(activeCollectionId);
        if (res.success) {
          showToast('Collection removed from Shopify Admin', 'success');
          await loadCollections();
        } else {
          showToast(res.error || 'Failed to delete collection', 'error');
        }
      } catch (err: unknown) {
        showToast(err instanceof Error ? err.message : 'Error deleting collection', 'error');
      } finally {
        setIsSaving(false);
      }
    } else {
      setEditorState(INITIAL_EDITOR_STATE);
      showToast('Collection changes reset', 'success');
    }
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none relative">
      {/* Loading / Saving Bar Indicator */}
      {(isLoading || isSaving) && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-[70] overflow-hidden">
          <div className="h-full bg-black animate-pulse w-full" />
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-[70] px-6 py-3 rounded-2xl shadow-2xl border text-xs font-semibold flex items-center gap-3 transition-all animate-bounce ${
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

      {/* 1. Top Header Navbar (h-16) */}
      <AdminTopNavBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 h-[calc(100vh-64px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 3-Column Workspace (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 flex h-full overflow-hidden min-w-0">
          {/* Column 1: Collections List (320px) */}
          <CollectionsListSidebar
            collections={collectionsList}
            activeCollectionId={activeCollectionId}
            onSelectCollection={handleSelectCollection}
          />

          {/* Column 2: Collection Editor Center */}
          <CollectionEditorCenter
            state={editorState}
            moodboardProducts={INITIAL_MOODBOARD_PRODUCTS}
            onChangeInternalTitle={(val) =>
              setEditorState((prev) => ({ ...prev, internalTitle: val }))
            }
            onChangeUrlHandle={(val) =>
              setEditorState((prev) => ({ ...prev, urlHandle: val }))
            }
            onChangeHeadline={(val) =>
              setEditorState((prev) => ({ ...prev, headline: val }))
            }
            onChangeSubheadline={(val) =>
              setEditorState((prev) => ({ ...prev, subheadline: val }))
            }
            onChangeDescription={(val) =>
              setEditorState((prev) => ({ ...prev, description: val }))
            }
            onToggleVisibility={() =>
              setEditorState((prev) => ({
                ...prev,
                isPublicVisible: !prev.isPublicVisible,
              }))
            }
          />

          {/* Column 3: Live Storefront Preview (480px) */}
          <CollectionStorefrontPreview
            state={editorState}
            onChangeDeviceMode={(mode) =>
              setEditorState((prev) => ({ ...prev, previewDevice: mode }))
            }
            onChangeZoom={(delta) =>
              setEditorState((prev) => ({
                ...prev,
                previewZoom: Math.min(150, Math.max(50, prev.previewZoom + delta)),
              }))
            }
          />
        </main>
      </div>

      {/* 4. Bottom Action Footer */}
      <CollectionPublishFooter
        onDiscard={handleDiscard}
        onSaveDraft={handleSaveDraft}
        onPreviewLive={() => showToast('Live preview active in right column')}
        onApproveAndLaunch={handleApproveAndLaunch}
      />
    </div>
  );
};
