"use client";

import { useEffect, useState } from "react";
import { User } from "./DashModel";
import { getUser } from "../../services/dashboard/post";

export function useUserViewModel() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const data = await getUser();
      setUser(data);
    }
    loadUser();
  }, []);

  return { user };
}
