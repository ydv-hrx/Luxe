'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavBar } from '../AdminTopNavBar';
import { LandingPagesSidebar } from './LandingPagesSidebar';
import { PageArchitectureCenter } from './PageArchitectureCenter';
import { RightPreviewAIWorkspace } from './RightPreviewAIWorkspace';
import { LandingPageActionBar } from './LandingPageActionBar';
import {
  INITIAL_LANDING_PAGES,
  INITIAL_AI_SUGGESTIONS,
  INITIAL_LANDING_PAGE_STATE,
  LandingPageState,
} from './landingPageMockData';

export const LandingPageBuilderClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [pageState, setPageState] = useState<LandingPageState>(INITIAL_LANDING_PAGE_STATE);

  const handleToggleExpandSection = (id: string) => {
    setPageState((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === id
          ? { ...sec, isExpanded: !sec.isExpanded, isActive: !sec.isActive }
          : sec
      ),
    }));
  };

  const handleToggleHideSection = (id: string) => {
    setPageState((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === id ? { ...sec, isVisible: !sec.isVisible } : sec
      ),
    }));
  };

  const handleRemoveSection = (id: string) => {
    setPageState((prev) => ({
      ...prev,
      sections: prev.sections.filter((sec) => sec.id !== id),
    }));
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col h-screen w-full overflow-hidden select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <AdminTopNavBar
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex flex-1 h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* 2. Side Navigation Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 3-Column Studio Canvas (lg:ml-72) */}
        <main className="flex-1 lg:ml-72 flex h-full overflow-hidden min-w-0">
          {/* Column 1: Pages Directory Sidebar (320px) */}
          <LandingPagesSidebar
            pages={INITIAL_LANDING_PAGES}
            activePageId={pageState.activePageId}
            activeCategory={pageState.activeCategory}
            onSelectPage={(id) => setPageState((prev) => ({ ...prev, activePageId: id }))}
            onSelectCategory={(cat) => setPageState((prev) => ({ ...prev, activeCategory: cat }))}
          />

          {/* Column 2: Page Architecture Center */}
          <PageArchitectureCenter
            sections={pageState.sections}
            onToggleExpandSection={handleToggleExpandSection}
            onToggleHideSection={handleToggleHideSection}
            onRemoveSection={handleRemoveSection}
          />

          {/* Column 3: Right Preview & AI Workspace (450px) */}
          <RightPreviewAIWorkspace
            previewDevice={pageState.previewDevice}
            suggestions={INITIAL_AI_SUGGESTIONS}
            aiPrompt={pageState.aiPrompt}
            onChangeDeviceMode={(mode) =>
              setPageState((prev) => ({ ...prev, previewDevice: mode }))
            }
            onChangeAiPrompt={(val) =>
              setPageState((prev) => ({ ...prev, aiPrompt: val }))
            }
            onSendPrompt={() => {
              console.log('AI Prompt sent:', pageState.aiPrompt);
              setPageState((prev) => ({ ...prev, aiPrompt: '' }));
            }}
          />
        </main>
      </div>

      {/* 4. Floating Action Bar */}
      <LandingPageActionBar
        onUndo={() => console.log('Undo')}
        onRedo={() => console.log('Redo')}
        onPreview={() => console.log('Preview')}
        onDeploy={() => console.log('Deploy')}
      />
    </div>
  );
};
