import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  const location = useLocation()
  const path =location .pathname.includes("login") || location.pathname.includes('register');
  return (
    <div>
      {path || <Navbar></Navbar>}
      <Outlet></Outlet>
      {path || <Footer></Footer>}
    </div>
  );
};

export default Main;
