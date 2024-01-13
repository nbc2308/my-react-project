import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
const MyServies = () => {
  return (
    <div className='my-servies h-[653px] mt-[137px]'>
      <div className='text w-[438px] m-auto'>
        <div className='title text-[32px] font-semibold flex justify-center mb-6'>
          My Services
        </div>
        <div className='sub-title font-[15px] mb-12'>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
      </div>

      <div className='content-servies grid grid-cols-3 gap-3'>
        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            <img src='/public/image/coding.png' width={65} height={53} className='text-[#FFB400] mt-10'></img>
            <p className='font-medium'>Web Development</p>
            <p className='font-light -mt-6'>Blog, E-Commerce</p>
        </div>

        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            <img src='/public/image/illustration.png' width={65} height={53} className='text-[#FFB400] mt-10'></img>
            <p className='font-medium'>UI/UX Design</p>
            <p className='font-light -mt-6'>Mobile App, Website Design</p>
        </div>

        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            <img src='/public/image/Microphone.png' width={65} height={53} className='text-[#FFB400] mt-10'></img>
            <p className='font-medium'>Sound Design</p>
            <p className='font-light -mt-6'>Voice Over, Beat Making</p>
        </div>

        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            <img src='/public/image/game-development.png' width={65} height={53} className='text-[#FFB400] mt-10'></img>
            <p className='font-medium'>Game Design</p>
            <p className='font-light -mt-6'>Character Design, Props & Objects</p>
        </div>

        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            <img src='/public/image/Photographer.png' width={65} height={53} className='text-[#FFB400] mt-10'></img>
            <p className='font-medium'>Photography</p>
            <p className='font-light -mt-6'>Protrait, Product Photography</p>
        </div>

        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            
            <p className='font-medium mt-10'>Advertising</p>
            <p className='font-light -mt-6 text-[15px] w-[260px] h-[78px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
            <a className='flex justify-center items-center text-[#FFB400] font-semibold text-[12px ]'>ORDER NOW <MdKeyboardArrowRight /></a>
        </div>
      </div>
    </div>
  )
}

export default MyServies