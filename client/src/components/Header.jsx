import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import { useSelector } from "react-redux";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex  justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="  from-black text-sm sm:text-xl flex flex-wrap cursor-pointer">
          <img src={logo} alt="logo" className=" size-10 flex items-center" />
          <span className=" text-rose-500  font-bold">Rajesh</span>
          <span className=" text-rose-500  font-bold">bnb</span>
        </h1>
        <form className=" bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className=" text-slate-100 bg-rose-500 size-10 p-3 rounded-full cursor-pointer" />
        </form>
        <ul className=" flex gap-4">
          <Link to="/">
            <li className=" hidden sm:inline text-slate-700 hover:underline cursor-pointer p-2.5 rounded-xl hover:bg-slate-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className=" hidden sm:inline text-slate-700 hover:underline cursor-pointer  p-2.5 rounded-xl hover:bg-slate-300">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="user_profile"
                className=" rounded-full size-7 object-cover"
              />
            ) : (
              <li className="text-slate-700 hover:underline cursor-pointer p-2 inline rounded-xl hover:bg-slate-300 ">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
