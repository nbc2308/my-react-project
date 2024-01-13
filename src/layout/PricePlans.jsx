import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const PricePlans = () => {
  return (
    <div className='price-plans h-[793px] mt-[70px]'>
        <div className='text w-[438px] m-auto'>
            <div className='title text-[32px] font-semibold flex justify-center mb-6'>
            Price Plans
            </div>
            <div className='sub-title font-[15px] mb-12'>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            </div>
        </div>

        <div className='option-servies grid grid-cols-3 gap-3 '>
            <div className='w-[310px] h-[609px] bg-white grid justify-items-center'>
                <p className='silver-option font-bold text-[24px] mt-[54px]'>Silver</p>
                    <span className='price w-[145px] h-[40px] flex items-center -mt-11'>
                        <p className='font-extrabold text-[32px]'>$0.00</p>
                        <p className='pl-3 text-[15px]'>/Hour</p>
                    </span>
                    <p className='text-center -mt-12 font-light inline-block'>
                    For most businesses that want to
                    optimize web queries
                    </p>

                <div className='list-services grid gap-2 text-[15px]'>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />UI Design</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Web Development</p>
                    <p className='font-light flex items-center'><FaXmark />Logo Design</p>
                    <p className='font-light flex items-center'><FaXmark />Seo Optimization</p>
                    <p className='font-light flex items-center'><FaXmark />WordPress Integration</p>
                    <p className='font-light flex items-center'><FaXmark />5 Websites</p>
                    <p className='font-light flex items-center'><FaXmark />Unlimited User</p>
                    <p className='font-light flex items-center'><FaXmark />20 GB Bandwith</p>
                </div>
                <button className='w-[169px] h-[38px] mt-4 rounded-full shadow-lg shadow-blue-800/40'>ORDER NOW</button>
            </div>

            <div className='w-[310px] h-[609px] bg-white grid justify-items-center'>
                <p className='h-[24px] w-full text-center bg-secondaryColor'>Most Popular</p>
                <p className='silver-option font-bold text-[24px] -mt-[24px]'>Glod</p>
                    <span className='price w-[145px] h-[40px] flex items-center -mt-11'>
                        <p className='font-extrabold text-[32px]'>$50.00</p>
                        <p className='pl-3 text-[15px]'>/Hour</p>
                    </span>
                    <p className='text-center -mt-12 font-light inline-block'>
                    For most businesses that want to
                    optimize web queries
                    </p>

                <div className='list-services grid gap-2 text-[15px]'>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />UI Design</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Web Development</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Logo Design</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Seo Optimization</p>
                    <p className='font-light flex items-center'><FaXmark />WordPress Integration</p>
                    <p className='font-light flex items-center'><FaXmark />5 Websites</p>
                    <p className='font-light flex items-center'><FaXmark />Unlimited User</p>
                    <p className='font-light flex items-center'><FaXmark />20 GB Bandwith</p>
                </div>
                <button className='w-[169px] h-[38px] mt-4 rounded-full bg-secondaryColor shadow-lg shadow-blue-800/40'>ORDER NOW</button>
            </div>

            <div className='w-[310px] h-[609px] bg-white grid justify-items-center'>
                <p className='silver-option font-bold text-[24px] mt-[54px]'>Dimond</p>
                    <span className='price w-[145px] h-[40px] flex items-center -mt-11'>
                        <p className='font-extrabold text-[32px]'>$80.00</p>
                        <p className='pl-3 text-[15px]'>/Hour</p>
                    </span>
                    <p className='text-center -mt-12 font-light inline-block'>
                    For most businesses that want to
                    optimize web queries
                    </p>

                <div className='list-services grid gap-2 text-[15px]'>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />UI Design</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Web Development</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Logo Design</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Seo Optimization</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />WordPress Integration</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />5 Websites</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />Unlimited User</p>
                    <p className='font-medium flex items-center'><IoMdCheckmark className='text-[#FFB400]' />20 GB Bandwith</p>
                </div>
                <button className='w-[169px] h-[38px] mt-4 rounded-full shadow-lg shadow-blue-800/40'>ORDER NOW</button>
            </div>
        </div>
    </div>
  )
}

export default PricePlans