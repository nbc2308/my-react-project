
const reviews = [
    {
        title: "Great Quality!",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        avt: <img src='public/image/profile1.png'></img>,
        name: "James Gouse",
        work: "Graphic Design"
    },
    {
        title: "Amazing Work!",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        avt: <img src='public/image/profile2.png'></img>,
        name: "Tiana Philips",
        work: "Photographer"
    },
    {
        title: "Great Quality!",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum",
        avt: <img src='public/image/profile3.png'></img>,
        name: "Talan Westervelt",
        work: "Business Man"
    },
]



const Recommen = () => {
    return (
        <div className='recommen h-[566px] mt-[70px]'>
            <div className='text w-[438px] m-auto'>
                <div className='title text-[32px] font-semibold flex justify-center mb-6'>
                    Recommendations
                </div>
                <div className='sub-title font-[15px] mb-12'>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                </div>
            </div>

            <div className='reviews grid grid-cols-3 gap-3'>

                {reviews.map(item => (
                    <div className='w-[310px] h-[323px] bg-white'>
                        <div className='w-[262px] m-auto'>
                            <div className='inline-flex gap-3 mt-4 '>
                                <img src='public/image/Shape.png'></img>
                                <img src='public/image/Shape.png'></img>
                                <img src='public/image/Shape.png'></img>
                                <img src='public/image/Shape.png'></img>
                                <img src='public/image/Shape.png'></img>
                            </div>
                            <p className='text[18px] font-semibold my-3'>
                                {item.title}
                            </p>
                            <p className='text-[15px] font-light'>
                                {item.subtitle}
                            </p>
                            <div className='h-[80px] flex items-center mt-[30px]'>
                                {item.avt}
                                <span className='ml-[13px]'>
                                    <p className='text-[18px] font-semibold'>
                                        {item.name}
                                    </p>
                                    <p className='text-[15px] font-light'>
                                        {item.work}
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Recommen