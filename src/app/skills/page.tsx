import React from "react";
import Image from "next/image";

const skills = [
  {
    name: "JavaScript",
    imageUrl: "/imgProject/javascript.png", // Caminho para a imagem
  },
  {
    name: "HTML",
    imageUrl: "/imgProject/html.jpg",
  },
  {
    name: "CSS",
    imageUrl: "/imgProject/css.jpg",
  },
  {
    name: "Laravel",
    imageUrl: "/imgProject/laravel.webp",
  },
  {
    name: "Java",
    imageUrl: "/imgProject/java.webp",
  },
  {
    name: "React",
    imageUrl: "/imgProject/react.png",
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-black mb-8">Minhas Habilidades</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            <Image
              src={skill.imageUrl}
              alt={skill.name}
              width={100} // Ajuste conforme necessário
              height={100} // Ajuste conforme necessário
              className="rounded-full border-2 border-gray-300 shadow-md mb-2"
            />
            <h2 className="mt-2 text-lg text-black font-semibold text-center">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
