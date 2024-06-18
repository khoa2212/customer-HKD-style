import { NavLink, useNavigate } from "react-router-dom";
import WishListIcon from "../../assets/heart.png";
import CartIcon from "../../assets/Cart.png";
import MessageIcon from "../MessageIcon/MessageIcon";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
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
      <span className="basis-1/3 flex justify-end items-center gap-3 h-full">
        <MessageIcon
          className="w-4 h-4"
          icon={WishListIcon}
          alt="wishlist-logo"
          number={0}
        />
        <MessageIcon
          className="w-5 h-4"
          icon={CartIcon}
          alt="cart-logo"
          number={0}
        />
      </span>
    </div>
  );
};

export default Header;
