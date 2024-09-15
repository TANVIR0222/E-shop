import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartModel from "../page/Shop/CartModel";
import { useLoginUserMutation, useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

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

  // show user login
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  // dropdown menu
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const handledropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  // admin dropdown menu
  const adminDropdownMenu = [
    { lable: "DashBorad", path: "/dashBorad/admin" },
    { lable: "Manage Item", path: "/dashBorad/manage-products" },
    { lable: "All orders", path: "/dashBorad/manage-order" },
    { lable: "Add New Post", path: "/dashBorad/add-new-past" },
  ];

  // user dropdown menu
  const userDropdownMenu = [
    { lable: "DashBorad", path: "/dashBorad" },
    { lable: "Profile", path: "/dashBorad/profile" },
    { lable: "Payments", path: "/dashBorad/payments" },
    { lable: "Orders ", path: "/dashBorad/orders" },
  ];

  // dropdown 
  const dropdownMenu =
    user?.role === "admin" ? [...adminDropdownMenu] : [...userDropdownMenu];



  // logout 
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();
  const handleLogout = async() =>{
    
    try {
      await  logoutUser().unwrap();
      dispatch(logout());
      navigate('/')
      
    } catch (error) {
      console.log(error, 'logout faild');
    }
  }

  return (
    <>
      <header className=" bg-slate-300  border-black h-24">
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
              {user ? (
                <>
                <img
                  onClick={handledropdown}
                  className=" size-7"
                  src={user?.profileImage || "/avatar.png"}
                  alt=""
                />
                {
                  isDropdownOpen && (
                    <div className="absolute md:right top-20 right-0  mt-3 w-48 border border-gray-200 rounded-lg z-20 bg-white p-4 shadow-md">
                      <ul className=" font-medium space-y-4 p-2">
                         {
                          dropdownMenu.map((item,index) =>(
                            <li  key={index}>
                              <Link
                              onClick={()=> setisDropdownOpen(false)}
                               className="dropdown-item" to={`${item.path}`} >{item.lable}</Link>
                            </li>
                          ))
                         }
                         <Link className="nav__icons" onClick={handleLogout} >Logout</Link>
                      </ul>
                    </div>
                  )
                }
                </>
              ) : (
                <Link to={"/login"}>
                  <i className="ri-user-line"></i>
                </Link>
              )}
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
