import { IoMdContacts } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";



const TourProps = ({ tour }) => {
  return (
      <div className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-full object-cover rounded-t-[20px]"
      />
      <div className="p-4">
      <p className="text-[#2D2D2D] text-[20px] font-inter font-bold">{tour.name}</p>
      <p className="text-[#2D2D2D] text-[18px] font-inter font-medium">Join our unique journey into the heart of Mexico!
         We'll dive into the rich history, flavorful cuisine,
          city and village life and vibrant cultures in a style
           you won't want to miss!</p>
           <div className="flex items-center gap-3 pt-4">
              <IoMdContacts className="text-[#2D2D2D] text-[26px] " />
              <div className="flex flex-row gap-1">
              <p className="text-[#2D2D2D] text-[20px] font-inter font-medium">10</p>
              <p className="text-[#2D2D2D] text-[20px] font-inter font-medium">out of 12</p>
              <p className="text-[#2D2D2D] text-[20px] font-inter font-medium">spots booked</p>
              </div>
              <div className="flex gap-1">
            <IoLocationOutline className="text-[26px] text-red-600"/>
            <p className="text-[20px]">Mexico</p>
           </div>
           </div>
           <div className="flex pt-[10px] gap-4">
            <SlCalender className="text-[24px]"/>
            <div className="flex text-[20px] gap-2">
                <p>Nov 08 — Nov 17, 2024</p>
                <p className="text-[#2D2D2D]">(10 days)</p>
            </div>
           </div>
 
 <div className="flex justify-center pt-[25px]">
           <button className=" border border-[#1E365C] rounded-[20px]
    px-[220px] py-[10px] ">Details</button>
      </div>     
      </div>
    </div>
  );
};

export default TourProps;
