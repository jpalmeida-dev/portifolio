import Image from 'next/image';

const YourComponent = () => {
    return (
        <Image
            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src="/imgProfile.jpg" // Caminho correto para a imagem
            alt="Descrição da imagem"
            width={96} // Largura da imagem
            height={96} // Altura da imagem
        />
    );
};

export default YourComponent;