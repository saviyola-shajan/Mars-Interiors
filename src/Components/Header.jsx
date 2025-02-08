import logo from "/images/logo.jpg";
const Header = () => {
  return (
    <nav className="fixed w-full flex items-center justify-between py-2 bg-white shadow-md z-50 px-10">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer transition-all duration-300 ml-16"
        />
      </div>
      <ul className="flex space-x-32 text-lg font-semibold mr-28 text-[#121212]">
        <li className="cursor-pointer relative hover:text-[#17A396] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-[#121212] before:transition-all before:duration-300 hover:before:w-full">
          HOME
        </li>
        <li className="cursor-pointer relative hover:text-[#17A396] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-[#121212] before:transition-all before:duration-300 hover:before:w-full">
          SERVICES
        </li>
        <li className="cursor-pointer relative hover:text-[#17A396] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-[#121212] before:transition-all before:duration-300 hover:before:w-full">
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default Header;
