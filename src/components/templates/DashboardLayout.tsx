'use client';

import Topbar from "../organisms/Topbar";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function DashboardLayout({ children, sidebar }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      
      <aside className="sticky top-0 h-screen border-r border-slate-100 bg-white z-50">
        {sidebar}
      </aside>

      <div className="flex-1 flex flex-col min-w-0 bg-white">
        
        <Topbar /> 
        
        <main className="p-8 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}