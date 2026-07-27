'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { NavigationMenusSidebar } from './NavigationMenusSidebar';
import { VisualNavigationBuilder } from './VisualNavigationBuilder';
import { NavigationPreviewInsights } from './NavigationPreviewInsights';
import { NavigationActionBar } from './NavigationActionBar';
import {
  INITIAL_NAVIGATION_MENUS,
  INITIAL_NAVIGATION_STATE,
  NavigationState,
} from './navigationMockData';

export const NavigationManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [navState, setNavState] = useState<NavigationState>(INITIAL_NAVIGATION_STATE);

  const handleToggleNodeExpand = (id: string) => {
    setNavState((prev) => ({
      ...prev,
      treeNodes: prev.treeNodes.map((node) =>
        node.id === id ? { ...node, isExpanded: !node.isExpanded } : node
      ),
    }));
  };

  const handleRemoveSubLink = (nodeId: string, subId: string) => {
    setNavState((prev) => ({
      ...prev,
      treeNodes: prev.treeNodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              children: node.children?.filter((c) => c.id !== subId),
            }
          : node
      ),
    }));
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex min-h-screen w-full select-none">
      {/* 1. Left Sidebar Navigation */}
      <AdminSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. Main Workspace (lg:ml-72) */}
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen relative pb-32 min-w-0">
        {/* Top Header Navbar */}
        <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-18rem)] z-40 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7] h-20 px-6 sm:px-10 flex justify-between items-center font-sans">
          <div className="flex items-center gap-6 sm:gap-10">
            <h2 className="font-serif text-2xl font-semibold text-black">Navigation Manager</h2>
            <div className="hidden sm:flex gap-6 border-l border-[#c4c7c7] pl-6">
              <button
                type="button"
                onClick={() => setNavState((prev) => ({ ...prev, activeView: 'desktop' }))}
                className={`text-xs font-semibold pb-2 transition-all ${
                  navState.activeView === 'desktop'
                    ? 'text-black border-b-2 border-black'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                Desktop View
              </button>
              <button
                type="button"
                onClick={() => setNavState((prev) => ({ ...prev, activeView: 'mobile' }))}
                className={`text-xs font-semibold pb-2 transition-all ${
                  navState.activeView === 'mobile'
                    ? 'text-black border-b-2 border-black'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                Mobile View
              </button>
              <button
                type="button"
                onClick={() => setNavState((prev) => ({ ...prev, activeView: 'preview' }))}
                className={`text-xs font-semibold pb-2 transition-all ${
                  navState.activeView === 'preview'
                    ? 'text-black border-b-2 border-black'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                Live Preview
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="p-2 text-[#444748] hover:text-black transition-colors"
              title="History"
            >
              <span className="material-symbols-outlined text-[20px]">history</span>
            </button>
            <button
              type="button"
              className="p-2 text-[#444748] hover:text-black transition-colors"
              title="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button
              type="button"
              className="px-5 py-2 border border-black text-black font-semibold text-xs rounded-full hover:bg-black hover:text-white transition-all hidden sm:inline-block"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-black text-white font-semibold text-xs rounded-full hover:opacity-90 transition-all shadow-md"
            >
              Publish Changes
            </button>
          </div>
        </header>

        {/* 3. 12-Column Content Grid */}
        <div className="mt-20 p-6 sm:p-10 grid grid-cols-12 gap-6">
          {/* Left Panel: Menu Groups (col-span-3) */}
          <NavigationMenusSidebar
            menus={INITIAL_NAVIGATION_MENUS}
            activeMenuId={navState.activeMenuId}
            onSelectMenu={(id) => setNavState((prev) => ({ ...prev, activeMenuId: id }))}
          />

          {/* Center Panel: Visual Navigation Builder (col-span-6) */}
          <VisualNavigationBuilder
            treeNodes={navState.treeNodes}
            columnsCount={navState.columnsCount}
            isEditorialEnabled={navState.isEditorialEnabled}
            onToggleNodeExpand={handleToggleNodeExpand}
            onRemoveSubLink={handleRemoveSubLink}
            onToggleEditorial={() =>
              setNavState((prev) => ({
                ...prev,
                isEditorialEnabled: !prev.isEditorialEnabled,
              }))
            }
            onChangeColumnsCount={(val) =>
              setNavState((prev) => ({ ...prev, columnsCount: val }))
            }
          />

          {/* Right Panel: Preview & Insights (col-span-3) */}
          <NavigationPreviewInsights activeView={navState.activeView} />
        </div>

        {/* 4. Bottom Action Bar */}
        <NavigationActionBar
          onUndo={() => console.log('Undo')}
          onRedo={() => console.log('Redo')}
          onPreview={() => setNavState((prev) => ({ ...prev, activeView: 'preview' }))}
          onDeploy={() => console.log('Deploy')}
        />
      </main>
    </div>
  );
};
