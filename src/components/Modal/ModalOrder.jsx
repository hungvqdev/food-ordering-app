import React from "react";
import Modal from "react-bootstrap/Modal";
import { images } from "../../constants";
import "./Modal.css";

const ModalOrder = ({ show, closeModal, info }) => {
  console.log(info);
  return (
    <>
      <Modal
        show={show}
        onHide={closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
        size="xl"
        key={info._id}
      >
        <Modal.Header closeButton>
          <span className="headtext_modal">Mã đơn hàng</span>: &nbsp;{" "}
          <span className="headtext_modal_span">{info._id}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className=" col-md-6  d-flex align-self-center  align-content-start flex-wrap">
              {info &&
                info?.orderItems?.map((item) => {
                  return (
                    <>
                      <div className="d-flex p-1 ">
                        <div className="modal_p d-flex align-items-center  ">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid app__wrapper_info  img_modal"
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
                className="col-md-6  modal_p_address p-3 order_border_top"
              >
                <p>
                  Thời gian đặt hàng:{" "}
                  <span>{info?.createdAt?.substring(0, 10)}</span>
                </p>
                <p>
                  Người nhận: <span>{info.name}</span>{" "}
                </p>
                <p>
                  Dịa chỉ nhận hàng:{" "}
                  <span>
                    {info?.shippingAddress?.street},{info?.shippingAddress?.city}
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
                  Tổng tiền: <b>{info.orderAmount}.000đ</b>{" "}
                </p>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalOrder;
