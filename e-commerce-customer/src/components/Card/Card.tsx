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
        <div className="rounded-md basis-1/6 shrink-0 grow-0">
            <div className="w-full h-2/3 rounded-md relative bg-gray-200 flex justify-center items-center">
                <img
                    src={image}
                    alt={name}
                    className="rounded-t-lg w-2/3 h-full object-cover"
                />
                <p className="absolute top-3 left-3 bg-red-600 px-3 text-white rounded-sm text-center">
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
