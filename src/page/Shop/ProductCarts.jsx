import { Link } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Rating from "../../components/Rating";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/features/cart/cartSlice";
const ProductCarts = ({ products }) => {

  const dispatch = useDispatch();

  const handleAddToCard = (product) =>{
    dispatch(addToCard(product))
  }

  return (
    <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className=" relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className=" max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-200"
              />
            </Link>

            <div className=" hover:block absolute top-3 r">
            <button
            onClick={(e) =>{
              e.stopPropagation();
              handleAddToCard(product)
            }}
            >
            <LocalGroceryStoreIcon
                color="white"
                className="bg-primary text-white p-1 hover:bg-primary-dark"
              />
            </button>
            </div>
          </div>

          {/* product dec */}
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              {product?.price}{" "}
              {product?.oldPrice ? <s>{product?.oldPrice}</s> : null}{" "}
            </p>
            <Rating rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarts;
