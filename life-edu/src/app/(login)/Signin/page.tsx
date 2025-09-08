"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignIn() {
  
  const [showPassword, setShowPassword] = useState(false);

  return (

    <>

      {/* Main Container */}

      <div className="flex min-h-screen items-center justify-center bg-gray-50">

        {/* Sub Container */}

        <div className="flex flex-col items-center space-y-4">

          {/* Welcome Title */}

          <div className="text-center mb-6">

            <h1 className="text-[40px] font-bold text-gray-900">
              Welcome back
            </h1>

            <p className="text-[#64748B] text-[18px]">
              Sign in to your account to continue learning{" "}
            </p>

          </div>

          {/* Sign In Card */}

          <div className="bg-white shadow-md rounded-lg p-8 w-[581px] max-w-md">

            {/* Sign In Header */}

            <div className="mb-6 gap-2">

              {/* Sign In Title */}

              <h2 className="text-xl font-semibold text-black text-[32px]">
                Sign In
              </h2>

              <h2 className=" text-[#64748B] text-[16px]">
                Enter your email and password to access your account
              </h2>

            </div>

            {/* Sign In Form */}

            <form className="space-y-4">

              {/* Input Fields Container */}

              <div className="space-y-5 mb-5">

                {/* Email Field */}

                <div>

                  <label
                    htmlFor="email"
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

                <div>

                  <label
                    htmlFor="password"
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

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg shadow hover:bg-gray-800 transition"
              >
                Sign In

              </button>

            </form>

            {/* signup text */}

            <p className="mt-4 text-[16px] text-center text-[#64748B]">

              Don’t have an account?{" "}

              <Link
                href="/Signup"
                className="font-semibold text-[#020817] ext-[16px]"
              >
                Sign up here
              </Link>

            </p>

          </div>

        </div>

      </div>

    </>

  );

}
