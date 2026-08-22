import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../section/Navbar";
import Footer from "../section/Footer";

import image1 from "../assets/gallery/IMG-20260817-WA0024.jpg.jpeg";
import image2 from "../assets/gallery/IMG-20260817-WA0020.jpg.jpeg";
import image3 from "../assets/gallery/IMG-20250624-WA0002.jpg (1).jpeg";
import image4 from "../assets/gallery/IMG-20250624-WA0005.jpg.jpeg";
import image5 from "../assets/gallery/IMG-20260817-WA0033.jpg.jpeg";

const galleryItems = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 }
];

export default function SeeMoreGallery() {
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const openLightbox = (index) => {
        setActiveImageIndex(index);
    };

    const closeLightbox = () => {
        setActiveImageIndex(null);
    };

    const navigateLightbox = (direction) => {
        if (activeImageIndex === null) return;
        let newIndex = activeImageIndex + direction;
        if (newIndex < 0) newIndex = galleryItems.length - 1;
        if (newIndex >= galleryItems.length) newIndex = 0;
        setActiveImageIndex(newIndex);
    };

    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeImageIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") navigateLightbox(1);
            if (e.key === "ArrowLeft") navigateLightbox(-1);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeImageIndex]);

    return (
        <div className="bg-[#121214] min-h-screen text-white flex flex-col font-sans selection:bg-[#FFC400] selection:text-black">
            
            <Navbar />

            
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#1C1C1E] to-[#121214] border-b border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#006837_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link 
                            to="/" 
                            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#FFC400] transition-colors group"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Homepage
                        </Link>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white"
                    >
                        Defense Operations <span className="text-[#006837]">Gallery</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-neutral-400 max-w-2xl text-base md:text-lg font-light leading-relaxed"
                    >
                        A comprehensive documentation of PT Guna Mitra Abadi's high-precision tactical assets, strict procurement workflows, and active defense collaborations.
                    </motion.p>
                </div>
            </section>

            
            <main className="flex-grow py-12 md:py-20 px-6 max-w-6xl mx-auto w-full">
                
                
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className="group relative overflow-hidden bg-[#1C1C1E] rounded-3xl border border-white/5 shadow-xl cursor-pointer aspect-[16/10]"
                                onClick={() => openLightbox(idx)}
                            >
                                
                                <img 
                                    src={item.src} 
                                    alt="Gallery view" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-[#006837] text-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                
                {galleryItems.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-neutral-500 text-lg">No images available in this gallery.</p>
                    </motion.div>
                )}
            </main>

            
            <AnimatePresence>
                {activeImageIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
                    >
                        
                        <button 
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer z-50"
                            aria-label="Close lightbox"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-colors cursor-pointer z-50"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button 
                            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-colors cursor-pointer z-50"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        
                        <motion.div 
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-5xl w-full flex flex-col items-center gap-4 relative z-10"
                        >
                            <div className="relative overflow-hidden rounded-2xl max-h-[70vh] flex items-center justify-center bg-black shadow-2xl border border-white/10">
                                <img 
                                    src={galleryItems[activeImageIndex].src} 
                                    alt="Fullscreen view" 
                                    className="max-w-full max-h-[70vh] object-contain"
                                />
                            </div>

                            
                            <div className="text-center max-w-2xl px-4 flex flex-col gap-1 mt-2">
                                <span className="text-neutral-400 text-sm font-light leading-relaxed">
                                    Image {activeImageIndex + 1} of {galleryItems.length} (Use Arrow Keys to Navigate)
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            
            <Footer />
        </div>
    );
}