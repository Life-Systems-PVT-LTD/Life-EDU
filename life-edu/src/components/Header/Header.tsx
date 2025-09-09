"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaSchool } from 'react-icons/fa6';
import { IoMdLogOut } from 'react-icons/io';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { MdDashboardCustomize } from 'react-icons/md';
import { RiFileUserFill } from 'react-icons/ri';

function Header() {

    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <>

            {/* main container */}

            <div className='flex flex-col mb-9 p-4 bg-[#FFFFFF] backdrop-blur-lg opacity-90 backdrop-saturate-100 backdrop-contrast-100 fixed w-full top-0 left-0 right-0 z-50'>

                {/* sub container */}

                <div className='flex flex-row justify-between items-center content-center'>

                    {/* content */}

                    <div className=''>

                        <Link href={'/'}>

                            <Image src={'/assets/logos/life-edu.png'} width={140} height={140} alt='logo' />

                        </Link>

                    </div>

                    {/* navigations */}

                    <div className='lg:flex flex-row gap-12 hidden'>

                        <Link href={"#"} className='text-md font-semibold text-[#020817]'>Courses</Link>
                        <Link href={"#"} className='text-md font-semibold text-[#020817]'>About</Link>
                        <Link href={"#"} className='text-md font-semibold text-[#020817]'>Contact</Link>

                    </div>

                    {/* navigations */}

                    <div className='flex flex-row justify-between lg:gap-14 gap-9 items-center'>

                        <div className='lg:flex hidden'>

                            <Link href={'/'}>

                                <LiaShoppingCartSolid className='w-7 h-7' />

                            </Link>

                        </div>

                        {/* dropDown */}

                        {/* profile dropdown*/}

                        <div className='flex flex-row'>

                            <div className="relative inline-block text-left">

                                <Image src={'/assets/icons/user.png'} width={40} height={30} alt='dropDown Icon' onClick={() => setOpen(!open)} className="inline-flex bg-white-100 rounded-2xl justify-center text-sm font-medium text-white cursor-pointer" />

                                {open && (

                                    <div className="absolute text-[#020817] right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-[#E9EEF4] ring-opacity-5">

                                        <div className='px-4 py-3 border-b border-[#E9EEF4]'>

                                            <span className='text-[16px] font-semibold text-[#020817]'>User Name</span><br />
                                            <span className='text-[13px] font-normal text-[#64748B]'>user Email Address</span>

                                        </div>

                                        <div className="py-1 px-2 text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <MdDashboardCustomize className='w-5 h-5' />
                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700"> Dashboard </Link>

                                        </div>

                                        <div className="py-1 px-2 text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <RiFileUserFill className='w-5 h-5' />
                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700"> Profile </Link>

                                        </div>

                                        <div className="py-1 px-2 text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <FaSchool className='w-5 h-5' />
                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> My Courses </Link>

                                        </div>

                                        <div className="py-1 px-2 border-t border-[#E9EEF4] text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <IoMdLogOut className='w-5 h-5' />
                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700"> Log Out </Link>

                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>

                        {/* profile dropdown */}

                        {/* dropdown navigation sm */}

                        <div className='flex flex-row lg:hidden'>

                            <div className='flex flex-row lg:hidden md:block relative'>

                                <CiMenuBurger onClick={() => setMenuOpen(!menuOpen)} className='w-5 h-5 cursor-pointer' />

                                {menuOpen && (

                                    <div className='absolute top-full right-0 w-60 bg-[#FFFFFF] border border-[#E9EEF4] rounded-sm mt-2 z-50'>

                                        <div className="py-1 px-2 text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700">Courses</Link>

                                        </div>

                                        <div className="py-1 px-2 text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700">About</Link>

                                        </div>

                                        <div className="py-1 px-2 text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700">Contact</Link>

                                        </div>

                                        <div className="py-1 px-2 border-t border-[#E9EEF4] text-[#020817] font-medium flex items-center hover:bg-gray-100">

                                            <Link href={'/'} className="block px-4 py-2 text-sm text-gray-700">

                                                <LiaShoppingCartSolid className='w-7 h-7' />

                                            </Link>

                                        </div>

                                    </div>
                                )}

                            </div>

                        </div>
                        
                        {/* dropdown navigation sm */}

                        {/* dropDown */}


                    </div>


                    {/* content */}

                </div>

                {/* sub container */}

            </div>

        </>

    );

}

export default Header