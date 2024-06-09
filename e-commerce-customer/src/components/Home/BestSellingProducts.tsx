import { mockData } from '../../layouts/HomePageLayout/data';
import Card from '../Card/Card';

const BestSellingProducts = () => {
    return (
        <>
            <div className="flex gap-4 items-center">
                <div className="w-[20px] h-[40px] bg-red-700 rounded-sm"></div>
                <p className="text-red-700 text-3xl">This month</p>
            </div>
            <div className="flex items-end w-full gap-12">
                <h2 className="font-bold text-3xl flex-1">
                    Best selling products
                </h2>

                <button className="bg-red-600 px-4 py-2 rounded-md text-white">
                    View alls
                </button>
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
            <div className="border-b-2 mx-9 my-5"></div>
        </>
    );
};

export default BestSellingProducts;
