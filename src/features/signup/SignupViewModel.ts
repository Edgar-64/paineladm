import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Alterado de expo-router para next/navigation
import { signUp } from '@/src/services/signup/post'; // Ajuste o path conforme sua estrutura no Next.js
import { SignUpForm } from './SignupModel';

export const useSignUp = () => {
  const router = useRouter();
  
  const [form, setForm] = useState<SignUpForm>({ 
    name: '',
    email: '', 
    password: '' 
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof SignUpForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    // No Next.js, geralmente chamamos isso em um formulário HTML
    if (e) e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await signUp(form);
      // No Next.js, usamos push ou replace do next/navigation
      router.replace('/login');
    } catch (e: any) {
      setError(e.message || 'Ocorreu um erro ao criar a conta');
    } finally {
      setLoading(false);
    }

  };

  return { 
    form, 
    loading, 
    error, 
    handleChange, 
    handleSubmit 

  };
};