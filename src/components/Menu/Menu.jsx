import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../actions/pizzaActions";
import { SubHeading, MenuItem } from "..";
import Loading from "../Alert/Loading";

const Menu = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;


  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);


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
          <Loading style={{width: '100px', height: '100px'}} />
        ) : error ? (
          <div className="p__cormorant text-center mt-4">Có lỗi xảy ra!!! </div>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={pizza._id}>
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
