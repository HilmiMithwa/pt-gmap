import React from 'react'

export default function LicensingCard({icon, description}) {
  return (
    <div>
      <img src={icon} alt={description} />
      <p>{description}</p>
    </div>
  )
}

