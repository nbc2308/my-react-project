import React from 'react'
import MainMenu from './MainMenu'
import MyServies from './MyServies'
import PricePlans from './PricePlans'
import Recommen from './Recommen'
const Container = () => {
  return (
    <div className='container inline-block w-[970px] h-auto ml-7'>
      <MainMenu />
      <MyServies />
      <PricePlans />
      <Recommen />
    </div>
  )
}

export default Container