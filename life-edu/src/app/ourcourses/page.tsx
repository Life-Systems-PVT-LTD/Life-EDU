import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

function OurCourses() {

    return (

        <>

            {/* header */}

            <Header />

            {/* header */}

            {/* main content */}

            <div className='flex flex-col mt-[74px]'>

                {/* hero section */}

                <div className='flex flex-row bg-linear-to-r justify-center items-center from-[#FB7185] to-[#F97316] h-[60vh]'>

                    {/* Description & header */}                    

                    <div className='flex flex-col items-center gap-6 p-3'>

                        <div className='flex flex-row tracking-widest'>

                            <h1 className='text-[40px] font-bold text-[#020817]'>Our Courses</h1>

                        </div>

                        <div className='flex flex-row max-w-3xl text-center leading-10 tracking-widest'>

                            <p className='text-[18px] font-semibold text-[#FFFFFF]'>Discover our very best, most interesting, valuable, and enjoyable courses carefully designed to inspire learning, spark creativity, and boost your skills. Each course is built with passion to make your journey exciting, meaningful, mastering new knowledge.</p>

                        </div>

                    </div>

                    {/* Description & header */}

                </div>

                {/* hero section */}

                <div className='flex flex-row'></div>
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