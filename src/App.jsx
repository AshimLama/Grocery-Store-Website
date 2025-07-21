import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import FeaturedProducts from './components/FeaturedProducts'
import Template from './components/Template'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeaturedProducts/>
      <Template/>
      <Footer/>
    </>
  )
}

export default App
