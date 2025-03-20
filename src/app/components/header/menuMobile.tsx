'use client'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { MenuItems } from './data'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((state) => !state)
  }

  return (
    <div className=" block lg:hidden fixed top-0 z-50 w-full bg-white overflow-hidden">
      <div className={`flex justify-between items-center py-4 px-6 max-w-[100vw] ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
        {!isOpen ? (
          <>
            <Image
              src="/logo.svg"
              alt="logo"
              width={96}
              height={67}
              className="cursor-pointer"
              unoptimized
            />
            <Image
              src="/burguer.png"
              alt="menu"
              height={25}
              width={25}
              className="cursor-pointer"
              onClick={toggleOpen}
              unoptimized
            />
          </>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Image
              src="/logo.svg"
              alt="logo"
              width={96}
              height={67}
              className="cursor-pointer"
              unoptimized
            />
            <X onClick={toggleOpen} size={24} className="text-[#0582C1]" />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="w-full px-[40px] pt-[50px] h-screen bg-white">
          <div className="w-full flex flex-col gap-[30px] text-black">
            {MenuItems.map((item) => (
              <a
                href={`#${item.link}`}
                key={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}