import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import BestSellingProducts from "../../components/Home/BestSellingProducts";
import ExploreOurProducts from "../../components/Home/ExploreOurProducts";
import FlashSells from "../../components/Home/FlashSells";
import {
  PhoneIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "../../components/Icons/Icons";
import { images } from "./data";

const HomePage = () => {
  return (
    <>
      <div className="flex">
        <Category />
        <Carousel images={images} />
      </div>
      <div className="mt-6">
        <FlashSells />
      </div>
      {/* <div className="mt-6">
                <BestSellingProducts />
            </div> */}
      <div className="mt-6 w-full flex justify-center">
        <ExploreOurProducts />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-14 my-32">
        <div>
          <div className="text-center">
            <div className="rounded-full border-8 border-slate-300 inline-block">
              <TruckIcon />
            </div>
          </div>
          <p className="text-xl font-bold">FREE AND FAST DELIVERY</p>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <div className="text-center">
            <div className="rounded-full border-8 border-slate-300 inline-block">
              <PhoneIcon />
            </div>
          </div>
          <p className="text-center text-xl font-bold">24/7 CUSTOMER SERVICE</p>
          <p className="text-center">Friendly 24/7 customer support</p>
        </div>
        <div>
          <div className="text-center">
            <div className="rounded-full border-8 border-slate-300 inline-block">
              <ShieldCheckIcon />
            </div>
          </div>
          <p className="text-center text-xl font-bold">MONEY BACK GUARANTEE</p>
          <p className="text-center">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
