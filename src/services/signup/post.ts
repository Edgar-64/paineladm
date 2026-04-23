export async function signUp(data: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await fetch('http://localhost:3001/users/signup', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Erro ao criar conta");
  return result;
}
