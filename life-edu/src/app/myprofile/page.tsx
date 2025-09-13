import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function myProfile() {
  return (
    <>

      <div>

        <Header />

      </div>

      {/* main container */}

      <div className="mt-[74px] flex flex-col">

        {/* main tittle */}

        <div className="justify-start items-start flex flex-col w-full px-15 mt-10">


            <h1 className="text-[35px] font-bold ">My Profile</h1>

            <p className="text-[18px] text-gray-500">

              Manage your account information and preferences

            </p>


        </div>

        {/* main tittle */}

        {/* profile details */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-15">

          {/* left card */}

          <div className="bg-white border-[#E9EEF4] border-2 shadow rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            
            {/* profile picture */}
            
            <div className="w-35 h-35 rounded-full flex items-center justify-center text-5xl mb-5">
              
              <Image
                src={"/assets/icons/user.png"}
                width={140}
                height={140}
                alt="logo"
              />

            </div>

            <span className="text-[15px] bg-[#8981F6] font-semibold p-2 rounded-[5px] mb-2">
            
              Student

            </span>

            <p className="font-semibold text-[15px] text-[#64748B]">

              Welcome Sanjana kumara

            </p>

            {/* learning points */}

            <div className="flex flex-col items-center mb-10 mt-10">

              <p className="text-[30px] font-bold">150</p>

              <p className="text-[15px] font-semibold text-[#64748B]">

                Learning Points

              </p>

            </div>

            {/* enrolled & completed */}
            
            <div className="flex justify-between w-full pt-6">

              <div className="flex flex-col items-center flex-1">

                <p className="text-[30px] font-bold">2</p>

                <p className="text-[15px] font-semibold text-[#64748B]">

                  Enrolled

                </p>

              </div>

              <div className="flex flex-col items-center flex-1">

                <p className="text-[30px] font-bold">1</p>

                <p className="text-[15px] font-semibold text-[#64748B]">

                  Completed

                </p>

              </div>

            </div>

          </div>

          {/* left card */}

          {/* right card */}

          <div className="bg-white border-[#E9EEF4] border-2 shadow rounded-2xl p-6 flex flex-col items-start text-left">
            
            {/* card title */}

            <div className="p-5">

              <p className="text-[30px] font-semibold">My Profile</p>

              <p className="font-semibold text-[15px] text-[#64748B]">

                Update your personal information

              </p>

            </div>

            {/* details form */}

            <div className="w-full">

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Full Name */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Email Address */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Password */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Password

                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Mobile Number */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Mobile Number

                  </label>

                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Address Line 01 */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Address Line 01

                  </label>

                  <input
                    type="text"
                    placeholder="Address Line 01"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Address Line 02 */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Address Line 02

                  </label>

                  <input
                    type="text"
                    placeholder="Address Line 02"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Select Province */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Select Province

                  </label>

                  <input
                    type="text"
                    placeholder="Enter province"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Select District */}

                <div className="flex flex-col">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Select District

                  </label>

                  <input
                    type="text"
                    placeholder="Enter district"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Select City */}

                <div className="flex flex-col md:col-span-2">

                  <label className="mb-1 text-[16px] font-semibold ">

                    Select City

                  </label>

                  <input
                    type="text"
                    placeholder="Enter city"
                    className="border rounded-lg px-3 py-2 w-full"
                  />

                </div>

                {/* Button */}

                <div className="md:col-span-2 flex justify-end">

                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                  >
                    
                    Save Changes

                  </button>

                </div>

              </form>

            </div>

          </div>

          {/* right card */}

        </div>

        {/* profile details */}

      </div>

      <div>

        <Footer />

      </div>

    </>

  );

}
