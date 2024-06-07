import { TopHeader, Header } from "../../components";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div className="w-full">
      <TopHeader />
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePageLayout;
