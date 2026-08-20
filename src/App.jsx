import './App.css'

import LicensingCard from './components/Card'
import HeroSection from './section/HeroSection'
import LicensingSection from './section/LicensingSection'
import VissionSection from './section/VissionSection'
import MissionSection from './section/MissionSection'
import ServiceSection from './section/ServiceSection'

function App() {
  
  return (
    <>
    <div className='flex flex-col'>
      <HeroSection />
      <LicensingSection />
      <VissionSection />
      <MissionSection />
      <ServiceSection />
    </div>
      
    </>
  )
}

export default App
