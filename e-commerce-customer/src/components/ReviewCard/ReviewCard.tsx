import RatingStar from "../RatingStar/RatingStar";

export interface ReviewCardProps {
  id: string;
  content: string;
  imagePath: string;
  fullName: string;
  rating: number;
  createdAt: string;
}

const ReviewCard = ({
  id,
  content,
  imagePath,
  fullName,
  rating,
  createdAt,
}: ReviewCardProps) => {
  return (
    <div key={id} className="w-full flex flex-col gap-2">
      <span className="flex gap-4 items-center">
        <img
          src={imagePath}
          alt={imagePath}
          className="object-contain w-10 h-10"
        />
        <span>
          <span className="flex flex-col">
            <span className="flex gap-2 items-center">
              <p className="text-red-1">{fullName}</p>
              <span className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <RatingStar key={star} star={star} rating={rating} className="w-5 h-5"/>
                ))}
              </span>
            </span>
            <span className="text-gray-400 text-sm">{createdAt}</span>
          </span>
        </span>
      </span>
      <p className="break-words">{content}</p>
    </div>
  );
};

export default ReviewCard;
