import React from 'react'
import MainMenu from './MainMenu'
import MyServies from './content/MyServies'
import PricePlans from './content/PricePlans'
import Recommen from './content/Recommen'
import Education from './content/Education'
import WorkHistory from './content/WorkHistory'
import Portfolio from './content/Portfolio'
import Blog from './content/Blog'
import Contact from './content/Contact'
import Map from './content/Map'
import Logo from './content/Logo'
import Footer from './content/Footer'
const Container = () => {
  return (
    <div className='container inline-block w-[970px] h-auto ml-7'>
      <MainMenu />
      <MyServies />
      <PricePlans />
      <Recommen />
      <Education />
      <WorkHistory />
      <Portfolio />
      <Blog />
      <Contact />
      <Map />
      <Logo />
      <Footer />
    </div>
  )
}

export default Container