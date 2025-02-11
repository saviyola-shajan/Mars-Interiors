import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 px-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-40 text-left">
        <div className="space-y-6">
          <h3 className="text-[#000000] text-2xl font-medium">Location</h3>
          <p className="flex items-start text-lg text-[#121212] space-x-3">
            <FaLocationDot className="mt-1" />
            <span>15th Floor, Muthoot Royal Towers Building, Kaloor, Kochi, Kerala 682017</span>
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-[#000000] text-2xl font-medium">Quick Links</h3>
          <ul className="space-y-3 text-lg text-[#121212]">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/aboutus" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-[#000000] text-2xl font-medium">Contact</h3>
          <ul className="space-y-3 text-lg text-[#121212]">
            <li className="flex items-center space-x-3">
              <IoIosMail />
              <a href="mailto:info@ipcstechnologies.com">info@marsinterios.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <BiPhoneCall />
              <a href="tel:+919072946664">+91 9072946664</a>
            </li>
          </ul>
          <div className="flex space-x-5">
            <a href="https://www.facebook.com/IPCSTechnologies" target="_blank" className="text-2xl"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/ipcstechnologies" target="_blank" className="text-2xl"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/99073852/admin/page-posts/published/" target="_blank" className="text-2xl"><FaLinkedin /></a>
          </div>
          <button className="bg-[#17A396] text-white px-6 py-2 rounded-lg">
            <a href="/contact">
            Connect Us
            </a>
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-10 text-[#121212] text-center text-md ">
        <p>© 2025 MARS Interiors &nbsp;| &nbsp;All Rights Reserved</p>
        <p className="text-sm">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
