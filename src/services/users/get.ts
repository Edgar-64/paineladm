export async function getUsers() {
  const response = await fetch('http://localhost:3001/users', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(result.message || "Erro ao buscar usuários");
  return result;
}


export async function getUserById(id: number) {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Erro ao buscar usuário");
  return result;
}
