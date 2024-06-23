import { NavLink } from "react-router-dom";
import PhoneImage from "../../assets/phone.png";
import { RedButton } from "../../components";
import { GoogleIcon } from "../../components/Icons/Icons";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <img src={PhoneImage} alt="PhoneImage" />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-3 py-6">
          <p className="text-2xl text-black font-medium">Login to HKD Style</p>
          <p>
            Don't have an account?
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                isActive ? "text-red-1 font-bold underline ml-1" : "text-red-1 ml-1"
              }
            >
              Sign up now
            </NavLink>
          </p>
        </div>
        <form className="flex gap-5 flex-col">
          <div className="border-b-2">
            <input
              type="email"
              className="w-full outline-none border-none py-2"
              placeholder="Email"
            />
          </div>
          <div className="border-b-2">
            <input
              type="Password"
              className="w-full outline-none border-none py-2"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col items-center gap-3 py-2">
            <RedButton type="submit" content="Login" className="w-full" />
            <NavLink
              to="/forgot-password"
              className={({ isActive }) =>
                isActive ? "text-red-1 font-bold underline" : "text-red-1"
              }
            >
              Forgot password?
            </NavLink>
          </div>
        </form>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 mb-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <button className="w-full px-4 py-2 rounded-md mt-3 border shadow-sm flex items-center justify-center gap-2 hover:bg-red-1 hover:text-white">
          <GoogleIcon />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
