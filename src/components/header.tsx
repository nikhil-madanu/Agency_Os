import { Search, Gift, Bell, ChevronDown, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between lg:justify-end w-full gap-4 lg:gap-14 mb-3 z-20 relative">
      {/* Mobile Menu Button */}
      <button className="lg:hidden w-11 h-11 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm hover:bg-gray-50 transition-colors">
        <Menu className="w-5 h-5" strokeWidth={2} />
      </button>

      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-[14px] w-full max-w-[480px] shadow-sm">
        <Search className="w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search projects, clients, invoices..." 
          className="bg-transparent border-none outline-none w-full text-[14px] text-agency-textPrimary placeholder:text-gray-400"
        />
        <div className="flex items-center justify-center bg-[#F3F5F9] rounded-[6px] text-[12px] font-bold text-[#8FA0B4] px-2 py-1">
          ⌘K
        </div>
      </div>

      {/* Right Action Circles */}
      <div className="flex items-center gap-3">
        <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm hover:bg-gray-50 transition-colors">
          <Gift className="w-5 h-5" strokeWidth={2} />
        </button>
        <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
          <div className="relative">
            <Bell className="w-[22px] h-[22px] text-[#2B3674]" strokeWidth={1.8} />
            <div className="absolute -top-[8px] -right-[7px] w-[18px] h-[18px] bg-agency-blue rounded-full flex items-center justify-center text-[10px] text-white font-bold tracking-tighter">
              12
            </div>
          </div>
        </button>
        <button className="flex items-center gap-2.5 rounded-full hover:bg-white/40 transition-colors ml-1 p-1 pr-2">
          <img src="https://i.pravatar.cc/150?img=11" alt="Arjun Mehta" className="w-11 h-11 rounded-full object-cover" />
          <ChevronDown className="w-4 h-4 text-[#2B3674]" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}
