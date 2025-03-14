'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Unit {
  id: number;
  name: string;
  image: string;
  modalImages: string[];
  description: string;
  address: string;
  phones: string[];
}

const unitsData: Unit[] = [
  {
    id: 1,
    name: 'Unidade Praia de Itaipú',
    image: '/praia_itaipu.png',
    modalImages: [
      '/units_carrossel/units_1.png',
      '/units_carrossel/units_2.png',
      '/units_carrossel/units_3.png'
    ],
    description:
      'Localizada a 100 metros da Praia de Itaipú e em uma região onde estão situados hospitais, farmácias, igrejas, delegacias, bombeiros e muitas outras conveniências.\n\nNa Unidade Praia de Itaipu todos os quartos são suítes, muito amplas, arejadas, climatizadas (ar quente/frio), com mobília de madeira maciça e colchões premium que seguem o padrão dos hotéis executivos.\n\nContamos com alarmes de enfermagem ao lado de cada cama e de cada vaso sanitário. Os banheiros possuem acessibilidade e contam com chuveiros com aquecimento a gás para maior qualidade do banho.\n\nO piso da área interna e externa é integralmente de porcelanato antiderrapante. Na área externa contamos com dois elevadores de acessibilidade, solariums, fonte contemplativa, áreas para shows e eventos, jardins com árvores frutíferas, além de uma ampla varanda com vista externa. ',
    address: 'Estrada Francisco da Cruz Nunes, 1628, Itaipú - Niterói/RJ',
    phones: ['+55 (21) 97856-8192', '+55 (21) 3254-3790'],
  },
  {
    id: 2,
    name: 'Unidade Bairro Peixoto',
    image: '/bairro_peixoto.png',
    modalImages: [
      '/units_carrossel/units_1.png',
      '/units_carrossel/units_2.png',
      '/units_carrossel/units_3.png'
    ],
    description:
      'Situada em um bairro planejado, em meio a uma área de preservação ecológica, a Unidade Bairro Peixoto conta com suítes individuais, duplas (ou para casais) e coletivas. Todos os quartos são suítes, amplas, arejadas, climatizadas (ar quente/frio), com mobília de madeira maciça e com colchões premium que seguem o padrão dos hotéis executivos.\n\nContamos com alarmes de enfermagem ao lado de cada cama e de cada vaso sanitário. Os banheiros possuem acessibilidade e contam com chuveiros com aquecimento a gás para maior qualidade do banho.\n\nA nossa área externa conta com solarium, jardins com árvores frutíferas, além de uma ampla varanda com vista externa. O piso das áreas interna e externa é integralmente de porcelanato antiderrapante. Dispomos também de uma fonte junto ao jardim interno que proporciona um ambiente harmonioso e contemplativo.',
    address: 'Rua Exemplo, 123, Bairro Peixoto - RJ',
    phones: ['+55 (21) 91234-5678', '+55 (21) 98765-4321'],
  },
];

const Units = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const handleOpenModal = (unit: Unit) => {
    const unitsSection = document.getElementById('units');
    if (unitsSection) {
      unitsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSelectedUnit(unit);
  };

  return (
    <section id="units" className="w-full lg:px-[153px] px-[16px] py-[80px] lg:py-[120px] bg-white overflow-hidden">
      <h1 className="text-[#88A3E6] text-center font-medium text-[36px] lg:text-[75px] mb-[80px]">
        Nossas Unidades
      </h1>

      <div className="flex flex-col lg:flex-row justify-center lg:gap-8">
        {unitsData.map((unit) => (
          <div
            key={unit.id}
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer mt-[40px]"
            onClick={() => handleOpenModal(unit)}
          >
            <div className="relative w-full h-[320px] lg:w-[555px] lg:h-[300px]">
              <Image
                src={unit.image}
                alt={unit.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="p-4 text-left bg-[#88A3E6] h-[88px] flex justify-between items-center">
              <h2 className="text-[22px] font-semibold">{unit.name}</h2>
              <button className="text-[50px] font-light cursor-pointer">+</button>
            </div>
          </div>
        ))}
      </div>

      {selectedUnit && (
        <div className="absolute left-0 right-0 top-[620px] lg:top-[783px] bg-black/50 py-10 z-40">
          <div className="bg-[#478EB2] text-white p-6 rounded-xl shadow-lg w-[90%] lg:w-[960px] mx-auto relative px-[30px] lg:px-[60px]">
            <button
              className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] absolute top-[40px] right-[20px] lg:top-[40px] lg:right-[40px] text-white text-2xl font-normal border-[3px] rounded-full hover:text-gray-300"
              onClick={() => setSelectedUnit(null)}
            >
              <Image
                src="/x_button.png"
                alt="X"
                unoptimized
                fill
                className="p-2"
              />
            </button>

            <h2 className="lg:text-[46px] text-[40px] leading-[110%] mt-[100px] lg:mt-[20px] font-semibold">{selectedUnit.name}</h2>
            <p className="mt-4 text-[21px] whitespace-pre-line font-light">{selectedUnit.description}</p>

            <div className="flex items-center mt-4">
              <Image
                src="/endereco.png"
                alt="Endereço"
                width={43}
                height={43}
                className="mr-3 w-[43px] h-[43px]"
              />

              <p className="text-[20px] font-light">{selectedUnit.address}</p>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <Image
                  src="/telefone.png"
                  alt="Telefone"
                  width={43}
                  height={43}
                  className="mr-3 w-[43px] h-[43px]"
                />
                <div className="flex flex-col lg:flex-row gap-x-4">
                  {selectedUnit.phones.map((phone, index) => (
                    <span key={index} className="text-[20px] font-light">
                      {phone}
                      {index !== selectedUnit.phones.length - 1 && (
                        <span className="ml-5">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Carrossel de Imagens */}
            <div className="mt-8 mb-[100px] relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.custom-pagination',
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {selectedUnit.modalImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[200px] lg:h-[280px]">
                      <Image
                        src={image}
                        alt={`${selectedUnit.name} ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Setas personalizadas */}
              <div className="custom-next absolute top-1/2 right-[-27px] transform -translate-y-1/2 z-10 cursor-pointer">
                <Image
                  src="/arrow-right.png"
                  alt="Próxima"
                  width={25}
                  height={25}
                  unoptimized
                />
              </div>
              <div className="custom-prev absolute top-1/2 left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer">
                <Image
                  src="/arrow-left.png"
                  alt="Anterior"
                  width={25}
                  height={25}
                  unoptimized
                />
              </div>

              {/* Paginação personalizada */}
              <div
                className="custom-pagination flex justify-center mt-4 space-x-2"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1rem',
                }}
              >
                {/* Estilos inline para as bolinhas */}
                <style global jsx>
                  {`
                    .custom-pagination .swiper-pagination-bullet {
                      background-color: gray;
                      opacity: 1;
                      width: 8px;
                      height: 8px;
                      margin: 0 8px;
                      cursor: pointer;
                    }
                    .custom-pagination .swiper-pagination-bullet-active {
                      background-color: white;
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Units;