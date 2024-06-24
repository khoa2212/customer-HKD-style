import { wishlistData } from "./data";
import { mockData } from "../HomePage/data";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const navigate = useNavigate();
  const onSeeAll = () => {
    navigate("/product-list");
  };

  return (
    <div className="w-full pb-10">
      <span className="flex gap-2 text-slate-400">
        <span>Home</span>
        <span>/</span>
        <span>Manage account</span>
        <span className="text-black">/</span>
        <span className="text-black">Wishlist</span>
      </span>
      <div className="mt-12">
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[40px] bg-red-700 rounded-sm"></div>
            <p className="text-red-700 text-xl">Wishlist(12)</p>
          </div>
          <button className="p-2 border rounded-md border-black hover:text-white hover:bg-red-1 hover:border-red-1">
            Move All To Cart
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full mt-12">
          {wishlistData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.attachment[0]}
              name={item.name}
              sales={item.sales}
              rating={item.rating}
              totalReviews={item.totalReviews}
              price={item.price}
              isWishlist={true}
            />
          ))}
        </div>
      </div>
      <div className="border-b-2 mx-9 my-12"></div>
      <div>
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[40px] bg-red-700 rounded-sm"></div>
            <p className="text-red-700 text-xl">Our products</p>
          </div>
          <button
            className="p-2 border rounded-md border-black hover:text-white hover:bg-red-1 hover:border-red-1"
            onClick={onSeeAll}
          >
            See all
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full mt-12">
          {mockData.slice(0, 4).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.attachment[0]}
              name={item.name}
              sales={item.sales}
              rating={item.rating}
              totalReviews={item.totalReviews}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
