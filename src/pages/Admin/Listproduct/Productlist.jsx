import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../../actions/pizzaActions";
import { Topbar, Sidebar, Loading, Error } from "../../../components";
import "./Productlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";


const Productlist = () => {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  const handleDelete = async (productId) => { 
    try {
      await axios.delete(`http://localhost:8000/api/admin/deleteproduct/${productId}`)
      dispatch(getAllPizzas());
    } catch (error) {
       console.log(error)
    }  
  };

  const [itemId, setItemId] = useState()

  const handleSelect = (productId) => {    
    setItemId(productId)
  }
const handleSelectDelete = async () => {
  try {
    await axios.post('http://localhost:8000/api/admin/deleteselect', itemId)
    dispatch(getAllPizzas());
  } catch (error) {
     console.log(error)
  }  
}

  const columns = [
    { field: "_id", headerName: "Mã sản phẩm", width: 250 },
    {
      field: "product",
      headerName: "Danh sách sản phẩm",
      width: 550,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Hoạt động",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/products/" + params.row._id}>
              <button className="productListEdit">Sửa</button>
            </Link>
            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              {" "}
              Xóa
            </button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="app_admin">
        <Sidebar />
        <div className="productList mt-5">
        
        <div className="d-flex justify-content-between align-items-center">
        <h1 className="headtext__admin">Danh sách sản phẩm</h1>
        <div>
        <Link to="/admin/add-product">
            <button className="productAddButton" style={{marginRight: '10px'}} >Thêm sản phẩm</button>
          </Link>
          <button className="productAddButton" style={{marginRight: '40px', backgroundColor:'red'}} onClick={() => handleSelectDelete()}>Xóa mục chọn</button>
          
        </div>
        
        </div>
        
   
          {loading && <Loading />}
          {error && <Error error="Có lỗi xảy ra" />}
          {pizzas && (
            <DataGrid
              rows={pizzas}
              getRowId={(row) => row._id}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
              onSelectionModelChange={item => handleSelect(item)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Productlist;
