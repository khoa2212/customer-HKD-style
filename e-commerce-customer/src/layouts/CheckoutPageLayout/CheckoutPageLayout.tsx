import { TopHeader, Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

const CheckoutPageLayout = () => {
    return (
        <div className="w-full">
            <TopHeader />
            <Header />
            <div className="w-full h-full p-1 lg:p-6">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default CheckoutPageLayout;
