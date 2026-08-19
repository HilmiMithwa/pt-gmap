import React, { useState } from 'react'
import logo_gmap from '../assets/logo_gmap.png'
import logo_dunia from '../assets/logo_dunia.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#hero-section' },
    { name: 'About Us', href: '#about' },
    { name: 'Licensing', href: '#licensing' },
    { name: 'Vision and Mission', href: '#vision-mission' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
  ]

  return (
    <nav className="relative bg-[#1C1C1E] lg:bg-transparent text-white rounded-3xl lg:rounded-none mb-6 md:mb-10 transition-all">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 sm:gap-6">
          <img
            src={logo_gmap}
            alt="GMAP Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />

          <img
            src={logo_dunia}
            alt="Dunia Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  text-base xl:text-xl
                  font-light
                  whitespace-nowrap
                  hover:text-[#006B3F]
                  transition-colors
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT */}
        <a
          href="#contact"
          className="
            hidden lg:flex
            items-center
            gap-2.5
            bg-[#FFC400]
            hover:bg-[#e6b000]
            transition-colors
            text-black
            px-5 xl:px-6
            py-2.5 xl:py-3
            rounded-full
            text-base xl:text-lg
            font-semibold
            whitespace-nowrap
            shadow-md
          "
        >
          <span></span>
          Contact Us
        </a>

        {/* BURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 lg:hidden cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1C1C1E] border border-white/10 rounded-3xl p-6 shadow-2xl z-50 lg:hidden backdrop-blur-md">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base sm:text-lg font-light block hover:text-[#006B3F] transition-colors py-1"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block w-full text-center bg-[#FFC400] text-black px-5 py-2.5 rounded-full font-semibold"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}