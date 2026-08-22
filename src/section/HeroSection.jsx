import React from 'react'
import { motion } from 'framer-motion'
import fotoTentara from '../assets/fotoTentara.png'
import Navbar from './Navbar'

export default function HeroSection() {
  const handleScrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      const navbarOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className='w-full'>
      <Navbar />
      <div className="bg-cover bg-center bg-no-repeat w-full min-h-[520px] md:min-h-screen h-auto pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-12 flex flex-col justify-between relative" style={{ backgroundImage: `url(${fotoTentara})` }} id='hero-section'>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-center text-white font-bold flex flex-col gap-5 md:gap-8 items-center max-w-4xl mx-auto px-2 sm:px-4 my-auto py-6 sm:py-10'
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Advanced Defense and Tactical Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='font-light text-sm sm:text-base md:text-2xl max-w-2xl text-white/90 leading-relaxed'
          >
            Committed to empowering armed forces with precision, readiness, and advanced defense capabilities across land, sea, and air.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToServices}
            className='text-xs sm:text-sm md:text-base bg-[#006B3F] hover:bg-[#00874e] transition-colors font-medium px-6 sm:px-8 py-3 rounded-full cursor-pointer shadow-lg'
          >
            View Services
          </motion.button>
        </motion.div>
      </div>

      <div className='bg-[#006B3F] text-white px-6 py-8 md:px-12 md:py-16 lg:px-20 lg:py-20' id='about'>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='max-w-6xl mx-auto flex flex-col gap-3 md:gap-5'
        >
          <h1 className='text-xl sm:text-2xl md:text-5xl font-semibold underline text-center'>About Us</h1>
          <p className='font-light text-justify text-sm sm:text-base leading-relaxed opacity-95 md:text-center md:text-3xl'>
            The company specializes in the procurement of goods and services for the Indonesian Armed Forces (Army, Navy, and Air Force) as well as the Indonesian National Police. We are also fully prepared to expand our operational scope, backed by comprehensive licensing and official standard industrial classifications (KBLI)
          </p>
        </motion.div>
      </div>
    </section>
  )
}