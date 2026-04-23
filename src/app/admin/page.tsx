'use client';

import { getUsers } from "@/src/services/users/get";
import { useState } from "react";
import { 
  DollarSign, Users, BarChart3, ArrowUpRight, ArrowDownLeft, Download 
} from "lucide-react";
import Sidebar from "../../components/organisms/Sidebar";
import DashboardLayout from "../../components/templates/DashboardLayout";

export default function GenericDashboardPage() {
  const [transactions] = useState([
    { id: 1, type: 'Entrada', title: 'Venda de Produto', value: 'R$ 250,00', date: 'Hoje' },
    { id: 2, type: 'Saída', title: 'Pagamento Fornecedor', value: 'R$ 800,00', date: 'Ontem' },
    { id: 3, type: 'Saída', title: 'Manutenção Mensal', value: 'R$ 150,00', date: '02 Abr' },
  ]);

  const users = getUsers;
  const chartData = [45, 55, 40, 90, 60, 85, 75];
  const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL"];

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ID,Tipo,Titulo,Valor,Data\n"
      + transactions.map(t => `${t.id},${t.type},${t.title},${t.value},${t.date}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "relatorio_geral.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <main className="animate-in fade-in duration-500">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Visão Geral</h2>
          <p className="text-slate-500 font-medium text-sm">Acompanhe seus indicadores de desempenho em tempo real.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center transition-all hover:shadow-md group">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Faturamento total</p>
              <h3 className="text-2xl font-black text-slate-900">R$ 25.000,00</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <DollarSign size={20} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center transition-all hover:shadow-md group">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Clientes Ativos</p>
              <h3 className="text-2xl font-black text-slate-900">1.245</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Users size={20} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center transition-all hover:shadow-md group">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Análises Geradas</p>
              <h3 className="text-2xl font-black text-slate-900">320</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BarChart3 size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 min-h-[450px] flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-bold text-slate-900 text-lg tracking-tight">Performance Mensal</h3>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-wider">Dados Consolidados</span>
            </div>
            <div className="flex-1 flex items-end justify-between gap-4 px-2 pb-4">
              {chartData.map((h, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group">
                  <span className="text-[10px] font-black text-slate-300 mb-2 group-hover:text-emerald-600 transition-colors">{h}%</span>
                  <div 
                    className="w-full max-w-[45px] bg-emerald-500 rounded-xl transition-all duration-500 group-hover:bg-emerald-400 relative overflow-hidden"
                    style={{ height: `${h * 2.5}px` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                  <span className="text-[10px] mt-4 font-bold text-slate-400 uppercase tracking-widest">{months[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
            <h3 className="font-bold text-slate-900 text-lg mb-8 tracking-tight">Atividades Recentes</h3>
            <div className="space-y-4 flex-1">
              {transactions.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:bg-white hover:border-emerald-100 hover:shadow-sm transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl ${t.type === 'Entrada' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                      {t.type === 'Entrada' ? <ArrowUpRight size={18} /> : <ArrowDownLeft size={18} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{t.title}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{t.date}</p>
                    </div>
                  </div>
                  <span className={`font-black text-sm ${t.type === 'Entrada' ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {t.type === 'Entrada' ? `+` : `-`} {t.value.split(',')[0]}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={handleExport}
              className="w-full mt-8 py-4 rounded-2xl bg-emerald-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-[0.97] flex items-center justify-center gap-2"
            >
              <Download size={16} /> Exportar Dados
            </button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}