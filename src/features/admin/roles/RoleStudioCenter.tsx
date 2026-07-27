'use client';

import React from 'react';
import Image from 'next/image';
import { StaffMember, PermissionItem } from './rolesMockData';

export interface RoleStudioCenterProps {
  member: StaffMember;
  permissions: PermissionItem[];
  userPermissionsState: Record<string, boolean>;
  onTogglePermission: (id: string) => void;
}

export const RoleStudioCenter: React.FC<RoleStudioCenterProps> = ({
  member,
  permissions,
  userPermissionsState,
  onTogglePermission,
}) => {
  return (
    <section className="col-span-12 xl:col-span-6 space-y-8 font-sans select-none">
      {/* Member Identity Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/20 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 relative z-10">
          <div className="relative group shrink-0">
            <div className="relative w-32 h-40 rounded-2xl overflow-hidden grayscale border-4 border-[#faf9f9] shadow-xl">
              <Image src={member.avatar} alt={member.name} fill className="object-cover" />
            </div>
            <button
              type="button"
              className="absolute -bottom-2 -right-2 p-2 bg-[#D4AF37] text-white rounded-full shadow-lg opacity-90 group-hover:scale-110 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <div className="flex-1 mb-2">
            <h2 className="font-serif text-3xl font-bold text-black">{member.name}</h2>
            <p className="text-xs text-[#444748] font-semibold flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-[#D4AF37] text-sm">verified</span>
              <span>
                {member.role} • {member.department} Department
              </span>
            </p>
            <div className="flex gap-6 mt-4 pt-4 border-t border-[#c4c7c7]/20">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#444748]/60 font-bold">
                  Workspace Since
                </p>
                <p className="font-semibold text-sm text-black">{member.workspaceSince}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#444748]/60 font-bold">
                  Access Level
                </p>
                <p className="font-semibold text-sm text-[#D4AF37]">{member.accessLevel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permission Matrix */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#c4c7c7]/20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-black">Granular Permissions</h3>
            <p className="text-xs text-[#444748] mt-0.5">
              Adjust access levels across the atelier ecosystem.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">history</span>
            <span>View Role History</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {permissions.map((p) => {
            const isChecked = userPermissionsState[p.id] ?? p.isChecked;

            return (
              <div
                key={p.id}
                className="flex items-center justify-between group p-2 hover:bg-[#f4f3f3] rounded-lg transition-colors cursor-pointer"
                onClick={() => onTogglePermission(p.id)}
              >
                <span className="text-xs font-semibold text-black">{p.label}</span>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-bold uppercase ${
                      isChecked ? 'text-[#D4AF37]' : 'text-[#444748]/30'
                    }`}
                  >
                    {p.levelLabel}
                  </span>
                  <div
                    className={`w-10 h-5 rounded-full relative transition-all cursor-pointer ${
                      isChecked ? 'bg-[#D4AF37]' : 'bg-[#e3e2e2]'
                    }`}
                  >
                    <div
                      className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition-all shadow-sm ${
                        isChecked ? 'left-5' : 'left-0.5'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Approval Workflow Timeline */}
      <div className="bg-[#f4f3f3]/50 rounded-2xl p-8 border border-[#c4c7c7]/10">
        <h3 className="font-serif text-base font-semibold text-black mb-8">
          Access Approval Journey
        </h3>
        <div className="flex items-center justify-between relative px-4">
          {/* Connector Line */}
          <div className="absolute top-5 left-10 right-10 h-px bg-[#c4c7c7]/30 z-0" />

          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
              01
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-black">Request</p>
          </div>

          <div className="flex flex-col items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
              02
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-black">Review</p>
          </div>

          <div className="flex flex-col items-center gap-3 relative z-10 scale-110">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-xs border-4 border-white shadow-lg">
              <span className="material-symbols-outlined text-lg">hourglass_empty</span>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]">
              Approving
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 relative z-10 opacity-40">
            <div className="w-10 h-10 rounded-full bg-[#c4c7c7] flex items-center justify-center text-white text-xs font-bold">
              04
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-black">Publish</p>
          </div>
        </div>
      </div>
    </section>
  );
};
