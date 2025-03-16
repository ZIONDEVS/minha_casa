'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Service {
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

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

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openInfoCards, setOpenInfoCards] = useState<boolean[]>(new Array(infos.length).fill(false));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Funções de validação
  const validateName = (name: string) => /^[A-Za-zá-úÁ-Ú\s]+$/.test(name); // Permite apenas letras e espaços
  const validatePhone = (phone: string) => /^\(\d{2}\)\s9\s\d{4}-\d{4}$/.test(phone); // Formato: (00) 0 0000-0000
  const validateEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Validação básica de e-mail

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validações
    if (!name || !validateName(name)) {
      alert("Por favor, insira um nome válido (apenas letras).");
      return;
    }

    if (!phone || !validatePhone(phone)) {
      alert("Por favor, insira um número de telefone válido no formato (00) 0 0000-0000.");
      return;
    }

    if (!email || !validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (!subject) {
      alert("Por favor, insira um assunto.");
      return;
    }

    if (!message) {
      alert("Por favor, insira uma mensagem.");
      return;
    }

    if (!acceptTerms) {
      alert("Você deve aceitar os termos de uso.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("entry.2075121683", name); // Nome
      formData.append("entry.1738609305", phone); // Telefone
      formData.append("entry.464897036", email); // E-mail
      formData.append("entry.2072447748", subject); // Assunto
      formData.append("entry.380690400", message); // Mensagem
      formData.append("entry.1763763591", acceptTerms ? "Sim" : "Não"); // Termos de uso

      console.log("Formulário está sendo enviado com os dados:", {
        name,
        phone,
        email,
        subject,
        message,
        acceptTerms,
      });

      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScAQc8WuS6rE0iEH-Cjj14tQ55WJuHETcXKjlxrmEugFqDDPw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      console.log("Resposta recebida:", response);
      alert("Formulário enviado com sucesso!");

      // Limpar os campos após o envio
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setAcceptTerms(false);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema ao enviar o formulário. Tente novamente.");
    }
  };

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

  const atividadesImages = Array.from({ length: 12 }, (_, i) => `/atividades/atividades_${i + 1}.png`);

  // Títulos das atividades
  const atividadesTitles = [
    "Enfermagem 24h",
    "Fisioterapia",
    "Nutricionista",
    "Assistência Religiosa",
    "Musicoterapia",
    "Beleza e relaxamento",
    "Hotelaria",
    "Assistência Social",
    "Videomonito- ramento 24h",
    "Supervisão médica",
    "Terapia social",
    "Acompanhamento Psicológico",
  ];


  return (
    <section id="servicos" className="w-full h-auto bg-white pt-[80px] lg:pt-[120px]">
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

            {/* Card */}
            <div className="w-[90%] lg:w-[286px] bg-[#82BFE0] rounded-lg shadow-md p-4 mt-[15px]">
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
                    fill
                    unoptimized
                    className={`object-contain transition-transform ${openIndex === index ? "" : "rotate-180"
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
        <h1 className="lg:text-[75px] text-[40px] text-[#88A3E6] lg:mt-[120px] mt-[80px] mb-[80px] lg:mb-[80px] font-medium text-center">
          Atividades
        </h1>

        <div className="w-full lg:hidden mt-8 mb-[100px] relative">
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
          >
            {atividadesImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px]">
                  <Image
                    src={image}
                    alt={`Atividade ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Título no meio da imagem */}
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                    <h2 className="w-[170px] text-white text-2xl font-bold items-center text-center">
                      {atividadesTitles[index]}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Setas personalizadas */}
          <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer pr-[15px]">
            <Image
              src="/arrow-right.png" // Verifique se o caminho da imagem está correto
              alt="Próxima"
              width={25}
              height={25}
              unoptimized
            />
          </div>
          <div className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer pl-[15px]">
            <Image
              src="/arrow-left.png" // Verifique se o caminho da imagem está correto
              alt="Anterior"
              width={25}
              height={25}
              unoptimized
            />
          </div>

          {/* Paginação personalizada */}
          <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex justify-center space-x-2">
            {/* Estilos para as bolinhas */}
            <style global jsx>{`
              .custom-pagination .swiper-pagination-bullet {
                background-color: gray;
                opacity: 1;
                width: 8px;
                height: 8px;
                margin: 0 4px;
                cursor: pointer;
              }
              .custom-pagination .swiper-pagination-bullet-active {
                background-color: white;
              }
            `}</style>
          </div>
        </div>

        {/* Imagem de Atividades (Desktop) */}
        <div className="hidden lg:block w-full h-[1080px] relative">
          <Image
            src="/services/atividades.png"
            alt="atividades"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>


      {/* E tem mais */}
      <div>
        <h1 className="text-[40px] mt-[80px] lg:text-[75px] text-[#88A3E6] lg:mt-[120px] pb-[80px] font-medium text-center">
          E tem mais
        </h1>
        <div className="w-[90%] flex mx-auto flex-col lg:flex-row gap-4 lg:px-[120px]">
          {/* Cards 1 a 5 (esquerda) */}
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
                  <div className="relative w-6 h-6">
                    <Image
                      src="/services/arrow.png"
                      alt="Seta"
                      fill
                      unoptimized
                      className={`object-contain transition-transform ${openInfoCards[index] ? '' : 'rotate-180'
                        }`}
                    />
                  </div>
                </div>
                {openInfoCards[index] && (
                  <p className="lg:w-[460px] w-[274px] mt-4 text-white text-[18px] lg:text-[21px] font-normal">
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
                className={`w-full bg-[#88A3E6] rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ease-in-out ${openInfoCards[index + 5] ? 'max-h-[500px]' : 'max-h-[100px]'
                  } overflow-hidden`}
                onClick={() => toggleInfoCard(index + 5)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="w-full lg:w-full text-white font-semibold text-[22px] lg:text-[26px]">
                    {info.title}
                  </h2>
                  <div className="relative w-6 h-6">
                    <Image
                      src="/services/arrow.png"
                      alt="Seta"
                      fill
                      unoptimized
                      className={`object-contain transition-transform ${openInfoCards[index + 5] ? '' : 'rotate-180'
                        }`}
                    />
                  </div>
                </div>
                {openInfoCards[index + 5] && (
                  <p className="lg:w-[460px] w-[300px] mt-4 text-white text-[18px] lg:text-[21px] font-normal">
                    {info.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Fale com a gente*/}
      <div className="w-full bg-[#82BFE0] py-12 lg:py-24 mt-[80px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 lg:gap-16">
            {/* Título na lateral */}
            <h2 className="text-[40px] flex mx-auto lg:text-[75px] lg:leading-[95%] font-medium text-white lg:w-1/2">
              Fale com a gente!
            </h2>

            {/* Formulário */}
            <form onSubmit={handleFormSubmit} className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-1">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome aqui"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(00) 0 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-black font-medium mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu e-mail aqui"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-black font-medium mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Assunto"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-black font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  placeholder="Escreva sua mensagem"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88A3E6] text-black"
                />
              </div>

              <div className="mb-4 flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-[#88A3E6] focus:ring-[#88A3E6]"
                />
                <label htmlFor="privacy" className="text-black text-sm">
                  Ao enviar essa mensagem você confirma estar de acordo com a{" "}
                  <a href="#" className="text-[#88A3E6] underline">
                    Política de Privacidade
                  </a>{" "}
                  da Residencial Minha Casa.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#478EB2] text-white font-bold py-3 rounded-full hover:bg-[#478EB2] transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;