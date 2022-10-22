import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../actions/cartActions";

const MenuItem = ({ pizza }) => {
  const [quantity, setQuanity] = useState(1);
  const [varient, setVarient] = useState("small");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  function addToCarts() {
    dispatch(addToCart(pizza, quantity, varient))
  }

  return (
    <div className="shadow-lg p-3 mb-5  rounded m-3">
      <div onClick={handleShow}>
        <p className="p__cormorant color_p text-center border border-light border-3 m-1">{pizza.name}</p>
        <img
          src={pizza.image}
          alt={pizza.name}
          className="img-fluid app__wrapper_info m-auto "
          style={{ height: "280px", width: "280px" }}
        />
      </div>

      <div className="border border-light border-3 p-1 mt-">
        <div className="d-flex">
          <div className="w-100 m-1">
            <p className="p__opensans mt-2 p__menuItem">Kích cỡ</p>
            <select
              className="form-select"
              value={varient}
              onChange={(e) => {
                setVarient(e.target.value);
              }}
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="w-100 m-1">
            <p className="p__opensans mt-2 p__menuItem">Số Lượng</p>

            <select
              className="form-select"
              value={quantity}
              onChange={(e) => {
                setQuanity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className=" m-1">
            <p className="p__cormorant color_p mt-2">
              Giá: {pizza.prices[0][varient] * quantity}đ
            </p>
          </div>

          <div className="  m-1">
            <button type="button" className="custom__button" onClick={addToCarts}>Thêm vào giỏ</button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal__Menuitem ">
        <Modal.Header closeButton>
          <Modal.Title>
            <p
              className="p__cormorant color_p mb-0"
              style={{ color: "#222222" }}
            >
              {pizza.name}
            </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt={pizza.name}
            className="img-fluid app__wrapper_info m-auto"
            style={{ height: "350px", width: "350px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <p
            className="p__opensans m-auto mt-1 mb-1"
            style={{ color: "#222222" }}
          >
            {pizza.description}
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MenuItem;
