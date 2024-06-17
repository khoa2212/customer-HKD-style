import { createBrowserRouter } from 'react-router-dom';
import { HomePageLayout } from './layouts';
import { HomePage, LoginPage, SignUpPage } from './pages';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const router = createBrowserRouter([
    {
        element: <HomePageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/my-account/cart/checkout',
                element: <CheckoutPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/sign-up',
        element: <SignUpPage />,
    },
]);

export default router;
