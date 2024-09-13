import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  const path = useLocation().pathname.includes("login") || useLocation().pathname.includes('register');
  return (
    <div>
      {path || <Navbar></Navbar>}
      <Outlet></Outlet>
      {path || <Footer></Footer>}
    </div>
  );
};

export default Main;
