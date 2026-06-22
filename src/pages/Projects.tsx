import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { 
  Plus, MoreHorizontal, ChevronDown, 
  List, Calendar, LayoutGrid, CheckSquare, Folder, MessageSquare,
  Edit2, CalendarDays, Copy, ArrowRight,
  CheckCircle2, AlertTriangle, AlertCircle, PauseCircle
} from "lucide-react";

const projects = [
  { 
    id: 1, 
    logo: "M", logoColor: "bg-black text-white",
    name: "Redesign Agency Website", client: "NovaCo", tag: "Website Design", tagColor: "bg-[#EFF6FF] text-[#2563EB]",
    phase: "Design", status: "On Track", progress: 72, 
    leadName: "Rohan V.", leadAvatar: "https://i.pravatar.cc/150?img=12", teamExtra: "+2",
    start: "Mar 10, 2024", due: "May 10, 2024", dueColor: "text-[#DC2626]", lastActivity: "2h ago",
    tasks: "32 / 45", files: "18", comments: "5", hasNewComments: true
  },
  { 
    id: 2, 
    logo: "B", logoColor: "bg-[#2563EB] text-white",
    name: "E-commerce Platform", client: "BlueArc", tag: "App Development", tagColor: "bg-[#F3E8FF] text-[#9333EA]",
    phase: "Development", status: "At Risk", progress: 55, 
    leadName: "Ankit M.", leadAvatar: "https://i.pravatar.cc/150?img=8", teamExtra: "+3",
    start: "Jan 15, 2024", due: "Apr 25, 2024", dueColor: "text-[#DC2626]", lastActivity: "1d ago",
    tasks: "48 / 87", files: "24", comments: "8", hasNewComments: true
  },
  { 
    id: 3, 
    logo: "🌿", logoColor: "bg-[#F0FDF4] text-[#16A34A] text-lg",
    name: "Mobile App MVP", client: "TechStart", tag: "App Development", tagColor: "bg-[#F3E8FF] text-[#9333EA]",
    phase: "Development", status: "On Track", progress: 88, 
    leadName: "Sneha K.", leadAvatar: "https://i.pravatar.cc/150?img=5", teamExtra: "+1",
    start: "Feb 5, 2024", due: "May 5, 2024", dueColor: "text-[#0F172A]", lastActivity: "3h ago",
    tasks: "64 / 72", files: "32", comments: "3", hasNewComments: false
  },
  { 
    id: 4, 
    logo: "❀", logoColor: "bg-[#FFF7ED] text-[#F97316] text-xl",
    name: "Brand Identity Design", client: "FreshMart", tag: "Brand Identity", tagColor: "bg-[#FFF7ED] text-[#F97316]",
    phase: "Review", status: "Delayed", progress: 40, 
    leadName: "Priya S.", leadAvatar: "https://i.pravatar.cc/150?img=9", teamExtra: "+2",
    start: "Jan 20, 2024", due: "Apr 10, 2024", dueColor: "text-[#DC2626]", lastActivity: "5h ago",
    tasks: "16 / 40", files: "12", comments: "7", hasNewComments: true
  },
];

const statusStyles: Record<string, string> = {
  "On Track":  "bg-[#F0FDF4] text-[#16A34A]",
  "At Risk":   "bg-[#FFFBEB] text-[#D97706]",
  "Delayed":   "bg-[#FEF2F2] text-[#DC2626]",
};

interface FloatingMetricProps {
  top: string;
  left: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  number: string | number;
  label: string;
  lineHeight?: number;
  dotColor?: string;
  lineColor?: string;
  activeLine?: boolean;
  rotation?: number;
}

