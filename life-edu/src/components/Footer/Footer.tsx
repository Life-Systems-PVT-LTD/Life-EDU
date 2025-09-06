import Image from 'next/image'
import React from 'react'

function Footer() {

    return (

        <>

            {/* main container */}

            <div className='fixed flex flex-row bottom-0 border-t border-[#E9EEF4] left-0 bg-[#FFFFFF] w-full p-6'>

                {/* sub container */}

                <div className='flex flex-row w-full justify-between'>

                    {/* content */}

                    <div className='flex flex-col gap-4 text-pretty max-w-xs'>

                        {/* logo */}
                        
                        <div>

                            <Image src={'/assets/logos/life-edu.png'} width={140} height={140} alt='logo' />

                        </div>

                        {/* logo */}

                        {/* description */}                        

                        <div className='line-clamp-0 leading-7'>

                            <p>Empowering learners worldwide with quality online education and professional development courses.</p>

                        </div>

                        {/* description */}

                    </div>
                    
                    <div>footer</div>
                    <div>footer</div>
                    <div>footer</div>
                    <div>footer</div>
                    <div>footer</div>

                    {/* content */}

                </div>

                {/* sub container */}

            </div>

            {/* main container */}

        </>


    )

}

export default Footer