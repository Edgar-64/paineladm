import { API_URL } from "../api";
export async function deleteUser(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(result.message || "Erro ao excluir usuário");
  return result;
}
