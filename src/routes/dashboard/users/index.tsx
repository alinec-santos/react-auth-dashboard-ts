import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import type { User } from "@/types";

export const Route = createFileRoute("/dashboard/users/")({
  component: UsersPage,
});

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("https://dummyjson.com/users?limit=20");
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    }

    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p>Carregando usuários...</p>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Usuários</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 bg-muted rounded-2xl p-4">
            <img
              src={user.image}
              alt={user.firstName}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <p className="text-sm text-muted-foreground">{user.company?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}