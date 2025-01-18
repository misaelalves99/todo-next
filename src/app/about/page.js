// src/app/about.js
import Head from "next/head";

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Saiba mais sobre o ToDoNext" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">Sobre o ToDoNext</h1>
        <p className="text-gray-600 mb-6 text-center">
          O ToDoNext é uma aplicação projetada para ajudar você a organizar suas tarefas e aumentar sua produtividade. Nossa missão é simplificar sua rotina e garantir que você nunca perca uma tarefa importante.
        </p>
      </div>
    </div>
  );
}
