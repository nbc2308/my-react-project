import React from 'react'
import MainMenu from './MainMenu'
import MyServies from './MyServies'
import PricePlans from './PricePlans'
const Container = () => {
  return (
    <div className='container inline-block w-[970px] h-auto ml-7'>
      <MainMenu />
      <MyServies />
      <PricePlans />
    </div>
  )
}

export default Container