import { IoLocationOutline, IoCalendarOutline } from 'react-icons/io5';
import { IoMdContacts } from 'react-icons/io';

const Aboutdata = ({ abouttour }) => {
  return (
    <div className="w-full max-w-[488px] mx-auto h-full flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]">

      {/* Image and badge */}
      <div className="relative w-full">
        <img
          src={abouttour.image}
          alt={abouttour.title}
          className="w-full h-[300px] max-xl:h-[260px] max-md:h-[220px] md:max-[879px]:!h-[200px] object-cover"
        />

        {abouttour.status === "soldOut" ? (
          <div className="absolute bottom-3 right-5 max-md:right-3 md:max-[879px]:!right-3 w-[60px] h-[60px] rounded-full bg-red-600 flex flex-col justify-center items-center text-white font-extrabold text-[13px] leading-[12px]">
            <span>SOLD</span>
            <span>OUT</span>
          </div>
        ) : abouttour.spotsLeft !== null && abouttour.spotsLeft <= 2 ? (
          <div className="absolute bottom-3 right-5 max-md:right-3 md:max-[879px]:!right-3 w-[60px] h-[60px] rounded-full bg-[#FFB800] flex flex-col justify-center items-center font-extrabold text-[13px] leading-[12px]">
            <span className="text-[#E9482B]">{abouttour.spotsLeft} SPOTS</span>
            <span>LEFT</span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 max-md:p-4 md:max-[879px]:!p-4">
        <h2 className="text-xl max-md:text-lg md:max-[879px]:!text-lg font-bold text-black uppercase">
          {abouttour.title}
        </h2>

        <p className="text-base max-md:text-sm md:max-[879px]:!text-sm text-black mt-3">
          {abouttour.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:max-[879px]:!gap-x-3 md:max-[879px]:!gap-y-2 pt-4">
          <div className="flex items-center gap-2">
            <IoMdContacts className="text-[#2D2D2D] text-2xl md:max-[879px]:!text-xl shrink-0" />
            <p className="text-base max-md:text-sm md:max-[879px]:!text-sm text-[#555555]">2 out of 12 spots booked</p>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-red-600 text-2xl md:max-[879px]:!text-xl shrink-0" />
            <p className="text-base max-md:text-sm md:max-[879px]:!text-sm text-[#555555]">{abouttour.country}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4 md:max-[879px]:!pt-3">
          <IoCalendarOutline className="text-red-600 text-2xl md:max-[879px]:!text-xl shrink-0" />
          <p className="text-base max-md:text-sm md:max-[879px]:!text-sm text-[#555555]">
            Nov 08 — Nov 17, 2024
            <span className="text-gray-400"> (10 days)</span>
          </p>
        </div>

        {/* Button pinned to the bottom */}
        {abouttour.buttonText === "Details" ? (
          <div className="mt-auto pt-5">
            <div className="flex justify-center items-center border border-[#1E365C] text-[#1E365C] rounded-[20px] w-full py-2.5 font-bold cursor-pointer">
              {abouttour.buttonText}
            </div>
          </div>
        ) : abouttour.buttonText === "Add to Waitlist" ? (
          <div className="mt-auto pt-5">
            <div className="flex justify-center items-center border border-[#E9482B] text-[#E9482B] rounded-[20px] w-full py-2.5 font-bold cursor-pointer">
              {abouttour.buttonText}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Aboutdata;