
import Image from 'next/image'
import { MenuItems } from './data'

const Header = () => {
  return (
    <div className="hidden  w-full lg:h-[173px] lg:py-[27px] lg:px-[120] justify-between items-center lg:flex fixed lg:top-0 z-40 bg-white text-black">
      <Image
        src="/logo.svg"
        alt="logo"
        width={168}
        height={118}
        unoptimized
      />

      <div className="flex items-center text-[18px] gap-[39px]">
        {MenuItems.map((item) => (
          <a className="hover:text-[#478EB2] hover:underline cursor-pointer" key={item.label} href={`#${item.link}`}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Header;
