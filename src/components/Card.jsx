import React from 'react'

export default function LicensingCard({ title, icon, description }) {
  return (
    <div className='bg-[#006B3F] p-5 rounded-xl flex flex-row items-center gap-[15px]'>
      <div className='bg-[#00573F] p-[9px] rounded-md w-fit [&>svg]:w-[40px] [&>svg]:h-[40px] shrink-0'>
        {icon}
      </div>

      <p className='text-justify'>
        {title && <span className='font-bold'>{title}</span>}
        {description}
      </p>
    </div>
  )
}
