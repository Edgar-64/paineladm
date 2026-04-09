export async function getUser() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3000/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
