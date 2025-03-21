'use client';
import React, { useState } from "react";
import Image from "next/image";

const infos = [
  {
    title: '1. Localização privilegiada',
    description:
      'Unidades situadas em bairros nobres, próximas à praia e a reservas ecológicas, em uma região onde estão situados hospitais, farmácias, igrejas, delegacias, bombeiros e muitas outras conveniências.',
  },
  {
    title: '2. Suítes',
    description:
      'Todos os nossos quartos são suítes amplas e arejadas, mobiliadas com camas, guarda roupas e mesas de cabeceira de madeira maciça, além dos banheiros 100% adaptados.',
  },
  {
    title: '3. Colchões Premium',
    description:
      'Prezando pelo conforto dos nossos moradores e hóspedes, as nossas camas estão equipadas com colchões de alta qualidade, seguindo os padrões dos hotéis executivos.',
  },
  {
    title: '4. Chuveiros a Gás',
    description:
      'Nossos banheiros são amplos e acessíveis para idosos e cadeirantes, contando com chuveiros com aquecimento a gás para garantir a temperatura e a pressão ideais para um banho de qualidade.',
  },
  {
    title: '5. Chamada de Emergência',
    description:
      'Possuímos um Sistema de Chamada de Emergência (chamada de enfermagem) em todos os nossos quartos e banheiros.',
  },
  {
    title: '6. Climatização',
    description:
      'Ambientes Climatizados através de ar condicionado Split Inverter, quente e frio.',
  },
  {
    title: '7. Piso de porcelanato',
    description:
      'Piso de porcelanato antiderrapante ao longo de toda a edificação.',
  },
  {
    title: '8. Internet',
    description:
      'Internet disponível aos moradores, hóspedes e convidados ao longo de toda a edificação.',
  },
  {
    title: '9. Monitoramento 24h',
    description:
      'Possuímos câmeras de videomonitoramento 24 horas.',
  },
  {
    title: '10. Contato com a Natureza',
    description:
      'Contamos com extensas áreas externas, com solariums, varandas, jardins com diversas flores, árvores frutíferas e áreas de convivência.',
  },
];

const Facilities = () => {
const [openInfoCards, setOpenInfoCards] = useState<boolean[]>(new Array(infos.length).fill(false));

  const toggleInfoCard = (index: number) => {
    setOpenInfoCards((prev) => {
      const newOpenInfoCards = [...prev];
      newOpenInfoCards[index] = !newOpenInfoCards[index];
      return newOpenInfoCards;
    });
  };

  return (
    <section id="estrutura" className="w-full h-auto bg-white pt-[80px] lg:pt-[120px] lg:pb-[40px]">
 
 <div>
        <h1 className="text-[40px]  lg:text-[75px] text-[#88A3E6]  pb-[80px] font-medium text-center leading-none">
          E tem mais
        </h1>
        <div className="w-[100%] flex mx-auto flex-col lg:flex-row gap-4 lg:px-[120px] px-[20px]">
          <div className="flex-1 flex flex-col gap-4">
            {infos.slice(0, 5).map((info, index) => (
              <div
                key={index}
                className={`w-full bg-[#88A3E6] rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ease-in-out ${openInfoCards[index] ? 'max-h-[500px]' : 'max-h-[100px]'
                  } overflow-hidden`}
                onClick={() => toggleInfoCard(index)}
              >
                <div className="flex justify-between">
                  <h2 className="lg:w-full w-[240px] text-white text-[22px] lg:text-[26px] font-semibold flex items-center">
                    {info.title}
                  </h2>
                  <div className="relative w-[22px] h-[22px]">
                    <Image
                      src="/services/arrow.svg"
                      alt="Seta"
                      fill
                      unoptimized
                      className={`object-contain transition-transform w-[22px] h-[22px] ${openInfoCards[index] ? '' : 'rotate-180'
                        }`}
                    />
                  </div>
                </div>
                {openInfoCards[index] && (
                  <p className="max-w-[460px] mt-4 text-white text-[18px] lg:text-[21px] font-normal">
                    {info.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {infos.slice(5, 10).map((info, index) => (
              <div
                key={index + 5}
                className={`w-full bg-[#88A3E6] rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ease-in-out ${openInfoCards[index + 5] ? 'max-h-[500px]' : 'max-h-[100px]'
                  } overflow-hidden`}
                onClick={() => toggleInfoCard(index + 5)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="w-full lg:w-full text-white font-semibold text-[22px] lg:text-[26px]">
                    {info.title}
                  </h2>
                  <div className="relative w-[22px] h-[22px]">
                    <Image
                      src="/services/arrow.svg"
                      alt="Seta"
                      fill
                      unoptimized
                      className={`object-contain transition-transform w-[22px] h-[22px] ${openInfoCards[index + 5] ? '' : 'rotate-180'
                        }`}
                    />
                  </div>
                </div>
                {openInfoCards[index + 5] && (
                  <p className="lg:max-w-[450px] mt-4 text-white text-[18px] lg:text-[21px] font-normal">
                    {info.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
