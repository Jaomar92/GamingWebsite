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
          <div className="grid grid-cols-12 my-5">
            <div className="md:col-span-2 hidden md:block">
              <Menu />
            </div>
            <div className="col-span-12 md:col-span-10">
              <div className="container">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
