import React from 'react'
import { motion } from 'framer-motion'

export default function MissionSection() {
  const missions = [
    "To provide mission-critical procurement and logistical excellence for the Armed Forces (Army, Navy, Air Force) and the National Police.",
    "To advance domestic manufacturing capabilities in tactical firearms, heavy weaponry, ammunition, and explosive systems in full compliance with defense industry standards.",
    "To maintain the highest standards of operational integrity, quality assurance, and strict regulatory compliance across all defense operations.",
    "To foster strategic global and domestic partnerships that elevate modern technological readiness and national defense capabilities."
  ]

  return (
    <section className='px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 text-black' id='mission'>
      <div className='max-w-6xl mx-auto flex flex-col gap-6 md:gap-8'>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className='text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-tight text-center'
        >
          Our Mission
        </motion.h1>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className='flex flex-col'
        >
          {missions.map((mission, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className='flex flex-row items-start gap-4 sm:gap-5 py-5 sm:py-6 border-b border-black/80'
            >
              <div className='mt-1 sm:mt-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[2.5px] border-[#006B3F] shrink-0 bg-transparent' />
              <p className='text-sm sm:text-base md:text-2xl font-regular text-black leading-relaxed'>
                {mission}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}