import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

function OurCourses() {

    return (

        <>

            {/* header */}

            <Header />

            {/* header */}

            {/* main content */}

            <div className='flex flex-col mt-[74px]'>

                {/* hero section */}

                <div className='flex flex-row bg-linear-to-r justify-center items-center from-[#FB7185] to-[#F97316] h-[60vh] mb-9'>

                    {/* Description & header */}

                    <div className='flex flex-col items-center gap-6 p-3'>

                        <div className='flex flex-row tracking-widest'>

                            <h1 className='text-[40px] font-bold text-[#020817]'>Our Courses</h1>

                        </div>

                        <div className='flex flex-row max-w-3xl text-center leading-8 tracking-widest'>

                            <p className='text-[18px] font-semibold text-[#FFFFFF]'>Discover our very best, most interesting, valuable, and enjoyable courses carefully designed to inspire learning, spark creativity, and boost your skills. Each course is built with passion to make your journey exciting, meaningful, mastering new knowledge.</p>

                        </div>

                    </div>

                    {/* Description & header */}

                </div>

                {/* hero section */}

                {/* search bar sesction */}

                <div className='flex flex-row justify-end mt-9 p-6'>

                    <div className='flex relative items-center'>

                        <CiSearch className='absolute h-9 left-3 text-[#8793A6] font-bold'/>

                        <input type="text" className='border-2 w-96 border-[#E9EEF4] h-11 pl-10 rounded-md' placeholder='Search course'/>

                    </div>


                </div>

                {/* search bar sesction */}

                <div className='flex flex-row'></div>
                <div className='flex flex-row'></div>
                <div className='flex flex-row'></div>

            </div>

            {/* main content */}

            {/* footer */}

            <Footer />

            {/* footer */}

        </>


    )

}

export default OurCourses