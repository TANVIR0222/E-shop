import { Link, useParams } from "react-router-dom";
import products from "../../../data/products.json";
import Rating from "../../../components/Rating";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h1 className="section__header  capitalize">single Product Page</h1>

        <div className="section__subheader items-center space-x-2">
          <span>
            <Link to={"/"}>Home</Link>
            <i className="ri-arrow-right-s-line"></i>
          </span>
          <span>
            <Link to={"/shop"}>Shop</Link>
            <i className="ri-arrow-right-s-line"></i>
          </span>
          <span>Products name </span>
        </div>
      </section>

      <section className="section__container mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* product ing */}
          <div className="w-full md:w-1/2 ">
            <img
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" rounded-md w-full h-auto"
            />
          </div>
          

          {/*  */}
          <div className="md:w:1/2 w-full ">
            <h3 className="text-3xl font-medium mb-4">Product Name </h3>
            <p className="text-xl text-primary mb-4" >$100 <s>$130</s> </p>
            <p className="text-gray-400 font-medium mb-4" >This is an Products description</p>


            {/* products info */}
            <div className="">
                <p><strong>Category : </strong> accessories</p>
                <p><strong>color : </strong> blue</p>
                <div className=" flex items-center gap-4">
                    <strong>Rating : </strong>
                    <Rating rating={'4'} />
                </div>

                <button className=" px-6 py-3 bg-blue-600 text-white rounded" >Add to card</button>

            </div>

            {/* display reviews */}
            {/* TODO : work api  */}
            <section className="section__container ">

            </section>

          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
