import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMailOutline } from 'react-icons/io5'
import { LuPhone } from 'react-icons/lu'
import { SlLocationPin } from 'react-icons/sl'

function Footer() {

    return (

        <>

            {/* main container */}

            <div className='flex flex-col w-full mt-6 border-[#E9EEF4] bg-[#FFFFFF] border-t'>

                <div className='flex flex-row p-4'>

                    {/* sub container */}

                    <div className='flex lg:flex-row flex-col w-full gap-7 lg:justify-between items-center lg:items-start text-center lg:text-left'>

                        {/* content */}

                        <div className='flex flex-col gap-4 text-pretty max-w-xs'>

                            {/* logo */}

                            <div className='flex justify-center lg:justify-start'>

                                <Image src={'/assets/logos/life-edu.png'} width={130} height={130} alt='logo' />

                            </div>

                            {/* logo */}

                            {/* description */}

                            <div className='line-clamp-0 leading-7'>

                                <p className='text-[15px] text-[#64748B] font-semibold'>Empowering learners worldwide with quality online education and professional development courses.</p>

                            </div>

                            {/* description */}

                        </div>

                        <div className='flex flex-col gap-5 text-pretty max-w-xs'>

                            <div>

                                <span className='text-[18px] text-[#020817] font-bold tracking-wide'>We Gurantee</span>

                            </div>

                            <div className='line-clamp-0 leading-7'>

                                <p className='text-[15px] text-[#64748B] font-semibold'>Our teachers conduct every leson in a way that ensures 100% clear and easy understanding</p>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4 text-pretty max-w-xs'>

                            <div>

                                <span className='text-[18px] text-[#020817] font-bold tracking-wide'>Quick Links</span>

                            </div>

                            <div className='line-clamp-0 leading-7 gap-1 flex flex-col'>

                                <Link href={'/'} className='text-[15px] text-[#64748B] font-semibold'>Browse Course</Link>
                                <Link href={'/'} className='text-[15px] text-[#64748B] font-semibold'>About Us</Link>
                                <Link href={'/'} className='text-[15px] text-[#64748B] font-semibold'>Contact Us</Link>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4 text-pretty max-w-xs'>

                            <div>

                                <span className='text-[18px] text-[#020817] font-bold tracking-wide'>Contact</span>

                            </div>

                            <div className='line-clamp-0 justify-start leading-7 gap-1 flex flex-col'>

                                <div className='justify-start items-center flex flex-row gap-3'>

                                    <IoMailOutline />

                                    <span className='text-[15px] text-[#64748B] font-semibold'>info@lifeedu@gmail.com</span>

                                </div>

                                <div className='justify-start items-center flex flex-row gap-3'>

                                    <LuPhone />

                                    <span className='text-[15px] text-[#64748B] font-semibold'>+94 77 156 456</span>

                                </div>

                                <div className='justify-start items-center flex flex-row gap-3'>

                                    <SlLocationPin />

                                    <span className='text-[15px] text-[#64748B] font-semibold'>125/A, Bulatsinhala RD,Colombo.</span>

                                </div>

                            </div>

                        </div>


                        {/* content */}

                    </div>

                    {/* sub container */}

                </div>

                <div className='justify-center items-center leading-7 mb-4 border-t-2 border-[#E9EEF4] w-full flex'>

                    <div className='flex flex-col items-center mt-3'>

                        <span className='text-[14px] tracking-widest text-[#64748B] font-semibold'>&copy;&nbsp;2025 Life Edu. All rights reserved.</span>
                        <span className='text-[13px] tracking-wide text-[#64748B] font-semibold'>Designed & Developed By Life Systems.</span>

                    </div>

                </div>

            </div>


            {/* main container */}

        </>

    )

}

export default Footer