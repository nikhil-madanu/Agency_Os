"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CustomCrownIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.51.29l2.827-2.115a.5.5 0 0 1 .78.53l-2.22 11.1a1 1 0 0 1-.98.805H6.693a1 1 0 0 1-.98-.805l-2.22-11.1a.5.5 0 0 1 .78-.53l2.827 2.114a1 1 0 0 0 1.51-.29l2.952-5.596z" />
  </svg>
);

const CustomHomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c1.1 0 2-.9 2-2V9.37c0-.66-.34-1.28-.9-1.65l-6-4.04c-.66-.44-1.54-.44-2.2 0l-6 4.04c-.56.37-.9.99-.9 1.65V18c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1z"/>
  </svg>
);

const CustomFolderIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    <path d="M12 10v5" />
  </svg>
);

const CustomUserIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CustomUsersIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CustomInvoiceIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 9h6M9 13h6M9 17h4" />
  </svg>
);

const CustomContractIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 3v4a2 2 0 0 0 2 2h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v13a2 2 0 0 1-2 2z" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

const CustomHRIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Back User Filled */}
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="7" r="3.5" fill="currentColor" stroke="none" />
    {/* Front User Outline */}
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const CustomReportsIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Stepped bounding box */}
    <path d="M4 18V10a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    {/* Inner bars and arrow */}
    <path d="M7.5 15v-2 M15 15v-5l-1.5 1.5 M15 10l1.5 1.5" />
  </svg>
);

const CustomSettingsIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CustomBellIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const CustomHelpIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const CustomLogoutIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const mainNavItems = [
  { icon: CustomHomeIcon, label: "Dashboard", href: "#", active: true },
  { icon: CustomFolderIcon, label: "Projects", href: "#" },
  { icon: CustomUserIcon, label: "Clients", href: "#" },
  { icon: CustomUsersIcon, label: "Team", href: "#" },
  { icon: CustomInvoiceIcon, label: "Invoices", href: "#" },
  { icon: CustomContractIcon, label: "Contracts", href: "#" },
  { icon: CustomHRIcon, label: "HR", href: "#" },
  { icon: CustomReportsIcon, label: "Reports", href: "#" },
  { icon: CustomSettingsIcon, label: "Settings", href: "#" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-2 top-3 bottom-3 z-40 w-[230px] bg-white flex-col py-5 px-5 overflow-hidden rounded-[32px] shadow-sm">
      <div className="flex flex-col flex-1">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-5 px-2">
          {/* Custom Logo Icon matching the Agency OS shapes */}
          <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-agency-blue/10">
            <img 
              src="/agency-os-logo.png" 
              alt="Agency OS Logo" 
              className="w-[95%] h-[95%] object-contain" 
              style={{ filter: "drop-shadow(0px 0px 1px #2563EB) drop-shadow(0px 0px 0.5px #2563EB)" }}
            />
          </div>
          <div>
            <h1 className="font-bold text-[20px] tracking-tight leading-none text-agency-textPrimary">Agency OS</h1>
            <p className="text-[13px] text-agency-textSecondary mt-0.5">Admin Portal</p>
          </div>
        </div>

        {/* Growth Plan Dropdown */}
        <button className="flex items-center justify-between w-full px-4 py-2.5 mb-5 border border-agency-border rounded-xl hover:bg-agency-bg transition-colors">
          <div className="flex items-center gap-2.5 text-[14px] font-bold text-agency-blue">
            <CustomCrownIcon className="h-4 w-4" strokeWidth={2.5} />
            <span>Growth Plan</span>
          </div>
          <ChevronDown className="h-4 w-4 text-agency-textSecondary" strokeWidth={2} />
        </button>

        {/* User Profile Snippet */}
        <div className="flex items-center gap-3 px-2 mb-5">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Arjun Mehta" 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-agency-textPrimary">Arjun Mehta</span>
            <span className="text-[12px] text-agency-textSecondary mb-1">Administrator</span>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-agency-textSecondary">
              <span className="w-2 h-2 rounded-full bg-agency-green"></span>
              Online
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          {mainNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-2xl text-[14px] font-bold transition-all",
                item.active 
                  ? "bg-agency-blue/5 text-agency-blue" 
                  : "text-agency-textSecondary hover:bg-agency-bg hover:text-agency-textPrimary"
              )}
            >
              <item.icon className="h-5 w-5" strokeWidth={item.active ? 2.5 : 2} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-agency-border/50 pt-4 mt-auto flex flex-col gap-1">
        <a href="#" className="flex items-center justify-between px-4 py-2.5 rounded-2xl text-[14px] font-bold text-agency-textSecondary hover:bg-agency-bg hover:text-agency-textPrimary transition-all">
          <div className="flex items-center gap-3">
            <CustomBellIcon className="h-5 w-5" strokeWidth={2} />
            <span>Notifications</span>
          </div>
          <span className="bg-agency-blue text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">12</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-[14px] font-bold text-agency-textSecondary hover:bg-agency-bg hover:text-agency-textPrimary transition-all">
          <CustomHelpIcon className="h-5 w-5" strokeWidth={2} />
          <span>Help & Support</span>
        </a>
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-[14px] font-bold text-agency-textSecondary hover:bg-agency-bg hover:text-agency-textPrimary transition-all text-left">
          <CustomLogoutIcon className="h-5 w-5" strokeWidth={2} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
