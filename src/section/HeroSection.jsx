import React from 'react'
import fotoTentara from '../assets/fotoTentara.png'
import Navbar from './Navbar'

export default function HeroSection() {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat w-full min-h-[520px] md:min-h-screen h-auto pt-4 md:pt-6 pb-12 md:pb-20 px-4 sm:px-6 md:px-12 flex flex-col justify-between relative" style={{ backgroundImage: `url(${fotoTentara})` }} id='hero-section'>
        <Navbar />
        
        <div className='text-center text-white font-bold flex flex-col gap-5 md:gap-8 items-center max-w-4xl mx-auto px-2 sm:px-4 my-auto py-6 sm:py-10'>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Advanced Defense and Tactical Solutions
          </h1>
          
          <p className='font-light text-sm sm:text-base md:text-xl max-w-2xl text-white/90 leading-relaxed'>
            Committed to empowering armed forces with precision, readiness, and advanced defense capabilities across land, sea, and air.
          </p>
          
          <button className='text-xs sm:text-sm md:text-base bg-[#006B3F] hover:bg-[#00874e] transition-colors font-medium px-6 sm:px-8 py-3 rounded-full cursor-pointer shadow-lg'>
            View Services
          </button>
        </div>
      </div>

      <div className='bg-[#006B3F] text-white px-6 py-8 md:px-12 md:py-16 lg:px-20 lg:py-20'>
        <div className='max-w-6xl mx-auto flex flex-col gap-3 md:gap-5'>
          <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold underline'>About Us</h1>
          <p className='font-light text-justify text-sm sm:text-base md:text-base leading-relaxed opacity-95'>
            The company specializes in the procurement of goods and services for the Indonesian Armed Forces (Army, Navy, and Air Force) as well as the Indonesian National Police. We are also fully prepared to expand our operational scope, backed by comprehensive licensing and official standard industrial classifications (KBLI)
          </p>
        </div>
      </div>
    </>
  )
}