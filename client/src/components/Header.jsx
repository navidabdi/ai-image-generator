import { Link } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-gray-200">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-indigo-600 text-white px-4 py-2 rounded-md"
      >
        Generate
      </Link>
    </header>
  );
};

export default Header;
