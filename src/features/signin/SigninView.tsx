"use client";

import { Button } from "@/src/components/atoms/Button";
import { Form } from "@/src/components/molecules/Form";
import Link from "next/link";
import { useSigninViewModel } from "./SigninViewModel";

export const SigninView = () => {
  const { handleChange, handleSubmit } = useSigninViewModel();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl mb-4">Login</h1>

        <Form label="Email" name="email" onChange={handleChange} />
        <Form
          label="Senha"
          name="password"
          type="password"
          onChange={handleChange}
        />

        <Button onClick={handleSubmit}>Entrar</Button>

        <p className="text-sm mt-4 text-center">
          Não tem conta?{" "}
          <Link href="/signup" className="text-blue-500">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};
