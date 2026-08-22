import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo_gmap from '../assets/logo_gmap.png'
import logo_dunia from '../assets/logo_dunia.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const navbarOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '#hero-section' },
    { name: 'About Us', href: '#about' },
    { name: 'Licensing', href: '#licensing' },
    { name: 'Vision and Mission', href: '#vision' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
  ]

  return (
    <motion.header 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1C1C1E]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

        {/* LOGOS */}
        <motion.div 
          className="flex items-center gap-3 sm:gap-5 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => handleNavClick(e, '#hero-section')}
        >
          <img
            src={logo_gmap}
            alt="GMAP Logo"
            className="h-8 sm:h-10 lg:h-11 w-auto object-contain"
          />
          <img
            src={logo_dunia}
            alt="Dunia Logo"
            className="h-8 sm:h-10 lg:h-11 w-auto object-contain"
          />
        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="
                  text-base xl:text-lg
                  font-light
                  text-white/90
                  hover:text-white
                  transition-colors
                  py-1
                  block
                  whitespace-nowrap
                "
              >
                {item.name}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC400] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* CONTACT */}
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            hidden lg:flex
            items-center
            gap-2.5
            bg-[#FFC400]
            hover:bg-[#e6b000]
            transition-colors
            text-black
            px-5 xl:px-6
            py-2.5
            rounded-full
            text-sm xl:text-base
            font-semibold
            whitespace-nowrap
            shadow-md
            cursor-pointer
          "
        >
          Contact Us
        </motion.a>

        {/* BURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 lg:hidden cursor-pointer p-2 rounded-lg bg-black/20 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* MOBILE MENU WITH ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden bg-[#1C1C1E]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-base font-light text-white/90 hover:text-white transition-colors block py-2 border-b border-white/5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="inline-block w-full text-center bg-[#FFC400] text-black px-5 py-2.5 rounded-full font-semibold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}