import { Link } from "react-router-dom";
import { logo } from "../assets";
import Logo from "./Logo";
import DarkSwitch from "./DarkSwitch";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white dark:bg-black sm:px-8 px-4 py-4 border-b border-b-gray-200 dark:border-b-slate-700">
      <Link to="/">
        <Logo />
      </Link>
      <DarkSwitch />
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
