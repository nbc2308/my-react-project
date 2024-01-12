import React from 'react'
import MainMenu from './MainMenu'
import MyServies from './MyServies'
const Container = () => {
  return (
    <div className='container inline-block w-[970px] h-auto ml-7'>
      <MainMenu />
      <MyServies />
    </div>
  )
}

export default Container