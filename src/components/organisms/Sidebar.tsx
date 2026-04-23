'use client';

import { BarChart3, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem from "../atoms/NavItem";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-lg p-5 h-screen flex flex-col justify-between border-r border-slate-100">
      <div>
        <h1 className="text-2xl font-black text-emerald-700 mb-8 tracking-tight">
          Painel Administrativo
        </h1>
        
        <nav className="space-y-2">
          <NavItem 
            label="Dashboard" 
            icon={<BarChart3 size={20} />} 
            href="/admin" 
            active={pathname === "/admin"} 
          />

          <NavItem 
            label="Usuários" 
            icon={<Users size={20} />} 
            href="/admin/users" 
            active={pathname === "/admin/users"} 
          />
        </nav>
      </div>

      <div className="border-t border-slate-100 pt-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-emerald-100">
          ADM
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 leading-tight">Administrador</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">admin@email.com</p>
        </div>
      </div>
    </aside>
  );
}