import SendIcon from "../../assets/icon-send.png";
import GooglePlay from "../../assets/google-play.png";
import AppStore from "../../assets/app-store.png";
import QRcode from "../../assets/Qr Code.png";
import FaceBookIcon from "../../assets/Icon-Facebook.png";
import InstagramIcon from "../../assets/icon-instagram.png";
import TwitterIcon from "../../assets/Icon-Twitter.png";
import LinkedinIcon from "../../assets/Icon-Linkedin.png";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="w-full bg-black px-6 py-20 flex justify-center items-center">
        <div className="grid grid-cols-5 gap-6 text-white text-sm">
          <span className="flex justify-center">
            <span className="flex flex-col gap-3">
              <p className="text-xl font-bold">HKD Style</p>
              <span className="hover:text-red-1 cursor-pointer mt-2">
                Subscribe
              </span>
              <span className="hover:text-red-1 cursor-pointer">
                Get 10% off your first order
              </span>
              <span className="border border-white p-2 rounded-sm flex gap-2 items-center justify-between flex-wrap">
                <input
                  type="text"
                  className="outline-none border-none bg-black text-white"
                  placeholder="Enter your email"
                />
                <img
                  src={SendIcon}
                  alt="send-logo"
                  className="w-5 cursor-pointer"
                />
              </span>
            </span>
          </span>
          <span className="flex justify-center">
            <span className="flex flex-col gap-3">
              <p className="text-xl font-bold">Support</p>
              <span className="hover:text-red-1 cursor-pointer mt-2">
                111 Ly Thuong Kiet, 15 Ward, Tan Binh District, Ho Chi Minh
                city.
              </span>
              <span className="hover:text-red-1 cursor-pointer">
                hkdstyle111@gmail.com
              </span>
              <span className="hover:text-red-1 cursor-pointer">
                0918-327-123
              </span>
            </span>
          </span>
          <span className="flex justify-center">
            <span className="flex flex-col gap-3">
              <p className="text-xl font-bold">Account</p>
              <span className="hover:text-red-1 cursor-pointer mt-2">
                My account
              </span>
              <span className="flex gap-1">
                <span className="hover:text-red-1 cursor-pointer">Login</span>
                <span>/</span>
                <span className="hover:text-red-1 cursor-pointer">
                  Register
                </span>
              </span>
              <span className="hover:text-red-1 cursor-pointer">Cart</span>
              <span className="hover:text-red-1 cursor-pointer">Wishlist</span>
              <span className="hover:text-red-1 cursor-pointer">Shop</span>
            </span>
          </span>

          <span className="flex justify-center">
            <span className="flex flex-col gap-3">
              <p className="text-xl font-bold">Quick link</p>
              <span className="hover:text-red-1 cursor-pointer mt-2">
                Privacy policy
              </span>
              <span className="hover:text-red-1 cursor-pointer">
                Terms of uses
              </span>
              <span className="hover:text-red-1 cursor-pointer">FAQ</span>
              <span className="hover:text-red-1 cursor-pointer">Contact</span>
            </span>
          </span>
          <span className="flex justify-center">
            <span className="flex flex-col gap-3">
              <p className="text-xl font-bold">Download app</p>
              <span className="hover:text-red-1 cursor-pointer mt-2 text-gray-400">
                Save $3 with App New User Only
              </span>
              <span className="flex gap-2">
                <img src={QRcode} alt="qr-logo" />
                <span className="flex flex-col justify-between">
                  <img src={GooglePlay} alt="google-play-logo" />
                  <img src={AppStore} alt="app-store-logo" />
                </span>
              </span>
              <span className="mt-2 flex justify-between">
                <img
                  className="cursor-pointer"
                  src={FaceBookIcon}
                  alt="facebook-icon"
                />
                <img
                  className="cursor-pointer"
                  src={InstagramIcon}
                  alt="instagram-icon"
                />
                <img
                  className="cursor-pointer"
                  src={TwitterIcon}
                  alt="twitter-icon"
                />
                <img
                  className="cursor-pointer"
                  src={LinkedinIcon}
                  alt="linkedin-icon"
                />
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="bg-black w-full p-2 border-t border-t-gray-700 text-white text-sm text-center">
        <p><span className="mr-1">©</span>Copyright Tuan Khoa 2024. All right reserved</p>
      </div>
    </>
  );
};

export default Footer;
