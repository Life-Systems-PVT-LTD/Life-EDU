"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Signup() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [confirmshowPassword, confirmsetShowPassword] = useState(false);

  return (

    <>

      {/* Main Container */}

      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">

        {/* Sub Container */}

        <div className="flex flex-col items-center space-y-4">

          {/* Welcome Title */}

          <div className="text-center mb-6">

            <h1 className="text-[30px] font-bold text-gray-900">
              Create Your account
            </h1>

            <p className="text-[#64748B] text-[17px]">
              Join thousands of learners today
            </p>

          </div>

          {/* Sign UP Card */}

          <div className="bg-white shadow-md rounded-lg p-8 lg:w-[581px] max-w-full">

            {/* Sign UP Header */}

            <div className="mb-6 leading-10">

              {/* Sign UP Title */}

              <h2 className="text-xl font-semibold text-black text-[26px]">
                Sign Up
              </h2>

              <h2 className=" text-[#64748B] text-[16px] ">
                Create your account to start your learning journey
              </h2>

            </div>

            {/* Sign In Form */}

            <form className="space-y-4">

              {/* Input Fields Container */}

              <div className="space-y-5 mb-10 gap-2 flex flex-col">

                {/* Full name Field */}

                <div className="gap-3 flex flex-col">

                  <label
                    className="text-[20px] font-semibold text-black"
                  >
                    Full Name
                  </label>

                  {/* Full name Input */}

                  <input
                    id="fname"
                    type="Enter your full name"
                    placeholder="Enter your email"
                    className="mt-1  w-full px-3 py-2 border border-[#E9EEF4] rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                  />

                </div>

                {/* Email Field */}

                <div className="gap-3 flex flex-col">

                  <label
                    className="text-[20px] font-semibold text-black"
                  >
                    Email
                  </label>

                  {/* Email Input */}

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1  w-full px-3 py-2 border border-[#E9EEF4] rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                  />

                </div>

                {/* Password Field */}

                <div className="gap-3 flex flex-col">

                  <label
                    className="text-[20px] font-semibold text-black"
                  >
                    Password
                  </label>

                  <div className="relative">
                    
                    {/* Password Input */}

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="mt-1  w-full px-3 py-2 border border-[#64748B] rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    />

                    {/* Show/Hide Password Icon */}

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible className="w-5 h-5" />
                      ) : (
                        <AiOutlineEye className="w-5 h-5" />
                      )}

                    </button>

                  </div>

                </div>

                {/* Confirm Password Field */}

                <div className="gap-3 flex flex-col">

                  <label
                    className="text-[20px] font-semibold text-black"
                  >
                   Confirm Password
                  </label>

                  <div className="relative">
                    
                    {/* Password Input */}

                    <input
                      id="password"
                      type={confirmshowPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="mt-1  w-full px-3 py-2 border border-[#64748B] rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    />

                    {/* Show/Hide Password Icon */}

                    <button
                      type="button"
                      onClick={() => confirmsetShowPassword(!confirmshowPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      {confirmshowPassword ? (
                        <AiOutlineEyeInvisible className="w-5 h-5" />
                      ) : (
                        <AiOutlineEye className="w-5 h-5" />
                      )}

                    </button>

                  </div>

                </div>

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg shadow hover:bg-gray-800 transition"
              >
                Create Account

              </button>

            </form>

            {/* signin text */}

            <p className="mt-4 text-[16px] text-center text-[#64748B]">

              Already have an account?{" "}

              <Link
                href="#"
                className="font-semibold text-[#020817] ext-[16px]"
              >
                Sign in here
              </Link>

            </p>

          </div>

        </div>

      </div>

    </>

  );

}