import { TopHeader, Header, Footer } from "../../components";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div className="w-full">
      <TopHeader />
      <Header />
      <div className="w-full h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
