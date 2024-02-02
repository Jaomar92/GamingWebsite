import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../common";
import Menu from "../common/Menu";
const BaseLayout = () => {
  return (
    <>
      <div className="grid grid-rows-3">
        <Navbar />
        <div className="container">
          <div className="grid grid-cols-5">
            <div className="col-span-1 ">
              <Menu />
            </div>
            <div className="col-span-4">
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
