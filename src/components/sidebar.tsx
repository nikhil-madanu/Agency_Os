"use client";

import { 
  ChevronDown, LayoutDashboard, FolderKanban, Building2, Users2, 
  FileText, FileSignature, UserCircle2, BarChart3, 
  Settings, Bell, HelpCircle, LogOut, Crown,
  PanelLeftClose, PanelLeftOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as Tooltip from '@radix-ui/react-tooltip';
import React from "react";

const mainNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#", active: true },
  { icon: FolderKanban, label: "Projects", href: "#" },
  { icon: Building2, label: "Clients", href: "#" },
  { icon: Users2, label: "Team", href: "#" },
  { icon: FileText, label: "Invoices", href: "#" },
  { icon: FileSignature, label: "Contracts", href: "#" },
  { icon: UserCircle2, label: "HR", href: "#" },
  { icon: BarChart3, label: "Reports", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

function SidebarTooltip({ children, label, isCollapsed, align = "center" }: { children: React.ReactNode, label: React.ReactNode, isCollapsed: boolean, align?: "start" | "center" | "end" }) {
  if (!isCollapsed) return <>{children}</>;
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content side="right" align={align} sideOffset={14} className="px-3 py-1.5 bg-slate-800 text-white text-[13px] font-semibold rounded-lg z-[100] whitespace-nowrap shadow-xl animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95">
          {label}
          <Tooltip.Arrow className="fill-slate-800" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export function Sidebar({ activeView, onNavigate, isCollapsed = false, onToggle }: SidebarProps) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <aside className={cn(
        "hidden lg:flex fixed left-2 top-3 bottom-3 z-40 bg-white flex-col py-[clamp(12px,2vh,24px)] overflow-visible rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[80px] px-2 xl:px-3" : "w-[260px] px-3 xl:px-5"
      )}>
        <div className="flex flex-col flex-1 min-h-0 relative">
          
          {/* Toggle Button */}
          {onToggle && (
            <button 
              onClick={onToggle}
              className="absolute -right-6 xl:-right-8 top-3 p-2 bg-white border border-slate-200 text-slate-500 hover:text-[#2563EB] rounded-full shadow-md z-50 hover:bg-slate-50 transition-all duration-300 group"
            >
              {isCollapsed ? (
                <PanelLeftOpen className="w-5 h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform" />
              ) : (
                <PanelLeftClose className="w-5 h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform" />
              )}
            </button>
          )}

          {/* Logo Section */}
          <div className={cn("flex items-center mb-1 xl:mb-6 transition-all", isCollapsed ? "justify-center mt-2 xl:mt-6 px-0" : "gap-3 px-1 xl:px-2")}>
            <div className={cn("flex flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 shadow-sm border border-blue-100/50", isCollapsed ? "h-[36px] w-[36px]" : "h-[36px] w-[36px] xl:h-[46px] xl:w-[46px]")}>
              <img 
                src="/agency-os-logo.png" 
                alt="Agency OS Logo" 
                className="w-[85%] h-[85%] object-contain drop-shadow-sm" 
              />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col justify-center overflow-hidden">
                <h1 className="font-extrabold text-[20px] tracking-tight leading-none text-slate-900 truncate">Agency OS</h1>
                <p className="text-[12.5px] font-medium text-slate-500 mt-0.5 tracking-tight truncate">Admin Portal</p>
              </div>
            )}
          </div>

          {/* Growth Plan Dropdown */}
          <SidebarTooltip label="Growth Plan" isCollapsed={isCollapsed}>
            <button className={cn("group relative flex items-center justify-between w-full bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/80 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all duration-300 ease-out", isCollapsed ? "p-1.5 xl:p-3 mb-1 xl:mb-4 justify-center" : "px-3 xl:px-4 py-1.5 xl:py-3.5 mb-1 xl:mb-5")}>
              <div className={cn("flex items-center gap-2 font-bold text-blue-600", isCollapsed ? "text-[0px]" : "text-[13px] xl:text-[14px]")}>
                <Crown className="h-4 w-4 xl:h-4.5 xl:w-4.5 text-blue-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" strokeWidth={2.5} />
                {!isCollapsed && <span className="tracking-tight">Growth Plan</span>}
              </div>
              {!isCollapsed && <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0" strokeWidth={2.5} />}
            </button>
          </SidebarTooltip>

          {/* User Profile Snippet */}
          <SidebarTooltip label={<div className="flex flex-col"><span>Arjun Mehta</span><span className="text-[11px] text-slate-300 font-normal">Administrator</span></div>} isCollapsed={isCollapsed}>
            <div className={cn("group relative flex items-center hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100", isCollapsed ? "justify-center p-1.5 mb-1 xl:mb-5 rounded-xl" : "gap-2 px-2 mb-1 xl:mb-6 p-1 xl:p-2.5 rounded-2xl")}>
              <img 
                src="https://i.pravatar.cc/150?img=11" 
                alt="Arjun Mehta" 
                className={cn("rounded-full object-cover ring-2 ring-white shadow-sm flex-shrink-0", isCollapsed ? "w-[32px] h-[32px]" : "w-[34px] h-[34px] xl:w-[40px] xl:h-[40px]")} 
              />
              {!isCollapsed && (
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[14.5px] font-bold text-slate-900 tracking-tight leading-tight truncate">Arjun Mehta</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[12px] font-medium text-slate-500 truncate">Administrator</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] flex-shrink-0"></span>
                  </div>
                </div>
              )}
            </div>
          </SidebarTooltip>

          {/* Main Navigation */}
          <nav className={cn("flex flex-col flex-1 mt-2 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300", isCollapsed ? "gap-[clamp(8px,2vh,24px)] 2xl:gap-[clamp(12px,3.5vh,64px)]" : "gap-[clamp(2px,1vh,12px)]")}>
            {mainNavItems.map((item) => (
              <SidebarTooltip key={item.label} label={item.label} isCollapsed={isCollapsed}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.label);
                  }}
                  className={cn(
                    "group relative flex items-center transition-all duration-200 outline-none",
                    isCollapsed ? "justify-center p-2 xl:p-3 rounded-xl" : "gap-3 px-3 py-2 xl:py-3.5 rounded-xl mx-1",
                    activeView === item.label 
                      ? "bg-[#EFF6FF] text-[#2563EB] font-bold" 
                      : "text-[#64748B] font-medium hover:bg-slate-50 hover:text-[#0F172A]"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "transition-transform duration-200 flex-shrink-0", 
                      isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px] xl:h-[19px] xl:w-[19px]",
                      activeView === item.label ? "text-[#2563EB]" : "text-slate-400 group-hover:text-[#0F172A]"
                    )} 
                    strokeWidth={activeView === item.label ? 2.5 : 2} 
                  />
                  {!isCollapsed && <span className="tracking-tight text-[14px] xl:text-[14.5px]">{item.label}</span>}
                </a>
              </SidebarTooltip>
            ))}
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className={cn("border-t border-slate-100/80 pt-[clamp(8px,2vh,12px)] mt-auto flex flex-col relative z-50 bg-white", isCollapsed ? "gap-[clamp(8px,2vh,24px)] 2xl:gap-[clamp(8px,3vh,32px)]" : "gap-[clamp(2px,1vh,8px)]")}>
          <SidebarTooltip label="Notifications" isCollapsed={isCollapsed}>
            <a href="#" className={cn("group relative flex items-center font-medium text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A] transition-all duration-200", isCollapsed ? "justify-center p-2 xl:p-3 rounded-xl mx-1 relative" : "justify-between px-3 py-2 xl:py-3 mx-1 rounded-xl text-[14px] xl:text-[14.5px]")}>
              <div className={cn("flex items-center", isCollapsed ? "justify-center" : "gap-3")}>
                <Bell className={cn("text-slate-400 group-hover:text-[#0F172A] transition-colors duration-200 flex-shrink-0", isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px]")} strokeWidth={2} />
                {!isCollapsed && <span className="tracking-tight">Notifications</span>}
              </div>
              {isCollapsed ? (
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#2563EB] rounded-full ring-2 ring-white"></span>
              ) : (
                <span className="bg-[#2563EB] text-white text-[11px] px-2 py-0.5 rounded-full font-bold shadow-sm">12</span>
              )}
            </a>
          </SidebarTooltip>
          <SidebarTooltip label="Help & Support" isCollapsed={isCollapsed}>
            <a href="#" className={cn("group relative flex items-center font-medium text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A] transition-all duration-200", isCollapsed ? "justify-center p-2 xl:p-3 rounded-xl mx-1" : "gap-3 px-3 py-2 xl:py-3 mx-1 rounded-xl text-[14px] xl:text-[14.5px]")}>
              <HelpCircle className={cn("text-slate-400 group-hover:text-[#0F172A] transition-colors duration-200 flex-shrink-0", isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px]")} strokeWidth={2} />
              {!isCollapsed && <span className="tracking-tight">Help & Support</span>}
            </a>
          </SidebarTooltip>
          <SidebarTooltip label="Logout" isCollapsed={isCollapsed}>
            <button className={cn("group relative flex items-center font-medium text-[#64748B] hover:bg-red-50 hover:text-red-700 transition-all duration-200 text-left w-[calc(100%-8px)] mx-1", isCollapsed ? "justify-center p-2 xl:p-3 rounded-xl" : "gap-3 px-3 py-2 xl:py-3 rounded-xl text-[14px] xl:text-[14.5px]")}>
              <LogOut className={cn("text-slate-400 group-hover:text-red-500 transition-colors duration-200 flex-shrink-0", isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px]")} strokeWidth={2} />
              {!isCollapsed && <span className="tracking-tight">Logout</span>}
            </button>
          </SidebarTooltip>
        </div>
      </aside>
    </Tooltip.Provider>
  );
}
