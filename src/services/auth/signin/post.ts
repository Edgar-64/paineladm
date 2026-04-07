export async function signin(data: unknown) {
  try {
    const res = await fetch("http://localhost:3333/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      // Isso ajuda a saber se o erro é na API (ex: senha errada ou erro de banco)
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro na autenticação');
    }

    return await res.json();
  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
    throw error;
  }
}