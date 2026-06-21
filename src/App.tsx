import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { 
  Folder, Users, FileText, Plus, CalendarDays,
  RefreshCw, ArrowUpRight, Sparkles, Settings, Send, ChevronDown, ChevronsUpDown, RotateCw, ArrowUp
} from "lucide-react";

const CustomRevenueIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[22px] h-[22px] ${className || ''}`}>
    <div className="w-3 h-4 bg-current rounded-[3px] absolute bottom-0 left-0" />
    <div className="w-2.5 h-2.5 bg-[#d4ebd8] rounded-full absolute top-0 right-1" />
    <div className="w-[9px] h-[9px] bg-current rounded-[2px] rotate-45 absolute bottom-0.5 right-0" />
  </div>
);

const CustomPaymentIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[18px] h-[18px] ${className || ''}`}>
    <div className="absolute top-0 left-0 w-[11px] h-[11px] bg-current rounded-full" />
    <div className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-current rounded-full" />
    <div className="absolute bottom-0 left-[2px] w-[7px] h-[7px] bg-current rounded-sm rotate-45" />
  </div>
);

const CustomStatementIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[16px] h-[15px] flex flex-col justify-between ${className || ''}`}>
    <div className="w-full h-[5px] bg-current rounded-[2px]" />
    <div className="w-full h-[8px] bg-current rounded-[2px] flex justify-center">
      <div className="w-2 h-1.5 bg-white rounded-b-[1px]" />
    </div>
  </div>
);

const CustomDiscrepanciesIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[18px] h-[18px] bg-current rounded-[4px] flex items-center justify-center ${className || ''}`}>
    <div className="absolute w-2 h-[1.5px] bg-white rotate-45 rounded-full" />
    <div className="absolute w-2 h-[1.5px] bg-white -rotate-45 rounded-full" />
  </div>
);

const CustomColumnsIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[16px] h-[16px] bg-current rounded-[4px] flex items-center justify-center gap-[1.5px] ${className || ''}`}>
    <div className="w-[3.5px] h-[8px] bg-white rounded-[1px]" />
    <div className="w-[3.5px] h-[8px] border-[1.5px] border-white rounded-[1px]" />
  </div>
);

const CustomUsageIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[16px] h-[16px] flex items-center justify-center ${className || ''}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current">
      <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8H8V0Z" fill="currentColor"/>
      <circle cx="8" cy="8" r="2" fill="white"/>
    </svg>
  </div>
);

export default function App() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-[238px] px-3 lg:pr-3 lg:pl-0 pt-3 pb-4 min-h-screen lg:h-screen overflow-x-hidden lg:overflow-hidden flex flex-col">
        <div className="w-full flex-1 relative flex flex-col -mt-3">
          
          {/* TOP BACKGROUND IMAGE BANNER */}
      <div 
        className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[600px] -ml-[12px] z-0 pointer-events-none flex justify-center"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}
      >
        {/* Pure White Underglow for the Hump */}
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[240px] h-[120px] bg-white blur-xl rounded-full z-[-1]" />
        
        <img 
          src="/background-graphic-v2.png" 
          alt="Dashboard Background" 
          className="w-full h-auto object-contain object-top mix-blend-multiply relative z-0" 
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col w-full h-full pt-4 pl-2 pr-0">
        <Header />
        
        {/* Top Greeting & Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-2 z-20 relative px-2 gap-4 lg:gap-0">
          <div className="ml-2 lg:ml-10">
            <h1 className="text-[28px] lg:text-[34px] font-bold text-agency-textPrimary leading-tight tracking-tight">Good morning, Arjun! 👋</h1>
            <p className="text-gray-500 text-[14px] lg:text-[15px] mt-1.5 font-medium">Here's what's happening with your agency today.</p>
            <div className="flex items-center gap-2 text-gray-500 text-[13px] mt-4 lg:mt-6 font-semibold">
              <CalendarDays className="w-4 h-4" />
              <span>Thursday, 15 May 2025</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 lg:gap-3 mb-2 lg:mb-6">
            <button className="flex items-center gap-2 bg-white/80 backdrop-blur hover:bg-white text-agency-textPrimary px-4 py-3 rounded-[14px] font-semibold text-[13px] transition-colors shadow-sm border border-white">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 text-white" />
              </div>
              New Project
            </button>
            <button className="flex items-center gap-2 bg-white/80 backdrop-blur hover:bg-white text-agency-textPrimary px-4 py-3 rounded-[14px] font-semibold text-[13px] transition-colors shadow-sm border border-white">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 text-white" />
              </div>
              Add Client
            </button>
            <button className="flex items-center gap-2 bg-white/80 backdrop-blur hover:bg-white text-agency-textPrimary px-4 py-3 rounded-[14px] font-semibold text-[13px] transition-colors shadow-sm border border-white">
              <FileText className="w-4 h-4 text-agency-blue" strokeWidth={2.5} />
              Create Invoice
            </button>
          </div>
        </div>

        <div className="relative w-full flex-1 flex flex-col mt-[100px] pb-0 min-h-0">
                  {/* BACKGROUND TABS (5-Column Grid) */}
          <div className="hidden lg:grid absolute -top-6 left-0 w-full px-5 grid-cols-[1.15fr_0.85fr_1.1fr_0.85fr_1.15fr] gap-2 z-0">
            <div className="h-[80px] bg-white/10 backdrop-blur-3xl rounded-t-[24px] shadow-sm px-5 py-4 flex items-center justify-between border border-white/20">
              <div className="flex items-center gap-3">
                <Folder className="w-5 h-5 text-[#8c9fc4]" fill="currentColor" strokeWidth={1} />
                <div className="flex flex-col justify-center mt-1">
                  <span className="text-[14px] font-bold text-[#2B3674] leading-none mb-1.5">Projects</span>
                  <span className="text-[12px] text-[#8c9fc4] font-medium leading-none">24 Active</span>
                </div>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center shadow-sm">
                <ChevronsUpDown className="w-3 h-3 text-[#8c9fc4]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Tab 2: Clients */}
            <div className="h-[80px] bg-white/10 backdrop-blur-3xl rounded-t-[24px] shadow-sm px-5 py-4 flex items-center gap-3 border border-white/20">
              <Users className="w-5 h-5 text-[#8c9fc4]" fill="currentColor" strokeWidth={1} />
              <div className="flex flex-col justify-center mt-1">
                <span className="text-[14px] font-bold text-[#2B3674] leading-none mb-1.5">Clients</span>
                <span className="text-[12px] text-[#8c9fc4] font-medium leading-none">36 Active</span>
              </div>
            </div>

            {/* Tab 3: Spacer for Hump */}
            <div className="h-[80px] pointer-events-none"></div>

            {/* Tab 4: Invoices */}
            <div className="h-[80px] bg-white/10 backdrop-blur-3xl rounded-t-[24px] shadow-sm px-5 py-4 flex items-center justify-between border border-white/20">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-white" fill="#8c9fc4" strokeWidth={1.5} />
                <div className="flex flex-col justify-center mt-1">
                  <span className="text-[14px] font-bold text-[#2B3674] leading-none mb-1.5">Invoices</span>
                  <span className="text-[12px] text-[#8c9fc4] font-medium leading-none">12 Overdue</span>
                </div>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center shadow-sm">
                <ChevronsUpDown className="w-3 h-3 text-[#8c9fc4]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Tab 5: Team */}
            <div className="h-[80px] bg-white/10 backdrop-blur-3xl rounded-t-[24px] shadow-sm px-5 py-4 flex items-center justify-between border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#8c9fc4]" fill="currentColor" strokeWidth={0} />
                <div className="flex flex-col justify-center mt-1">
                  <span className="text-[14px] font-bold text-[#2B3674] leading-none mb-1.5">Team</span>
                  <span className="text-[12px] text-[#8c9fc4] font-medium leading-none">28 Members</span>
                </div>
              </div>
              <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center shadow-sm">
                <ChevronsUpDown className="w-3 h-3 text-[#8c9fc4]" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* FOREGROUND LAYER (Massive White Panel) */}
          <div className="relative mt-[50px] z-10 w-full flex-1 bg-white rounded-[32px] shadow-none p-3 pt-2 flex flex-col min-h-0">
            
            {/* SOLID CSS HUMP (Perfectly integrated into the panel) */}
            <div className="hidden lg:block absolute -top-[142px] left-1/2 -translate-x-1/2 -ml-[2px] w-[238px] h-[142px] bg-white rounded-t-[40px]">
               {/* Left Inverted Curve */}
               <div className="absolute bottom-[0px] -left-[32px] w-[32px] h-[32px] pointer-events-none" style={{ borderBottomRightRadius: '32px', boxShadow: '16px 16px 0 16px white' }} />
               {/* Right Inverted Curve */}
               <div className="absolute bottom-[0px] -right-[32px] w-[32px] h-[32px] pointer-events-none" style={{ borderBottomLeftRadius: '32px', boxShadow: '-16px 16px 0 16px white' }} />

               {/* Total Revenue Content */}
               <div className="w-full pl-8 pr-4 pt-5 pb-5 flex flex-col">
                 <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <CustomRevenueIcon className="text-[#2B3674]" />
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#2B3674]">Total Revenue</span>
                        <span className="text-[11px] text-[#8c9fc4] flex items-center gap-1 font-semibold mt-0.5">May 2025 <ChevronDown className="w-3 h-3"/></span>
                      </div>
                    </div>
                    <RotateCw className="w-4 h-4 text-[#2B3674] cursor-pointer mt-2 mr-3" strokeWidth={2.5} />
                 </div>
                 <div className="mt-5 flex items-center gap-2.5 ml-2">
                   <span className="text-[26px] font-bold text-[#2B3674] tracking-tight leading-none">₹82.4K</span>
                   <div className="flex items-center gap-1">
                     <div className="w-[18px] h-[18px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                       <ArrowUp className="w-3 h-3 text-[#4caf50]" strokeWidth={3} />
                     </div>
                     <span className="text-[12px] font-bold text-[#4caf50]">
                       12.6%
                     </span>
                   </div>
                 </div>
                 <p className="text-[10px] text-[#8c9fc4] font-semibold mt-2 ml-3">vs April 2025 ₹73.1K</p>
               </div>
            </div>

            {/* INNER GRID */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 flex-1 min-h-0 relative z-20">
              
              {/* Mobile Only Revenue Card (Hidden on Desktop) */}
              <div className="block lg:hidden rounded-[24px] p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 bg-white w-full">
                 <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <CustomRevenueIcon className="text-[#2B3674]" />
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#2B3674]">Total Revenue</span>
                        <span className="text-[11px] text-[#8c9fc4] flex items-center gap-1 font-semibold mt-0.5">May 2025 <ChevronDown className="w-3 h-3"/></span>
                      </div>
                    </div>
                    <RotateCw className="w-4 h-4 text-[#2B3674] cursor-pointer mt-2 mr-3" strokeWidth={2.5} />
                 </div>
                 <div className="mt-5 flex items-center gap-2.5 ml-2">
                   <span className="text-[26px] font-bold text-[#2B3674] tracking-tight leading-none">₹82.4K</span>
                   <div className="flex items-center gap-1">
                     <div className="w-[18px] h-[18px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                       <ArrowUp className="w-3 h-3 text-[#4caf50]" strokeWidth={3} />
                     </div>
                     <span className="text-[12px] font-bold text-[#4caf50]">
                       12.6%
                     </span>
                   </div>
                 </div>
                 <p className="text-[10px] text-[#8c9fc4] font-semibold mt-2 ml-3">vs April 2025 ₹73.1K</p>
              </div>

              {/* Left Section (Matches width of Projects + Clients + Hump) */}
              <div className="flex flex-col gap-3 min-h-0 h-full w-full lg:w-[calc(57%+104px)]">
                
                {/* Top Row: 3 Square Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-none lg:flex-1 min-h-0">
                  
                  {/* Card 1: Payment */}
                  <div className="rounded-[24px] p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col relative overflow-hidden bg-white h-full">
                    <div className="flex justify-between items-start mb-0">
                      <div className="flex items-center gap-2.5">
                        <CustomPaymentIcon className="text-[#2B3674]" />
                        <span className="text-[13px] font-bold text-[#2B3674]">Payment</span>
                      </div>
                      <div className="w-[26px] h-[26px] rounded-full border border-gray-100 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#2B3674]" strokeWidth={2} />
                      </div>
                    </div>
                    <p className="text-[10px] text-[#8c9fc4] font-medium mb-3">Last transaction: April 7</p>
                    
                    <div className="flex items-center gap-2 mb-2 mt-1">
                      <span className="text-[24px] font-medium text-[#2B3674] tracking-tight leading-none">72,52%</span>
                      <div className="w-[14px] h-[14px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                        <ArrowUp className="w-2.5 h-2.5 text-[#4caf50]" strokeWidth={3} />
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-[10px] font-medium mb-2 mt-auto">
                      <span className="text-gray-500 font-semibold">Collected</span>
                      <span className="text-[#8c9fc4]">Pending Revenue</span>
                    </div>
                    
                    {/* Barcode Progress Bar */}
                    <div className="flex gap-[1.5px] items-end h-5 w-full mb-1">
                      {[...Array(45)].map((_, j) => {
                        const isGreen = j < 32; // ~72% of 45 is 32.4
                        return (
                          <div key={j} className={`flex-1 ${isGreen ? 'bg-[#4caf50]' : 'bg-[#e2e8f0]'}`} style={{ height: '100%' }} />
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-[9px] text-[#8c9fc4] font-semibold">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Card 2: Statement Overview */}
                  <div className="rounded-[24px] p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col relative overflow-hidden bg-white h-full">
                    <div className="flex justify-between items-start mb-0">
                      <div className="flex items-center gap-2.5">
                        <CustomStatementIcon className="text-[#2B3674]" />
                        <span className="text-[13px] font-bold text-[#2B3674]">Statement Overview</span>
                      </div>
                      <div className="w-[26px] h-[26px] rounded-full border border-gray-100 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#2B3674]" strokeWidth={2} />
                      </div>
                    </div>
                    <p className="text-[10px] text-[#8c9fc4] font-medium mb-3">Last statement: April 6</p>
                    
                    <div className="flex items-center gap-2 mb-2 mt-1">
                      <span className="text-[24px] font-medium text-[#2B3674] tracking-tight leading-none">61,23%</span>
                      <div className="w-[14px] h-[14px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                        <ArrowUp className="w-2.5 h-2.5 text-[#4caf50]" strokeWidth={3} />
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-[10px] font-medium mb-2 mt-auto">
                      <span className="text-gray-500 font-semibold">Reconciled</span>
                      <span className="text-[#8c9fc4]">Pending Review</span>
                    </div>
                    
                    {/* Barcode Progress Bar */}
                    <div className="flex gap-[1.5px] items-end h-5 w-full mb-1">
                      {[...Array(45)].map((_, j) => {
                        const isGreen = j < 28; // ~61% of 45 is 27.45
                        return (
                          <div key={j} className={`flex-1 ${isGreen ? 'bg-[#4caf50]' : 'bg-[#e2e8f0]'}`} style={{ height: '100%' }} />
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-[9px] text-[#8c9fc4] font-semibold">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Card 3: Discrepancies */}
                  <div className="rounded-[24px] p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col relative overflow-hidden bg-white h-full">
                    <div className="flex justify-between items-start mb-0">
                      <div className="flex items-center gap-2.5">
                        <CustomDiscrepanciesIcon className="text-[#2B3674]" />
                        <span className="text-[13px] font-bold text-[#2B3674]">Discrepancies</span>
                      </div>
                      <div className="w-[26px] h-[26px] rounded-full border border-gray-100 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#2B3674]" strokeWidth={2} />
                      </div>
                    </div>
                    <p className="text-[10px] text-[#8c9fc4] font-medium mb-3">Last exception: April 7</p>
                    
                    <div className="flex items-center gap-2 mb-2 mt-1">
                      <span className="text-[24px] font-medium text-[#2B3674] tracking-tight leading-none">13,78%</span>
                      <div className="w-[14px] h-[14px] rounded-full bg-red-50 flex items-center justify-center">
                        <ArrowUp className="w-2.5 h-2.5 text-red-500 rotate-180" strokeWidth={3} />
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-[10px] font-medium mb-2 mt-auto">
                      <span className="text-gray-500 font-semibold">Found</span>
                      <span className="text-[#8c9fc4]">Not Resolved</span>
                    </div>
                    
                    {/* Barcode Progress Bar */}
                    <div className="flex gap-[1.5px] items-end h-5 w-full mb-1">
                      {[...Array(45)].map((_, j) => {
                        const isRed = j < 6; // ~13.78% of 45 is ~6.2
                        return (
                          <div key={j} className={`flex-1 ${isRed ? 'bg-red-400' : 'bg-[#e2e8f0]'}`} style={{ height: '100%' }} />
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-[9px] text-[#8c9fc4] font-semibold">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Row: 2 Rectangular Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-none lg:flex-[1.1] min-h-0">
                  
                  {/* Bottom Card 1: On-Time Month Closures */}
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="rounded-[24px] p-4 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 w-[96%] h-[98%] flex flex-col bg-white relative overflow-hidden">
                      <div className="flex justify-between items-start mb-0">
                        <div className="flex items-center gap-2.5">
                          <CustomColumnsIcon className="text-[#2B3674]" />
                          <span className="text-[14px] font-bold text-[#2B3674] mt-0.5">On-Time Month Closures</span>
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full border border-gray-100 flex items-center justify-center">
                          <ArrowUpRight className="w-3 h-3 text-[#2B3674]" strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-[9px] text-[#8c9fc4] font-medium mb-2">Typical Account Metrics</p>
                      <div className="flex flex-col flex-1 min-h-0 w-full mt-1">
                        <div className="flex justify-between items-center w-full pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[24px] font-medium text-[#2B3674] tracking-tight leading-none">77,24%</span>
                            <div className="w-[12px] h-[12px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                              <ArrowUp className="w-2 h-2 text-[#4caf50]" strokeWidth={3} />
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">88</span>
                                <div className="w-[9px] h-[9px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                                   <div className="w-[3px] h-[1px] bg-[#4caf50] rounded-full" />
                                </div>
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Closed</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">19</span>
                                <div className="w-0 h-0 border-l-[2.5px] border-l-transparent border-r-[2.5px] border-r-transparent border-b-[4px] border-b-[#ff5252]" />
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Late</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">19/5</span>
                                <div className="w-[9px] h-[9px] border-[1.5px] border-amber-400 rounded-full" />
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Timely</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">84/0</span>
                                <ChevronsUpDown className="w-2 h-2 text-[#4caf50]" strokeWidth={3} />
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">On Time</p>
                            </div>
                          </div>
                        </div>

                        {/* Chart Area */}
                        <div className="flex gap-[2px] items-end flex-1 min-h-[40px] w-full mt-auto relative mb-1">
                          {[...Array(24)].map((_, j) => {
                             // Hardcoded heights based on the reference image
                             const heights = [10, 15, 25, 12, 18, 30, 45, 15, 20, 18, 25, 45, 55, 65, 85, 40, 15, 10, 5, 2, 8, 12, 22, 35];
                             const height = heights[j] || 20;
                             
                             // Add little floating indicator circles based on the image
                             const isRed = j === 6; 
                             const isGreenCircle1 = j === 2;
                             const isGreenCircle2 = j === 14;
                             
                             return (
                               <div key={j} className="relative w-[2.5px] flex items-end justify-center h-full">
                                  <div 
                                    className={`w-full rounded-t-[1px] opacity-60 ${isRed ? 'bg-[#ff5252]' : 'bg-[#4caf50]'}`} 
                                    style={{ height: `${height}%` }}
                                  />
                                  
                                  {isRed && (
                                     <div className="absolute top-[35%] w-[8px] h-[8px] bg-[#ff5252] rounded-full flex items-center justify-center border-[1.5px] border-white z-10">
                                       <ArrowUp className="w-[3px] h-[3px] text-white rotate-180" strokeWidth={4} />
                                     </div>
                                  )}
                                  {isGreenCircle1 && (
                                     <div className="absolute top-[65%] w-[8px] h-[8px] bg-[#4caf50] rounded-full flex items-center justify-center border-[1.5px] border-white z-10">
                                       <ArrowUp className="w-[3px] h-[3px] text-white" strokeWidth={4} />
                                     </div>
                                  )}
                                  {isGreenCircle2 && (
                                     <div className="absolute top-[5%] w-[8px] h-[8px] bg-[#4caf50] rounded-full flex items-center justify-center border-[1.5px] border-white z-10">
                                       <ArrowUp className="w-[3px] h-[3px] text-white" strokeWidth={4} />
                                     </div>
                                  )}
                               </div>
                             );
                          })}
                          {/* Dotted baseline for remaining space */}
                          <div className="flex-1 border-b-[2px] border-dotted border-gray-200 mb-[1px] ml-1" />
                        </div>
                        <div className="flex justify-between text-[8px] text-[#8c9fc4] font-semibold mt-1">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card 2: Usage Rate */}
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="rounded-[24px] p-4 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 w-[96%] h-[98%] flex flex-col bg-white">
                      <div className="flex justify-between items-start mb-0">
                        <div className="flex items-center gap-2.5">
                          <CustomUsageIcon className="text-[#2B3674]" />
                          <span className="text-[14px] font-bold text-[#2B3674] mt-0.5">Usage Rate</span>
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full border border-gray-100 flex items-center justify-center">
                          <ArrowUpRight className="w-3 h-3 text-[#2B3674]" strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-[9px] text-[#8c9fc4] font-medium mb-2">Typical Account Metrics</p>
                      <div className="flex flex-col flex-1 min-h-0 w-full mt-1">
                        <div className="flex justify-between items-center w-full pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[24px] font-medium text-[#2B3674] tracking-tight leading-none">46,36%</span>
                            <div className="w-[12px] h-[12px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                              <ArrowUp className="w-2 h-2 text-[#4caf50]" strokeWidth={3} />
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">56%</span>
                                <div className="w-[9px] h-[9px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                                   <div className="w-[3px] h-[1px] bg-[#4caf50] rounded-full" />
                                </div>
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Sync Success</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">11%</span>
                                <div className="w-0 h-0 border-l-[2.5px] border-l-transparent border-r-[2.5px] border-r-transparent border-b-[4px] border-b-[#ff5252]" />
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Auto Sync</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">32%</span>
                                <div className="w-[9px] h-[9px] border-[1.5px] border-amber-400 rounded-full" />
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Manual Upload</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[11px] font-semibold text-[#2B3674]">74%</span>
                                <div className="w-[9px] h-[9px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
                                   <div className="w-[3px] h-[1px] bg-[#4caf50] rounded-full" />
                                </div>
                              </div>
                              <p className="text-[8px] text-[#8c9fc4] font-medium leading-none">Reviewed</p>
                            </div>
                          </div>
                        </div>

                        {/* Chart Area */}
                        <div className="flex gap-[2px] items-end flex-1 min-h-[40px] w-full mt-auto relative mb-1">
                          {[...Array(24)].map((_, j) => {
                             const heights = [10, 15, 25, 12, 18, 30, 45, 15, 20, 18, 25, 45, 55, 65, 85, 40, 15, 10, 5, 2, 8, 12, 22, 35];
                             const height = heights[j] || 20;
                             
                             const isRed = j === 6; 
                             const isGreenCircle1 = j === 2;
                             const isGreenCircle2 = j === 14;
                             
                             return (
                               <div key={j} className="relative w-[2.5px] flex items-end justify-center h-full">
                                  <div 
                                    className={`w-full rounded-t-[1px] opacity-60 ${isRed ? 'bg-[#ff5252]' : 'bg-[#4caf50]'}`} 
                                    style={{ height: `${height}%` }}
                                  />
                                  
                                  {isRed && (
                                     <div className="absolute top-[35%] w-[8px] h-[8px] bg-[#ff5252] rounded-full flex items-center justify-center border-[1.5px] border-white z-10">
                                       <ArrowUp className="w-[3px] h-[3px] text-white rotate-180" strokeWidth={4} />
                                     </div>
                                  )}
                                  {isGreenCircle1 && (
                                     <div className="absolute top-[65%] w-[8px] h-[8px] bg-[#4caf50] rounded-full flex items-center justify-center border-[1.5px] border-white z-10">
                                       <ArrowUp className="w-[3px] h-[3px] text-white" strokeWidth={4} />
                                     </div>
                                  )}
                                  {isGreenCircle2 && (
                                     <div className="absolute top-[5%] w-[8px] h-[8px] bg-[#4caf50] rounded-full flex items-center justify-center border-[1.5px] border-white z-10">
                                       <ArrowUp className="w-[3px] h-[3px] text-white" strokeWidth={4} />
                                     </div>
                                  )}
                               </div>
                             );
                          })}
                          {/* Dotted baseline for remaining space */}
                          <div className="flex-1 border-b-[2px] border-dotted border-gray-200 mb-[1px] ml-1" />
                        </div>
                        <div className="flex justify-between text-[8px] text-[#8c9fc4] font-semibold mt-1">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Section (AI Assistant) */}
              <div className="w-full lg:flex-1 h-[600px] lg:h-full min-h-0 mt-4 lg:mt-0">
                <div className="rounded-[24px] p-4 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 h-full flex flex-col bg-white overflow-hidden">
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-[#1B2559]">
                      <Sparkles className="w-4 h-4 fill-current" />
                      <span className="text-[13px] font-bold">AI Assistant</span>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                      <RefreshCw className="w-3.5 h-3.5 cursor-pointer" />
                      <ArrowUpRight className="w-3.5 h-3.5 cursor-pointer" />
                    </div>
                  </div>
                  
                  {/* Activity Feed / Chat */}
                  <div className="flex flex-col gap-3 mt-2 flex-1 overflow-y-auto pr-1">
                    
                    {/* Assistant Message 1 */}
                    <div className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3 h-3 text-gray-600" />
                      </div>
                      <div className="flex flex-col gap-1 w-full mt-1">
                        <p className="text-[12px] text-agency-textPrimary font-medium">Please upload a PDF for data processing.</p>
                        <span className="text-[9px] text-gray-400 self-end">10:57</span>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex justify-end items-end gap-2 mt-4 mb-2">
                      <div className="bg-[#F4F7FE]/80 rounded-[20px] p-4 max-w-[85%] relative">
                        <div className="absolute -top-5 left-4 flex z-10">
                          {/* Red PDF Icon */}
                          <svg width="24" height="30" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-[10deg] drop-shadow-sm z-10 relative left-2 mt-1">
                            <path d="M2 2C2 0.89543 2.89543 0 4 0H14L22 8V30C22 31.1046 21.1046 32 20 32H4C2.89543 32 2 31.1046 2 30V2Z" fill="white" stroke="#EF4444" strokeWidth="2"/>
                            <path d="M14 0V8H22" stroke="#EF4444" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M10 12C10 12 8 10 7 15C6 20 11 20 12 17C13 14 17 12 19 15C21 18 20 22 18 22" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"/>
                          </svg>
                          
                          {/* Blue DOC Icon */}
                          <svg width="26" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[12deg] drop-shadow-md z-20 relative -left-1">
                            <path d="M2 2C2 0.89543 2.89543 0 4 0H14L22 8V30C22 31.1046 21.1046 32 20 32H4C2.89543 32 2 31.1046 2 30V2Z" fill="#2563EB"/>
                            <path d="M14 0L22 8H16C14.8954 8 14 7.10457 14 6V0Z" fill="#93C5FD"/>
                            <rect x="5" y="14" width="14" height="2.5" rx="1" fill="white"/>
                            <rect x="5" y="19" width="10" height="2.5" rx="1" fill="white"/>
                            <text x="5" y="27" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">DOC</text>
                          </svg>
                        </div>
                        <p className="text-[12px] text-[#1B2559] font-medium mt-1 leading-relaxed">
                          Sure, I'm uploading the document now.<br/>
                          Let me know what's next.
                        </p>
                      </div>
                      
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm bg-[#E2E8F0]">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Assistant Message 2 */}
                    <div className="flex gap-3 items-start mt-1">
                      <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3 h-3 text-gray-600" />
                      </div>
                      <div className="flex flex-col gap-1 w-full mt-1">
                        <p className="text-[12px] text-agency-textPrimary font-medium">Thank you! Processing your file now.</p>
                        <span className="text-[9px] text-gray-400 self-end">11:00</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Input Area */}
                  <div className="mt-auto pt-3 flex flex-col gap-3">
                    {/* Model Pills */}
                    <div className="flex gap-1.5 flex-wrap">
                      <button className="bg-[#1B2559] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full shadow-sm">GPT-4o</button>
                      <button className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2.5 py-1.5 rounded-full hover:bg-gray-50">Document AI</button>
                      <button className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2.5 py-1.5 rounded-full hover:bg-gray-50">Financial AI</button>
                      <button className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2.5 py-1.5 rounded-full hover:bg-gray-50">OpenCV</button>
                    </div>
                    
                    {/* Input Field */}
                    <div className="bg-[#F8FAFC] h-[40px] rounded-full flex gap-1.5 items-center pl-1.5 pr-1 border border-gray-100">
                      <button className="w-7 h-7 rounded-full hover:bg-white flex items-center justify-center transition-colors text-gray-400">
                        <Plus className="w-4 h-4" />
                      </button>
                      <input 
                        type="text" 
                        placeholder="Enter Task for AI Assistant" 
                        className="bg-transparent border-none outline-none flex-1 text-[11px] text-agency-textPrimary placeholder:text-gray-400 px-1" 
                      />
                      <button className="w-7 h-7 rounded-full hover:bg-white flex items-center justify-center transition-colors text-gray-400">
                        <Settings className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-[32px] h-[32px] rounded-full bg-[#1B2559] flex items-center justify-center shadow-md flex-shrink-0 hover:opacity-90 transition-opacity">
                        <Send className="w-3.5 h-3.5 text-white -ml-0.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
    </>
  );
}
