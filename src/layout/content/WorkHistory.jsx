import React from 'react'

const educations = [
    {
        university: 'Lead Web Designer',
        student: 'student',
        time: 'Jan 1016 - Dec 2021',
        title: 'Certificate of web training',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
        line : <div className='border border-[#F0F0F6] w-[901px] mt-3'></div>
    },
    {
        university: 'Junior Web Designer',
        student: 'student',
        time: 'Jan 1016 - Dec 2021',
        title: 'Certificate of web training',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
        line : <div className='border border-[#F0F0F6] w-[901px] mt-3'></div>
    },
    {
        university: 'Senior Web Designer',
        student: 'student',
        time: 'Jan 1016 - Dec 2021',
        title: 'Certificate of web training',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
]

const Education = () => {
    return (
        <div className='h-[815px] items-center mt-16'>
            <div className='text w-[438px] m-auto'>
                <div className='title text-[32px] font-bold flex justify-center mb-6'>
                    Work History
                </div>
                <div className='sub-title text-[15px] mb-12'>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                </div>
            </div>

            <div className='grid grid-rows-3 bg-primaryColor'>
                {educations.map(item => (
                    <div className='w-[910px] h-[208px] m-auto'>
                        <div className='w-[904px] h-[150px] flex mt-12'>
                            <div className='mr-[179px] w-[208px]'>
                                <p className='text-[17px] font-medium'>
                                    {item.university}
                                </p>
                                <div className='text-center mt-7'>
                                    <span className='text-[15px]'>{item.student}</span>
                                    <span className='text-[10px] ml-7 w-[111px] h-[18px] bg-secondaryColor text-white p-1'>{item.time}</span>
                                </div>
                            </div>

                            <div>
                                <p className='text-[18px] font-semibold w-[234px]'>
                                    {item.title}
                                </p>
                                <p className='text-[15px] w-[536px] h-[100px] mt-[28px]'>
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                        {item.line}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Education