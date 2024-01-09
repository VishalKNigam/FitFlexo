import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import HeroSection from './Components/Home/HeroSection'

function App() {

  return (
   <>
    <Navbar />
    <HeroSection/>
   </>
  )
}

export default App
