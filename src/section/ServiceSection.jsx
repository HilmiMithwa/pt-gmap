import React from "react";

import fotoMobil from '../assets/service_images/fotoMobil.png'
import fotoNgetik from '../assets/service_images/fotoNgetik.png'
import fotoSenjata from '../assets/service_images/fotoSenjata.png'
import fotoTablet from '../assets/service_images/fotoTablet.png'

import ServiceCard from "../components/ServiceCard";



export default function ServiceSection() {
    const services = [
        {
            image: fotoSenjata,
            title: "Goods & Tactical  Procurement",
            description: "Comprehensive sourcing and supply of tactical gear, spare parts, equipment, and general operational provisions for Land, Sea, Air forces, and the National Police."
        },
        {
            image: fotoMobil,
            title: "Integrated Service Solutions",
            description: "Tailored technical services, maintenance support, and operational logistics designed to address complex institutional requirements"
        },
        {
            image: fotoNgetik,
            title: "Defense Manufacturing & Armament  Supply",
            description: "Comprehensive sourcing and supply of tactical gear, spare parts, equipment, and general operational provisions for Land, Sea, Air forces, and the National Police."
        },
        {
            image: fotoTablet,
            title: "Customized & Adaptive Procurement",
            description: "End-to-end procurement services structured flexibly to deliver specialized products and systems based on dynamic partner specifications."
        }
    ]

    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20" id="services">
            <div className="max-w-6xl mx-auto flex flex-col gap-[35px]">
                <div className="flex flex-col gap-3 md:gap-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Our Services</h1>
                    <p className="text-sm sm:text-base md:text-xl leading-relaxed text-justify">PT Guna Mitra Abadi Perkasa delivers integrated, highly adaptable procurement solutions engineered to support mission-readiness across the defense and security sectors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] lg:gap-8">
                    {services.map((item) => (
                        <ServiceCard key={item.title} title={item.title} image={item.image} description={item.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}