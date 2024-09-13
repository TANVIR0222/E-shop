import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Categories from "../page/categorie/Categories";
import Searchs from "../page/search/Searchs";
import ShopPage from "../page/Shop/ShopPage";
import SingleProduct from "../page/Shop/ProductDetails/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path:'/categories/:categoryName',
          element : <Categories/>,
        },
        {
          path:'/search',
          element : <Searchs />,
        },
        {
          path:'/shop',
          element : <ShopPage />,
        },
        {
          path:'/shop/:id',
          element : <SingleProduct />,
        },
        
    ]
  },
]);
