import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "./layouts";
import { HomePage, LoginPage, ProductListPage, SignUpPage } from "./pages";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage";
import UnderConstructionPage from "./pages/UnderConstructionPage/UnderConstructionPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CartPage from "./pages/CartPage/CartPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";

const router = createBrowserRouter([
  {
    element: <HomePageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/my-account/cart/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/*",
        element: <Error404Page />,
      },
      {
        path: "/forbidden",
        element: <ForbiddenPage />,
      },
      {
        path: "/contact",
        element: <UnderConstructionPage />,
      },
      {
        path: "/about",
        element: <UnderConstructionPage />,
      },
      {
        path: "/forgot-password",
        element: <UnderConstructionPage />,
      },
      {
        path: "/manage-account/profile",
        element: <UnderConstructionPage />,
      },
      {
        path: "/manage-account/cart",
        element: <CartPage />,
      },
      {
        path: "/manage-account/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/product-list",
        element: <ProductListPage />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
