import './App.css'

import HeroSection from './section/HeroSection'
import LicensingSection from './section/LicensingSection'
import VissionSection from './section/VissionSection'
import MissionSection from './section/MissionSection'
import ServiceSection from './section/ServiceSection'
import GallerySection from './section/GallerySection'
import Footer from './section/Footer'

function App() {
  
  return (
    <>
    <div className='flex flex-col'>
      <HeroSection />
      <LicensingSection />
      <VissionSection />
      <MissionSection />
      <ServiceSection />
      <GallerySection />
      <Footer />
    </div>
      
    </>
  )
}

export default App
