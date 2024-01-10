import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import HeroSection from './Components/Home/HeroSection'
import Footer from './Components/Footer/Footer'
import ServiceHome from './Components/Home/seviceHome'
import Crousel from './Components/Card/Crousel'
import Timeline from './Components/Home/Timeline'
import Testimonial from './Components/Home/testimonial'
import Accordion from './Components/Accordion/Accordion'
import BasicAccordion from './Components/Accordion/Accord'

function App() {

  return (
   <>
    <Navbar />
    <HeroSection/>
    <ServiceHome/>
    <Crousel/>
    <Timeline/>
    <Testimonial/>
    <BasicAccordion/>
    <Footer />
   </>
  )
}

export default App
