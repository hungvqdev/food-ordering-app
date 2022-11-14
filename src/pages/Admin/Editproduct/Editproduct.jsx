import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Topbar, Sidebar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getAllPizzas } from "../../../actions/pizzaActions";
import "./Editproduct.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    name: yup.string().required("Hãy nhập tên sản phẩm"),
    category: yup.string().required("Hãy nhập loại sản phẩm"),
    image: yup.string().required("Hãy dán link sản phẩm"),
    description: yup.string().required("Hãy nhập mô tả"),
    small: yup
      .number("Giá sản phẩm phải là số")
      .min(100, "Giá sản phẩm không được dưới 100")
      .max(500, "giá sản phẩm không được lớn hơn 500")
      .required("Hãy nhập giá sản phẩm"),
    medium: yup
      .number("Giá sản phẩm phải là số")
      .min(100, "Giá sản phẩm không được dưới 100")
      .max(500, "giá sản phẩm không được lớn hơn 500")
      .required("Hãy nhập giá sản phẩm"),  
    large: yup
      .number("Giá sản phẩm phải là số")
      .min(100, "Giá sản phẩm không được dưới 100")
      .max(500, "giá sản phẩm không được lớn hơn 500")
      .required("Hãy nhập giá sản phẩm"),
    
  })
  .required();

const Editproduct = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useForm();

  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas } = pizzasState;
  const { productId } = useParams();


  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  const product = pizzas.find(item => item._id === productId)

  const onSubmit = ( product) => {
    dispatch(editProduct(product, productId));
    dispatch(getAllPizzas());
  }

  
  return (
    <>
      <Topbar />
      <div className="app_admin">
        <Sidebar />
        <div className="edit">
         
            <h1 className="headtext__admin">Cập nhật sản phẩm</h1> 
          <div className="editContainer">
            <div className="editShow">
              <div className="editShowTop">
                <img
                  src={product.image}
                  alt=""
                  className="editShowImg"
                />
                <div className="editShowTopTitle">
                  <span className="userShowUsername">{product.name}</span>
                  <span className="userShowUserTitle">{product.category}</span>
                </div>
              </div>
              <div className="editShowBottom">
                <span className="editShowTitle">Kích cỡ - Giá </span>
                <div className="editShowInfo row">
                  {/* <PermIdentity className="userShowIcon" /> */}
                  {product.varients.map((varient) => {
                return <>
                <div className="col-6">{varient}</div>
                  <div className="col-6">{product.prices[0][varient]}</div>
                  </>
              })}
                </div>
                <span className="editShowTitle">Mô tả</span>
                <div className="editShowInfo">
                  {/* <PhoneAndroid className="editShowIcon" /> */}
                  <span className="editShowInfoTitle">{product.description}</span>
                </div>
              </div>
            </div>
            <div className="editUpdate">
              <form className="editUpdateForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="editUpdateLeft">
                  <div className="editUpdateItem">
                    <label>Tên sản phẩm</label>
                    <input
                      type="text"
                      placeholder=""
                      className="editUpdateInput"
                      defaultValue={product.name}
                      {...register("name")}
                    />
                  </div>
                  <p className="valid_error">{errors.name?.message}</p>
                  <div className="editUpdateItem">
                    <label>Loại</label>
                    <input
                      type="text"
                      placeholder=""
                      className="editUpdateInput"
                      defaultValue={product.category}
                      {...register("category")}
                    />
                  </div>
                  <p className="valid_error">{errors.category?.message}</p>
                  <div className="editUpdateItem">
                    <label>Ảnh</label>
                    <input
                      type="text"
                      placeholder=""
                      className="editUpdateInput"
                      defaultValue={product.image}
                      {...register("image")}
                    />
                  </div>
                  <p className="valid_error">{errors.image?.message}</p>
                  <div className="editUpdateItem ">
                    <label>Kích cỡ - Giá</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text titleinput" id="basic-addon1">
                          Nhỏ
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control p_input"
                        aria-describedby="basic-addon1"
                        defaultValue={product.prices[0].small}
                        {...register("small")}
                      />
                    </div>
                    <p className="valid_error">{errors.small?.message}</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text titleinput" id="basic-addon1">
                          Vừa
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control p_input"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        defaultValue={product.prices[0].medium}
                        {...register("medium")}
                      />
                    </div>
                    <p className="valid_error">{errors.medium?.message}</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text titleinput" id="basic-addon1">
                          Lớn
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control p_input"
                        aria-describedby="basic-addon1"
                        defaultValue={product.prices[0].large}
                        {...register("large")}
                      />
                    </div>
                  </div>
                  <p className="valid_error">{errors.large?.message}</p>
                  <div className="editUpdateItem">
                    <label>Mô tả</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={product.description} {...register("description")}></textarea>
                  </div>
                  <p className="valid_error">{errors.description?.message}</p>
                </div>
                <button className="editUpdateButton" type="submit">Thay đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editproduct;
