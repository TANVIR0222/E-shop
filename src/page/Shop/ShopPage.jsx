import { useEffect, useState } from "react";
import productData from "../../data/products.json";
import ProductCarts from "./ProductCarts";
import ShopingFiltering from "./ShopingFiltering";

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
  const [products, setProducts] = useState(productData);
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  // filtering  products
  const applyFilters = () => {
    let filteredProducts = productData;

    // filter by category
    if (filterState.category && filterState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterState.category
      );
    }

    // color filtering
    if (filterState.color && filterState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filterState.color
      );
    }

    // filter by price range
    if (filterState.priceRange) {
      const [minPrice, maxPrice] = filterState.priceRange
        .split("-")
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filterState]);

  //   clear the filters
  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };
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
              Product Available: {products.length}{" "}
            </h1>
            <ProductCarts products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
