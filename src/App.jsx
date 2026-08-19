import './App.css'
import LicensingCard from './components/Card'
import HeroSection from './section/HeroSection'
import Navbar from './section/Navbar'


function App() {
  const licensingCards = [
    {
      description: "Heavy Weaponry & Artillery Systems: Production and assembly of cannons, mobile guns, rocket launchers, torpedo tubes, and heavy machine guns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
          <path fill="#fff" d="M94 67.656v78.094h124.063V67.656zm-74.156 49.5v75.875l97.78 98.032h144.44l-.002-173.906H236.75v47.281H75.312v-47.283H19.844zM280.75 136.03v89.407h99l-46.625 46.75H280.75v18.688h60.125l2.75-2.75l58.625-58.78l2.72-2.72v-1.188h.342V136.03zM424 154.407v51.75h68.53v-51.75zM165.906 309.75a47.86 47.86 0 0 0 14.938 34.125L115.75 429.97c-25.832 2.44-47.42 20.308-56.97 45.217h126.064c-8.29-21.625-25.665-37.942-47-43.468l23.125-30.564h101.31l23.095 30.563c-21.332 5.527-38.68 21.844-46.97 43.467h126.032c-9.546-24.906-31.11-42.775-56.937-45.218l-63.28-83.658c10.65-8.667 17.47-21.81 17.686-36.562h-96zm30.813 44.156c5.34 2.05 11.124 3.156 17.186 3.156c4.702 0 9.237-.678 13.53-1.937l20.69 27.344h-73l21.593-28.564z"></path>
        </svg>
      )
    },
    {
      description: "Small Arms & Tactical Firearms: Handguns, revolvers, assault rifles, and light machine guns for military, law enforcement, shooting sports, hunting, and self-defense purposes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="#fff" d="M7 5h16v4h-1v1h-6a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H9.62c-.38 0-.73.22-.9.56l-2.45 4.89c-.17.34-.51.55-.89.55H2s-3 0 1-6c0 0 3-4-1-4V5h1l.5-1h3zm7 7v-1a1 1 0 0 0-1-1h-1s-1 1 0 2a2 2 0 0 1-2-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1"></path>
        </svg>
      )
    },
    {
      description: "Small Arms & Tactical Firearms: Handguns, revolvers, assault rifles, and light machine guns for military, law enforcement, shooting sports, hunting, and self-defense purposes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path fill="#fff" d="M5 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1h4zm5 0a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1h4zm5 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h4zM2.736 3.132a.59.59 0 0 1 .528 0A3.14 3.14 0 0 1 5 5.942V10H1V5.942c0-1.19.672-2.278 1.736-2.81m5 0a.59.59 0 0 1 .528 0A3.14 3.14 0 0 1 10 5.942V10H6V5.942c0-1.19.672-2.278 1.736-2.81m5 0a.59.59 0 0 1 .528 0A3.14 3.14 0 0 1 15 5.942V10h-4V5.942c0-1.19.672-2.278 1.736-2.81"></path>
        </svg>
      )
    },
    {
      description: "Tactical Explosive Devices: Fabrication and handling of bombs, grenades, torpedoes, mines, and rockets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <g fill="#fff">
            <path d="M11 6a5 5 0 1 1-6 0z"></path>
            <path d="M9 1a1 1 0 0 1 1 1v.5a5 5 0 0 1 5 5V10a.5.5 0 0 1-1 0v-.969A4.566 4.566 0 0 0 10 4.5V5H6V2a1 1 0 0 1 1-1z"></path>
            <path d="M3.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></path>
          </g>
        </svg>
      )
    }
  ]

  return (
    <>

      <HeroSection />
    </>
  )
}

export default App