function FloatingMetric({ 
  top, left,
  icon: Icon, 
  iconColor, iconBg, 
  number, label, 
  lineHeight = 40,
  dotColor = "bg-blue-300",
  lineColor = "border-blue-200",
  activeLine = false,
  rotation = 0
}: FloatingMetricProps) {
  return (
    <div 
      className="absolute flex flex-col items-center z-20 pointer-events-auto" 
      style={{ top, left, transform: `translateX(-50%) rotate(${rotation}deg)` }}
    >
      {/* Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-2 pr-4 flex items-center gap-2.5 relative overflow-hidden">
         <div className={`w-8 h-8 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center`}>
            <Icon className="w-4 h-4" strokeWidth={2.5} />
         </div>
         <div className="flex flex-col">
            <span className="text-[16px] font-extrabold text-[#0F172A] leading-none mb-0.5">{number}</span>
            <span className="text-[10px] font-bold text-[#64748B] whitespace-nowrap">{label}</span>
         </div>
         {activeLine && (
           <div className="absolute bottom-0 left-3 w-8 h-[2px] bg-[#2563EB] rounded-t-sm" />
         )}
      </div>
      {/* Line */}
      <div className={`w-[1px] border-l-[1.5px] border-dotted ${lineColor}`} style={{ height: lineHeight }} />
      {/* Dot */}
      <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
    </div>
  );
}

