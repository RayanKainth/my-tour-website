
import { IoLocationOutline, IoCalendarOutline } from 'react-icons/io5';
import { IoMdContacts } from 'react-icons/io';

const Toursdata = ({ tour }) => {
  return (
    <div className="w-full max-w-[448px] mx-auto max-xl:px-5 overflow-hidden">

      {/* Image and badge */}
      <div className="relative w-full">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-auto object-cover"
        />

        {tour.status === "soldOut" ? (
          <div className="absolute bottom-3 right-3 sm:right-6
            w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full
            bg-red-600 flex flex-col justify-center items-center
            text-white font-extrabold text-[13px] leading-[12px]">
            <span>SOLD</span>
            <span>OUT</span>
          </div>
        ) : tour.spotsLeft !== null && tour.spotsLeft <= 2 ? (
          <div className="absolute bottom-3 right-3 sm:right-6
            w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full
            bg-[#FFB800] flex flex-col justify-center items-center
            font-extrabold text-[12px] sm:text-[13px] leading-[12px]">
            <span className="text-[#E9482B]">
              {tour.spotsLeft} SPOTS
            </span>
            <span>LEFT</span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="w-full p-3 sm:p-4">

        <h2 className="text-lg sm:text-xl font-bold text-black">
          {tour.title}
        </h2>

        <p className="text-sm sm:text-base font-normal text-black mt-2">
          {tour.description}
          Join our unique journey into the heart of Mexico!
          We'll dive into the rich history, flavorful cuisine,
          city and village life and vibrant cultures in a style
          you won't want to miss!
        </p>

        {/* Booking and location */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-4">

          <div className="flex items-center gap-2">
            <IoMdContacts className="text-[#2D2D2D] text-2xl shrink-0" />
            <p className="text-sm sm:text-base text-[#555555]">
              2 out of 12 spots booked
            </p>
          </div>

          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-red-600 text-2xl shrink-0" />
            <p className="text-sm sm:text-base text-[#555555]">
              Mexico
            </p>
          </div>

        </div>

        {/* Date */}
        <div className="flex items-center gap-2 pt-4">
          <IoCalendarOutline className="text-red-600 text-2xl shrink-0" />

          <p className="text-sm sm:text-base text-[#555555]">
            Nov 08 — Nov 17, 2024
            <span className="text-gray-400"> (10 days)</span>
          </p>
        </div>

        {/* Button */}
        {tour.buttonText === "Details" ? (
          <div className="flex justify-center items-center border border-[#1E365C]
            text-[#1E365C] rounded-[20px] w-full py-2.5 mt-5
            font-bold cursor-pointer">
            {tour.buttonText}
          </div>
        ) : tour.buttonText === "Add to Waitlist" ? (
          <div className="flex justify-center items-center border border-[#E9482B]
            text-[#E9482B] rounded-[20px] w-full py-2.5 mt-5
            font-bold cursor-pointer">
            {tour.buttonText}
          </div>
        ) : null}

      </div>
    </div>
  );
};

export default Toursdata;
