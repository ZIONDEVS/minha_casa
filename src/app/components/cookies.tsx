'use client'
import React, { useState, useEffect } from "react";

const CookieConsent: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
        console.log(localStorage.getItem("cookiesAccepted"));
        if (!hasAcceptedCookies) {
            setShowPopup(true);
        }
    }, []);

    const handleAccept = async () => {
        await handleCookieConsent();
        localStorage.setItem("cookiesAccepted", "true");
        setShowPopup(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookiesAccepted", "false");
        setShowPopup(false);
    };

    const handleCookieConsent = async () => {
        try {
            const res = await fetch("https://ipinfo.io/json?token=ec5e1e368842f7");
    
            console.log('Resposta do IPInfo:', res);
            if (!res.ok) {
                throw new Error('Falha ao obter dados de localização');
            }
            
            const locationData = await res.json();
            console.log('Dados de localização:', locationData);
    
            const browser = navigator.userAgent;
            const device =
                /Mobi|Android|iPhone/.test(navigator.userAgent) ? "Mobile" : "Desktop";
            const screenResolution = `${window.screen.width}x${window.screen.height}`;
            const language = navigator.language || navigator.languages[0];
            const { city, region, country } = locationData;
    
            const formData = new FormData();
            formData.append("entry.671399726", browser);
            formData.append("entry.1879081599", device);
            formData.append("entry.297444134", screenResolution);
            formData.append("entry.1483303597", language);
            formData.append("entry.1453011610", city);
            formData.append("entry.1502148419", region);
            formData.append("entry.708115313", country);
    
            const response = await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLScGz8rMMhUjS2BnxqPnRGEyYQjlWd5eDA-Ff7Kgqzktzql8pw/formResponse",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                }
            );
    
            console.log('Resposta do Google Forms:', response);
            console.log("Dados enviados com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
        }
    };

    if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 md:bottom-4 left-1/2 transform -translate-x-1/2 md:translate-y-0 top-1/2 md:top-auto -translate-y-1/2 w-[90%] md:w-[718px] px-[43px] py-[35px] bg-white rounded-[20px] shadow-md z-50">
      <p className="text-center text-gray-700 mb-6">
        Nosso site utiliza cookies para melhorar sua experiência, personalizar conteúdo e analisar o tráfego. Ao continuar navegando, você concorda com o uso de cookies. Para mais informações, consulte nossa <span className="font-bold underline cursor-pointer">Política de Privacidade</span>.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleReject}
          className="border border-[#88A3E6] text-[#88A3E6] py-[10px] md:px-[52px] px-[42px]  hover:border-[#88A3E6]/0  rounded-full cursor-pointer"
        >
          Rejeitar
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#88A3E6] text-white py-[10px] md:px-[52px] px-[42px] rounded-full cursor-pointer hover:bg-[#88A3E6]/90"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
