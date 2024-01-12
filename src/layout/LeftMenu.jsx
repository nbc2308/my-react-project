import React from 'react'
import { FaFacebookF } from "react-icons/fa";

const LeftMenu = () => {
  return (
    <div className='left-menu w-[305px] h-[1315px] float-start'>
        <div className="pro-file text-center mt-[50px]">
          <img className='h-auto inline-flex mb-[30px]' src="/public/image/Profile.jpg" alt="" />
          <p>Rayan Adlardard</p>
          <p className='text-slate-600 mt-[12px]'>Font-end Developer</p>
          <div className="icons grid justify-items-center">
            <FaFacebookF />
          </div>
        </div>
    </div>
  )
}

export default LeftMenu