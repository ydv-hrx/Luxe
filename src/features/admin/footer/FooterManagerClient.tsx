'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { FooterVariantsSidebar } from './FooterVariantsSidebar';
import { VisualFooterBuilder } from './VisualFooterBuilder';
import { FooterPreviewAIWorkspace } from './FooterPreviewAIWorkspace';
import { FooterDeployActionBar } from './FooterDeployActionBar';
import {
  INITIAL_FOOTER_VARIANTS,
  INITIAL_FOOTER_STATE,
  FooterState,
} from './footerMockData';

export const FooterManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [footerState, setFooterState] = useState<FooterState>(INITIAL_FOOTER_STATE);

  const activeVariant =
    INITIAL_FOOTER_VARIANTS.find((v) => v.id === footerState.activeVariantId) ||
    INITIAL_FOOTER_VARIANTS[0];

  const handleToggleHideBlock = (id: string) => {
    setFooterState((prev) => ({
      ...prev,
      blocks: prev.blocks.map((b) =>
        b.id === id ? { ...b, isVisible: !b.isVisible } : b
      ),
    }));
  };

  const handleRemoveBlock = (id: string) => {
    setFooterState((prev) => ({
      ...prev,
      blocks: prev.blocks.filter((b) => b.id !== id),
    }));
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex h-screen overflow-hidden w-full select-none">
      {/* 1. Side Navigation Sidebar (w-64) */}
      <AdminSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. Main 3-Column Studio Canvas (lg:ml-72) */}
      <main className="flex-1 lg:ml-72 flex h-screen overflow-hidden min-w-0">
        {/* Column 1: Footer Variants Directory Sidebar (320px) */}
        <FooterVariantsSidebar
          variants={INITIAL_FOOTER_VARIANTS}
          activeVariantId={footerState.activeVariantId}
          onSelectVariant={(id) =>
            setFooterState((prev) => ({ ...prev, activeVariantId: id }))
          }
        />

        {/* Column 2: Visual Footer Builder */}
        <VisualFooterBuilder
          blocks={footerState.blocks}
          activeVariantName={activeVariant.name}
          onToggleHideBlock={handleToggleHideBlock}
          onRemoveBlock={handleRemoveBlock}
        />

        {/* Column 3: Dual Workspace (Preview + AI Workspace 480px) */}
        <FooterPreviewAIWorkspace
          previewDevice={footerState.previewDevice}
          aiPrompt={footerState.aiPrompt}
          onChangeDeviceMode={(mode) =>
            setFooterState((prev) => ({ ...prev, previewDevice: mode }))
          }
          onChangeAiPrompt={(val) =>
            setFooterState((prev) => ({ ...prev, aiPrompt: val }))
          }
          onSendPrompt={() => {
            console.log('Footer AI Prompt sent:', footerState.aiPrompt);
            setFooterState((prev) => ({ ...prev, aiPrompt: '' }));
          }}
        />
      </main>

      {/* 3. Floating Bottom Action Bar */}
      <FooterDeployActionBar
        onUndo={() => console.log('Undo')}
        onRedo={() => console.log('Redo')}
        onPreview={() => console.log('Preview')}
        onDeploy={() => console.log('Deploy')}
      />
    </div>
  );
};
