import { onMouseOutStar, onMouseOverStar } from "../../utils/handle-events";
import { EyeIcon, HeartIcon, StarIcon } from "../Icons/Icons";
import "./styles.scss";

interface CardProps {
  id: number;
  image: string;
  sales: number;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  className?: string;
}

const Card = ({
  image,
  name,
  sales,
  price,
  rating,
  totalReviews,
}: CardProps) => {
  const renderRating = (star: number) => {
    let fillColor = "";
    if (star > Math.round(rating)) {
      fillColor = "white";
    } else {
      fillColor = "yellow";
    }

    return (
      <StarIcon
        onMouseOver={(e) => onMouseOverStar(e)}
        onMouseOut={(e) => onMouseOutStar(e, fillColor)}
        key={star}
        fillColor={fillColor}
        className="cursor-pointer"
      />
    );
  };

  return (
    <div className="rounded-md basis-1/6 shrink-0 grow-0 flex flex-col">
      <div className="w-full flex-1">
        <div className="header w-full h-2/3 rounded-md relative bg-gray-200 flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="rounded-t-lg w-2/3 h-full object-cover"
          />
          <p className="absolute top-3 left-3 bg-red-600 px-2 text-white rounded-md text-center">
            -{sales}%
          </p>
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <HeartIcon className="hover:bg-red-1 hover:text-white" />
            <EyeIcon className="hover:bg-red-1 hover:text-white" />
          </div>
          <div className="add-to-cart cursor-pointer rounded-md absolute bottom-0 bg-black text-white text-center w-full p-2">
            Add to cart
          </div>
        </div>
        <p className="font-bold text-lg">{name}</p>
      </div>

      <div className="flex">
        <p className="text-red-600">
          ${Math.round(price * (0.01 * (100 - sales)))}
        </p>
        <p className="line-through ml-2">${price}</p>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => renderRating(star))}
        <div>({totalReviews})</div>
      </div>
    </div>
  );
};

export default Card;
