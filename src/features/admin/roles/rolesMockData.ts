export interface StaffMember {
  id: string;
  name: string;
  department: string;
  role: string;
  avatar: string;
  statusText: string;
  isOnline?: boolean;
  isActive?: boolean;
  workspaceSince: string;
  accessLevel: string;
}

export interface PermissionItem {
  id: string;
  label: string;
  levelLabel: string;
  isChecked: boolean;
}

export interface AuditEventItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'gold' | 'error' | 'neutral';
}

export interface RolesState {
  activeStaffId: string;
  activeDeptFilter: 'All' | 'Marketing' | 'Atelier' | 'Security';
  permissions: Record<string, boolean>;
}

export const INITIAL_STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'stf-1',
    name: 'Elena Valerius',
    department: 'Couture',
    role: 'Head of Couture',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdTTQ4lvX2v0Tf-bumBfJ3Rb6PGimSQ8MCrj1BXT6QLvqXuaN_bMPINY6SqobacmklroDc6aU8hhic8q9T4IWRI212QU_ACZlUEP1SMoNwSwlLzB7mmoBKwbP15abRmp1136sBoDq6UC-nXdyZ2S4t9u-rOQ4yT6hzZhvyCrik2j2X-B-NtVG4168qe7It1TicuknvPeTJtW1kaZaR6wQbpAiXQeqfzjCAjlu7Bw0GN9ywKXzktczkOWayvmtkj3l9Upd1hl1LGEcY',
    statusText: 'Active Now',
    isOnline: true,
    isActive: true,
    workspaceSince: 'Oct 2021',
    accessLevel: 'Tier 1 Administrator',
  },
  {
    id: 'stf-2',
    name: 'Marcus Thorne',
    department: 'Inventory',
    role: 'Global Inventory',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGyqnBZxnmE3ie7Ib5uVQTlHZ_R4pf4IQjIzyrauwDx_1m3QZdElO-Bi7IbC3xpTaOQill4h-Bn-ww6tjKIP0GWj5hTwYWPKv6o3NnUgNMwRwVCIlbJ27xfPiticfz9r44dsMBZkxhjTKalKGbXc1oXDVEqtTBdNPwk38gbHHwDw2yK0SCGCvzau9jqJrYU5E8b_1L09Tt2Q42sfd6oaRwTEEcSWF7M1su-0rHwLTK6QzF5J3ObZEO9-VgBenNz6P4lgJD3_HDakRf',
    statusText: '2h ago',
    isOnline: false,
    isActive: false,
    workspaceSince: 'Jan 2022',
    accessLevel: 'Tier 2 Specialist',
  },
  {
    id: 'stf-3',
    name: 'Sophia Chen',
    department: 'Security',
    role: 'Lead Developer',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmo3zwYMO_egl-FED-F5VwtuLg6O8SE9wsZU_kZ2yI0iRQUMoRfFQx1Ij4kqGpr543vicPsoF393NbJ7bfrYiRwLqhZtov4A-dpcoFku06FossXCBdXoq6MmQsxoBocho6BgLuLNVrBIbYGP7GkkDwzlKAkdoRqjAgOC10p2qdvTAMPq9OjZvoIhkL16uIJCqgUzmisDas9iv5TWoJq4SV2_-zU_AZGtVLo49Y5nyWWp5QGgQ2tl0q40CYc2UPY3vQX2jx4uJSHat',
    statusText: 'Yesterday',
    isOnline: false,
    isActive: false,
    workspaceSince: 'Mar 2020',
    accessLevel: 'System Architect',
  },
  {
    id: 'stf-4',
    name: 'Arthur Saint-Clair',
    department: 'Marketing',
    role: 'Finance Principal',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFZgXMwIK2m-zSz0IOfFiUR_dDyr5rGS2qQ2R586ywOOaZRY3qxPeu80hv6QY09BFparI63JY0JgLdyGYk5O0ikkDrldo0dkSUjQoVcfWa9FzSqwMzKk6c97tJPTED21czYPYX9K34nSeUKDjYbtBn97lZEYQCgpyP-t1Ifd3NycCk36truWzhts2kh4KqLEW161bNCs4lQgQNGx1ovxlaVgKjjV_s6IPJzBm4qkIy3PK6xrI53pzbpKQMNAkNQPI9l8_Q-HR9nAj3',
    statusText: 'Active Now',
    isOnline: true,
    isActive: false,
    workspaceSince: 'Nov 2019',
    accessLevel: 'Executive Officer',
  },
];

export const INITIAL_PERMISSIONS: PermissionItem[] = [
  { id: 'prm-cms', label: 'CMS & Lookbooks', levelLabel: 'Full', isChecked: true },
  { id: 'prm-inv', label: 'Product Inventory', levelLabel: 'Write', isChecked: true },
  { id: 'prm-ord', label: 'Order Management', levelLabel: 'Read', isChecked: false },
  { id: 'prm-mkt', label: 'Marketing & CRM', levelLabel: 'Approve', isChecked: true },
  { id: 'prm-fin', label: 'Financial Analytics', levelLabel: 'None', isChecked: false },
  { id: 'prm-api', label: 'API Integrations', levelLabel: 'Publish', isChecked: false },
];

export const RECENT_AUDIT_EVENTS: AuditEventItem[] = [
  {
    id: 'aud-1',
    title: 'Permission Escalation',
    description: "Sophia C. granted 'Publish' rights to API integrations.",
    timestamp: '12:04 PM • Admin Action',
    type: 'gold',
  },
  {
    id: 'aud-2',
    title: 'Failed Login Attempt',
    description: "IP 192.168.1.104 attempted login for 'Elena V.'",
    timestamp: '09:15 AM • Security Alert',
    type: 'error',
  },
  {
    id: 'aud-3',
    title: 'Session Renewed',
    description: 'Marcus Thorne refreshed enterprise session token.',
    timestamp: '08:30 AM • System Log',
    type: 'neutral',
  },
];

export const INITIAL_ROLES_STATE: RolesState = {
  activeStaffId: 'stf-1',
  activeDeptFilter: 'All',
  permissions: {
    'prm-cms': true,
    'prm-inv': true,
    'prm-ord': false,
    'prm-mkt': true,
    'prm-fin': false,
    'prm-api': false,
  },
};
