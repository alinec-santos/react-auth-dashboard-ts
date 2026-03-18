import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import type { Todo } from "@/types";

export const Route = createFileRoute('/dashboard/todos/')({
  component: TodosPage,
})

function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTodos() {
      const response = await fetch("https://dummyjson.com/todos?limit=20");
      const data = await response.json();
      setTodos(data.todos);
      setLoading(false);
    }

    loadTodos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p>Carregando todos...</p>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Todos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-4 bg-muted rounded-2xl p-4">
            <p>{todo.todo}</p>
            <p>{todo.completed ?"Concluido": "Pendente"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}