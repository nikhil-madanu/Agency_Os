"use client";

import { 
  ChevronDown, LayoutDashboard, FolderKanban, Building2, Users2, 
  FileText, FileSignature, UserCircle2, BarChart3, 
  Settings, Bell, HelpCircle, LogOut, Crown,
  PanelLeftClose, PanelLeftOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

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

export function Sidebar({ activeView, onNavigate, isCollapsed = false, onToggle }: SidebarProps) {
  return (
    <aside className={cn(
      "hidden lg:flex fixed left-2 top-3 bottom-3 z-40 bg-white flex-col py-3 xl:py-5 overflow-visible rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 transition-all duration-300 ease-in-out",
      isCollapsed ? "w-[80px] px-2 xl:px-3" : "w-[230px] xl:w-[280px] px-3 xl:px-5"
    )}>
      <div className="flex flex-col flex-1 min-h-0 relative">
        
        {/* Toggle Button */}
        {onToggle && (
          <button 
            onClick={onToggle}
            className="absolute -right-6 xl:-right-8 top-3 p-2 bg-white border border-slate-200 text-slate-500 hover:text-blue-600 rounded-full shadow-md z-50 hover:bg-slate-50 transition-all duration-300 group"
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-5 h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform" />
            ) : (
              <PanelLeftClose className="w-5 h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-transform" />
            )}
          </button>
        )}

        {/* Logo Section */}
        <div className={cn("flex items-center mb-3 transition-all", isCollapsed ? "justify-center mt-3 px-0" : "gap-3 px-1 xl:px-2")}>
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
        <button className={cn("group relative flex items-center justify-between w-full bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/80 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all duration-300 ease-out", isCollapsed ? "p-1.5 mb-3 justify-center" : "px-3 xl:px-4 py-2 mb-3")}>
          <div className={cn("flex items-center gap-2 font-bold text-blue-600", isCollapsed ? "text-[0px]" : "text-[13px] xl:text-[14px]")}>
            <Crown className="h-4 w-4 xl:h-4.5 xl:w-4.5 text-blue-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" strokeWidth={2.5} />
            {!isCollapsed && <span className="tracking-tight">Growth Plan</span>}
          </div>
          {!isCollapsed && <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0" strokeWidth={2.5} />}
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-[13px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
              Growth Plan
              <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
          )}
        </button>

        {/* User Profile Snippet */}
        <div className={cn("group relative flex items-center hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100", isCollapsed ? "justify-center p-1.5 mb-2 rounded-xl" : "gap-2 px-2 mb-2 p-1.5 rounded-2xl")}>
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Arjun Mehta" 
            className={cn("rounded-full object-cover ring-2 ring-white shadow-sm flex-shrink-0", isCollapsed ? "w-[32px] h-[32px]" : "w-[34px] h-[34px] xl:w-[42px] xl:h-[42px]")} 
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
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-[13px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
              <div className="flex flex-col">
                <span>Arjun Mehta</span>
                <span className="text-[11px] text-slate-300 font-normal">Administrator</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className={cn("flex flex-col flex-1 mt-0 pb-2", isCollapsed ? "overflow-visible gap-2" : "overflow-y-auto gap-0.5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full")}>
          {mainNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.label);
              }}
              className={cn(
                "group relative flex items-center transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                isCollapsed ? "justify-center p-2 rounded-xl" : "gap-3 px-3 xl:px-4 py-2 rounded-2xl",
                activeView === item.label 
                  ? "bg-gradient-to-r from-blue-50/80 to-indigo-50/30 text-blue-700 font-bold border border-blue-100/60 shadow-[0_2px_12px_-4px_rgba(59,130,246,0.15)]" 
                  : "text-slate-500 font-medium hover:bg-slate-50 hover:text-slate-900 border border-transparent"
              )}
            >
              <item.icon 
                className={cn(
                  "transition-transform duration-300 flex-shrink-0", 
                  isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]",
                  activeView === item.label ? "text-blue-600 scale-105" : "text-slate-400 group-hover:text-slate-700 group-hover:scale-105"
                )} 
                strokeWidth={activeView === item.label ? 2.5 : 2} 
              />
              {!isCollapsed && <span className="tracking-tight text-[13.5px] xl:text-[14.5px]">{item.label}</span>}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-[13px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
                  {item.label}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-slate-100/80 pt-3 mt-auto flex flex-col gap-1 relative z-50">
        <a href="#" className={cn("group relative flex items-center font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-transparent transition-all duration-300", isCollapsed ? "justify-center p-2 rounded-xl relative" : "justify-between px-3 xl:px-4 py-2 rounded-2xl text-[13.5px] xl:text-[14.5px]")}>
          <div className={cn("flex items-center", isCollapsed ? "justify-center" : "gap-3")}>
            <Bell className={cn("text-slate-400 group-hover:text-slate-700 group-hover:scale-105 transition-all duration-300 flex-shrink-0", isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]")} strokeWidth={2} />
            {!isCollapsed && <span className="tracking-tight">Notifications</span>}
          </div>
          {isCollapsed ? (
            <>
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-white"></span>
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-[13px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
                Notifications
                <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-slate-800 rotate-45"></div>
              </div>
            </>
          ) : (
            <span className="bg-blue-500 text-white text-[11px] px-2 py-0.5 rounded-full font-bold shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">12</span>
          )}
        </a>
        <a href="#" className={cn("group relative flex items-center font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-transparent transition-all duration-300", isCollapsed ? "justify-center p-2 rounded-xl" : "gap-3 px-3 xl:px-4 py-2 rounded-2xl text-[13.5px] xl:text-[14.5px]")}>
          <HelpCircle className={cn("text-slate-400 group-hover:text-slate-700 group-hover:scale-105 transition-all duration-300 flex-shrink-0", isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]")} strokeWidth={2} />
          {!isCollapsed && <span className="tracking-tight">Help & Support</span>}
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-800 text-white text-[13px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
              Help & Support
              <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
          )}
        </a>
        <button className={cn("group relative flex items-center font-medium text-slate-500 hover:bg-red-50 hover:text-red-700 border border-transparent transition-all duration-300 text-left w-full", isCollapsed ? "justify-center p-2 rounded-xl" : "gap-3 px-3 xl:px-4 py-2 rounded-2xl text-[13.5px] xl:text-[14.5px]")}>
          <LogOut className={cn("text-slate-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0", isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px] xl:h-[20px] xl:w-[20px]")} strokeWidth={2} />
          {!isCollapsed && <span className="tracking-tight">Logout</span>}
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-red-600 text-white text-[13px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-nowrap shadow-lg">
              Logout
              <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-red-600 rotate-45"></div>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
