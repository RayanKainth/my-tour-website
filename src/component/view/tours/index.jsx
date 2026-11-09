
// import { useState } from "react";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { FiMenu, FiX } from "react-icons/fi";

import Herosection from "./herosection";
import Tours from "./tours";

const Index = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const navLinks = [
  //   "TOURS",
  //   "ABOUT US",
  //   "OUR STYLE",
  //   "PRIVATE TOURS",
  //   "PAST TOURS",
  //   "CONTACT US",
  // ];

  return (
    // <>
    //   {/* Navbar */}
    //   <div className="bg-[#1E365C] w-full relative z-50">

    //     <div className="container mx-auto px-4 h-[90px] lg:h-[128px]">

    //       <div className="flex items-center justify-between h-full">

    //         {/* Logo */}
    //         <img
    //           src="/assets/images/logo.png"
    //           alt="logo"
    //           className="w-[130px] sm:w-[160px] lg:w-auto"
    //         />

    //         {/* Desktop Navigation */}
    //         <nav className="hidden lg:flex">
    //           <ul className="flex gap-5 xl:gap-[30px] text-white text-[16px] xl:text-[18px] font-medium font-inter">
    //             {navLinks.map((link) => (
    //               <li
    //                 key={link}
    //                 className="cursor-pointer hover:text-gray-300 transition"
    //               >
    //                 {link}
    //               </li>
    //             ))}
    //           </ul>
    //         </nav>

    //         {/* Desktop Buttons */}
    //         <div className="hidden lg:flex items-center gap-5">
    //           <HiOutlineShoppingBag className="text-white text-[36px] py-[10px] rounded-full bg-[#D6D6D64D]" />

    //           <button className="text-black bg-white px-6 py-2 rounded-full">
    //             Login
    //           </button>
    //         </div>

    //         {/* Mobile Menu Button */}
    //         <button
    //           onClick={() => setMenuOpen(!menuOpen)}
    //           className="lg:hidden text-white text-[30px]"
    //           aria-label="Toggle navigation menu"
    //           aria-expanded={menuOpen}
    //         >
    //           {menuOpen ? <FiX /> : <FiMenu />}
    //         </button>

    //       </div>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {menuOpen && (
    //       <div className="lg:hidden absolute top-full left-0 w-full bg-[#1E365C] shadow-lg">

    //         <ul className="flex flex-col items-center gap-5 py-6 text-white text-[16px] font-medium font-inter">
    //           {navLinks.map((link) => (
    //             <li
    //               key={link}
    //               onClick={() => setMenuOpen(false)}
    //               className="cursor-pointer hover:text-gray-300"
    //             >
    //               {link}
    //             </li>
    //           ))}

    //           <li className="flex items-center gap-4 pt-2">
    //             <HiOutlineShoppingBag className="text-white text-[28px]" />

    //             <button className="text-black bg-white px-6 py-2 rounded-full">
    //               Login
    //             </button>
    //           </li>
    //         </ul>

    //       </div>
    //     )}

    //   </div>
      <>

      <Herosection />

      <Tours />
    </>
  );
};

export default Index;
