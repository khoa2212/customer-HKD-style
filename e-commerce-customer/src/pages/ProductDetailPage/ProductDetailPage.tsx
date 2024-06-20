import { useParams } from "react-router-dom";
import { RedButton } from "../../components";
import { HeartIcon } from "../../components/Icons/Icons";
import RatingStar from "../../components/RatingStar/RatingStar";
import { statusColor, statusRender } from "../../enums/enums";
import { mockData } from "../../layouts/HomePageLayout/data";
import QuantityInput from "../../components/QuantityInput/QuantityInput";

const ProductDetailPage = () => {
  const params = useParams();
  const data = mockData[params.id ? +params.id : 1];

  const renderProductStatus = (status: string | undefined) => {
    return (
      <span className={statusColor[status as keyof typeof statusColor]}>
        {statusRender[status as keyof typeof statusRender]}
      </span>
    );
  };

  return (
    <div className="pb-52">
      <span className="flex gap-2 text-slate-400">
        <span>Home</span>
        <span className="text-black">/</span>
        <span className="text-black">{data.name}</span>
      </span>
      <div className="grid grid-cols-2 mt-12 gap-8">
        <span className="bg-gray-200 rounded-md flex justify-center">
          <img src={data.attachment[0]} alt={data.name} />
        </span>
        <div className="flex flex-col gap-3">
          <p className="text-2xl break-words font-bold">{data.name}</p>
          <span className="flex gap-2">
            <span className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <RatingStar star={star} rating={data.rating} />
              ))}
            </span>
            <span className="text-gray-400">({data.totalReviews} reviews)</span>
            <span className="text-gray-400">|</span>
            {renderProductStatus(data.status)}
          </span>
          <span className="text-xl">${data.price}</span>
          <span className="pt-2 pb-6 border-b-2 border-b-gray-400">
            {data.description}
          </span>
          <span className="flex gap-2">
            <QuantityInput quantity={1} />
            <RedButton content="Add to cart" className="py-1 px-1 flex-1" />
            <button className="hover:bg-red-1 hover:text-white border border-gray-400 hover:border-red-1 rounded-md">
              <HeartIcon className="h-full w-10 bg-inherit" />
            </button>
          </span>
        </div>
      </div>
      <div className="mt-4 w-full flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <div className="w-[20px] h-[40px] bg-red-700 rounded-sm"></div>
          <p className="text-red-700 text-3xl">Reviews</p>
        </div>
        <div className="w-full flex flex-col gap-2 items-end">
          <div className="w-full relative h-[200px]">
            <textarea
              placeholder="Enter review"
              className="p-2 h-full outline-none border border-gray-400 w-full rounded-md"
            ></textarea>
            <span className="flex gap-3 absolute bottom-2 right-2">
              <span className="flex gap-1">
                <span className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <RatingStar star={star} rating={0} />
                  ))}
                </span>
              </span>
              <span className="flex gap-2 text-gray-400">
                <span>20</span>
                <span>/</span>
                <span>1000</span>
              </span>
            </span>
          </div>
          <RedButton className="w-fit shrink-0" content="Submit" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
