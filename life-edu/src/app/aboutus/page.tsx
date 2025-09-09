"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { Award, Globe, Heart, Users } from "lucide-react";

export default function Aboutus() {
  return (
    <>

      {/* header section */}

      <div>

        <Header />

      </div>

      {/* main container */}

      <div className="mt-[74px] flex flex-col bg-[#F8FAFC]">

        {/* sub container */}

        <div className="flex flex-col mb-4 p-5">

          {/* main heading */}

          <div className="text-center mb-3 leading-10 p-5">

            {/* main title */}

            <h1 className="text-[30px] font-bold text-gray-900 ">
              About Life Edu
            </h1>

            {/* main description */}

            <p className="text-[#64748B] text-[16px]">
              We&apos;re on a mission to make quality education accessible to
              everyone, everywhere. Our platform connects learners with expert
              instructors to master skills that matter for their personal and
              professional growth.
            </p>

          </div>

          {/* status section  */}

          <div className="p-5">

            {/* status cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

              {/* status card icons , titles , values */}

              {[

                {
                  icon: <Users className="w-10 h-10 mx-auto mb-3" />,
                  tittle: "Students Worldwide",
                  value: "50,000+",
                },

                {
                  icon: <Award className="w-10 h-10 mx-auto mb-3" />,
                  tittle: "Expert Instructors",
                  value: "500+",
                },

                {
                  icon: <Globe className="w-10 h-10 mx-auto mb-3" />,
                  tittle: "Countries Reached",
                  value: "120+",
                },

                {
                  icon: <Heart className="w-10 h-10 mx-auto mb-3" />,
                  tittle: "Course Completion Rate",
                  value: "94%",
                },

              ].map((item, i) => (

                <div
                  key={i}
                  className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition"
                >
                  {item.icon}

                  <h2 className="text-2xl font-bold">{item.value}</h2>

                  <p className="text-[#64748B] mt-2">{item.tittle}</p>

                </div>

              ))}

            </div>

          </div>

          {/* mission and vision */}

          <div className="p-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              
              {/* mission card */}

              <div className="bg-white shadow rounded-xl p-6">

                {/* card tittle */}

                <h3 className="font-bold text-xl mb-2">Our Mission</h3>

                {/* card description */}

                <p className="text-[#64748B]">
                  To democratize education by providing high-quality, accessible
                  learning experiences that empower individuals to achieve their
                  goals and transform their lives through knowledge and skills
                  development.
                </p>

              </div>

              {/* vision card */}

              <div className="bg-white shadow rounded-xl p-6">

                {/* card tittle */}

                <h3 className="font-bold text-xl mb-2">Our Vision</h3>

                {/* card description */}

                <p className="text-[#64748B]">
                  A world where anyone, anywhere, can access world-class
                  education and develop the skills they need to thrive in an
                  ever-changing global economy. We envision a future where
                  learning knows no boundaries.
                </p>

              </div>

            </div>

          </div>

          {/* team section */}

          <div className="p-5 ">

            {/* team section heading */}

            <div className="text-center leading-10">

              {/* tittle */}

              <div>

                <h2 className="text-2xl font-bold ">Meet Our Team</h2>

              </div>

              {/* description */}

              <div>

                <p className="text-[#64748B]">

                  Passionate educators and technologists working together

                </p>

              </div>

            </div>

            {/* team members cards */}

            <div className="p-5">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                {/* team members name , role , description , profile image */}

                {[

                  {
                    name: "Sarah Johnson",
                    role: "CEO & Founder",
                    desc: "Former tech executive with 15+ years in education technology.",
                    img: "/assets/icons/user.png",
                  },

                  {
                    name: "Mike Chen",
                    role: "Head of Content",
                    desc: "Educational psychologist and curriculum design expert.",
                    img: "/assets/icons/user.png",
                  },

                  {
                    name: "Emma Wilson",
                    role: "Lead Developer",
                    desc: "Full-stack developer passionate about creating learning experiences.",
                    img: "/assets/icons/user.png",
                  },

                ].map((member, i) => (

                  <div
                    key={i}
                    className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition"
                  >

                    <Image
                      src={member.img}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-4"
                    />

                    <h3 className="font-bold text-lg">{member.name}</h3>

                    <p className="text-[#64748B]">{member.role}</p>

                    <p className="text-[#64748B] text-sm mt-2">{member.desc}</p>

                  </div>

                ))}

              </div>

            </div>

            {/* our values section */}
            <div>

              {/* our values card */}

              <div className="bg-white shadow rounded-xl max-w-full">

                <div className="text-center leading-10 p-5">

                  {/* heading tittle */}

                  <div>

                    <h2 className="text-2xl font-bold ">Our Values</h2>

                  </div>

                  {/* heading description */}
                  <div>

                    <p className="text-[#64748B]">
                      The principles that guide everything we do
                    </p>

                  </div>

                </div>

                {/* values */}

                <div className="text-center space-x-4">

                  {/* first row values */}

                  <div className="flex lg:flex-row flex-col lg:p-5 gap-5 p-6">

                    {/* Excellence */}

                    <div className="flex flex-col gap-4">

                      <h2 className="text-2xl font-bold ">Excellence</h2>

                      <div>

                        <p className="text-[#64748B]">
                          We strive for the highest quality in every course and
                          learning experience.
                        </p>

                      </div>

                    </div>

                    {/* Accessibility */}

                    <div className="flex flex-col gap-4">

                      <h2 className="text-2xl font-bold ">Accessibility</h2>

                      <div>

                        <p className="text-[#64748B]">
                          Education should be available to everyone, regardless
                          of background or location.
                        </p>

                      </div>

                    </div>

                    {/* Innovation */}

                    <div className="flex flex-col gap-4">

                      <h2 className="text-2xl font-bold ">Innovation</h2>

                      <div>

                        <p className="text-[#64748B]">
                          We continuously improve our platform with cutting-edge
                          learning technologies.
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* second row values */}

                  <div className="flex lg:flex-row flex-col lg:p-5 gap-5 p-6">

                    {/* Community */}

                    <div className="flex flex-col gap-4">

                      <h2 className="text-2xl font-bold ">Community</h2>

                      <div>

                        <p className="text-[#64748B]">
                          Learning is better together - we foster collaboration
                          and peer support.
                        </p>

                      </div>

                    </div>

                    {/* Integrity */}

                    <div className="flex flex-col gap-4">

                      <h2 className="text-2xl font-bold ">Integrity</h2>

                      <div>

                        <p className="text-[#64748B]">
                          We maintain the highest ethical standards in all our
                          interactions.
                        </p>

                      </div>

                    </div>

                    {/* Growth */}

                    <div className="flex flex-col gap-4">

                      <h2 className="text-2xl font-bold ">Growth</h2>

                      <div>

                        <p className="text-[#64748B]">
                          We believe in continuous learning and improvement for
                          our team and learners.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    
      {/* footer section */}

      <div>

        <Footer />

      </div>

    </>

  );

}
