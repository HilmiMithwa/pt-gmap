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
    <nav className="relative bg-[#1C1C1E] md:bg-transparent text-white rounded-4xl md:rounded-none mb-[25px]">

      <div className="flex items-center justify-between px-8 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-6">
          <img
            src={logo_gmap}
            alt="GMAP Logo"
            className=""
          />

          <img
            src={logo_dunia}
            alt="Dunia Logo"
            className=""
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  text-[25px]
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
            hidden md:flex
            items-center
            gap-3
            bg-[#FFC400]
            text-black
            px-6
            py-3
            rounded-full
            text-[20px]
            font-semibold
            whitespace-nowrap
          "
        >
          <span>☎</span>
          Contact Us
        </a>

        {/* BURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1C1C1E] rounded-3xl p-6 shadow-xl z-50 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-light block hover:text-[#006B3F] transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-[#FFC400] text-black px-5 py-2 rounded-full font-semibold"
              >
                ☎ Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}