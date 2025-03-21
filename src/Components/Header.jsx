import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "/images/MARS-logo.png";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white shadow-md");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full ${bgColor} z-50 transition-all duration-300 flex justify-center`}>
      <div className="max-w-[1580px] w-full mx-auto flex items-center justify-between px-6 lg:px-10 ">
        <a href="/">
          <img src={logo} alt="Logo" className="h-20 w-24 cursor-pointer transition-all duration-300 ml-0 md:ml-16" />
        </a>
        <button className="lg:hidden h-8" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 /> : <GiHamburgerMenu className="w-8 h-8"  />}
        </button>
        <ul className="hidden lg:flex space-x-10 xl:space-x-32 text-lg mr-24 font-semibold text-black">
          {["HOME", "ABOUT US", "SERVICES", "CONTACT"].map((item, index) => (
            <li key={index} className="relative">
              <Link
                to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="relative cursor-pointer hover:text-[#17A396] transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#17A396] 
                before:transition-all before:duration-300 hover:before:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 lg:hidden`}
        >
          <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <RxCross2 size={28} />
          </button>
          <ul className="mt-28 flex flex-col items-center space-y-6 text-lg font-semibold text-black">
            {["HOME", "ABOUT US", "SERVICES", "CONTACT"].map((item, index) => (
              <li key={index}>
                <Link
                  to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  className="block py-2 px-6 hover:text-[#17A396] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
