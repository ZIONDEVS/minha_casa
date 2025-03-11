"use client";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className="pt-20 h-[668px] md:h-[700px] lg:h-screen w-full overflow-hidden relative">
            {/* Div para a imagem do banner */}
            <div className="absolute inset-0 z-0">
                <Image
                    src='/banner_desktop.jpeg'
                    alt="Imagem banner"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={100}
                    unoptimized
                    className="w-full h-auto mt-[173px]"
                />
            </div>

            {/* Div para o degrade escuro no final da imagem */}
            <div
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent z-10"
            />

            {/* Conteúdo sobreposto (se necessário) */}
            <div className="ml-[120px] top-[360px] relative z-20">
                <h1 className="font-semibold lg:text-[60px] lg:leading:[57px] text-white">Hospedagem Permanente</h1>
                <h2 className="mt-[-15px] font-light lg:text-[40px] lg:leading:[66px] text-white">Venha morar conosco</h2>

                <button className="lg:w-[229px] lg:h-[50px] bg-[#88A3E6] mt-[28px] rounded-[200px] uppercase font-bold px-[44px] py-[16px] text-[13.7px] cursor-pointer">Entre em contato</button>
            </div>
        </section>
    );
};

export default Hero;