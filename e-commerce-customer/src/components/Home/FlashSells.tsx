import { mockData } from "../../layouts/HomePageLayout/data";
import Card from "../Card/Card";
import { ArrowLongLeft, ArrowLongRight } from "../Icons/Icons";
import RedButton from "../RedButton/RedButton";

const FlashSells = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="w-[20px] h-[40px] bg-red-700 rounded-sm"></div>
        <p className="text-red-700 text-3xl">Today's</p>
      </div>
      <div className="flex items-end flex-wrap lg:flex-nowrap w-full gap-4 lg:gap-12">
        <h2 className="font-bold text-3xl">Flash Sales</h2>
        <div className="flex items-end gap-2 flex-1">
          <div className="flex flex-col basis-[3%]">
            <p className="text-xs font-bold">Days</p>
            <p className="font-bold text-3xl">03</p>
          </div>
          <div className="font-bold text-orange-500 text-3xl basis-[3%] text-center">
            :
          </div>

          <div className="flex flex-col basis-[3%]">
            <p className="text-xs font-bold">Hours</p>
            <p className="font-bold text-3xl">03</p>
          </div>
          <div className="font-bold text-orange-500 text-3xl basis-[3%] text-center">
            :
          </div>
          <div className="flex flex-col basis-[3%]">
            <p className="text-xs font-bold">Minutes</p>
            <p className="font-bold text-3xl">03</p>
          </div>
          <div className="font-bold text-orange-500 text-3xl text-center basis-[3%]">
            :
          </div>

          <div className="flex flex-col basis-[3%]">
            <p className="text-xs font-bold">Seconds</p>
            <p className="font-bold text-3xl">03</p>
          </div>
        </div>
        <div className="flex gap-2 pr-3">
          <ArrowLongLeft className="hover:bg-slate-500" />
          <ArrowLongRight className="hover:bg-slate-500" />
        </div>
      </div>
      <div className="flex overflow-hidden gap-4 flex-nowrap mt-6">
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
    </>
  );
};

export default FlashSells;
