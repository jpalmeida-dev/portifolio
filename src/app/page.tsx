import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div
      className="flex w-full"
      style={{
        minHeight: "100vh", // Define a altura mínima do contêiner
        backgroundImage: "url('/imgProject/imgportifolio.jpg')", // Caminho para a imagem de fundo
        backgroundSize: "cover", // Faz a imagem cobrir todo o contêiner
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita que a imagem se repita
      }}
    >
      <div className="flex items-center justify-center w-full py-10">
        <div className="flex flex-col gap-1 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-sm sm:flex-row sm:items-center sm:p-4">
          <Image
            src="/imagePort.jpg" // Caminho correto para imagem
            alt="Foto de João Pedro"
            className="rounded-full" // Bordas redondas
            width={100} // Largura da imagem
            height={100} // Altura da imagem
          />

          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800">João Pedro</h2>
            <p className="font-medium text-sm text-gray-600">
              Olá, meu nome é João Pedro, tenho 24 anos e sou estudante de
              Sistemas para Internet no Centro de Aprendizagem Senac Santo
              Amaro. Atualmente, moro em Itapecerica da Serra com minha mãe.
              Estou adquirindo conhecimentos valiosos em tecnologia e
              programação através do meu curso. No momento, atuo no ramo de
              varejo, onde trabalho com a comercialização de tapetes. Estou
              animado para aplicar o que estou aprendendo em meu curso e, no
              futuro, espero fazer a transição para uma carreira no
              desenvolvimento de software.
            </p>
            <Link href="/contact" passHref>
              <button className="bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-full w-full sm:w-48 mt-2 py-2 transition duration-300">
                Entre em contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}