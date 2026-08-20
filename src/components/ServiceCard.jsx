import React from "react"

export default function ServiceCard( { title, image, description }) {
  return (
    <div>
      <div>
        <img src={image} />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}