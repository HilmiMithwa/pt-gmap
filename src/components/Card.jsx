import React from 'react'

export default function LicensingCard({ title, icon, description }) {
  return (
    <div className='bg-[#006B3F] p-6 md:p-7 rounded-[20px] flex flex-row items-center gap-5 md:gap-6 shadow-md h-full'>
      <div className='bg-[#004E2E] rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center shrink-0 [&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-14 md:[&>svg]:h-14'>
        {icon}
      </div>

      <p className='text-white text-sm sm:text-base md:text-[18px] leading-relaxed'>
        {title && <span className='font-bold mr-1.5'>{title}</span>}
        <span className='font-light opacity-95'>{description}</span>
      </p>
    </div>
  )
}

