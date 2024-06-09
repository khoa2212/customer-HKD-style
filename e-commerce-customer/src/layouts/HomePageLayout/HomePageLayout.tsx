import { TopHeader, Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
// md: từ md trở lên các màn hình to hơn (từ tablet trở lên), còn cái mặc định code md trở xuống (nghĩa là sm, ko bao gồm md)
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
