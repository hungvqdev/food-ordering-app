import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../actions/orderActions";
import { SubHeading, Navbar } from "../../components";
import "./Orders.css";
import Loading from "../../components/Alert/Loading";
import { images } from "../../constants";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;
  console.log(orders);
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="orders_bg p-5">
        <div className="container">
          <SubHeading />
          <div className="cart_p mb-5" style={{ fontSize: "27px" }}>
            Đơn hàng của bạn{" "}
          </div>
          <div>
            {loading && <Loading style={{ width: "100px", height: "100px" }} />}
            {error && (
              <div className="p__cormorant text-center mt-4">
                Có lỗi xảy ra!!!{" "}
              </div>
            )}
            {orders &&
              orders.map((order) => {
                return (
                  <div className="border border-2 m-2 row">
                    <div className=" border-bottom orders_p title_bg">
                      Mã đơn hàng:{" "}
                      <span className="orders_span">{order._id}</span>
                    </div>
                    <div className="col-md-6 col-12 d-flex align-self-center  align-content-start flex-wrap">
                      {order.orderItems.map((item) => {
                        return (
                          <>
                            <div className="d-flex p-1 ">
                              <div className="orders_p d-flex align-items-center  ">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="img-fluid app__wrapper_info  img_order"
                                />
                                {item.name} [{item.varient}] x {item.quantity}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>

                    <div
                      id="info_order"
                      className="col-md-6 col-12 orders_p_address p-3 order_border_top"
                    >
                      <p>
                        Thời gian đặt hàng:{" "}
                        <span>{order.createdAt.substring(0, 10)}</span>
                      </p>
                      <p>
                        Người nhận: <span>{order.name}</span>{" "}
                      </p>
                      <p>
                        Dịa chỉ nhận hàng:{" "}
                        <span>
                          {order.shippingAddress.street},
                          {order.shippingAddress.city}
                        </span>
                      </p>
                      <p>
                        Phương thức thanh toán:{" "}
                        <img
                          src={images.visa}
                          alt="Visa, Master"
                          style={{ width: "25px", height: "25px" }}
                        />{" "}
                        <span>Thẻ quốc tế (Visa, Master ...)</span>{" "}
                      </p>
                      <p>
                        Tổng tiền: <span>{order.orderAmount}.000đ</span>{" "} 
                      </p>
                      <p>Trạng thái đơn hàng: {order.isDelivered === false ? <div className="status_order border bg-warning">Đang giao đến</div> : <div className="status_order border bg-success text-white">Đã hoàn thành</div>}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
