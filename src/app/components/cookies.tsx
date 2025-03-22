"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  let browserName = "Desconhecido";

  if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
  } else if (
    userAgent.indexOf("MSIE") > -1 ||
    userAgent.indexOf("Trident") > -1
  ) {
    browserName = "Internet Explorer";
  }

  return browserName;
};

const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  return /Mobi|Android/i.test(userAgent) ? "Dispositivo Móvel" : "Desktop";
};

const getScreenResolution = () => {
  return `${window.screen.width} x ${window.screen.height}`;
};

const getUserLanguage = () => {
  return navigator.language || navigator.language;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (consent === undefined) {
      setIsVisible(true);
    }
  }, []);

  const handleReject = async () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setIsVisible(false);
  };

  const handleAccept = async () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setIsVisible(false);

    const browser = getBrowserInfo();
    const device = getDeviceInfo();
    const screenResolution = getScreenResolution();
    const language = getUserLanguage();

    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipinfo.io/json");
        const data = response.data as { city: string; region: string; country: string };
        const { city, region, country } = data;

        const formData = new FormData();

        formData.append("entry.95575053", browser);
        formData.append("entry.280121697", device);
        formData.append("entry.1563561589", screenResolution);
        formData.append("entry.184369474", language);
        formData.append("entry.392194838", city);
        formData.append("entry.639866657", region);
        formData.append("entry.1169654021", country);

        const formUrl =
          "https://docs.google.com/forms/d/e/1FAIpQLSdrTV5h0dPpMttjF0_d9US4OUnvzkU_QONPw8P3aztMVkbt_Q/formResponse";

        const sheetResponse = await fetch(formUrl, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (sheetResponse.ok) {
          console.log("Dados enviados com sucesso!");
          return true;
        } else {
          console.error("Erro ao enviar dados:", await sheetResponse.json());
          return false;
        }
      } catch (error) {
        console.error(
          "Erro ao obter a localização do usuário ou enviar dados:",
          error
        );
      }
    };

    await fetchLocation();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[718px] md:px-[43px] px-[28px] py-[35px] bg-white rounded-[20px] shadow-md z-50">
      <p className="text-center text-gray-700 mb-6">
      Nosso site utiliza cookies para melhorar sua experiência, personalizar conteúdo e analisar o tráfego. Ao continuar navegando, você concorda com o uso de cookies. Para mais informações, consulte nossa {" "}
        <a
          className="font-bold underline cursor-pointer text-black-500"
          href="/politica-de-privacidade"
        >
          Política de Privacidade.
        </a>
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleReject}
          className="border border-[#88A3E6] text-[#88A3E6] py-[10px] md:px-[52px] px-[42px] rounded-full cursor-pointer"
          type="button"
        >
          Recusar
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
};

export default CookieConsent;

