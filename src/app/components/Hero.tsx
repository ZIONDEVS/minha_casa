"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const desktopImages = [
    "/banner_desktop.png",
    "/banner_desktop_2.png",
    "/banner_desktop_3.png",
    "/banner_desktop_4.png",
];

const mobileImages = [
    "/banner_mobile.png",
    "/banner_mobile_2.png",
    "/banner_mobile_3.png",
    "/banner_mobile_4.png",
];

const slides = [
    {
        title: "Moradia Assistida",
        subtitle: "Venha morar conosco",
        textWidth: "w-[170px] lg:w-[400px]",
    },
    {
        title: "Hospedagem Temporária",
        subtitle: "Cuidado e conforto pelo tempo que precisar",
        textWidth: "w-[300px] lg:w-[500px]",
    },
    {
        title: "Day Care (Centro dia)",
        subtitle: "Cuidado e companhia para o seu dia",
        textWidth: "w-[220px] lg:w-[450px]",
    },
    {
        title: "Acompanhamento Hospitalar",
        subtitle: "Apoio e conforto nos momentos que você mais precisa",
        textWidth: "w-[330px] lg:w-[550px]",
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenSize, setScreenSize] = useState("desktop");

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth < 768) {
                setScreenSize("mobile");
            } else {
                setScreenSize("desktop");
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const images = screenSize === "mobile" ? mobileImages : desktopImages;

    return (
        <section
            id="hero"
            className="pt-20 h-screen md:h-[700px] lg:h-screen w-full overflow-hidden relative px-[15px]"
        >
            {/* Imagem de fundo com transição */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    {images.map((image, index) =>
                        index === currentIndex ? (
                            <motion.div
                                key={image}
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-full"
                            >
                                <Image
                                    src={image}
                                    alt="Imagem banner"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                    unoptimized
                                    className="w-full h-full lg:mt-[173px] mt-[97px]"
                                />
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </div>

            {/* Degradê escuro na parte inferior */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 to-transparent z-10" />

            {/* Conteúdo sobreposto */}
            <div className="mt-[260px] lg:mt-0 lg:ml-[120px] lg:top-[360px] relative z-20">
                <h1 className="w-[306px] lg:w-full font-semibold lg:text-[60px] text-[40px] leading-[105%] lg:leading-[57px] text-white">
                    {slides[currentIndex].title}
                </h1>
                <h2
                    className={`mt-[20px] lg:mt-[-15px] font-light text-[22px] lg:text-[40px] leading-[120%] lg:leading-[66px] text-white ${slides[currentIndex].textWidth}`}
                >
                    {slides[currentIndex].subtitle}
                </h2>
                <a
                    href="https://web.whatsapp.com/send?phone=5521973658192&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="lg:w-[229px] w-[170px] h-[38px] lg:h-[50px] bg-[#88A3E6] mt-[20px] mb-[70px] lg:mt-[28px] rounded-[200px] uppercase font-bold lg:px-[44px] px-[24px] py-[12px] lg:py-[16px] text-[12px] lg:text-[13.7px] cursor-pointer">
                        Entre em contato
                    </button>
                </a>
            </div>

            {/* Dots de paginação */}
            <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition ${currentIndex === index
                                ? "bg-white scale-110"
                                : "bg-gray-400 hover:bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
