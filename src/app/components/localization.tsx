export default function Local() {
    return (
        <section id="localizacao" className="w-full text-center lg:py-[80px] py-[80px] lg:px-[140px] bg-white">
            <h2 className="text-[40px] lg:text-[75px] font-normal text-[#88A3E6] text-center mb-8">Localização</h2>

            <div className="lg:w-full w-[90%] grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
                <div>
                    <div className="lg:w-[595px] w-full h-[388px] lg:h-[388px] border border-gray-300 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0391076717346!2d-43.0364693!3d-22.9651868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99863738f517e5%3A0x5248044ef54e033c!2sEstr.%20Francisco%20da%20Cruz%20Nunes%2C%2012%20-%20Itaipu!5e0!3m2!1spt-BR!2sbr!4v1710442023456"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="lg:w-[340px] text-center lg:text-left">
                        <h3 className="text-[30px] lg:text-[30px] text-[#88A3E6] font-semibold mt-6">
                            Unidade Praia de Itaipú
                        </h3>
                        <p className="text-gray-600 text-[21px] lg:text-[21px]">
                            Estrada Francisco da Cruz Nunes, 12.629, Itaipu – Niterói/RJ
                        </p>
                        <p className="hidden lg:block lg:w-[412px] text-gray-600 lg:text-[21px] text-[21px] mt-2">
                            +55 (21) 9 7365-8192 | +55 (21) 3254-3790
                        </p>
                        <p className="lg:hidden w-[200px] text-gray-600 text-[21px] mt-2 flex mx-auto">
                            +55 (21) 9 7365-8192  +55 (21) 3254-3790
                        </p>
                    </div>
                </div>

                <div>
                    <div className="lg:w-[595px] w-full h-[388px] lg:h-[388px] border border-gray-300 rounded-lg overflow-hidden lg:mt-0 mt-[40px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.665939348081!2d-43.026201!3d-22.9532482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99861c1d7b3307%3A0xb9ae2a03f67e485c!2sRua%20Ignêz%20Peixoto%2C%20671%2C%20Itaipu!5e0!3m2!1spt-BR!2sbr!4v1710442023456"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="lg:w-[340px] lg:text-left text-center">
                        <h3 className="lg:text-[30px] text-[30px] text-[#88A3E6] font-semibold mt-6">
                            Unidade Bairro Peixoto
                        </h3>
                        <p className="lg:w-[340px] w-[300px] text-gray-600 text-[21px] lg:text-[21px] flex mx-auto">
                            Rua Ignez Peixoto, 671, bairro Peixoto (Itaipu) – Niterói/RJ
                        </p>
                        <p className="hidden lg:block lg:w-[412px] text-gray-600 lg:text-[21px] text-[21px] mt-2">
                            +55 (21) 9 9235-5657 | +55 (21) 3492-8595
                        </p>
                        <p className="lg:hidden w-[200px] text-gray-600 text-[21px] mt-2 flex mx-auto">
                            +55 (21) 9 9235-5657  +55 (21) 3492-8595
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
