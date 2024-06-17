import { mockData } from "../../layouts/HomePageLayout/data";
import Card from "../Card/Card";
import { ArrowLongLeft, ArrowLongRight } from "../Icons/Icons";
import RedButton from "../RedButton/RedButton";

const ExploreOurProducts = () => {
  return (
    <div className="w-fit h-fit">
      <div className="flex gap-4 items-center">
        <div className="w-[20px] h-[40px] bg-red-700 rounded-sm"></div>
        <p className="text-red-700 text-3xl">Our products</p>
      </div>
      <div className="flex items-end w-full gap-12">
        <h2 className="font-bold text-3xl flex-1">Explore our products</h2>

        <div className="flex gap-2 pr-3">
          <ArrowLongLeft />
          <ArrowLongRight />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {mockData?.map((card) => (
          <Card
            key={card.id}
            image={card.attachment[0]}
            name={card.name}
            sales={card.sales}
            price={card.price}
            id={card.id}
            rating={card.rating}
            totalReviews={card.totalReviews}
          />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <RedButton content={"View all products"} />
      </div>
      <div className="border-b-2 mx-9 my-5"></div>
    </div>
  );
};

export default ExploreOurProducts;
