import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/src/services/signin/post'; 
import { SignInForm } from './SigninModel';

export function useSignIn() {
  const router = useRouter();
  
  const [form, setForm] = useState<SignInForm>({ 
    email: '', 
    password: '' 
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof SignInForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await signIn(form);
      // AJUSTE: Redirecionar para a Home/Dashboard após logar
      router.replace('/admin/users'); 
    } catch (err: any) {
      // AJUSTE: Captura de mensagem mais robusta
      setError(err.response?.data?.message || err.message || 'Erro ao realizar login');
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
}