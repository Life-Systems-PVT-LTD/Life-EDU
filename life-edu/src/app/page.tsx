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

        <div className="bg-linear-to-r items-center from-[#1E53DB] to-[#56E29C] flex flex-row p-10 justify-between h-[70vh]">

          {/* description section */}

          <div className="flex flex-col">

            <span>description here</span>

          </div>

          {/* description section */}

          {/* image section */}

          <div className="flex flex-col">

            <Image src={'/assets/images/herosectiongroupi1.svg'} width={600} height={600} alt="hero section group image" />

          </div>

          {/* image section */}

        </div>

        {/* hero section */}

        <div>v</div>
        <div>c</div>
        <div>s</div>

      </div>

      {/* main container */}

      <div>

        <Footer />

      </div>

    </>

  );

}
