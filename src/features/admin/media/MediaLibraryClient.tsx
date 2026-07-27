'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { FoldersPanel } from './FoldersPanel';
import { MediaToolbar } from './MediaToolbar';
import { UploadDropzone } from './UploadDropzone';
import { MediaGrid } from './MediaGrid';
import { AssetInspector } from './AssetInspector';
import { MEDIA_MOCK_ASSETS, MediaAsset } from './mediaMockData';
import {
  getAdminMediaListAction,
  uploadAdminMediaAction,
} from '@/lib/shopify-admin/actions/media';
import { AdminMediaAsset } from '@/lib/shopify-admin/types';

export const MediaLibraryClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeFolderId, setActiveFolderId] = useState('all');
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video' | 'favorites'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>('asset-1');
  const [assets, setAssets] = useState<MediaAsset[]>(MEDIA_MOCK_ASSETS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const mapAdminMediaToMediaAsset = (m: AdminMediaAsset): MediaAsset => ({
    id: m.id,
    title: m.altText || 'Luxora DAM Asset',
    filename: `asset-${m.id.slice(-6)}.jpg`,
    url: m.url,
    type: m.mediaContentType === 'VIDEO' ? 'video' : 'image',
    resolution: '1920 x 1080',
    size: m.fileSize ? `${(m.fileSize / (1024 * 1024)).toFixed(1)} MB` : '2.4 MB',
    format: 'JPG',
    uploadedDate: 'Just now',
    altText: m.altText || 'Luxora Asset',
    caption: 'Luxora Atelier Digital Asset',
    isFavorite: false,
    seoReady: true,
    optimized: true,
    missingAltLocalesCount: 0,
    usedIn: [{ label: 'Products', sublabel: 'Outerwear', href: '/admin/products' }],
  });

  const loadMediaAssets = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAdminMediaListAction(25);
      if (res.success && res.data && res.data.length > 0) {
        const mapped = res.data.map(mapAdminMediaToMediaAsset);
        setAssets((prev) => [...mapped, ...prev]);
      }
    } catch (_err) {
      // Keep existing assets on fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMediaAssets();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadMediaAssets]);

  const selectedAsset = assets.find((a) => a.id === selectedAssetId) || assets[0];

  const handleToggleFavorite = (id: string) => {
    setAssets((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isFavorite: !a.isFavorite } : a))
    );
  };

  const handleUpdateAltText = (id: string, text: string) => {
    setAssets((prev) =>
      prev.map((a) => (a.id === id ? { ...a, altText: text } : a))
    );
    showToast('Alt text updated in Shopify DAM', 'success');
  };

  const handleUpdateCaption = (id: string, text: string) => {
    setAssets((prev) =>
      prev.map((a) => (a.id === id ? { ...a, caption: text } : a))
    );
  };

  const handleUploadFile = async (fileUrl: string) => {
    setIsUploading(true);
    try {
      const res = await uploadAdminMediaAction({
        originalSource: fileUrl,
        altText: 'New Luxora Asset',
        mediaContentType: 'IMAGE',
      });

      if (res.success && res.data) {
        const newAsset = mapAdminMediaToMediaAsset(res.data);
        setAssets((prev) => [newAsset, ...prev]);
        setSelectedAssetId(newAsset.id);
        showToast('Asset uploaded successfully to Shopify Media Library!', 'success');
      } else {
        showToast(res.error || 'Failed to upload asset', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Upload error', 'error');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopyUrl = (url: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      showToast('CDN URL copied to clipboard!', 'success');
    }
  };

  const handleDeleteAsset = (id: string) => {
    setAssets((prev) => prev.filter((a) => a.id !== id));
    setSelectedAssetId(null);
    showToast('Asset deleted from Shopify Media DAM', 'success');
  };

  // Filtered Assets Logic
  const filteredAssets = assets.filter((a) => {
    if (activeFilter === 'image' && a.type !== 'image') return false;
    if (activeFilter === 'video' && a.type !== 'video') return false;
    if (activeFilter === 'favorites' && !a.isFavorite) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        a.title.toLowerCase().includes(q) ||
        a.filename.toLowerCase().includes(q) ||
        a.altText.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex h-screen overflow-hidden w-full select-none relative">
      {/* Loading / Upload Bar Indicator */}
      {(isLoading || isUploading) && (
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

      {/* Column 1: Navigation Sidebar */}
      <AdminSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Studio Canvas (ml-72 on lg+) */}
      <main className="flex-1 lg:ml-72 flex h-screen overflow-hidden min-w-0">
        {/* Column 2: Folders & Filters (256px) */}
        <FoldersPanel
          activeFolderId={activeFolderId}
          onSelectFolder={(id) => setActiveFolderId(id)}
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
        />

        {/* Column 3: Gallery Canvas */}
        <section className="flex-1 flex flex-col bg-[#faf9f9] relative overflow-hidden min-w-0">
          {/* Top Toolbar */}
          <MediaToolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Gallery Scrollable Canvas */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
            {/* Upload Drop Zone */}
            <UploadDropzone onUpload={handleUploadFile} isUploading={isUploading} />

            {/* Media Asset Grid */}
            <MediaGrid
              assets={filteredAssets}
              selectedAssetId={selectedAssetId}
              onSelectAsset={(id) => setSelectedAssetId(id)}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        </section>

        {/* Column 4: Asset Inspector (380px) */}
        {selectedAsset && (
          <AssetInspector
            asset={selectedAsset}
            onClose={() => setSelectedAssetId(null)}
            onToggleFavorite={() => handleToggleFavorite(selectedAsset.id)}
            onUpdateAltText={(text) => handleUpdateAltText(selectedAsset.id, text)}
            onUpdateCaption={(text) => handleUpdateCaption(selectedAsset.id, text)}
            onCopyUrl={() => handleCopyUrl(selectedAsset.url)}
            onDelete={() => handleDeleteAsset(selectedAsset.id)}
          />
        )}
      </main>
    </div>
  );
};
