import { TopHeader, Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div className="w-full">
            <TopHeader />
            <Header />
            <div className="w-full h-full px-6 pt-6">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default HomePageLayout;
