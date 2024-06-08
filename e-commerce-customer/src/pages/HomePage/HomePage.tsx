import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import Category from '../../components/Category/Category';

const mockData = [
    {
        id: 1,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770332/products/wb5ckgto2hk9yvbbx3ez.png',
        ],
        rating: 0,
        name: 'AVX G2 438',
        price: 500,
        sales: 5, // 5% of price
        totalReviews: 5,
    },
    {
        id: 2,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/wchbo34j2ienzuaaqr0i.png',
        ],
        rating: 1,
        name: 'Lorem AVF L86 9061 HZ 90810 LO10931 P10313 QA',
        price: 1000,
        sales: 50, // 50% of price
        totalReviews: 5,
    },
    {
        id: 3,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/ltt6lsbnnfuvs1aputna.png',
        ],
        rating: 2,
        name: 'AVX G2 438',
        price: 200,
        sales: 99,
        totalReviews: 100,
    },
    {
        id: 4,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/bogmggtbjryon13jbbwq.png',
        ],
        rating: 3,
        name: 'AVX G2 438',
        price: 400,
        sales: 70,
        totalReviews: 99,
    },
    {
        id: 5,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/r3mdq6xljovga6negthe.png',
        ],
        rating: 4.5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 1000,
    },
    {
        id: 6,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/f3chxyhirztctbcxk2sf.png',
        ],
        rating: 2.5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 7,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/z3h2o8cmwevr1ka7z7mx.png',
        ],
        rating: 3.5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 8,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/ru0nxikdwamwda0ehdea.png',
        ],
        rating: 0.5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 9,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/stws4wo1t4jzx0kef3kl.png',
        ],
        rating: 4,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 10,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/jwg1ilgpkevoml20cdnx.png',
        ],
        rating: 3,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 11,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/q68b4strdnqczjio4tt4.png',
        ],
        rating: 2,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 12,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/q68b4strdnqczjio4tt4.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 13,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/q68b4strdnqczjio4tt4.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 14,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/q68b4strdnqczjio4tt4.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5,
        totalReviews: 20,
    },
    {
        id: 15,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/q68b4strdnqczjio4tt4.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 27,
        totalReviews: 20,
    },
    {
        id: 16,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/q68b4strdnqczjio4tt4.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 11,
        totalReviews: 20,
    },
    {
        id: 17,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770329/products/mwo8cru9mrg4z89s45dc.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 5.55,
        totalReviews: 20,
    },
    {
        id: 18,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/lw1701tzogi4rqqxacos.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 9,
        totalReviews: 20,
    },
    {
        id: 19,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/xrxww4ftsfbmfcqhgetv.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 2,
        totalReviews: 20,
    },
    {
        id: 20,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/xrxww4ftsfbmfcqhgetv.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 1,
        totalReviews: 20,
    },
    {
        id: 21,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/xrxww4ftsfbmfcqhgetv.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 73,
        totalReviews: 20,
    },
    {
        id: 22,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/yr459wve4kmzo7utdvgk.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 69,
        totalReviews: 20,
    },
    {
        id: 23,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/yr459wve4kmzo7utdvgk.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 55,
        totalReviews: 20,
    },
    {
        id: 24,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/yr459wve4kmzo7utdvgk.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 40,
        totalReviews: 20,
    },
    {
        id: 25,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/yr459wve4kmzo7utdvgk.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 30,
        totalReviews: 20,
    },
    {
        id: 26,
        attachment: [
            'https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770328/products/yr459wve4kmzo7utdvgk.png',
        ],
        rating: 5,
        name: 'AVX G2 438',
        price: 500,
        sales: 20,
        totalReviews: 20,
    },
];

const HomePage = () => {
    console.log(mockData.length);
    return (
        <>
            <div className="flex">
                <Category />
                <Carousel />
            </div>
            <div>
                <div className="flex w-[100px] h-[40px] gap-4 justify-center items-center">
                    <div className="w-[20px] h-[40px] bg-red-700"></div>
                    <h3 className="text-red-700">Today's</h3>
                </div>
                <div className="flex items-end">
                    <h2 className="font-bold text-[32px] mr-12">Flash Sales</h2>
                    <div className="flex items-end gap-2">
                        <div className="flex flex-col">
                            <p className="text-xs font-bold">Days</p>
                            <h1 className="font-bold text-[32px]">03</h1>
                        </div>
                        <div className="font-bold text-orange-500 text-[32px]">
                            :
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xs font-bold">Hours</p>
                            <h1 className="font-bold text-[32px]">03</h1>
                        </div>
                        <div className="font-bold text-orange-500 text-[32px]">
                            :
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs font-bold">Minutes</p>
                            <h1 className="font-bold text-[32px]">03</h1>
                        </div>
                        <div className="font-bold text-orange-500 text-[32px]">
                            :
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xs font-bold">Seconds</p>
                            <h1 className="font-bold text-[32px]">03</h1>
                        </div>
                    </div>
                </div>
                <div className="flex overflow-x-scroll gap-4 flex-nowrap">
                    {mockData?.map((card) => (
                        <Card
                            key={card.id}
                            image={card.attachment[0]}
                            name={card.name}
                            sales={card.sales}
                            price={card.price}
                            id={card.id}
                        />
                    ))}
                </div>
            </div>
            <div>This month</div>
            <div>Ours product</div>
        </>
    );
};

export default HomePage;
