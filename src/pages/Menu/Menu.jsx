import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../actions/pizzaActions";
import { data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const Menu = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className="app__bg section__padding " id="menu">
      <div className="app__Menu-title  flex__center text-center">
        <div className="">
          <SubHeading title="Thực đơn phù hợp với bạn" />
          <h1 className="headtext__cormorant">Today&apos;s Special</h1>
        </div>
      </div>
      <div className="row">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12"   key={pizza._id}>
                    <MenuItem pizza={pizza} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
