import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import HeroSection from './section/HeroSection'
import LicensingSection from './section/LicensingSection'
import VissionSection from './section/VissionSection'
import MissionSection from './section/MissionSection'
import ServiceSection from './section/ServiceSection'
import GallerySection from './section/GallerySection'
import Footer from './section/Footer'
import SeeMoreGallery from './pages/SeeMoreGallery'


function ScrollToHashElement() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        
        const timer = setTimeout(() => {
          const navbarOffset = 70
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 100)
        return () => clearTimeout(timer)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])

  return null
}

function Home() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <LicensingSection />
      <VissionSection />
      <MissionSection />
      <ServiceSection />
      <GallerySection />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<SeeMoreGallery />} />
      </Routes>
    </>
  )
}

export default App
