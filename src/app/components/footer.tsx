import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contato" className="bg-[#72A66A] lg:h-[411px] text-white py-[40px]">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_164px_auto] lg:grid-cols-[auto_890px_auto] lg:pl-[120px] pl-[20px]">
                    <div>
                        <h3 className="lg:text-[22px] text-[25px] font-normal">Explore</h3>
                        <ul className="mt-4 space-y-[20px] lg:text-[16px]">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#units" className="hover:underline">Unidades</a></li>
                            <li><a href="#sobre-nos" className="hover:underline">Quem somos</a></li>
                            <li><a href="#servicos" className="hover:underline">Atividades</a></li>
                            <li><a href="#localizacao" className="hover:underline">Localização</a></li>
                        </ul>
                    </div>


                    <div className="mt-[50px] mb-[50px] lg:mb-0 lg:mt-0">
                        <h3 className="lg:text-[22px] text-[25px] font-normal">Unidades</h3>
                        <ul className="w-[247px] lg:w-[312px] mt-4 space-y-[30px]">
                            <li>
                                <p className="lg:text-[16px] font-semibold">Unidade Praia de Itaipú</p>
                                <p>Estrada Francisco da Cruz Nunes, 12.629, Itaipu - Niterói/RJ</p>
                            </li>
                            <li>
                                <p className="lg:text-[16px] font-semibold">Unidade Bairro Peixoto</p>
                                <p>Rua Ignez Peixoto, 671, Bairro Peixoto (Itaipu) - Niterói/RJ</p>
                            </li>
                        </ul>
                    </div>


                    <div className="lg:hidden flex justify-start mt-6 gap-4">
                        <a href="https://www.facebook.com/residencialminhacasa" target="_blank" rel="noopener noreferrer">
                            <Facebook size={28} className="w-[44px] h-[44px] hover:opacity-80 transition-opacity duration-300 text-[#72A66A] bg-white rounded-full p-2" />
                        </a>
                        <a href="https://www.instagram.com/residencialminhacasa" target="_blank" rel="noopener noreferrer">
                            <Instagram size={28} className="w-[44px] h-[44px] hover:opacity-80 transition-opacity duration-300 text-[#72A66A] bg-white rounded-full p-2" />
                        </a>
                    </div>
                </div>


                <div className="w-full lg:pl-[120px] mt-8 lg:border-t-[2px] border-white/20 pt-4 flex flex-col md:flex-row justify-between text-[16px] lg:pt-[30px]">

                    <div className="flex flex-col md:flex-row items-left pl-[20px] lg:items-center gap-4 lg:gap-[100px] order-2 order-1 lg:ml-[-210px]">
                        <a href="#" className="hover:underline">Política de privacidade</a>
                        <p className="lg:w-[360px] w-[203px]">Copyright © 2025 - Todos os direitos reservados.</p>
                    </div>


                    <div className="lg:hidden w-full justify-center mb-4 order-3 mt-[50px]">
                        <Image src="/line_1.png" alt="Linha decorativa" width={500} height={1} className="w-full h-1" />
                    </div>


                    <div className="flex items-center mx-auto lg:mx-0 gap-1 order-3 md:order-2 lg:order-1 mt-4 lg:mt-0">
                        <p className="text-[16px]">Desenvolvido por</p>
                        <Image src="/logo_zion.svg" alt="Zíon Software House" width={44} height={13} className="w-[44px] h-[13px]" />
                    </div>


                    <div className="hidden lg:flex items-center gap-4 lg:mr-[20px] order-3 md:order-3">
                        <a href="https://www.facebook.com/residencialminhacasa" target="_blank" rel="noopener noreferrer">
                            <Facebook size={28} className="w-[44px] h-[44px] hover:opacity-80 transition-opacity duration-300 text-[#72A66A] bg-white rounded-full p-2" />
                        </a>
                        <a href="https://www.instagram.com/residencialminhacasa" target="_blank" rel="noopener noreferrer">
                            <Instagram size={28} className="w-[44px] h-[44px] hover:opacity-80 transition-opacity duration-300 text-[#72A66A] bg-white rounded-full p-2" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
