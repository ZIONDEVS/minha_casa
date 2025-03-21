import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#72A66A] lg:h-[411px] text-white py-[40px] "
    >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-[auto_164px_auto] lg:grid-cols-[auto_890px_auto] lg:pl-[120px] md:pl-[20px] pl-[20px]">
          <div>
            <h3 className="lg:text-[22px] text-[25px] font-medium">Explore</h3>
            <ul className="mt-4 space-y-[20px] lg:text-[16px]">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#units" className="hover:underline">
                  Unidades
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:underline">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:underline">
                  Atividades
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:underline">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-[40px] mb-[40px] lg:mb-0 lg:mt-0">
            <h3 className="lg:text-[22px] text-[25px] font-medium">Unidades</h3>
            <ul className="w-[247px] lg:w-[312px] mt-4 space-y-[30px]">
              <li>
                <p className="lg:text-[16px] text-[19px] font-semibold md:pb-0 pb-[10px]">
                  Unidade Praia de Itaipú
                </p>
                <p>
                  Estrada Francisco da Cruz Nunes, 12.629, Itaipu - Niterói/RJ
                </p>
              </li>
              <li>
                <p className="lg:text-[16px] text-[19px] font-semibold md:pb-0 pb-[10px]">
                  Unidade Bairro Peixoto
                </p>
                <p>
                  Rua Ignez Peixoto, 671, Bairro Peixoto (Itaipu) - Niterói/RJ
                </p>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex justify-start mt-6 gap-4">
            <a
              href="https://www.facebook.com/residencialminhacasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="45"
                height="46"
                viewBox="0 0 45 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4545 0.712891H22.4544C10.0532 0.712891 0 10.7661 0 23.1673V23.1674C0 35.5686 10.0532 45.6218 22.4544 45.6218H22.4545C34.8557 45.6218 44.9089 35.5686 44.9089 23.1674V23.1673C44.9089 10.7661 34.8557 0.712891 22.4545 0.712891Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4563 34.7061V23.1656H17.0703V19.1886H19.4563V16.8007C19.4563 13.5563 20.8036 11.627 24.6313 11.627H27.818V15.6045H25.8261C24.336 15.6045 24.2375 16.1603 24.2375 17.1975L24.2321 19.1881H27.8406L27.4183 23.1652H24.2321V34.7061H19.4563Z"
                  fill="#72A66A"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/residencialminhacasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="45"
                height="46"
                viewBox="0 0 45 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5483 0.712891H22.5482C10.147 0.712891 0.093811 10.7661 0.093811 23.1673V23.1674C0.093811 35.5686 10.147 45.6218 22.5482 45.6218H22.5483C34.9495 45.6218 45.0027 35.5686 45.0027 23.1674V23.1673C45.0027 10.7661 34.9495 0.712891 22.5483 0.712891Z"
                  fill="white"
                />
                <path
                  d="M17.9735 12.2764H27.1225C30.6079 12.2764 33.4397 15.1082 33.4397 18.5936V27.7426C33.4397 29.4181 32.7742 31.0249 31.5894 32.2096C30.4047 33.3943 28.7979 34.0598 27.1225 34.0598H17.9735C14.4881 34.0598 11.6562 31.228 11.6562 27.7426V18.5936C11.6562 16.9181 12.3218 15.3113 13.5065 14.1266C14.6912 12.9419 16.298 12.2764 17.9735 12.2764ZM17.7556 14.4547C16.7157 14.4547 15.7184 14.8678 14.983 15.6032C14.2477 16.3385 13.8346 17.3358 13.8346 18.3757V27.9605C13.8346 30.1279 15.5882 31.8815 17.7556 31.8815H27.3403C28.3803 31.8815 29.3776 31.4684 30.1129 30.733C30.8483 29.9977 31.2614 29.0004 31.2614 27.9605V18.3757C31.2614 16.2083 29.5078 14.4547 27.3403 14.4547H17.7556ZM28.2661 16.0885C28.6272 16.0885 28.9735 16.2319 29.2288 16.4872C29.4842 16.7426 29.6276 17.0889 29.6276 17.4499C29.6276 17.811 29.4842 18.1573 29.2288 18.4126C28.9735 18.668 28.6272 18.8114 28.2661 18.8114C27.9051 18.8114 27.5588 18.668 27.3034 18.4126C27.0481 18.1573 26.9047 17.811 26.9047 17.4499C26.9047 17.0889 27.0481 16.7426 27.3034 16.4872C27.5588 16.2319 27.9051 16.0885 28.2661 16.0885ZM22.548 17.7222C23.9923 17.7222 25.3775 18.296 26.3988 19.3173C27.4201 20.3386 27.9938 21.7238 27.9938 23.1681C27.9938 24.6124 27.4201 25.9976 26.3988 27.0189C25.3775 28.0402 23.9923 28.614 22.548 28.614C21.1036 28.614 19.7185 28.0402 18.6972 27.0189C17.6759 25.9976 17.1021 24.6124 17.1021 23.1681C17.1021 21.7238 17.6759 20.3386 18.6972 19.3173C19.7185 18.296 21.1036 17.7222 22.548 17.7222ZM22.548 19.9006C21.6814 19.9006 20.8503 20.2448 20.2375 20.8576C19.6247 21.4704 19.2805 22.3015 19.2805 23.1681C19.2805 24.0347 19.6247 24.8658 20.2375 25.4786C20.8503 26.0914 21.6814 26.4356 22.548 26.4356C23.4146 26.4356 24.2457 26.0914 24.8585 25.4786C25.4712 24.8658 25.8155 24.0347 25.8155 23.1681C25.8155 22.3015 25.4712 21.4704 24.8585 20.8576C24.2457 20.2448 23.4146 19.9006 22.548 19.9006Z"
                  fill="#72A66A"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full lg:pl-[120px] mt-8 md:border-t-[2px] border-white/20 pt-4 flex flex-col md:flex-row justify-between text-[16px] lg:pt-[30px]">
          <div className="flex flex-col md:flex-row items-left pl-[20px] lg:items-center gap-4 lg:gap-[100px] md:order-2 order-1 lg:ml-[-210px]">
            <a
              href="/politica-de-privacidade"
              className="hover:underline text-[16px] text-white lg:flex md:hidden"
            >
              Política de privacidade
            </a>
            <p className="lg:w-[360px] w-[203px] text-[16px] text-white">
              Copyright © 2025 - Todos os direitos reservados.
            </p>
            <a
              href="/politica-de-privacidade"
              className="hover:underline text-[16px] text-white md:flex lg:hidden hidden"
            >
              Política de privacidade
            </a>
          </div>

          <div className="md:hidden w-full justify-center mb-4 order-3 mt-[50px]">
            <Image
              src="/line_1.png"
              alt="Linha decorativa"
              width={500}
              height={1}
              className="w-full h-1"
            />
          </div>

          <div className="flex items-center mx-auto lg:mx-0 gap-1 order-3 md:order-2 lg:order-1 mt-4 lg:mt-0">
            <p className="text-[16px] text-white">Desenvolvido por</p>
            <a
              href="https://www.zionsoftwarehouse.com.br/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/logo_zion.svg"
                alt="Zíon Software House"
                width={44}
                height={13}
                className="w-[44px] h-[13px]"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:mr-[20px] order-3 md:order-3 lg:pr-[120px]">
            <a
              href="https://www.facebook.com/residencialminhacasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="45"
                height="46"
                viewBox="0 0 45 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4545 0.712891H22.4544C10.0532 0.712891 0 10.7661 0 23.1673V23.1674C0 35.5686 10.0532 45.6218 22.4544 45.6218H22.4545C34.8557 45.6218 44.9089 35.5686 44.9089 23.1674V23.1673C44.9089 10.7661 34.8557 0.712891 22.4545 0.712891Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4563 34.7061V23.1656H17.0703V19.1886H19.4563V16.8007C19.4563 13.5563 20.8036 11.627 24.6313 11.627H27.818V15.6045H25.8261C24.336 15.6045 24.2375 16.1603 24.2375 17.1975L24.2321 19.1881H27.8406L27.4183 23.1652H24.2321V34.7061H19.4563Z"
                  fill="#72A66A"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/residencialminhacasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="45"
                height="46"
                viewBox="0 0 45 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5483 0.712891H22.5482C10.147 0.712891 0.093811 10.7661 0.093811 23.1673V23.1674C0.093811 35.5686 10.147 45.6218 22.5482 45.6218H22.5483C34.9495 45.6218 45.0027 35.5686 45.0027 23.1674V23.1673C45.0027 10.7661 34.9495 0.712891 22.5483 0.712891Z"
                  fill="white"
                />
                <path
                  d="M17.9735 12.2764H27.1225C30.6079 12.2764 33.4397 15.1082 33.4397 18.5936V27.7426C33.4397 29.4181 32.7742 31.0249 31.5894 32.2096C30.4047 33.3943 28.7979 34.0598 27.1225 34.0598H17.9735C14.4881 34.0598 11.6562 31.228 11.6562 27.7426V18.5936C11.6562 16.9181 12.3218 15.3113 13.5065 14.1266C14.6912 12.9419 16.298 12.2764 17.9735 12.2764ZM17.7556 14.4547C16.7157 14.4547 15.7184 14.8678 14.983 15.6032C14.2477 16.3385 13.8346 17.3358 13.8346 18.3757V27.9605C13.8346 30.1279 15.5882 31.8815 17.7556 31.8815H27.3403C28.3803 31.8815 29.3776 31.4684 30.1129 30.733C30.8483 29.9977 31.2614 29.0004 31.2614 27.9605V18.3757C31.2614 16.2083 29.5078 14.4547 27.3403 14.4547H17.7556ZM28.2661 16.0885C28.6272 16.0885 28.9735 16.2319 29.2288 16.4872C29.4842 16.7426 29.6276 17.0889 29.6276 17.4499C29.6276 17.811 29.4842 18.1573 29.2288 18.4126C28.9735 18.668 28.6272 18.8114 28.2661 18.8114C27.9051 18.8114 27.5588 18.668 27.3034 18.4126C27.0481 18.1573 26.9047 17.811 26.9047 17.4499C26.9047 17.0889 27.0481 16.7426 27.3034 16.4872C27.5588 16.2319 27.9051 16.0885 28.2661 16.0885ZM22.548 17.7222C23.9923 17.7222 25.3775 18.296 26.3988 19.3173C27.4201 20.3386 27.9938 21.7238 27.9938 23.1681C27.9938 24.6124 27.4201 25.9976 26.3988 27.0189C25.3775 28.0402 23.9923 28.614 22.548 28.614C21.1036 28.614 19.7185 28.0402 18.6972 27.0189C17.6759 25.9976 17.1021 24.6124 17.1021 23.1681C17.1021 21.7238 17.6759 20.3386 18.6972 19.3173C19.7185 18.296 21.1036 17.7222 22.548 17.7222ZM22.548 19.9006C21.6814 19.9006 20.8503 20.2448 20.2375 20.8576C19.6247 21.4704 19.2805 22.3015 19.2805 23.1681C19.2805 24.0347 19.6247 24.8658 20.2375 25.4786C20.8503 26.0914 21.6814 26.4356 22.548 26.4356C23.4146 26.4356 24.2457 26.0914 24.8585 25.4786C25.4712 24.8658 25.8155 24.0347 25.8155 23.1681C25.8155 22.3015 25.4712 21.4704 24.8585 20.8576C24.2457 20.2448 23.4146 19.9006 22.548 19.9006Z"
                  fill="#72A66A"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
