import React from "react"

export default function ServiceCard({ title, image, description }) {
  return (
    <div className="flex flex-col gap-3.5 bg-[#006B3F] text-white p-[20px] rounded-2xl ">
      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-neutral-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
        <p className="text-sm sm:text-base text-justify leading-relaxed opacity-90">{description}</p>
      </div>
    </div>
  )
}