'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


  const atividadesImages = Array.from({ length: 12 }, (_, i) => `/atividades/atividades_${i + 1}.png`);

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

const Activities = () => {
  return (
    <section id="atividades" className="w-full h-auto bg-gray-100 pt-[80px] lg:pt-[120px]">
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
                       <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                         <h2 className="w-[170px] text-white text-2xl font-bold items-center text-center">
                           {atividadesTitles[index]}
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
    </section>
  );
};

export default Activities;
