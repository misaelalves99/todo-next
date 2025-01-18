import Button from "@/components/Button";
import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

import Checkbox from "@/components/Checkbox";

import { deleteTodo, toggleTodoStatus } from "@/actions";

export default async function Home() {
  // Resgatando dados do banco
  const todos = await db.todo.findMany();

  return (
    <>
      <main className="container mx-auto p-4 min-h-screen">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">Tarefas</h1>
          <p className="text-gray-600">minhas tarefas</p>
          <div className="h-1 w-20 bg-red-500 mx-auto mt-2"></div>
        </header>

        <div className="space-y-6 max-w-md mx-auto">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`bg-white p-6 rounded-lg shadow-md border ${
                todo.status === "completa" ? "bg-green-200" : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{todo.titulo}</h2>
                  <p className="text-gray-600 text-sm">{todo.descricao}</p>
                </div>
              </div>

              <div className="flex space-x-3 mt-4 mb-4">
                <Link
                  href={`/todos/${todo.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visualizar
                </Link>
                <Link
                  href={`/todos/${todo.id}/edit/`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </Link>
                <form action={deleteTodo} className="inline-block">
                  <input type="hidden" name="id" value={todo.id} />
                  <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Excluir
                  </Button>
                </form>
              </div>
              <form action={toggleTodoStatus} className="flex items-center">
                  <input type="hidden" name="id" value={todo.id} />
                  <Checkbox checked={todo.status === "completa"} />
                  <label className="ml-2 text-sm italic text-gray-500">Completar Tarefa</label>
              </form>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}