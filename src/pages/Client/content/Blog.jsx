import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const blogs = [
    {
        img: <img src='/image/category/1.png'></img>,
        title: 'How To Make Web Tempates',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
        btn: 'Learn More',
        icons: <IoIosArrowForward />,
    },
    {
        img: <img src='/image/category/2.png'></img>,
        title: 'Make Business Card',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
        btn: 'Learn More',
        icons: <IoIosArrowForward />,
    },
    {
        img: <img src='/image/category/3.png'></img>,
        title: 'How To Make Flyer Design',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
        btn: 'Learn More',
        icons: <IoIosArrowForward />,
    },
]

const Blog = () => {
    return (
        <div className='blog h-[665px] mt-[70px]'>
            <div className='text w-[438px] m-auto'>
                <div className='title text-[32px] font-bold flex justify-center mb-6'>
                    Blog
                </div>
                <div className='sub-title text-[15px] mb-12'>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {blogs.map(item => (
                    <div className='w-[310px] h-[474px] bg-primaryColor'>
                        {item.img}
                        <div className='content w-[268px] m-auto mt-[25px]'>
                            <h4 className='font-medium text-[18px]'>
                            {item.title}
                            </h4>
                            <p className='text-[#767676] my-2'>
                            {item.subtitle}
                            </p>
                            <a className='btn text-secondaryColor flex items-center font-medium' href='#'>{item.btn} <i className='ml-1 text-[10px]'>{item.icons}</i></a>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Blog