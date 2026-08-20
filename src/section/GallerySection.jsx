import React from "react";
import image1 from "../assets/gallery/IMG-20260817-WA0024.jpg.jpeg"
import image2 from "../assets/gallery/IMG-20260817-WA0020.jpg.jpeg"
import image3 from "../assets/gallery/IMG-20250624-WA0002.jpg (1).jpeg"
import image4 from "../assets/gallery/IMG-20250624-WA0005.jpg.jpeg"

export default function GallerySection() {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20" id="gallery">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className='flex flex-col gap-4 sm:gap-5'>
                    <h1 className="text-2xl sm:text-4xl font-semibold text-black tracking-tight">Our Gallery</h1>
                    <p className="text-base sm:text-lg text-justify leading-relaxed text-neutral-800">
                        A glimpse into our operational excellence, high-precision manufacturing facilities, technical field inspections, and strategic collaborations dedicated to strengthening national defense and security readiness.
                    </p>
                    <button className="w-full bg-[#00573F] hover:bg-[#00422d] text-white font-medium text-base sm:text-lg py-3.5 rounded-full transition-colors cursor-pointer shadow-md text-center mt-2">
                        See More
                    </button>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">

                    <div className="w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-sm">
                        <img src={image1} alt="Gallery 1" className="w-full h-full object-cover object-center" />
                    </div>


                    <div className="grid grid-cols-2 gap-4 sm:gap-5 items-stretch">

                        <div className="w-full h-full min-h-[220px] sm:min-h-[280px] overflow-hidden rounded-3xl shadow-sm">
                            <img src={image2} alt="Gallery 2" className="w-full h-full object-cover object-center" />
                        </div>

                        <div className="flex flex-col gap-4 sm:gap-5 justify-between">
                            <div className="w-full aspect-[16/10] overflow-hidden rounded-3xl shadow-sm">
                                <img src={image3} alt="Gallery 3" className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="w-full aspect-[16/10] overflow-hidden rounded-3xl shadow-sm">
                                <img src={image4} alt="Gallery 4" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}