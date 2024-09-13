import { useState } from "react";

import ProductData from "../../data/products.json";
import ProductCarts from "../Shop/ProductCarts";

const Searchs = () => {
    // search 
  const [serachQuery, setserachQuery] = useState("");
  
  const [filterdProduct, setfilterdProduct] = useState(ProductData);

  // name ar description anujayi search

  const handleSearch = () => {
    const query = serachQuery.toLowerCase();
    const filtered = ProductData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setfilterdProduct(filtered);
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h1 className="section__header  capitalize">Search Page</h1>
        <p className="section__subheader">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a sit
          quis, magnam illo provident corporis? Quasi, rerum voluptatem.
        </p>
      </section>

      {/*  search sections  */}

      <section className="section__container  ">
        <div className=" ">
          <label className="input-bordered flex items-center gap-2">

            <input
              type="text"
              value={serachQuery}
              onChange={(e) =>  setserachQuery(e.target.value)}
              className="w-full h-11 rounded focus:outline-none p-2 border "
              placeholder="Search for Product . . . ."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 -ml-10 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <button
            onClick={handleSearch}
             className="ml-5 search-button py-2 px-8 bg-blue-800 text-white rounded ">search</button>
          </label>

        </div>
        <ProductCarts products={filterdProduct} />

      </section>
    </>
  );
};

export default Searchs;
