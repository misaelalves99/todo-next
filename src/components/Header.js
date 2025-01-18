// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="bg-blue-500 text-white p-4">
//       <nav className="container mx-auto flex justify-between">
//         <Link href="/">Lista de Tarefas</Link>
//         <Link href="/todos/create">Criar Tarefa</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-yellow-400 w-8 h-8 rounded mr-2"></div>
        <span className="font-bold text-lg">ToDoNext</span>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="text-white hover:underline">Tarefas</Link>
        <Link href="/todos/create" className="text-white hover:underline">Criar Tarefa</Link>
        <Link href="/about" className="text-white hover:underline">Sobre</Link>
      </nav>
    </header>
  );
}
