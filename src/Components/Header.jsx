import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.jpg";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white");
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
    <nav
      className={`fixed w-full flex items-center justify-between py-2 ${bgColor} shadow-md z-50 px-10 transition-all duration-300`}
    >
      <div>
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto cursor-pointer transition-all duration-300 ml-16"
          />
        </a>
      </div>
      <ul className="flex space-x-32 text-lg font-semibold mr-28 text-[#000000]">
        {["HOME", "ABOUT US", "SERVICES", "CONTACT"].map((item, index) => (
          <li key={index} className="relative">
            <Link
              to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="relative cursor-pointer hover:text-[#17A396] transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#17A396] before:transition-all before:duration-300 hover:before:w-full"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
