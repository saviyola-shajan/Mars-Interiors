import { IoIosMail } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-8 sm:px-10 md:px-16 lg:px-24">
      {/* Footer Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 text-left">
        {/* Location Section */}
        <div className="space-y-4">
          <h3 className="text-[#000000] text-2xl font-medium">Location</h3>
          <p className="flex items-start text-lg text-[#0B0B0B] space-x-3">
            <FaLocationDot className="mt-1 text-[#17A396]" />
            <span>
              Mars Interiors, 24/7 Global Spaces, Peters Nine,
              <br />
              Near Josco Jewellers, Thodupuzha, Kerala
              <br />
              PinCode: 685584
            </span>
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-[#000000] text-2xl font-medium">Quick Links</h3>

          <ul className="space-y-2 text-lg text-[#0B0B0B]">
            <li>
              <Link to="/" className="hover:text-[#17A396] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="hover:text-[#17A396] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-[#17A396] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#17A396] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-[#000000] text-2xl font-medium">Contact</h3>
          <ul className="space-y-3 text-lg text-[#0B0B0B]">
            <li className="flex items-center space-x-3">
              <IoIosMail className="w-6 h-6 text-[#17A396]" />
              <a
                href="mailto:info@marsinterios.com"
                className="hover:underline"
              >
                info@marsinterios.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="w-6 h-6 text-[#17A396]" />
              <a href="https://wa.me/9567876460" className="hover:underline">
                +91 9567876460
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <BiPhoneCall className="w-6 h-6 text-[#17A396]" />
              <a href="tel:+919562978418" className="hover:underline">
                +91 9562978418
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-4">
            <a
              href="https://www.instagram.com/mars_interiors_.co.in?igsh=MzRycTVjbndlNm90"
              target="_blank"
              className="text-2xl text-[#17A396] transition-colors"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/9567876460"
              target="_blank"
              className="text-2xl text-[#17A396]  transition-colors"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </div>

          {/* Contact Button */}
          <button className="bg-[#17A396] text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#15a08b] transition-colors">
            <a href="/contact">Connect Us</a>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-[#0B0B0B] text-center text-sm sm:text-md">
        <p>All Rights Reserved | © 2025 MARS Interiors</p>
      </div>
    </footer>
  );
};

export default Footer;
