import React from 'react'

const categories = [
    {
        name: "All categories",
    },
    {
        name: "Ui Design",
    },
    {
        name: "Web Templates",
    },
    {
        name: "Logo",
    },
    {
        name: "Branding",
    },
]

const imgs = [
    {
        img: <img src='image/category/1.png'></img>,
    },
    {
        img: <img src='image/category/2.png'></img>,
    },
    {
        img: <img src='image/category/3.png'></img>,
    },
    {
        img: <img src='image/category/4.png'></img>,
    },
    {
        img: <img src='image/category/5.png'></img>,
    },
    {
        img: <img src='image/category/6.png'></img>,
    },
    {
        img: <img src='image/category/7.png'></img>,
    },
    {
        img: <img src='image/category/8.png'></img>,
    },
    {
        img: <img src='image/category/9.png'></img>,
    },
]

const Portfolio = () => {
    return (
        <div className='h-[1195px] mt-[70px]'>
            <div className='text w-[438px] m-auto'>
                <div className='title text-[32px] font-bold flex justify-center mb-6'>
                    Portfolio
                </div>
                <div className='sub-title text-[15px] mb-12'>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                </div>
            </div>

            <div className='w-[606px] h-[22px] m-auto'>
                <ul className='flex justify-center items-center gap-6 text-[15px] font-medium '>
                    {categories.map(item => (
                        <li className='hover:text-secondaryColor'>{item.name}</li>
                    ))}
                </ul>
            </div>

            <div className='grid grid-cols-3 gap-3 mt-[50px]'>
                {imgs.map(item => (
                    <div className='w-[310px] h-[300px]'>
                        {item.img}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portfolio