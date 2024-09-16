import { useState } from "react";
import ProductCarts from "./ProductCarts";
import ShopingFiltering from "./ShopingFiltering";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const filters = {
  category: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  color: ["all", "black", "red", "gold", "blue", "silver", "beige", "grren"],
  priceRange: [
    { lable: "Under $50 ", min: 0, max: 50 },
    { lable: "$50 - $100 ", min: 50, max: 100 },
    { lable: "$100 - $200 ", min: 100, max: 200 },
    { lable: "$200  and  above ", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  })

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  const { category, color, priceRange } = filterState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  const {
    data: { products = [], totalpage = 0, totalProduct = 0 } = {}, // Ensure default values
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "", // Use empty string for better API handling
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice, // Handle NaN values correctly
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productPerPage,
  });

  //   clear the filters
  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  if (isLoading) return <div className="">Loading.........</div>;
  if (error) return <div className="">Error Loading Product </div>;

  return (
    <>
      <section className="section__container bg-primary-light">
        <h1 className="section__header  capitalize">Shop</h1>
        <p className="section__subheader">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a sit
          quis, magnam illo provident corporis? Quasi, rerum voluptatem.
        </p>
        {/*  */}
      </section>

      <section className="section__container">
        <div className=" flex flex-col md:flex-row md:gap-16 gap-8">
          {/* left side */}
          <div className="">
            <ShopingFiltering
              filters={filters}
              filterState={filterState}
              setFilterState={setFilterState}
              clearFilters={clearFilters}
            />
          </div>

          {/* right side */}
          <div className="">
            <h1 className=" text-xl font-medium mb-5">
              Product Available: {products?.length}
            </h1>
            <ProductCarts products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
