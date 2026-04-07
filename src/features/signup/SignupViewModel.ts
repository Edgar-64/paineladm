"use client";

import { useState } from "react";
import { SignupModel } from "./SignupModel";
import { signup } from "@/src/services/auth/signup/post";

export const useSignupViewModel = () => {
  const [form, setForm] = useState<SignupModel>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await signup(form);

    console.log(res);

    if (res?.id || res?.email) {
      alert("Usuário criado com sucesso!");
      window.location.href = "/signin";
    } else {
      alert("Erro ao cadastrar");
    }
  };

  return { form, handleChange, handleSubmit };
};
