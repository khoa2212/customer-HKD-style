import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage } from './pages';
import { HomePageLayout } from './layouts';
import CheckoutPageLayout from './layouts/CheckoutPageLayout/CheckoutPageLayout';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const router = createBrowserRouter([
    {
        element: <HomePageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
    {
        element: <CheckoutPageLayout />,
        children: [
            {
                path: '/checkout',
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
