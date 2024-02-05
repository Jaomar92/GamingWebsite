import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../common";
import Menu from "../common/Menu";
import Carousel from "../common/Carousel";

const BaseLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="container">
          <Carousel />
          <div className="flex items-stretch">
            <div className="w-[300px]">
              <Menu />
            </div>
            <div className="w-full ml-5">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
