export async function signin(data: unknown) {
  const res = await fetch("http://localhost:3001/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
