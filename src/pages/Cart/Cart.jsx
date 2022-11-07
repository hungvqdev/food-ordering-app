import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../../actions/cartActions";
import { SubHeading } from "../../components";
import Checkout from "../../components/Checkout/Checkout";
import { Link } from "react-router-dom";
import { OrderSuccess } from "../../components/Alert/Success";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const userState = useSelector((state) => state.loginUserReducer.currentUser);
  var totalCart = cartItems.reduce((x, item) => x + item.price, 0);
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { success } = orderState;
  const dispatch = useDispatch();

  
  if (cartItems.length > 0) {
    return (
      <div className="cart_bg p-5">
        <div className="container">
          <SubHeading />
          <div className="cart_p " style={{ fontSize: "27px" }}>
            Giỏ hàng của bạn{" "}
          </div>
            <div className="row justify-content-center ">
              <div className="col-12">
                {cartItems.map((item) => {
                  return (
                    <div className="row flex-container border border-4 mt-2 m-auto">
                      <div className="col-12 col-md-4 col-lg-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid app__wrapper_info cart_img"
                          style={{ height: "160px", width: "160px" }}
                        />
                      </div>
                      <div className="col-12 col-md-8 col-lg-5 d-flex align-items-center justify-content-center">
                        <p className="cart_p cart_item_title">
                          {item.name} [{item.varient}]
                        </p>
                      </div>
                      <div className="col-6 col-md-6 col-lg-2 cart_item_p">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item page-link">
                              <FaMinus
                                onClick={() => {
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity - 1,
                                      item.varient
                                    )
                                  );
                                }}
                              />
                            </li>
                            <li className="page-item page-link">
                              {item.quantity}
                            </li>
                            <li className="page-item page-link">
                              <FaPlus
                                onClick={() => {
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity + 1,
                                      item.varient
                                    )
                                  );
                                }}
                              />
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="col-4 col-md-4 col-lg-2">
                        <p className="cart_p cart_item_p">{item.price}.000đ</p>
                      </div>
                      <div className="col-2 col-md-2 col-lg-1 cart_none">
                        <p className="cart_p cart_item_p">
                          <FaTrash
                            onClick={() => {
                              dispatch(deleteFromCart(item));
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="col-12 mt-3">
                <div className="cart_p " style={{ float: "right" }}>
                  Tổng tiền:{" "}
                  <span
                    style={{ fontSize: "27px", color: "var(--color-golden)" }}
                  >
                    {totalCart}.000d
                  </span>{" "}
                </div>
              </div>

              <div className="col-12 mt-3">
                {userState === null ? (
                  <Link to="/login">
                    <div className="custom__button" style={{ float: "right" }}>
                      Đăng nhập và Thanh toán
                    </div>
                  </Link>
                ) : (
                  <Checkout totalCart={totalCart} />
                )}
              </div>
            </div>    
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart_bg p-5">
        <div className="container">
          <div className="cart_p ">
            Rất tiếc!!! Bạn không có sản phẩm ở đây.
          </div>
          <a href="/#menu">
            <button className="custom__button mt-2">
              Hãy cùng khám phá thực đơn
            </button>
          </a>
        </div>
      </div>
    );
  }
};

export default Cart;
