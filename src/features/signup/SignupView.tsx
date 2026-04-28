"use client"; // Necessário para usar Hooks no Next.js (App Router)

import { useSignUp } from "./SignupViewModel";
import { Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
export default function SignUpView() {
  const router = useRouter(); // Inicialize o roteador
  const { form, loading, handleChange, handleSubmit } = useSignUp();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Chama a função da ViewModel
    const success = await handleSubmit(e);

    // Se o cadastro deu certo, avisa o usuário e redireciona
    if (success) {
      alert("Cadastro realizado com sucesso!");
      router.push("/auth"); // Altere para a rota exata da sua página de login
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-400 uppercase ml-1">
          Nome Completo
        </label>
        <div className="relative">
          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
            placeholder="Seu nome"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-400 uppercase ml-1">
          E-mail
        </label>
        <div className="relative">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="email"
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
            placeholder="exemplo@email.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-400 uppercase ml-1">
          Senha
        </label>
        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="password"
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full py-4 bg-emerald-600 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 group active:scale-[0.98] disabled:opacity-70"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={16} />
        ) : (
          "Finalizar Cadastro"
        )}
        {!loading && (
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        )}
      </button>
    </form>
  );
}
