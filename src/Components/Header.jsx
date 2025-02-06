import Logo from "../../src/assets/images/logo.jpg";

const Header = () => {
  return (
    <nav className="fixed w-full flex items-center justify-between py-4 bg-white shadow-md z-50 px-10">
      <div>
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer transition-all duration-300 ml-16"
        />
      </div>
      <ul className="flex space-x-32 text-lg font-semibold mr-28">
        <li className="cursor-pointer">HOME</li>
        <li className="cursor-pointer">SERVICES</li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Header;
