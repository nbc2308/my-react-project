import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const services = [
  {
    img: <img src='/image/coding.png' className='text-[#FFB400] mt-10'></img>,
    title: 'Web Development',
    subtitle: 'Blog, E-Commerce',
  },
  {
    img: <img src='/image/illustration.png' className='text-[#FFB400] mt-10'></img>,
    title: 'Web Development',
    subtitle: 'Blog, E-Commerce',
  },
  {
    img: <img src='/image/Microphone.png' className='text-[#FFB400] mt-10'></img>,
    title: 'Web Development',
    subtitle: 'Blog, E-Commerce',
  },
  {
    img: <img src='/image/game-development.png' className='text-[#FFB400] mt-10'></img>,
    title: 'Web Development',
    subtitle: 'Blog, E-Commerce',
  },
  {
    img: <img src='/image/Photographer.png' className='text-[#FFB400] mt-10'></img>,
    title: 'Web Development',
    subtitle: 'Blog, E-Commerce',
  },

  
]
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
        {services.map(item => (
          <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            {item.img}
            <p className='font-medium'>{item.title}</p>
            <p className='font-light -mt-6'>{item.subtitle}</p>
        </div>
        ))}

        <div className='w-[310px] h-[225px] bg-white inline-grid justify-items-center'>
            
            <p className='font-medium mt-10'>Advertising</p>
            <p className='font-light -mt-6 text-[15px] w-[260px] h-[78px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
            <a href='#' className='flex justify-center items-center text-[#FFB400] font-semibold text-[12px ]'>ORDER NOW <MdKeyboardArrowRight /></a>
        </div>
      </div>
    </div>
  )
}

export default MyServies