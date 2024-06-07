import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";
import { HomePageLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <HomePageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

export default router;
