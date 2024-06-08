import { EyeIcon, HeartIcon } from '../Icons/Icons';
interface CardProps {
    id: number;
    image: string;
    sales: number;
    name: string;
    price: number;
}

const Card = ({ image, name, sales, price }: CardProps) => {
    return (
        <div className="max-w-[500px] h-[300px] rounded-md w-full">
            <div className="w-full rounded-md relative bg-gray-200 flex justify-center items-center h-2/3">
                <img
                    src={image}
                    alt="abcd"
                    className="rounded-t-lg"
                />
                <p className="absolute top-3 left-3 w-[55px] h-[26px] bg-red-600 px-3 text-white rounded-[4px] text-center">
                    -{sales}%
                </p>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <HeartIcon />
                    <EyeIcon />
                </div>
            </div>

            <h3 className="font-bold mt-2">{name}</h3>
            <div className="flex">
                <p className="mr-3 text-red-600">
                    ${Math.round(price * (0.01 * (100 - sales)))}
                </p>
                <p className="line-through">${price}</p>
            </div>
        </div>
    );
};

export default Card;
