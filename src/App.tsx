import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import {
  Folder, Users, FileText, Plus, CalendarDays,
  ChevronDown, ChevronsUpDown, RotateCw, ArrowUp, ArrowUpRight,
  AlertTriangle, Clock, CheckCircle2, MessageSquare, FileSignature,
  TrendingUp, Briefcase, UserCheck, IndentDecrease,
  ChevronRight, Send, Activity, Upload, DoorOpen, Circle
} from "lucide-react";

// ─── Preserved Custom Icons (hero section uses these) ───────────────────────
const CustomRevenueIcon = ({ className }: { className?: string }) => (
  <div className={`relative w-[22px] h-[22px] ${className || ''}`}>
    <div className="w-3 h-4 bg-current rounded-[3px] absolute bottom-0 left-0" />
    <div className="w-2.5 h-2.5 bg-[#d4ebd8] rounded-full absolute top-0 right-1" />
    <div className="w-[9px] h-[9px] bg-current rounded-[2px] rotate-45 absolute bottom-0.5 right-0" />
  </div>
);

// ─── Shared Barcode Progress Bar ─────────────────────────────────────────────
function BarcodeBar({ percent, color = "sky" }: { percent: number; color?: "sky" | "green" | "red" }) {
  const total = 45;
  const filled = Math.round((percent / 100) * total);
  const colorMap = {
    sky:   "bg-[#0EA5E9]",
    green: "bg-[#16A34A]",
    red:   "bg-[#DC2626]",
  };
  return (
    <div className="flex gap-[2px] items-end h-[18px] w-full mb-1">
      {[...Array(total)].map((_, j) => (
        <div key={j} className={`flex-1 h-full rounded-[1px] ${j < filled ? colorMap[color] : "bg-[#E2E8F0]"}`} />
      ))}
    </div>
  );
}

