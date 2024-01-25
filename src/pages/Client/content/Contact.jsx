import { Input } from 'postcss'
import React from 'react'

const contactInfor = [
    {
        icon: <img src='/image/Icons/location.png'></img>,
        name: 'Country:',
        name1: 'City:',
        name2: 'Streat:',
        value: 'Bangladesh',
        value1: 'Dhaka',
        value2: '35 vhatara, Badda'

    },
    {
        icon: <img src='/image/Icons/mail.png'></img>,
        name: 'Email:',
        name1: 'Skype::',
        name2: 'Telegram:',
        value: 'youremail@gmail.com',
        value1: '@yourusername',
        value2: '@yourusername'

    },
    {
        icon: <img src='/image/Icons/Mobile.png'></img>,
        name: 'Support services:',
        name1: 'Office:',
        name2: 'Personal:',
        value: '15369',
        value1: '+58 (021)356 587 235',
        value2: '+58 (021)356 587 235'

    },
]

const Contact = () => {
    return (
        <div className='h-[756px] flex gap-7 mt-[70px]'>
            <div className='w-[570px]'>
                <h2 className='font-bold text-[32px]'>Leave us your info</h2>
                <form>
                    <div className='h-[665px] bg-primaryColor mt-[50px]'>
                        <div className='w-[512px] m-auto pt-6'>
                            <p>Your Full Name</p>
                            <input required type='text' className='bg-bgColor w-[512px] h-[50px] mt-2 pl-2'></input>
                        </div>

                        <div className='w-[512px] m-auto pt-6'>
                            <p>Your Email</p>
                            <input required type='email' className='bg-bgColor w-[512px] h-[50px] mt-2 pl-2'></input>
                        </div>

                        <div className='w-[512px] m-auto pt-6'>
                            <p>Subject</p>
                            <input type='email' className='bg-bgColor w-[512px] h-[50px] mt-2 pl-2'></input>
                        </div>

                        <div className='w-[512px] m-auto pt-6'>
                            <p>Your Message</p>
                            <textarea type='email' className='bg-bgColor w-[512px] h-[212px] mt-2 pl-2'></textarea>
                        </div>

                        <div className='w-[512px] m-auto pt-3'>
                            <button className='bg-secondaryColor w-[159px] h-9 text-black text-[14px] font-semibold'>SEND MESSAGE</button>
                        </div>
                    </div>
                </form>

            </div>

            <div className='w-[370px]'>
                <h2 className='font-bold text-[32px]'>Contact information</h2>
                <div className='grid grid-rows-3 gap-4 h-[665px] mt-[50px]'>
                {contactInfor.map(item => (
                    <div className='h-[210px] bg-primaryColor'>
                        <div className='logo
                        flex justify-center
                        items-center
                        w-[40px]
                        h-[40px]
                        bg-[#FFB400]
                        border-solid
                        border-2
                        rounded-full
                        border-[#FFB400]
                        m-auto
                        mt-[25px]
                        '>
                            {item.icon}
                        </div>
                        <div className='infor w-[330px] m-auto mt-8'>
                            <div>
                                <span className='font-medium text-[18px] text-[#767676]'>{item.name}</span>
                                <span className='float-right text-textColor text-[15px]'>{item.value}</span>
                            </div>

                            <div className='my-2'>
                                <span className='font-medium text-[18px] text-[#767676]'>{item.name1}</span>
                                <span className='float-right text-textColor text-[15px]'>{item.value1}</span>
                            </div>

                            <div>
                                <span className='font-medium text-[18px] text-[#767676]'>{item.name2}</span>
                                <span className='float-right text-textColor text-[15px]'>{item.value2}</span>
                            </div>

                        </div>
                    </div>
                ))}
                    
                    

                </div>
            </div>
        </div>
    )
}

export default Contact