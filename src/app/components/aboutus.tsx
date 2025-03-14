import React from 'react';

const AboutUs = () => {
    return (
        <section
            id="sobre-nos"
            className="w-full h-auto flex flex-col lg:flex-row"
        >
            {/* Lado Esquerdo - Texto */}
            <div className="w-full lg:w-1/2 bg-[#72A66A] text-white flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 lg:py-[100px]">
                <h1 className="text-[40px] lg:text-[75px] font-medium mb-6 text-center lg:text-left">
                    Quem Somos
                </h1>
                <p className="w-[340px] text-[21px] lg:text-[21px] font-normal mb-6 text-center lg:text-left">
                    Somos um Lar para Idosos dedicado a oferecer ambientes familiares, seguros, confortáveis e repletos de opções de lazer para os nossos moradores e hóspedes.
                </p>
                <p className="w-[340px] text-[21px] lg:text-[21px] font-normal mb-6 text-center lg:text-left">
                Provemos um atendimento personalizado de excelência em nossas unidades, que estão situadas em localizações privilegiadas e contam com ambientes cuidadosamente planejados, amplos e arejados, além de possuírem extensas áreas externas para convívio.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <button className="bg-[#4C7345] w-[229px] h-[50px] text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 ease-in-out hover:scale-105">
                        ENTRE EM CONTATO
                    </button>
                </div>
            </div>

            {/* Lado Direito - Fundo Cinza com Texto */}
            <div className="w-full lg:w-1/2 h-[510px] lg:h-auto bg-gray-300 flex items-center justify-center py-12 lg:py-0">
                <p className="text-gray-600 text-lg">Vídeo aqui</p>
            </div>
        </section>
    );
};

export default AboutUs;
