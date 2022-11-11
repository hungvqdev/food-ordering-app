import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../../actions/pizzaActions";
import { Topbar, Sidebar, Loading, Error } from "../../../components";
import "./Productlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const Productlist = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item._id !== id));
    console.log(id)
  };

  const handleSelectDelete = (id) => {
    console.log(id)
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
            <Link to={"/product/" + params.row._id}>
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
        <h1 className="headtext__product">Danh sách sản phẩm</h1>
        <div>
        <Link to="/add-product">
            <button className="productAddButton" style={{marginRight: '10px'}} onClick={() => handleSelectDelete()}>Thêm sản phẩm</button>
          </Link>
          <button className="productAddButton" style={{marginRight: '40px', backgroundColor:'red'}}>Xóa mục chọn</button>
          
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
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Productlist;
