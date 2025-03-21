'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 

const Activities = () => {
  // Array consistente de títulos


  // Array consistente de imagens para o grid e o slider
  const images = [
    { 
      src: "/atividades/activities1.webp", 
      alt: "Enfermagem 24h", 
      text: "Enfermagem 24h" 
    },
    { 
      src: "/atividades/activities2.webp", 
      alt: "Fisioterapia", 
      text: "Fisioterapia" 
    },
    { 
      src: "/atividades/activities3.webp", 
      alt: "Nutricionista", 
      text: "Nutricionista" 
    },
    { 
      src: "/atividades/activities4.webp", 
      alt: "Assistência Religiosa", 
      text: "Assistência Religiosa" 
    },
    { 
      src: "/atividades/activities5.webp", 
      alt: "Musicoterapia", 
      text: "Musicoterapia" 
    },
    { 
      src: "/atividades/activities6.webp", 
      alt: "Beleza e relaxamento", 
      text: "Beleza e relaxamento" 
    },
    { 
      src: "/atividades/activities7.webp", 
      alt: "Hotelaria", 
      text: "Hotelaria" 
    },
    { 
      src: "/atividades/activities8.webp", 
      alt: "Assistência Social", 
      text: "Assistência Social" 
    },
    { 
      src: "/atividades/activities9.webp", 
      alt: "Videomonitoramento 24h", 
      text: "Videomonitoramento 24h" 
    },
    { 
      src: "/atividades/activities10.webp", 
      alt: "Supervisão médica", 
      text: "Supervisão médica" 
    },
    { 
      src: "/atividades/activities11.webp", 
      alt: "Terapia social", 
      text: "Terapia social" 
    },
    { 
      src: "/atividades/activities12.webp", 
      alt: "Acompanhamento Psicológico", 
      text: "Acompanhamento Psicológico" 
    },
  ];

  return (
    <section id="atividades" className="w-full h-auto bg-white">
      <div>
        <h1 className="lg:text-[75px] text-[40px] text-[#88A3E6] pb-[50px] lg:pb-[80px] order-none font-medium text-center">
          Atividades
        </h1>
    
        <div className="w-full lg:hidden pt-8  relative">
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
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[390px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <h2 className="text-white text-[28px] font-bold items-center text-center max-w-[200px]">
                      {image.text}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    
          <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer pr-[15px]">
            <Image
              src="/arrow-right.png"
              alt="Próxima"
              width={25}
              height={25}
              unoptimized
            />
          </div>
          <div className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer pl-[15px]">
            <Image
              src="/arrow-left.png"
              alt="Anterior"
              width={25}
              height={25}
              unoptimized
            />
          </div>
    
          <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex justify-center space-x-2">
            <style global jsx>{`
            .custom-pagination {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
              }
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
    
        <div className="relative">
          <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-3 lg:grid-rows-3 md:grid-rows-4 w-full h-full gap-0 ">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden group h-[360] "
              >
                <div className="w-full h-[360px] relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className=" transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0  flex items-center justify-center">
                    <p className="text-white text-[24px] font-semibold transition-all duration-300 group-hover:text-[28px] group-hover:scale-110 text-center max-w-[290px]">
                      {image.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
