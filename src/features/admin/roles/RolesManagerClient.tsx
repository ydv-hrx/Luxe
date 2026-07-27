'use client';

import React, { useState } from 'react';
import { AdminSidebar } from '../AdminSidebar';
import { StaffDirectorySidebar } from './StaffDirectorySidebar';
import { RoleStudioCenter } from './RoleStudioCenter';
import { SecurityIntelligenceRight } from './SecurityIntelligenceRight';
import { RolesActionBar } from './RolesActionBar';
import {
  INITIAL_STAFF_MEMBERS,
  INITIAL_PERMISSIONS,
  RECENT_AUDIT_EVENTS,
  INITIAL_ROLES_STATE,
  RolesState,
} from './rolesMockData';

export const RolesManagerClient: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [rolesState, setRolesState] = useState<RolesState>(INITIAL_ROLES_STATE);

  const selectedMember =
    INITIAL_STAFF_MEMBERS.find((s) => s.id === rolesState.activeStaffId) ||
    INITIAL_STAFF_MEMBERS[0];

  const handleTogglePermission = (prmId: string) => {
    setRolesState((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [prmId]: !prev.permissions[prmId],
      },
    }));
  };

  return (
    <div className="bg-[#faf9f9] text-[#1b1c1c] font-sans antialiased flex flex-col min-h-screen w-full select-none">
      {/* 1. Top Header Navbar (h-20) */}
      <header className="fixed top-0 right-0 left-64 z-40 flex justify-between items-center px-6 sm:px-10 h-20 bg-white/85 backdrop-blur-md border-b border-[#c4c7c7]/30 font-sans">
        <div className="flex items-center gap-8 flex-1">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#444748] text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search parameters, roles, or logs..."
              className="w-full bg-[#f4f3f3] border-none rounded-full py-2.5 pl-10 pr-4 text-xs font-sans focus:ring-1 focus:ring-[#D4AF37] outline-none text-black"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <span className="font-semibold text-xs text-black border-b-2 border-black pb-1 cursor-default">
              Roles Manager
            </span>
            <span className="font-semibold text-xs text-[#444748] hover:text-black transition-colors cursor-pointer">
              Workspace Settings
            </span>
            <span className="font-semibold text-xs text-[#444748] hover:text-black transition-colors cursor-pointer">
              Audit Logs
            </span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-[#efeded] transition-colors relative cursor-pointer"
          >
            <span className="material-symbols-outlined text-black">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#D4AF37] rounded-full border-2 border-white" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">person_add</span>
            <span>Invite Member</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-[calc(100vh-80px)] w-full">
        {/* 2. Side Navigation Sidebar (w-64) */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* 3. Main 12-Column Studio Grid (ml-64 mt-20) */}
        <main className="ml-64 mt-20 flex-1 p-6 sm:p-10 grid grid-cols-12 gap-6 min-h-[calc(100vh-80px)] min-w-0 pb-32">
          {/* Left Panel: Staff Directory (col-span-3) */}
          <StaffDirectorySidebar
            staffMembers={INITIAL_STAFF_MEMBERS}
            activeStaffId={rolesState.activeStaffId}
            activeDeptFilter={rolesState.activeDeptFilter}
            onSelectStaff={(id) => setRolesState((prev) => ({ ...prev, activeStaffId: id }))}
            onSelectFilter={(dept) => setRolesState((prev) => ({ ...prev, activeDeptFilter: dept }))}
          />

          {/* Center Panel: Role Studio (col-span-6) */}
          <RoleStudioCenter
            member={selectedMember}
            permissions={INITIAL_PERMISSIONS}
            userPermissionsState={rolesState.permissions}
            onTogglePermission={handleTogglePermission}
          />

          {/* Right Panel: Security Intelligence (col-span-3) */}
          <SecurityIntelligenceRight auditEvents={RECENT_AUDIT_EVENTS} />
        </main>
      </div>

      {/* 4. Bottom Action Bar */}
      <RolesActionBar
        onPreview={() => console.log('Preview roles')}
        onSaveDraft={() => console.log('Save draft')}
        onPublishChanges={() => console.log('Publish changes')}
      />
    </div>
  );
};
