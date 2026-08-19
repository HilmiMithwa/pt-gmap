import React from 'react'
import fotoTentara from '../assets/fotoTentara.png'
import Navbar from './Navbar'

export default function HeroSection() {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat w-full max-w-107 h-98.75 md:max-w-none md:w-full md:h-screen pt-[25px] pb-[50px] " style={{ backgroundImage: `url(${fotoTentara})` }} id='hero-section'>
        <Navbar />
        <div className='text-center text-white font-bold text-3xl flex flex-col gap-[25px] items-center'>
          <h1>Advanced Defense and Tactical Solutions</h1>
          <p className='font-light text-base'>Committed to empowering armed forces with precision, readiness, and advanced defense capabilities across land, sea, and air.</p>
          <button className='text-xs bg-[#006B3F] font-light px-6 py-2.5 rounded-3xl'>
            View Services
          </button>
        </div>
      </div>

      <div className='bg-[#006B3F] text-white p-[25px]'>
        <div className='gap-2.5  flex flex-col'>
          <h1 className='text-2xl font-medium'>About Us</h1>
          <p className='font-light text-justify text-sm'>The company specializes in the procurement of goods and services for the Indonesian Armed Forces (Army, Navy, and Air Force) as well as the Indonesian National Police. We are also fully prepared to expand our operational scope, backed by comprehensive licensing and official standard industrial classifications (KBLI) </p>
        </div>
      </div>
    </>
  )
}