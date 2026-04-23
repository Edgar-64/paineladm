'use client';

import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
  label: string;
  icon: ReactNode;
  href: string;
  active?: boolean;
}

export default function NavItem({ label, icon, href, active }: NavItemProps) {
  return (
    <Link 
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all duration-200
        ${active 
          ? 'bg-emerald-50 text-emerald-600 shadow-sm shadow-emerald-100/50' 
          : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}
      `}
    >
      <span className={active ? 'text-emerald-600' : 'text-slate-400'}>
        {icon}
      </span>
      <span className="text-sm tracking-tight">{label}</span>
    </Link>
  );
}