import { TopHeader, Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div className="w-full">
            <TopHeader />
            <Header />
            <div className="w-full h-full px-[135px] pt-[40px] max-sm:px-[2px] max-sm:pt-[5px] scroll-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default HomePageLayout;
