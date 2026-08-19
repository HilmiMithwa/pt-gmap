import React from 'react'

export default function LicensingCard({ icon, description }) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-emerald-600 p-3 rounded-md w-fit'>
        {icon}
      </div>
      <p>{description}</p>
    </div>
  )
}

