import React from "react";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";


const OrderSuccess = () => {
  return (
    <div className=" text-center cart_bg d-flex flex-column align-items-center justify-content-center orders_bg_success">
      <FcApproval
        className="mt-3 mb-4"
        style={{ width: "80px", height: "80px" }}
      />
      <span className="headtext_order "> Thanh toán thành công !</span>
      <br />
      <Link to="/orders">
        <button className="custom__button">Xem đơn hàng -></button>
      </Link>
      <a href="/#menu" className=" mt-3 order_button border p-2">  Tiếp tục mua hàng</a>
    </div>
  );
};

export default OrderSuccess;
