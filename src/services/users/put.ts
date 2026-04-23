import { API_URL } from "../api";
export async function updateUser(
  id: number,
  data: { name?: string; email?: string; password?: string },
) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(result.message || "Erro ao atualizar usuário");
  return result;
}
