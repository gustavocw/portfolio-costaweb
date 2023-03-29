import { useState } from "react";
import LandingPage from './pages/Landing/Landing'
import About from './pages/Landing/About'
import Clients from './pages/Landing/Clients'
import Testimonials from './pages/Landing/Testmunials'
import Footer from './pages/Landing/Footer'
import Contact from './pages/Landing/Contact'
import Projects from './pages/Landing/Projects'
import { ChakraProvider } from '@chakra-ui/react'


export default function App() {
  return (
    <ChakraProvider>
      <LandingPage />
      <About />
      <Projects />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </ChakraProvider>
  )
}