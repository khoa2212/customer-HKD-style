import { NavLink, useNavigate } from "react-router-dom";
import { HeartIcon, CartIcon, UserIcon, LogoutIcon } from "../Icons/Icons";
import MessageIcon from "../MessageIcon/MessageIcon";
import "./style.scss";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  const onLogout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white px-1 lg:px-6 py-2 border-b-2 flex justify-between items-center h-full">
      <span
        id="logo"
        className="text-2xl font-bold basis-1/3 cursor-pointer"
        onClick={onClickLogo}
      >
        HKD Style
      </span>
      <span
        id="navigate"
        className="flex basis-1/3 justify-center gap-1 sm:gap-9 items-center"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-1 font-bold underline" : "hover:text-red-1"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-1 font-bold underline" : "hover:text-red-1"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-1 font-bold underline" : "hover:text-red-1"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-red-1 font-bold underline" : "hover:text-red-1"
          }
        >
          Login
        </NavLink>
      </span>
      <span className="basis-1/3 flex justify-end items-center gap-2 h-full">
        <NavLink
          to="/manage-account/wishlist"
          className={({ isActive }) =>
            isActive
              ? "bg-red-1 rounded-full text-white"
              : "hover:bg-gray-300 rounded-full bg-white"
          }
        >
          <MessageIcon className="w-7 h-7 bg-transparent" number={0}>
            <HeartIcon className="bg-transparent" />
          </MessageIcon>
        </NavLink>
        <NavLink
          to="/manage-account/cart"
          className={({ isActive }) =>
            isActive
              ? "bg-red-1 rounded-full text-white"
              : "hover:bg-gray-300 rounded-full bg-white"
          }
        >
          <MessageIcon className="w-7 h-7 bg-transparent" number={0}>
            <CartIcon className="bg-transparent" />
          </MessageIcon>
        </NavLink>
        <NavLink
          to="/manage-account/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-red-1 rounded-full text-white user-icon w-7 h-7 p-1 flex justify-center items-center cursor-pointer relative"
              : "hover:bg-gray-300 rounded-full bg-white user-icon w-7 h-7 p-1 flex justify-center items-center cursor-pointer relative"
          }
        >
          <UserIcon />
          <span className="user-dropdown absolute from-gray-400 to-black bg-gradient-to-r p-2 rounded-md text-white flex-col text-sm top-full right-0 z-30 w-[200px] gap-2">
            <span className="w-full flex items-center gap-4">
              <UserIcon className="w-6 h-6" />
              <span className="hover:text-red-1">Manage account</span>
            </span>
            <span
              className="w-full flex items-center gap-4"
              onClick={(e) => onLogout(e)}
            >
              <LogoutIcon className="w-6 h-6" />
              <span className="hover:text-red-1">Logout</span>
            </span>
          </span>
        </NavLink>
      </span>
    </div>
  );
};

export default Header;
