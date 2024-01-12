import React from 'react'

const MainMenu = () => {
  return (
    <div className='main-menu h-[467px] bg-white'>
        <div className='content-left w-[500px] py-20 pl-14 inline-block float-left'>
            <div className='text-[41px] font-semibold'>
                I’m Rayan Adlrdard
                <p className='inline-block text-[#FFB400] normal-case'>Front-end</p> Developer
            </div>
            <div className='w-[424px] text-base text-[#767676] mt-4 mb-7'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
            </div>
            <img src='/public/image/hire-me.png' width={154} height={51}></img>
        </div>

        <div className='content-right inline-block float-end pr-14 pt-3'>
            <img src='/public/image/avt.png' width={325}></img>
        </div>
    </div>
  )
}

export default MainMenu