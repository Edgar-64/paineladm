export async function signup(data: unknown) {
  const res = await fetch("http://localhost:3333/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
