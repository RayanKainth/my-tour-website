
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  // Check the current page
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  // Navbar background
  const navbarBg = isHome
    ? "absolute top-0 left-0 bg-transparent"
    : isAbout
    ? "relative bg-[#1E365C]"
    : "relative bg-[#1E365C]";

  // Navigation text color
  const textColor = isAbout ? "text-[#777777]" : "text-white";

  // Mobile menu background
  const mobileMenuBg = isAbout ? "bg-white" : "bg-[#1E365C]";

  // Navigation links
  const navLinks = [
    { name: "TOURS", path: "/tours" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR STYLE", path: "/our-style" },
    { name: "PRIVATE TOURS", path: "/private-tours" },
    { name: "PAST TOURS", path: "/past-tours" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <div className={`${navbarBg} w-full z-50`}>
      <div className="container mx-auto px-4 h-[90px] lg:h-[86px]">

        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="w-[130px] sm:w-[150px] lg:w-[120px] xl:w-[225px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul
              className={`flex items-center gap-4 xl:gap-6 ${textColor} text-[12px] xl:text-[13px] font-medium font-inter`}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md transition ${
                      pathname === link.path
                        ? "bg-[#F1F2F5] text-[#1E365C] font-semibold"
                        : "hover:opacity-70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Shopping Bag */}
            <div className="relative w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center">
              <HiOutlineShoppingBag className="text-[#777777] text-[19px]" />

              {/* Notification dot */}
              <span className="absolute top-[5px] right-[5px] w-[6px] h-[6px] bg-[#E9482B] rounded-full"></span>
            </div>

            {/* Login Button */}
            <button className="bg-[#1E365C] text-white text-[11px] px-5 py-2 rounded-full">
              Login
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden ${isAbout ? "text-[#1E365C]" : "text-white"} text-[30px]`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full ${mobileMenuBg} shadow-lg`}
        >
          <ul
            className={`flex flex-col items-center gap-5 py-6 ${textColor} text-[14px] font-medium font-inter`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md ${
                    pathname === link.path
                      ? "bg-[#F1F2F5] text-[#1E365C]"
                      : "hover:opacity-70"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="flex items-center gap-4 pt-2">
              <HiOutlineShoppingBag className="text-[#777777] text-[25px]" />

              <button className="bg-[#1E365C] text-white px-6 py-2 rounded-full">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;
