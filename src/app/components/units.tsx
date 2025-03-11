'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Unit {
  id: number;
  name: string;
  image: string; // Imagem para o card
  modalImages: string[]; // Imagens para o modal
  description: string;
  address: string;
  phones: string[];
}

const unitsData: Unit[] = [
  {
    id: 1,
    name: 'Unidade Praia de Itaipú',
    image: '/praia_itaipu.png', // Imagem do card
    modalImages: ['/units_carrossel/units_1.png', '/units_carrossel/units_2.png', '/units_carrossel/units_3.png'], // Imagens do modal
    description:
      'Localizada a 500m da praia de Itaipu. Além do fácil acesso, possui toda uma estrutura para melhor atender aos nossos hóspedes e seus familiares, contando com a presença, em um raio de apenas 2km, de Posto de Saúde, Farmácias, Igrejas, Mercados, Delegacia, Posto Policial, Bombeiros, Escolas, Praias, Restaurantes e outros.\n\nEm relação a nossa estrutura, ressaltamos que a Casa foi integralmente projetada para promover um ambiente familiar, com segurança, conforto e muitas opções de lazer. Tudo isso a cerca de 100 metros da Praia de Itaipu.\n\nTodos os nossos quartos são suítes, muito amplas, arejadas, climatizadas (ar quente/frio) e com mobília de madeira maciça. Os nossos colchões são premium (Epeda 28cm), seguindo o padrão de hotéis executivos.',
    address: 'Estrada Francisco da Cruz Nunes, 1628, Itaipú - Niterói/RJ',
    phones: ['+55 (21) 97856-8192', '+55 (21) 3254-3790'],
  },
  {
    id: 2,
    name: 'Unidade Bairro Peixoto',
    image: '/bairro_peixoto.png', // Imagem do card
    modalImages: ['/bairro_peixoto1.png', '/bairro_peixoto2.png', '/bairro_peixoto3.png'], // Imagens do modal
    description: 'Localizada no coração do Bairro Peixoto...',
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
    <section id="units" className="w-full px-[153px] py-[120px] bg-white">
      <h1 className="text-[#88A3E6] text-center font-medium text-[75px] mb-10">
        Nossas Unidades
      </h1>

      <div className="flex justify-center gap-8">
        {unitsData.map((unit) => (
          <div
            key={unit.id}
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleOpenModal(unit)}
          >
            <Image src={unit.image} alt={unit.name} width={555} height={300} className="object-cover w-full" />
            <div className="p-4 text-left bg-[#88A3E6] h-[88px] flex justify-between items-center">
              <h2 className="text-[22px] font-semibold">{unit.name}</h2>
              <button className="text-[50px] font-light cursor-pointer">+</button>
            </div>
          </div>
        ))}
      </div>

      {selectedUnit && (
        <div className="absolute left-0 right-0 top-[783px] bg-black/50 py-10">
          <div className="bg-[#478EB2] text-white p-6 rounded-xl shadow-lg w-[960px] mx-auto relative px-[60px]">
            <button
              className="w-[40px] h-[40px] absolute top-[40px] right-[40px] text-white text-2xl font-normal border-[3px] rounded-full hover:text-gray-300"
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

            <h2 className="text-[46px] mt-[20px] font-semibold">{selectedUnit.name}</h2>
            <p className="mt-4 text-[18px] whitespace-pre-line font-light">{selectedUnit.description}</p>

            {/* Endereço */}
            <div className="flex items-center mt-4">
              <Image 
                src="/endereco.png" 
                alt="Endereço" 
                width={43} 
                height={43} 
                className="mr-3"
              />
              <p className="text-[18px] font-light">{selectedUnit.address}</p>
            </div>

            {/* Telefones */}
            <div className="mt-4">
              <div className="flex items-center">
                <Image 
                  src="/telefone.png" 
                  alt="Telefone" 
                  width={43} 
                  height={43} 
                  className="mr-3"
                />
                <div className="flex gap-x-4">
                  {selectedUnit.phones.map((phone, index) => (
                    <span key={index} className="text-[18px] font-light">
                      {phone}
                      {index !== selectedUnit.phones.length - 1 && (
                        <span className="ml-5">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagens do Modal */}
            <div className="flex justify-between mt-8 pr-[60px] mb-[100px]">
              {selectedUnit.modalImages.map((image, index) => (
                <Image key={index} src={image} alt={`${selectedUnit.name} ${index + 1}`} width={280} height={200} className="object-cover" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Units;