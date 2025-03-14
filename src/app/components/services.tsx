'use client'
import React, { useState } from "react";
import Image from "next/image";

interface Service {
  title: string;
  image: string; // Imagem para o card
  description: string;
  buttonText: string; 
}

const services: Service[] = [
  {
    title: "Hospedagem Permanente",
    description:
      "O hóspede passa a morar no Residencial Minha Casa e recebe cuidados multiprofissionais 24h por dia, estando inclusas nesta modalidade, todas as nossas atividades.\n\nOs familiares participam da vida diária do hóspede e podem visitá-los a qualquer momento. O monitoramento por câmeras garante segurança e tranquilidade.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_1.png",
  },
  {
    title: "Hospedagem Curta",
    description:
      "A Hospedagem Temporária é ideal para quem deseja passar alguns dias, finais de semana e feriados conosco. Essa modalidade é ideal também para períodos de reabilitação em que o hóspede fica conosco por um tempo pré-determinado, baseado em metas de recuperação.\n\nAssim como na Moradia Assistida, todos os serviços, atividades e refeições estão inclusas durante o período em que o hóspede permanecer conosco.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_2.png",
  },
  {
    title: "Day Care - Centro dia",
    description:
      "Modalidade em que o hóspede desfruta de todos os nossos cuidados, serviços e infraestrutura durante os períodos diurno e vespertino, aproveitando todos os benefícios da convivência ativa. Ao fim de cada período, retorna para a sua própria casa.\n\nAs refeições (colação, almoço e lanche), os serviços e as atividades realizadas durante o dia estão incluídas no valor do período, proporcionando benefícios decorrentes da socialização e estimulando novas e antigas habilidades.\n\nÉ uma excelente opção para aqueles que desejam usufruir dos serviços pelos períodos de sua preferência.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_3.png",
  },
  {
    title: "Acompanhante hospitalar",
    description:
      "Modalidade em que um profissional de confiança e qualificado é disponibilizado para acompanhar a estadia de seu familiar durante um período de internação hospitalar, auxiliando nos cuidados de seu ente querido e lhe fazendo companhia.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_4.png",
  },
];

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

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openInfoCards, setOpenInfoCards] = useState<boolean[]>(new Array(infos.length).fill(false));

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleInfoCard = (index: number) => {
    setOpenInfoCards((prev) => {
      const newOpenInfoCards = [...prev];
      newOpenInfoCards[index] = !newOpenInfoCards[index];
      return newOpenInfoCards;
    });
  };

  return (
    <section id="servicos" className="w-full h-auto bg-white lg:py-[120px]">
      <h1 className="lg:text-[75px] text-[#88A3E6] lg:mb-[80px] font-medium text-center">
        Serviços
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-[120px]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Imagem */}
            <div className="w-[286px] h-[259px] overflow-hidden rounded-lg relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                objectFit="cover"
                unoptimized
              />
            </div>

            {/* Card */}
            <div className="w-[286px] bg-[#82BFE0] rounded-lg shadow-md p-4 mt-[15px]">
              {/* Título com seta */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <h2 className="w-[134px] text-[21px] text-white font-semibold">
                  {service.title}
                </h2>
                <div className="relative w-6 h-6">
                  <Image
                    src="/services/arrow.png"
                    alt="Seta"
                    layout="fill"
                    objectFit="contain"
                    unoptimized
                    className={`transition-transform ${openIndex === index ? "" : "rotate-180"
                      }`}
                  />
                </div>
              </div>

              {/* Descrição (controlada pelo estado) */}
              {openIndex === index && (
                <>
                  <p className="text-[16.6px] text-white mt-4 whitespace-pre-line">
                    {service.description}
                  </p>
                  <button className="w-[229px] h-[50px] mb-[20px] flex mx-auto justify-center items-center bg-[#478EB2] text-white font-bold text-[14px] px-4 py-2 rounded-full mt-6 hover:bg-[#3b7ea0] transition">
                    {service.buttonText}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Atividades */}
      <div>
        <h1 className="lg:text-[75px] text-[#88A3E6] lg:mt-[120px] font-medium text-center">
          Atividades
        </h1>

        <div className="w-full h-[1080px] relative">
          <Image
            src="/services/atividades.png"
            alt="atividades"
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        </div>
      </div>

      {/* E tem mais */}
      <div>
        <h1 className="lg:text-[75px] text-[#88A3E6] lg:mt-[120px] pb-[80px] font-medium text-center">
          E tem mais
        </h1>
        <div className="flex flex-col md:flex-row gap-4 px-[120px]">
          {/* Cards 1 a 5 (esquerda) */}
          <div className="flex-1 flex flex-col gap-4">
            {infos.slice(0, 5).map((info, index) => (
              <div
                key={index}
                className={`w-full bg-[#88A3E6] rounded-lg shadow-md p-6 cursor-pointer transition-all ${
                  openInfoCards[index] ? 'h-auto' : 'h-[80px]'
                }`}
                onClick={() => toggleInfoCard(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-[26px] font-semibold text-[18px]">
                    {info.title}
                  </h2>
                  <div className="relative w-6 h-6">
                    <Image
                      src="/services/arrow.png"
                      alt="Seta"
                      layout="fill"
                      objectFit="contain"
                      unoptimized
                      className={`transition-transform ${
                        openInfoCards[index] ? '' : 'rotate-180'
                      }`}
                    />
                  </div>
                </div>
                {openInfoCards[index] && (
                  <p className="w-[460px] mt-4 text-white text-[21px] font-normal">
                    {info.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Cards 6 a 10 (direita) */}
          <div className="flex-1 flex flex-col gap-4">
            {infos.slice(5, 10).map((info, index) => (
              <div
                key={index + 5}
                className={`w-full bg-[#88A3E6] rounded-lg shadow-md p-6 cursor-pointer transition-all ${
                  openInfoCards[index + 5] ? 'h-auto' : 'h-[80px]'
                }`}
                onClick={() => toggleInfoCard(index + 5)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-white font-semibold text-[18px]">
                    {info.title}
                  </h2>
                  <div className="relative w-6 h-6">
                    <Image
                      src="/services/arrow.png"
                      alt="Seta"
                      layout="fill"
                      objectFit="contain"
                      unoptimized
                      className={`transition-transform ${
                        openInfoCards[index + 5] ? '' : 'rotate-180'
                      }`}
                    />
                  </div>
                </div>
                {openInfoCards[index + 5] && (
                  <p className="w-[460px] mt-4 text-white text-[21px] font-normal">
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

export default Services;