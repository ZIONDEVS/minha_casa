
import Image from 'next/image'
import { MenuItems } from './data'

const Header = () => {
  return (
    <div className="w-full h-[173px] py-[27px] px-[120] justify-between items-center hidden lg:flex fixed top-0 z-40 bg-white text-black">
      <Image
        src="/logo.svg"
        alt="logo"
        width={168}
        height={118}
        unoptimized
      />

      <div className="flex items-center text-[18px] gap-[39px]">
        {MenuItems.map((item) => (
          <a key={item.label} href={`#${item.link}`}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Header;
