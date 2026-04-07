"use client";

import { useState } from "react";
import { SigninModel } from "./SigninModel";
import { signin } from "@/src/services/auth/signin/post";

export const useSigninViewModel = () => {
  const [form, setForm] = useState<SigninModel>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await signin(form);

    console.log(res);

    if (res.user) {
      alert("Login realizado!");
      window.location.href = "/dashboard";
    } else {
      alert("Erro no login");
    }
  };

  return { form, handleChange, handleSubmit };
};
