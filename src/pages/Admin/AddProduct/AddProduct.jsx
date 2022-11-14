import React from "react";
import axios from "axios";
import { Topbar, Sidebar } from "../../../components";
import "./AddProduct.css";
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

const AddProduct = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useForm();




  const onSubmit = async ( product) => {
    try {
        await axios.post('http://localhost:8000/api/admin/addproduct', product)
        window.location.href='/admin/products'
    } catch (error) {
        console.log(error)
    }
  }

  
  return (
    <>
      <Topbar />
      <div className="app_admin">
        <Sidebar />
        <div className="addproduct ">      
            <h1 className="headtext__admin">Tạo sản phẩm mới</h1> 
          <div className="addContainer">
            
              <form onSubmit={handleSubmit(onSubmit)}>
                
                  <div className="addItem">
                    <label>Tên sản phẩm</label>
                    <input
                      type="text"
                      placeholder=""
                      className="addInput"
                      {...register("name")}
                    />
                  </div>
                  <p className="valid_error">{errors.name?.message}</p>
                  <div className="addItem">
                    <label>Loại</label>
                    <input
                      type="text"
                      placeholder=""
                      className="addInput"
                      {...register("category")}
                    />
                  </div>
                  <p className="valid_error">{errors.category?.message}</p>
                  <div className="addItem">
                    <label>Ảnh</label>
                    <input
                      type="text"
                      placeholder=""
                      className="addInput"
                      {...register("image")}
                    />
                  </div>
                  <p className="valid_error">{errors.image?.message}</p>
                  <div className="addItem ">
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
                        {...register("large")}
                      />
                    </div>
                  </div>
                  <p className="valid_error">{errors.large?.message}</p>
                  <div className="addItem">
                    <label>Mô tả</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("description")}></textarea>
                  </div>
                  <p className="valid_error">{errors.description?.message}</p>
                
                <button className="addButton" type="submit">Tạo mới</button>
              </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
