// src/pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Criar uma Tarefa</title>
        <meta name="description" content="Organize o seu dia a dia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold mb-2">Criar uma Tarefa</h1>
      <p className="text-gray-600 mb-6">Organize o seu dia a dia</p>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Digite um título"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Categoria
          </label>
          <select
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Selecione uma categoria</option>
            <option>Trabalho</option>
            <option>Estudo</option>
            <option>Pessoal</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descrição
          </label>
          <textarea
            id="description"
            placeholder="Descreva a tarefa"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Criar tarefa
          </button>
        </div>
      </form>
    </div>
  );
}