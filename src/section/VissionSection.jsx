import React from 'react'
import { motion } from 'framer-motion'

export default function VissionSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[156px] py-8 md:py-12 lg:py-16 text-white" id='vision'>
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='max-w-7xl mx-auto bg-[#006B3F] rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col items-end text-right gap-3 md:gap-5 shadow-xl'
      >
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-tight'>
          Our Vision
        </h1>
        <p className='font-light text-base sm:text-lg md:text-2xl lg:text-[28px] leading-relaxed max-w-4xl'>
          To be a premier and trusted strategic partner in the national defense and security industry, delivering integrated procurement solutions, advanced weaponry, and high-grade munitions.
        </p>
      </motion.div>
    </section>
  )
} 