import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Brechó E-commerce",
      description:
        "Esta é uma aplicação onde foi desenvolvido uma loja com intuito da venda de vestimentas, o site ainda está em desenvolvimento e será concluído em breve. O mesmo está sendo construído com HTML, CSS e JavaScript.",
      gitUrl: "https://github.com/jpalmeida-dev/brecho-Ecommerce",
      imageUrl: "/imgProject/brecho.png",
    },
    {
      name: "Ecommerce Pizzaria",
      description:
        "E-commerce de Pizzaria, desenvolvido com HTML e CSS avançado. Oferece uma interface visualmente atraente, permitindo que os usuários escolham, personalizem e façam seus pedidos.",
      gitUrl: "https://github.com/jpalmeida-dev/pizzariaNovaes",
      imageUrl: "/imgProject/pizzaria.png",
    },
    {
      name: "Ecommerce Games",
      description:
        "Desenvolvido com HTML, CSS, Laravel e JavaScript. A plataforma permite a navegação e compra de jogos de forma rápida e segura, oferecendo uma experiência de usuário moderna e responsiva.",
      gitUrl: "https://github.com/jpalmeida-dev/deltaGames",
      imageUrl: "/imgProject/games.jpg",
    },
    {
      name: "Web Service",
      description:
        "O intuito do projeto é construir uma API utilizando como base o tema 'Viagens'. Desenvolvemos um site que lista os pacotes de viagens cadastrados no banco de dados, com seus respectivos hotéis.",
      gitUrl: "https://github.com/jpalmeida-dev/PI-Bravo",
      imageUrl: "/imgProject/passagens.jpg",
    },
  ];

  return (
    <div
      id="projects"
      className="relative min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Projetos Desenvolvidos
        </h1>
        <p className="text-xl mb-8">
          Os projetos abaixo foram feitos a mérito de construção de portfólio
          para obtenção de conhecimento.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-3xl flex"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-1/3 h-32 object-cover rounded-lg shadow-md mr-4"
            />
            <div className="flex flex-col justify-between w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="text-center">
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-full mt-3 py-2 px-4 transition duration-300"
                >
                  Ver no GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
