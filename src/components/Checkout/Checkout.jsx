import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../../actions/orderActions";


const Checkout = ({ totalCart }) => {
  const dispatch = useDispatch()
  const tokenHander = (token) => {
    console.log(token);
    console.log(totalCart, 'totalcart');
    dispatch(placeOrder(token, totalCart))
  };

  return (
    <div>
      <StripeCheckout
        amount={totalCart * 1000}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51LleMUFld5FTAPzb7Bu4m9ycsu0bz39Oh2kC8VNAO9FMRak7zMMw0kfJ8YM43MjXUGY1GJEBOLvF29c7hDHaqDij008efTFyKn"
        currency="VND"
      >
        <button
          type="button"
          className="custom__button"
          style={{ float: "right" }}
        >
          Thanh toán
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
