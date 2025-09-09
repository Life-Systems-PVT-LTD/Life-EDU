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

        <div className="bg-linear-to-r items-center from-[#1E53DB] to-[#56E29C] flex lg:flex-row flex-col-reverse md:flex-row p-10 lg:justify-between md:justify-between gap-3 lg:h-[65vh]">

          {/* description section */}

          <div className="flex flex-col lg:gap-6 gap-4 md:gap-6">

            <div className="max-w-xs lg:text-justify lg:leading-11 mt-2 lg:mt-0 leading:6 md:text-justify md:leading-11">

              <span className="lg:text-[40px] text-[20px] md:text-[38px] font-bold text-[#020817]">Learn Skills That Matter for Your Future</span>

            </div>

            <div className="max-w-xl lg:leading-8 lg:mt-3 md:text-pretty tracking-wider md:leading-8 leading-6 md:mt-2">

              <p className="lg:text-[18px] text-[15px] md:text-[17px] font-semibold text-[#FFFFFF]">Master in-demand skills with our comprehensive courses taught by industry experts. Start your learning journey today and transform your career</p>

            </div>

            {/* button */}

            <div className="lg:mt-7 md:mt-5 mt-4">

              <button className="bg-[#0F172A] lg:p-3 p-2 text-center lg:text-[16px] md:text-[16px] md:p-3 text-[13px] cursor-pointer font-semibold rounded-sm text-[#FFFFFF]">Browse Courses</button>

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

        <div className="flex flex-col lg:p-8 p-5 mt-9 mb-5">

          <div className="flex lg:flex-row flex-col-reverse items-center justify-between bg-linear-to-r from-[#2C60C2] to-[#32B34E] p-8 rounded-sm">

            {/* description */}

            <div className="flex lg:flex-col md:flex-row md:max-w-full lg:max-w-lg text-justify lg:leading-8 mt-8 lg:mt-0 leading-7">

              <p className="lg:text-[16px] text-[15px] font-semibold text-[#FFFFFF]">This Platform for Master in-demand skills with our comprehensive courses taught by industry experts. Start your learning journey today and transform your career. Master in-demand skills with our comprehensive courses taught by industry experts. Start your learning journey today and transform  your career.</p>

            </div>

            {/* description */}

            {/* image */}

            <div>

              <Image src={'/assets/images/short descriptionimg.svg'} width={500} height={500} alt="short Image" className="rounded-sm" />

            </div>

            {/* image */}

          </div>

        </div>

        {/* short description */}

        {/* scroll category */}

        <div className="flex flex-col border-t-2 mb-3 mt-2 border-[#E9EEF4] border-b-2">

          <div className="flex flex-row p-3 overflow-x-auto space-x-3 scrollbar-hide">

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Mobile Application Development</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Cloud Computing</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Saas</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Ethical Hacking</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

            <div className="flex flex-col border border-[#E9EEF4] text-[16px] font-semibold justify-center items-center p-3 rounded-sm min-w-fit">

              <span>Web Development</span>

            </div>

          </div>

        </div>

        {/* scroll category */}

        {/* new courses section */}

        <div className="flex flex-col justify-center items-center mt-11 p-3 content-center">

          {/* title adn desc */}

          <div className="flex flex-col items-center gap-1 mb-5">

            <div className="row tracking-widest">

              <h1 className="text-[26px] font-bold text-[#020817]">New Courses</h1>

            </div>

            <div className="flex flex-row tracking-widest">

              <span className="text-[17px] font-semibold text-[#64748B]">Meet our new courses</span>

            </div>

          </div>

          {/* title adn desc */}

          {/* product area */}

          <div className="flex lg:flex-row flex-col md:flex-row justify-center gap-10 mt-4 mb-8 max-w-fit lg:max-w-full">

            {/* product card 1 */}

            <div className="flex flex-col bg-[#FFFFFF] border-3 border-[#E9EEF4] rounded-t-md">

              {/* product image */}

              <div className="flex flex-row relative">

                <Image src={'/assets/product-images/productimg1.svg'} width={350} height={350} alt="product Image" className="rounded-t-sm" />

                <div className="absolute flex flex-row justify-end px-3 w-full py-2">

                  <span className="bg-[#22C55E] px-3 py-1 text-center text-[10px] font-bold">New</span>

                </div>

              </div>

              {/* product image */}

              {/* product details */}

              <div className="flex flex-col mt-2 p-2 mb-2 gap-3">

                {/* product name */}

                <div className="flex flex-row">

                  <span className="text-[17px] font-bold max-w-xs break-words whitespace-normal">Mobile Application Development</span>

                </div>

                {/* product name */}

                {/* product price */}

                <div className="flex flex-row">

                  <span className="text-[16px] font-bold">LKR&nbsp;</span>
                  <span className="text-[16px] font-bold">2000.00</span>

                </div>

                <div className="flex flex-row justify-center items-center p-4">

                  <button className="bg-[#0F172A] text-[#FFFFFF] w-full text-[16px] font-semibold text-center rounded-sm p-2 cursor-pointer">More Details</button>

                </div>

                {/* product price */}

              </div>

              {/* product details */}

            </div>

            {/* product card 1 */}

            {/* product card 2 */}

            <div className="flex flex-col bg-[#FFFFFF] border-3 border-[#E9EEF4] rounded-t-md">

              {/* product image */}

              <div className="flex flex-row relative">

                <Image src={'/assets/product-images/productimg2.svg'} width={350} height={350} alt="product Image" className="rounded-t-sm" />

                <div className="absolute flex flex-row justify-end px-3 w-full py-2">

                  <span className="bg-[#22C55E] px-3 py-1 text-center text-[10px] font-bold">New</span>

                </div>

              </div>

              {/* product image */}

              {/* product details */}

              <div className="flex flex-col mt-2 p-2 mb-2 gap-3">

                {/* product name */}

                <div className="flex flex-row">

                  <span className="text-[17px] font-bold max-w-xs break-words whitespace-normal">Mobile Application Design Course</span>

                </div>

                {/* product name */}

                {/* product price */}

                <div className="flex flex-row">

                  <span className="text-[16px] font-bold">LKR&nbsp;</span>
                  <span className="text-[16px] font-bold">2000.00</span>

                </div>

                <div className="flex flex-row justify-center items-center p-4">

                  <button className="bg-[#0F172A] text-[#FFFFFF] w-full text-[16px] font-semibold text-center rounded-sm p-2 cursor-pointer">More Details</button>

                </div>

                {/* product price */}

              </div>

              {/* product details */}

            </div>

            {/* product card 2 */}

            {/* product card 3 */}

            <div className="flex flex-col bg-[#FFFFFF] border-3 border-[#E9EEF4] rounded-t-md">

              {/* product image */}

              <div className="flex flex-row relative">

                <Image src={'/assets/product-images/productimg3.svg'} width={350} height={350} alt="product Image" className="rounded-t-sm" />

                <div className="absolute flex flex-row justify-end px-3 w-full py-2">

                  <span className="bg-[#22C55E] px-3 py-1 text-center text-[10px] font-bold">New</span>

                </div>

              </div>

              {/* product image */}

              {/* product details */}

              <div className="flex flex-col mt-2 p-2 mb-2 gap-3">

                {/* product name */}

                <div className="flex flex-row">

                  <span className="text-[17px] font-bold max-w-xs break-words whitespace-normal">System Design Course Intermediate</span>

                </div>

                {/* product name */}

                {/* product price */}

                <div className="flex flex-row">

                  <span className="text-[16px] font-bold">LKR&nbsp;</span>
                  <span className="text-[16px] font-bold">2000.00</span>

                </div>

                <div className="flex flex-row justify-center items-center p-4">

                  <button className="bg-[#0F172A] text-[#FFFFFF] w-full text-[16px] font-semibold text-center rounded-sm p-2 cursor-pointer">More Details</button>

                </div>

                {/* product price */}

              </div>

              {/* product details */}

            </div>

            {/* product card 3 */}

          </div>

          {/* product area */}

        </div>

        {/* new courses section */}

      </div>

      {/* main container */}

      <div>

        <Footer />

      </div>

    </>

  );

}
