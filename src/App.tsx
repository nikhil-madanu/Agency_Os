import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { HomeDashboard } from "@/pages/Home";
import { ProjectsDashboard } from "@/pages/Projects";

export default function App() {
  const [currentView, setCurrentView] = useState("Dashboard");

  return (
    <>
      <Sidebar activeView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 ml-0 lg:ml-[238px] px-3 lg:pr-3 lg:pl-0 pt-3 pb-4 min-h-screen overflow-x-hidden flex flex-col">
        {currentView === "Dashboard" && <HomeDashboard />}
        {currentView === "Projects" && <ProjectsDashboard />}
      </main>
    </>
  );
}
