import React from 'react'
import BasicAccordion from '../Accordion/Accord'
import Crousel from '../Card/Crousel'
import HeroSection from './HeroSection'
import Timeline from './Timeline'
import ServiceHome from './seviceHome'
import Testimonial from './testimonial'

const Home = () => {
  return (
    <>
      <HeroSection/>
        <ServiceHome/>
        <Crousel/>
        <Timeline/>
        <Testimonial/>
    </>
  )
}

export default Home
