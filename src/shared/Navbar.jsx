import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartModel from "../page/Shop/CartModel";


const navItem = [
  { name: "Home", path: "/" },
  { name: "Shop ", path: "/shop" },
  { name: "Pages", path: "/privacy" },
  { name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleTogol = () => setisMenuOpen(!isMenuOpen);

  // cart fun
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setisCartOpen] = useState(false);

  const handleCardTogole = () => {
    setisCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className=" bg-[#f4e5ec] my-3 border-black h-16 ">
        <nav className="flex items-center  justify-between">
          <ul className=" sm:flex hidden mb-10 items-center gap-7">
            {navItem.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name} </Link>
              </li>
            ))}
          </ul>

          {/* togol menu */}
          <div className=" flex mb-10items-center sm:hidden">
            <button
              onClick={handleTogol}
              className="flex items-center px-3 py-3 rounded hover:text-gray-900 "
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* logo */}
          <div className="text-2xl mb-10 flex font-semibold">
            <Link to={"/"}>E-shop</Link>
          </div>

          {/* icon */}
          <div className="flex mb-10 gap-6 items-center">
            <span>
              <Link to={"/search"}>
                <SearchIcon color="primary" />
              </Link>
            </span>
            <span>
              <button onClick={handleCardTogole}>
                <Link>
                  {" "}
                  <Badge badgeContent={`${products.length}`} color="secondary">
                    <LocalMallIcon color="primary" />{" "}
                  </Badge>
                </Link>
              </button>
            </span>
            <span>
              <Link to={'/login'}>
                <AccountCircleIcon color="primary" />
              </Link>
            </span>
          </div>

          {/* mobile size */}
          {isMenuOpen && (
            <ul className=" md:hidden fixed  top-[98px] left-0 w-full h-auto pb-8 bg-gray-50 shadow-sm z-50 ">
              {navItem.map((item, index) => (
                <li key={index} className=" px-4">
                  <NavLink
                    onClick={() => setisMenuOpen(false)}
                    to={`${item.path}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-5 px-4">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </ul>
          )}
        </nav>
      </header>
      {isCartOpen && (
        <CartModel
          isClose={handleCardTogole}
          isOpen={isCartOpen}
          products={products}
        />
      )}
    </>
  );
};

export default Navbar;
