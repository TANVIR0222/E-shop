import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCarts from "../Shop/ProductCarts";


const Categories = () => {
  const { categoryName } = useParams();
  const [filterdProduct, setFilterdProduct] = useState([]);
  useEffect(() => {
    const filterd = products.filter(
      (product) => product?.category === categoryName.toLowerCase()
    );
    setFilterdProduct(filterd);
  }, []);

  useEffect(() => {
    // window.scroll(0,0)
  }, []);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h1 className="section__header  capitalize">{categoryName}</h1>
        <p className="section__subheader">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero a sit
          quis, magnam illo provident corporis? Quasi, rerum voluptatem.
        </p>
        {/*  */}
      </section>
      <div className="section__container">
        <ProductCarts products={filterdProduct} />
        </div>
    </>
  );
};

export default Categories;