export function ProjectsDashboard() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [heroScale, setHeroScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      // Calculate available width for the hero section (accounting for padding)
      const safeWidth = window.innerWidth - 32;
      setHeroScale(Math.min(1, safeWidth / 1150));
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const tabs = ["All Projects", "By Client", "My Projects", "Archived", "Templates"];

  return (
    <div className="w-full flex-1 relative flex flex-col -mt-3">
      <div className="relative z-10 flex flex-col w-full h-full pt-4 pl-2 pr-0">
        <Header />

        <div className="mt-4 flex flex-col w-full px-4 lg:px-8 relative z-10 flex-1">
          
          {/* HERO TEXT & BUTTON */}
          <div className="flex justify-between items-start z-20 relative">
             <div className="flex flex-col -translate-y-6">
               <h1 className="text-[36px] font-bold text-[#0F172A] tracking-tight leading-none mb-2">Projects</h1>
               <p className="text-[14px] text-[#64748B] font-medium">Plan, track and deliver <span className="font-bold text-[#2563EB]">exceptional work.</span></p>
             </div>
             <button className="bg-[#2563EB] text-white px-5 py-2.5 rounded-full font-bold text-[13px] flex items-center gap-2 hover:bg-[#1D4ED8] transition-colors shadow-sm">
                <Plus className="w-4 h-4" strokeWidth={2.5} /> New Project
             </button>
          </div>

          {/* BACKGROUND HERO IMAGE & ABSOLUTE TEXT */}
          <div className="absolute top-[-200px] left-1/2 w-[1150px] z-0 pointer-events-none"
               style={{ transform: `translateX(-50%) scale(${heroScale})`, transformOrigin: "top center" }}>
              <img 
               src="/projects-hero.png" 
               className="w-full h-auto mix-blend-multiply opacity-80" 
               alt="Hero Folder Graphic" 
               style={{
                 WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
                 WebkitMaskComposite: 'source-in',
                 maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 60%, transparent 100%)',
                 maskComposite: 'intersect'
               }}
              />

              <div className="absolute inset-0 -translate-y-[40px]">
               <FloatingMetric top="calc(56% + 28px)" left="calc(22% - 38px)" icon={Folder} iconBg="bg-[#EEF3FF]" iconColor="text-[#2563EB]" number="24" label="Active Projects" lineHeight={40} dotColor="bg-[#93C5FD]" lineColor="border-[#BFDBFE]" activeLine={true} rotation={0} />
               <FloatingMetric top="calc(43% + 21px)" left="calc(30% - 10px)" icon={CheckCircle2} iconBg="bg-[#F0FDF4]" iconColor="text-[#16A34A]" number="16" label="On Track" lineHeight={30} dotColor="bg-[#86EFAC]" lineColor="border-[#BBF7D0]" rotation={0} />
               <FloatingMetric top="calc(33% + 33px)" left="calc(42% - 5px)" icon={AlertTriangle} iconBg="bg-[#FFF7ED]" iconColor="text-[#F97316]" number="5" label="At Risk" lineHeight={30} dotColor="bg-[#FDBA74]" lineColor="border-[#FED7AA]" rotation={0} />
               <FloatingMetric top="calc(30% + 47px)" left="calc(56% + 5px)" icon={AlertCircle} iconBg="bg-[#FEF2F2]" iconColor="text-[#DC2626]" number="2" label="Delayed" lineHeight={30} dotColor="bg-[#FCA5A5]" lineColor="border-[#FECACA]" rotation={0} />
               <FloatingMetric top="calc(48% - 15px)" left="calc(72% - 14px)" icon={PauseCircle} iconBg="bg-[#F1F5F9]" iconColor="text-[#0F172A]" number="1" label="On Hold" lineHeight={30} dotColor="bg-black" lineColor="border-black" rotation={0} />
               <FloatingMetric top="calc(65% - 15px)" left="calc(83.6% - 15px)" icon={Calendar} iconBg="bg-[#F8FAFC]" iconColor="text-[#64748B]" number="3" label="Due This Month" lineHeight={30} dotColor="bg-[#94A3B8]" lineColor="border-[#CBD5E1]" rotation={0} />
             </div>
          </div>

          {/* TABS */}
          <div className="flex gap-1.5 p-1.5 bg-[#F1F5F9]/80 backdrop-blur rounded-[16px] w-full xl:w-fit overflow-x-auto scrollbar-hide mt-[175px] mb-6 z-10 relative shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)]">
             {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 xl:flex-none px-5 py-2.5 text-[13px] font-bold whitespace-nowrap rounded-[12px] transition-all duration-200 ${
                    activeTab === tab 
                      ? "bg-[#2B3674] text-white shadow-[0_2px_8px_rgba(15,23,42,0.15)]" 
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/40"
                  }`}
                >
                  {tab}
                </button>
             ))}
          </div>

          {/* WHITE CONTENT WRAPPER */}
          <div className="bg-white w-auto -mx-4 lg:-mx-8 px-4 lg:px-8 rounded-2xl shadow-sm border border-[#E2E8F0] pb-2 relative z-10">

          {/* FILTERS & VIEWS */}
          <div className="flex justify-between items-end py-8 z-10 relative mt-2">
             <div className="flex items-center gap-4">
               <div className="flex flex-col gap-2.5">
                 <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider ml-1">Status</span>
                 <button className="flex items-center justify-between gap-3 w-auto min-w-[130px] whitespace-nowrap bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-full text-[13px] font-bold text-[#0F172A] hover:border-[#CBD5E1] shadow-sm">
                   All Statuses <ChevronDown className="w-4 h-4 text-[#94A3B8]" strokeWidth={2.5}/>
                 </button>
               </div>
               <div className="flex flex-col gap-2.5">
                 <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider ml-1">Client</span>
                 <button className="flex items-center justify-between gap-3 w-auto min-w-[130px] whitespace-nowrap bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-full text-[13px] font-bold text-[#0F172A] hover:border-[#CBD5E1] shadow-sm">
                   All Clients <ChevronDown className="w-4 h-4 text-[#94A3B8]" strokeWidth={2.5}/>
                 </button>
               </div>
               <div className="flex flex-col gap-2.5">
                 <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider ml-1">Lead</span>
                 <button className="flex items-center justify-between gap-3 w-auto min-w-[130px] whitespace-nowrap bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-full text-[13px] font-bold text-[#0F172A] hover:border-[#CBD5E1] shadow-sm">
                   All Leads <ChevronDown className="w-4 h-4 text-[#94A3B8]" strokeWidth={2.5}/>
                 </button>
               </div>
               <div className="flex flex-col gap-2.5">
                 <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider ml-1">Due Date</span>
                 <button className="flex items-center justify-between gap-3 w-auto min-w-[150px] whitespace-nowrap bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-full text-[13px] font-bold text-[#0F172A] hover:border-[#CBD5E1] shadow-sm">
                   <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-[#94A3B8]" /> Apr 1 - Apr 30</div> <ChevronDown className="w-4 h-4 text-[#94A3B8]" strokeWidth={2.5}/>
                 </button>
               </div>
               <div className="flex flex-col gap-2.5">
                 <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider ml-1">Sort by</span>
                 <button className="flex items-center justify-between gap-3 w-auto min-w-[130px] whitespace-nowrap bg-white border border-[#E2E8F0] px-4 py-2.5 rounded-full text-[13px] font-bold text-[#0F172A] hover:border-[#CBD5E1] shadow-sm">
                   <span className="flex items-center gap-1.5"><span className="text-[12px] font-extrabold">↓</span> Deadline</span> <ChevronDown className="w-4 h-4 text-[#94A3B8]" strokeWidth={2.5}/>
                 </button>
               </div>
             </div>

             <div className="flex items-center bg-white border border-[#E2E8F0] rounded-full p-1.5 shadow-sm">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#EEF3FF] text-[#2563EB] border border-[#2563EB]/20 rounded-full text-[13px] font-bold">
                  <List className="w-4 h-4" strokeWidth={2.5} /> List View
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-[#64748B] hover:text-[#0F172A] rounded-full text-[13px] font-bold transition-colors">
                  <LayoutGrid className="w-4 h-4" strokeWidth={2.5} /> Kanban
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-[#64748B] hover:text-[#0F172A] rounded-full text-[13px] font-bold transition-colors">
                  <Calendar className="w-4 h-4" strokeWidth={2.5} /> Calendar
                </button>
             </div>
          </div>

          {/* TABLE */}
          <div className="w-full overflow-x-auto z-10 relative mt-2">
            <table className="w-full min-w-[1200px] text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="pr-6 pl-1 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Project</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Status & Progress</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider min-w-[240px]">Team</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">Stats</th>
                  <th className="pr-0 pl-6 py-4 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {projects.map((project, i) => (
                  <tr key={i} className="hover:bg-[#F8FAFC]/50 transition-colors cursor-pointer group">
                    {/* PROJECT */}
                    <td className="pr-6 pl-1 py-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${project.logoColor}`}>
                          {project.logo}
                        </div>
                        <div className="flex flex-col gap-1.5 mt-0.5">
                          <span className="text-[14px] font-bold text-[#0F172A] leading-none">{project.name}</span>
                          <span className="text-[13px] font-semibold text-[#2563EB] leading-none">{project.client}</span>
                          <span className={`inline-flex w-fit px-2 py-0.5 rounded-[4px] text-[10px] font-bold mt-1 ${project.tagColor}`}>
                            {project.tag}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* STATUS & PROGRESS */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                          <span className="text-[13px] font-bold text-[#0F172A]">{project.phase}</span>
                          <ChevronDown className="w-3 h-3 text-[#94A3B8]" strokeWidth={3} />
                        </div>
                        <div className="flex items-center gap-4 mt-1">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-[6px] text-[11px] font-bold ${statusStyles[project.status]}`}>
                            {project.status}
                          </span>
                          <div className="flex items-center gap-2 flex-1">
                            <div className="w-[60px] h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                              <div className="h-full bg-[#2563EB] rounded-full" style={{ width: `${project.progress}%` }}></div>
                            </div>
                            <span className="text-[12px] font-bold text-[#0F172A]">{project.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* TEAM */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2.5 shrink-0">
                          <img src={project.leadAvatar} className="w-8 h-8 rounded-full object-cover" alt={project.leadName} />
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-[#0F172A] leading-none mb-1">{project.leadName}</span>
                            <span className="text-[11px] text-[#64748B] font-medium leading-none">Project Lead</span>
                          </div>
                        </div>
                        <div className="flex items-center -space-x-2">
                          <img src="https://i.pravatar.cc/150?img=1" className="w-6 h-6 rounded-full border-2 border-white" alt="" />
                          <img src="https://i.pravatar.cc/150?img=2" className="w-6 h-6 rounded-full border-2 border-white" alt="" />
                          <img src="https://i.pravatar.cc/150?img=3" className="w-6 h-6 rounded-full border-2 border-white" alt="" />
                          <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F1F5F9] flex items-center justify-center text-[10px] font-bold text-[#64748B]">
                            {project.teamExtra}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* DATES */}
                    <td className="px-6 py-4">
                      <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2.5">
                        <span className="text-[11px] text-[#94A3B8] font-bold">Start</span>
                        <span className="text-[12px] text-[#0F172A] font-bold">{project.start}</span>
                        <span className="text-[11px] text-[#94A3B8] font-bold">Due</span>
                        <span className={`text-[12px] font-bold ${project.dueColor}`}>{project.due}</span>
                        <span className="text-[11px] text-[#94A3B8] font-bold">Last activity</span>
                        <span className="text-[12px] text-[#0F172A] font-bold">{project.lastActivity}</span>
                      </div>
                    </td>

                    {/* STATS */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[#0F172A]">
                          <CheckSquare className="w-3.5 h-3.5 text-[#64748B]" strokeWidth={2.5}/>
                          <span className="text-[12px] font-bold">{project.tasks}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#0F172A]">
                          <Folder className="w-3.5 h-3.5 text-[#64748B]" strokeWidth={2.5}/>
                          <span className="text-[12px] font-bold">{project.files}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#0F172A]">
                          <MessageSquare className="w-3.5 h-3.5 text-[#64748B]" strokeWidth={2.5}/>
                          <div className="relative">
                            <span className="text-[12px] font-bold">{project.comments}</span>
                            {project.hasNewComments && (
                              <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-[#2563EB] rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* ACTIONS */}
                    <td className="pl-6 pr-0 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="flex items-center gap-1 text-[13px] font-bold text-[#2563EB] bg-[#EEF3FF] hover:bg-[#E0E7FF] px-3 py-1.5 rounded-lg transition-colors">
                          View Project <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0]">
                          <Edit2 className="w-4 h-4" strokeWidth={2} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0]">
                          <CalendarDays className="w-4 h-4" strokeWidth={2} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0]">
                          <Copy className="w-4 h-4" strokeWidth={2} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0]">
                          <MoreHorizontal className="w-4 h-4" strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER */}
          <div className="py-6 flex items-center justify-between w-full z-10 relative">
             <span className="text-[13px] text-[#64748B] font-bold">Showing 1 to 5 of 24 projects</span>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                   <button className="w-7 h-7 flex items-center justify-center text-[#94A3B8] hover:text-[#0F172A]"><span className="text-[16px] leading-none mb-0.5">‹</span></button>
                   <button className="w-7 h-7 flex items-center justify-center text-[#2563EB] font-bold border border-[#2563EB] rounded-[6px]">1</button>
                   <button className="w-7 h-7 flex items-center justify-center text-[#0F172A] font-bold hover:bg-[#F1F5F9] rounded-[6px]">2</button>
                   <button className="w-7 h-7 flex items-center justify-center text-[#0F172A] font-bold hover:bg-[#F1F5F9] rounded-[6px]">3</button>
                   <button className="w-7 h-7 flex items-center justify-center text-[#0F172A] font-bold hover:bg-[#F1F5F9] rounded-[6px]">4</button>
                   <button className="w-7 h-7 flex items-center justify-center text-[#0F172A] font-bold hover:bg-[#F1F5F9] rounded-[6px]">5</button>
                   <button className="w-7 h-7 flex items-center justify-center text-[#94A3B8] hover:text-[#0F172A]"><span className="text-[16px] leading-none mb-0.5">›</span></button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-[#64748B] font-bold">Show</span>
                  <button className="flex items-center gap-2 bg-white border border-[#E2E8F0] px-2 py-1 rounded-[6px] text-[13px] font-bold text-[#0F172A]">
                    5 <ChevronDown className="w-3 h-3 text-[#94A3B8]" strokeWidth={3}/>
                  </button>
                  <span className="text-[13px] text-[#64748B] font-bold">per page</span>
                </div>
             </div>
           </div>
          </div> {/* END WHITE CONTENT WRAPPER */}

        </div>
      </div>
    </div>
  );
}
