"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import SignInView from "@/src/features/signin/SigninView";
import SignUpView from "@/src/features/signup/SignupView";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-white rounded-[40px] p-10 shadow-xl shadow-slate-200/50 border border-white">
        
        {/* Header Dinâmico */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-100">
            <Lock size={28} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {isLogin ? "Bem-vindo de volta" : "Criar sua conta"}
          </h2>
          <p className="text-slate-500 font-medium mt-2">
            {isLogin ? "Acesse sua conta para gerenciar dados." : "Comece sua jornada agora mesmo."}
          </p>
        </div>

        <SignInView />

        {/* Footer de Troca */}
        <div className="mt-8 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-500 text-sm font-medium">
            {isLogin ? "Ainda não tem conta?" : "Já possui conta?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-emerald-600 font-black hover:underline underline-offset-4"
            >
              {isLogin ? "Criar conta" : "Fazer Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}