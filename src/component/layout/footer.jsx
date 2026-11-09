import React from 'react'

const Footer = () => {
  return (
    <div
      className="w-full min-h-[441px] 2xl:h-[441px] bg-[url('/assets/images/jessica_bg.png')]
      bg-cover bg-center bg-no-repeat relative mt-[40px] 2xl:mt-[80px]"
    >
      <div className="container mx-auto h-full flex flex-col justify-between gap-10 px-4 sm:px-6 pt-10 md:pt-[60px] 2xl:pt-[80px] pb-6">

        {/* Columns: 1 col (<400px), 2 cols (400-1023px), 4 cols (1024-1535px), original flex layout (2xl) */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 2xl:flex 2xl:flex-wrap 2xl:gap-[148px]">

          {/* Brand + text */}
          <div className="min-[400px]:col-span-2 lg:col-span-4 2xl:col-auto w-full max-w-[425px] 2xl:h-[200px] flex flex-col gap-5 2xl:gap-[30px]">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="w-[130px] min-[400px]:w-[150px] 2xl:w-[225px]"
            />
            <p className="text-white text-[14px] font-inter">
              Thank you for such a well thought out and memorable trip.
              The sights and people of Morocco are wonderful.
              I appreciated you feeding my nerdy self with information on the geography,
              animals and plants of Morocco.
            </p>
          </div>

          {/* OUR PAGES */}
          <div className="max-w-[296px] 2xl:h-[179px]">
            <div className="font-inter text-[16px] 2xl:text-[20px] text-white font-bold">
              <p>OUR PAGES</p>
              <div className="text-[14px] font-inter flex flex-col gap-3 2xl:gap-[20px] pt-5 2xl:pt-[40px] font-normal 2xl:font-bold">
                <p>Tours</p>
                <p>About Us</p>
                <p>Our Style</p>
              </div>
            </div>
          </div>

          {/* TOUR PAGES */}
          <div className="max-w-[296px] 2xl:h-[179px]">
            <div className="font-inter text-[16px] 2xl:text-[20px] text-white font-bold">
              <p>TOUR PAGES</p>
              <div className="text-[14px] font-inter flex flex-col gap-3 2xl:gap-[20px] pt-5 2xl:pt-[40px] font-normal 2xl:font-bold">
                <p>Private Tours</p>
                <p>Past Tours</p>
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <div className="max-w-[296px] 2xl:h-[179px]">
            <div className="font-inter text-[16px] 2xl:text-[20px] text-white font-bold">
              <p>CONTACT US</p>
              <div className="text-[14px] font-inter flex flex-col gap-3 2xl:gap-[20px] pt-5 2xl:pt-[40px] font-normal 2xl:font-bold">
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="max-w-[296px] 2xl:h-[179px]">
            <div className="font-inter text-[16px] 2xl:text-[20px] text-white font-bold">
              <p>COMPANY</p>
              <div className="text-[14px] font-inter flex flex-col gap-3 2xl:gap-[20px] pt-5 2xl:pt-[40px] font-normal 2xl:font-bold">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Refund / Cancellation Policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-white/30 pt-4">
          <p className="text-[#404040] text-[13px] min-[400px]:text-[14px] 2xl:text-[16px] font-inter text-center">
            ©2024 Wandering Earl, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer