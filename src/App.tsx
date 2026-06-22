import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { HomeDashboard } from "@/pages/Home";
import { ProjectsDashboard } from "@/pages/Projects";

export default function App() {
  const [currentView, setCurrentView] = useState("Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <Sidebar 
        activeView={currentView} 
        onNavigate={setCurrentView} 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <main className={`flex-1 ml-0 transition-all duration-300 ease-in-out px-3 lg:pr-3 lg:pl-0 pt-3 pb-4 min-h-screen overflow-x-hidden flex flex-col ${isSidebarCollapsed ? "lg:ml-[88px]" : "lg:ml-[calc(clamp(230px,18vw,320px)+8px)]"}`}>
        {currentView === "Dashboard" && <HomeDashboard />}
        {currentView === "Projects" && <ProjectsDashboard />}
      </main>
    </>
  );
}
