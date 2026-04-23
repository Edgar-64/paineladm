'use client';

import { Sparkles, ArrowRight, LayoutDashboard, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function UserHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="px-8 py-6 flex justify-between items-center border-b border-slate-50">
        <h1 className="text-xl font-black text-emerald-600 tracking-tighter">SISTEMA.</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <span className="text-xs font-black text-slate-600">US</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider mb-6">
            <Sparkles size={12} /> Bem-vindo de volta
          </div>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
            Olá, Usuário. <br />
            O que vamos fazer <span className="text-emerald-600">hoje?</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl">
            Sua central de controle simplificada. Acesse seus relatórios ou gerencie suas preferências abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/auth" className="group p-10 bg-slate-900 rounded-[40px] text-white flex flex-col justify-between min-h-[300px] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
              <LayoutDashboard size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Painel de Controle</h3>
              <p className="text-slate-400 font-medium flex items-center gap-2 group-hover:text-white">
                Acessar visão administrativa <ArrowRight size={18} />
              </p>
            </div>
          </Link>

          <Link href="/auth">
            <div className="group p-10 bg-emerald-50 rounded-[40px] text-emerald-900 flex flex-col justify-between min-h-[300px] transition-all hover:-translate-y-2 border border-emerald-100/50">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white">
              <Sparkles size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Meus Dados</h3>
              <p className="text-emerald-700 font-medium flex items-center gap-2">
                Ver perfil completo <ArrowRight size={18} />
              </p>
            </div>
          </div>
          </Link>
          
        </div>

        <button className="mt-12 flex items-center gap-2 text-slate-400 font-bold hover:text-red-500 transition-colors">
          <LogOut size={18} /> Sair da conta
        </button>
      </main>
    </div>
  );
}
