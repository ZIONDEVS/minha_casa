import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section id='sobre-nos' className='w-full h-auto md:h-[1250px] lg:h-[768px] py-[60px] lg:py-[100px] px-[100px] bg-[#72A66A]'>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Grid de Imagens */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                    {/* Primeira imagem (coluna 1) */}
                    <div className="col-span-1 row-span-2">
                        <Image
                            src="/about_1.png" // Primeira imagem
                            alt="About 1"
                            width={300}
                            height={600}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>

                    {/* Segunda imagem (coluna 2) */}
                    <div className="col-span-1">
                        <Image
                            src="/about_2.png" // Segunda imagem
                            alt="About 2"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>

                    {/* Terceira imagem (coluna 2) */}
                    <div className="col-span-1">
                        <Image
                            src="/about_3.png" // Terceira imagem
                            alt="About 3"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Texto */}
                <div className="lg:w-1/2 text-white lg:pl-10 mt-10 lg:mt-[-55px]">
                    <h1 className="lg:text-[75px] mb-6" style={{ fontWeight: 500 }}>Quem Somos</h1>
                    <p className="w-[540px] text-lg lg:text-[21px] font-normal mb-6 ">
                        Somos um lar para idosos que oferece um ambiente familiar, seguro e confortável, com diversas opções de lazer e atendimento personalizado para atender a todas as necessidades com excelência.
                    </p>
                    <p className="w-[540px] text-lg lg:text-[21px] font-normal mb-6">
                        Nossa estrutura segue todas as normas para casas de repouso, em uma localização privilegiada, a 500 metros da praia. Contamos com ambientes amplos e arejados, além de uma extensa área externa com solaríums, piscina, jardins, árvores frutíferas e hortas.
                    </p>
                    <button className="bg-[#4C7345] text-white px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <a href="">ENTRE EM CONTATO</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;