import Carousel from '../../components/Carousel/Carousel';
import Category from '../../components/Category/Category';
import FlashSells from '../../components/Home/FlashSells';
import { images } from '../../layouts/HomePageLayout/data';

const HomePage = () => {
    return (
        <>
            <div className="flex">
                <Category />
                <Carousel images={images} />
            </div>
            <div className="mt-6">
                <FlashSells />
            </div>
            <div>This month</div>
            <div>Ours product</div>
        </>
    );
};

export default HomePage;