// ─── Metric Card ─────────────────────────────────────────────────────────────
function MetricCard({
  icon,
  title,
  subtitle,
  mainValue,
  trend,
  trendUp,
  stat1Label, stat1Value,
  stat2Label, stat2Value,
  stat3Label, stat3Value,
  barPercent,
  barColor,
  linkLabel,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  mainValue: string;
  trend: string;
  trendUp: boolean;
  stat1Label: string; stat1Value: string;
  stat2Label: string; stat2Value: string;
  stat3Label: string; stat3Value: string;
  barPercent: number;
  barColor: "sky" | "green" | "red";
  linkLabel: string;
}) {
  return (
    <div className="rounded-[20px] p-5 border border-[#E2E8F0] flex flex-col bg-white h-full shadow-[0_2px_8px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition-shadow duration-200">

      {/* Header row: icon + title + arrow */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-[10px] bg-[#F0F9FF] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#0F172A] leading-tight">{title}</span>
            <span className="text-[11px] text-[#94A3B8] font-medium mt-0.5">{subtitle}</span>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0EA5E9]" strokeWidth={2} />
        </div>
      </div>

      {/* Main value + trend badge */}
      <div className="flex items-baseline gap-3 mt-4 mb-1">
        <span className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">{mainValue}</span>
        <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${
          trendUp ? "bg-[#F0FDF4]" : "bg-[#FEF2F2]"
        }`}>
          {trendUp
            ? <ArrowUp className="w-3 h-3 text-[#16A34A]" strokeWidth={3} />
            : <ArrowUp className="w-3 h-3 text-[#DC2626] rotate-180" strokeWidth={3} />
          }
          <span className={`text-[12px] font-bold ${
            trendUp ? "text-[#16A34A]" : "text-[#DC2626]"
          }`}>{trend}</span>
        </div>
      </div>

      {/* 3 sub-stats */}
      <div className="flex gap-4 mt-4 mb-4 pb-3 border-b border-[#F1F5F9]">
        <div className="flex flex-col gap-0.5">
          <span className="text-[14px] font-bold text-[#0F172A]">{stat1Value}</span>
          <span className="text-[11px] text-[#94A3B8] font-medium">{stat1Label}</span>
        </div>
        <div className="w-px bg-[#E2E8F0] self-stretch" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[14px] font-bold text-[#0F172A]">{stat2Value}</span>
          <span className="text-[11px] text-[#94A3B8] font-medium">{stat2Label}</span>
        </div>
        <div className="w-px bg-[#E2E8F0] self-stretch" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[14px] font-bold text-[#0F172A]">{stat3Value}</span>
          <span className="text-[11px] text-[#94A3B8] font-medium">{stat3Label}</span>
        </div>
      </div>

      {/* Barcode bar */}
      <div className="mt-auto">
        <BarcodeBar percent={barPercent} color={barColor} />
        <div className="flex justify-between text-[10px] text-[#94A3B8] font-semibold">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Link */}
      <a href="#" className="flex items-center gap-1 text-[12px] font-bold text-[#0EA5E9] mt-3 hover:underline">
        {linkLabel} <ChevronRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

// ─── Alert Strip ─────────────────────────────────────────────────────────────
const alerts = [
  { id: 1, icon: AlertTriangle, count: "3",    bg: "bg-white", border: "border-[#E2E8F0]", iconBg: "bg-[#FEF2F2]", iconColor: "#DC2626", countColor: "text-[#DC2626]", label: "Overdue invoices",   msg: "3 invoices overdue\n₹1,24,000 pending.",                     link: "View invoices →",   linkColor: "#DC2626" },
  { id: 2, icon: Clock,         count: "4",    bg: "bg-white", border: "border-[#E2E8F0]", iconBg: "bg-[#FFFBEB]", iconColor: "#F59E0B", countColor: "text-[#F59E0B]", label: "Updates missing",    msg: "4 team members haven't\nsubmitted today's update.",         link: "View updates →",    linkColor: "#2B3674" },
  { id: 3, icon: FileSignature, count: "2",    bg: "bg-white", border: "border-[#E2E8F0]", iconBg: "bg-[#EEF3FF]", iconColor: "#2B3674", countColor: "text-[#2B3674]", label: "Contracts awaiting", msg: "2 contracts awaiting\nclient signature.",                     link: "View contracts →",  linkColor: "#2B3674" },
  { id: 4, icon: AlertTriangle, count: "3",    bg: "bg-white", border: "border-[#E2E8F0]", iconBg: "bg-[#FFFBEB]", iconColor: "#F59E0B", countColor: "text-[#F59E0B]", label: "Trial ending",       msg: "Your trial ends in 3 days.",                                    link: "Upgrade now →",     linkColor: "#2B3674" },
  { id: 5, icon: Users,         count: "9/10", bg: "bg-white", border: "border-[#E2E8F0]", iconBg: "bg-[#EEF3FF]", iconColor: "#2B3674", countColor: "text-[#2B3674]", label: "Plan limit",         msg: "You've added 9 of 10 clients.",                                link: "Upgrade to Growth →",linkColor: "#2B3674" },
];

// ─── Today's Priority Data ────────────────────────────────────────────────────
const actionItems = [
  { type: "invoice",   client: "Zara Digital", amount: "₹18,400", days: 7,   action: "Send Reminder" },
  { type: "leave",     name: "Priya Sharma",   dates: "Jun 24–26", kind: "Sick Leave", action: "Approve / Reject" },
  { type: "blocked",   task: "Brand Deck v2",  project: "NovaCo",  member: "Rohan V.", action: "View" },
  { type: "message",   client: "FreshMart",    preview: "Hey, can we move the call to...", time: "2h ago",  action: "Reply" },
  { type: "contract",  name: "Retainer Q3",    client: "PixelWave", action: "Review" },
];

const happeningToday = [
  { type: "delivery",  project: "Landing Page",  client: "BlueArc",    lead: "Ankit M." },
  { type: "meeting",   title: "Strategy Call",   time: "3:00 PM",      with: "FreshMart" },
  { type: "meeting",   title: "Team Standup",    time: "10:00 AM",     with: "Internal" },
  { type: "leave",     name: "Kavya Nair",       kind: "Annual Leave" },
  { type: "invoice",   client: "Zara Digital",   amount: "₹22,000" },
];

const comingUp = [
  { type: "milestone", name: "MVP Launch",      project: "AppForge",  date: "Jun 23" },
  { type: "milestone", name: "Design Sign-off", project: "NovaCo",   date: "Jun 25" },
  { type: "invoice",   client: "PixelWave",     amount: "₹35,000",   date: "Jun 24" },
  { type: "invoice",   client: "BlueArc",       amount: "₹12,500",   date: "Jun 27" },
  { type: "meeting",   client: "FreshMart",     date: "Jun 24",       time: "4:30 PM" },
];

// ─── Projects Data ─────────────────────────────────────────────────────────
const projects = [
  { name: "Brand Identity Revamp",  client: "NovaCo",     lead: "Rohan V.",  phase: "Design",     progress: 72, status: "On Track",  days: 8  },
  { name: "E-comm Landing Page",    client: "BlueArc",    lead: "Ankit M.",  phase: "Development", progress: 55, status: "At Risk",   days: 3  },
  { name: "Mobile App MVP",         client: "AppForge",   lead: "Sneha K.",  phase: "Testing",    progress: 88, status: "On Track",  days: 5  },
  { name: "Annual Report 2024",     client: "FreshMart",  lead: "Priya S.",  phase: "Review",     progress: 40, status: "Delayed",   days: 12 },
  { name: "Social Media Kit",       client: "PixelWave",  lead: "Arjun M.",  phase: "Delivery",   progress: 95, status: "On Track",  days: 1  },
];

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  "On Track":  { bg: "bg-[#F0FDF4]", text: "text-[#16A34A]", dot: "bg-[#16A34A]" },
  "At Risk":   { bg: "bg-[#FFFBEB]", text: "text-[#F59E0B]", dot: "bg-[#F59E0B]" },
  "Delayed":   { bg: "bg-[#FEF2F2]", text: "text-[#DC2626]", dot: "bg-[#DC2626]" },
  "Completed": { bg: "bg-[#EFF6FF]", text: "text-[#2563EB]", dot: "bg-[#2563EB]" },
};

// ─── Team Activity Data ────────────────────────────────────────────────────
const teamFeed = [
  { name: "Sneha Kumar",  avatar: "https://i.pravatar.cc/150?img=5",  action: "Marked task", detail: "Mobile Nav Design", event: "as complete", time: "12m ago",   icon: CheckCircle2, iconColor: "text-[#16A34A]", iconBg: "bg-[#F0FDF4]", tag: "task" },
  { name: "Rohan V.",     avatar: "https://i.pravatar.cc/150?img=12", action: "Submitted daily update for", detail: "NovaCo Brand Revamp", event: "", time: "38m ago",   icon: Activity,     iconColor: "text-[#2563EB]", iconBg: "bg-[#EFF6FF]", tag: "update" },
  { name: "Ankit M.",     avatar: "https://i.pravatar.cc/150?img=8",  action: "Uploaded file to", detail: "BlueArc Landing Page", event: "", time: "1h ago",    icon: Upload,       iconColor: "text-[#F59E0B]", iconBg: "bg-[#FFFBEB]", tag: "file" },
  { name: "Priya Sharma", avatar: "https://i.pravatar.cc/150?img=9",  action: "Applied for leave", detail: "Jun 24–26 · Sick Leave", event: "", time: "2h ago",    icon: DoorOpen,     iconColor: "text-[#DC2626]", iconBg: "bg-[#FEF2F2]", tag: "leave" },
  { name: "Kavya Nair",   avatar: "https://i.pravatar.cc/150?img=20", action: "Submitted daily update for", detail: "FreshMart Annual Report", event: "", time: "3h ago",    icon: Activity,     iconColor: "text-[#2563EB]", iconBg: "bg-[#EFF6FF]", tag: "update" },
];

// ─── Invoices Data ────────────────────────────────────────────────────────
const invoices = [
  { num: "INV-0041", client: "NovaCo",     amount: "₹42,000", sent: "Jun 10", due: "Jun 24", status: "Overdue" },
  { num: "INV-0040", client: "BlueArc",    amount: "₹18,500", sent: "Jun 12", due: "Jun 26", status: "Sent" },
  { num: "INV-0039", client: "FreshMart",  amount: "₹35,000", sent: "Jun 8",  due: "Jun 22", status: "Paid" },
  { num: "INV-0038", client: "PixelWave",  amount: "₹22,000", sent: "Jun 5",  due: "Jun 19", status: "Overdue" },
  { num: "INV-0037", client: "AppForge",   amount: "₹14,000", sent: "Jun 1",  due: "Jun 15", status: "Paid" },
];

const invStatusColors: Record<string, { bg: string; text: string }> = {
  "Paid":    { bg: "bg-[#F0FDF4]", text: "text-[#16A34A]" },
  "Sent":    { bg: "bg-[#EFF6FF]", text: "text-[#2563EB]" },
  "Overdue": { bg: "bg-[#FEF2F2]", text: "text-[#DC2626]" },
  "Draft":   { bg: "bg-[#F1F5F9]", text: "text-[#64748B]" },
};

// ─── Chat Messages ────────────────────────────────────────────────────────
const chatMessages = [
  { name: "Zara Digital",  avatar: "https://i.pravatar.cc/150?img=30", msg: "Hey, can we move the Friday call to 4pm instead? Works better f…", time: "2h ago",  type: "Client" },
  { name: "Sneha Kumar",   avatar: "https://i.pravatar.cc/150?img=5",  msg: "I've uploaded the revised brand deck to the project folder. Ple…", time: "3h ago",  type: "Team" },
  { name: "FreshMart",     avatar: "https://i.pravatar.cc/150?img=33", msg: "The annual report draft looks good! Just one change — can you up…", time: "5h ago",  type: "Client" },
];

// ─── Tiny Section Header ──────────────────────────────────────────────────
function SectionHeader({ label, linkLabel }: { label: string; linkLabel?: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[18px] font-bold text-[#0F172A]">{label}</h2>
      {linkLabel && (
        <a href="#" className="text-[13px] font-semibold text-[#0EA5E9] border border-[#E2E8F0] flex items-center gap-1.5 px-3.5 py-1.5 rounded-full hover:bg-[#F0F9FF] transition-colors">
          {linkLabel} <ChevronRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}

// ─── Progress Bar (simple horizontal) ────────────────────────────────────
function ProgressBar({ percent, color }: { percent: number; color: string }) {
  return (
    <div className="w-full h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }} />
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-[238px] px-3 lg:pr-3 lg:pl-0 pt-3 pb-4 min-h-screen overflow-x-hidden flex flex-col">
        <div className="w-full flex-1 relative flex flex-col -mt-3">

          {/* ── TOP BACKGROUND IMAGE BANNER ── */}
          <div
            className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[600px] -ml-[12px] z-0 pointer-events-none flex justify-center"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}
          >
            <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[240px] h-[120px] bg-white blur-xl rounded-full z-[-1]" />
            <img src="/background-graphic-v2.png" alt="Dashboard Background" className="w-full h-auto object-contain object-top mix-blend-multiply relative z-0" />
          </div>

          {/* ── CONTENT LAYER ── */}
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

            {/* ── MAIN PANEL AREA ── */}
            <div className="relative w-full flex flex-col mt-[100px] pb-0 min-h-0">

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
                <div className="h-[80px] bg-white/10 backdrop-blur-3xl rounded-t-[24px] shadow-sm px-5 py-4 flex items-center gap-3 border border-white/20">
                  <Users className="w-5 h-5 text-[#8c9fc4]" fill="currentColor" strokeWidth={1} />
                  <div className="flex flex-col justify-center mt-1">
                    <span className="text-[14px] font-bold text-[#2B3674] leading-none mb-1.5">Clients</span>
                    <span className="text-[12px] text-[#8c9fc4] font-medium leading-none">36 Active</span>
                  </div>
                </div>
                <div className="h-[80px] pointer-events-none" />
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

              {/* FOREGROUND WHITE PANEL */}
              <div className="relative mt-[50px] z-10 w-full bg-white rounded-[32px] shadow-none p-3 pt-2 flex flex-col">

                {/* HUMP (Total Revenue) */}
                <div className="hidden lg:block absolute -top-[142px] left-1/2 -translate-x-1/2 -ml-[2px] w-[238px] h-[142px] bg-white rounded-t-[40px]">
                  <div className="absolute bottom-[0px] -left-[32px] w-[32px] h-[32px] pointer-events-none" style={{ borderBottomRightRadius: '32px', boxShadow: '16px 16px 0 16px white' }} />
                  <div className="absolute bottom-[0px] -right-[32px] w-[32px] h-[32px] pointer-events-none" style={{ borderBottomLeftRadius: '32px', boxShadow: '-16px 16px 0 16px white' }} />
                  <div className="w-full pl-8 pr-4 pt-5 pb-5 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <CustomRevenueIcon className="text-[#2B3674]" />
                        <div className="flex flex-col">
                          <span className="text-[13px] font-bold text-[#2B3674]">Total Revenue</span>
                          <span className="text-[11px] text-[#8c9fc4] flex items-center gap-1 font-semibold mt-0.5">May 2025 <ChevronDown className="w-3 h-3" /></span>
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
                        <span className="text-[12px] font-bold text-[#4caf50]">12.6%</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#8c9fc4] font-semibold mt-2 ml-3">vs April 2025 ₹73.1K</p>
                  </div>
                </div>

                {/* Mobile Revenue Card */}
                <div className="block lg:hidden rounded-[24px] p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-100 bg-white w-full mb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <CustomRevenueIcon className="text-[#2B3674]" />
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#2B3674]">Total Revenue</span>
                        <span className="text-[11px] text-[#8c9fc4] flex items-center gap-1 font-semibold mt-0.5">May 2025 <ChevronDown className="w-3 h-3" /></span>
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
                      <span className="text-[12px] font-bold text-[#4caf50]">12.6%</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#8c9fc4] font-semibold mt-2 ml-3">vs April 2025 ₹73.1K</p>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    SECTION 3 — SIX METRIC CARDS (3 + 3 grid)
                    ══════════════════════════════════════════════════════════ */}
                <div className="relative z-20 mt-2 px-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    {/* Card 1 — Monthly Revenue */}
                    <MetricCard
                      icon={<TrendingUp className="w-4.5 h-4.5 text-black" style={{width:18,height:18}} strokeWidth={2} />}
                      title="Monthly Revenue"
                      subtitle="May 2025"
                      mainValue="₹82.4K"
                      trend="12.6%"
                      trendUp={true}
                      stat1Label="Collected" stat1Value="₹68.2K"
                      stat2Label="Pending" stat2Value="₹14.2K"
                      stat3Label="vs Apr" stat3Value="↑₹9.3K"
                      barPercent={83}
                      barColor="sky"
                      linkLabel="View Invoices"
                    />

                    {/* Card 2 — Active Projects */}
                    <MetricCard
                      icon={<Briefcase className="w-4.5 h-4.5 text-black" style={{width:18,height:18}} strokeWidth={2} />}
                      title="Active Projects"
                      subtitle="Across all clients"
                      mainValue="24"
                      trend="3 new"
                      trendUp={true}
                      stat1Label="On Track" stat1Value="18"
                      stat2Label="Delayed" stat2Value="4"
                      stat3Label="Due this wk" stat3Value="3"
                      barPercent={75}
                      barColor="green"
                      linkLabel="View Projects"
                    />

                    {/* Card 3 — Active Clients */}
                    <MetricCard
                      icon={<UserCheck className="w-4.5 h-4.5 text-black" style={{width:18,height:18}} strokeWidth={2} />}
                      title="Active Clients"
                      subtitle="9 of 10 plan slots"
                      mainValue="36"
                      trend="2 new"
                      trendUp={true}
                      stat1Label="With projects" stat1Value="28"
                      stat2Label="Pending inv." stat2Value="9"
                      stat3Label="Inactive" stat3Value="8"
                      barPercent={90}
                      barColor="sky"
                      linkLabel="View Clients"
                    />

                    {/* Card 4 — Team */}
                    <MetricCard
                      icon={<Users className="w-4.5 h-4.5 text-black" style={{width:18,height:18}} strokeWidth={2} />}
                      title="Team"
                      subtitle="28 total members"
                      mainValue="22"
                      trend="6 offline"
                      trendUp={false}
                      stat1Label="Active today" stat1Value="22"
                      stat2Label="Updates in" stat2Value="18"
                      stat3Label="On leave" stat3Value="2"
                      barPercent={79}
                      barColor="green"
                      linkLabel="View Team"
                    />

                    {/* Card 5 — Pending Invoices */}
                    <MetricCard
                      icon={<FileText className="w-4.5 h-4.5 text-black" style={{width:18,height:18}} strokeWidth={2} />}
                      title="Pending Invoices"
                      subtitle="Across all clients"
                      mainValue="₹1.24L"
                      trend="3 overdue"
                      trendUp={false}
                      stat1Label="Overdue" stat1Value="3"
                      stat2Label="Due this wk" stat2Value="5"
                      stat3Label="Total count" stat3Value="12"
                      barPercent={42}
                      barColor="red"
                      linkLabel="View Invoices"
                    />

                    {/* Card 6 — Open Tasks */}
                    <MetricCard
                      icon={<IndentDecrease className="w-4.5 h-4.5 text-black" style={{width:18,height:18}} strokeWidth={2} />}
                      title="Open Tasks"
                      subtitle="All active projects"
                      mainValue="148"
                      trend="7 overdue"
                      trendUp={false}
                      stat1Label="Overdue" stat1Value="7"
                      stat2Label="Due today" stat2Value="14"
                      stat3Label="In review" stat3Value="22"
                      barPercent={62}
                      barColor="sky"
                      linkLabel="View Tasks"
                    />
                  </div>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    SECTION 2 — ALERT STRIP
                    ══════════════════════════════════════════════════════════ */}
                <div className="relative z-20 mt-6 px-1">
                  <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F7F8FC] border border-[#E2E8F0] flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-[#0F172A]" strokeWidth={2} />
                        </div>
                        <span className="text-[18px] font-bold text-[#0F172A]">Alerts & Urgent Actions</span>
                      </div>
                      <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0EA5E9] border border-[#E2E8F0] px-4 py-2 rounded-full hover:bg-[#F0F9FF] transition-colors">
                        5 alerts <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                    {/* Alert cards — horizontal row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      {alerts.map((a) => (
                        <div key={a.id} className={`${a.bg} ${a.border} border rounded-[16px] p-5 flex flex-col gap-2.5 hover:shadow-[0_2px_8px_rgba(15,23,42,0.08)] transition-shadow`}>
                          {/* Icon row + count badge */}
                          <div className="flex items-start justify-between mb-1">
                            <div className={`w-10 h-10 rounded-[10px] ${a.iconBg} flex items-center justify-center flex-shrink-0`}>
                              <a.icon className="w-5 h-5" style={{ color: a.iconColor }} strokeWidth={2} />
                            </div>
                            <span className={`text-[18px] font-bold ${a.countColor}`}>{a.count}</span>
                          </div>
                          {/* Label */}
                          <span className="text-[14px] font-bold text-[#0F172A] leading-tight">{a.label}</span>
                          {/* Message */}
                          <p className="text-[13px] text-[#64748B] font-medium leading-snug whitespace-pre-line">{a.msg}</p>
                          {/* Link */}
                          <a href="#" className="text-[13px] font-bold hover:underline mt-auto pt-2" style={{ color: a.linkColor }}>{a.link}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    SECTION 4 — TODAY'S PRIORITY LIST
                    ══════════════════════════════════════════════════════════ */}
                <div className="relative z-20 mt-6 px-1">
                  <SectionHeader label="Today's Priority List" linkLabel="View all tasks" />
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    {/* ── Col 1 — Action Required ── */}
                    <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden">
                      {/* Column header */}
                      <div className="px-6 pt-6 pb-4 border-b-2 border-[#DC2626]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[10px] bg-[#FEF2F2] flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-[#DC2626]" strokeWidth={2} />
                          </div>
                          <span className="text-[15px] font-bold text-[#0F172A]">Action Required</span>
                          <span className="ml-auto text-[13px] font-bold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-full">{actionItems.length} items</span>
                        </div>
                      </div>
                      {/* Items */}
                      <div className="flex flex-col divide-y divide-[#F1F5F9]">
                        {actionItems.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F7F8FC] transition-colors group">
                            {/* Left icon */}
                            <div className="w-10 h-10 rounded-full bg-[#F7F8FC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                              {item.type === "invoice"  && <AlertTriangle className="w-4.5 h-4.5 text-[#DC2626]" strokeWidth={2} />}
                              {item.type === "leave"    && <Clock className="w-4.5 h-4.5 text-[#F59E0B]" strokeWidth={2} />}
                              {item.type === "blocked"  && <Circle className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "message"  && <MessageSquare className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "contract" && <FileSignature className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                            </div>
                            {/* Content */}
                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                              {item.type === "invoice" && <>
                                <div className="flex items-center">
                                  <span className="text-[14px] font-bold text-[#0F172A]">{item.client}</span>
                                  <span className="ml-auto text-[14px] font-bold text-[#DC2626]">{item.amount}</span>
                                </div>
                                <span className="text-[12px] text-[#64748B]">{item.days} days overdue</span>
                                <button className="self-start text-[12px] font-bold text-[#DC2626] hover:underline mt-1">Send Reminder</button>
                              </>}
                              {item.type === "leave" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.name}</span>
                                <span className="text-[12px] text-[#64748B]">{item.dates} · {item.kind}</span>
                                <button className="self-start text-[12px] font-bold text-[#0EA5E9] hover:underline mt-1">Approve / Reject</button>
                              </>}
                              {item.type === "blocked" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.task}</span>
                                <span className="text-[12px] text-[#64748B]">{item.project} · {item.member}</span>
                                <button className="self-start text-[12px] font-bold text-[#0EA5E9] hover:underline mt-1">View</button>
                              </>}
                              {item.type === "message" && <>
                                <div className="flex items-center">
                                  <span className="text-[14px] font-bold text-[#0F172A]">{item.client}</span>
                                  <span className="ml-auto text-[12px] text-[#64748B]">{item.time}</span>
                                </div>
                                <span className="text-[12px] text-[#64748B] truncate">{item.preview}</span>
                                <button className="self-start text-[12px] font-bold text-[#0EA5E9] hover:underline mt-1">Reply</button>
                              </>}
                              {item.type === "contract" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.name}</span>
                                <span className="text-[12px] text-[#64748B]">{item.client}</span>
                                <button className="self-start text-[12px] font-bold text-[#0EA5E9] hover:underline mt-1">Review</button>
                              </>}
                            </div>
                            {/* Chevron */}
                            <ChevronRight className="w-5 h-5 text-[#CBD5E1] flex-shrink-0 group-hover:text-[#0EA5E9] transition-colors" strokeWidth={2} />
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div className="px-6 py-4 border-t border-[#F1F5F9]">
                        <a href="#" className="text-[13px] font-bold text-[#0EA5E9] hover:underline">Show all ({actionItems.length})</a>
                      </div>
                    </div>

                    {/* ── Col 2 — Happening Today ── */}
                    <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden">
                      {/* Column header */}
                      <div className="px-6 pt-6 pb-4 border-b-2 border-[#0EA5E9]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[10px] bg-[#F0F9FF] flex items-center justify-center flex-shrink-0">
                            <CalendarDays className="w-5 h-5 text-[#0EA5E9]" strokeWidth={2} />
                          </div>
                          <span className="text-[15px] font-bold text-[#0F172A]">Happening Today</span>
                          <span className="ml-auto text-[13px] font-bold text-[#0EA5E9] bg-[#F0F9FF] px-2.5 py-1 rounded-full">{happeningToday.length} items</span>
                        </div>
                      </div>
                      {/* Items */}
                      <div className="flex flex-col divide-y divide-[#F1F5F9]">
                        {happeningToday.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F7F8FC] transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-[#F7F8FC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                              {item.type === "delivery" && <Folder className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "meeting"  && <Clock  className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "leave"    && <DoorOpen className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "invoice"  && <FileText className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                            </div>
                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                              {item.type === "delivery" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.project}</span>
                                <span className="text-[12px] text-[#64748B]">{item.client} · Lead: {item.lead}</span>
                              </>}
                              {item.type === "meeting" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.title}</span>
                                <span className="text-[12px] text-[#64748B]">{item.time} · {item.with}</span>
                              </>}
                              {item.type === "leave" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.name}</span>
                                <span className="text-[12px] text-[#64748B]">{item.kind}</span>
                              </>}
                              {item.type === "invoice" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.client}</span>
                                <span className="text-[12px] text-[#64748B]">{item.amount} due today</span>
                              </>}
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#CBD5E1] flex-shrink-0 group-hover:text-[#0EA5E9] transition-colors" strokeWidth={2} />
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div className="px-6 py-4 border-t border-[#F1F5F9]">
                        <a href="#" className="text-[13px] font-bold text-[#0EA5E9] hover:underline">Show all ({happeningToday.length})</a>
                      </div>
                    </div>

                    {/* ── Col 3 — Coming Up This Week ── */}
                    <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden">
                      {/* Column header */}
                      <div className="px-6 pt-6 pb-4 border-b-2 border-[#16A34A]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[10px] bg-[#F0FDF4] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-[#16A34A]" strokeWidth={2} />
                          </div>
                          <span className="text-[15px] font-bold text-[#0F172A]">Coming Up This Week</span>
                          <span className="ml-auto text-[13px] font-bold text-[#16A34A] bg-[#F0FDF4] px-2.5 py-1 rounded-full">{comingUp.length} items</span>
                        </div>
                      </div>
                      {/* Items */}
                      <div className="flex flex-col divide-y divide-[#F1F5F9]">
                        {comingUp.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F7F8FC] transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-[#F7F8FC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                              {item.type === "milestone" && <CheckCircle2 className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "invoice"   && <FileText className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                              {item.type === "meeting"   && <Clock className="w-4.5 h-4.5 text-[#0F172A]" strokeWidth={2} />}
                            </div>
                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                              {item.type === "milestone" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.name}</span>
                                <span className="text-[12px] text-[#64748B]">{item.project} · {item.date}</span>
                              </>}
                              {item.type === "invoice" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.client}</span>
                                <span className="text-[12px] text-[#64748B]">{item.amount} · Due {item.date}</span>
                              </>}
                              {item.type === "meeting" && <>
                                <span className="text-[14px] font-bold text-[#0F172A]">{item.client}</span>
                                <span className="text-[12px] text-[#64748B]">{item.date} · {item.time}</span>
                              </>}
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#CBD5E1] flex-shrink-0 group-hover:text-[#0EA5E9] transition-colors" strokeWidth={2} />
                          </div>
                        ))}
                      </div>
                      {/* Footer */}
                      <div className="px-6 py-4 border-t border-[#F1F5F9]">
                        <a href="#" className="text-[13px] font-bold text-[#0EA5E9] hover:underline">Show all ({comingUp.length})</a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    SECTION 5 — PROJECTS OVERVIEW
                    ══════════════════════════════════════════════════════════ */}
                <div className="relative z-20 mt-5 px-1">
                  <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden">
                    {/* Header */}
                    <div className="px-6 pt-5 pb-4 border-b border-[#E2E8F0] flex items-center justify-between">
                      <div>
                        <h2 className="text-[16px] font-bold text-[#0F172A]">Projects Overview</h2>
                        <p className="text-[12px] text-[#94A3B8] font-medium mt-0.5">{projects.length} active projects</p>
                      </div>
                      <a href="#" className="text-[12px] font-semibold text-[#2B3674] border border-[#E2E8F0] flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-[#EEF3FF] transition-colors">
                        View All Projects <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-[#F7F8FC]">
                            {["Project", "Client", "Lead", "Phase", "Progress", "Status", "Deadline", ""].map((h) => (
                              <th key={h} className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider py-3 px-5 first:pl-6 last:pr-6 whitespace-nowrap">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F5F9]">
                          {projects.map((p, i) => {
                            const sc = statusColors[p.status] || statusColors["On Track"];
                            return (
                              <tr key={i} className="hover:bg-[#F7F8FC] transition-colors group">
                                <td className="py-4 px-5 pl-6">
                                  <span className="text-[13px] font-bold text-[#0F172A]">{p.name}</span>
                                </td>
                                <td className="py-4 px-5">
                                  <span className="text-[12px] text-[#64748B] font-medium">{p.client}</span>
                                </td>
                                <td className="py-4 px-5">
                                  <div className="flex items-center gap-2">
                                    <img src={`https://i.pravatar.cc/150?u=${p.lead}`} alt={p.lead} className="w-6 h-6 rounded-full border border-[#E2E8F0]" />
                                    <span className="text-[12px] text-[#64748B] font-medium whitespace-nowrap">{p.lead}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-5">
                                  <span className="text-[11px] font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full whitespace-nowrap">{p.phase}</span>
                                </td>
                                <td className="py-4 px-5 min-w-[140px]">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-1">
                                      <ProgressBar percent={p.progress} color={p.status === "Delayed" ? "bg-[#DC2626]" : p.status === "At Risk" ? "bg-[#F59E0B]" : "bg-[#2B3674]"} />
                                    </div>
                                    <span className="text-[12px] font-bold text-[#0F172A] whitespace-nowrap w-8 text-right">{p.progress}%</span>
                                  </div>
                                </td>
                                <td className="py-4 px-5">
                                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap ${sc.bg} ${sc.text}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                                    {p.status}
                                  </span>
                                </td>
                                <td className="py-4 px-5">
                                  <span className={`text-[12px] font-bold whitespace-nowrap ${p.days <= 3 ? "text-[#DC2626]" : "text-[#64748B]"}`}>
                                    {p.days <= 3 ? `⚠️ ` : ""}{p.days}d left
                                  </span>
                                </td>
                                <td className="py-4 px-5 pr-6">
                                  <a href="#" className="text-[12px] font-bold text-[#2B3674] hover:underline flex items-center gap-1 whitespace-nowrap">
                                    View <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    SECTIONS 6 + 7 + 8 — 3-column bottom row
                    ══════════════════════════════════════════════════════════ */}
                <div className="relative z-20 mt-5 px-1 mb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* ───────────────────────
                        SECTION 6 — Team Activity Feed
                        ─────────────────────── */}
                    <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col">
                      {/* Header */}
                      <div className="px-5 pt-5 pb-4 border-b border-[#E2E8F0]">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h2 className="text-[15px] font-bold text-[#0F172A]">Team Activity Feed</h2>
                            <p className="text-[11px] text-[#94A3B8] font-medium mt-0.5">Live updates from your team</p>
                          </div>
                          <a href="#" className="text-[11px] font-semibold text-[#2B3674] border border-[#E2E8F0] flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-[#EEF3FF] transition-colors whitespace-nowrap">
                            View Full Log <ChevronRight className="w-3 h-3" />
                          </a>
                        </div>
                        {/* Filter pills */}
                        <div className="flex gap-1.5 flex-wrap">
                          {["All", "Updates", "Tasks", "Files", "Leave"].map((f, i) => (
                            <button key={f} className={`text-[11px] font-semibold px-3 py-1 rounded-full border transition-colors ${
                              i === 0
                                ? "bg-[#2B3674] text-white border-[#2B3674]"
                                : "bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#2B3674] hover:text-[#2B3674]"
                            }`}>
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Feed items */}
                      <div className="flex flex-col divide-y divide-[#F1F5F9] flex-1">
                        {teamFeed.map((item, i) => (
                          <div key={i} className="flex items-start gap-3.5 px-5 py-4 hover:bg-[#F7F8FC] transition-colors">
                            {/* Avatar */}
                            <div className="relative flex-shrink-0">
                              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                              <div className={`absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full ${item.iconBg} flex items-center justify-center border-2 border-white`}>
                                <item.icon className={`w-2.5 h-2.5 ${item.iconColor}`} strokeWidth={2.5} />
                              </div>
                            </div>
                            {/* Content */}
                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[13px] font-bold text-[#0F172A]">{item.name}</span>
                                <span className="text-[11px] text-[#94A3B8] whitespace-nowrap flex-shrink-0">{item.time}</span>
                              </div>
                              <p className="text-[12px] text-[#64748B] font-medium leading-relaxed">
                                {item.action} <span className="font-bold text-[#0F172A]">{item.detail}</span>{item.event ? ` ${item.event}` : ""}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ───────────────────────
                        SECTION 7 — Recent Invoices
                        ─────────────────────── */}
                    <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col">
                      {/* Header */}
                      <div className="px-5 pt-5 pb-4 border-b border-[#E2E8F0] flex items-center justify-between">
                        <div>
                          <h2 className="text-[15px] font-bold text-[#0F172A]">Recent Invoices</h2>
                          <p className="text-[11px] text-[#94A3B8] font-medium mt-0.5">Last 5 invoices</p>
                        </div>
                        <a href="#" className="text-[11px] font-semibold text-[#2B3674] border border-[#E2E8F0] flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-[#EEF3FF] transition-colors whitespace-nowrap">
                          View All <ChevronRight className="w-3 h-3" />
                        </a>
                      </div>
                      {/* Invoice rows */}
                      <div className="flex flex-col divide-y divide-[#F1F5F9] flex-1">
                        {invoices.map((inv, i) => {
                          const sc = invStatusColors[inv.status] || invStatusColors["Draft"];
                          const accentColor = inv.status === "Paid" ? "bg-[#16A34A]" : inv.status === "Overdue" ? "bg-[#DC2626]" : "bg-[#2B3674]";
                          return (
                            <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-[#F7F8FC] transition-colors group">
                              {/* Left color bar */}
                              <div className={`w-1 h-10 rounded-full flex-shrink-0 ${accentColor}`} />
                              {/* Invoice info */}
                              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-[12px] font-bold text-[#0F172A] font-mono tracking-tight">{inv.num}</span>
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${sc.bg} ${sc.text}`}>{inv.status}</span>
                                </div>
                                <span className="text-[12px] text-[#64748B] font-medium">{inv.client}</span>
                                <span className="text-[10px] text-[#94A3B8]">Sent {inv.sent} · Due {inv.due}</span>
                              </div>
                              {/* Amount + link */}
                              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                <span className="text-[15px] font-bold text-[#0F172A]">{inv.amount}</span>
                                <a href="#" className="flex items-center gap-0.5 text-[11px] font-bold text-[#2B3674] hover:underline">
                                  View <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* ───────────────────────
                        SECTION 8 — Quick Chat Preview
                        ─────────────────────── */}
                    <div className="rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col">
                      {/* Header */}
                      <div className="px-5 pt-5 pb-4 border-b border-[#E2E8F0] flex items-center justify-between">
                        <div>
                          <h2 className="text-[15px] font-bold text-[#0F172A]">Quick Chat Preview</h2>
                          <p className="text-[11px] text-[#94A3B8] font-medium mt-0.5">{chatMessages.length} unread messages</p>
                        </div>
                        <a href="#" className="text-[11px] font-semibold text-[#2B3674] border border-[#E2E8F0] flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-[#EEF3FF] transition-colors whitespace-nowrap">
                          Open Chat <ChevronRight className="w-3 h-3" />
                        </a>
                      </div>
                      {/* Chat items */}
                      <div className="flex flex-col divide-y divide-[#F1F5F9] flex-1">
                        {chatMessages.map((msg, i) => (
                          <div key={i} className="flex items-start gap-3.5 px-5 py-4 hover:bg-[#F7F8FC] transition-colors group">
                            {/* Avatar with online dot */}
                            <div className="relative flex-shrink-0">
                              <img src={msg.avatar} alt={msg.name} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm" />
                              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
                            </div>
                            {/* Message content */}
                            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-[13px] font-bold text-[#0F172A]">{msg.name}</span>
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    msg.type === "Client"
                                      ? "bg-[#EEF3FF] text-[#2B3674]"
                                      : "bg-[#F0FDF4] text-[#16A34A]"
                                  }`}>{msg.type}</span>
                                </div>
                                <span className="text-[11px] text-[#94A3B8] whitespace-nowrap flex-shrink-0">{msg.time}</span>
                              </div>
                              <p className="text-[12px] text-[#64748B] font-medium leading-relaxed line-clamp-2">{msg.msg}</p>
                              <button className="self-start flex items-center gap-1.5 text-[11px] font-bold text-[#2B3674] bg-[#EEF3FF] px-3 py-1.5 rounded-full hover:bg-[#DBEAFE] transition-colors mt-0.5">
                                <Send className="w-3 h-3" strokeWidth={2} />
                                Reply
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
                {/* END PANEL */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
