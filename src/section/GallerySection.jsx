import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/gallery/IMG-20260817-WA0024.jpg.jpeg"
import image2 from "../assets/gallery/IMG-20260817-WA0020.jpg.jpeg"
import image3 from "../assets/gallery/IMG-20250624-WA0002.jpg (1).jpeg"
import image4 from "../assets/gallery/IMG-20250624-WA0005.jpg.jpeg"

export default function GallerySection() {
    const navigate = useNavigate();

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden" id="gallery">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:gap-5" 
                >
                    <h1 className="text-2xl text-neutral-900 lg:text-[40px] font-semibold tracking-tight leading-tight">
                        Our Gallery
                    </h1>
                    <p className="text-base sm:text-lg text-neutral-800 leading-relaxed text-left">
                        A glimpse into our operational excellence, high-precision manufacturing facilities, technical field inspections, and strategic collaborations dedicated to strengthening national defense and security readiness.
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/gallery')}
                        className="w-full bg-[#006837] hover:bg-[#00522b] text-white font-medium text-base sm:text-lg py-3.5 rounded-full transition-colors cursor-pointer shadow-sm text-center mt-2"
                    >
                        See More
                    </motion.button>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-3.5 sm:gap-4"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm"
                    >
                        <img src={image1} alt="Gallery 1" className="w-full h-full object-cover object-center" />
                    </motion.div>


                    <div className="grid grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full min-h-0 overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm"
                        >
                            <img src={image2} alt="Gallery 2" className="w-full h-full object-cover object-center" />
                        </motion.div>


                        <div className="flex flex-col gap-3.5 sm:gap-4 justify-between">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm"
                            >
                                <img src={image3} alt="Gallery 3" className="w-full h-full object-cover object-center" />
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="w-full aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm"
                            >
                                <img src={image4} alt="Gallery 4" className="w-full h-full object-cover object-center" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}