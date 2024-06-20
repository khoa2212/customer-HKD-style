import { onMouseOutStar, onMouseOverStar } from "../../utils/handle-events";
import { StarIcon } from "../Icons/Icons";

export interface RatingStarProps {
  star: number;
  rating: number;
  className?: string;
}

const RatingStar = ({ star, rating, className }: RatingStarProps) => {
  const getFillColor = (): string => {
    if (star > Math.round(rating)) {
      return "white";
    }

    return "yellow";
  };

  return (
    <span>
      <StarIcon
        onMouseOver={(e) => onMouseOverStar(e)}
        onMouseOut={(e) => onMouseOutStar(e, getFillColor())}
        key={star}
        fillColor={getFillColor()}
        className={`cursor-pointer ${className}`}
      />
    </span>
  );
};

export default RatingStar;
