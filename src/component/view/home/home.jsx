import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import Tours from "./tours";
import Grouptour from "./grouptour";
import Map from "./map";
import Moretours from "./moretours";
import Reviews from "./reviews";



const Home = () => {
  return (
    <>
      <div className="w-full h-[812px] bg-[url('/assets/images/back-ground_image.png')]
              bg-cover bg-center relative bg-no-repeat z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#1E365C00] via-[#1E365C4D] to-[#1E365CFF]">
          <div className="container relative z-10">
            <div className="flex  items-center justify-between">
              <div className="flex pt-[30px]">
                <img src="/assets/images/logo.png" alt="logo" />
              </div>
              <div className="hidden xl:flex justify-center w-full pt-[46px]">
                <ul className="flex gap-[30px] text-white text-[18px] font-[500] font-inter">
                  <li>TOURS</li>
                  <li>ABOUT US</li>
                  <li>OUR STYLE</li>
                  <li>PRIVATE TOURS</li>
                  <li>PAST TOURS</li>
                  <li>CONTACT US</li>
                </ul>
              </div>
              <div className="hidden xl:flex pt-[60px] gap-[20px]">
                <HiOutlineShoppingBag className="text-white text-[50px] py-[10px] rounded-full bg-[#D6D6D64D]" />
                <button className="text-white text-[18px] font-[500] bg-[#1E365C] hover:bg-[#C0C0C0]
     py-[10px] px-[30px] rounded-full font-inter">
                  Login
                </button>
              </div>
              <button className=" justify-between xl:hidden text-green-700 text-3xl">
                <FiMenu />
              </button>
            </div>

            <div
  className="
    flex flex-col justify-center items-center gap-3
    pt-[100px]
    font-inter font-bold text-white
    text-[42px]
    xl:text-[52px]
    2xl:text-[64px]
  "
>
  <span>UNIQUE, LOCAL, SMALL</span>
  <span className="text-[#E9482B]">GROUPS</span>
</div>
            <p className="text-white text-[24px]  font-medium font-inter text-center pt-[20px]">
              Tours that show you something new.
            </p>
            <div className="flex justify-center pt-[30px] gap-[10px]">
              <button className="text-white text-[18px] font-semibold bg-[#1E365C] hover:bg-[#C0C0C0]
     py-[10px] px-[30px] rounded-full font-inter">
                Visit 2024 Tours
              </button>
              <button className="text-white text-[18px] font-semibold bg-[#E9482B] hover:bg-[#C0C0C0]
     py-[10px] px-[30px] rounded-full font-inter ">
                Visit 2025 Tours
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
          </div>
        </div>
      </div>


      <div className="relative w-full min-h-[500px] overflow-hidden bg-[#1E365C]">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#1E365C] to-[rgba(30,54,92,0.94)]" />

  {/* Main Content */}
  <div className="container relative z-10">
    <div className="flex min-h-[500px] flex-col justify-center lg:flex-row lg:items-center lg:gap-10">

      {/* Text Content */}
      <div className="w-full py-12 lg:w-1/2 lg:py-0">
        <p className="font-inter text-[36px] font-black leading-[1.05] text-white sm:text-[32px] lg:text-[48px]">
          Sustainable and <br className="hidden sm:block" />
          responsible travel
        </p>

        <p className="pt-[20px] lg:pt-3 font-inter text-[20px] font-medium leading-[1.3] text-white sm:text-[22px] lg:text-[24px]">
          We’re fully committed to promoting and offering
          responsible, respectful and sustainable travel experiences
          around the world.
        </p>

        <p className="pt-[20px] lg:pt-3 font-inter text-[15px] font-medium leading-[1.5] text-white sm:text-[16px]">
          We make a point of avoiding mass tourism destinations.
          Instead, we sustainably support local businesses, communities
          and the environment everywhere we go. Every aspect of our trips,
          from accommodation to local guides, activities to meals, and
          everything in between, are chosen to ensure that your tourism
          dollar leaves a positive and lasting impact and that our visit
          leaves a minimal footprint.
        </p>

        <button
          className="mt-5 rounded-full bg-[#E9482B] px-[30px] py-[10px]
                     font-inter text-[18px] font-semibold text-white
                     transition-colors duration-200 hover:bg-[#C0C0C0]"
        >
          Book A Tour Now
        </button>
      </div>

      {/* Images */}
      <div className="relative mx-auto mt-8 h-[400px] w-full max-w-[500px] sm:h-[450px] lg:mt-0 lg:h-[500px] lg:w-1/2 lg:max-w-[600px]">

        {/* Small image */}
        <img
          src="/assets/images/hero-section-image2.png"
          alt=""
          className="absolute left-[2%] top-[12%] z-[25]
                     h-[145px] w-[175px] object-contain
                     sm:left-[5%] sm:h-[165px] sm:w-[195px]
                     lg:left-[5%] lg:top-[12%] lg:h-[185px] lg:w-[220px]"
        />

        {/* Small decoration */}
        <img
          src="/assets/images/hero-section-image4.png"
          alt=""
          className="absolute left-[38%] top-[2%] z-[40]
                     h-[40px] w-[50px] object-contain
                     sm:h-[45px] sm:w-[55px]
                     lg:h-[50px] lg:w-[60px]"
        />

        {/* Small decoration */}
        <img
          src="/assets/images/hero-section-image3.png"
          alt=""
          className="absolute left-[55%] top-0 z-[40]
                     h-[75px] w-[80px] object-contain
                     sm:h-[90px] sm:w-[90px]
                     lg:h-[100px] lg:w-[100px]"
        />

        {/* Main image */}
        <img
          src="/assets/images/hero-section-image.png"
          alt=""
          className="absolute left-[18%] top-[22%] z-[20]
                     h-[250px] w-[165px] rounded-[20px] object-cover
                     sm:left-[20%] sm:h-[300px] sm:w-[200px]
                     lg:left-[15%] lg:top-[18%] lg:h-[330px] lg:w-[220px]"
        />

        {/* Second main image */}
        <img
          src="/assets/images/hero-section-image1.png"
          alt=""
          className="absolute left-[45%] top-[5%] z-[30]
                     h-[250px] w-[165px] rounded-[20px] object-cover
                     sm:left-[45%] sm:h-[300px] sm:w-[200px]
                     lg:left-[39%] lg:top-[3%] lg:h-[330px] lg:w-[220px]"
        />
      </div>
    </div>
  </div>
</div>

     <Tours />
<div className="container">
      <Grouptour/>
      </div>
      <Map/>
      <Moretours/>
      <Reviews/>
    </>
  )
}

export default Home
