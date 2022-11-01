import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../actions/cartActions";
import './MenuItem.css'

const MenuItem = ({ pizza }) => {
  const [quantity, setQuanity] = useState(1);
  const [varient, setVarient] = useState("small");
  const dispatch = useDispatch()
  function addToCarts() {
    dispatch(addToCart(pizza, quantity, varient))
    
  }

  return (
    <div className="shadow-lg p-3 mb-5  rounded m-3">
      <div>
        <p className="p__cormorant color_p text-center border border-light border-3 m-1">{pizza.name}</p>
        <div className="box_item">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="img-fluid app__wrapper_info m-auto "
          style={{ height: "280px", width: "280px" }}
        />
        <div className="des_item">{pizza.description}</div>
        </div>
        
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
    </div>
  );
};

export default MenuItem;
