import Image from "next/image"; // Importando o componente Image do Next.js
import Link from "next/link";

export default function About() {
  return (
    <div
      className="flex w-full"
      style={{
        height: "100vh", // Define a altura do contêiner como 100% da altura da viewport
        backgroundImage: "url('/imgProject/imgportifolio.jpg')", // Caminho para a imagem de fundo
        backgroundSize: "cover", // Faz a imagem cobrir todo o contêiner
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita que a imagem se repita
      }}
    >
      <div className="flex items-center justify-center w-full py-10">
        <div className="flex flex-col gap-6 p-8 bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-3xl sm:flex-row sm:items-center">
          <Image
            src="/imagePort.jpg" // Caminho correto para a imagem na pasta public
            alt="Foto de João Pedro" // Descrição da imagem
            className="rounded-full" // Estilos adicionais para a imagem
            width={200} // Largura da imagem (ajuste conforme necessário)
            height={200} // Altura da imagem (ajuste conforme necessário)
          />

          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">João Pedro</h2>
            <p className="font-medium text-lg text-gray-600">
              Olá, meu nome é João Pedro, tenho 24 anos e sou estudante de
              Sistemas para Internet no Centro de Aprendizagem Senac Santo
              Amaro. Atualmente, moro em Itapecerica da Serra com minha mãe.
              Embora não esteja trabalhando diretamente na área de
              desenvolvimento, estou adquirindo conhecimentos valiosos em
              tecnologia e programação através do meu curso. No momento, atuo no
              ramo de varejo, onde trabalho com a comercialização de tapetes.
              Essa experiência me proporcionou habilidades importantes em
              atendimento ao cliente e gestão de vendas. Estou animado para
              aplicar o que estou aprendendo em meu curso e, no futuro, espero
              fazer a transição para uma carreira no desenvolvimento de
              software, onde poderei combinar minha paixão por tecnologia com as
              habilidades que estou desenvolvendo.
            </p>
            <Link href="/contact" passHref>
              <button className="bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-full w-48 mt-5 py-3 transition duration-300">
                Entre em contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
