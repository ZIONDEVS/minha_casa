'use client'
import React, { useState } from "react";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Service {
  title: string;
  image: string;
  description: string;
  buttonText: string;
}


const services: Service[] = [
  {
    title: "Moradia Assistida",
    description:
      "Modalidade em que a pessoa idosa passa a morar no Residencial Minha Casa recebendo os cuidados de nossa equipe multidisciplinar 24 horas por dia, usufruindo de todos os serviços, atividades e refeições. ",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_1.png",
  },
  {
    title: "Hospedagem Temporária",
    description:
      "A Hospedagem Temporária é ideal para quem deseja passar alguns dias, finais de semana e feriados conosco. Essa modalidade é ideal também para períodos de reabilitação em que o hóspede fica conosco por um tempo pré-determinado, baseado em metas de recuperação.\n\nAssim como na Moradia Assistida, todos os serviços, atividades e refeições estão inclusas durante o período em que o hóspede permanecer conosco.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_2.png",
  },
  {
    title: "Day Care (Centro dia)",
    description:
      "Modalidade em que o hóspede desfruta de todos os nossos cuidados, serviços e infraestrutura durante os períodos diurno e vespertino, aproveitando todos os benefícios da convivência ativa. Ao fim de cada período, retorna para a sua própria casa.\n\nAs refeições (colação, almoço e lanche), os serviços e as atividades realizadas durante o dia estão incluídas no valor do período, proporcionando benefícios decorrentes da socialização e estimulando novas e antigas habilidades.\n\nÉ uma excelente opção para aqueles que desejam usufruir dos serviços pelos períodos de sua preferência.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_3.png",
  },
  {
    title: "Acompanhamento Hospitalar",
    description:
      "Modalidade em que um profissional de confiança e qualificado é disponibilizado para acompanhar a estadia de seu familiar durante um período de internação hospitalar, auxiliando nos cuidados de seu ente querido e lhe fazendo companhia.",
    buttonText: "ENTRE EM CONTATO",
    image: "/services/service_4.png",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <section id="servicos" className="w-full h-auto bg-white pt-[80px] lg:py-[120px] py-[80px]">
      <h1 className="text-[40px] lg:text-[75px] text-[#88A3E6] mb-[80px] lg:mb-[80px] font-medium text-center">
        Serviços
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:px-[120px]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Imagem */}
            <div className="w-[90%] h-[286px] lg:w-[286px] lg:h-[259px] overflow-hidden rounded-lg relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="w-[90%] lg:w-[286px] bg-[#82BFE0] rounded-lg shadow-md p-4 mt-[15px] md:mb-0 mb-[40px]">
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
                    fill
                    unoptimized
                    className={`object-contain transition-transform ${openIndex === index ? "" : "rotate-180"
                      }`}
                  />
                </div>
              </div>

              {openIndex === index && (
                <>
                  <p className="text-[18px] text-white mt-4 whitespace-pre-line md:max-w-[240px]">
                    {service.description}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5521973658192&text=Ol%C3%A1!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[229px] h-[50px] mb-[20px] flex mx-auto justify-center items-center bg-[#478EB2] text-white font-bold text-[14px] px-4 py-2 rounded-full mt-6 hover:bg-[#3b7ea0] transition"
                  >
                    {service.buttonText}
                  </a>

                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;