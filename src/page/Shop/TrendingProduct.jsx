import { useState } from "react";
import ProductCarts from "./ProductCarts";
import products from "../../data/products.json";
import { Button } from "@mui/material";

const TrendingProduct = () => {
  const [visibleProduct, setVisibleProduct] = useState(8);

  const loadMoreProduct = () => {
    setVisibleProduct((prevCount) => prevCount + 4);
  };

  return (
    <section className="section__container  product__container">
      <h1 className="section__header">Trending Product</h1>
      <p className="section__subheader  ">
        {" "}
        Discover the latest and greatest products from our store
      </p>

      {/* product card */}
      <ProductCarts products={products.slice(0,visibleProduct)} />

      {/* more op */}
      <div className="product__btn">
      {visibleProduct < products.length && ( <Button  variant="contained"  onClick={loadMoreProduct}>
        Load  More
      </Button> )

}
      </div>


    </section>
  );
};

export default TrendingProduct;
