import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {

  return (

    <>

      <div>

        <Header />

      </div>

      {/* main container */}

      <div className="mt-[74px] flex flex-col">

        {/* hero section */}

        <div className="bg-linear-to-r items-center from-[#1E53DB] to-[#56E29C] flex flex-row p-10 justify-between h-[65vh]">

          {/* description section */}

          <div className="flex flex-col gap-6">

            <div className="max-w-xs text-justify leading-11">

              <span className="text-[40px] font-bold text-[#020817]">Learn Skills That Matter for Your Future</span>
              
            </div>

            <div className="max-w-xl leading-8 mt-3 tracking-wider">

              <p className="text-[18px] font-semibold text-[#FFFFFF]">Master in-demand skills with our comprehensive courses taught by industry experts. Start your learning journey today and transform your career</p>

            </div>

            {/* button */}
            
            <div className="mt-7">

              <button className="bg-[#0F172A] p-3 text-center cursor-pointer font-semibold rounded-sm text-[#FFFFFF]">Browse Courses</button>            

            </div>

            {/* button */}

          </div>

          {/* description section */}

          {/* image section */}

          <div className="flex flex-col">

            <Image src={'/assets/images/herosectiongroupi1.svg'} width={600} height={600} alt="hero section group image" className="rounded-sm" />

          </div>

          {/* image section */}

        </div>

        {/* hero section */}

        {/* short description */}

        <div className="flex flex-col p-8 mt-9 mb-5">

          <div className="flex flex-row items-center justify-between bg-linear-to-r from-[#2C60C2] to-[#32B34E] p-8 rounded-sm">

            {/* description */}

            <div className="flex flex-col max-w-lg text-justify leading-8">

              <p className="text-[16px] font-semibold text-[#FFFFFF]">This Platform for Master in-demand skills with our comprehensive courses taught by industry experts. Start your learning journey today and transform your career. Master in-demand skills with our comprehensive courses taught by industry experts. Start your learning journey today and transform  your career.</p>

            </div>

            {/* description */}

            {/* image */}

            <div>

              <Image src={'/assets/images/short descriptionimg.svg'} width={500} height={500} alt="short Image" className="rounded-sm"/>

            </div>

            {/* image */}
            

          </div>

        </div>

        <div className="flex flex-col border-t-2 border-b-2">

          <div className="flex flex-row p-3 overflow-x-auto space-x-3">

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>            

          </div>

        </div>

        {/* short description */}

      </div>

      {/* main container */}

      <div>

        <Footer />

      </div>

    </>

  );

}
