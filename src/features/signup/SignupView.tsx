"use client";

import { useSignupViewModel } from "./SignupViewModel";
import { Form } from "@/src/components/molecules/Form";
import { Button } from "@/src/components/atoms/Button";

export const SignupView = () => {
  const { handleChange, handleSubmit } = useSignupViewModel();

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-2xl font-semibold mb-6 text-center">Criar conta</h1>

        <Form label="Nome" name="name" onChange={handleChange} />
        <Form label="Email" name="email" onChange={handleChange} />
        <Form
          label="Senha"
          name="password"
          type="password"
          onChange={handleChange}
        />

        <Button onClick={handleSubmit}>Cadastrar</Button>

        <p className="text-sm mt-6 text-center text-gray-500">
          Já tem conta?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};
