// src/components/Header.tsx
export default function Header() {
    return (
      <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-yellow-400 w-8 h-8 rounded mr-2"></div>
          <span className="font-bold text-lg">ToDoNext</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-white hover:underline">Tarefas</a>
          <a href="/todos/create" className="text-white hover:underline">Criar Tarefa</a>
          <a href="/about" className="text-white hover:underline">Sobre</a>
        </nav>
      </header>
    );
}
