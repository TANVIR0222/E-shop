import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";

const OrderSummary = () => {

  const dispatch  = useDispatch();


  const product = useSelector((store) => store.cart.products);
  const {texRate,tax,totalPrice,grandTotal,selectedItem} = useSelector((store) => store.cart);


  const handleCart = () =>{
    dispatch(clearCart());
  }
  return (
    <div className=" bg-primary-light  mt-5 rounded text-base">
      <div className="px-4 py-4 space-y-5">
        <h2 className="text-center text-lg font-semibold mb-4">
          Order Summary
        </h2>
        <p className=" text-text-dark mt-2" >Selected Items : {selectedItem} </p>
        <p>Total Price : ${totalPrice.toFixed(2)}</p>
        {/* sudu matro 2 */}
        <p>Tax : ({texRate * 100}%) : ${tax.toFixed(2)} </p>
        <h3 className=" font-bold" >Grand Total : ${grandTotal.toFixed(2)}</h3>

        <div className=" px-4 mb-6">
            <button
            onClick={(e) => {
              e.preventDefault()
              handleCart()
            } }
             className="bg-primary px-3 flex items-center justify-between mb-4 py-2 text-white mt-2   rounded-md"> <span className="mr-2">Clear cart</span><i className="ri-delete-bin-5-fill px-2"></i> </button>
            <button className="bg-blue-700 px-3 flex items-center justify-between mb-4 py-2 text-white mt-2   rounded-md"> <samp className="mr-2" >Proceed Checkout <i className="ri-bank-card-2-line"></i> </samp> </button>
        </div>
      </div>
    </div> 
  );
};

export default OrderSummary;
