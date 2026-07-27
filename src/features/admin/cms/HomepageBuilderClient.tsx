'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { CmsTopNavBar } from './CmsTopNavBar';
import { StructureSidebar } from './StructureSidebar';
import { VisualContentEditor } from './VisualContentEditor';
import { LivePreview } from './LivePreview';
import { BottomPublishBar } from './BottomPublishBar';
import { INITIAL_CMS_STATE, INITIAL_SECTIONS, HomepageCmsState } from './cmsMockData';
import {
  getAdminBannersAction,
  saveAdminBannerAction,
} from '@/lib/shopify-admin/actions/cms';

export const HomepageBuilderClient: React.FC = () => {
  const [cmsState, setCmsState] = useState<HomepageCmsState>(INITIAL_CMS_STATE);
  const [sections, setSections] = useState(INITIAL_SECTIONS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const loadCmsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAdminBannersAction();
      if (res.success && res.data && res.data.length > 0) {
        const hero = res.data[0];
        setCmsState((prev) => ({
          ...prev,
          headline: hero.title || prev.headline,
          subheadline: hero.subtitle || prev.subheadline,
          ctaText: hero.ctaText || prev.ctaText,
        }));
      }
    } catch (_err) {
      // Keep existing mock state on fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadCmsData();
    }, 0);
    return () => clearTimeout(timer);
  }, [loadCmsData]);

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const res = await saveAdminBannerAction({
        title: cmsState.headline,
        subtitle: cmsState.subheadline,
        imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
        ctaText: cmsState.ctaText,
        ctaLink: '/collections/outerwear',
        position: 'hero',
        active: false,
      });

      if (res.success) {
        showToast('Homepage CMS draft saved to Shopify Metafields!', 'success');
      } else {
        showToast(res.error || 'Failed to save CMS draft', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error saving CMS draft', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublishNow = async () => {
    setIsSaving(true);
    try {
      const res = await saveAdminBannerAction({
        title: cmsState.headline,
        subtitle: cmsState.subheadline,
        imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
        ctaText: cmsState.ctaText,
        ctaLink: '/collections/outerwear',
        position: 'hero',
        active: true,
      });

      if (res.success) {
        showToast('Homepage v1.4 published live to Shopify Storefront Metafields! (Version: v1.4-PUB)', 'success');
        await loadCmsData();
      } else {
        showToast(res.error || 'Failed to publish CMS content', 'error');
      }
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error publishing CMS content', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen overflow-hidden w-full select-none relative">
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

      {/* 1. Top Navigation Bar */}
      <CmsTopNavBar />

      {/* 2. Main 3-Column Studio Canvas */}
      <main className="flex h-[calc(100vh-64px)] overflow-hidden w-full">
        {/* Left Column: Homepage Structure (20%, min-w 280px) */}
        <StructureSidebar
          sections={sections}
          activeSectionId={cmsState.activeSectionId}
          onSelectSection={(id) => setCmsState((prev) => ({ ...prev, activeSectionId: id }))}
          onToggleSection={(id) =>
            setSections((prev) =>
              prev.map((s) => (s.id === id ? { ...s, isVisible: !s.isVisible } : s))
            )
          }
        />

        {/* Center Column: Visual Content Editor (45%) */}
        <VisualContentEditor
          state={cmsState}
          onChangeHeadline={(val) => setCmsState((prev) => ({ ...prev, headline: val }))}
          onChangeSubheadline={(val) => setCmsState((prev) => ({ ...prev, subheadline: val }))}
          onChangeCtaText={(val) => setCmsState((prev) => ({ ...prev, ctaText: val }))}
          onChangeCtaStyle={(style) => setCmsState((prev) => ({ ...prev, ctaStyle: style }))}
        />

        {/* Right Column: Live Preview (35%, min-w 400px) */}
        <LivePreview
          state={cmsState}
          onChangeDeviceMode={(mode) => setCmsState((prev) => ({ ...prev, deviceMode: mode }))}
        />
      </main>

      {/* 3. Floating Bottom Action Bar */}
      <BottomPublishBar
        onDiscard={() => {
          setCmsState(INITIAL_CMS_STATE);
          showToast('CMS changes reset to default', 'success');
        }}
        onSaveDraft={handleSaveDraft}
        onPreview={() => showToast('Live preview active in right column')}
        onPublishNow={handlePublishNow}
      />
    </div>
  );
};
