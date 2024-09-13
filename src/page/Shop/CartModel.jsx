import { useDispatch } from "react-redux";
import OrderSummary from "./OrderSummary";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";

const CartModel = ({ isClose, isOpen, products }) => {
  const dispatch = useDispatch();

  const handleQuantity = (type, id) => {
    const payload = { id, type };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };

  

  return (
    <div
      className={` fixed z-[1000] inset-0  bg-black bg-opacity-80 transition-opacity ${
        isOpen ? " opacity-100" : " opacity-0 pointer-events-none"
      }`}
      style={{ transition: "opacity 300ms" }}
    >
      <div
        className={` fixed top-0 right-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : " translate-x-full"
        }`}
        style={{
          transition: "transform 300ms cubic-dezier(0.25, 0.45 , 0.45, 0.94)",
        }}
      >
        <div className=" p-4 mt-4">
          {/* close icon  */}
          <div className=" flex items-center justify-between">
            <h2 className="text-lg font-bold">Your Cart</h2>

            <button
              onClick={() => isClose()}
              className=" text-gray-500 hover:text-gray-800"
            >
              <i className="ri-close-large-line bg-black text-white p-1"></i>
            </button>
          </div>
          {/* cart items */}
          <div className="cart-items">
            {products.length === 0 ? (
              <div className="">Your cart is empty</div>
            ) : (
              products.map((product, index) => (
                <div
                  key={index + 1}
                  className=" flee flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-2"
                >
                  <div className=" flex  items-center gap-4">
                    <span className=" mr-4 px-1 bg-primary text-white rounded-full">
                      0{index + 1}{" "}
                    </span>
                    <img
                      src={product.image}
                      alt="order_img"
                      className=" size-12 object-cover"
                    />
                    <div className="">
                      <h2 className="text-sm font-medium">{product.name}</h2>
                      <p>{Number(product.price)}</p>
                    </div>
                    <div className=" flex flex-row md:justify-end items-center mt-2">
                      <button
                        onClick={() => handleQuantity("decrement", product._id)}
                        className=" size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 hover:bg-primary hover:text-white ml-8"
                      >
                        -
                      </button>
                      <span className="px-2 text-center mx-1">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantity("increment", product._id)}
                        className=" px-2 size-6 flex items-center justify-center text-center mx-1 rounded-full bg-gray-200 hover:bg-primary hover:text-white"
                      >
                        +
                      </button>
                      <div className="">
                        <button
                          onClick={(e) => handleRemove(e, product._id)}
                          className=" text-red-400 hover:text-red-700 ml-4 "
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* calcuation */}
          <div className="">{products.length > 0 && <OrderSummary />}</div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
